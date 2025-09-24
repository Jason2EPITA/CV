import Spline from '@splinetool/react-spline';

export default function AvatarRoom({ onReady }) {
  return (
    <Spline
      scene="https://prod.spline.design/NwXjgyxn8OCyam79/scene.splinecode"
      onLoad={() => onReady?.()}   // déclenché quand la scène est chargée
    />
  );
}
