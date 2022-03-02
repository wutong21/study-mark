---
title: 回溯
description: Docs intro
layout: ../../layouts/MainLayout.astro
---

**经典题目**
下列为 `回溯`相关的经典题目，涵盖经典题目题解、思路解析、套路模板

- ✅ **78. 子集**
- ✅ **46. 全排列**
- ✅ **39. 组合总和**
- ✅ **22. 括号生成**
- ✅ **单词搜索**
- ✅ **N 皇后**
- ✅ **删除无效的括号**
- ✅ **解数独**

## 78. 子集

给你一个整数数组  nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

示例 1：

> 输入：nums = [1,2,3] \
> 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

示例 2：

> 输入：nums = [0] \
> 输出：[[],[0]]

#### 思路解析

利用回溯思想

1. 需要判断可能返回子集长度大小，可知最大长度为 nums.length
2. 因为 不包含重复的子集，说明进入回溯函数时深入层级遍历，不需要每一轮次都从 0 开始，应该从当前层级继续往下查询
3. 定义最终结果和层级子结果
4. 进入回溯函数
5. for 循环传入层级到 nums.length-1,更改层级子结果,深度搜索进入回溯并搜索当前层级的下一层，搜索结束后，一步一步撤回
6. 全部搜索结束后返回最终结果 result

#### 题解

```js

/** JavaScript
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let result = [] // 定义最终结果
    let subResult = [] // 定义层级子结果
    let backtracking = (start) => {
        result.push(JSON.parse(JSON.stringify(subResult))) // 传入层级最终结果
        for (let i = start; i < nums.length; i++) {
            subResult.push(nums[i]) // 传入当前层级数据
            backtracking(i + 1)//回溯
            subResult.pop()//满足条件后撤回
        }
    }
    backtracking(0)
    return result
};
```

## 46. 全排列

给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

示例 1：

> 输入：nums = [1,2,3]\
> 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

示例 2：

> 输入：nums = [0,1]\
> 输出：[[0,1],[1,0]]

示例 3：

> 输入：nums = [1]\
> 输出：[[1]]

#### 思路解析

利用回溯思想
深度优先遍历 + 剪枝

1. 需要判断可能返回子集长度大小，可知最大长度为 nums.length
2. 因为包含重复的选择项，说明进入回溯函数时深入层级遍历，每一轮次都从 0 开始，应该从当前层级继续往下查询
3. 定义最终结果和层级子结果
4. 进入回溯函数
5. for 循环从 0 到 nums.length-1,
6. 更改层级子结果,
7. 记住曾经添加过的元素，再遇到时跳过
8. 深度搜索进入回溯，搜索结束后，一步一步撤回
9. 全部搜索结束后返回最终结果 result

#### 题解

```js

/** JavaScript
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * @param {number[]} nums
 * @return {number[][]}

 */
var permute = function (nums) {
    let result = []
    let subResult = []

    let backtracking = (used) => {
        if (subResult.length === nums.length) {
            result.push(subResult.slice())
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue
            subResult.push(nums[i])
            used[i] = true
            backtracking(used)
            subResult.pop()
            used[i] = false
        }
    }
    backtracking({})
    return result
};
```

## 39. 组合总和

给你一个 无重复元素 的整数数组  candidates 和一个目标整数  target ，找出  candidates  中可以使数字和为目标数  target 的 所有   不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。

candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。

对于给定的输入，保证和为  target 的不同组合数少于 150 个。

示例  1：

> 输入：candidates = [2,3,6,7], target = 7\
> 输出：[[2,2,3],[7]]\
> 解释：2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。7 也是一个候选， 7 = 7 。
> 仅有这两种组合。

示例  2：

> 输入: candidates = [2,3,5], target = 8\
> 输出: [[2,2,2,2],[2,3,3],[3,5]]

示例 3：

> 输入: candidates = [2], target = 1\
> 输出: []

#### 思路解析

回溯思想

1. 定义最终结果和层级子结果
2. 定义回溯函数
3. for 循环 选择列表项
4. 因为可以重复使用元素 所以循环从 0 开始
5. 每次都将元素加入层级子结果
6. 层级子结果等于 target 将层级子结果加入最终结果 并 return
7. 一次搜索结束后 回退一个层级，上一层级的另一分支
8. 所有层级以及分支遍历结束后 返回结果

#### 题解

```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {

    let result = []
    let subResult = []

    let backtracking = (start) => {
        if (subResult.reduce((x, y) => x + y, 0) === target) {
            result.push(subResult.slice())
            return
        }
        for (let i = start; i < candidates.length; i++) {
            if (subResult.reduce((x, y) => x + y, 0) > target) {
                return
            }
            subResult.push(candidates[i])
            backtracking(i)
            subResult.pop()
        }
    }
    backtracking(0)
    return result
};
```

## 22. 括号生成

数字 n  代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

示例 1：

> 输入：n = 3
> 输出：["((()))","(()())","(())()","()(())","()()()"]

示例 2：

> 输入：n = 1
> 输出：["()"]

### 思路解析

### 题解

## 套路模版

普通回溯

```js
let result // 定义最终结果
let subResult // 定义层级子结果
/**
 * 进入回溯函数 传入会一直改变且需要用到的值，列入层级
 */
let backtracking = (level, 选择列表nums) => {
    定义最终结果
    定义层级子结果
    if(加入最终结果的条件）{
        层级子结果加入最终结果
    }
    for
    for 循环 如果重复 循环从0开始到选择列表nums.length-1
           如果不重复 循环从层级level开始到选择列表nums.length-1
        层级子结果加入最终结果 进行选择
        进入回溯函数 level+1 层级+1
        搜索结束退一步 取消选择
}
执行回溯函数
返回最终结果
```

回溯 + 记忆化

### 核心框架

```js
result = []
子结果 = []
let backtracking = (路径, 选择列表) {
    if(满足条件) {
        result.push(子结果)
    }
    for 选择 in 选择列表
        做选择
        backtracking(路径，选择列表)
        取消选择
}
执行backtracking
return result
```
