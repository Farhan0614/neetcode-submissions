class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Phase 1: Count the frequencies of each number
        const appear = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (appear.has(nums[i])) {
                appear.set(nums[i], appear.get(nums[i]) + 1);
            } else {
                appear.set(nums[i], 1);
            }
        }

        // Phase 2: Create buckets where the index is the frequency
        // We make the size nums.length + 1 because the max frequency can be the length of the array
        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        
        for (let [num, count] of appear.entries()) {
            buckets[count].push(num);
        }

        // Phase 3: Gather the top k elements by reading the buckets backwards
        const result = [];
        for (let i = buckets.length - 1; i >= 0; i--) {
            if (buckets[i].length > 0) {
                // Spread the numbers from this bucket into our result array
                result.push(...buckets[i]);
                
                // Once we have collected k elements, return exactly k elements
                if (result.length >= k) {
                    return result.slice(0, k);
                }
            }
        }
        
        return result;
    }
}