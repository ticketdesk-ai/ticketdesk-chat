import { useState, useRef, useEffect } from 'react';
import { Mic, MicOff, Square, Play, Pause, Trash2 } from 'lucide-react';
import type { ChatBotConfig } from '../types/widget';

interface AudioRecorderProps {
  onAudioRecorded: (file: File) => void;
  config: ChatBotConfig;
}

export function AudioRecorder({ onAudioRecorded, config }: AudioRecorderProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    return () => {
      // Cleanup on unmount
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const checkPermissions = async (): Promise<boolean> => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      setHasPermission(true);
      return true;
    } catch (error) {
      console.error('Microphone permission denied:', error);
      setHasPermission(false);
      return false;
    }
  };

  const startRecording = async () => {
    const hasAccess = await checkPermissions();
    if (!hasAccess || !streamRef.current) return;

    try {
      audioChunksRef.current = [];

      const mediaRecorder = new MediaRecorder(streamRef.current, {
        mimeType: 'audio/webm;codecs=opus',
      });

      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: 'audio/webm;codecs=opus',
        });
        setAudioBlob(audioBlob);

        // Stop all tracks
        if (streamRef.current) {
          streamRef.current.getTracks().forEach((track) => track.stop());
          streamRef.current = null;
        }
      };

      mediaRecorder.start(100); // Collect data every 100ms
      setIsRecording(true);
      setRecordingTime(0);

      // Start timer
      timerRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };

  const pauseRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === 'recording'
    ) {
      mediaRecorderRef.current.pause();
      setIsPaused(true);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  const resumeRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === 'paused'
    ) {
      mediaRecorderRef.current.resume();
      setIsPaused(false);

      // Resume timer
      timerRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state !== 'inactive'
    ) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setIsPaused(false);

      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  const playAudio = () => {
    if (audioBlob && !isPlaying) {
      const audioUrl = URL.createObjectURL(audioBlob);
      audioRef.current = new Audio(audioUrl);

      audioRef.current.onended = () => {
        setIsPlaying(false);
        URL.revokeObjectURL(audioUrl);
      };

      audioRef.current.play();
      setIsPlaying(true);
    } else if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const sendAudio = () => {
    if (audioBlob) {
      const audioFile = new File([audioBlob], `recording.wav`, {
        type: 'audio/wav',
      });

      onAudioRecorded(audioFile);

      // Reset state
      setAudioBlob(null);
      setRecordingTime(0);
      setIsPlaying(false);
    }
  };

  const cancelRecording = () => {
    if (isRecording) {
      stopRecording();
    }

    setAudioBlob(null);
    setRecordingTime(0);
    setIsPlaying(false);

    // Stop all tracks
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Permission denied state - show as disabled mic button
  if (hasPermission === false) {
    return (
      <button
        type="button"
        onClick={checkPermissions}
        className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
        title="Microphone access denied. Click to retry."
      >
        <MicOff className="h-5 w-5" />
      </button>
    );
  }

  // Recording or preview state - compact inline UI
  if (isRecording || audioBlob) {
    return (
      <div className="flex items-center gap-2">
        {/* Recording indicator */}
        {isRecording && (
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-xs text-gray-600 min-w-[32px]">
              {formatTime(recordingTime)}
            </span>
          </div>
        )}

        {/* Preview state */}
        {audioBlob && (
          <div className="flex items-center gap-1">
            <button
              onClick={playAudio}
              className="p-1 text-gray-600 hover:text-gray-800 transition-colors"
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </button>
            <span className="text-xs text-gray-600 min-w-[32px]">
              {formatTime(recordingTime)}
            </span>
          </div>
        )}

        {/* Control buttons */}
        <div className="flex items-center gap-1">
          {isRecording && (
            <>
              <button
                onClick={isPaused ? resumeRecording : pauseRecording}
                className="p-1 text-gray-600 hover:text-gray-800 transition-colors"
                title={isPaused ? 'Resume' : 'Pause'}
              >
                {isPaused ? (
                  <Play className="h-4 w-4" />
                ) : (
                  <Pause className="h-4 w-4" />
                )}
              </button>
              <button
                onClick={stopRecording}
                className="p-1 text-red-600 hover:text-red-800 transition-colors"
                title="Stop recording"
              >
                <Square className="h-4 w-4" />
              </button>
            </>
          )}

          {audioBlob && (
            <>
              <button
                onClick={sendAudio}
                style={{ backgroundColor: config.color }}
                className="px-2 py-1 text-white text-xs rounded hover:opacity-90 transition-opacity"
                title="Send audio"
              >
                Send
              </button>
              <button
                onClick={cancelRecording}
                className="p-1 text-gray-600 hover:text-red-600 transition-colors"
                title="Delete recording"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  // Default mic button
  return (
    <button
      type="button"
      onClick={startRecording}
      className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
      title="Record audio message"
    >
      <Mic className="h-5 w-5" />
    </button>
  );
}
