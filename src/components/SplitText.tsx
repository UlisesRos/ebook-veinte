interface SplitTextProps {
  children: string;
  className?: string;
  wordClassName?: string;
  charClassName?: string;
}

export function SplitText({ children, className = '', wordClassName = '', charClassName = '' }: SplitTextProps) {
  return (
    <span className={`inline-block ${className}`} aria-label={children}>
      {children.split(' ').map((word, wordIndex) => (
        <span
          key={wordIndex}
          className={`word inline-block overflow-hidden mr-[0.25em] last:mr-0 align-bottom pb-[0.1em] ${wordClassName}`}
        >
          {word.split('').map((char, charIndex) => (
            <span
              key={`${wordIndex}-${charIndex}`}
              className={`char inline-block ${charClassName}`}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}
