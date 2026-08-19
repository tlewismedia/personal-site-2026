# How Starling Answers a Question

A retrieval-augmented generation (RAG) pipeline: the model answers only from retrieved source passages, never from memory alone.

```mermaid
flowchart LR
    Q["User asks a<br/>compliance question"] --> S["Semantic search<br/>retrieves relevant passages"]
    V[("Vector store<br/>(Pinecone)")] --> S
    S --> G["LLM reasons over<br/>those passages only<br/>(OpenAI · LangGraph)"]
    G --> A["Answer with<br/>inline citations<br/>every claim links to a source"]
    G -.->|"insufficient evidence"| F["Refuses to answer<br/>rather than guess"]
```

- **Grounded** — answers come from retrieved regulation and policy passages, not model memory
- **Cited** — every claim carries an inline citation to its source document
- **Trustworthy** — when sources are insufficient, it says so instead of guessing
