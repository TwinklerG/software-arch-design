# 软件系统设计 · 必背要点

> 精简速记版——覆盖架构设计 + 设计模式两大部分的核心定义、原则、模式与考点。

---

## 一、面向对象设计原则（7 条）

| # | 原则 | 一句话 |
|---|------|--------|
| **SRP** | 单一职责原则 | 一个类只负责一件事，仅有一个引起它变化的原因 |
| **OCP** | 开闭原则 | 对扩展开放，对修改关闭——加新功能不改旧代码 |
| **LSP** | 里氏代换原则 | 子类必须能透明替换父类，程序行为不变 |
| **DIP** | 依赖倒转原则 | 依赖抽象（接口），不依赖具体类——面向接口编程 |
| **ISP** | 接口隔离原则 | 接口要小、要专一，客户端不应依赖它不需要的方法 |
| **CRP** | 合成复用原则 | 优先使用组合/聚合，尽量少用继承（HAS-A > IS-A） |
| **LoD** | 迪米特法则 | 最少知识原则——不和陌生人说话，只和朋友通信 |

**关系链**：目标（OCP）← 指导（LoD）← 基础（SRP）← 实现手段（DIP + CRP + LSP + ISP）

---

## 二、设计模式分类速记表

| 目的 \ 范围 | 类模式（继承，静态） | 对象模式（组合，动态） |
|------------|-------------------|---------------------|
| **创建型** | Factory Method | Abstract Factory, Builder, **Prototype**, Singleton |
| **结构型** | (Class) Adapter | (Object) Adapter, Bridge, **Composite**, Decorator, Facade, **Flyweight**, Proxy |
| **行为型** | Template Method | Command, Iterator, Mediator, **Observer**, State, **Strategy** |

**重点常考模式**：Strategy, Observer, Command, Composite, Factory Method, Abstract Factory, Prototype, Flyweight

---

## 三、核心设计模式一句话

| 模式 | 一句话 | 关键结构 |
|------|--------|---------|
| **Strategy（策略）** | 封装可互换的算法族，让算法独立于客户端变化 | Context → Strategy 接口 ← ConcreteStrategy |
| **Observer（观察者）** | 一对多依赖，Subject 状态变化时自动通知所有 Observer | Subject → notify() → Observer.update() |
| **Command（命令）** | 将请求封装为对象，支持撤销、队列、日志 | Invoker → Command 接口 → Receiver |
| **Composite（组合）** | 树状结构，统一对待单个对象和组合对象 | Component 接口 ← Leaf / Composite |
| **Factory Method** | 定义创建对象接口，子类决定实例化哪个类 | Creator → factoryMethod() → Product |
| **Abstract Factory** | 创建一系列相关对象，无需指定具体类 | AbstractFactory → createA()/createB() |
| **Singleton（单例）** | 一个类只有一个实例，全局访问点 | private 构造 + static getInstance() |
| **Adapter（适配器）** | 将一个接口转换成客户期望的另一个接口 | Client → Target ← Adapter → Adaptee |
| **Decorator（装饰者）** | 动态给对象添加职责，比继承更灵活 | Component ← Decorator → ConcreteComponent |

---

## 四、质量属性场景建模（六元组）

```
Source ──▶ Stimulus ──▶ Artifact ──▶ Environment ──▶ Response ──▶ Measure
(刺激源)    (刺激)     (工件)      (环境)        (响应)      (响应度量)
```

| 元素 | 含义 | 示例（Availability） |
|------|------|-------------------|
| Source | 谁触发 | 心跳监视器 |
| Stimulus | 什么事件 | 服务器无响应 |
| Artifact | 影响什么 | 监视器进程 |
| Environment | 什么状况下 | 正常操作 |
| Response | 系统怎么反应 | 通知操作者，继续运行 |
| Measure | 怎么量化 | 没有停机时间 |

**常考 QA**：Availability, Performance, Modifiability, Security, Interoperability, Testability, Usability

---

## 五、可用性公式（必考计算）

$$
\text{Availability} = \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR}}
$$

| 缩写 | 全称 | 含义 |
|------|------|------|
| MTBF | Mean Time Between Failures | 平均无故障时间 |
| MTTR | Mean Time To Repair | 平均修复时间 |

| SLA | 年停机时间 |
|-----|----------|
| 99%（两个9） | ~3.65 天 |
| 99.9%（三个9） | ~8.76 小时 |
| 99.99%（四个9） | ~52.6 分钟 |
| 99.999%（五个9） | ~5.26 分钟 |

---

## 六、4+1 视图

| 视图 | 关注点 | 受众 |
|------|--------|------|
| **Logical（逻辑）** | 功能需求，元素及其关系 | 最终用户 |
| **Process（过程）** | 并发、同步、交互 | 系统集成者 |
| **Development（开发）** | 代码组织、模块划分 | 程序员 |
| **Physical（物理）** | 硬件部署拓扑 | 系统工程师 |
| **+1 Scenarios（场景）** | 用例驱动，验证架构 | 所有利益相关者 |

**为什么需要多视图**：不同视图支持不同目标/用户；不同视图暴露不同质量属性；单一视图无法描述全部架构。

---

## 七、架构风格三分类 + 连线

| 风格类别 | 关注点 | 四种样式 |
|---------|--------|---------|
| **Module Style** | 代码/模块组织（静态） | Decomposition, Uses, Layered, Generalization |
| **C&C Style** | 运行时组件交互（动态） | Client-Server, Pipe-Filter, Publish-Subscribe, Peer-to-Peer |
| **Allocation Style** | 物理部署映射 | Deployment, Install, Work Assignment, Implementation |

**Layered vs Multi-tier**：Layered 是 Module Style（逻辑分层），Multi-tier 是 Allocation Style（物理部署分层）。

---

## 八、架构演进六阶段速记

```
主机/终端 → C/S → 三层/分层 → SOA → 微服务 → 事件驱动/云原生
```

| 架构 | 核心在组织什么 | 优先保障 | 牺牲 |
|------|-------------|---------|------|
| **主机/终端** | 核心事务（集中式） | 一致性、安全 | 易用性、灵活性 |
| **C/S** | 交互能力（UI → 客户端） | 易用性、响应性 | 可部署性、版本治理 |
| **三层/分层** | 职责边界（表示/业务/数据分离） | 可维护性、可修改性 | 极致性能、跨系统复用 |
| **SOA** | 企业服务能力（服务契约复用） | 互操作、可复用 | 简单性、响应性能 |
| **微服务** | 独立演进单元（按业务拆分） | 可部署、可扩展 | 强一致性、运维简单性 |
| **事件/云原生** | 运行时协作（异步事件+平台） | 弹性、自动化 | 可调试性、时序可预测 |

**迁移逻辑**：规模↑ → 复杂度↑ → 旧模式擅长解决的矛盾不再是最主要的矛盾。

---

## 九、ASR + 效用树

**ASR（架构攸关需求）**：对架构设计决策产生深远影响的需求。

**四种提取方法**：
1. 需求文档（MoSCoW + User Stories）
2. 质量属性工作坊（QAW，采访涉众）
3. 业务目标分析
4. **效用树（Utility Tree）**：按 Importance × Difficulty 对场景排序 $$(\text{High, High})$$ → ASR

---

## 十、通用设计策略（6 种）

| 策略 | 说明 |
|------|------|
| **Decomposition** | 分解系统为更小模块 |
| **Abstraction** | 关注结构，忽略实现 |
| **Divide & Conquer** | 分而治之，逐模块处理 |
| **Generate & Test** | 设计→假设→测试验证 |
| **Iteration** | 迭代增量细化（ADD 核心） |
| **Reuse** | 重用现有模式/组件 |

---

## 十一、ADD 流程（8 步）

```
1. Review Inputs（确认输入充分）
2. Establish Iteration Goal（选择驱动因素确定本轮目标）
3. Choose Element(s) to Refine（选择要分解的系统元素）
4. Choose Design Concept(s)（选择设计概念：模式/战术/外部组件）
5. Instantiate Elements, Allocate Responsibilities, Define Interfaces
6. Sketch Views & Record Design Decisions
7. Analyze Current Design & Review Iteration Goal
8. → 回到 Step 2，迭代直到满足所有 ASR
```

**三个迭代阶段**：
| Iteration 1 | 建立初始总体结构（Tiers, Deployment Patterns） |
| Iteration 2 | 识别支持主要功能的结构（Patterns, Tactics） |
| Iteration 3..N | 精化，处理剩余驱动因素 |

---

## 十二、ATAM 四阶段速记

| 阶段 | 核心输出 |
|------|---------|
| **Phase 0** 准备 | 评估计划（谁、何时、何地） |
| **Phase 1** 评估 | 架构介绍 + 业务目标 + Utility Tree + 风险/非风险 + 敏感点/权衡点 |
| **Phase 2** 评估 | 涉众场景优先级 + 风险主题 |
| **Phase 3** 后续 | 最终评估报告 |

**三个关键概念**：
| 概念 | 定义 | 示例 |
|------|------|------|
| **Risk（风险）** | 对 QA 可能有负面影响的决策 | 分层导致性能损耗 |
| **Sensitivity Point（敏感点）** | 某 QA 对此高度敏感 | 缓存命中率→响应时间 |
| **Trade-off Point（权衡点）** | 影响多个 QA，互相制约 | 分层：可修改性↑ & 性能↓ |

---

## 十三、微服务 vs SOA 对比

| 维度 | SOA | 微服务（MSA） |
|------|-----|-------------|
| 通信 | 智能管道（ESB），SOAP/WS-\* | 哑管道，REST/gRPC |
| 数据 | 全局数据模型 + 共享数据库 | 每服务独立数据库 |
| 服务规模 | 较大 | 较小 |
| 运维 | 传统部署 | DevOps 自动化 + API Gateway + 熔断器 |

**微服务六大特性**：
1. 通过服务组件化
2. 围绕业务能力组织
3. 高内聚、低耦合
4. 去中心化
5. 基础设施自动化
6. 演进式设计

---

## 十四、微服务核心模式速记

| 领域 | 模式 |
|------|------|
| **拆分** | 按业务能力拆分、按子域（DDD）拆分 |
| **通信** | REST/gRPC（同步）、Message Queue（异步） |
| **可靠性** | Circuit Breaker（断路器） |
| **服务发现** | Client-side / Server-side Discovery + Service Registry |
| **外部 API** | API Gateway / BFF（Backend for Frontend） |
| **部署** | Multiple/Service per Host → Service per Container → Serverless |
| **可观测性** | Health Check API, Log Aggregation, Distributed Tracing, Metrics, Audit Logging |

---

## 十五、软件架构核心定义

| 术语 | 一句话 |
|------|--------|
| **软件架构** | 系统的一个或多个结构，包括元素、外部可见属性、关系 |
| **架构 = 结构 + 设计决策** | What（组件-连接器）+ Why（决策理由） |
| **Design ⊃ Architecture ⊃ Structure** | 设计包含架构，架构包含结构 |
| **软件架构来源** | NFRs, ASRs, Quality Req., Stakeholders, Organisation, Tech Environment |
| **设计模式** | 被反复使用的、经过分类编目的代码设计经验总结（名称、问题、方案、效果） |
| **大三律（Rule of Three）** | 只有经过 ≥3 个不同类型系统的校验，才能从候选模式升格为模式 |

---

## 十六、防御式编程关键概念

| 概念 | 说明 |
|------|------|
| **断言（Assertion）** | 开发期自检代码，无副作用，对开发者警告 |
| **错误处理（Error Handling）** | 运行时处理预期异常 |
| **隔离程序（Barrier）** | 安全边界校验，防止错误传播 |

---
> 建议配合 `review.md`（课程复习完整版）和 `slides/` 原始课件交叉复习。
