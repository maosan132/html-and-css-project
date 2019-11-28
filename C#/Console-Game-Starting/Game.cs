using System;

namespace ConsoleGame
{
  class Game : SuperGame
  {
    public new static void UpdatePosition(string key, out int x, out int y) {
      switch (key)
      {
        case "LeftArrow":
          x = -1;
          y = 0;
          break;
        case "RightArrow":
          x = 1;
          y = 0;
          break;
        case "UpArrow":
          x = 0;
          y = -1;
          break;
        case "DownArrow":
          x = 0;
          y = 1;
          break;
        default:
        	x = 0;
          y = 0;
          break;
      }
    }
    public new static char UpdateCursor(string key) {
      switch (key)
      {
          case "LeftArrow": 
            return '<';
          case "RightArrow":
            return '>';
          case "UpArrow":
            return '^';
          case "DownArrow":
            return 'v';
          default:
            return '<';
      }
    }
    public new static int KeepInBounds(int coordinate, int maxValue) {
      if (coordinate < 0 ) {
        return maxValue-1;
      } else if (coordinate >= maxValue) {
        return 0;
      } else {
        return coordinate;
      }
    }
    public new static bool DidScore(int xOfChar, int yOfChar, int xOfFruit, int yOfFruit) {
      if (xOfChar == xOfFruit && yOfChar == yOfFruit) {
        return true;
      } else {
        return false;
      }
    }
  }
}