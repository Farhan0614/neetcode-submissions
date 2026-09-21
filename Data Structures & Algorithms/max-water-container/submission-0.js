class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    maxArea(height) {
        let left = 0;
        let right = height.length - 1;
        let maxWater = 0;

        while (left < right) {
            const width = right - left;
            const currentHeight = Math.min(height[left], height[right]);
            const currentArea = width * currentHeight;

            maxWater = Math.max(maxWater, currentArea);

            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxWater;
    }
}