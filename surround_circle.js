// https://www.reddit.com/r/dailyprogrammer/comments/6y19v2/20170904_challenge_330_easy_surround_the_circles/

// const coords = {[1,1,2],[2,2,0.5],[-1,-3,2],[5,2,1]}


// function surroundCircle = (coords) => {

  /** -Consume coordinates and radius' forEach item in coords array
       Propagate into their own objects
       const circle4 = {
         x: 5,
         y: 2,
         rad: 1
       }



      - Define variable:
      let rawBoxCoords = {
        top: circle4,
        right: circle4,
        bottom: ,
        left:
      }

      -grab x coords and compare to other objects find furthest right and left circle elements
        add / subtract radius to determine point
      -grab y coords and compare to other objects find top most and bottom most circle elements
        add / subtract radius to determine point

        if (circles have same height / vertical) {then determine which is close to the horizontal/vertical center and use the other circle
        }

      -Find distance between furthest left and right points
      -Find distance between most top and most bottom points

      -cross reference to package box coords into and array to be place in

      const processedCoords = {
        [-3.000, -5.000],
        [-3.000, 3.000],
        [6.000, 3.000],
        [6.000, -5.000]
      }

  */
// }

const circles = [
  [1, 1, 2],
  [2, 2, 0.5],
  [-1, -3, 2],
  [5, 2, 1]
]

const findBounds = function(circles) {
  const bounds = circles.reduce((currentBounds, circle) => {
    const [x, y, radius] = circle

    const currentCircle = {
      top: y + radius,
      left: x - radius,
      bottom: y - radius,
      right: x + radius,
    }

    if (currentBounds === null) { return currentCircle }

    (['top', 'right', 'bottom', 'left']).forEach((key) => {
      const condition =
        key === 'top' || key === 'left'
          ? currentBounds[key] < currentCircle[key]
          : currentBounds[key] > currentCircle[key]
      if (condition) {
        currentBounds[key] = currentCircle[key]
      }
    })

    return currentBounds

  }, null)

  return bounds

}

console.log(findBounds(circles))
