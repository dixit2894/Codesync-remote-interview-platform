import { Clock, Code2, Calendar, Users } from "lucide-react";

export const INTERVIEW_CATEGORY = [
  { id: "upcoming", title: "Upcoming Interviews", variant: "outline" },
  { id: "completed", title: "Completed", variant: "secondary" },
  { id: "succeeded", title: "Succeeded", variant: "default" },
  { id: "failed", title: "Failed", variant: "destructive" },
] as const;

export const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];

export const QUICK_ACTIONS = [
  {
    icon: Code2,
    title: "New Call",
    description: "Start an instant call",
    color: "primary",
    gradient: "from-primary/10 via-primary/5 to-transparent",
  },
  {
    icon: Users,
    title: "Join Interview",
    description: "Enter via invitation link",
    color: "purple-500",
    gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
  },
  {
    icon: Calendar,
    title: "Schedule",
    description: "Plan upcoming interviews",
    color: "blue-500",
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
  },
  {
    icon: Clock,
    title: "Recordings",
    description: "Access past interviews",
    color: "orange-500",
    gradient: "from-orange-500/10 via-orange-500/5 to-transparent",
  },
];

export const CODING_QUESTIONS: CodeQuestion[] = [
  // Arrays
  {
    id: "max-subarray-sum",
    title: "Maximum Subarray Sum",
    description:
      "Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
      },
    ],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  return 0;
}`,
      python: `def max_sub_array(nums):
    # Write your solution here
    return 0`,
      java: `class Solution {
    public int maxSubArray(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        // Write your solution here
        return 0;
    }
};`,
    },
    constraints: [
      "1 ≤ nums.length ≤ 10^5",
      "-10^4 ≤ nums[i] ≤ 10^4",
    ],
  },
  // Linked List
  {
    id: "reverse-linked-list",
    title: "Reverse Linked List",
    description:
      "Given the head of a singly linked list, reverse the list and return its head.",
    examples: [
      {
        input: "head = [1,2,3,4,5]",
        output: "[5,4,3,2,1]",
      },
      {
        input: "head = [1,2]",
        output: "[2,1]",
      },
    ],
    starterCode: {
      javascript: `function reverseList(head) {
  // Write your solution here
  return null;
}`,
      python: `def reverse_list(head):
    # Write your solution here
    return None`,
      java: `class Solution {
    public ListNode reverseList(ListNode head) {
        // Write your solution here
        return null;
    }
}`,
      cpp: `class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        // Write your solution here
        return nullptr;
    }
};`,
    },
    constraints: [
      "The number of nodes in the list is in the range [0, 5000]",
      "-5000 ≤ Node.val ≤ 5000",
    ],
  },
  // Stacks & Queues
  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    description:
      "Given a string containing just the characters '(', ')', '{', '}', '[', and ']', determine if the input string is valid.",
    examples: [
      {
        input: "s = '()'",
        output: "true",
      },
      {
        input: "s = '([)]'",
        output: "false",
      },
    ],
    starterCode: {
      javascript: `function isValid(s) {
  // Write your solution here
  return false;
}`,
      python: `def is_valid(s):
    # Write your solution here
    return False`,
      java: `class Solution {
    public boolean isValid(String s) {
        // Write your solution here
        return false;
    }
}`,
      cpp: `class Solution {
public:
    bool isValid(string s) {
        // Write your solution here
        return false;
    }
};`,
    },
    constraints: [
      "1 ≤ s.length ≤ 10^4",
      "s consists of parentheses only '()[]{}'",
    ],
  },
  // Trees
  {
    id: "binary-tree-level-order-traversal",
    title: "Binary Tree Level Order Traversal",
    description:
      "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",
    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "[[3], [9, 20], [15, 7]]",
      },
      {
        input: "root = [1]",
        output: "[[1]]",
      },
    ],
    starterCode: {
      javascript: `function levelOrder(root) {
  // Write your solution here
  return [];
}`,
      python: `def level_order(root):
    # Write your solution here
    return []`,
      java: `class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
      cpp: `class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        // Write your solution here
        return {};
    }
};`,
    },
    constraints: [
      "The number of nodes in the tree is in the range [0, 2000]",
      "-1000 ≤ Node.val ≤ 1000",
    ],
  },
  // Graphs
  {
    id: "num-islands",
    title: "Number of Islands",
    description:
      "Given a 2D grid consisting of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.",
    examples: [
      {
        input: "grid = [['1','1','1','1','0'],['1','1','0','1','0'],['1','1','0','0','0'],['0','0','0','0','0']]",
        output: "1",
      },
      {
        input: "grid = [['1','1','0','0','0'],['1','1','0','0','0'],['0','0','1','0','0'],['0','0','0','1','1']]",
        output: "3",
      },
    ],
    starterCode: {
      javascript: `function numIslands(grid) {
  // Write your solution here
  return 0;
}`,
      python: `def num_islands(grid):
    # Write your solution here
    return 0`,
      java: `class Solution {
    public int numIslands(char[][] grid) {
        // Write your solution here
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {
        // Write your solution here
        return 0;
    }
};`,
    },
    constraints: [
      "m == grid.length",
      "n == grid[i].length",
      "1 ≤ m, n ≤ 300",
      "grid[i][j] is '0' or '1'",
    ],
  },
  // Sorting & Searching
  {
    id: "binary-search",
    title: "Binary Search",
    description:
      "Given a sorted array of integers `nums` and a target value `target`, return the index of `target` in `nums`. If `target` is not found, return -1.",
    examples: [
      {
        input: "nums = [-1,0,3,5,9,12], target = 9",
        output: "4",
      },
      {
        input: "nums = [-1,0,3,5,9,12], target = 2",
        output: "-1",
      },
    ],
    starterCode: {
      javascript: `function search(nums, target) {
  // Write your solution here
  return -1;
}`,
      python: `def search(nums, target):
    # Write your solution here
    return -1`,
      java: `class Solution {
    public int search(int[] nums, int target) {
        // Write your solution here
        return -1;
    }
}`,
      cpp: `class Solution {
public:
    int search(vector<int>& nums, int target) {
        // Write your solution here
        return -1;
    }
};`,
    },
    constraints: [
      "1 ≤ nums.length ≤ 10^4",
      "−10^4 ≤ nums[i], target ≤ 10^4",
    ],
  },
  // Dynamic Programming
  {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    description:
      "You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you reach the top?",
    examples: [
      {
        input: "n = 2",
        output: "2",
      },
      {
        input: "n = 3",
        output: "3",
      },
    ],
    starterCode: {
      javascript: `function climbStairs(n) {
  // Write your solution here
  return 0;
}`,
      python: `def climb_stairs(n):
    # Write your solution here
    return 0`,
      java: `class Solution {
    public int climbStairs(int n) {
        // Write your solution here
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int climbStairs(int n) {
        // Write your solution here
        return 0;
    }
};`,
    },
    constraints: [
      "1 ≤ n ≤ 45",
    ],
  },
  // Add other questions from different DSA topics...
];



export const LANGUAGES = [
  { id: "javascript", name: "JavaScript", icon: "/javascript.png" },
  { id: "python", name: "Python", icon: "/python.png" },
  { id: "java", name: "Java", icon: "/java.png" },
  { id:"cpp", name: "C++", icon: "/cpp.jpg" },
] as const;

export interface CodeQuestion {
  id: string;
  title: string;
  description: string;
  examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  starterCode: {
    javascript: string;
    python: string;
    java: string;
  };
  constraints?: string[];
}

export type QuickActionType = (typeof QUICK_ACTIONS)[number];
