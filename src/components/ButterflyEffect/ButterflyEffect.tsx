import React, { FC } from 'react';
import styles from './ButterflyEffect.module.css';
import Template from '../Template/Template.tsx';

interface ButterflyEffectProps {
  isMobile: boolean;
}

// This visualizes the butterfly effect using double rodded pendulums
const ButterflyEffect:FC<ButterflyEffectProps> = (props) => {
  return (
    <Template isMobile={props.isMobile}>
      This is the butterfly effect
    </Template>
  );
}

export default ButterflyEffect;
