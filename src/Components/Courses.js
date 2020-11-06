const courses = [
  {
    img: "https://ik.imagekit.io/hbj42mvqwv/BCA_QFj3iofAH5.jpg",
    title: "Bachelor of Computer Applications",
    link: "BCA",
    semester: [
      {
        title: 1,
        subjects: [
          {
            title: "Mathematics",
            paper_id: 20101,
            syllabus: {
              unit_1: {
                title: "DETERMINANTS",
                chapters: "Definition, Minors, Cofactors, Properties of Determinants, MATRICES: Definition, Types of Matrices, Addition, Subtraction, Scalar Multiplication and Multiplication of Matrices, Adjoint, Inverse, Cramers Rule, Rank of Matrix Dependence of Vectors, Eigen - Vectors of a Matrix, Caley-Hamilton Theorem (without proof)"
              },
              unit_2: {
                title: "LIMITS & CONTINUITY",
                chapters: "Limit at a Point, Properties of Limit, Computation of Limits of Various Types of Functions, Continuity at a Point, Continuity Over an Interval, Intermediate Value Theorem, Type of Discontinuities."
              },
              unit_3: {
                title: "DIFFERENTIATION",
                chapters: "Derivative, Derivatives of Sum, Differences, Product & quotients, Chain Rule, Derivatives of Composite Functions, Logarithmic Differentiation, Rolle’s Theorem, Mean Value Theorem, Expansion of Functions (Maclaurin’s & Taylor’s), Indeterminate Forms, L’ Hospitals Rule, Maxima & Minima, Asymptote, Successive Differentiation & Liebnitz Theorem."
              },
              unit_4: {
                title: "INTEGRATION",
                chapters: "Integral as Limit of Sum, Riemann Sum, Fundamental Theorem of Calculus, Indefinite Integrals, Methods of Integration Substitution, By Parts, Partial Fractions, Integration of Algebraic and transcedental Functions, Reduction Formulae for Trigonometric Functions, Gamma and Beta Functions."
              }
            }
          },
          {
            title: "Technical Communication",
            paper_id: 20103,
            syllabus: {
              unit_1: {
                title: "Concepts and Fundamentals",
                chapters: "Introduction to Technical Communication, meaning of communication, Importance of communication, Communication scope, types, Process of communication, Communication models and theories, Essentials of good communication - The seven Cs of communication, Factors responsible for growing importance of communication, Channels of communication, Verbal and Non-Verbal communication, Formal and Informal communication, Barriers of, and aids to communication. "
              },
              unit_2: {
                title: "LIMITS & CONTINUITY",
                chapters: "Objectives of written communication, Media of written communication, Merits and demerits of written communication, Planning and preparing of effective business messages. Persuasive writing. <br/> Overview of Technical Research and Report Writing : Definition and Nature of Technical Writing, Properties/features and process of Technical Writing, Basic Principles of Technical Writing, Styles in Technical Writing, The Role of Technical Writing, The Wholistic Guide of Technical Writing , End-products of Technical Writing. Writing Proposals. <br/> Writing Letters: Business letters, Office memorandum, Good news and bad news letters, Persuasive letters, Sales letters, Letter styles/ layout. <br/> Report Writing: Meaning & Definition, Types of report (Business report & Academic report), Format of report, Drafting the report, Layout of the report, Essential requirement of good report writing. <br/> Job Application: Types of application, Form & Content of an application, drafting the application, Preparation of resume.  "
              },
              unit_3: {
                title: "Oral Communication",
                chapters: "Principles of effective oral communication, Media of oral communication, Advantages of oral communication, Disadvantages of oral communication, Styles of oral communication. <br/> Interviews: Meaning & Purpose, Art of interviewing, Types of interview, Interview styles, Essential Features, Structure, Guidelines for Interviewer, Guidelines for interviewee.<br/> Meetings: Definition, Kind of meetings, Advantages and disadvantages of meetings/ committees, Planning and organization of meetings.<br/> Project Presentations: Advantages & Disadvantages, Executive Summary, Charts, Distribution of time (presentation, questions & answers, summing up), Visual presentation, Guidelines for using visual aids, Electronic media (power-point presentation).<br/> Listening Skills: Good listening for improved communications, Art of listening, Meaning, nature, process, types and importance of listening, Principles of good listening, Barriers in listening<br/> Negotiation Skills : Definition of negotiation, Factors that can influence negotiation, what skills do we need to negotiate, Negotiation process (preparation, proposals, discussions, bargaining, agreement, implementation). <br/> Strategies to, improve oral, presentation, speaking and listening skills.  "
              },
              unit_4: {
                title: "Soft Skills & Language Skills",
                chapters: "Soft Skills: Non Verbal communication- kinesics & Proxemics, parlanguage, interpersonal skills, Corporate communication skills - Business Etiquettes [T1,T2,T4]<br/> Language Skills: Improving command in English, improving vocabulary, choice of words, Common problems with verbs, adjectives, adverbs, pronouns, tenses, conjunctions, punctuations, prefix, suffix, idiomatic use of prepositions. Sentences and paragraph construction, improve spellings, introduction to Business English.  "
              }
            }
          },
          {
            title: "Introduction to Programming Language using C",
            paper_id: 20105,
            syllabus: {
              unit_1: {
                title: "C basics",
                chapters: "C character set, Identifiers and keywords, Data types, constants, variables and arrays, declarations, expressions statements, symbolic constants, compound statements, arithmetic operators, unary operators, relational and logical operators, assignment operators, conditional operators, bit operators.<br/> C constructs: If statement, if....else statement, if.....else if....else statement, while statement, do....while statement, for statement, switch statement, nested control statement, break operator, continue operator, comma operator, goto statement.  "
              },
              unit_2: {
                title: "C Functions",
                chapters: "Functions: declaration, definition & scope, recursion, call by value, call by reference.<br/> Storage Classes: automatic, external (global), static & registers.<br/> Arrays: Arrays, pointers, array & pointer relationship, pointer arithmetic, dynamic memory allocation, pointer to arrays, array of pointers, pointers to functions, array of pointers to functions, Preprocessor directives: #include, #define, macro’s with arguments, the operators # and ##, conditional compilations. "
              },
              unit_3: {
                title: "Structures",
                chapters: "Structures, unions, passing structure to functions, bit fields, file handling [text (ASCII), binary]  "
              },
              unit_4: {
                title: "Standard library functions",
                chapters: "String manipulation functions and other standard library functions from stdio.h, stdlib.h, conio.h, ctype.h, math.h, string.h, process.h."
              }
            }
          },
          {
            title: "Introduction to Computers and IT",
            paper_id: 20107,
            syllabus: {
              unit_1: {
                title: "Introduction to Computers",
                chapters: "The evolution of computers: Computer Generation from First Generation to Fifth Generation. <br/>Classifications of Computers: Micro, Mini, Mainframe and super computers, Distributed Computer System, Parallel Computers. <br/>Computer Hardware: Major Components of a digital computer, Block Diagram of a computer Input-output devices, Description of Computer Input Units, Output Units. CPU. <br/>Computer Memory: Memory Cell, Memory Organization, Read Only Memory, Serial Access Memory, Physical Devices Used to construct Memories, Magnetic Hard disk, floppy Disk Drives, Compact Disk Read Only Memory, Magnetic Tape Drives."
              },
              unit_2: {
                title: "Interaction With Computers",
                chapters: "Computer Software: System software, assemblers, compilers, interpreters, linkers Elementary Operating System concepts, different types of operating systems, Application Software: Introduction to MS Office (MS-Word, MS Powerpoint, MS-Excel) Computer Programming and Languages: Algorithms, flow chart, decision tables, pseudo code, Low level languages and introduction to high level languages. "
              },
              unit_3: {
                title: "Computer Number System",
                chapters: "Decimal, Binary, Octal, Hexa-decimal.Conversion: Decimal to all other number systems, Binary to octal and hexa decimal, Addition of binary numbers, Binary subtraction, Use of complements to represent negative numbers, Conversion of a binary fraction to a decimal fraction and decimal to binary fraction, Binary Coded Decimal(BCD), ASCII Codes, EBCDIC codes, Gray codes, Unicodes. "
              },
              unit_4: {
                title: "Computer Network & Internet",
                chapters: "Basic elements of a communication system, Data transmission modes, Data Transmission speed, Data transmission media, Digital and Analog Transmission, Network topologies,<br/> Network Types (LAN, WAN and MAN), Client and Servers , Intranet, Extranet.<br/> Internet: Terminologies related to Internet: Protocol, Domain name, IP address, URL, World Wide Web.<br/> Overview of various services on Internet: E-mail, FTP, Telnet, Chat , Instant Messaging.<br/> "
              }
            }
          },
          {
            title: "Physics",
            paper_id: 20109,
            syllabus: {
              unit_1: {
                title: "Law of Motion",
                chapters: "Force and Inertia, Law of inertia or Newton’s first law of motion, Newton’s Second law of motion, Newton’s third law of motion and it’s applications, Basic forces in nature, Weight of body in lift, Equilibrium of concurrent forces, Lemi’s Theorem<br/> Friction: Cause of friction, Types of friction, Laws of friction, Angle of friction and repose, Centripetal and centrifugal force, velocity of vehicle on curved leveled and banked road."
              },
              unit_2: {
                title: "Work, Energy & Power",
                chapters: "Work, Conservative force, Power, Kinetic Energy, Work energy theorem, Potential Energy, Conservation of gravitational P.E. into K.E., P.E. of spring.<br/> Collisions: Types of collision, elastic collision in 1D & 2D, Inelastic collision in 1D, Perfectly inelastic collision in 1D."
              },
              unit_3: {
                title: "Electricity & electromagnetism",
                chapters: "Electric charge, Electron theory of electrification, Frictional electricity, Properties of electric charge, Coulomb’s Law, Superposition Principle, Electric field intensity, Electric Lines of forces.<br/> Electrostatics: Line integral of electric field, Electrostatic potential, State & Proof of Gauss’s theorem.<br/> Capacitance: Principal of Capacitor, Parallel and spherical capacitors, Grouping of capacitors and their capacitance, Effect of dielectric in capacitors.<br/> Current Electricity: Current, Ohm’s Law, Resistance, Grouping of resistance, Krichoff’s rule, Wheatstone bridge, Slide Wire Bridge."
              },
              unit_4: {
                title: "Structure of Atom",
                chapters: "Thomson’s atomic model, Rutherford’s alpha scattering experiment and atomic model, Postulates of Bohr’s Model.<br/> Semiconductors: Energy bands in solids, Difference between metals, insulators and semi conductors, Current carriers in semiconductors, Intrinsic semiconductor, Doping, Extrinsic semiconductors, Formation of p-n junction, Biasing of p-n junction, Light emitting diode.<br/> Transistors: Action of n-p-n & p-n-p transistors, Advantages of transistors, Integrated Circuit."
              }
            }
          }
        ]
      },
      {
        title: 2,
        subjects: [
          {
            title: "Mathematics",
            paper_id: 20102,
            syllabus: {
              unit_1: {
                title: "SETS, RELATIONS AND FUNCTIONS",
                chapters: "Sets, Subsets, Equal Sets Universal Sets, Finite and Infinite Sets, Operation on Sets, Union, Intersection and Complements of Sets, Cartesian Product, Cardinality of Set, Simple  Applications.<br/> RELATIONS AND FUNCTIONS: Properties of Relations, Equivalence Relation, Partial Order Relation Function: Domain and Range, Onto, Into and One to One Functions, Composite and Inverse Functions, Hashing functions, Recursive function."
              },
              unit_2: {
                title: "PARTIAL ORDER RELATIONS AND LATTICES",
                chapters: "Partial Order Sets, Representation of POSETS using Hasse diagram, Chains, Maximal and Minimal Point, Glb, lub, Lattices & Algebric Systems, Principle of Duality, Basic Properties, Sublattices, Distributed & Complemented Lattices."
              },
              unit_3: {
                title: "Graphs",
                chapters: "Integral as Limit of Sum, Riemann Sum, Fundamental Theorem of Calculus, Indefinite Integrals, Methods of Integration Substitution, By Parts, Partial Fractions, Integration of Algebraic and transcedental Functions, Reduction Formulae for Trigonometric Functions, Gamma and Beta Functions."
              },
              unit_4: {
                title: "Propositional Logic",
                chapters: "Logic: Proposition, First order logic, Basic logical operation, truth tables, tautologies, contradictions, Algebra of Proposition, logical implications, logical equivalence, predicates, Universal and existential quantifiers."
              }
            }
          },
          {
            title: "Principles of Management",
            paper_id: 20104,
            syllabus: {
              unit_1: {
                title: "Management",
                chapters: "Meaning & concept, Management principles (Fayol & Taylor), Management process (in brief), Managerial levels, Roles & skills of a manager, Management Theories (Classical, Neo classical, Behavioral, Systems & Contingency)"
              },
              unit_2: {
                title: "Planning & Organizing",
                chapters: "Meaning, Purpose & process, Decision making: Concept & process, <br/> Organizing: Process, Departmentation, Authority & Responsibility relationships, Decentralization. Staffing: Nature & Importance,"
              },
              unit_3: {
                title: "Staffing, Directing & Controlling",
                chapters: "Meaning, Purpose & process, Decision making: Concept & process, <br/> Organizing: Process, Departmentation, Authority & Responsibility relationships, <br/>Decentralization. Staffing: Nature & Importance,"
              },
              unit_4: {
                title: "Managing People",
                chapters: "Meaning, Need of understanding human behavior in organization, Models of OB, Major concepts in OB (elementary)- Personality, Learning, Perception & Attitude Building."
              }
            }
          },
          {
            title: "Digital Electronics",
            paper_id: 20106,
            syllabus: {
              unit_1: {
                title: "Logic gates, Logic Families & Boolean Algebra",
                chapters: "NOT , AND, OR, Universal gates- NAND , NOR. EX-OR and EX-NOR gates. Diode and Transistor as a switch <br/> Logic Families-RTL,DTL,TTL,ECL,CMOS – (Main features only - without details of circuit connections and working). Definition of- current and voltage parameters, noise margin, Fan-in, Fan-out <br/> Boolean Algebra : Basics Laws of Boolean Algebra, Logic Gates, Simplifications of Boolean equations using K-maps."
              },
              unit_2: {
                title: "Number systems, Arithmetic Circuits & Combinational Circuits",
                chapters: "Review of various number systems (Binary, Octal, Hexadecimal), Definition of BCD , Gray codes and Excess – 3 codes and their application (without design of code convertors), Parity generation and Checking.<br/> Arithmetic Circuits : Adder, Subtractor, Parallel binary adder/Subtractor, binary multiplier and dibvider.<br/> Combinational Circuits:  Multiplexers, De-Multiplexers, decoders, encoders"
              },
              unit_3: {
                title: "Flip-flops & Shift Registers",
                chapters: "S-R, D, J-K, T, Clocked Flip-flop, Race around condition, Master slave Flip-Flop, Realisation of one flip-flop using other flip-flop. <br/> Shift Registers : Serial-in-serial-out, serial-in-parallel-out, parallel-in-serial-out and parallel-in-parallel-out, Bi-directional shift register."
              },
              unit_4: {
                title: "Counters",
                chapters: "Ripple counter, Synchronous Counter, Modulo Counters, Ring Counter, Twisted Ring Counter.<br/> Memory Devices - RAM, ROM, PAL & PLA"
              }
            }
          },
          {
            title: "Data Structures Using C",
            paper_id: 20108,
            syllabus: {
              unit_1: {
                title: "Introduction to Data Structures, Arrays & Stacks and Queues",
                chapters: "Basic Terminology, Elementary Data Organizations, Classification of data structures and its operations. <br/> Arrays: Representation of single and multidimensional arrays (up to three dimensions) ; sparse arrays - lower and upper triangular matrices and Tri-diagonal matrices; addition and subtraction of two sparse arrays. (Multidimensional, and, sparse arrays, to be given elementary treatment.)<br/> Stacks and Queues: Introduction and primitive operations on stack; Stack application: Polish Notations; Evaluation of postfix expression; Conversion from infix to postfix; Introduction and primitive operations on queues; D-queues and priority queues."
              },
              unit_2: {
                title: "Lists & trees",
                chapters: "Introduction to linked lists; Sequential and linked lists, operations such as traversal, insertion, deletion, searching, Two way lists and Use of headers <br/> Trees: Introduction and terminology; Traversal of binary trees; Recursive algorithms for tree operations such as traversal, insertion and deletion"
              },
              unit_3: {
                title: "Trees",
                chapters: "Introduction to and creation of AVL trees and m-way search trees - (elementary treatment to be given); Multilevel indexing and B-Trees: Introduction; Indexing with binary search trees; Multilevel indexing, a better approach to tree indexes; Example for creating a B-tree."
              },
              unit_4: {
                title: "Sorting & Searching Techniques",
                chapters: "Insertion sort, selection sort and merge sort.linear search, binary search and hashing. (Complexities NOT to be discussed for sorting and searching)"
              }
            }
          },
          {
            title: "Database Management System",
            paper_id: 20110,
            syllabus: {
              unit_1: {
                title: "Introduction: to DBMS and Data Modeling using Entity Relationship Model",
                chapters: "An overview of database management system, database system Vs file system, Characteristics of database approach, DBMS architecture , data models, schema and instances, data independence. <br/> Data Modeling using Entity Relationship Model: Entity, Entity types, entity set, notation for ER diagram, attributes and keys, Concepts of composite,derived and multivalued attributes, Super Key, candidate key, primary key, relationships, relation types, weak entities, enhanced E-R and object modeling, Sub Classes:, Super classes, inheritance, specialization and generalization."
              },
              unit_2: {
                title: "Introduction to SQL",
                chapters: "Overview , Characteristics of SQL. Advantage of SQL, SQL data types and literals. <br/> Types of SQL commands: DDL, DML, DCL. Basic SQL Queries. <br/> Logical operators :BETWEEN, IN, AND, OR and NOT <br/> Null Values: Disallowing Null Values, Comparisons Using Null Values <br/> Integrity constraints: Primary Key, Not NULL, Unique, Check, Referential key Introduction to Nested Queries, Correlated Nested Queries, Set-Comparison Operators, Aggregate Operators: The GROUP BY and HAVING Clauses, <br/> Joins: Inner joins, Outer Joins, Left outer, Right outer, full outer joins. Overview of views and indexes."
              },
              unit_3: {
                title: "Relational Data Model, Relational Algebra & Data Normalization",
                chapters: "Relational model terminology domains, Attributes, Tuples, Relations, characteristics of relations, relational constraints domain constraints, key constraints and constraints on null, relational DB schema.Codd’s Rules <br/> Relational algebra: Basic operations selection and projection, Set Theoretic operations Union, Intersection, set difference and division, <br/> Join operations: Inner , Outer ,Left outer, Right outer and full outer join. <br/> ER to relational Mapping: Data base design using ER to relational language. <br/>Data Normalization: Functional dependencies, Armstrong’s inference rule, Normal form up to 3rd normal form."
              },
              unit_4: {
                title: "Transaction processing and Concurrency Control",
                chapters: "Definition of Transaction, Desirable ACID properties, overview of serializability, serializable and non serializable transactions Concurrency Control: Definition of concurrency, lost update, dirty read and incorrect summary problems due to concurrency <br/> Concurrency Control Techniques: Overview of Locking,2PL,Timstamp ordering, multiversioning, validation <br/> Elementary concepts of Database security: system failure, Backup and Recovery Techniques, authorization and authentication."
              }
            }
          }
        ]
      },
      {
        title: 3,
        subjects: [
          {
            title: "Mathematics",
            paper_id: 20201,
            syllabus: {
              unit_1: {
                title: "Measures of Central Tendency & Dispersion",
                chapters: "Definition, Importance & Limitation. Collection of data and formation of frequency distribution. Graphic presentation of frequency distribution – graphics, Bars, Histogram, Diagrammatic. Measures of central tendency – mean, median and mode, partition values – quartiles, deciles and percentiles. Measures of variation – range, IQR, quartile, deciles and percentiles."
              },
              unit_2: {
                title: "Correlation/Regression",
                chapters: "Correlation Coefficient; Assumptions of correlation analysis; coefficients of determination and correlation; measurement of correlation- Karl Person’s Methods; Spearman’s rank correlation; concurrent deviation the correlation coefficient; Pitfalls and limitations associated with regression and correlation analysis; real world application using IT tools"
              },
              unit_3: {
                title: "Linear Programming & Queuing",
                chapters: "Concept a assumptions usage in business decision making linear programming problem: formulation, methods of solving: graphical and simplex, problems with mixed constraints: duality; concept, significance, usage & application in business decision making. Queuing Models: Basic structure of queuing models, Birth-Death queuing models and its steady state solution, M/M/1 and M/M/C models with infinite/finite waiting space. PERT,CPM"
              },
              unit_4: {
                title: "Transportation & Assignment Problem",
                chapters: "General structure of transportation problem, solution procedure for transportation problem, methods for finding initial solution, test for optimality. Maximization of transportation problem, transportation problem. Assignment problem approach of the assignment model, solution methods of assignment problem, maximization in an assignment, unbalanced assignment problem, restriction on assignment."
              }
            }
          },
          {
            title: "Computer Architecture",
            paper_id: 20203,
            syllabus: {
              unit_1: {
                title: "Register Transfer and Micro-operations",
                chapters: "Micro-operations:Register Transfer Language, Register Transfer, Bus and Memory Transfers, Arithmetic Micro-operations, Logic Micro-operations, Shift Microoperations, Arithmetic logic shift unit <br/> Basic Computer Organizations and Design: Instruction Codes, Computer Registers, Computer Instructions, Timing and Control, Instruction Cycle, Memory-Reference Instructions, Register reference instructions, Input - Output Instructions, Design of Accumulator Logic"
              },
              unit_2: {
                title: "Design of Microprogrammed Control Unit",
                chapters: "Central Processing Unit: Introduction, General Register Organization, Stack Organization, Instruction Formats, Addressing Modes. Difference between RISC and CISC .<br/> Matrix Multiplication, memory interleaving. "
              },
              unit_3: {
                title: "Computer Arithmetic",
                chapters: "Introduction, Multiplication Algorithms, Division Algorithms, for fixed point-members.<br/> Input-Output Organization: Peripheral Devices, Input-Output Interfaces, Asynchronous Data Transfer, Modes of Transfer, Priority Interrupt, Direct Memory Access (DMA)"
              },
              unit_4: {
                title: "Memory Organization",
                chapters: "Memory Hierarchy, Main Memory, Auxiliary Memory, Associative Memory, Cache Memory, Virtual Memory, Memory Management Hardware"
              }
            }
          },
          {
            title: "VB.net",
            paper_id: 20205,
            syllabus: {
              unit_1: {
                title: "Introduction to .Net",
                chapters: "Introduction to .Net, Two tier and Three tier client server model, .Net Architecture, Features of .Net, Advantages of .Net, .Net Framework, CLR, CTS, CLS, Assemblies, Memory management issues – Garbage Collector and collection process, Exception Handling, Code Access Security."
              },
              unit_2: {
                title: "Introduction to Visual Basic.Net IDE",
                chapters: "Creating a project, Types of project in .Net, Exploring and coding a project, Solution explorer, toolbox, properties window, Output window, Object Browser. <br/> VB.Net Programming Language: Similarities and Differences with Visual Basic, Variables, Comments, Data Types, Working with Data Structures – Arrays, Array Lists, Enumerations, Constants, Structures; Introduction to procedures, calling procedures, argument passing mechanisms, scope of variable.<br/>  Control Flow Statements – conditional statement, Loops, Nesting of Loops, MsgBox and Input Box."
              },
              unit_3: {
                title: "GUI Programming",
                chapters: "Introduction to Window Applications, Using Form – Common Controls, Properties, Methods and Events. Interacting with controls - Textbox, Label, Button, Listbox, Combobox, Checkbox, Picture Box, Radio Button, Panel, scroll bar, Timer, ListView, TreeView, toolbar, Status Bar. Dialog Controls, Creating and Using MDI applications, Toolbar, Status Bar, Creating custom controls, Creating Menus. <br/> Object Oriented Features: Classes and Objects, Access Specifiers: Private, Public and Protected, Building Classes, Reusability, Constructors, Inheritance, Overloading, Overriding, Creating and Using Namespaces."
              },
              unit_4: {
                title: "Introduction to ADO & Crystal Reports",
                chapters: "ADO vs ADO.Net, ADO.Net data namespaces, ADO.Net Object Model, Accessing data from Server Explorer, Creating Connection, Command, Data Adapter, Data Reader and Data Set with OLEDB and SQLDB, Data Binding. <br/> Crystal Report : Connection to Database, Table, Queries, Building Report, Modifying Report, Formatting Fields, Publishing and exporting reports.."
              }
            }
          },
          {
            title: "Principles Of Accounting",
            paper_id: 20207,
            syllabus: {
              unit_1: {
                title: "Accounting",
                chapters: "Meaning and nature of accounting, Scope of financial accounting, Interrelationship of Accounting with other disciplines, Branches of Accounting, Accounting concepts and convention, Accounting standards in India."
              },
              unit_2: {
                title: "Journal & Ledgers",
                chapters: "Journal, Rules of Debit and Credit, Sub Division of Journal: Cash Journal, Petty Cash Book, Purchase Journal, Purchase Return, Sales Journal, Sales Return Journal, Ledger, Trial Balance"
              },
              unit_3: {
                title: "Final Accounts",
                chapters: "Preparation of Final Accounts, Profit & Loss Account, Balance Sheet-Without adjustments and with adjustments."
              },
              unit_4: {
                title: "Inventory Management",
                chapters: "Meaning of Inventory, Objectives of Inventory Valuation, Inventory Systems, Methods of Valuation of Inventories-FIFO, LIFO and Weighted Average Method, Concept of Deprecation, Causes of Depreciation, Meaning of Depreciation Accounting, Method of Recording Depreciation, Methods of Providing Depreciation."
              }
            }
          },
          {
            title: "Object Oriented Programming with C++",
            paper_id: 20209,
            syllabus: {
              unit_1: {
                title: "Introduction",
                chapters: "Introducing Object-Oriented Approach, Relating to other paradigms (functional, data decomposition). Features of Procedure oriented programming, Basic Concepts of Object Oriented Programming, Benefits of OOP, Applications of OOP, Difference between C and C++, cin, cout, new, delete operators. C++ Environment: Program development environment, the language and the C++ language standards. C++ standard libraries. Introduction to various C++ compilers, C++ standard libraries, Testing the C++ program in Turbo C++/Borland C++/MicroSoft VC++/GNU C++ compiler."
              },
              unit_2: {
                title: "Classes and Objects:",
                chapters: "Encapsulation, information hiding, abstract data types, Object & classes, attributes, methods, C++ class declaration, references, this pointer, Function Overloading, Constructors and destructors, instantiation of objects, Default parameter value, C++ garbage collection, dynamic memory allocation, Meta class/abstract classes.[T1][T2]"
              },
              unit_3: {
                title: "Inheritance and Polymorphism",
                chapters: "Inheritance, Class hierarchy, derivation – public, private & protected, Aggregation, composition v/s classification hierarchies, Polymorphism, Categorization of polymorphism techniques, Method polymorphism, Polymorphism by parameter, Operator overloading, Parametric polymorphism, Virtual Function, Early v/s Late Binding."
              },
              unit_4: {
                title: "Generic Programming, Files and Exception Handling",
                chapters: "Introduction, templates, template functions, Overloading of template functions, Overriding inheritance methods.Persistant objects, Streams and files, Namespaces, The basic stream classes: C++ predefined streams, Error handling during file operations, Command Line Arguments. Types of Exception, Catching and Handling Exceptions."
              }
            }
          }
        ]
      },
      {
        title: 4,
        subjects: [
          {
            title: "Mathematics",
            paper_id: 20202,
            syllabus: {
              unit_1: {
                title: "COMBINATORICS",
                chapters: "Permutation and Combination, Repetition and Constrained Repetition, Binomial Coefficients, Binomial Theorem.<br/> PROBABILITY: Definition of Probability, Conditional Probability, Baye’s Theorem."
              },
              unit_2: {
                title: "PROBABILITY DISTRIBUTIONS",
                chapters: "Review of Mean & Standard Deviation, Mathematical Expectation, Moments, Moment Generating Functions, Binomial, Poisson and Normal Distributions."
              },
              unit_3: {
                title: "INTERPOLATION & SOLUTION OF NON LINEAR EQUATION",
                chapters: "Operators: Shift, Forward Difference, Backward Difference Operators and their Inter-relation, Interpolation Formulae-Newton’s Forward, Backward and Divided Difference Formulae: Lagrange’s Formula. <br/> SOLUTION OF NON LINEAR EQUATION: Bisection Method, False Position Method, Newton – Raphson Method for Solving Equation Involving One Variable only."
              },
              unit_4: {
                title: "SOLUTION OF LINEAR SIMULTANEOUS EQUATIONS & NUMERICAL DIFFERENTIATION",
                chapters: "Gaussian Elimination Method with and without Row Interchange: LU Decomposition: Gauss - Jacobi and Gauss-Seidel Method; Gauss – Jordan Method and to find Inverse of a Matrix by this Method. <br/> NUMERICAL DIFFERENTIATION- First and Second Order Derivatives at Tabular and Non-Tabular Points, Numerical Integration, Trapezoidal Rule, Simpsons 1/3 Rule: Error in Each Formula (without proof)."
              }
            }
          },
          {
            title: "Web Technologies",
            paper_id: 20204,
            syllabus: {
              unit_1: {
                title: "History of the Internet & Static Web Development",
                chapters: "History of the Internet and World Wide Web, Search Engines, News-group, E-mail and its Protocols, Web Portal, Browsers and their versions, Its functions, URLs, web sites, Domain names, Portals. <br/> Static Web Development: HTML - Introduction to HTML, HTML Document structure tags, HTML comments, Text formatting, inserting special characters, anchor tag, adding images and Sound, lists types of lists, tables, frames and floating frames, Developing Forms, Image maps."
              },
              unit_2: {
                title: "Introduction to Java Script and Cascading Style Sheet",
                chapters: "Introduction to Java Script: Data Types, Control Statements, operators, Built in and User Defined Functions, Objects in Java Script, Handling Events. <br/> Cascading Style Sheet: Types of Style Sheets – Internal, inline and External style sheets, creating styles, link tag."
              },
              unit_3: {
                title: "DHTML",
                chapters: "DHTML : Introduction to DHTML, JavaScript & DHTML, Document Object Model, Filters and Transitions, DHTML Events, Dynamically change style to HTML Documents."
              },
              unit_4: {
                title: "Introduction to WYSIWYG Design tools & XML",
                chapters: "Introduction to WYSIWYG Design tools, Introduction to Dreamweaver, Website Creation and maintenance, Web Hosting and Publishing Concepts, XML: Introduction to XML-Mark up languages, Features of Mark up languages, XML Naming rules, Building block of XML Document, Difference between HTML & XML <br/> Components of XML, XML Parser, DTD’s Using XML with HTML and CSS"
              }
            }
          },
          {
            title: "Java Programming",
            paper_id: 20206,
            syllabus: {
              unit_1: {
                title: "Java Programming",
                chapters: "Introduction, Data types, acces specifiers, operators, control statements, arrays. <br/> Classes: Fundamentals, objects, methods,constructors. Inheritance: Super class,sub class,this and super operator, method overriding, use of final, packages, abstract class, interface. <br/>  Polymorphism: Method overloading, constructor overloading."
              },
              unit_2: {
                title: "Exception Handling & Multi Threading",
                chapters: "Exception Class, built in checked and unchecked exceptions, user defined exceptions, use of try, catch, throw, throws, finally. <br/>  Multi threaded programming: Overview, comparison with multiprocessing ,Thread class and runnable interface, life cycle, creation of single and multiple threads, thread priorities, overview of Synchronization. <br/> Java Library: String handling (only main functions), String Buffer class. Elementary concepts of Input/Output :byte and character streams, System.in and Sysem.out, print and println, reading from a file and writing in a file."
              },
              unit_3: {
                title: "Software Development using Java",
                chapters: "Applets :Introduction, Life cycle, creation and implementation, <br/> AWT controls: Button, Label,TextField, TextArea, Choice lists, list, scrollbars, check boxes, Layout managers, <br/> Elementary concepts of Event Handling :Delegation Event Model, Event classes and listeners, Adapter classes, Inner classes. Swings: Introduction and comparison with AWT controls."
              },
              unit_4: {
                title: "Networking Basics and Introduction to Java Servlets",
                chapters: "Socket (datagram and TCP/IP based client and server socket), factory methods, InetAddress <br/>  JDBC: JDBC Architecture, JDBC Drivers, Connecting to the Database Introduction to Java Servlets: Life cycle,Interfaces and classes in javax.servlet package(only description) Creating a simple servlet"
              }
            }
          },
          {
            title: "Software Engineering",
            paper_id: 20208,
            syllabus: {
              unit_1: {
                title: "Software life cycle models & Software Requirements analysis & specifications",
                chapters: "Software Crisis, Software Processes & Characteristics, Software life cycle models, Waterfall, Prototype, Evolutionary and Spiral Models <br/> Software Requirements analysis & specifications: Requirement engineering, requirement elicitation techniques like FAST, QFD, Requirements analysis using DFD(with case studies), Data dictionaries & ER Diagrams, Requirements documentation, Nature of SRS, Characteristics & organization of SRS."
              },
              unit_2: {
                title: "Software Project Management Concepts",
                chapters: "The Management spectrum, The People, The Problem, The Process, The Project. <br/> Software Project Planning: Size Estimation like lines of Code & Function Count, Cost Estimation Models, COCOMO, Risk Management."
              },
              unit_3: {
                title: "Software Design",
                chapters: "Cohesion & Coupling, Classification of Cohesiveness & Coupling, Layered arrangement of modules, Function Oriented Design, Object Oriented Design <br/> Software Metrics: Software measurements: What & Why, Token Count, Halstead Software Science Measures, Design Metrics, Data Structure Metrics."
              },
              unit_4: {
                title: "Software Testing & Maintainance",
                chapters: "Code Review, Testing Process, Types of Testing, Functional Testing, Structural Testing, Test Activities, Unit Testing, Integration Testing and System Testing(Performance Testing and Error Seeding), Debugging Activities. <br/>  Software Maintenance: Management of Maintenance, Maintenance Process, Reverse Engineering, Software Re-engineering, Configuration Management, Documentation."
              }
            }
          },
          {
            title: "Computer Networks",
            paper_id: 20210,
            syllabus: {
              unit_1: {
                title: "Basic Concepts ",
                chapters: "Components of data communication, distributed processing, Line configuration, topology, transmission mode, and categories of networks. OSI and TCP/IP Models: Layers and their functions, comparison of models. Digital Transmission: Interfaces and Modems: DTE-DCE Interface, modems, cable modems. Transmission Media: Guided and unguided, Attenuation, distortion, noise, throughput, propagation speed and time, wavelength, Shannon Capacity."
              },
              unit_2: {
                title: "Telephony & ISDN",
                chapters: "Multiplexing, error detection and correction: Many to one, one to many, WDM, TDM, FDM, circuit switching, packet switching and message switching. Data Link control protocols: Line discipline, flow control, error control, synchronous and asynchronous protocols overview. <br/> ISDN: Services, historical outline, subscriber’s access, ISDN, Layers, and broadband ISDN."
              },
              unit_3: {
                title: "Devices ",
                chapters: "Devices: Repeaters, bridges, gateways, routers, The Network Layer, Design Issues, Network Layer Addressing and Routing concepts (Forwarding Function, Filtering Function);Routing Methods (Static and dynamic routing, Distributed routing, Hierarchical Routing);Distance Vector Protocol, Link State protocol."
              },
              unit_4: {
                title: "OSI Model:",
                chapters: "Transport and upper layers in OSI Model: Transport layer functions, connection management, Functions of session layers, Presentation layer, and Application layer."
              }
            }
          }
        ]
      },
      {
        title: 5,
        subjects: [
          {
            title: "Operating System",
            paper_id: 20301,
            syllabus: {
              unit_1: {
                title: "Introduction, Memory Management",
                chapters: "What is an Operating System, Simple Batch Systems, Multiprogrammed Batches systems, Time-Sharing Systems, Personal-computer systems, Parallel systems, Distributed Systems, Real-Time Systems<br/> Memory Management: Background, Logical versus Physical Address space, swapping, Contiguous allocation, Paging, Segmentation <br/> Virtual Memory: Demand Paging, Page Replacement, Page-replacement Algorithms, Performance of Demand Paging, Allocation of Frames, Thrashing, Other Considerations"
              },
              unit_2: {
                title: "Processes & CPU Scheduling",
                chapters: "Process Concept, Process Scheduling, Operation on Processes <br/> CPU Scheduling: Basic Concepts, Scheduling Criteria, Scheduling Algorithms, Multiple- Processor Scheduling, <br/> Process Synchronization: Background, The Critical-Section Problem, Synchronization Hardware, Semaphores, Classical Problems of Synchronization"
              },
              unit_3: {
                title: "Deadlocks & Device Management",
                chapters: "Techniques for Device Management, Dedicated Devices, Shared Devices, Virtual Devices; Input or Output Devices, Storage Devices, Buffering, Secondary- Storage Structure: Disk Structure, Disk Scheduling, Disk Management, Swap-Space Management, Disk Reliability"
              },
              unit_4: {
                title: "Information Management",
                chapters: "Introduction, A Simple File System, General Model of a File System, Types of File System File-System Interface: File Concept, Access Methods, Directory Structure, Protection: Goals of protection, Domain of protection, Access rights, Consistency Semantics Security: Authentication, Program threats, System threats, Encryption."
              }
            }
          },
          {
            title: "Computer Graphics",
            paper_id: 20303,
            syllabus: {
              unit_1: {
                title: "Introduction and Graphics Hardware",
                chapters: "The Advantages of Interactive Graphics, Representative Uses of Computer Graphics, Classification of Applications, Development of Hardware and Software for Computer Graphics, Conceptual Framework for Interactive Graphics. <br/> Overview, Scan Converting Lines, Scan Converting Circles, Scan Converting Ellipses. <br/> Graphics Hardware - Hardcopy Technologies, Display Technologies, Raster-Scan Display Systems, The Video Controller, Random-Scan Display Processor, Input Devices for Operator Interaction, Image Scanners, Antialiasing. <br/> Clipping -  Cohen- Sutherland Algorithm, Cyrus-Beck Algorithm, Midpoint Subdivision algorithm."
              },
              unit_2: {
                title: "Geometrical Transformations",
                chapters: "2D Transformations, Homogeneous Coordinates and Matrix Representation of 2D Transformations, Composition of 2D Transformations, The Window-to-Viewport Transformation, Efficiency, Matrix Representation of 3D Transformations, Transformations as a Change in Coordinate System."
              },
              unit_3: {
                title: "Representing Curves & Surfaces and Solid Modeling",
                chapters: "Polygon Meshes, Parametric Cubic Curves <br/> Solid Modeling - Representing Solids, Regularized Boolean Set Operations, Primitive Instancing, Sweep Representations, Boundary Representations, Spatial Partitioning Representations, Constructive Solid Geometry, Comparison of Representations, User Interfaces for Solid Modeling."
              },
              unit_4: {
                title: "Three Dimensional Viewing & Hidden Surface Removal",
                chapters: "Introduction, Representation of Three-dimensional objects, Projections, Parallel projections: Orthographic Projections, Oblique Projections. Perspective Projection, Three dimensional clipping, Three-dimensional Cohen-Sutherland clipping algorithm. Hidden Surface Removal: Depth-Buffer(z-buffer) method, Depth-sorting Method(Painter’s algorithm) "
              }
            }
          },
          {
            title: "E-commerce",
            paper_id: 20305,
            syllabus: {
              unit_1: {
                title: "An Overview of E-Commerce and An Overview of E-Commerce",
                chapters: "Overview: Trade Process & Trade Cycles their linkages with information exchange; Definitions of E-commerce & E-business & their difference; Problems with Manual Systems, Aims of E-commerce, Functions of E-commerce, Applications of E-commerce in business functions, Tools & Technologies for E-commerce,Types of E-commerce,Operational & Strategic benefits of E-commerce, Issues & Challenges in E-commerce . <br/> Electronic Data Interchange (EDI): Definition, Concept & Evolution of EDI, Traditional versus EDI enabled system for document exchange, EDI Layered Architecture, Process of EDI Message Exchange, Components of EDI, UNEDIFACT Standards & Message Structure, EDI in India, EDI enabled procurement process, EDI Implementation, UN ‘Model Interchange Agreement’ for international commercial use of EDI. <br/> Web based E-Commerce: Need for web based business, Choosing the right format of website: Characteristics of PR site, Marketing site, Sales site/web-store and vertical & horizontal portals; Steps in setting up business on Internet: Selection & registration of domain name, Website development-client & server side tools, web authoring tools, catalogue & web store tools, Website hosting considerations-own versus rented server; Website Maintenance Online Promotion tools & techniques: Getting links to your site, banner advertisements & measuring advertisement effectiveness, Web Traffic Analysis: Various measures, structure of log file data at server side & its analysis for promotion and tools for analysis, Search Engine optimization techniques, Payment Gateways for online payment, Security of transactions on Web: Selling through Secure Servers, use of digital certificates and international standards."
              },
              unit_2: {
                title: "Intranet, Extranet and VPN, Electronic Payment Systems and Security E-Commerce Transactions",
                chapters: "Architecture of Intranet, Intranet Software, Applications of Intranets, Intranet Application Case Studies, Considerations in Intranet Deployment; The architecture of Extranets, Extranet Products & Services, Applications of Extranets, Business Models of Extranet Applications; Virtual Private Network (VPN): Architecture of VPN - service provider dependent & service provider independent configurations, VPN Security- User authentication & Data Security. <br/> Electronic Payment Systems: E-cash: Purchasing & using of e-cash; Electronic Purses their loading with cash and use; E-cheque payment system; Online Third Party Verified Payment System through Credit & Debit Cards & encryption mechanism; ATM based cash disbursement system; Electronic Bill Payment System; 6. Inter bank clearing system. <br/> Security E-Commerce Transactions: Security issues: confidentiality, integrity, authentication, non-repudiation & access control their objectives & techniques; Types of security attacks; Cryptography & Digital Signatures: Symmetric & asymmetric cryptography, Public-Private Key Cryptography, Digital signatures & their use, Public Key Infrastructure (Digital Certificate, Certification Authority, Registration Authority, Key Repository), SSL and SET, Legal issues in cryptography"
              },
              unit_3: {
                title: "Business Strategy in an Electronic Age & Business Process Management",
                chapters: "Impact of Internet on Competition - Porter’s Five Forces Model & Business Strategies in Digital Economy; Impact of IT Enabled Systems on ue Chain Model; Supply Chain & Supply Chain Management: Definition & flows in a supply chain, Evolution of supply chain-JIT & Quick Response Retailing, Push, Pull and Built-to-order model of supply chains, E-commerce enabled supply chain management using Internet, Intranet & Extranet. <br/> Business Process Management: Concepts of Business Process Management & Business Process Reengineering; Call Centre operations: Purpose & functions, mode of operations, Components (Telephony, Web, Application servers & middle ware, Desktop applications); Customer Relationship Management (CRM)."
              },
              unit_4: {
                title: "Technology & Legal Issues in E-Commerce & Applications of E-Commerce",
                chapters: "Technological Issues: Availability of telecom infrastructure, interoperability, bandwidth issues, technical standards & spectrum management, Expansion of Internet: 128 bit IP addressing issue; Legal Issues: Uniform Commercial code for E-commerce (‘Model Law on Electronic Commerce’ by United Nations Commission on International Trade Law, IT Act 2000 by Govt of India), Intellectual Property Protection (Copyrights, Patents, Trademarks & Domain Names), Privacy, Security (storage of electronic messages & their evidence value), Customs & Taxation laws, Role of governments & regulatory bodies, Jurisdiction issues. <br/> Applications of E-Commerce & Case Studies: 1. Case studies & applications of e-commerce in Retailing, Banking, Manufacturing, Airlines & Railway reservation & e-governance; 2. yber Crimes."
              }
            }
          },
          {
            title: "Software Testing",
            paper_id: 20307,
            syllabus: {
              unit_1: {
                title: "Introduction",
                chapters: "What is software testing and why it is so hard? Psychology and economics of software testing, Principles of Software Testing , Error, Fault, Failure, Incident, Error and Fault Taxonomies, Test Cases, Limitations of Testing, Code inspections , desk checking, group walkthroughs and peer reviews. Overview of Graph Theory for testers."
              },
              unit_2: {
                title: "Functional and Structural Testing",
                chapters: "Boundary Value Analysis, Equivalence Class Testing, Decision Table Based Testing, Cause Effect Graphing Technique. <br/> Structural Testing: Path testing, DD-Paths, Cyclomatic Complexity, Graph Metrics, Data Flow Testing, Slice based testing"
              },
              unit_3: {
                title: "Testing Activities",
                chapters: "Unit Testing, Levels of Testing, Integration Testing, System Testing, Debugging, Regression Testing, Extreme Testing"
              },
              unit_4: {
                title: "Object Oriented Testing",
                chapters: "Issues in Object Oriented Testing, Class Testing, GUI Testing, Object Oriented Integration and System Testing. Testing Internet applications: Overview, challenges and strategies of testing internet applications."
              }
            }
          },
          {
            title: "Microprocessor",
            paper_id: 20309,
            syllabus: {
              unit_1: {
                title: "Introduction to Microprocessors",
                chapters: "Introduction to Microprocessors , microcontrollers and microcomputers, Study of 8085 8 bit Microprocessor, pin-out, its internal architecture, addressing modes, 8085 Microprocessor complete instruction set and timing. Arithmetic, logic , branch instructions, programming techniques- looping, counting, indexing, stacks and subroutines, code conversion, BCD Arithmetic."
              },
              unit_2: {
                title: " ",
                chapters: "Counters and time delays using programming, Software development systems and assemblers, writing complete programs for 8085. Basic interfacing concepts, interfacing memory, interfacing keyboards and output displays , memory mapped and isolated I/O. Interrupts and their processing, 8259, Interrupt interface circuits using 8259."
              },
              unit_3: {
                title: "General purpose programmable peripheral devices",
                chapters: "General purpose programmable peripheral devices-8255,8253 programmable interval timer,8257 DMA controller, serial I/O and data communication,RS-232C standard, Serial I/O lines, 8251A Programmable communications interface. "
              },
              unit_4: {
                title: "Introduction to 8086/8088 microprocessors",
                chapters: "Introduction to 8086/8088 microprocessors, pin-out, architecture, segmented memory, timing diagrams, addressing modes, instruction set. Comparison of 8085, 8086, 8088 microprocessors"
              }
            }
          },
          {
            title: "Web Based Programming (PHP)",
            paper_id: 20313,
            syllabus: {
              unit_1: {
                title: "Introduction to web applications",
                chapters: "Introduction to web applications, HTML, Client Side Scripting Vs Server Side Scripting, Web Servers : Local Servers and Remote Servers, Installing Web servers, Internet Information Server (IIS) and Personal Web Server (PWS). Static website vs Dynamic website development."
              },
              unit_2: {
                title: "Introduction to PHP",
                chapters: "Introduction to PHP, Start and End Tags of PHP, Data types in PHP, Variables, Constants, operators and Expressions, printing data on PHP page, Control statements – if, switch case, for, while, do while. <br/> Arrays: Initialization of an array, Iterating through an array, Sorting arrays, Array Functions, Functions: Defining and Calling Functions, Passing by Value and passing By references, Inbuilt Functions."
              },
              unit_3: {
                title: "Working with Forms files",
                chapters: "Working with Forms: Get and Post Methods, Querystrings, HTML form controls and PHP, Maintaining User State: Cookies, Sessions, Application State. <br/> Working With Files: Opening and Closing Files, Reading and Writing to Files, Getting Information on Files"
              },
              unit_4: {
                title: "PHP Database Connectivity:",
                chapters: "PHP Database Connectivity: Introduction to MYSQL, Creating database and other operations on database, connecting to a database, Use a particular database, Sending query to database, Parsing of the query results, Checking data errors."
              }
            }
          },
          {
            title: "Business Economics",
            paper_id: 20315,
            syllabus: {
              unit_1: {
                title: "The Scope and Method of Economics",
                chapters: "The Scope and Method of Economics, The Economic Problem: Scarcity & Choice, The Price Mechanism, Demand & Supply Equilibrium: The concept of Elasticity and its Applications. <br/> Laws of Returns & Returns to Scale; Economies and Diseconomies of Scale."
              },
              unit_2: {
                title: "Market Structure",
                chapters: "Market Structure: Equilibrium of a Firm and Price, Output Determination Under Perfect Competition, Monopoly, Monopolistic Competition & Oligopoly."
              },
              unit_3: {
                title: "Macro Economic Concerns:",
                chapters: "Macro Economic Concerns: Inflation, Unemployment, Trade-Cycles: Circular Flow upto Four Sector Economy, Government in the Macro Economy: Fiscal Policy, Monetary Policy"               },
              unit_4: {
                title: "The World Economy",
                chapters: "The World Economy – WTO, Globalisation, MNCs, Outsourcing, Foreign Capital in India, Trips, Groups of Twenty (G-20), Issues of Dumping, Export- Import Policy 2004-2009."
              }
            }
          }
        ]
      },
      {
        title: 6,
        subjects: [
          {
            title: "Data warehouse and data mining",
            paper_id: 20302,
            syllabus: {
              unit_1: {
                title: "Data mining and Data preprocessing",
                chapters: "Inttroduction, Data mining – on what kind of data, data mining functionalities – what kind of patterns to be mined, Classification of data mining systems, data mining task primitives, integration of a data mining systems with a database or data warehouse systems, major issues in data mining. <br/> Data preprocessing: Descriptive data summarization, data cleaning, data integration and transformation, data reduction, data descretization and concept hierarchy generation."
              },
              unit_2: {
                title: "Data warehouse and OLAP technology",
                chapters: "What is data warehouse, A multidimensional data model, data warehouse architecture, data warehouse implementation, data warehouse usage, OLAP, OLAM <br/> Mining frequent patterns, association and correlation, efficient and scalable frequent itemset mining methods, From association mining to correlation analysis."
              },
              unit_3: {
                title: "Classification and prediction",
                chapters: "Introduction, issues, classification by decision tree induction, rule based classification, classification by back propagation, lazy learners, other classification methods, Prediction: accuracy and error measures, evaluating the accuracy of a classifier or predictor. <br/> Cluster Analysis: Types of data in cluster analysis, a categorization of major clustering methods, partitioning methods."
              },
              unit_4: {
                title: "Mining complex types of data",
                chapters: "Multidimensional analysis and descriptive mining of complex data objects, mining spatial database, multimedia database, mining world wide web. Applications and trends in data mining: Data mining applications, data mining system products and research prototypes, social impact of data mining, trends in data mining."
              }
            }
          },
          {
            title: "Mobile Computing",
            paper_id: 20304,
            syllabus: {
              unit_1: {
                title: "Introduction to wireless communications",
                chapters: "Introduction to wireless communications: Applications, Short History of Wireless Communications, Market of Mobile Communications. <br/> Elementary Knowledge on Wireless Transmission: Frequency of Radio Transmission, Signals, Antennas, Signal Propagation: Path Loss of Radio Signals, Additional Signal Propagation Effects, Multipath Propagation, Multiplexing: Space Division Multiplexing, Frequency Division Multiplexing, Time Division Multiplexing, Code Division Multiplexing, Modulation: Amplitude Shift Keying, Frequency Shift Keying, Phase Shift Keying, Advanced Frequency Shift Keying, Advanced Phase Shift Keying, Multicarrier Modulation, Spread Spectrum: Direct Sequence Spread Spectrum, Frequency Hopping Spread Spectrum, Cellular Systems."
              },
              unit_2: {
                title: "Elementary Knowledge on Medium Access Control and Telecommunications Systems",
                chapters: "Elementary Knowledge on Medium Access Control: Motivation for a specialized MAC, Hidden and exposed terminals, Near and far terminals, Introduction to SDMA, FDMA, TDMA: Fixed TDM, Classical Aloha, Slotted Aloha, Carrier sense multiple access, Demand assigned multiple access, PRMA packet reservation multiple access, Reservation TDMA, Multiple access with collision avoidance, Polling, Inhibit sense multiple access, CDMA, Spread Aloha multiple access, Mobile communications, Comparison of S/T/F/CDMA. <br/> Elementary Knowledge on Telecommunications Systems: GSM: Mobile services, System architecture, Radio interface, Protocols, Localization and calling, Handover, Security, New data services, DECT: System architecture, Protocol architecture. Elementary Knowledge on Satellite systems: History, Applications, Basics: GEO, LEO, MEO, Routing, Localization, Handover."
              },
              unit_3: {
                title: "Mobile Internet & Implementing WAP Services: WML",
                chapters: "Mobile Internet: Introducing the Mobile Internet, Services for the mobile Internet, Business opportunities. <br/> Implementing WAP Services: WML: WML Variables and Contexts: Variable Substitution, Setting Variables, Browser Contexts, WML Tasks and Events, WML User Interaction: Problems with Web Interaction, Interaction in WAP, Elements: <input> , <select> ,<option> , <optgroup>, <do> , <anchor> , <a> , The tabindex Attribute, WML Timers, WML Decks, Templates, and Cards: Elements: <wml>, <head>, <access>, <meta> , <card> , <template>, WML Text and Text Formatting, Elements <p>, <br>, Character Formatting, Tables, WML Images: <img> Element, The WBMP Image Format."
              },
              unit_4: {
                title: "WAP",
                chapters: "WAP: the Mobile Internet Standard, Making the Internet Mobile: Challenges and Pitfalls, Overview of the Wireless Application Protocol <br/> Implementing WAP Services: WML Script: Datatypes, Variables, and Conversions, Operators and Expressions: Operand Conversions, Assignment Operators, Arithmetic Operators, Bitwise Operators, Shift Operators, Logical Operators, Increment and Decrement Operators, Comparison Operators, Type Operators, The Conditional Operator, The Comma Operator, Precedence and Associativity, WMLScript Statements: Expressions as Statements, Blocks of Statements, Conditions, Loops, Returning from a Function, Other Statements, WMLScript Functions: Function Declarations, Function Calls, Calls to Other Script Units, Calling WMLScript from WML, Standard Libraries, WMLScript Pragmas: The access Pragma, The meta Pragma, Elementry Knowledge on Libraries: Lang , Float , String ,URL , WMLBrowser , Dialogs"
              }
            }
          },
          {
            title: "Linux Environment",
            paper_id: 20306,
            syllabus: {
              unit_1: {
                title: "UNIX & LINUX",
                chapters: "UNIX & LINUX:- Overview of UNIX and LINUX Architectures, UNIX Principles,GNU Project/FSF,GPL,Getting help in Linux with –help,whatis,man command, info command, simple commands like date,whoami, who, w, cal, bc ,hostname,uname, concept of aliases etc Linux filesystem types ext2, ext3, ext4,Basic linux directory structure and the functions of different directories basic directory navigation commands like cd, mv, copy,rm,cat command , less command, runlevel (importance of /etc/inittab)"
              },
              unit_2: {
                title: " ",
                chapters: "Standard Input and Output, Redirecting input and Output, Using Pipes to connect processes, tee command, Linux File Security, permission types, examining permissions, changing permissions(symbolic method numeric method),default permissions and umask Vi editor basics, three modes of vi editor,concept of inodes,inodes and directories,cp and inodes ,mv and inodes rm and inodes,symbolic links and hard links,mount and umount command, creating archives, tar,gzip,gunzip,bzip2,bunzip2(basic usage of these commands)"
              },
              unit_3: {
                title: "Enivironment and Local variables",
                chapters: "Enivironment variables(HOME,LANG,SHELL,USER,DISPLAY,VISUAL),Local variables, concept of /etc/passwd, /etc/shadow, /etc/group,and su- command, special permissions(suid for an executable,sgid for an executable,sgid for a directory,sticky bit for a directory) tail, wc, sort, uniq, cut, tr, diff, aspell, basic shell scripts grep, sed, awk(basic usage) "
              },
              unit_4: {
                title: "Introduction to the linux Kernel,",
                chapters: "Process related commands(ps, top, pstree, nice, renice), Introduction to the linux Kernel, getting started with the kernel(obtaining the kernel source, installing the kernel source,using patches, the kernel source tree, building the kernel process management(process descriptor and the task structure, allocating the process descriptor, storing the process descriptor, process state, manipulating the current process state, process context, the process family tree, the Linux scheduling algorithm, overview of system calls,.Intoduction to kernel debuggers(in windows and linux)"
              }
            }
          },
          {
            title: "Multimedia & Its Applications",
            paper_id: 20308,
            syllabus: {
              unit_1: {
                title: "Introductory Concepts",
                chapters: "Multimedia - Definitions, Basic properties and medium types.(Temporal and non temporal) . Multimedia applications Uses of Multimedia, Introduction to making multimedia - The Stages of project, the requirements to make good multimedia, Multimedia skills and training . <br/> Multimedia-Hardware and Software: Multimedia Hardware - Macintosh and Windows production Platforms, Hardware peripherals - Connections, Memory and storage devices, Media software - Basic tools, making instant multimedia, Multimedia software and Authoring tools, Production Standards."
              },
              unit_2: {
                title: "Multimedia building blocks Creating & Editing Media elements",
                chapters: "Text, image, Sound, animation Analog/ digital video Data Compression: Introduction, Need, Difference of lossless/lossy compression techniques. Brief overview to different compression algorithms concern to text, audio, video and images etc"
              },
              unit_3: {
                title: "Multimedia and the Internet",
                chapters: "Multimedia and the Internet: History, Internet working, Connections, Internet Services, The World Wide Web, Tools for the WWW - Web Servers, Web Browsers, Web page makers and editors, Plug-Ins and Delivery Vehicles, HTML, Designing for the WWW -Working on the Web, Multimedia Applications - Media Communication, Media Consumption, Media Entertainment, Media games. "
              },
              unit_4: {
                title: "Multimedia-looking towards Future",
                chapters: "Multimedia-looking towards Future: Digital Communication and New Media, Interactive Television, Digital Broadcasting, Digital Radio, Multimedia Conferencing, Virtual Reality, Digital Camera. Assembling and delivering a Multimedia project-planning and costing, Designing and Producing, content and talent, Delivering, CD-ROM: The CD family, production process, CD-i – Overview – Media Types Technology. "
              }
            }
          },
          {
            title: "BioInformatics",
            paper_id: 20310,
            syllabus: {
              unit_1: {
                title: "HISTORY, SCOPE AND IMPORTANCE",
                chapters: "Important contributions - sequencing development - aims and tasks of Bioinformatics - applications of Bioinformatics - challenges nd opportunities - Computers and programs – internet - world wide web – browsers - EMB net – NCBI."
              },
              unit_2: {
                title: "DATABASES - TOOLS AND THEIR USES",
                chapters: "Importance of databases - nucleic acid sequence databases - protein sequence data bases - structure databases - bibliographic databases and virtual library - specialized analysis packages"
              },
              unit_3: {
                title: "INTRODUCTION TO BIOINFORMATICS ALGORITHMS",
                chapters: "Algorithms and Complexity- Biological algorithms versus computer algorithms – The change problem –Correct versus Incorrect Algorithms – Recursive Algorithms – Iterative versus Recursive Algorithms – Big-O Notations – Algorithm Design Techniques."
              },
              unit_4: {
                title: "UNIX COMMANDS",
                chapters: "UNIX COMMANDS: Advanced Unix commands-Introduction-ls-cat-more-, Advanced Unix commands-mv-rm-rmdir-uniq-sort- , Advanced Unix commands-grep. <br/> PERL: Introduction to Perl-scalars, Arrays-Using standard Perl modules-Perl regular expressions I. <br/> BIOPERL: Installation and usage of bioperl modules"
              }
            }
          },
          {
            title: "Artificial Intelligence",
            paper_id: 20312,
            syllabus: {
              unit_1: {
                title: "Overview of A.I",
                chapters: "Overview of A.I: Introduction to AI, Importance of AI, AI and its related field, AI techniques, Criteria for success. <br/> Problems, problem space and search: Defining the problem as a state space search, Production system and its characteristics, Issues in the design of the search problem. Heuristic search techniques: Generate and test, hill climbing, best first search technique, problem reduction, constraint satisfaction."
              },
              unit_2: {
                title: "Knowledge representation",
                chapters: "Knowledge representation: Definition and importance of knowledge, Knowledge representation, various approaches used in knowledge representation, Issues in knowledge representation. <br/> Using Predicate Logic: Represent ting Simple Facts in logic, Representing instances and is-a relationship, Computable function and predicate."
              },
              unit_3: {
                title: "Natural language processing",
                chapters: "Natural language processing: Introduction syntactic processing, Semantic processing, Discourse and pragmatic processing. <br/> Learning: Introduction learning, Rote learning, Learning by taking advice, learning in problem solving, Learning from example-induction, Explanation based learning."
              },
              unit_4: {
                title: "Expert System",
                chapters: "Expert System: Introduction, Representing using domain specific knowledge, Expert system shells. LISP and other AI Programming Language"
              }
            }
          },
          {
            title: "Computer Network & Information Security",
            paper_id: 20314,
            syllabus: {
              unit_1: {
                title: "Information security",
                chapters: "Attributes of Information Security: Confidentiality, Integrity, Availability. Threats & Vulnerabilities: Unauthorized Access, Impersonation, Denial of Service, Malicious Software; Trap Doors, Logic Bomb, Trojan Horses; Viruses, Worms & Bacteria; Cryptography Basics: Plain Text, Cipher Text, Encryption Algorithm, Decryption Algorithm; Requirements for Cryptography, Symmetric vs Asymmetric, Block and Stream ciphers, DES."
              },
              unit_2: {
                title: "Public Key Infrastructure &. Message Authentication",
                chapters: "Public Key Cryptography Principles & Applications, Algorithms: RSA, Message Authentication: One way Hash Functions: Message Digest, MD5, SHA1. Public Key Infrastructure: Digital Signatures, Digital Certificates, Certificate Authorities."
              },
              unit_3: {
                title: "Network Security",
                chapters: "Network Attacks: Buffer Overflow, IP Spoofing, TCP Session Hijacking, Sequence Guessing, Network Scanning: ICMP, TCP sweeps, Basic Port Scans; Denial of Service Attacks: SYN Flood, Teardrop attacks, land, Smurf Attacks. IP security Architecture: Overview, Authentication header, Encapsulating Security Pay Load, combining Security Associations, Key Management. Virtual Private Network Technology: Tunneling using IPSEC."
              },
              unit_4: {
                title: "Web Security",
                chapters: "Requirements, Secure Socket Layer, and Secure Electronic Transactions, Network Management Security: Overview of SNMP Architecture- SNMPV1, SNMPV3. Firewall Characteristics & Design Principles, Types of Firewalls: Packet Filtering Router, Application Level Gateway or Proxy, Content Filters, Bastion Host."
              }
            }
          },
          {
            title: "Network Programming",
            paper_id: 20316,
            syllabus: {
              unit_1: {
                title: "Introduction to Network Programming",
                chapters: "OSI model, Unix standards, TCP and UDP & TCP connection establishment and Format, Buffer sizes and limitation, standard internet services, Protocol usage by common internet application."
              },
              unit_2: {
                title: "Sockets",
                chapters: "Address structures, value – result arguments, Byte ordering and manipulation function and related functions Elementary TCP sockets – Socket, connect, bind, listen, accept, fork and exec function, concurrent servers. Close function and related function."
              },
              unit_3: {
                title: "TCP client server",
                chapters: "Introduction, TCP Echo server functions, Normal startup, terminate and signal handling server process termination, Crashing and Rebooting of server host shutdown of server host. I/O Multiplexing and socket options: I/O Models, select function, Batch input, shutdown function, poll function, TCP Echo server, getsockopt and setsockopt functions. Socket states, Generic socket option."
              },
              unit_4: {
                title: "Elementary UDP sockets",
                chapters: "Introduction UDP Echo server function, lost datagram, summary of UDP example, Lack of flow control with UDP, determining outgoing interface with UDP. Elementary name and Address conversions: DNS, gethost by Name function, Resolver option."
              }
            }
          }
        ]
        
      }
    ]
  },
  {
    img: "https://www.successcds.net/images/bba-courses.jpg",
    title: "Bachelor of Buisness Administration",
    link: "BBA",
    semester: [{title: 1},{title: 2},{title: 3},{title: 4},{title: 5},{title: 6}]
  },
  {
    img: "https://ik.imagekit.io/hbj42mvqwv/8lf083u9_NMKEdCsUwX.png",
    title: "Bachelor of Journalism and Mass Communtication",
    link: "BJMC",
    semester: [{title: 1},{title: 2},{title: 3},{title: 4},{title: 5},{title: 6}]
  },
  {
    img: "https://ik.imagekit.io/hbj42mvqwv/bcom_3Q8xqAa-d.jpg",
    title: "Bachelor of Commerce",
    link: "BCOM",
    semester: [{title: 1},{title: 2},{title: 3},{title: 4},{title: 5},{title: 6}]
  },
  {
    img: "https://ik.imagekit.io/hbj42mvqwv/eco_fD7l1Pfq_C.png",
    title: "Economics Honors",
    link: "ECO",
    semester: [{title: 1},{title: 2},{title: 3},{title: 4},{title: 5},{title: 6}]
  }
]
export default courses
