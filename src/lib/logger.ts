type LogLevel = 'info' | 'warn' | 'error' | 'debug';

interface LogContext {
  [key: string]: unknown;
}

/**
 * A structured logging utility that provides consistent logging across the application.
 * In development, it prints readable colored logs.
 * In production, it prints structured JSON logs to stdout/stderr.
 */
export const logger = {
  log(level: LogLevel, message: string, context?: LogContext) {
    const timestamp = new Date().toISOString();

    const logEntry = {
      timestamp,
      level,
      message,
      ...context,
    };

    if (process.env.NODE_ENV === 'development') {
      const colors = {
        info: '\x1b[32m',
        warn: '\x1b[33m',
        error: '\x1b[31m',
        debug: '\x1b[34m',
      };
      const reset = '\x1b[0m';
      const color = colors[level] || '';

      const consoleMethod = level === 'debug' ? 'log' : (level as keyof Console);
      const method = typeof console[consoleMethod] === 'function'
        ? (console[consoleMethod] as Function)
        : console.log;

      method(
        `${color}[${timestamp}] ${level.toUpperCase()}:${reset} ${message}`,
        context ? context : ''
      );
    } else {
      const output = JSON.stringify(logEntry);
      if (level === 'error') {
        console.error(output);
      } else if (level === 'warn') {
        console.warn(output);
      } else {
        console.log(output);
      }
    }
  },

  info(message: string, context?: LogContext) {
    this.log('info', message, context);
  },

  warn(message: string, context?: LogContext) {
    this.log('warn', message, context);
  },

  error(message: string, context?: LogContext) {
    this.log('error', message, context);
  },

  debug(message: string, context?: LogContext) {
    this.log('debug', message, context);
  },
};

export default logger;
