import React from "react";

/**
 * UI Component Library
 * Reusable components with futuristic terminal/cyberpunk aesthetic
 */

// ===== PANEL =====
// Main container with neon border and corner accents
export const TronPanel = ({
  children,
  className = "",
  glowIntensity = "normal", // "subtle", "normal", "intense"
  animated = false,
  cornerAccents = true,
  ...props
}) => {
  const glowStyles = {
    subtle: "shadow-[0_0_10px_rgba(255,0,0,0.15)]",
    normal: "shadow-[0_0_20px_rgba(255,0,0,0.25),0_0_40px_rgba(255,0,0,0.1)]",
    intense: "shadow-[0_0_30px_rgba(255,0,0,0.4),0_0_60px_rgba(255,0,0,0.2)]",
  };

  return (
    <div
      className={`
        relative bg-black/80 backdrop-blur-sm
        border border-red-500/40
        ${glowStyles[glowIntensity]}
        ${animated ? "animate-[neonPulse_3s_ease-in-out_infinite]" : ""}
        transition-all duration-300
        hover:border-red-500/60 hover:shadow-[0_0_30px_rgba(255,0,0,0.35)]
        ${className}
      `}
      {...props}
    >
      {cornerAccents && (
        <>
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500/70" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-500/70" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-500/70" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500/70" />
        </>
      )}
      {children}
    </div>
  );
};

// =====  BUTTON =====
// Angular button with neon glow effects
export const TronButton = ({
  children,
  variant = "primary", // "primary", "secondary", "ghost"
  size = "md", // "sm", "md", "lg"
  icon,
  iconPosition = "right",
  className = "",
  ...props
}) => {
  const variants = {
    primary: `
      bg-red-600/20 border-2 border-red-500/60
      text-red-100 font-medium
      hover:bg-red-600/40 hover:border-red-400
      hover:shadow-[0_0_20px_rgba(255,0,0,0.5),0_0_40px_rgba(255,0,0,0.25)]
      active:bg-red-600/50
    `,
    secondary: `
      bg-black/60 border border-red-500/40
      text-gray-200
      hover:bg-red-900/30 hover:border-red-500/60
      hover:shadow-[0_0_15px_rgba(255,0,0,0.3)]
    `,
    ghost: `
      bg-transparent border border-red-500/30
      text-red-400
      hover:bg-red-500/10 hover:border-red-500/50
      hover:text-red-300
    `,
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`
        relative inline-flex items-center justify-center gap-2
        font-mono uppercase tracking-wider
        transition-all duration-300
        clip-path-angular
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      style={{
        clipPath:
          "polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px))",
      }}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="w-5 h-5">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="w-5 h-5">{icon}</span>
      )}
    </button>
  );
};

// =====  CARD =====
// Card component with circuit pattern and glow
export const TronCard = ({
  children,
  title,
  subtitle,
  headerExtra,
  className = "",
  hoverable = true,
  ...props
}) => {
  return (
    <div
      className={`
        relative group
        bg-gradient-to-b from-black/90 to-gray-950/90
        border border-red-500/30
        overflow-hidden
        transition-all duration-300
        ${hoverable ? "hover:border-red-500/60 hover:shadow-[0_0_25px_rgba(255,0,0,0.3)]" : ""}
        ${className}
      `}
      {...props}
    >
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-red-500/50" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-red-500/50" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-red-500/50" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-red-500/50" />

      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 opacity-5 circuit-pattern" />

      {/* Header */}
      {(title || headerExtra) && (
        <div className="relative px-6 py-4 border-b border-red-500/20 flex items-center justify-between">
          <div>
            {title && (
              <h3 className="text-lg font-mono font-bold text-red-100 tracking-wide">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-sm text-gray-500 font-mono mt-1">{subtitle}</p>
            )}
          </div>
          {headerExtra && <div>{headerExtra}</div>}
          {/* Pulsing indicator */}
          <div
            className="absolute top-4 right-4 w-2 h-2 bg-red-500 animate-pulse shadow-[0_0_10px_rgba(255,0,0,0.6)]"
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative p-6">{children}</div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent group-hover:via-red-400/70 transition-all duration-300" />
    </div>
  );
};

// =====  BADGE =====
// Small tag/badge with angular design
export const TronBadge = ({
  children,
  variant = "default", // "default", "success", "warning", "error"
  size = "sm",
  className = "",
  ...props
}) => {
  const variants = {
    default: "bg-red-500/20 border-red-500/40 text-red-300",
    success: "bg-green-500/20 border-green-500/40 text-green-300",
    warning: "bg-yellow-500/20 border-yellow-500/40 text-yellow-300",
    error: "bg-red-600/30 border-red-500/50 text-red-200",
  };

  const sizes = {
    xs: "px-2 py-0.5 text-xs",
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-1.5 text-sm",
  };

  return (
    <span
      className={`
        inline-flex items-center
        font-mono uppercase tracking-wider
        border
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      style={{
        clipPath:
          "polygon(0 4px, 4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px))",
      }}
      {...props}
    >
      {children}
    </span>
  );
};

// =====  INPUT =====
// Terminal-style input field
export const TronInput = ({
  label,
  error,
  className = "",
  inputClassName = "",
  ...props
}) => {
  return (
    <div className={`relative ${className}`}>
      {label && (
        <label className="block text-sm font-mono text-red-400/80 mb-2 uppercase tracking-wider">
          {">"} {label}
        </label>
      )}
      <div className="relative">
        <input
          className={`
            w-full bg-black/60
            border border-red-500/30
            px-4 py-3
            text-gray-100 font-mono
            placeholder-gray-600
            focus:outline-none focus:border-red-500/60
            focus:shadow-[0_0_15px_rgba(255,0,0,0.2)]
            transition-all duration-300
            ${error ? "border-red-500/60" : ""}
            ${inputClassName}
          `}
          {...props}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-4 bg-red-500/50 animate-pulse" />
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-400 font-mono">! {error}</p>
      )}
    </div>
  );
};

// =====  TEXTAREA =====
// Terminal-style textarea
export const TronTextarea = ({
  label,
  error,
  className = "",
  textareaClassName = "",
  ...props
}) => {
  return (
    <div className={`relative ${className}`}>
      {label && (
        <label className="block text-sm font-mono text-red-400/80 mb-2 uppercase tracking-wider">
          {">"} {label}
        </label>
      )}
      <textarea
        className={`
          w-full bg-black/60
          border border-red-500/30
          px-4 py-3
          text-gray-100 font-mono
          placeholder-gray-600
          focus:outline-none focus:border-red-500/60
          focus:shadow-[0_0_15px_rgba(255,0,0,0.2)]
          transition-all duration-300
          resize-none
          ${error ? "border-red-500/60" : ""}
          ${textareaClassName}
        `}
        {...props}
      />
      {error && (
        <p className="mt-2 text-sm text-red-400 font-mono">! {error}</p>
      )}
    </div>
  );
};

// =====  SECTION HEADER =====
// Section title with decorative elements
export const TronSectionHeader = ({
  title,
  subtitle,
  centered = true,
  className = "",
}) => {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <div className={`relative inline-block ${centered ? "" : "w-full"}`}>
        {/* Title with HUD brackets */}
        <div className="flex items-center justify-center gap-4 mb-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-500/50" />
          <span className="text-red-500/70 font-mono text-sm tracking-widest">
            {"["}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-mono uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-300 to-red-500">
            {title}
          </h2>
          <span className="text-red-500/70 font-mono text-sm tracking-widest">
            {"]"}
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-500/50" />
        </div>
      </div>
      {subtitle && (
        <p className="text-gray-400 font-mono text-sm mt-4 tracking-wide">
          // {subtitle}
        </p>
      )}
    </div>
  );
};

// =====  DIVIDER =====
// Decorative divider with circuit elements
export const TronDivider = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
      <div className="w-2 h-2 bg-red-500/50 rotate-45" />
      <div className="w-1 h-1 bg-red-500/30" />
      <div className="w-2 h-2 bg-red-500/50 rotate-45" />
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
    </div>
  );
};

// =====  PROGRESS BAR =====
// Animated progress/loading bar
export const TronProgressBar = ({ progress = 0, className = "" }) => {
  return (
    <div
      className={`relative h-2 bg-black/60 border border-red-500/30 overflow-hidden ${className}`}
    >
      <div
        className="h-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-500 relative"
        style={{ width: `${progress}%` }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] animate-[shimmer_1.5s_infinite]" />
      </div>
    </div>
  );
};

// =====  TERMINAL =====
// Terminal window component
export const TronTerminal = ({
  title = "terminal",
  children,
  className = "",
}) => {
  return (
    <div
      className={`
        relative bg-black/90
        border border-red-500/40
        overflow-hidden
        shadow-[0_0_30px_rgba(255,0,0,0.2)]
        ${className}
      `}
    >
      {/* Terminal header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-gray-950/80 border-b border-red-500/30">
        <div className="flex gap-2">
          <div
            className="w-3 h-3 bg-red-500/80"
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          />
          <div
            className="w-3 h-3 bg-red-400/60"
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          />
          <div
            className="w-3 h-3 bg-red-300/40"
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          />
        </div>
        <span className="flex-1 text-center text-red-400/70 text-sm font-mono tracking-wider">
          {title}
        </span>
        <div className="w-12" /> {/* Spacer for symmetry */}
      </div>

      {/* Terminal content */}
      <div className="p-6 font-mono text-sm">{children}</div>
    </div>
  );
};

// =====  TERMINAL LINE =====
// Single line in terminal with prompt
export const TronTerminalLine = ({
  prompt = "$",
  command,
  output,
  outputColor = "text-gray-400",
}) => {
  return (
    <div className="mb-2">
      <div className="flex items-center gap-2">
        <span className="text-red-500">{prompt}</span>
        <span className="text-red-300">{command}</span>
        <span className="w-2 h-4 bg-red-500/70 animate-pulse" />
      </div>
      {output && <div className={`mt-1 pl-4 ${outputColor}`}>{output}</div>}
    </div>
  );
};

// =====  HEXAGON =====
// Hexagonal container
export const TronHexagon = ({
  children,
  size = "md",
  className = "",
  ...props
}) => {
  const sizes = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-40 h-40",
  };

  return (
    <div
      className={`
        relative flex items-center justify-center
        bg-gradient-to-b from-black/90 to-gray-950
        border-2 border-red-500/50
        ${sizes[size]}
        ${className}
      `}
      style={{
        clipPath:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      }}
      {...props}
    >
      {children}
    </div>
  );
};

// =====  ICON WRAPPER =====
// Wrapper for icons with glow effect
export const TronIcon = ({
  children,
  size = "md",
  glowing = true,
  className = "",
}) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  return (
    <div
      className={`
        flex items-center justify-center
        ${sizes[size]}
        text-red-400
        ${glowing ? "drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

// =====  STATUS INDICATOR =====
// Status dot with different states
export const TronStatusIndicator = ({
  status = "active", // "active", "inactive", "warning", "error"
  label,
  className = "",
}) => {
  const statusStyles = {
    active: "bg-red-500 shadow-[0_0_10px_rgba(255,0,0,0.6)]",
    inactive: "bg-gray-600",
    warning: "bg-yellow-500 shadow-[0_0_10px_rgba(255,200,0,0.6)]",
    error: "bg-red-600 animate-pulse shadow-[0_0_10px_rgba(255,0,0,0.8)]",
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div
        className={`w-2 h-2 ${statusStyles[status]}`}
        style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
      />
      {label && (
        <span className="text-sm font-mono text-gray-400">{label}</span>
      )}
    </div>
  );
};

// =====  TOOLTIP =====
export const TronTooltip = ({ children, content, className = "" }) => {
  return (
    <div className={`relative group inline-block ${className}`}>
      {children}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-black/95 border border-red-500/40 text-xs font-mono text-gray-300 whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {content}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-red-500/40" />
      </div>
    </div>
  );
};

export default {
  TronPanel,
  TronButton,
  TronCard,
  TronBadge,
  TronInput,
  TronTextarea,
  TronSectionHeader,
  TronDivider,
  TronProgressBar,
  TronTerminal,
  TronTerminalLine,
  TronHexagon,
  TronIcon,
  TronStatusIndicator,
  TronTooltip,
};
