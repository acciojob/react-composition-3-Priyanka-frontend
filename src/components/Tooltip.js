import React, { useState } from "react";

function Tooltip({ text, children }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const child = React.Children.only(children);

  return React.cloneElement(child, {
    className: `${child.props.className || ""} tooltip`.trim(),
    onMouseEnter: () => {
      setShowTooltip(true);

      if (child.props.onMouseEnter) {
        child.props.onMouseEnter();
      }
    },
    onMouseLeave: () => {
      setShowTooltip(false);

      if (child.props.onMouseLeave) {
        child.props.onMouseLeave();
      }
    },
    children: (
      <>
        {child.props.children}

        {showTooltip && (
          <div className="tooltiptext">
            {text}
          </div>
        )}
      </>
    ),
  });
}

export default Tooltip;