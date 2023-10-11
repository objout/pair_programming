# 后端 API 文档

## 地址

默认后端地址: "ws://you_id_addr:8000/ws/room/abc/"(`abc` 是房间的名字)

- 一个房间两个玩家
- 若房间只有一人, 则对事件的请求返回 `{"status": "waiting"}`
- 只有人数足够才开始游戏

## 一般格式

请求格式(JSON):

```json
{
    "action": "{event}",
    "id": "{id}"
}
```

`action` 和 `id` 是必须填入的字段, 其他特定事件的字段在下文指出.

## 事件

| event         | description                          |
|---------------|--------------------------------------|
| `"turn"`      | 一方进行投掷骰子, 获得投掷结果       |
| `"lock"`      | 一方进行锁定骰子, 向后端发送锁定列表 |
| `"magni"`     | 一方选择倍率, 向后端发送选择的倍率   |
| `"cal_score"` | 一局结束后计算分数                   |
| `"get_id"`    | 得到当前玩家的 id                    |

## 使用实例

### 流程

此处用 0 表示先手, 1 表后手.

* get_id - 玩家 1 和玩家 2 进入房间
* 0 - turn 投掷
* 0 - lock 玩家选择锁定
* 1 - turn 投掷
* 1 - lock 玩家选择锁定
* 0 - magni 玩家选择倍率
* 1 - magni 玩家选择倍率(第一轮到此结束)
* 0 - turn 投掷
* 0 - lock 玩家选择锁定
* 1 - turn 投掷
* 1 - lock 玩家选择锁定
* 0 - magni 玩家选择倍率
* 1 - magni 玩家选择倍率(第二轮到此结束)
* 0 - turn 投掷
* 1 - lock 全部锁定(玩家无法选择)
* 1 - turn 投掷
* 1 - lock 全部锁定(玩家无法选择)
* cal_score 计算分数
* 下一局

### 必要参数

- get_id:
    ```json
    {
        "action": "get_id",
        "id": "{id}"
    }
    ```
- turn:
    ```json
    {
        "action": "turn",
        "id": "{id}"
    }
    ```
- lock:
    ```json
    {
        "action": "lock",
        "id": "{id}",
        "lockList": [1, 2, 3]
    }
    ```
   `lockList` 是需锁定的骰子的索引列表.
- magni:
    ```json
    {
        "action": "magni",
        "id": "{id}",
        "num": 1
    }
    ```
    `num` 是要增加的倍率
- cal_score:
    ```json
    {
        "action": "cal_score",
        "id": "{id}"
    }
    ```
