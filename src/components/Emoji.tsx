import React, { FC } from 'react';

interface EmojiProps {
  label?: string;
  symbol: string;
}

const Emoji: FC<EmojiProps> = ({ label, symbol }: any) => (
  <span
    className="emoji"
    role="img"
    aria-label={label || ''}
    aria-hidden={label ? 'false' : 'true'}
  >
    {symbol}
  </span>
);

export default Emoji;
