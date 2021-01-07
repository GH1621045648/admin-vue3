const colorToRGB = function(sourceColor, tint = 0) {
  let color = sourceColor.replace('#', '');
  let red = parseInt(color.slice(0, 2), 16);
  let green = parseInt(color.slice(2, 4), 16);
  let blue = parseInt(color.slice(4, 6), 16);
  if (tint === 0) {
    // when primary color is in its rgb space
    return [red, green, blue].join(',');
  } else {
    let opacity = 1 - tint;
    red += Math.round(opacity * (255 - red));
    green += Math.round(opacity * (255 - green));
    blue += Math.round(opacity * (255 - blue));
    return [red, green, blue].join(',');
    // red = red.toString(16);
    // green = green.toString(16);
    // blue = blue.toString(16);
    // return `${red}${green}${blue}`;
  }
};
export { colorToRGB };
