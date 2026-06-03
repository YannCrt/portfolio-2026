import { ImageResponse } from 'next/og';

// Configuration du Favicon dynamique aux dimensions standards
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      // Un petit carré noir minimaliste style Vercel avec tes initiales en majuscule
      <div
        style={{
          fontSize: 18,
          background: '#080710',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#f7f7f8',
          fontWeight: 'bold',
          borderRadius: '6px',
          border: '1px solid #2b2640',
        }}
      >
        YC
      </div>
    ),
    {
      ...size,
    }
  );
}