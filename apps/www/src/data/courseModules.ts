export type CourseModule = {
  title: string;
  description: string;
};

export const modules: CourseModule[] = [
  {
    title: "Computer Networks",
    description: "OSI, TCP/IP, subnets, STP, local & global routing, virtualization",
  },
  {
    title: "Computer Security",
    description: "Hashing, (a)symmetric encryption, digital signatures, authentication, attacks",
  },
  {
    title: "Artificial Intelligence",
    description: "Tree and graph search algorithms, A*, robots, minimax, alpha-beta pruning",
  },
  {
    title: "Machine Learning",
    description: "Regression, classification, (convolutional) neural networks, SVMs",
  },
  {
    title: "Digital Systems",
    description: "Logic gates, CPU architecture, assembly, context switching, IO",
  },
  {
    title: "Databases",
    description: "SQL, B+ trees, transactions, parallelisation, ACID properties, indexing",
  },
  {
    title: "Compilers",
    description: "Lexical analysis, parsing, semantic analysis, code generation, optimization, context-free grammars",
  },
  {
    title: "Computer Graphics",
    description: "Rendering pipeline, transformations, shaders, ray tracing, texturing",
  },
  {
    title: "Concurrency",
    description: "Synchronisation, deadlocks, livelocks, semaphores, monitors",
  },
];
