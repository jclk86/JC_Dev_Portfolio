import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import { GradientPinkBlue as CircleGradient } from "@vx/gradient";

export function AnimatedLogoLight() {
  const [hovered, setHovered] = useState(false);
  const transitions = useTransition(hovered, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div
      className="flex items-center justify-center h-16 w-16"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg width={50} height={50}>
        <CircleGradient id="circleGradient-dashoffset" />
        <circle
          strokeWidth="3"
          cx="25"
          cy="25"
          r="20"
          stroke="url(#circleGradient-dashoffset)"
          fill="none"
        />
      </svg>
      {transitions.map(({ item, key, props }) =>
        item ? (
          <animated.div style={props} key={key}>
            <svg
              width={25}
              height={25}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                fill="black"
                points="12 0 7 4.58 7 3 3 3 3 8.25 0 11 3 11 3 22 10 22 10 16 14 16 14 22 21 22 21 11 24 11 12 0"
              />
            </svg>
          </animated.div>
        ) : (
          <animated.div style={props} key={key}>
            <svg width={50} height={50}>
              <CircleGradient id="circleGradient-dashoffset" />
              <circle
                strokeWidth="3"
                cx="25"
                cy="25"
                r="20"
                stroke="url(#circleGradient-dashoffset)"
                fill="none"
              />
              <g>
                <svg width={50} height={50} viewBox="-19 -30 100 100">
                  <path
                    strokeWidth="1"
                    fill="black"
                    stroke="black"
                    d="M 17.5049 1.45312 H 24.8291 V 26.0625 C 24.8291 28.3249 24.3245 30.3268 23.3154 32.0684 C 22.3226 33.7936 20.9147 35.1283 19.0918 36.0723 C 17.2689 37.0163 15.21 37.4883 12.915 37.4883 C 9.15527 37.4883 6.22559 36.5361 4.12598 34.6318 C 2.02637 32.7113 0.976562 30.0013 0.976562 26.502 H 8.34961 C 8.34961 28.2435 8.71582 29.5293 9.44824 30.3594 C 10.1807 31.1895 11.3363 31.6045 12.915 31.6045 C 14.3148 31.6045 15.4297 31.1243 16.2598 30.1641 C 17.0898 29.2038 17.5049 27.8366 17.5049 26.0625 V 1.45312 Z M 59.0088 25.1592 C 58.7321 28.984 57.3161 31.9951 54.7607 34.1924 C 52.2217 36.3896 48.8688 37.4883 44.7021 37.4883 C 40.1449 37.4883 36.556 35.9583 33.9355 32.8984 C 31.3314 29.8223 30.0293 25.6068 30.0293 20.252 V 18.0791 C 30.0293 14.6611 30.6315 11.6501 31.8359 9.0459 C 33.0404 6.44173 34.7575 4.44792 36.9873 3.06445 C 39.2334 1.66471 41.8376 0.964844 44.7998 0.964844 C 48.9014 0.964844 52.2054 2.06348 54.7119 4.26074 C 57.2184 6.45801 58.667 9.54232 59.0576 13.5137 H 51.7334 C 51.5544 11.2188 50.9115 9.55859 49.8047 8.5332 C 48.7142 7.49154 47.0459 6.9707 44.7998 6.9707 C 42.3584 6.9707 40.5273 7.84961 39.3066 9.60742 C 38.1022 11.349 37.4837 14.0589 37.4512 17.7373 V 20.4229 C 37.4512 24.264 38.029 27.0716 39.1846 28.8457 C 40.3564 30.6198 42.1956 31.5068 44.7021 31.5068 C 46.9645 31.5068 48.6491 30.9941 49.7559 29.9688 C 50.8789 28.9271 51.5218 27.3239 51.6846 25.1592 H 59.0088 Z"
                  />
                </svg>
              </g>
            </svg>
          </animated.div>
        )
      )}
    </div>
  );
}
