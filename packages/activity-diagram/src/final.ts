import { Pen } from '@topology/core';
export function activityFinal(pen: Pen): Path2D {
  const path1 = new Path2D();

  const worldRect = pen.calculative.worldRect;
  path1.ellipse(
    worldRect.x + worldRect.width / 2,
    worldRect.y + worldRect.height / 2,
    worldRect.width / 2,
    worldRect.height / 2,
    0,
    0,
    Math.PI * 2
  );

  const path2 = new Path2D();

  path2.ellipse(
    worldRect.x + worldRect.width / 2,
    worldRect.y + worldRect.height / 2,
    worldRect.width / 4,
    worldRect.height / 4,
    0,
    0,
    Math.PI * 2
  );

  path1.addPath(path2);
  return path1;
}
