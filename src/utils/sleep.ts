/**
 * Sleep utility - pauses execution for a specified number of milliseconds
 * Usage: await sleep(1000)
 * @param {number} milliseconds
 * @returns {Promise<void>}
 */
export const sleep = (milliseconds: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

export default sleep
