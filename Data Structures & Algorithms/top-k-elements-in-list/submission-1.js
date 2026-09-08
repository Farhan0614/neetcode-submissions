class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const appear = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (appear.has(nums[i])) {
                appear.set(nums[i], appear.get(nums[i]) + 1);
            } else {
                appear.set(nums[i], 1);
            }
        }

        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        
        for (let [num, count] of appear.entries()) {
            buckets[count].push(num);
        }

        const result = [];
        for (let i = buckets.length - 1; i >= 0; i--) {
            if (buckets[i].length > 0) {
                result.push(...buckets[i]);
                
                if (result.length >= k) {
                    return result.slice(0, k);
                }
            }
        }
        
        return result;
    }
}