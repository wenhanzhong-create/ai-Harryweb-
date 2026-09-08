import { cn } from '../../utils/cn';

const GlassCard = ({
  children,
  className = '',
  elevated = false,
  interactive = false,
  ...props
}) => {
  const baseClasses = 'rounded-xl p-6 glass-sheen';
  const glassClasses = elevated ? 'glass-elevated' : 'glass-panel';
  const interactiveClasses = interactive ? 'glass-glow-interactive cursor-pointer' : '';

  return (
    <div
      className={cn(baseClasses, glassClasses, interactiveClasses, className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
