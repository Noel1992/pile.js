import svgSprite from './svgSprite';

const loadSprite = () => {
  if (!document) {
    return;
  }
  const existing = document.getElementById('__SVG_SPRITE_PILE__');
  const mountNode = document.body;

  if (!existing) {
    mountNode.insertAdjacentHTML('afterbegin', svgSprite);
  }
};

export default loadSprite;
