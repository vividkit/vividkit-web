import { useLayoutEffect, useRef, useState } from 'react';
import { BotAvatar, type BotAvatarType } from 'bot-avatars';
import { TEAM, type Lang } from './team-data';


/** Reads the person token so the bot follows light and dark themes. */
export function Bot({
  type,
  token,
  size = 44,
  working = false,
}: {
  type: BotAvatarType;
  token: string;
  size?: number;
  /** Hops while working; otherwise plays the idle animation, so the landing page feels alive. */
  working?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [color, setColor] = useState<string | null>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const read = () => setColor(getComputedStyle(el).getPropertyValue(`--${token}`).trim() || null);
    read();
    const obs = new MutationObserver(read);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'data-theme'] });
    return () => obs.disconnect();
  }, [token]);

  return (
    <span ref={ref} className="vk-team-bot" style={{ width: size, height: size }} aria-hidden>
      {color ? (
        <BotAvatar
          type={type}
          state={working ? 'working' : 'default'}
          color={color}
          size={size}
          shading="plastic"
          saturation={1.1}
          brightness={1.1}
        />
      ) : (
        <span className="vk-team-dot" style={{ background: `var(--${token})` }} />
      )}
    </span>
  );
}

/** Home page team row: every bot idles, and starts working while you point at it. */
export function TeamShowcase({ lang }: { lang: Lang }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <ul className="vk-crew">
      {TEAM.map((m) => (
        <li
          key={m.name}
          onMouseEnter={() => setActive(m.name)}
          onMouseLeave={() => setActive(null)}
          style={{ ['--c' as string]: `var(--${m.color})` }}
        >
          <Bot type={m.bot} token={m.color} size={64} working={active === m.name} />
          <b>{m.name}</b>
          <small>{m.role[lang]}</small>
          <p>{m.does[lang]}</p>
        </li>
      ))}
    </ul>
  );
}
