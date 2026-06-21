# 软件系统设计 · 期末复习

> 来源：`slides/课程复习-本科.pdf`（2026 Spring）
> 考试：英文题目，中文或英文答题 | 基础内容 60% + 进阶内容 40%

---

## 一、考试概览

| 项目 | 说明 |
|------|------|
| **总评成绩** | 平时成绩 40% + 期末考试 60% |
| **内容占比** | 架构设计 50% + 设计模式 50% |
| **题型** | 简答题、设计分析题 |
| **语言** | 英文题目，中文或英文答题 |
| **难度分布** | 基础内容 60%，进阶内容 40% |

---

## 二、软件架构通识 (Software Architecture in General)

### 2.1 什么是软件架构？

- **Structure（结构）**：系统的静态构成
- **Elements（元素）**：软件组件
- **Relationships（关系）**：组件之间的关联与交互
- **Design（设计）**：Design ⊃ Architecture ⊃ Structure

架构是高层设计和一组设计决策。程序或计算系统的软件架构是系统的一个或多个结构，包括软件元素、这些元素的外部可见属性以及它们之间的关系。

### 2.2 软件架构师职责

| 职责 | 说明 |
|------|------|
| **Liaison（联络）** | 客户、技术团队、业务分析师之间的桥梁 |
| **Software Engineering（软件工程）** | 推广最佳实践 |
| **Technical Knowledge（技术知识）** | 对技术领域的深入理解 |
| **Risk Management（风险管理）** | 识别和管理技术风险 |

### 2.3 软件架构的来源

- **NFRs**（非功能需求）
- **ASRs**（架构攸关需求）
- **Quality Requirements**（质量需求）
- **Stakeholders**（利益相关者）
- **Organisations**（组织）
- **Technical Environments**（技术环境）

### 2.4 架构（4+1）视图

| 视图 | 关注内容 |
|------|---------|
| **Logical View（逻辑视图）** | 对架构重要的元素及其关系，面向功能需求 |
| **Process View（过程视图）** | 元素间的并发与交互 |
| **Physical View（物理视图）** | 过程和组件到硬件的映射 |
| **Development View（开发视图）** | 软件模块的内部组织联系 |
| **+1: Use Case Scenarios（场景视图）** | 通过用例/场景验证架构 |

### 2.5 架构活动与过程

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  Specifying  │    │ Architecture │    │ Documenting │    │ Architecture │
│    ASRs      │───▶│   Design     │───▶│   Views     │───▶│  Evaluation  │
│  (识别ASR)   │    │  (架构设计)    │    │  (文档化)    │    │   (评估)     │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
       ▲                                                       │
       │                   Requirements,                       │
       └─────────────────── constraints,                       │
                           Stakeholders                        │
```

核心过程：
1. **指定 ASRs**：从需求、约束、利益相关者中识别架构攸关需求
2. **架构设计**：使用模式和战术（Patterns and Tactics）生成候选视图草图，由模式决定结构
3. **架构文档化**：选取、组合视图，加上视图之外的文档（beyond views）
4. **架构评估**：使用优先级排序的质量属性场景进行验证

---

## 三、质量属性与战术 (Quality Attributes & Tactics)

### 3.1 软件需求分类

```
软件需求 Software Requirements
├── 功能性需求 Functional Requirements
│   └── 系统必须做什么，如何提供价值
└── 非功能需求（≈ 质量需求） NFRs ≈ Quality Requirements
    ├── 质量属性 Quality Attributes
    └── 约束 Constraints
```

### 3.2 内部属性 vs 外部属性

| 类型 | 示例 |
|------|------|
| **外部属性（External）** | Availability, Interoperability, Performance, Security, Usability |
| **内部属性（Internal）** | Modifiability, Testability |

### 3.3 质量属性场景建模

六元组模型：

```
Source ──▶ Stimulus ──▶ Artifact ──▶ Environment ──▶ Response ──▶ Measure
(刺激源)    (刺激)     (工件)      (环境)        (响应)      (度量)
```

常考质量属性：**Availability, Interoperability, Modifiability, Performance, Security, Testability, Usability**

### 3.4 概念层次

**Strategies（策略）> Tactics（战术）> Patterns（模式）> Styles（风格）**

战术是针对单一质量属性的设计决策；模式是多种战术的组合。

---

## 四、识别 ASRs

### 4.1 定义

**ASR（Architecturally Significant Requirements，架构攸关需求）** 是对架构产生深远影响的需求，包括功能性需求、质量需求和约束。质量属性需求越困难、越重要，越可能成为 ASR。

### 4.2 如何收集和识别 ASR

| 来源 | 方法 |
|------|------|
| **需求文档（Requirement Docs）** | MoSCoW 方法、用户故事 |
| **质量属性工作坊（QA Workshop）** | 采访涉众 |
| **业务目标（Business Goals）** | 与管理层沟通 |
| **效用树（Utility Tree）** | 按 Importance × Difficulty 对场景排序 |

---

## 五、设计决策 (Design Decisions)

### 5.1 通用设计策略

| 策略 | 说明 |
|------|------|
| **Abstraction（抽象）** | 关注结构而非实现 |
| **Decomposition（分解）** | 将系统拆分为更小的部分 |
| **Divide & Conquer（分而治之）** | 分别处理每个模块 |
| **Generation & Test（生成与测试）** | 将设计视为假设，生成测试验证 |
| **Iteration（迭代）** | 逐步增量细化 |
| **Reuse（复用）** | 重用现有元素和模式 |

### 5.2 设计决策的分类

| 分类 | 内容 |
|------|------|
| **Allocation of Responsibilities** | 职责分配 |
| **Coordination Model** | 协调模型 |
| **Data Model** | 数据模型 |
| **Management of Resources** | 资源管理 |
| **Mapping among Architecture Elements** | 架构元素间的映射 |
| **Binding Time Decisions** | 绑定时间决策 |
| **Choice of Technology** | 技术选择 |

---

## 六、架构模式期末复习（重点）

> 复习目标：不是背名词，而是能解释"**为什么这样组织系统**"

### 6.1 核心思想：每种架构到底在组织什么

看懂一类架构，要同时说清：**它解决什么问题、怎么解决、牺牲了什么**。

每种架构都在回答三个问题：
1. 系统的边界在哪里？
2. 职责如何划分？
3. 组件之间如何协作？

```
最早期 ──▶ 主机/终端 ──▶ C/S ──▶ 三层/分层 ──▶ SOA ──▶ 微服务 ──▶ 事件驱动/云原生
```

| 架构风格 | 核心思想：在组织什么 |
|---------|-------------------|
| **主机/终端（Mainframe/Terminal）** | **组织核心事务**：事务、数据、权限集中在主机，终端主要负责输入与显示 |
| **C/S（Client-Server）** | **组织交互能力**：客户端承担 UI 与部分逻辑，服务器管理共享数据 |
| **三层/分层（Layered/3-Tier）** | **组织职责边界**：表示层、业务层、数据层分离，降低系统内部耦合 |
| **SOA（面向服务架构）** | **组织企业服务能力**：通过服务契约暴露可复用能力，支撑跨系统整合 |
| **微服务（Microservices）** | **组织独立演进单元**：围绕业务能力拆服务，使团队、代码和发布边界对齐 |
| **事件驱动/云原生（Event-Driven/Cloud Native）** | **组织运行时协作**：事件负责异步协作，平台负责部署、扩缩容、恢复和观测 |

### 6.2 架构迁移原因：旧架构为什么"不够用了"

> 迁移逻辑通常来自规模、复杂度、维护成本、协作方式的变化。
> 迁移不是"旧模式错了"，而是旧模式擅长解决的矛盾已经不再是系统最主要的矛盾。

| 迁移 | 旧架构的瓶颈 |
|------|------------|
| **主机/终端 → C/S** | 交互能力弱，终端灵活性低 |
| **C/S → 三层/分层** | 客户端安装升级重，版本与兼容难治理 |
| **三层/分层 → SOA** | 单系统可维护性提升，但跨系统复用不足 |
| **SOA → 微服务** | 企业级整合增强，但治理与总线（ESB）较重 |
| **微服务 → 事件/云原生** | 局部发布更快，但分布式复杂度上升；事件驱动更适合高波动运行时，但时序与排障更难 |

### 6.3 质量属性取舍总览

> 不要只背优缺点，要说明这些优缺点**为什么由结构产生**。

| 架构 | 优先保障 | 相对牺牲 / 新复杂性 |
|------|---------|-------------------|
| **主机/终端** | 一致性、安全性、可靠性、可审计性 | 易用性、交互响应性、局部修改灵活性 |
| **C/S** | 易用性、响应性、桌面交互体验 | 可部署性、可维护性、版本一致性、统一治理 |
| **三层/分层** | 可维护性、可修改性、安全边界、部署治理 | 极致性能、跨系统复用、团队自治速度 |
| **SOA** | 互操作性、可复用性、可组合性、可治理性 | 简单性、响应性能、轻量部署、局部演进速度 |
| **微服务** | 可部署性、可扩展性、可修改性、演进速度 | 强一致性、运维简单性、故障定位、全局理解 |
| **事件/云原生** | 弹性、韧性、可扩展性、可用性、自动化运维 | 可理解性、可调试性、时序可预测性、强一致性 |

### 6.4 考试复习边界

**重点复习：**
- 各架构的**核心思想**（在组织什么）
- 架构之间**迁移的原因**
- 架构对**质量属性的影响**（优先保障什么，牺牲什么）
- 结合**具体业务系统**进行说明

**不作为考试重点：**
- AI 增强、AI 原生（可作为理解架构演进的延伸，但期末答题不要求展开）

---

## 七、属性驱动设计 (ADD)

### 7.1 架构驱动因素

- **Purpose**（设计目的）
- **Primary Functionality**（主要功能）
- **Quality Attributes**（质量属性）
- **Constraints**（约束条件）
- **Architectural Concerns**（架构关注点）

### 7.2 ADD 3.0 流程

```
┌──────────────────────────────────────────────────────────┐
│  Step 1: Review Inputs （确认输入信息充分）                │
│       ↓                                                   │
│  Step 2: Establish Iteration Goal by Selecting Drivers    │
│       ↓                                                   │
│  Step 3: Choose One or More Elements to Refine            │
│       ↓                                                   │
│  Step 4: Choose One or More Design Concepts               │
│       ↓                                                   │
│  Step 5: Instantiate Architectural Elements, Allocate     │
│          Responsibilities, Define Interfaces              │
│       ↓                                                   │
│  Step 6: Sketch Views and Record Design Decisions         │
│       ↓                                                   │
│  Step 7: Perform Analysis, Review Iteration Goal          │
│       ↓                                                   │
│  (Iterate until all drivers satisfied)                    │
└──────────────────────────────────────────────────────────┘
```

### 7.3 ADD 迭代过程

| 迭代 | 目标 | 使用的设计概念 |
|------|------|-------------|
| **Iteration 1** | 建立初始的总体系统结构 | Deployment Patterns, Tiers |
| **Iteration 2** | 识别支持主要功能的结构 | Architectural Patterns, Tactics |
| **Iteration 3..N** | 精化已有结构，全面解决剩余驱动因素 | Externally Developed Components, Patterns |

### 7.4 架构文档化（重点：视图）

架构文档 = **Views（视图）** + **Beyond Views（文档路线图、系统概述、映射关系、原理说明等）**

---

## 八、微服务架构设计

### 8.1 基础知识

- **发展历程**：单体架构 → SOA → 微服务
- **单体架构优势**：简单、易于开发测试部署、性能好
- **单体架构劣势**：难以扩展、技术栈锁定、无法独立部署

**微服务架构定义**：将应用拆分为一组小型的、独立可部署的服务，每个服务围绕业务能力组织。

**微服务主要特性**：
1. 通过服务组件化
2. 围绕业务能力组织
3. 服务内部高内聚，服务间低耦合
4. 去中心化
5. 基础设施自动化
6. 演进式设计

**架构对比**：

| 维度 | 单体 | SOA | 微服务 |
|------|------|-----|--------|
| 服务规模 | 一个整体 | 较大服务 | 小型服务 |
| 通信 | 方法调用 | ESB/重量级协议 | 轻量级协议（REST/gRPC） |
| 数据 | 单一数据库 | 共享数据库 | 每个服务独立数据库 |
| 部署 | 整体部署 | 服务独立部署 | 全自动化 CI/CD |

### 8.2 核心设计模式

微服务架构核心挑战及对应模式语言（模式组集合）：

- **拆分和定义**（粒度问题）：如何拆、结果优劣
- **进程间通信**：机制复杂性高于方法调用，需处理局部故障
- **部署复杂性**：技术异构、相互隔离、经济高效
- **运维复杂性**：自动化部署工具、PaaS 平台、Docker 容器编排

---

## 九、微服务架构拆分模式

### 9.1 问题

如何将应用拆分为微服务？

### 9.2 需求

- **高内聚**：实现一组密切相关的功能
- **松耦合**：封装内部细节，通过 API 交互
- **单一职责原则（SRP）**
- **共同封闭原则（CCP）**
- **双披萨团队**开发（每个团队 6-8 人）
- **团队自治**

### 9.3 拆分步骤

```
Step 1: 识别系统操作          Step 2: 识别服务              Step 3: 定义服务 API 和协作
(System Operations)          (Identify Services)          (Define APIs & Collaborations)
         │                          │                            │
         ▼                          ▼                            ▼
  从需求/用户故事出发           将系统操作分组为               定义服务间调用关系
  提取 createOrder()           候选服务                      和接口契约
  acceptOrder() 等             Order Service                verifyOrder()
                               Kitchen Service              createTicket()
                               Restaurant Service           迭代精化
```

### 9.4 模式列表

| 模式 | 说明 |
|------|------|
| **根据业务能力拆分（Decompose by Business Capability）** | 按业务领域拆分，如订单服务、支付服务 |
| **根据子域拆分（Decompose by Sub-domain）** | 基于 DDD 的限界上下文拆分 |

---

## 十、微服务架构通信模式

### 10.1 通信问题

- 如何避免由于服务故障或网络中断所引起的故障蔓延到其他服务？
- 客户端如何在网络上发现服务实例的位置？
- 如何处理外部客户端与服务之间的通讯？

### 10.2 通信方式分类

```
Communication Style（通信风格）
├── Remote Procedure Invocation（远程过程调用）: REST, gRPC
├── Messaging（消息）: Transactional messaging, Transactional outbox
│   ├── Polling publisher
│   └── Transaction log tailing
└── Domain-specific（领域特定协议）
```

### 10.3 服务发现

| 模式 | 说明 |
|------|------|
| **Client-side Discovery（客户端发现）** | 客户端查询 Service Registry，自行负载均衡 |
| **Server-side Discovery（服务端发现）** | 客户端通过负载均衡器访问，均衡器查询注册中心 |
| **Self Registration（自注册）** | 服务实例自己向注册中心注册 |
| **3rd-party Registration（第三方注册）** | 由外部组件（如 K8s）管理服务注册 |

### 10.4 可靠性

| 模式 | 说明 |
|------|------|
| **Circuit Breaker（断路器）** | 检测故障，快速失败，防止级联故障蔓延 |

### 10.5 外部 API

| 模式 | 说明 |
|------|------|
| **API Gateway** | 统一入口，路由、认证、限流、协议转换 |
| **Backend for Frontend（BFF）** | 为每种前端（Web/Mobile）提供专用 API Gateway |

---

## 十一、微服务架构部署模式

### 11.1 上下文

- 微服务架构包含一组服务
- 每个服务部署为一组服务实例，以实现吞吐量和可用性

### 11.2 部署需求

- 服务使用各种语言、框架和框架版本编写
- 需要快速构建、独立部署和扩展服务
- 服务实例需相互隔离
- 需限制服务消耗的资源（CPU 和内存）
- 尽可能经济高效地部署

### 11.3 部署模式演进

```
多服务实例/主机 ──▶ 单服务/主机 ──▶ 服务/VM ──▶ 服务/容器 ──▶ 服务部署平台 ──▶ 无服务器
  Multiple           Single        Service     Service     Service       Serverless
  Services           Service       per VM      per         Deployment    Deployment
  per Host           per Host                  Container    Platform
```

| 模式 | 说明 |
|------|------|
| **Multiple Services per Host（单主机多服务）** | 传统方式，WAR 文件部署 |
| **Single Service per Host（单主机单服务）** | 一个主机只运行一个服务实例 |
| **Service per VM（服务/虚拟机）** | 将服务部署为 VM 镜像 |
| **Service per Container（服务/容器）** | 将服务封装为容器（Docker），现代主流方式 |
| **Service Deployment Platform（服务部署平台）** | 自动化自助服务平台（如 K8s） |
| **Serverless Deployment（无服务器部署）** | 无需管理基础设施，基于请求的定价 |

### 11.4 模式选择指南

| 场景 | 推荐模式 |
|------|---------|
| 简单部署、小规模 | Multiple Services per Host |
| 需要隔离、中等规模 | Service per Container |
| 大规模自动化运维 | Service Deployment Platform（K8s） |
| 无需管理基础设施 | Serverless |

---

## 十二、微服务架构可观测性模式

### 12.1 上下文

- 多台机器上运行多个服务和服务实例
- 请求跨越多服务实例，每个服务执行一个或多个操作来处理请求
- 以标准化格式将操作信息写入日志文件，跟踪用户行为和代码异常
- 服务实例可能无法处理请求但仍在运行（"半死不活"状态）

### 12.2 核心问题

1. 如何理解用户和应用程序的行为并**排查问题**？
2. 如何**检测**正在运行的服务实例无法处理请求？

### 12.3 可观测性模式全景

```
                      ┌─────────────────────────┐
                      │   Observable Service     │
                      │     (可观测服务)          │
                      └──────────┬──────────────┘
                                 │
        ┌────────────────────────┼────────────────────────┐
        │           │            │            │           │
        ▼           ▼            ▼            ▼           ▼
  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
  │  Logging │ │  Health  │ │ Metrics  │ │Distributed│ │  Audit   │
  │  Aggr.   │ │  Check   │ │  Service │ │ Tracing   │ │ Logging  │
  │ (日志聚合)│ │  API     │ │ (应用指标)│ │(分布式跟踪)│ │(审计日志) │
  └──────────┘ └──────────┘ └──────────┘ └──────────┘ └──────────┘
        │                                    │
        ▼                                    ▼
  ┌──────────┐                        ┌──────────┐
  │Exception │                        │Distributed│
  │ Tracking │                        │ Tracing   │
  │(异常跟踪) │                        │  Server   │
  └──────────┘                        └──────────┘
```

### 12.4 模式列表

| 模式 | 说明 | 职责方 |
|------|------|--------|
| **Health Check API（健康检查 API）** | 暴露 `/health` 端点，监控服务定期调用检测实例状态 | 开发 + 运维 |
| **Log Aggregation（日志聚合）** | 集中收集所有服务实例的日志，支持搜索和分析（ELK/Loki） | 运维 |
| **Audit Logging（审计日志）** | 记录用户操作轨迹，写入审计数据库 | 开发 |
| **Distributed Tracing（分布式跟踪）** | 为每个外部请求分配唯一 ID，跟踪跨服务调用链（Jaeger/Zipkin） | 开发 + 运维 |
| **Exception Tracking（异常跟踪）** | 集中收集和分析异常（Sentry） | 开发 |
| **Application Metrics（应用程序指标）** | 暴露业务和技术指标（Prometheus + Grafana） | 开发 + 运维 |

---

> **参考资料**：本复习文档整理自 `slides/课程复习-本科.pdf`，涵盖了课件中列举的所有知识点。建议结合 `slides/` 目录下的原始课件进行深入学习。
