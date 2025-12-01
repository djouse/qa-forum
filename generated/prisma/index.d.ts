
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Discipline
 * 
 */
export type Discipline = $Result.DefaultSelection<Prisma.$DisciplinePayload>
/**
 * Model TeacherDiscipline
 * 
 */
export type TeacherDiscipline = $Result.DefaultSelection<Prisma.$TeacherDisciplinePayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model QuestionStateChange
 * 
 */
export type QuestionStateChange = $Result.DefaultSelection<Prisma.$QuestionStateChangePayload>
/**
 * Model Answer
 * 
 */
export type Answer = $Result.DefaultSelection<Prisma.$AnswerPayload>
/**
 * Model QuestionAttachment
 * 
 */
export type QuestionAttachment = $Result.DefaultSelection<Prisma.$QuestionAttachmentPayload>
/**
 * Model AnswerAttachment
 * 
 */
export type AnswerAttachment = $Result.DefaultSelection<Prisma.$AnswerAttachmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  STUDENT: 'STUDENT',
  TEACHER: 'TEACHER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const QuestionState: {
  ACTIVE: 'ACTIVE',
  RESOLVED: 'RESOLVED',
  CANCELED: 'CANCELED'
};

export type QuestionState = (typeof QuestionState)[keyof typeof QuestionState]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type QuestionState = $Enums.QuestionState

export const QuestionState: typeof $Enums.QuestionState

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discipline`: Exposes CRUD operations for the **Discipline** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disciplines
    * const disciplines = await prisma.discipline.findMany()
    * ```
    */
  get discipline(): Prisma.DisciplineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacherDiscipline`: Exposes CRUD operations for the **TeacherDiscipline** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeacherDisciplines
    * const teacherDisciplines = await prisma.teacherDiscipline.findMany()
    * ```
    */
  get teacherDiscipline(): Prisma.TeacherDisciplineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questionStateChange`: Exposes CRUD operations for the **QuestionStateChange** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionStateChanges
    * const questionStateChanges = await prisma.questionStateChange.findMany()
    * ```
    */
  get questionStateChange(): Prisma.QuestionStateChangeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.AnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questionAttachment`: Exposes CRUD operations for the **QuestionAttachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionAttachments
    * const questionAttachments = await prisma.questionAttachment.findMany()
    * ```
    */
  get questionAttachment(): Prisma.QuestionAttachmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answerAttachment`: Exposes CRUD operations for the **AnswerAttachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnswerAttachments
    * const answerAttachments = await prisma.answerAttachment.findMany()
    * ```
    */
  get answerAttachment(): Prisma.AnswerAttachmentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Discipline: 'Discipline',
    TeacherDiscipline: 'TeacherDiscipline',
    Question: 'Question',
    QuestionStateChange: 'QuestionStateChange',
    Answer: 'Answer',
    QuestionAttachment: 'QuestionAttachment',
    AnswerAttachment: 'AnswerAttachment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "discipline" | "teacherDiscipline" | "question" | "questionStateChange" | "answer" | "questionAttachment" | "answerAttachment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Discipline: {
        payload: Prisma.$DisciplinePayload<ExtArgs>
        fields: Prisma.DisciplineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisciplineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisciplineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>
          }
          findFirst: {
            args: Prisma.DisciplineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisciplineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>
          }
          findMany: {
            args: Prisma.DisciplineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>[]
          }
          create: {
            args: Prisma.DisciplineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>
          }
          createMany: {
            args: Prisma.DisciplineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DisciplineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>[]
          }
          delete: {
            args: Prisma.DisciplineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>
          }
          update: {
            args: Prisma.DisciplineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>
          }
          deleteMany: {
            args: Prisma.DisciplineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisciplineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DisciplineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>[]
          }
          upsert: {
            args: Prisma.DisciplineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>
          }
          aggregate: {
            args: Prisma.DisciplineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscipline>
          }
          groupBy: {
            args: Prisma.DisciplineGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisciplineGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisciplineCountArgs<ExtArgs>
            result: $Utils.Optional<DisciplineCountAggregateOutputType> | number
          }
        }
      }
      TeacherDiscipline: {
        payload: Prisma.$TeacherDisciplinePayload<ExtArgs>
        fields: Prisma.TeacherDisciplineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherDisciplineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherDisciplinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherDisciplineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherDisciplinePayload>
          }
          findFirst: {
            args: Prisma.TeacherDisciplineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherDisciplinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherDisciplineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherDisciplinePayload>
          }
          findMany: {
            args: Prisma.TeacherDisciplineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherDisciplinePayload>[]
          }
          create: {
            args: Prisma.TeacherDisciplineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherDisciplinePayload>
          }
          createMany: {
            args: Prisma.TeacherDisciplineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherDisciplineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherDisciplinePayload>[]
          }
          delete: {
            args: Prisma.TeacherDisciplineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherDisciplinePayload>
          }
          update: {
            args: Prisma.TeacherDisciplineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherDisciplinePayload>
          }
          deleteMany: {
            args: Prisma.TeacherDisciplineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherDisciplineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherDisciplineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherDisciplinePayload>[]
          }
          upsert: {
            args: Prisma.TeacherDisciplineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherDisciplinePayload>
          }
          aggregate: {
            args: Prisma.TeacherDisciplineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacherDiscipline>
          }
          groupBy: {
            args: Prisma.TeacherDisciplineGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherDisciplineGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherDisciplineCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherDisciplineCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      QuestionStateChange: {
        payload: Prisma.$QuestionStateChangePayload<ExtArgs>
        fields: Prisma.QuestionStateChangeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionStateChangeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionStateChangePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionStateChangeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionStateChangePayload>
          }
          findFirst: {
            args: Prisma.QuestionStateChangeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionStateChangePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionStateChangeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionStateChangePayload>
          }
          findMany: {
            args: Prisma.QuestionStateChangeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionStateChangePayload>[]
          }
          create: {
            args: Prisma.QuestionStateChangeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionStateChangePayload>
          }
          createMany: {
            args: Prisma.QuestionStateChangeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionStateChangeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionStateChangePayload>[]
          }
          delete: {
            args: Prisma.QuestionStateChangeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionStateChangePayload>
          }
          update: {
            args: Prisma.QuestionStateChangeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionStateChangePayload>
          }
          deleteMany: {
            args: Prisma.QuestionStateChangeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionStateChangeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionStateChangeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionStateChangePayload>[]
          }
          upsert: {
            args: Prisma.QuestionStateChangeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionStateChangePayload>
          }
          aggregate: {
            args: Prisma.QuestionStateChangeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestionStateChange>
          }
          groupBy: {
            args: Prisma.QuestionStateChangeGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionStateChangeGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionStateChangeCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionStateChangeCountAggregateOutputType> | number
          }
        }
      }
      Answer: {
        payload: Prisma.$AnswerPayload<ExtArgs>
        fields: Prisma.AnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findFirst: {
            args: Prisma.AnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findMany: {
            args: Prisma.AnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          create: {
            args: Prisma.AnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          createMany: {
            args: Prisma.AnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          delete: {
            args: Prisma.AnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          update: {
            args: Prisma.AnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          deleteMany: {
            args: Prisma.AnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          upsert: {
            args: Prisma.AnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswer>
          }
          groupBy: {
            args: Prisma.AnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number
          }
        }
      }
      QuestionAttachment: {
        payload: Prisma.$QuestionAttachmentPayload<ExtArgs>
        fields: Prisma.QuestionAttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionAttachmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionAttachmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAttachmentPayload>
          }
          findFirst: {
            args: Prisma.QuestionAttachmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionAttachmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAttachmentPayload>
          }
          findMany: {
            args: Prisma.QuestionAttachmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAttachmentPayload>[]
          }
          create: {
            args: Prisma.QuestionAttachmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAttachmentPayload>
          }
          createMany: {
            args: Prisma.QuestionAttachmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionAttachmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAttachmentPayload>[]
          }
          delete: {
            args: Prisma.QuestionAttachmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAttachmentPayload>
          }
          update: {
            args: Prisma.QuestionAttachmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAttachmentPayload>
          }
          deleteMany: {
            args: Prisma.QuestionAttachmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionAttachmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionAttachmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAttachmentPayload>[]
          }
          upsert: {
            args: Prisma.QuestionAttachmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAttachmentPayload>
          }
          aggregate: {
            args: Prisma.QuestionAttachmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestionAttachment>
          }
          groupBy: {
            args: Prisma.QuestionAttachmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionAttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionAttachmentCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionAttachmentCountAggregateOutputType> | number
          }
        }
      }
      AnswerAttachment: {
        payload: Prisma.$AnswerAttachmentPayload<ExtArgs>
        fields: Prisma.AnswerAttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswerAttachmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerAttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerAttachmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerAttachmentPayload>
          }
          findFirst: {
            args: Prisma.AnswerAttachmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerAttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerAttachmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerAttachmentPayload>
          }
          findMany: {
            args: Prisma.AnswerAttachmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerAttachmentPayload>[]
          }
          create: {
            args: Prisma.AnswerAttachmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerAttachmentPayload>
          }
          createMany: {
            args: Prisma.AnswerAttachmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnswerAttachmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerAttachmentPayload>[]
          }
          delete: {
            args: Prisma.AnswerAttachmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerAttachmentPayload>
          }
          update: {
            args: Prisma.AnswerAttachmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerAttachmentPayload>
          }
          deleteMany: {
            args: Prisma.AnswerAttachmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerAttachmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnswerAttachmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerAttachmentPayload>[]
          }
          upsert: {
            args: Prisma.AnswerAttachmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerAttachmentPayload>
          }
          aggregate: {
            args: Prisma.AnswerAttachmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswerAttachment>
          }
          groupBy: {
            args: Prisma.AnswerAttachmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerAttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswerAttachmentCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerAttachmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    discipline?: DisciplineOmit
    teacherDiscipline?: TeacherDisciplineOmit
    question?: QuestionOmit
    questionStateChange?: QuestionStateChangeOmit
    answer?: AnswerOmit
    questionAttachment?: QuestionAttachmentOmit
    answerAttachment?: AnswerAttachmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    questions: number
    answers: number
    disciplines: number
    questionStateChanges: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | UserCountOutputTypeCountQuestionsArgs
    answers?: boolean | UserCountOutputTypeCountAnswersArgs
    disciplines?: boolean | UserCountOutputTypeCountDisciplinesArgs
    questionStateChanges?: boolean | UserCountOutputTypeCountQuestionStateChangesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDisciplinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherDisciplineWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuestionStateChangesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionStateChangeWhereInput
  }


  /**
   * Count Type DisciplineCountOutputType
   */

  export type DisciplineCountOutputType = {
    questions: number
    teachers: number
  }

  export type DisciplineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | DisciplineCountOutputTypeCountQuestionsArgs
    teachers?: boolean | DisciplineCountOutputTypeCountTeachersArgs
  }

  // Custom InputTypes
  /**
   * DisciplineCountOutputType without action
   */
  export type DisciplineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineCountOutputType
     */
    select?: DisciplineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DisciplineCountOutputType without action
   */
  export type DisciplineCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * DisciplineCountOutputType without action
   */
  export type DisciplineCountOutputTypeCountTeachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherDisciplineWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    answers: number
    attachments: number
    stateChanges: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | QuestionCountOutputTypeCountAnswersArgs
    attachments?: boolean | QuestionCountOutputTypeCountAttachmentsArgs
    stateChanges?: boolean | QuestionCountOutputTypeCountStateChangesArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionAttachmentWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountStateChangesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionStateChangeWhereInput
  }


  /**
   * Count Type AnswerCountOutputType
   */

  export type AnswerCountOutputType = {
    attachments: number
  }

  export type AnswerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attachments?: boolean | AnswerCountOutputTypeCountAttachmentsArgs
  }

  // Custom InputTypes
  /**
   * AnswerCountOutputType without action
   */
  export type AnswerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerCountOutputType
     */
    select?: AnswerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnswerCountOutputType without action
   */
  export type AnswerCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerAttachmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    role: $Enums.Role
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    questions?: boolean | User$questionsArgs<ExtArgs>
    answers?: boolean | User$answersArgs<ExtArgs>
    disciplines?: boolean | User$disciplinesArgs<ExtArgs>
    questionStateChanges?: boolean | User$questionStateChangesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | User$questionsArgs<ExtArgs>
    answers?: boolean | User$answersArgs<ExtArgs>
    disciplines?: boolean | User$disciplinesArgs<ExtArgs>
    questionStateChanges?: boolean | User$questionStateChangesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      answers: Prisma.$AnswerPayload<ExtArgs>[]
      disciplines: Prisma.$TeacherDisciplinePayload<ExtArgs>[]
      questionStateChanges: Prisma.$QuestionStateChangePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends User$questionsArgs<ExtArgs> = {}>(args?: Subset<T, User$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    answers<T extends User$answersArgs<ExtArgs> = {}>(args?: Subset<T, User$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    disciplines<T extends User$disciplinesArgs<ExtArgs> = {}>(args?: Subset<T, User$disciplinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherDisciplinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questionStateChanges<T extends User$questionStateChangesArgs<ExtArgs> = {}>(args?: Subset<T, User$questionStateChangesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionStateChangePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.questions
   */
  export type User$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * User.answers
   */
  export type User$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * User.disciplines
   */
  export type User$disciplinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherDiscipline
     */
    select?: TeacherDisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherDiscipline
     */
    omit?: TeacherDisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherDisciplineInclude<ExtArgs> | null
    where?: TeacherDisciplineWhereInput
    orderBy?: TeacherDisciplineOrderByWithRelationInput | TeacherDisciplineOrderByWithRelationInput[]
    cursor?: TeacherDisciplineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherDisciplineScalarFieldEnum | TeacherDisciplineScalarFieldEnum[]
  }

  /**
   * User.questionStateChanges
   */
  export type User$questionStateChangesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionStateChange
     */
    select?: QuestionStateChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionStateChange
     */
    omit?: QuestionStateChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionStateChangeInclude<ExtArgs> | null
    where?: QuestionStateChangeWhereInput
    orderBy?: QuestionStateChangeOrderByWithRelationInput | QuestionStateChangeOrderByWithRelationInput[]
    cursor?: QuestionStateChangeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionStateChangeScalarFieldEnum | QuestionStateChangeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Discipline
   */

  export type AggregateDiscipline = {
    _count: DisciplineCountAggregateOutputType | null
    _min: DisciplineMinAggregateOutputType | null
    _max: DisciplineMaxAggregateOutputType | null
  }

  export type DisciplineMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type DisciplineMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type DisciplineCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type DisciplineMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type DisciplineMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type DisciplineCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type DisciplineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Discipline to aggregate.
     */
    where?: DisciplineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplines to fetch.
     */
    orderBy?: DisciplineOrderByWithRelationInput | DisciplineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisciplineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Disciplines
    **/
    _count?: true | DisciplineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisciplineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisciplineMaxAggregateInputType
  }

  export type GetDisciplineAggregateType<T extends DisciplineAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscipline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscipline[P]>
      : GetScalarType<T[P], AggregateDiscipline[P]>
  }




  export type DisciplineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisciplineWhereInput
    orderBy?: DisciplineOrderByWithAggregationInput | DisciplineOrderByWithAggregationInput[]
    by: DisciplineScalarFieldEnum[] | DisciplineScalarFieldEnum
    having?: DisciplineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisciplineCountAggregateInputType | true
    _min?: DisciplineMinAggregateInputType
    _max?: DisciplineMaxAggregateInputType
  }

  export type DisciplineGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: DisciplineCountAggregateOutputType | null
    _min: DisciplineMinAggregateOutputType | null
    _max: DisciplineMaxAggregateOutputType | null
  }

  type GetDisciplineGroupByPayload<T extends DisciplineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisciplineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisciplineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisciplineGroupByOutputType[P]>
            : GetScalarType<T[P], DisciplineGroupByOutputType[P]>
        }
      >
    >


  export type DisciplineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    questions?: boolean | Discipline$questionsArgs<ExtArgs>
    teachers?: boolean | Discipline$teachersArgs<ExtArgs>
    _count?: boolean | DisciplineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discipline"]>

  export type DisciplineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["discipline"]>

  export type DisciplineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["discipline"]>

  export type DisciplineSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type DisciplineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["discipline"]>
  export type DisciplineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | Discipline$questionsArgs<ExtArgs>
    teachers?: boolean | Discipline$teachersArgs<ExtArgs>
    _count?: boolean | DisciplineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DisciplineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DisciplineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DisciplinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Discipline"
    objects: {
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      teachers: Prisma.$TeacherDisciplinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["discipline"]>
    composites: {}
  }

  type DisciplineGetPayload<S extends boolean | null | undefined | DisciplineDefaultArgs> = $Result.GetResult<Prisma.$DisciplinePayload, S>

  type DisciplineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisciplineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisciplineCountAggregateInputType | true
    }

  export interface DisciplineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Discipline'], meta: { name: 'Discipline' } }
    /**
     * Find zero or one Discipline that matches the filter.
     * @param {DisciplineFindUniqueArgs} args - Arguments to find a Discipline
     * @example
     * // Get one Discipline
     * const discipline = await prisma.discipline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisciplineFindUniqueArgs>(args: SelectSubset<T, DisciplineFindUniqueArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Discipline that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisciplineFindUniqueOrThrowArgs} args - Arguments to find a Discipline
     * @example
     * // Get one Discipline
     * const discipline = await prisma.discipline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisciplineFindUniqueOrThrowArgs>(args: SelectSubset<T, DisciplineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discipline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineFindFirstArgs} args - Arguments to find a Discipline
     * @example
     * // Get one Discipline
     * const discipline = await prisma.discipline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisciplineFindFirstArgs>(args?: SelectSubset<T, DisciplineFindFirstArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discipline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineFindFirstOrThrowArgs} args - Arguments to find a Discipline
     * @example
     * // Get one Discipline
     * const discipline = await prisma.discipline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisciplineFindFirstOrThrowArgs>(args?: SelectSubset<T, DisciplineFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disciplines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disciplines
     * const disciplines = await prisma.discipline.findMany()
     * 
     * // Get first 10 Disciplines
     * const disciplines = await prisma.discipline.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disciplineWithIdOnly = await prisma.discipline.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DisciplineFindManyArgs>(args?: SelectSubset<T, DisciplineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Discipline.
     * @param {DisciplineCreateArgs} args - Arguments to create a Discipline.
     * @example
     * // Create one Discipline
     * const Discipline = await prisma.discipline.create({
     *   data: {
     *     // ... data to create a Discipline
     *   }
     * })
     * 
     */
    create<T extends DisciplineCreateArgs>(args: SelectSubset<T, DisciplineCreateArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disciplines.
     * @param {DisciplineCreateManyArgs} args - Arguments to create many Disciplines.
     * @example
     * // Create many Disciplines
     * const discipline = await prisma.discipline.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisciplineCreateManyArgs>(args?: SelectSubset<T, DisciplineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Disciplines and returns the data saved in the database.
     * @param {DisciplineCreateManyAndReturnArgs} args - Arguments to create many Disciplines.
     * @example
     * // Create many Disciplines
     * const discipline = await prisma.discipline.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Disciplines and only return the `id`
     * const disciplineWithIdOnly = await prisma.discipline.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DisciplineCreateManyAndReturnArgs>(args?: SelectSubset<T, DisciplineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Discipline.
     * @param {DisciplineDeleteArgs} args - Arguments to delete one Discipline.
     * @example
     * // Delete one Discipline
     * const Discipline = await prisma.discipline.delete({
     *   where: {
     *     // ... filter to delete one Discipline
     *   }
     * })
     * 
     */
    delete<T extends DisciplineDeleteArgs>(args: SelectSubset<T, DisciplineDeleteArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Discipline.
     * @param {DisciplineUpdateArgs} args - Arguments to update one Discipline.
     * @example
     * // Update one Discipline
     * const discipline = await prisma.discipline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisciplineUpdateArgs>(args: SelectSubset<T, DisciplineUpdateArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disciplines.
     * @param {DisciplineDeleteManyArgs} args - Arguments to filter Disciplines to delete.
     * @example
     * // Delete a few Disciplines
     * const { count } = await prisma.discipline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisciplineDeleteManyArgs>(args?: SelectSubset<T, DisciplineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disciplines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disciplines
     * const discipline = await prisma.discipline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisciplineUpdateManyArgs>(args: SelectSubset<T, DisciplineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disciplines and returns the data updated in the database.
     * @param {DisciplineUpdateManyAndReturnArgs} args - Arguments to update many Disciplines.
     * @example
     * // Update many Disciplines
     * const discipline = await prisma.discipline.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Disciplines and only return the `id`
     * const disciplineWithIdOnly = await prisma.discipline.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DisciplineUpdateManyAndReturnArgs>(args: SelectSubset<T, DisciplineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Discipline.
     * @param {DisciplineUpsertArgs} args - Arguments to update or create a Discipline.
     * @example
     * // Update or create a Discipline
     * const discipline = await prisma.discipline.upsert({
     *   create: {
     *     // ... data to create a Discipline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Discipline we want to update
     *   }
     * })
     */
    upsert<T extends DisciplineUpsertArgs>(args: SelectSubset<T, DisciplineUpsertArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disciplines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineCountArgs} args - Arguments to filter Disciplines to count.
     * @example
     * // Count the number of Disciplines
     * const count = await prisma.discipline.count({
     *   where: {
     *     // ... the filter for the Disciplines we want to count
     *   }
     * })
    **/
    count<T extends DisciplineCountArgs>(
      args?: Subset<T, DisciplineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisciplineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Discipline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DisciplineAggregateArgs>(args: Subset<T, DisciplineAggregateArgs>): Prisma.PrismaPromise<GetDisciplineAggregateType<T>>

    /**
     * Group by Discipline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DisciplineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisciplineGroupByArgs['orderBy'] }
        : { orderBy?: DisciplineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DisciplineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisciplineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Discipline model
   */
  readonly fields: DisciplineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Discipline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisciplineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends Discipline$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Discipline$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teachers<T extends Discipline$teachersArgs<ExtArgs> = {}>(args?: Subset<T, Discipline$teachersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherDisciplinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Discipline model
   */
  interface DisciplineFieldRefs {
    readonly id: FieldRef<"Discipline", 'String'>
    readonly name: FieldRef<"Discipline", 'String'>
    readonly createdAt: FieldRef<"Discipline", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Discipline findUnique
   */
  export type DisciplineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineInclude<ExtArgs> | null
    /**
     * Filter, which Discipline to fetch.
     */
    where: DisciplineWhereUniqueInput
  }

  /**
   * Discipline findUniqueOrThrow
   */
  export type DisciplineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineInclude<ExtArgs> | null
    /**
     * Filter, which Discipline to fetch.
     */
    where: DisciplineWhereUniqueInput
  }

  /**
   * Discipline findFirst
   */
  export type DisciplineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineInclude<ExtArgs> | null
    /**
     * Filter, which Discipline to fetch.
     */
    where?: DisciplineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplines to fetch.
     */
    orderBy?: DisciplineOrderByWithRelationInput | DisciplineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disciplines.
     */
    cursor?: DisciplineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disciplines.
     */
    distinct?: DisciplineScalarFieldEnum | DisciplineScalarFieldEnum[]
  }

  /**
   * Discipline findFirstOrThrow
   */
  export type DisciplineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineInclude<ExtArgs> | null
    /**
     * Filter, which Discipline to fetch.
     */
    where?: DisciplineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplines to fetch.
     */
    orderBy?: DisciplineOrderByWithRelationInput | DisciplineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disciplines.
     */
    cursor?: DisciplineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disciplines.
     */
    distinct?: DisciplineScalarFieldEnum | DisciplineScalarFieldEnum[]
  }

  /**
   * Discipline findMany
   */
  export type DisciplineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineInclude<ExtArgs> | null
    /**
     * Filter, which Disciplines to fetch.
     */
    where?: DisciplineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplines to fetch.
     */
    orderBy?: DisciplineOrderByWithRelationInput | DisciplineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Disciplines.
     */
    cursor?: DisciplineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplines.
     */
    skip?: number
    distinct?: DisciplineScalarFieldEnum | DisciplineScalarFieldEnum[]
  }

  /**
   * Discipline create
   */
  export type DisciplineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineInclude<ExtArgs> | null
    /**
     * The data needed to create a Discipline.
     */
    data: XOR<DisciplineCreateInput, DisciplineUncheckedCreateInput>
  }

  /**
   * Discipline createMany
   */
  export type DisciplineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Disciplines.
     */
    data: DisciplineCreateManyInput | DisciplineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Discipline createManyAndReturn
   */
  export type DisciplineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * The data used to create many Disciplines.
     */
    data: DisciplineCreateManyInput | DisciplineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Discipline update
   */
  export type DisciplineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineInclude<ExtArgs> | null
    /**
     * The data needed to update a Discipline.
     */
    data: XOR<DisciplineUpdateInput, DisciplineUncheckedUpdateInput>
    /**
     * Choose, which Discipline to update.
     */
    where: DisciplineWhereUniqueInput
  }

  /**
   * Discipline updateMany
   */
  export type DisciplineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Disciplines.
     */
    data: XOR<DisciplineUpdateManyMutationInput, DisciplineUncheckedUpdateManyInput>
    /**
     * Filter which Disciplines to update
     */
    where?: DisciplineWhereInput
    /**
     * Limit how many Disciplines to update.
     */
    limit?: number
  }

  /**
   * Discipline updateManyAndReturn
   */
  export type DisciplineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * The data used to update Disciplines.
     */
    data: XOR<DisciplineUpdateManyMutationInput, DisciplineUncheckedUpdateManyInput>
    /**
     * Filter which Disciplines to update
     */
    where?: DisciplineWhereInput
    /**
     * Limit how many Disciplines to update.
     */
    limit?: number
  }

  /**
   * Discipline upsert
   */
  export type DisciplineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineInclude<ExtArgs> | null
    /**
     * The filter to search for the Discipline to update in case it exists.
     */
    where: DisciplineWhereUniqueInput
    /**
     * In case the Discipline found by the `where` argument doesn't exist, create a new Discipline with this data.
     */
    create: XOR<DisciplineCreateInput, DisciplineUncheckedCreateInput>
    /**
     * In case the Discipline was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisciplineUpdateInput, DisciplineUncheckedUpdateInput>
  }

  /**
   * Discipline delete
   */
  export type DisciplineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineInclude<ExtArgs> | null
    /**
     * Filter which Discipline to delete.
     */
    where: DisciplineWhereUniqueInput
  }

  /**
   * Discipline deleteMany
   */
  export type DisciplineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disciplines to delete
     */
    where?: DisciplineWhereInput
    /**
     * Limit how many Disciplines to delete.
     */
    limit?: number
  }

  /**
   * Discipline.questions
   */
  export type Discipline$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Discipline.teachers
   */
  export type Discipline$teachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherDiscipline
     */
    select?: TeacherDisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherDiscipline
     */
    omit?: TeacherDisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherDisciplineInclude<ExtArgs> | null
    where?: TeacherDisciplineWhereInput
    orderBy?: TeacherDisciplineOrderByWithRelationInput | TeacherDisciplineOrderByWithRelationInput[]
    cursor?: TeacherDisciplineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherDisciplineScalarFieldEnum | TeacherDisciplineScalarFieldEnum[]
  }

  /**
   * Discipline without action
   */
  export type DisciplineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineInclude<ExtArgs> | null
  }


  /**
   * Model TeacherDiscipline
   */

  export type AggregateTeacherDiscipline = {
    _count: TeacherDisciplineCountAggregateOutputType | null
    _min: TeacherDisciplineMinAggregateOutputType | null
    _max: TeacherDisciplineMaxAggregateOutputType | null
  }

  export type TeacherDisciplineMinAggregateOutputType = {
    id: string | null
    teacherId: string | null
    disciplineId: string | null
    createdAt: Date | null
  }

  export type TeacherDisciplineMaxAggregateOutputType = {
    id: string | null
    teacherId: string | null
    disciplineId: string | null
    createdAt: Date | null
  }

  export type TeacherDisciplineCountAggregateOutputType = {
    id: number
    teacherId: number
    disciplineId: number
    createdAt: number
    _all: number
  }


  export type TeacherDisciplineMinAggregateInputType = {
    id?: true
    teacherId?: true
    disciplineId?: true
    createdAt?: true
  }

  export type TeacherDisciplineMaxAggregateInputType = {
    id?: true
    teacherId?: true
    disciplineId?: true
    createdAt?: true
  }

  export type TeacherDisciplineCountAggregateInputType = {
    id?: true
    teacherId?: true
    disciplineId?: true
    createdAt?: true
    _all?: true
  }

  export type TeacherDisciplineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherDiscipline to aggregate.
     */
    where?: TeacherDisciplineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherDisciplines to fetch.
     */
    orderBy?: TeacherDisciplineOrderByWithRelationInput | TeacherDisciplineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherDisciplineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherDisciplines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherDisciplines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeacherDisciplines
    **/
    _count?: true | TeacherDisciplineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherDisciplineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherDisciplineMaxAggregateInputType
  }

  export type GetTeacherDisciplineAggregateType<T extends TeacherDisciplineAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacherDiscipline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacherDiscipline[P]>
      : GetScalarType<T[P], AggregateTeacherDiscipline[P]>
  }




  export type TeacherDisciplineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherDisciplineWhereInput
    orderBy?: TeacherDisciplineOrderByWithAggregationInput | TeacherDisciplineOrderByWithAggregationInput[]
    by: TeacherDisciplineScalarFieldEnum[] | TeacherDisciplineScalarFieldEnum
    having?: TeacherDisciplineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherDisciplineCountAggregateInputType | true
    _min?: TeacherDisciplineMinAggregateInputType
    _max?: TeacherDisciplineMaxAggregateInputType
  }

  export type TeacherDisciplineGroupByOutputType = {
    id: string
    teacherId: string
    disciplineId: string
    createdAt: Date
    _count: TeacherDisciplineCountAggregateOutputType | null
    _min: TeacherDisciplineMinAggregateOutputType | null
    _max: TeacherDisciplineMaxAggregateOutputType | null
  }

  type GetTeacherDisciplineGroupByPayload<T extends TeacherDisciplineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherDisciplineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherDisciplineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherDisciplineGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherDisciplineGroupByOutputType[P]>
        }
      >
    >


  export type TeacherDisciplineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    disciplineId?: boolean
    createdAt?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherDiscipline"]>

  export type TeacherDisciplineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    disciplineId?: boolean
    createdAt?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherDiscipline"]>

  export type TeacherDisciplineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    disciplineId?: boolean
    createdAt?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherDiscipline"]>

  export type TeacherDisciplineSelectScalar = {
    id?: boolean
    teacherId?: boolean
    disciplineId?: boolean
    createdAt?: boolean
  }

  export type TeacherDisciplineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teacherId" | "disciplineId" | "createdAt", ExtArgs["result"]["teacherDiscipline"]>
  export type TeacherDisciplineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
  }
  export type TeacherDisciplineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
  }
  export type TeacherDisciplineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
  }

  export type $TeacherDisciplinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeacherDiscipline"
    objects: {
      teacher: Prisma.$UserPayload<ExtArgs>
      discipline: Prisma.$DisciplinePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teacherId: string
      disciplineId: string
      createdAt: Date
    }, ExtArgs["result"]["teacherDiscipline"]>
    composites: {}
  }

  type TeacherDisciplineGetPayload<S extends boolean | null | undefined | TeacherDisciplineDefaultArgs> = $Result.GetResult<Prisma.$TeacherDisciplinePayload, S>

  type TeacherDisciplineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherDisciplineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherDisciplineCountAggregateInputType | true
    }

  export interface TeacherDisciplineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeacherDiscipline'], meta: { name: 'TeacherDiscipline' } }
    /**
     * Find zero or one TeacherDiscipline that matches the filter.
     * @param {TeacherDisciplineFindUniqueArgs} args - Arguments to find a TeacherDiscipline
     * @example
     * // Get one TeacherDiscipline
     * const teacherDiscipline = await prisma.teacherDiscipline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherDisciplineFindUniqueArgs>(args: SelectSubset<T, TeacherDisciplineFindUniqueArgs<ExtArgs>>): Prisma__TeacherDisciplineClient<$Result.GetResult<Prisma.$TeacherDisciplinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeacherDiscipline that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherDisciplineFindUniqueOrThrowArgs} args - Arguments to find a TeacherDiscipline
     * @example
     * // Get one TeacherDiscipline
     * const teacherDiscipline = await prisma.teacherDiscipline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherDisciplineFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherDisciplineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherDisciplineClient<$Result.GetResult<Prisma.$TeacherDisciplinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherDiscipline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherDisciplineFindFirstArgs} args - Arguments to find a TeacherDiscipline
     * @example
     * // Get one TeacherDiscipline
     * const teacherDiscipline = await prisma.teacherDiscipline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherDisciplineFindFirstArgs>(args?: SelectSubset<T, TeacherDisciplineFindFirstArgs<ExtArgs>>): Prisma__TeacherDisciplineClient<$Result.GetResult<Prisma.$TeacherDisciplinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherDiscipline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherDisciplineFindFirstOrThrowArgs} args - Arguments to find a TeacherDiscipline
     * @example
     * // Get one TeacherDiscipline
     * const teacherDiscipline = await prisma.teacherDiscipline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherDisciplineFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherDisciplineFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherDisciplineClient<$Result.GetResult<Prisma.$TeacherDisciplinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeacherDisciplines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherDisciplineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeacherDisciplines
     * const teacherDisciplines = await prisma.teacherDiscipline.findMany()
     * 
     * // Get first 10 TeacherDisciplines
     * const teacherDisciplines = await prisma.teacherDiscipline.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherDisciplineWithIdOnly = await prisma.teacherDiscipline.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherDisciplineFindManyArgs>(args?: SelectSubset<T, TeacherDisciplineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherDisciplinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeacherDiscipline.
     * @param {TeacherDisciplineCreateArgs} args - Arguments to create a TeacherDiscipline.
     * @example
     * // Create one TeacherDiscipline
     * const TeacherDiscipline = await prisma.teacherDiscipline.create({
     *   data: {
     *     // ... data to create a TeacherDiscipline
     *   }
     * })
     * 
     */
    create<T extends TeacherDisciplineCreateArgs>(args: SelectSubset<T, TeacherDisciplineCreateArgs<ExtArgs>>): Prisma__TeacherDisciplineClient<$Result.GetResult<Prisma.$TeacherDisciplinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeacherDisciplines.
     * @param {TeacherDisciplineCreateManyArgs} args - Arguments to create many TeacherDisciplines.
     * @example
     * // Create many TeacherDisciplines
     * const teacherDiscipline = await prisma.teacherDiscipline.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherDisciplineCreateManyArgs>(args?: SelectSubset<T, TeacherDisciplineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeacherDisciplines and returns the data saved in the database.
     * @param {TeacherDisciplineCreateManyAndReturnArgs} args - Arguments to create many TeacherDisciplines.
     * @example
     * // Create many TeacherDisciplines
     * const teacherDiscipline = await prisma.teacherDiscipline.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeacherDisciplines and only return the `id`
     * const teacherDisciplineWithIdOnly = await prisma.teacherDiscipline.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherDisciplineCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherDisciplineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherDisciplinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeacherDiscipline.
     * @param {TeacherDisciplineDeleteArgs} args - Arguments to delete one TeacherDiscipline.
     * @example
     * // Delete one TeacherDiscipline
     * const TeacherDiscipline = await prisma.teacherDiscipline.delete({
     *   where: {
     *     // ... filter to delete one TeacherDiscipline
     *   }
     * })
     * 
     */
    delete<T extends TeacherDisciplineDeleteArgs>(args: SelectSubset<T, TeacherDisciplineDeleteArgs<ExtArgs>>): Prisma__TeacherDisciplineClient<$Result.GetResult<Prisma.$TeacherDisciplinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeacherDiscipline.
     * @param {TeacherDisciplineUpdateArgs} args - Arguments to update one TeacherDiscipline.
     * @example
     * // Update one TeacherDiscipline
     * const teacherDiscipline = await prisma.teacherDiscipline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherDisciplineUpdateArgs>(args: SelectSubset<T, TeacherDisciplineUpdateArgs<ExtArgs>>): Prisma__TeacherDisciplineClient<$Result.GetResult<Prisma.$TeacherDisciplinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeacherDisciplines.
     * @param {TeacherDisciplineDeleteManyArgs} args - Arguments to filter TeacherDisciplines to delete.
     * @example
     * // Delete a few TeacherDisciplines
     * const { count } = await prisma.teacherDiscipline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherDisciplineDeleteManyArgs>(args?: SelectSubset<T, TeacherDisciplineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherDisciplines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherDisciplineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeacherDisciplines
     * const teacherDiscipline = await prisma.teacherDiscipline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherDisciplineUpdateManyArgs>(args: SelectSubset<T, TeacherDisciplineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherDisciplines and returns the data updated in the database.
     * @param {TeacherDisciplineUpdateManyAndReturnArgs} args - Arguments to update many TeacherDisciplines.
     * @example
     * // Update many TeacherDisciplines
     * const teacherDiscipline = await prisma.teacherDiscipline.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeacherDisciplines and only return the `id`
     * const teacherDisciplineWithIdOnly = await prisma.teacherDiscipline.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeacherDisciplineUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherDisciplineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherDisciplinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeacherDiscipline.
     * @param {TeacherDisciplineUpsertArgs} args - Arguments to update or create a TeacherDiscipline.
     * @example
     * // Update or create a TeacherDiscipline
     * const teacherDiscipline = await prisma.teacherDiscipline.upsert({
     *   create: {
     *     // ... data to create a TeacherDiscipline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeacherDiscipline we want to update
     *   }
     * })
     */
    upsert<T extends TeacherDisciplineUpsertArgs>(args: SelectSubset<T, TeacherDisciplineUpsertArgs<ExtArgs>>): Prisma__TeacherDisciplineClient<$Result.GetResult<Prisma.$TeacherDisciplinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeacherDisciplines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherDisciplineCountArgs} args - Arguments to filter TeacherDisciplines to count.
     * @example
     * // Count the number of TeacherDisciplines
     * const count = await prisma.teacherDiscipline.count({
     *   where: {
     *     // ... the filter for the TeacherDisciplines we want to count
     *   }
     * })
    **/
    count<T extends TeacherDisciplineCountArgs>(
      args?: Subset<T, TeacherDisciplineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherDisciplineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeacherDiscipline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherDisciplineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeacherDisciplineAggregateArgs>(args: Subset<T, TeacherDisciplineAggregateArgs>): Prisma.PrismaPromise<GetTeacherDisciplineAggregateType<T>>

    /**
     * Group by TeacherDiscipline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherDisciplineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeacherDisciplineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherDisciplineGroupByArgs['orderBy'] }
        : { orderBy?: TeacherDisciplineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeacherDisciplineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherDisciplineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeacherDiscipline model
   */
  readonly fields: TeacherDisciplineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeacherDiscipline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherDisciplineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    discipline<T extends DisciplineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DisciplineDefaultArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeacherDiscipline model
   */
  interface TeacherDisciplineFieldRefs {
    readonly id: FieldRef<"TeacherDiscipline", 'String'>
    readonly teacherId: FieldRef<"TeacherDiscipline", 'String'>
    readonly disciplineId: FieldRef<"TeacherDiscipline", 'String'>
    readonly createdAt: FieldRef<"TeacherDiscipline", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeacherDiscipline findUnique
   */
  export type TeacherDisciplineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherDiscipline
     */
    select?: TeacherDisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherDiscipline
     */
    omit?: TeacherDisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherDisciplineInclude<ExtArgs> | null
    /**
     * Filter, which TeacherDiscipline to fetch.
     */
    where: TeacherDisciplineWhereUniqueInput
  }

  /**
   * TeacherDiscipline findUniqueOrThrow
   */
  export type TeacherDisciplineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherDiscipline
     */
    select?: TeacherDisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherDiscipline
     */
    omit?: TeacherDisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherDisciplineInclude<ExtArgs> | null
    /**
     * Filter, which TeacherDiscipline to fetch.
     */
    where: TeacherDisciplineWhereUniqueInput
  }

  /**
   * TeacherDiscipline findFirst
   */
  export type TeacherDisciplineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherDiscipline
     */
    select?: TeacherDisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherDiscipline
     */
    omit?: TeacherDisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherDisciplineInclude<ExtArgs> | null
    /**
     * Filter, which TeacherDiscipline to fetch.
     */
    where?: TeacherDisciplineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherDisciplines to fetch.
     */
    orderBy?: TeacherDisciplineOrderByWithRelationInput | TeacherDisciplineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherDisciplines.
     */
    cursor?: TeacherDisciplineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherDisciplines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherDisciplines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherDisciplines.
     */
    distinct?: TeacherDisciplineScalarFieldEnum | TeacherDisciplineScalarFieldEnum[]
  }

  /**
   * TeacherDiscipline findFirstOrThrow
   */
  export type TeacherDisciplineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherDiscipline
     */
    select?: TeacherDisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherDiscipline
     */
    omit?: TeacherDisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherDisciplineInclude<ExtArgs> | null
    /**
     * Filter, which TeacherDiscipline to fetch.
     */
    where?: TeacherDisciplineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherDisciplines to fetch.
     */
    orderBy?: TeacherDisciplineOrderByWithRelationInput | TeacherDisciplineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherDisciplines.
     */
    cursor?: TeacherDisciplineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherDisciplines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherDisciplines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherDisciplines.
     */
    distinct?: TeacherDisciplineScalarFieldEnum | TeacherDisciplineScalarFieldEnum[]
  }

  /**
   * TeacherDiscipline findMany
   */
  export type TeacherDisciplineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherDiscipline
     */
    select?: TeacherDisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherDiscipline
     */
    omit?: TeacherDisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherDisciplineInclude<ExtArgs> | null
    /**
     * Filter, which TeacherDisciplines to fetch.
     */
    where?: TeacherDisciplineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherDisciplines to fetch.
     */
    orderBy?: TeacherDisciplineOrderByWithRelationInput | TeacherDisciplineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeacherDisciplines.
     */
    cursor?: TeacherDisciplineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherDisciplines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherDisciplines.
     */
    skip?: number
    distinct?: TeacherDisciplineScalarFieldEnum | TeacherDisciplineScalarFieldEnum[]
  }

  /**
   * TeacherDiscipline create
   */
  export type TeacherDisciplineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherDiscipline
     */
    select?: TeacherDisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherDiscipline
     */
    omit?: TeacherDisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherDisciplineInclude<ExtArgs> | null
    /**
     * The data needed to create a TeacherDiscipline.
     */
    data: XOR<TeacherDisciplineCreateInput, TeacherDisciplineUncheckedCreateInput>
  }

  /**
   * TeacherDiscipline createMany
   */
  export type TeacherDisciplineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeacherDisciplines.
     */
    data: TeacherDisciplineCreateManyInput | TeacherDisciplineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeacherDiscipline createManyAndReturn
   */
  export type TeacherDisciplineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherDiscipline
     */
    select?: TeacherDisciplineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherDiscipline
     */
    omit?: TeacherDisciplineOmit<ExtArgs> | null
    /**
     * The data used to create many TeacherDisciplines.
     */
    data: TeacherDisciplineCreateManyInput | TeacherDisciplineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherDisciplineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherDiscipline update
   */
  export type TeacherDisciplineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherDiscipline
     */
    select?: TeacherDisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherDiscipline
     */
    omit?: TeacherDisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherDisciplineInclude<ExtArgs> | null
    /**
     * The data needed to update a TeacherDiscipline.
     */
    data: XOR<TeacherDisciplineUpdateInput, TeacherDisciplineUncheckedUpdateInput>
    /**
     * Choose, which TeacherDiscipline to update.
     */
    where: TeacherDisciplineWhereUniqueInput
  }

  /**
   * TeacherDiscipline updateMany
   */
  export type TeacherDisciplineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeacherDisciplines.
     */
    data: XOR<TeacherDisciplineUpdateManyMutationInput, TeacherDisciplineUncheckedUpdateManyInput>
    /**
     * Filter which TeacherDisciplines to update
     */
    where?: TeacherDisciplineWhereInput
    /**
     * Limit how many TeacherDisciplines to update.
     */
    limit?: number
  }

  /**
   * TeacherDiscipline updateManyAndReturn
   */
  export type TeacherDisciplineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherDiscipline
     */
    select?: TeacherDisciplineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherDiscipline
     */
    omit?: TeacherDisciplineOmit<ExtArgs> | null
    /**
     * The data used to update TeacherDisciplines.
     */
    data: XOR<TeacherDisciplineUpdateManyMutationInput, TeacherDisciplineUncheckedUpdateManyInput>
    /**
     * Filter which TeacherDisciplines to update
     */
    where?: TeacherDisciplineWhereInput
    /**
     * Limit how many TeacherDisciplines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherDisciplineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherDiscipline upsert
   */
  export type TeacherDisciplineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherDiscipline
     */
    select?: TeacherDisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherDiscipline
     */
    omit?: TeacherDisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherDisciplineInclude<ExtArgs> | null
    /**
     * The filter to search for the TeacherDiscipline to update in case it exists.
     */
    where: TeacherDisciplineWhereUniqueInput
    /**
     * In case the TeacherDiscipline found by the `where` argument doesn't exist, create a new TeacherDiscipline with this data.
     */
    create: XOR<TeacherDisciplineCreateInput, TeacherDisciplineUncheckedCreateInput>
    /**
     * In case the TeacherDiscipline was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherDisciplineUpdateInput, TeacherDisciplineUncheckedUpdateInput>
  }

  /**
   * TeacherDiscipline delete
   */
  export type TeacherDisciplineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherDiscipline
     */
    select?: TeacherDisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherDiscipline
     */
    omit?: TeacherDisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherDisciplineInclude<ExtArgs> | null
    /**
     * Filter which TeacherDiscipline to delete.
     */
    where: TeacherDisciplineWhereUniqueInput
  }

  /**
   * TeacherDiscipline deleteMany
   */
  export type TeacherDisciplineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherDisciplines to delete
     */
    where?: TeacherDisciplineWhereInput
    /**
     * Limit how many TeacherDisciplines to delete.
     */
    limit?: number
  }

  /**
   * TeacherDiscipline without action
   */
  export type TeacherDisciplineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherDiscipline
     */
    select?: TeacherDisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherDiscipline
     */
    omit?: TeacherDisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherDisciplineInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    gradeYear: number | null
  }

  export type QuestionSumAggregateOutputType = {
    gradeYear: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    state: $Enums.QuestionState | null
    gradeYear: number | null
    authorId: string | null
    disciplineId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    state: $Enums.QuestionState | null
    gradeYear: number | null
    authorId: string | null
    disciplineId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    title: number
    content: number
    state: number
    gradeYear: number
    authorId: number
    disciplineId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    gradeYear?: true
  }

  export type QuestionSumAggregateInputType = {
    gradeYear?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    state?: true
    gradeYear?: true
    authorId?: true
    disciplineId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    state?: true
    gradeYear?: true
    authorId?: true
    disciplineId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    state?: true
    gradeYear?: true
    authorId?: true
    disciplineId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    title: string
    content: string
    state: $Enums.QuestionState
    gradeYear: number
    authorId: string
    disciplineId: string
    createdAt: Date
    updatedAt: Date
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    state?: boolean
    gradeYear?: boolean
    authorId?: boolean
    disciplineId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    attachments?: boolean | Question$attachmentsArgs<ExtArgs>
    stateChanges?: boolean | Question$stateChangesArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    state?: boolean
    gradeYear?: boolean
    authorId?: boolean
    disciplineId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    state?: boolean
    gradeYear?: boolean
    authorId?: boolean
    disciplineId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    state?: boolean
    gradeYear?: boolean
    authorId?: boolean
    disciplineId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "state" | "gradeYear" | "authorId" | "disciplineId" | "createdAt" | "updatedAt", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    attachments?: boolean | Question$attachmentsArgs<ExtArgs>
    stateChanges?: boolean | Question$stateChangesArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      discipline: Prisma.$DisciplinePayload<ExtArgs>
      answers: Prisma.$AnswerPayload<ExtArgs>[]
      attachments: Prisma.$QuestionAttachmentPayload<ExtArgs>[]
      stateChanges: Prisma.$QuestionStateChangePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      state: $Enums.QuestionState
      gradeYear: number
      authorId: string
      disciplineId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    discipline<T extends DisciplineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DisciplineDefaultArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends Question$answersArgs<ExtArgs> = {}>(args?: Subset<T, Question$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attachments<T extends Question$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Question$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stateChanges<T extends Question$stateChangesArgs<ExtArgs> = {}>(args?: Subset<T, Question$stateChangesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionStateChangePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly title: FieldRef<"Question", 'String'>
    readonly content: FieldRef<"Question", 'String'>
    readonly state: FieldRef<"Question", 'QuestionState'>
    readonly gradeYear: FieldRef<"Question", 'Int'>
    readonly authorId: FieldRef<"Question", 'String'>
    readonly disciplineId: FieldRef<"Question", 'String'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
    readonly updatedAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.answers
   */
  export type Question$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Question.attachments
   */
  export type Question$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAttachment
     */
    select?: QuestionAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAttachment
     */
    omit?: QuestionAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAttachmentInclude<ExtArgs> | null
    where?: QuestionAttachmentWhereInput
    orderBy?: QuestionAttachmentOrderByWithRelationInput | QuestionAttachmentOrderByWithRelationInput[]
    cursor?: QuestionAttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionAttachmentScalarFieldEnum | QuestionAttachmentScalarFieldEnum[]
  }

  /**
   * Question.stateChanges
   */
  export type Question$stateChangesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionStateChange
     */
    select?: QuestionStateChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionStateChange
     */
    omit?: QuestionStateChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionStateChangeInclude<ExtArgs> | null
    where?: QuestionStateChangeWhereInput
    orderBy?: QuestionStateChangeOrderByWithRelationInput | QuestionStateChangeOrderByWithRelationInput[]
    cursor?: QuestionStateChangeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionStateChangeScalarFieldEnum | QuestionStateChangeScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model QuestionStateChange
   */

  export type AggregateQuestionStateChange = {
    _count: QuestionStateChangeCountAggregateOutputType | null
    _min: QuestionStateChangeMinAggregateOutputType | null
    _max: QuestionStateChangeMaxAggregateOutputType | null
  }

  export type QuestionStateChangeMinAggregateOutputType = {
    id: string | null
    questionId: string | null
    changedById: string | null
    fromState: $Enums.QuestionState | null
    toState: $Enums.QuestionState | null
    summary: string | null
    createdAt: Date | null
  }

  export type QuestionStateChangeMaxAggregateOutputType = {
    id: string | null
    questionId: string | null
    changedById: string | null
    fromState: $Enums.QuestionState | null
    toState: $Enums.QuestionState | null
    summary: string | null
    createdAt: Date | null
  }

  export type QuestionStateChangeCountAggregateOutputType = {
    id: number
    questionId: number
    changedById: number
    fromState: number
    toState: number
    summary: number
    createdAt: number
    _all: number
  }


  export type QuestionStateChangeMinAggregateInputType = {
    id?: true
    questionId?: true
    changedById?: true
    fromState?: true
    toState?: true
    summary?: true
    createdAt?: true
  }

  export type QuestionStateChangeMaxAggregateInputType = {
    id?: true
    questionId?: true
    changedById?: true
    fromState?: true
    toState?: true
    summary?: true
    createdAt?: true
  }

  export type QuestionStateChangeCountAggregateInputType = {
    id?: true
    questionId?: true
    changedById?: true
    fromState?: true
    toState?: true
    summary?: true
    createdAt?: true
    _all?: true
  }

  export type QuestionStateChangeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionStateChange to aggregate.
     */
    where?: QuestionStateChangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionStateChanges to fetch.
     */
    orderBy?: QuestionStateChangeOrderByWithRelationInput | QuestionStateChangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionStateChangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionStateChanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionStateChanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestionStateChanges
    **/
    _count?: true | QuestionStateChangeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionStateChangeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionStateChangeMaxAggregateInputType
  }

  export type GetQuestionStateChangeAggregateType<T extends QuestionStateChangeAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionStateChange]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionStateChange[P]>
      : GetScalarType<T[P], AggregateQuestionStateChange[P]>
  }




  export type QuestionStateChangeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionStateChangeWhereInput
    orderBy?: QuestionStateChangeOrderByWithAggregationInput | QuestionStateChangeOrderByWithAggregationInput[]
    by: QuestionStateChangeScalarFieldEnum[] | QuestionStateChangeScalarFieldEnum
    having?: QuestionStateChangeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionStateChangeCountAggregateInputType | true
    _min?: QuestionStateChangeMinAggregateInputType
    _max?: QuestionStateChangeMaxAggregateInputType
  }

  export type QuestionStateChangeGroupByOutputType = {
    id: string
    questionId: string
    changedById: string
    fromState: $Enums.QuestionState
    toState: $Enums.QuestionState
    summary: string | null
    createdAt: Date
    _count: QuestionStateChangeCountAggregateOutputType | null
    _min: QuestionStateChangeMinAggregateOutputType | null
    _max: QuestionStateChangeMaxAggregateOutputType | null
  }

  type GetQuestionStateChangeGroupByPayload<T extends QuestionStateChangeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionStateChangeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionStateChangeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionStateChangeGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionStateChangeGroupByOutputType[P]>
        }
      >
    >


  export type QuestionStateChangeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    changedById?: boolean
    fromState?: boolean
    toState?: boolean
    summary?: boolean
    createdAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    changedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionStateChange"]>

  export type QuestionStateChangeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    changedById?: boolean
    fromState?: boolean
    toState?: boolean
    summary?: boolean
    createdAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    changedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionStateChange"]>

  export type QuestionStateChangeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    changedById?: boolean
    fromState?: boolean
    toState?: boolean
    summary?: boolean
    createdAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    changedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionStateChange"]>

  export type QuestionStateChangeSelectScalar = {
    id?: boolean
    questionId?: boolean
    changedById?: boolean
    fromState?: boolean
    toState?: boolean
    summary?: boolean
    createdAt?: boolean
  }

  export type QuestionStateChangeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questionId" | "changedById" | "fromState" | "toState" | "summary" | "createdAt", ExtArgs["result"]["questionStateChange"]>
  export type QuestionStateChangeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    changedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuestionStateChangeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    changedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuestionStateChangeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    changedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $QuestionStateChangePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuestionStateChange"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      changedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questionId: string
      changedById: string
      fromState: $Enums.QuestionState
      toState: $Enums.QuestionState
      summary: string | null
      createdAt: Date
    }, ExtArgs["result"]["questionStateChange"]>
    composites: {}
  }

  type QuestionStateChangeGetPayload<S extends boolean | null | undefined | QuestionStateChangeDefaultArgs> = $Result.GetResult<Prisma.$QuestionStateChangePayload, S>

  type QuestionStateChangeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionStateChangeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionStateChangeCountAggregateInputType | true
    }

  export interface QuestionStateChangeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuestionStateChange'], meta: { name: 'QuestionStateChange' } }
    /**
     * Find zero or one QuestionStateChange that matches the filter.
     * @param {QuestionStateChangeFindUniqueArgs} args - Arguments to find a QuestionStateChange
     * @example
     * // Get one QuestionStateChange
     * const questionStateChange = await prisma.questionStateChange.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionStateChangeFindUniqueArgs>(args: SelectSubset<T, QuestionStateChangeFindUniqueArgs<ExtArgs>>): Prisma__QuestionStateChangeClient<$Result.GetResult<Prisma.$QuestionStateChangePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuestionStateChange that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionStateChangeFindUniqueOrThrowArgs} args - Arguments to find a QuestionStateChange
     * @example
     * // Get one QuestionStateChange
     * const questionStateChange = await prisma.questionStateChange.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionStateChangeFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionStateChangeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionStateChangeClient<$Result.GetResult<Prisma.$QuestionStateChangePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionStateChange that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionStateChangeFindFirstArgs} args - Arguments to find a QuestionStateChange
     * @example
     * // Get one QuestionStateChange
     * const questionStateChange = await prisma.questionStateChange.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionStateChangeFindFirstArgs>(args?: SelectSubset<T, QuestionStateChangeFindFirstArgs<ExtArgs>>): Prisma__QuestionStateChangeClient<$Result.GetResult<Prisma.$QuestionStateChangePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionStateChange that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionStateChangeFindFirstOrThrowArgs} args - Arguments to find a QuestionStateChange
     * @example
     * // Get one QuestionStateChange
     * const questionStateChange = await prisma.questionStateChange.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionStateChangeFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionStateChangeFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionStateChangeClient<$Result.GetResult<Prisma.$QuestionStateChangePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuestionStateChanges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionStateChangeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionStateChanges
     * const questionStateChanges = await prisma.questionStateChange.findMany()
     * 
     * // Get first 10 QuestionStateChanges
     * const questionStateChanges = await prisma.questionStateChange.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionStateChangeWithIdOnly = await prisma.questionStateChange.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionStateChangeFindManyArgs>(args?: SelectSubset<T, QuestionStateChangeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionStateChangePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuestionStateChange.
     * @param {QuestionStateChangeCreateArgs} args - Arguments to create a QuestionStateChange.
     * @example
     * // Create one QuestionStateChange
     * const QuestionStateChange = await prisma.questionStateChange.create({
     *   data: {
     *     // ... data to create a QuestionStateChange
     *   }
     * })
     * 
     */
    create<T extends QuestionStateChangeCreateArgs>(args: SelectSubset<T, QuestionStateChangeCreateArgs<ExtArgs>>): Prisma__QuestionStateChangeClient<$Result.GetResult<Prisma.$QuestionStateChangePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuestionStateChanges.
     * @param {QuestionStateChangeCreateManyArgs} args - Arguments to create many QuestionStateChanges.
     * @example
     * // Create many QuestionStateChanges
     * const questionStateChange = await prisma.questionStateChange.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionStateChangeCreateManyArgs>(args?: SelectSubset<T, QuestionStateChangeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuestionStateChanges and returns the data saved in the database.
     * @param {QuestionStateChangeCreateManyAndReturnArgs} args - Arguments to create many QuestionStateChanges.
     * @example
     * // Create many QuestionStateChanges
     * const questionStateChange = await prisma.questionStateChange.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuestionStateChanges and only return the `id`
     * const questionStateChangeWithIdOnly = await prisma.questionStateChange.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionStateChangeCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionStateChangeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionStateChangePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuestionStateChange.
     * @param {QuestionStateChangeDeleteArgs} args - Arguments to delete one QuestionStateChange.
     * @example
     * // Delete one QuestionStateChange
     * const QuestionStateChange = await prisma.questionStateChange.delete({
     *   where: {
     *     // ... filter to delete one QuestionStateChange
     *   }
     * })
     * 
     */
    delete<T extends QuestionStateChangeDeleteArgs>(args: SelectSubset<T, QuestionStateChangeDeleteArgs<ExtArgs>>): Prisma__QuestionStateChangeClient<$Result.GetResult<Prisma.$QuestionStateChangePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuestionStateChange.
     * @param {QuestionStateChangeUpdateArgs} args - Arguments to update one QuestionStateChange.
     * @example
     * // Update one QuestionStateChange
     * const questionStateChange = await prisma.questionStateChange.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionStateChangeUpdateArgs>(args: SelectSubset<T, QuestionStateChangeUpdateArgs<ExtArgs>>): Prisma__QuestionStateChangeClient<$Result.GetResult<Prisma.$QuestionStateChangePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuestionStateChanges.
     * @param {QuestionStateChangeDeleteManyArgs} args - Arguments to filter QuestionStateChanges to delete.
     * @example
     * // Delete a few QuestionStateChanges
     * const { count } = await prisma.questionStateChange.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionStateChangeDeleteManyArgs>(args?: SelectSubset<T, QuestionStateChangeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionStateChanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionStateChangeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionStateChanges
     * const questionStateChange = await prisma.questionStateChange.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionStateChangeUpdateManyArgs>(args: SelectSubset<T, QuestionStateChangeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionStateChanges and returns the data updated in the database.
     * @param {QuestionStateChangeUpdateManyAndReturnArgs} args - Arguments to update many QuestionStateChanges.
     * @example
     * // Update many QuestionStateChanges
     * const questionStateChange = await prisma.questionStateChange.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuestionStateChanges and only return the `id`
     * const questionStateChangeWithIdOnly = await prisma.questionStateChange.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionStateChangeUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionStateChangeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionStateChangePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuestionStateChange.
     * @param {QuestionStateChangeUpsertArgs} args - Arguments to update or create a QuestionStateChange.
     * @example
     * // Update or create a QuestionStateChange
     * const questionStateChange = await prisma.questionStateChange.upsert({
     *   create: {
     *     // ... data to create a QuestionStateChange
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionStateChange we want to update
     *   }
     * })
     */
    upsert<T extends QuestionStateChangeUpsertArgs>(args: SelectSubset<T, QuestionStateChangeUpsertArgs<ExtArgs>>): Prisma__QuestionStateChangeClient<$Result.GetResult<Prisma.$QuestionStateChangePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuestionStateChanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionStateChangeCountArgs} args - Arguments to filter QuestionStateChanges to count.
     * @example
     * // Count the number of QuestionStateChanges
     * const count = await prisma.questionStateChange.count({
     *   where: {
     *     // ... the filter for the QuestionStateChanges we want to count
     *   }
     * })
    **/
    count<T extends QuestionStateChangeCountArgs>(
      args?: Subset<T, QuestionStateChangeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionStateChangeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestionStateChange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionStateChangeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionStateChangeAggregateArgs>(args: Subset<T, QuestionStateChangeAggregateArgs>): Prisma.PrismaPromise<GetQuestionStateChangeAggregateType<T>>

    /**
     * Group by QuestionStateChange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionStateChangeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionStateChangeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionStateChangeGroupByArgs['orderBy'] }
        : { orderBy?: QuestionStateChangeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionStateChangeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionStateChangeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuestionStateChange model
   */
  readonly fields: QuestionStateChangeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionStateChange.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionStateChangeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    changedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuestionStateChange model
   */
  interface QuestionStateChangeFieldRefs {
    readonly id: FieldRef<"QuestionStateChange", 'String'>
    readonly questionId: FieldRef<"QuestionStateChange", 'String'>
    readonly changedById: FieldRef<"QuestionStateChange", 'String'>
    readonly fromState: FieldRef<"QuestionStateChange", 'QuestionState'>
    readonly toState: FieldRef<"QuestionStateChange", 'QuestionState'>
    readonly summary: FieldRef<"QuestionStateChange", 'String'>
    readonly createdAt: FieldRef<"QuestionStateChange", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuestionStateChange findUnique
   */
  export type QuestionStateChangeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionStateChange
     */
    select?: QuestionStateChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionStateChange
     */
    omit?: QuestionStateChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionStateChangeInclude<ExtArgs> | null
    /**
     * Filter, which QuestionStateChange to fetch.
     */
    where: QuestionStateChangeWhereUniqueInput
  }

  /**
   * QuestionStateChange findUniqueOrThrow
   */
  export type QuestionStateChangeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionStateChange
     */
    select?: QuestionStateChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionStateChange
     */
    omit?: QuestionStateChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionStateChangeInclude<ExtArgs> | null
    /**
     * Filter, which QuestionStateChange to fetch.
     */
    where: QuestionStateChangeWhereUniqueInput
  }

  /**
   * QuestionStateChange findFirst
   */
  export type QuestionStateChangeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionStateChange
     */
    select?: QuestionStateChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionStateChange
     */
    omit?: QuestionStateChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionStateChangeInclude<ExtArgs> | null
    /**
     * Filter, which QuestionStateChange to fetch.
     */
    where?: QuestionStateChangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionStateChanges to fetch.
     */
    orderBy?: QuestionStateChangeOrderByWithRelationInput | QuestionStateChangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionStateChanges.
     */
    cursor?: QuestionStateChangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionStateChanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionStateChanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionStateChanges.
     */
    distinct?: QuestionStateChangeScalarFieldEnum | QuestionStateChangeScalarFieldEnum[]
  }

  /**
   * QuestionStateChange findFirstOrThrow
   */
  export type QuestionStateChangeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionStateChange
     */
    select?: QuestionStateChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionStateChange
     */
    omit?: QuestionStateChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionStateChangeInclude<ExtArgs> | null
    /**
     * Filter, which QuestionStateChange to fetch.
     */
    where?: QuestionStateChangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionStateChanges to fetch.
     */
    orderBy?: QuestionStateChangeOrderByWithRelationInput | QuestionStateChangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionStateChanges.
     */
    cursor?: QuestionStateChangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionStateChanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionStateChanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionStateChanges.
     */
    distinct?: QuestionStateChangeScalarFieldEnum | QuestionStateChangeScalarFieldEnum[]
  }

  /**
   * QuestionStateChange findMany
   */
  export type QuestionStateChangeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionStateChange
     */
    select?: QuestionStateChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionStateChange
     */
    omit?: QuestionStateChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionStateChangeInclude<ExtArgs> | null
    /**
     * Filter, which QuestionStateChanges to fetch.
     */
    where?: QuestionStateChangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionStateChanges to fetch.
     */
    orderBy?: QuestionStateChangeOrderByWithRelationInput | QuestionStateChangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestionStateChanges.
     */
    cursor?: QuestionStateChangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionStateChanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionStateChanges.
     */
    skip?: number
    distinct?: QuestionStateChangeScalarFieldEnum | QuestionStateChangeScalarFieldEnum[]
  }

  /**
   * QuestionStateChange create
   */
  export type QuestionStateChangeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionStateChange
     */
    select?: QuestionStateChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionStateChange
     */
    omit?: QuestionStateChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionStateChangeInclude<ExtArgs> | null
    /**
     * The data needed to create a QuestionStateChange.
     */
    data: XOR<QuestionStateChangeCreateInput, QuestionStateChangeUncheckedCreateInput>
  }

  /**
   * QuestionStateChange createMany
   */
  export type QuestionStateChangeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuestionStateChanges.
     */
    data: QuestionStateChangeCreateManyInput | QuestionStateChangeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuestionStateChange createManyAndReturn
   */
  export type QuestionStateChangeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionStateChange
     */
    select?: QuestionStateChangeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionStateChange
     */
    omit?: QuestionStateChangeOmit<ExtArgs> | null
    /**
     * The data used to create many QuestionStateChanges.
     */
    data: QuestionStateChangeCreateManyInput | QuestionStateChangeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionStateChangeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionStateChange update
   */
  export type QuestionStateChangeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionStateChange
     */
    select?: QuestionStateChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionStateChange
     */
    omit?: QuestionStateChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionStateChangeInclude<ExtArgs> | null
    /**
     * The data needed to update a QuestionStateChange.
     */
    data: XOR<QuestionStateChangeUpdateInput, QuestionStateChangeUncheckedUpdateInput>
    /**
     * Choose, which QuestionStateChange to update.
     */
    where: QuestionStateChangeWhereUniqueInput
  }

  /**
   * QuestionStateChange updateMany
   */
  export type QuestionStateChangeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuestionStateChanges.
     */
    data: XOR<QuestionStateChangeUpdateManyMutationInput, QuestionStateChangeUncheckedUpdateManyInput>
    /**
     * Filter which QuestionStateChanges to update
     */
    where?: QuestionStateChangeWhereInput
    /**
     * Limit how many QuestionStateChanges to update.
     */
    limit?: number
  }

  /**
   * QuestionStateChange updateManyAndReturn
   */
  export type QuestionStateChangeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionStateChange
     */
    select?: QuestionStateChangeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionStateChange
     */
    omit?: QuestionStateChangeOmit<ExtArgs> | null
    /**
     * The data used to update QuestionStateChanges.
     */
    data: XOR<QuestionStateChangeUpdateManyMutationInput, QuestionStateChangeUncheckedUpdateManyInput>
    /**
     * Filter which QuestionStateChanges to update
     */
    where?: QuestionStateChangeWhereInput
    /**
     * Limit how many QuestionStateChanges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionStateChangeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionStateChange upsert
   */
  export type QuestionStateChangeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionStateChange
     */
    select?: QuestionStateChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionStateChange
     */
    omit?: QuestionStateChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionStateChangeInclude<ExtArgs> | null
    /**
     * The filter to search for the QuestionStateChange to update in case it exists.
     */
    where: QuestionStateChangeWhereUniqueInput
    /**
     * In case the QuestionStateChange found by the `where` argument doesn't exist, create a new QuestionStateChange with this data.
     */
    create: XOR<QuestionStateChangeCreateInput, QuestionStateChangeUncheckedCreateInput>
    /**
     * In case the QuestionStateChange was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionStateChangeUpdateInput, QuestionStateChangeUncheckedUpdateInput>
  }

  /**
   * QuestionStateChange delete
   */
  export type QuestionStateChangeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionStateChange
     */
    select?: QuestionStateChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionStateChange
     */
    omit?: QuestionStateChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionStateChangeInclude<ExtArgs> | null
    /**
     * Filter which QuestionStateChange to delete.
     */
    where: QuestionStateChangeWhereUniqueInput
  }

  /**
   * QuestionStateChange deleteMany
   */
  export type QuestionStateChangeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionStateChanges to delete
     */
    where?: QuestionStateChangeWhereInput
    /**
     * Limit how many QuestionStateChanges to delete.
     */
    limit?: number
  }

  /**
   * QuestionStateChange without action
   */
  export type QuestionStateChangeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionStateChange
     */
    select?: QuestionStateChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionStateChange
     */
    omit?: QuestionStateChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionStateChangeInclude<ExtArgs> | null
  }


  /**
   * Model Answer
   */

  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerMinAggregateOutputType = {
    id: string | null
    content: string | null
    questionId: string | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnswerMaxAggregateOutputType = {
    id: string | null
    content: string | null
    questionId: string | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnswerCountAggregateOutputType = {
    id: number
    content: number
    questionId: number
    authorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnswerMinAggregateInputType = {
    id?: true
    content?: true
    questionId?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnswerMaxAggregateInputType = {
    id?: true
    content?: true
    questionId?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnswerCountAggregateInputType = {
    id?: true
    content?: true
    questionId?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answer to aggregate.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type AnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithAggregationInput | AnswerOrderByWithAggregationInput[]
    by: AnswerScalarFieldEnum[] | AnswerScalarFieldEnum
    having?: AnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }

  export type AnswerGroupByOutputType = {
    id: string
    content: string
    questionId: string
    authorId: string
    createdAt: Date
    updatedAt: Date
    _count: AnswerCountAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type AnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    questionId?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    attachments?: boolean | Answer$attachmentsArgs<ExtArgs>
    _count?: boolean | AnswerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    questionId?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    questionId?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectScalar = {
    id?: boolean
    content?: boolean
    questionId?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "questionId" | "authorId" | "createdAt" | "updatedAt", ExtArgs["result"]["answer"]>
  export type AnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    attachments?: boolean | Answer$attachmentsArgs<ExtArgs>
    _count?: boolean | AnswerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Answer"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
      attachments: Prisma.$AnswerAttachmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      questionId: string
      authorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["answer"]>
    composites: {}
  }

  type AnswerGetPayload<S extends boolean | null | undefined | AnswerDefaultArgs> = $Result.GetResult<Prisma.$AnswerPayload, S>

  type AnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswerCountAggregateInputType | true
    }

  export interface AnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Answer'], meta: { name: 'Answer' } }
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerFindUniqueArgs>(args: SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnswerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerFindFirstArgs>(args?: SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerWithIdOnly = await prisma.answer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnswerFindManyArgs>(args?: SelectSubset<T, AnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
     */
    create<T extends AnswerCreateArgs>(args: SelectSubset<T, AnswerCreateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answers.
     * @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswerCreateManyArgs>(args?: SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {AnswerCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, AnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
     */
    delete<T extends AnswerDeleteArgs>(args: SelectSubset<T, AnswerDeleteArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswerUpdateArgs>(args: SelectSubset<T, AnswerUpdateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswerDeleteManyArgs>(args?: SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswerUpdateManyArgs>(args: SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers and returns the data updated in the database.
     * @param {AnswerUpdateManyAndReturnArgs} args - Arguments to update many Answers.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, AnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
     */
    upsert<T extends AnswerUpsertArgs>(args: SelectSubset<T, AnswerUpsertArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs['orderBy'] }
        : { orderBy?: AnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Answer model
   */
  readonly fields: AnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attachments<T extends Answer$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Answer$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Answer model
   */
  interface AnswerFieldRefs {
    readonly id: FieldRef<"Answer", 'String'>
    readonly content: FieldRef<"Answer", 'String'>
    readonly questionId: FieldRef<"Answer", 'String'>
    readonly authorId: FieldRef<"Answer", 'String'>
    readonly createdAt: FieldRef<"Answer", 'DateTime'>
    readonly updatedAt: FieldRef<"Answer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Answer findUnique
   */
  export type AnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findUniqueOrThrow
   */
  export type AnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findFirst
   */
  export type AnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findFirstOrThrow
   */
  export type AnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer create
   */
  export type AnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a Answer.
     */
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
  }

  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Answer createManyAndReturn
   */
  export type AnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer update
   */
  export type AnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a Answer.
     */
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
    /**
     * Choose, which Answer to update.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
  }

  /**
   * Answer updateManyAndReturn
   */
  export type AnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the Answer to update in case it exists.
     */
    where: AnswerWhereUniqueInput
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     */
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
  }

  /**
   * Answer delete
   */
  export type AnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter which Answer to delete.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to delete.
     */
    limit?: number
  }

  /**
   * Answer.attachments
   */
  export type Answer$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerAttachment
     */
    select?: AnswerAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerAttachment
     */
    omit?: AnswerAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerAttachmentInclude<ExtArgs> | null
    where?: AnswerAttachmentWhereInput
    orderBy?: AnswerAttachmentOrderByWithRelationInput | AnswerAttachmentOrderByWithRelationInput[]
    cursor?: AnswerAttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerAttachmentScalarFieldEnum | AnswerAttachmentScalarFieldEnum[]
  }

  /**
   * Answer without action
   */
  export type AnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
  }


  /**
   * Model QuestionAttachment
   */

  export type AggregateQuestionAttachment = {
    _count: QuestionAttachmentCountAggregateOutputType | null
    _avg: QuestionAttachmentAvgAggregateOutputType | null
    _sum: QuestionAttachmentSumAggregateOutputType | null
    _min: QuestionAttachmentMinAggregateOutputType | null
    _max: QuestionAttachmentMaxAggregateOutputType | null
  }

  export type QuestionAttachmentAvgAggregateOutputType = {
    fileSize: number | null
  }

  export type QuestionAttachmentSumAggregateOutputType = {
    fileSize: number | null
  }

  export type QuestionAttachmentMinAggregateOutputType = {
    id: string | null
    questionId: string | null
    fileName: string | null
    fileUrl: string | null
    fileType: string | null
    fileSize: number | null
    createdAt: Date | null
  }

  export type QuestionAttachmentMaxAggregateOutputType = {
    id: string | null
    questionId: string | null
    fileName: string | null
    fileUrl: string | null
    fileType: string | null
    fileSize: number | null
    createdAt: Date | null
  }

  export type QuestionAttachmentCountAggregateOutputType = {
    id: number
    questionId: number
    fileName: number
    fileUrl: number
    fileType: number
    fileSize: number
    createdAt: number
    _all: number
  }


  export type QuestionAttachmentAvgAggregateInputType = {
    fileSize?: true
  }

  export type QuestionAttachmentSumAggregateInputType = {
    fileSize?: true
  }

  export type QuestionAttachmentMinAggregateInputType = {
    id?: true
    questionId?: true
    fileName?: true
    fileUrl?: true
    fileType?: true
    fileSize?: true
    createdAt?: true
  }

  export type QuestionAttachmentMaxAggregateInputType = {
    id?: true
    questionId?: true
    fileName?: true
    fileUrl?: true
    fileType?: true
    fileSize?: true
    createdAt?: true
  }

  export type QuestionAttachmentCountAggregateInputType = {
    id?: true
    questionId?: true
    fileName?: true
    fileUrl?: true
    fileType?: true
    fileSize?: true
    createdAt?: true
    _all?: true
  }

  export type QuestionAttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionAttachment to aggregate.
     */
    where?: QuestionAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionAttachments to fetch.
     */
    orderBy?: QuestionAttachmentOrderByWithRelationInput | QuestionAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestionAttachments
    **/
    _count?: true | QuestionAttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAttachmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionAttachmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionAttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionAttachmentMaxAggregateInputType
  }

  export type GetQuestionAttachmentAggregateType<T extends QuestionAttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionAttachment[P]>
      : GetScalarType<T[P], AggregateQuestionAttachment[P]>
  }




  export type QuestionAttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionAttachmentWhereInput
    orderBy?: QuestionAttachmentOrderByWithAggregationInput | QuestionAttachmentOrderByWithAggregationInput[]
    by: QuestionAttachmentScalarFieldEnum[] | QuestionAttachmentScalarFieldEnum
    having?: QuestionAttachmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionAttachmentCountAggregateInputType | true
    _avg?: QuestionAttachmentAvgAggregateInputType
    _sum?: QuestionAttachmentSumAggregateInputType
    _min?: QuestionAttachmentMinAggregateInputType
    _max?: QuestionAttachmentMaxAggregateInputType
  }

  export type QuestionAttachmentGroupByOutputType = {
    id: string
    questionId: string
    fileName: string
    fileUrl: string
    fileType: string
    fileSize: number
    createdAt: Date
    _count: QuestionAttachmentCountAggregateOutputType | null
    _avg: QuestionAttachmentAvgAggregateOutputType | null
    _sum: QuestionAttachmentSumAggregateOutputType | null
    _min: QuestionAttachmentMinAggregateOutputType | null
    _max: QuestionAttachmentMaxAggregateOutputType | null
  }

  type GetQuestionAttachmentGroupByPayload<T extends QuestionAttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionAttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionAttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionAttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionAttachmentGroupByOutputType[P]>
        }
      >
    >


  export type QuestionAttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileType?: boolean
    fileSize?: boolean
    createdAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionAttachment"]>

  export type QuestionAttachmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileType?: boolean
    fileSize?: boolean
    createdAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionAttachment"]>

  export type QuestionAttachmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileType?: boolean
    fileSize?: boolean
    createdAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionAttachment"]>

  export type QuestionAttachmentSelectScalar = {
    id?: boolean
    questionId?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileType?: boolean
    fileSize?: boolean
    createdAt?: boolean
  }

  export type QuestionAttachmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questionId" | "fileName" | "fileUrl" | "fileType" | "fileSize" | "createdAt", ExtArgs["result"]["questionAttachment"]>
  export type QuestionAttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type QuestionAttachmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type QuestionAttachmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $QuestionAttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuestionAttachment"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questionId: string
      fileName: string
      fileUrl: string
      fileType: string
      fileSize: number
      createdAt: Date
    }, ExtArgs["result"]["questionAttachment"]>
    composites: {}
  }

  type QuestionAttachmentGetPayload<S extends boolean | null | undefined | QuestionAttachmentDefaultArgs> = $Result.GetResult<Prisma.$QuestionAttachmentPayload, S>

  type QuestionAttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionAttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionAttachmentCountAggregateInputType | true
    }

  export interface QuestionAttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuestionAttachment'], meta: { name: 'QuestionAttachment' } }
    /**
     * Find zero or one QuestionAttachment that matches the filter.
     * @param {QuestionAttachmentFindUniqueArgs} args - Arguments to find a QuestionAttachment
     * @example
     * // Get one QuestionAttachment
     * const questionAttachment = await prisma.questionAttachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionAttachmentFindUniqueArgs>(args: SelectSubset<T, QuestionAttachmentFindUniqueArgs<ExtArgs>>): Prisma__QuestionAttachmentClient<$Result.GetResult<Prisma.$QuestionAttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuestionAttachment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionAttachmentFindUniqueOrThrowArgs} args - Arguments to find a QuestionAttachment
     * @example
     * // Get one QuestionAttachment
     * const questionAttachment = await prisma.questionAttachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionAttachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionAttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionAttachmentClient<$Result.GetResult<Prisma.$QuestionAttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionAttachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAttachmentFindFirstArgs} args - Arguments to find a QuestionAttachment
     * @example
     * // Get one QuestionAttachment
     * const questionAttachment = await prisma.questionAttachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionAttachmentFindFirstArgs>(args?: SelectSubset<T, QuestionAttachmentFindFirstArgs<ExtArgs>>): Prisma__QuestionAttachmentClient<$Result.GetResult<Prisma.$QuestionAttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionAttachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAttachmentFindFirstOrThrowArgs} args - Arguments to find a QuestionAttachment
     * @example
     * // Get one QuestionAttachment
     * const questionAttachment = await prisma.questionAttachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionAttachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionAttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionAttachmentClient<$Result.GetResult<Prisma.$QuestionAttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuestionAttachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionAttachments
     * const questionAttachments = await prisma.questionAttachment.findMany()
     * 
     * // Get first 10 QuestionAttachments
     * const questionAttachments = await prisma.questionAttachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionAttachmentWithIdOnly = await prisma.questionAttachment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionAttachmentFindManyArgs>(args?: SelectSubset<T, QuestionAttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuestionAttachment.
     * @param {QuestionAttachmentCreateArgs} args - Arguments to create a QuestionAttachment.
     * @example
     * // Create one QuestionAttachment
     * const QuestionAttachment = await prisma.questionAttachment.create({
     *   data: {
     *     // ... data to create a QuestionAttachment
     *   }
     * })
     * 
     */
    create<T extends QuestionAttachmentCreateArgs>(args: SelectSubset<T, QuestionAttachmentCreateArgs<ExtArgs>>): Prisma__QuestionAttachmentClient<$Result.GetResult<Prisma.$QuestionAttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuestionAttachments.
     * @param {QuestionAttachmentCreateManyArgs} args - Arguments to create many QuestionAttachments.
     * @example
     * // Create many QuestionAttachments
     * const questionAttachment = await prisma.questionAttachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionAttachmentCreateManyArgs>(args?: SelectSubset<T, QuestionAttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuestionAttachments and returns the data saved in the database.
     * @param {QuestionAttachmentCreateManyAndReturnArgs} args - Arguments to create many QuestionAttachments.
     * @example
     * // Create many QuestionAttachments
     * const questionAttachment = await prisma.questionAttachment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuestionAttachments and only return the `id`
     * const questionAttachmentWithIdOnly = await prisma.questionAttachment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionAttachmentCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionAttachmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionAttachmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuestionAttachment.
     * @param {QuestionAttachmentDeleteArgs} args - Arguments to delete one QuestionAttachment.
     * @example
     * // Delete one QuestionAttachment
     * const QuestionAttachment = await prisma.questionAttachment.delete({
     *   where: {
     *     // ... filter to delete one QuestionAttachment
     *   }
     * })
     * 
     */
    delete<T extends QuestionAttachmentDeleteArgs>(args: SelectSubset<T, QuestionAttachmentDeleteArgs<ExtArgs>>): Prisma__QuestionAttachmentClient<$Result.GetResult<Prisma.$QuestionAttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuestionAttachment.
     * @param {QuestionAttachmentUpdateArgs} args - Arguments to update one QuestionAttachment.
     * @example
     * // Update one QuestionAttachment
     * const questionAttachment = await prisma.questionAttachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionAttachmentUpdateArgs>(args: SelectSubset<T, QuestionAttachmentUpdateArgs<ExtArgs>>): Prisma__QuestionAttachmentClient<$Result.GetResult<Prisma.$QuestionAttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuestionAttachments.
     * @param {QuestionAttachmentDeleteManyArgs} args - Arguments to filter QuestionAttachments to delete.
     * @example
     * // Delete a few QuestionAttachments
     * const { count } = await prisma.questionAttachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionAttachmentDeleteManyArgs>(args?: SelectSubset<T, QuestionAttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionAttachments
     * const questionAttachment = await prisma.questionAttachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionAttachmentUpdateManyArgs>(args: SelectSubset<T, QuestionAttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionAttachments and returns the data updated in the database.
     * @param {QuestionAttachmentUpdateManyAndReturnArgs} args - Arguments to update many QuestionAttachments.
     * @example
     * // Update many QuestionAttachments
     * const questionAttachment = await prisma.questionAttachment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuestionAttachments and only return the `id`
     * const questionAttachmentWithIdOnly = await prisma.questionAttachment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionAttachmentUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionAttachmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionAttachmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuestionAttachment.
     * @param {QuestionAttachmentUpsertArgs} args - Arguments to update or create a QuestionAttachment.
     * @example
     * // Update or create a QuestionAttachment
     * const questionAttachment = await prisma.questionAttachment.upsert({
     *   create: {
     *     // ... data to create a QuestionAttachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionAttachment we want to update
     *   }
     * })
     */
    upsert<T extends QuestionAttachmentUpsertArgs>(args: SelectSubset<T, QuestionAttachmentUpsertArgs<ExtArgs>>): Prisma__QuestionAttachmentClient<$Result.GetResult<Prisma.$QuestionAttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuestionAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAttachmentCountArgs} args - Arguments to filter QuestionAttachments to count.
     * @example
     * // Count the number of QuestionAttachments
     * const count = await prisma.questionAttachment.count({
     *   where: {
     *     // ... the filter for the QuestionAttachments we want to count
     *   }
     * })
    **/
    count<T extends QuestionAttachmentCountArgs>(
      args?: Subset<T, QuestionAttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionAttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestionAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAttachmentAggregateArgs>(args: Subset<T, QuestionAttachmentAggregateArgs>): Prisma.PrismaPromise<GetQuestionAttachmentAggregateType<T>>

    /**
     * Group by QuestionAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAttachmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionAttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionAttachmentGroupByArgs['orderBy'] }
        : { orderBy?: QuestionAttachmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionAttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuestionAttachment model
   */
  readonly fields: QuestionAttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionAttachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionAttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuestionAttachment model
   */
  interface QuestionAttachmentFieldRefs {
    readonly id: FieldRef<"QuestionAttachment", 'String'>
    readonly questionId: FieldRef<"QuestionAttachment", 'String'>
    readonly fileName: FieldRef<"QuestionAttachment", 'String'>
    readonly fileUrl: FieldRef<"QuestionAttachment", 'String'>
    readonly fileType: FieldRef<"QuestionAttachment", 'String'>
    readonly fileSize: FieldRef<"QuestionAttachment", 'Int'>
    readonly createdAt: FieldRef<"QuestionAttachment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuestionAttachment findUnique
   */
  export type QuestionAttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAttachment
     */
    select?: QuestionAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAttachment
     */
    omit?: QuestionAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which QuestionAttachment to fetch.
     */
    where: QuestionAttachmentWhereUniqueInput
  }

  /**
   * QuestionAttachment findUniqueOrThrow
   */
  export type QuestionAttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAttachment
     */
    select?: QuestionAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAttachment
     */
    omit?: QuestionAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which QuestionAttachment to fetch.
     */
    where: QuestionAttachmentWhereUniqueInput
  }

  /**
   * QuestionAttachment findFirst
   */
  export type QuestionAttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAttachment
     */
    select?: QuestionAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAttachment
     */
    omit?: QuestionAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which QuestionAttachment to fetch.
     */
    where?: QuestionAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionAttachments to fetch.
     */
    orderBy?: QuestionAttachmentOrderByWithRelationInput | QuestionAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionAttachments.
     */
    cursor?: QuestionAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionAttachments.
     */
    distinct?: QuestionAttachmentScalarFieldEnum | QuestionAttachmentScalarFieldEnum[]
  }

  /**
   * QuestionAttachment findFirstOrThrow
   */
  export type QuestionAttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAttachment
     */
    select?: QuestionAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAttachment
     */
    omit?: QuestionAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which QuestionAttachment to fetch.
     */
    where?: QuestionAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionAttachments to fetch.
     */
    orderBy?: QuestionAttachmentOrderByWithRelationInput | QuestionAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionAttachments.
     */
    cursor?: QuestionAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionAttachments.
     */
    distinct?: QuestionAttachmentScalarFieldEnum | QuestionAttachmentScalarFieldEnum[]
  }

  /**
   * QuestionAttachment findMany
   */
  export type QuestionAttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAttachment
     */
    select?: QuestionAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAttachment
     */
    omit?: QuestionAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which QuestionAttachments to fetch.
     */
    where?: QuestionAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionAttachments to fetch.
     */
    orderBy?: QuestionAttachmentOrderByWithRelationInput | QuestionAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestionAttachments.
     */
    cursor?: QuestionAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionAttachments.
     */
    skip?: number
    distinct?: QuestionAttachmentScalarFieldEnum | QuestionAttachmentScalarFieldEnum[]
  }

  /**
   * QuestionAttachment create
   */
  export type QuestionAttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAttachment
     */
    select?: QuestionAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAttachment
     */
    omit?: QuestionAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a QuestionAttachment.
     */
    data: XOR<QuestionAttachmentCreateInput, QuestionAttachmentUncheckedCreateInput>
  }

  /**
   * QuestionAttachment createMany
   */
  export type QuestionAttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuestionAttachments.
     */
    data: QuestionAttachmentCreateManyInput | QuestionAttachmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuestionAttachment createManyAndReturn
   */
  export type QuestionAttachmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAttachment
     */
    select?: QuestionAttachmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAttachment
     */
    omit?: QuestionAttachmentOmit<ExtArgs> | null
    /**
     * The data used to create many QuestionAttachments.
     */
    data: QuestionAttachmentCreateManyInput | QuestionAttachmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAttachmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionAttachment update
   */
  export type QuestionAttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAttachment
     */
    select?: QuestionAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAttachment
     */
    omit?: QuestionAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a QuestionAttachment.
     */
    data: XOR<QuestionAttachmentUpdateInput, QuestionAttachmentUncheckedUpdateInput>
    /**
     * Choose, which QuestionAttachment to update.
     */
    where: QuestionAttachmentWhereUniqueInput
  }

  /**
   * QuestionAttachment updateMany
   */
  export type QuestionAttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuestionAttachments.
     */
    data: XOR<QuestionAttachmentUpdateManyMutationInput, QuestionAttachmentUncheckedUpdateManyInput>
    /**
     * Filter which QuestionAttachments to update
     */
    where?: QuestionAttachmentWhereInput
    /**
     * Limit how many QuestionAttachments to update.
     */
    limit?: number
  }

  /**
   * QuestionAttachment updateManyAndReturn
   */
  export type QuestionAttachmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAttachment
     */
    select?: QuestionAttachmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAttachment
     */
    omit?: QuestionAttachmentOmit<ExtArgs> | null
    /**
     * The data used to update QuestionAttachments.
     */
    data: XOR<QuestionAttachmentUpdateManyMutationInput, QuestionAttachmentUncheckedUpdateManyInput>
    /**
     * Filter which QuestionAttachments to update
     */
    where?: QuestionAttachmentWhereInput
    /**
     * Limit how many QuestionAttachments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAttachmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionAttachment upsert
   */
  export type QuestionAttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAttachment
     */
    select?: QuestionAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAttachment
     */
    omit?: QuestionAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the QuestionAttachment to update in case it exists.
     */
    where: QuestionAttachmentWhereUniqueInput
    /**
     * In case the QuestionAttachment found by the `where` argument doesn't exist, create a new QuestionAttachment with this data.
     */
    create: XOR<QuestionAttachmentCreateInput, QuestionAttachmentUncheckedCreateInput>
    /**
     * In case the QuestionAttachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionAttachmentUpdateInput, QuestionAttachmentUncheckedUpdateInput>
  }

  /**
   * QuestionAttachment delete
   */
  export type QuestionAttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAttachment
     */
    select?: QuestionAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAttachment
     */
    omit?: QuestionAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAttachmentInclude<ExtArgs> | null
    /**
     * Filter which QuestionAttachment to delete.
     */
    where: QuestionAttachmentWhereUniqueInput
  }

  /**
   * QuestionAttachment deleteMany
   */
  export type QuestionAttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionAttachments to delete
     */
    where?: QuestionAttachmentWhereInput
    /**
     * Limit how many QuestionAttachments to delete.
     */
    limit?: number
  }

  /**
   * QuestionAttachment without action
   */
  export type QuestionAttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAttachment
     */
    select?: QuestionAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAttachment
     */
    omit?: QuestionAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAttachmentInclude<ExtArgs> | null
  }


  /**
   * Model AnswerAttachment
   */

  export type AggregateAnswerAttachment = {
    _count: AnswerAttachmentCountAggregateOutputType | null
    _avg: AnswerAttachmentAvgAggregateOutputType | null
    _sum: AnswerAttachmentSumAggregateOutputType | null
    _min: AnswerAttachmentMinAggregateOutputType | null
    _max: AnswerAttachmentMaxAggregateOutputType | null
  }

  export type AnswerAttachmentAvgAggregateOutputType = {
    fileSize: number | null
  }

  export type AnswerAttachmentSumAggregateOutputType = {
    fileSize: number | null
  }

  export type AnswerAttachmentMinAggregateOutputType = {
    id: string | null
    answerId: string | null
    fileName: string | null
    fileUrl: string | null
    fileType: string | null
    fileSize: number | null
    createdAt: Date | null
  }

  export type AnswerAttachmentMaxAggregateOutputType = {
    id: string | null
    answerId: string | null
    fileName: string | null
    fileUrl: string | null
    fileType: string | null
    fileSize: number | null
    createdAt: Date | null
  }

  export type AnswerAttachmentCountAggregateOutputType = {
    id: number
    answerId: number
    fileName: number
    fileUrl: number
    fileType: number
    fileSize: number
    createdAt: number
    _all: number
  }


  export type AnswerAttachmentAvgAggregateInputType = {
    fileSize?: true
  }

  export type AnswerAttachmentSumAggregateInputType = {
    fileSize?: true
  }

  export type AnswerAttachmentMinAggregateInputType = {
    id?: true
    answerId?: true
    fileName?: true
    fileUrl?: true
    fileType?: true
    fileSize?: true
    createdAt?: true
  }

  export type AnswerAttachmentMaxAggregateInputType = {
    id?: true
    answerId?: true
    fileName?: true
    fileUrl?: true
    fileType?: true
    fileSize?: true
    createdAt?: true
  }

  export type AnswerAttachmentCountAggregateInputType = {
    id?: true
    answerId?: true
    fileName?: true
    fileUrl?: true
    fileType?: true
    fileSize?: true
    createdAt?: true
    _all?: true
  }

  export type AnswerAttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnswerAttachment to aggregate.
     */
    where?: AnswerAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnswerAttachments to fetch.
     */
    orderBy?: AnswerAttachmentOrderByWithRelationInput | AnswerAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnswerAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnswerAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnswerAttachments
    **/
    _count?: true | AnswerAttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswerAttachmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswerAttachmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerAttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerAttachmentMaxAggregateInputType
  }

  export type GetAnswerAttachmentAggregateType<T extends AnswerAttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswerAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswerAttachment[P]>
      : GetScalarType<T[P], AggregateAnswerAttachment[P]>
  }




  export type AnswerAttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerAttachmentWhereInput
    orderBy?: AnswerAttachmentOrderByWithAggregationInput | AnswerAttachmentOrderByWithAggregationInput[]
    by: AnswerAttachmentScalarFieldEnum[] | AnswerAttachmentScalarFieldEnum
    having?: AnswerAttachmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerAttachmentCountAggregateInputType | true
    _avg?: AnswerAttachmentAvgAggregateInputType
    _sum?: AnswerAttachmentSumAggregateInputType
    _min?: AnswerAttachmentMinAggregateInputType
    _max?: AnswerAttachmentMaxAggregateInputType
  }

  export type AnswerAttachmentGroupByOutputType = {
    id: string
    answerId: string
    fileName: string
    fileUrl: string
    fileType: string
    fileSize: number
    createdAt: Date
    _count: AnswerAttachmentCountAggregateOutputType | null
    _avg: AnswerAttachmentAvgAggregateOutputType | null
    _sum: AnswerAttachmentSumAggregateOutputType | null
    _min: AnswerAttachmentMinAggregateOutputType | null
    _max: AnswerAttachmentMaxAggregateOutputType | null
  }

  type GetAnswerAttachmentGroupByPayload<T extends AnswerAttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerAttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerAttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerAttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerAttachmentGroupByOutputType[P]>
        }
      >
    >


  export type AnswerAttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    answerId?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileType?: boolean
    fileSize?: boolean
    createdAt?: boolean
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answerAttachment"]>

  export type AnswerAttachmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    answerId?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileType?: boolean
    fileSize?: boolean
    createdAt?: boolean
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answerAttachment"]>

  export type AnswerAttachmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    answerId?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileType?: boolean
    fileSize?: boolean
    createdAt?: boolean
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answerAttachment"]>

  export type AnswerAttachmentSelectScalar = {
    id?: boolean
    answerId?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileType?: boolean
    fileSize?: boolean
    createdAt?: boolean
  }

  export type AnswerAttachmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "answerId" | "fileName" | "fileUrl" | "fileType" | "fileSize" | "createdAt", ExtArgs["result"]["answerAttachment"]>
  export type AnswerAttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
  }
  export type AnswerAttachmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
  }
  export type AnswerAttachmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
  }

  export type $AnswerAttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnswerAttachment"
    objects: {
      answer: Prisma.$AnswerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      answerId: string
      fileName: string
      fileUrl: string
      fileType: string
      fileSize: number
      createdAt: Date
    }, ExtArgs["result"]["answerAttachment"]>
    composites: {}
  }

  type AnswerAttachmentGetPayload<S extends boolean | null | undefined | AnswerAttachmentDefaultArgs> = $Result.GetResult<Prisma.$AnswerAttachmentPayload, S>

  type AnswerAttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnswerAttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswerAttachmentCountAggregateInputType | true
    }

  export interface AnswerAttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnswerAttachment'], meta: { name: 'AnswerAttachment' } }
    /**
     * Find zero or one AnswerAttachment that matches the filter.
     * @param {AnswerAttachmentFindUniqueArgs} args - Arguments to find a AnswerAttachment
     * @example
     * // Get one AnswerAttachment
     * const answerAttachment = await prisma.answerAttachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerAttachmentFindUniqueArgs>(args: SelectSubset<T, AnswerAttachmentFindUniqueArgs<ExtArgs>>): Prisma__AnswerAttachmentClient<$Result.GetResult<Prisma.$AnswerAttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnswerAttachment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnswerAttachmentFindUniqueOrThrowArgs} args - Arguments to find a AnswerAttachment
     * @example
     * // Get one AnswerAttachment
     * const answerAttachment = await prisma.answerAttachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerAttachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswerAttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswerAttachmentClient<$Result.GetResult<Prisma.$AnswerAttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnswerAttachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAttachmentFindFirstArgs} args - Arguments to find a AnswerAttachment
     * @example
     * // Get one AnswerAttachment
     * const answerAttachment = await prisma.answerAttachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerAttachmentFindFirstArgs>(args?: SelectSubset<T, AnswerAttachmentFindFirstArgs<ExtArgs>>): Prisma__AnswerAttachmentClient<$Result.GetResult<Prisma.$AnswerAttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnswerAttachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAttachmentFindFirstOrThrowArgs} args - Arguments to find a AnswerAttachment
     * @example
     * // Get one AnswerAttachment
     * const answerAttachment = await prisma.answerAttachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerAttachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswerAttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswerAttachmentClient<$Result.GetResult<Prisma.$AnswerAttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnswerAttachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnswerAttachments
     * const answerAttachments = await prisma.answerAttachment.findMany()
     * 
     * // Get first 10 AnswerAttachments
     * const answerAttachments = await prisma.answerAttachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerAttachmentWithIdOnly = await prisma.answerAttachment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnswerAttachmentFindManyArgs>(args?: SelectSubset<T, AnswerAttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnswerAttachment.
     * @param {AnswerAttachmentCreateArgs} args - Arguments to create a AnswerAttachment.
     * @example
     * // Create one AnswerAttachment
     * const AnswerAttachment = await prisma.answerAttachment.create({
     *   data: {
     *     // ... data to create a AnswerAttachment
     *   }
     * })
     * 
     */
    create<T extends AnswerAttachmentCreateArgs>(args: SelectSubset<T, AnswerAttachmentCreateArgs<ExtArgs>>): Prisma__AnswerAttachmentClient<$Result.GetResult<Prisma.$AnswerAttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnswerAttachments.
     * @param {AnswerAttachmentCreateManyArgs} args - Arguments to create many AnswerAttachments.
     * @example
     * // Create many AnswerAttachments
     * const answerAttachment = await prisma.answerAttachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswerAttachmentCreateManyArgs>(args?: SelectSubset<T, AnswerAttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnswerAttachments and returns the data saved in the database.
     * @param {AnswerAttachmentCreateManyAndReturnArgs} args - Arguments to create many AnswerAttachments.
     * @example
     * // Create many AnswerAttachments
     * const answerAttachment = await prisma.answerAttachment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnswerAttachments and only return the `id`
     * const answerAttachmentWithIdOnly = await prisma.answerAttachment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnswerAttachmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AnswerAttachmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerAttachmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnswerAttachment.
     * @param {AnswerAttachmentDeleteArgs} args - Arguments to delete one AnswerAttachment.
     * @example
     * // Delete one AnswerAttachment
     * const AnswerAttachment = await prisma.answerAttachment.delete({
     *   where: {
     *     // ... filter to delete one AnswerAttachment
     *   }
     * })
     * 
     */
    delete<T extends AnswerAttachmentDeleteArgs>(args: SelectSubset<T, AnswerAttachmentDeleteArgs<ExtArgs>>): Prisma__AnswerAttachmentClient<$Result.GetResult<Prisma.$AnswerAttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnswerAttachment.
     * @param {AnswerAttachmentUpdateArgs} args - Arguments to update one AnswerAttachment.
     * @example
     * // Update one AnswerAttachment
     * const answerAttachment = await prisma.answerAttachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswerAttachmentUpdateArgs>(args: SelectSubset<T, AnswerAttachmentUpdateArgs<ExtArgs>>): Prisma__AnswerAttachmentClient<$Result.GetResult<Prisma.$AnswerAttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnswerAttachments.
     * @param {AnswerAttachmentDeleteManyArgs} args - Arguments to filter AnswerAttachments to delete.
     * @example
     * // Delete a few AnswerAttachments
     * const { count } = await prisma.answerAttachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswerAttachmentDeleteManyArgs>(args?: SelectSubset<T, AnswerAttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnswerAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnswerAttachments
     * const answerAttachment = await prisma.answerAttachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswerAttachmentUpdateManyArgs>(args: SelectSubset<T, AnswerAttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnswerAttachments and returns the data updated in the database.
     * @param {AnswerAttachmentUpdateManyAndReturnArgs} args - Arguments to update many AnswerAttachments.
     * @example
     * // Update many AnswerAttachments
     * const answerAttachment = await prisma.answerAttachment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnswerAttachments and only return the `id`
     * const answerAttachmentWithIdOnly = await prisma.answerAttachment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnswerAttachmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AnswerAttachmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerAttachmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnswerAttachment.
     * @param {AnswerAttachmentUpsertArgs} args - Arguments to update or create a AnswerAttachment.
     * @example
     * // Update or create a AnswerAttachment
     * const answerAttachment = await prisma.answerAttachment.upsert({
     *   create: {
     *     // ... data to create a AnswerAttachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnswerAttachment we want to update
     *   }
     * })
     */
    upsert<T extends AnswerAttachmentUpsertArgs>(args: SelectSubset<T, AnswerAttachmentUpsertArgs<ExtArgs>>): Prisma__AnswerAttachmentClient<$Result.GetResult<Prisma.$AnswerAttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnswerAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAttachmentCountArgs} args - Arguments to filter AnswerAttachments to count.
     * @example
     * // Count the number of AnswerAttachments
     * const count = await prisma.answerAttachment.count({
     *   where: {
     *     // ... the filter for the AnswerAttachments we want to count
     *   }
     * })
    **/
    count<T extends AnswerAttachmentCountArgs>(
      args?: Subset<T, AnswerAttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerAttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnswerAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnswerAttachmentAggregateArgs>(args: Subset<T, AnswerAttachmentAggregateArgs>): Prisma.PrismaPromise<GetAnswerAttachmentAggregateType<T>>

    /**
     * Group by AnswerAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAttachmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnswerAttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerAttachmentGroupByArgs['orderBy'] }
        : { orderBy?: AnswerAttachmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnswerAttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnswerAttachment model
   */
  readonly fields: AnswerAttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnswerAttachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerAttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answer<T extends AnswerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnswerDefaultArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AnswerAttachment model
   */
  interface AnswerAttachmentFieldRefs {
    readonly id: FieldRef<"AnswerAttachment", 'String'>
    readonly answerId: FieldRef<"AnswerAttachment", 'String'>
    readonly fileName: FieldRef<"AnswerAttachment", 'String'>
    readonly fileUrl: FieldRef<"AnswerAttachment", 'String'>
    readonly fileType: FieldRef<"AnswerAttachment", 'String'>
    readonly fileSize: FieldRef<"AnswerAttachment", 'Int'>
    readonly createdAt: FieldRef<"AnswerAttachment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnswerAttachment findUnique
   */
  export type AnswerAttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerAttachment
     */
    select?: AnswerAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerAttachment
     */
    omit?: AnswerAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which AnswerAttachment to fetch.
     */
    where: AnswerAttachmentWhereUniqueInput
  }

  /**
   * AnswerAttachment findUniqueOrThrow
   */
  export type AnswerAttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerAttachment
     */
    select?: AnswerAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerAttachment
     */
    omit?: AnswerAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which AnswerAttachment to fetch.
     */
    where: AnswerAttachmentWhereUniqueInput
  }

  /**
   * AnswerAttachment findFirst
   */
  export type AnswerAttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerAttachment
     */
    select?: AnswerAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerAttachment
     */
    omit?: AnswerAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which AnswerAttachment to fetch.
     */
    where?: AnswerAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnswerAttachments to fetch.
     */
    orderBy?: AnswerAttachmentOrderByWithRelationInput | AnswerAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnswerAttachments.
     */
    cursor?: AnswerAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnswerAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnswerAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnswerAttachments.
     */
    distinct?: AnswerAttachmentScalarFieldEnum | AnswerAttachmentScalarFieldEnum[]
  }

  /**
   * AnswerAttachment findFirstOrThrow
   */
  export type AnswerAttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerAttachment
     */
    select?: AnswerAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerAttachment
     */
    omit?: AnswerAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which AnswerAttachment to fetch.
     */
    where?: AnswerAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnswerAttachments to fetch.
     */
    orderBy?: AnswerAttachmentOrderByWithRelationInput | AnswerAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnswerAttachments.
     */
    cursor?: AnswerAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnswerAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnswerAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnswerAttachments.
     */
    distinct?: AnswerAttachmentScalarFieldEnum | AnswerAttachmentScalarFieldEnum[]
  }

  /**
   * AnswerAttachment findMany
   */
  export type AnswerAttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerAttachment
     */
    select?: AnswerAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerAttachment
     */
    omit?: AnswerAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which AnswerAttachments to fetch.
     */
    where?: AnswerAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnswerAttachments to fetch.
     */
    orderBy?: AnswerAttachmentOrderByWithRelationInput | AnswerAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnswerAttachments.
     */
    cursor?: AnswerAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnswerAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnswerAttachments.
     */
    skip?: number
    distinct?: AnswerAttachmentScalarFieldEnum | AnswerAttachmentScalarFieldEnum[]
  }

  /**
   * AnswerAttachment create
   */
  export type AnswerAttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerAttachment
     */
    select?: AnswerAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerAttachment
     */
    omit?: AnswerAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerAttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a AnswerAttachment.
     */
    data: XOR<AnswerAttachmentCreateInput, AnswerAttachmentUncheckedCreateInput>
  }

  /**
   * AnswerAttachment createMany
   */
  export type AnswerAttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnswerAttachments.
     */
    data: AnswerAttachmentCreateManyInput | AnswerAttachmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnswerAttachment createManyAndReturn
   */
  export type AnswerAttachmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerAttachment
     */
    select?: AnswerAttachmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerAttachment
     */
    omit?: AnswerAttachmentOmit<ExtArgs> | null
    /**
     * The data used to create many AnswerAttachments.
     */
    data: AnswerAttachmentCreateManyInput | AnswerAttachmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerAttachmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnswerAttachment update
   */
  export type AnswerAttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerAttachment
     */
    select?: AnswerAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerAttachment
     */
    omit?: AnswerAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerAttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a AnswerAttachment.
     */
    data: XOR<AnswerAttachmentUpdateInput, AnswerAttachmentUncheckedUpdateInput>
    /**
     * Choose, which AnswerAttachment to update.
     */
    where: AnswerAttachmentWhereUniqueInput
  }

  /**
   * AnswerAttachment updateMany
   */
  export type AnswerAttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnswerAttachments.
     */
    data: XOR<AnswerAttachmentUpdateManyMutationInput, AnswerAttachmentUncheckedUpdateManyInput>
    /**
     * Filter which AnswerAttachments to update
     */
    where?: AnswerAttachmentWhereInput
    /**
     * Limit how many AnswerAttachments to update.
     */
    limit?: number
  }

  /**
   * AnswerAttachment updateManyAndReturn
   */
  export type AnswerAttachmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerAttachment
     */
    select?: AnswerAttachmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerAttachment
     */
    omit?: AnswerAttachmentOmit<ExtArgs> | null
    /**
     * The data used to update AnswerAttachments.
     */
    data: XOR<AnswerAttachmentUpdateManyMutationInput, AnswerAttachmentUncheckedUpdateManyInput>
    /**
     * Filter which AnswerAttachments to update
     */
    where?: AnswerAttachmentWhereInput
    /**
     * Limit how many AnswerAttachments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerAttachmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnswerAttachment upsert
   */
  export type AnswerAttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerAttachment
     */
    select?: AnswerAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerAttachment
     */
    omit?: AnswerAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerAttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the AnswerAttachment to update in case it exists.
     */
    where: AnswerAttachmentWhereUniqueInput
    /**
     * In case the AnswerAttachment found by the `where` argument doesn't exist, create a new AnswerAttachment with this data.
     */
    create: XOR<AnswerAttachmentCreateInput, AnswerAttachmentUncheckedCreateInput>
    /**
     * In case the AnswerAttachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerAttachmentUpdateInput, AnswerAttachmentUncheckedUpdateInput>
  }

  /**
   * AnswerAttachment delete
   */
  export type AnswerAttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerAttachment
     */
    select?: AnswerAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerAttachment
     */
    omit?: AnswerAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerAttachmentInclude<ExtArgs> | null
    /**
     * Filter which AnswerAttachment to delete.
     */
    where: AnswerAttachmentWhereUniqueInput
  }

  /**
   * AnswerAttachment deleteMany
   */
  export type AnswerAttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnswerAttachments to delete
     */
    where?: AnswerAttachmentWhereInput
    /**
     * Limit how many AnswerAttachments to delete.
     */
    limit?: number
  }

  /**
   * AnswerAttachment without action
   */
  export type AnswerAttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerAttachment
     */
    select?: AnswerAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerAttachment
     */
    omit?: AnswerAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerAttachmentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DisciplineScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type DisciplineScalarFieldEnum = (typeof DisciplineScalarFieldEnum)[keyof typeof DisciplineScalarFieldEnum]


  export const TeacherDisciplineScalarFieldEnum: {
    id: 'id',
    teacherId: 'teacherId',
    disciplineId: 'disciplineId',
    createdAt: 'createdAt'
  };

  export type TeacherDisciplineScalarFieldEnum = (typeof TeacherDisciplineScalarFieldEnum)[keyof typeof TeacherDisciplineScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    state: 'state',
    gradeYear: 'gradeYear',
    authorId: 'authorId',
    disciplineId: 'disciplineId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const QuestionStateChangeScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    changedById: 'changedById',
    fromState: 'fromState',
    toState: 'toState',
    summary: 'summary',
    createdAt: 'createdAt'
  };

  export type QuestionStateChangeScalarFieldEnum = (typeof QuestionStateChangeScalarFieldEnum)[keyof typeof QuestionStateChangeScalarFieldEnum]


  export const AnswerScalarFieldEnum: {
    id: 'id',
    content: 'content',
    questionId: 'questionId',
    authorId: 'authorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


  export const QuestionAttachmentScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    fileName: 'fileName',
    fileUrl: 'fileUrl',
    fileType: 'fileType',
    fileSize: 'fileSize',
    createdAt: 'createdAt'
  };

  export type QuestionAttachmentScalarFieldEnum = (typeof QuestionAttachmentScalarFieldEnum)[keyof typeof QuestionAttachmentScalarFieldEnum]


  export const AnswerAttachmentScalarFieldEnum: {
    id: 'id',
    answerId: 'answerId',
    fileName: 'fileName',
    fileUrl: 'fileUrl',
    fileType: 'fileType',
    fileSize: 'fileSize',
    createdAt: 'createdAt'
  };

  export type AnswerAttachmentScalarFieldEnum = (typeof AnswerAttachmentScalarFieldEnum)[keyof typeof AnswerAttachmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'QuestionState'
   */
  export type EnumQuestionStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionState'>
    


  /**
   * Reference to a field of type 'QuestionState[]'
   */
  export type ListEnumQuestionStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionState[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    questions?: QuestionListRelationFilter
    answers?: AnswerListRelationFilter
    disciplines?: TeacherDisciplineListRelationFilter
    questionStateChanges?: QuestionStateChangeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    questions?: QuestionOrderByRelationAggregateInput
    answers?: AnswerOrderByRelationAggregateInput
    disciplines?: TeacherDisciplineOrderByRelationAggregateInput
    questionStateChanges?: QuestionStateChangeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    questions?: QuestionListRelationFilter
    answers?: AnswerListRelationFilter
    disciplines?: TeacherDisciplineListRelationFilter
    questionStateChanges?: QuestionStateChangeListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DisciplineWhereInput = {
    AND?: DisciplineWhereInput | DisciplineWhereInput[]
    OR?: DisciplineWhereInput[]
    NOT?: DisciplineWhereInput | DisciplineWhereInput[]
    id?: StringFilter<"Discipline"> | string
    name?: StringFilter<"Discipline"> | string
    createdAt?: DateTimeFilter<"Discipline"> | Date | string
    questions?: QuestionListRelationFilter
    teachers?: TeacherDisciplineListRelationFilter
  }

  export type DisciplineOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    questions?: QuestionOrderByRelationAggregateInput
    teachers?: TeacherDisciplineOrderByRelationAggregateInput
  }

  export type DisciplineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: DisciplineWhereInput | DisciplineWhereInput[]
    OR?: DisciplineWhereInput[]
    NOT?: DisciplineWhereInput | DisciplineWhereInput[]
    createdAt?: DateTimeFilter<"Discipline"> | Date | string
    questions?: QuestionListRelationFilter
    teachers?: TeacherDisciplineListRelationFilter
  }, "id" | "name">

  export type DisciplineOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: DisciplineCountOrderByAggregateInput
    _max?: DisciplineMaxOrderByAggregateInput
    _min?: DisciplineMinOrderByAggregateInput
  }

  export type DisciplineScalarWhereWithAggregatesInput = {
    AND?: DisciplineScalarWhereWithAggregatesInput | DisciplineScalarWhereWithAggregatesInput[]
    OR?: DisciplineScalarWhereWithAggregatesInput[]
    NOT?: DisciplineScalarWhereWithAggregatesInput | DisciplineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Discipline"> | string
    name?: StringWithAggregatesFilter<"Discipline"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Discipline"> | Date | string
  }

  export type TeacherDisciplineWhereInput = {
    AND?: TeacherDisciplineWhereInput | TeacherDisciplineWhereInput[]
    OR?: TeacherDisciplineWhereInput[]
    NOT?: TeacherDisciplineWhereInput | TeacherDisciplineWhereInput[]
    id?: StringFilter<"TeacherDiscipline"> | string
    teacherId?: StringFilter<"TeacherDiscipline"> | string
    disciplineId?: StringFilter<"TeacherDiscipline"> | string
    createdAt?: DateTimeFilter<"TeacherDiscipline"> | Date | string
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    discipline?: XOR<DisciplineScalarRelationFilter, DisciplineWhereInput>
  }

  export type TeacherDisciplineOrderByWithRelationInput = {
    id?: SortOrder
    teacherId?: SortOrder
    disciplineId?: SortOrder
    createdAt?: SortOrder
    teacher?: UserOrderByWithRelationInput
    discipline?: DisciplineOrderByWithRelationInput
  }

  export type TeacherDisciplineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    teacherId_disciplineId?: TeacherDisciplineTeacherIdDisciplineIdCompoundUniqueInput
    AND?: TeacherDisciplineWhereInput | TeacherDisciplineWhereInput[]
    OR?: TeacherDisciplineWhereInput[]
    NOT?: TeacherDisciplineWhereInput | TeacherDisciplineWhereInput[]
    teacherId?: StringFilter<"TeacherDiscipline"> | string
    disciplineId?: StringFilter<"TeacherDiscipline"> | string
    createdAt?: DateTimeFilter<"TeacherDiscipline"> | Date | string
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    discipline?: XOR<DisciplineScalarRelationFilter, DisciplineWhereInput>
  }, "id" | "teacherId_disciplineId">

  export type TeacherDisciplineOrderByWithAggregationInput = {
    id?: SortOrder
    teacherId?: SortOrder
    disciplineId?: SortOrder
    createdAt?: SortOrder
    _count?: TeacherDisciplineCountOrderByAggregateInput
    _max?: TeacherDisciplineMaxOrderByAggregateInput
    _min?: TeacherDisciplineMinOrderByAggregateInput
  }

  export type TeacherDisciplineScalarWhereWithAggregatesInput = {
    AND?: TeacherDisciplineScalarWhereWithAggregatesInput | TeacherDisciplineScalarWhereWithAggregatesInput[]
    OR?: TeacherDisciplineScalarWhereWithAggregatesInput[]
    NOT?: TeacherDisciplineScalarWhereWithAggregatesInput | TeacherDisciplineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeacherDiscipline"> | string
    teacherId?: StringWithAggregatesFilter<"TeacherDiscipline"> | string
    disciplineId?: StringWithAggregatesFilter<"TeacherDiscipline"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TeacherDiscipline"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    title?: StringFilter<"Question"> | string
    content?: StringFilter<"Question"> | string
    state?: EnumQuestionStateFilter<"Question"> | $Enums.QuestionState
    gradeYear?: IntFilter<"Question"> | number
    authorId?: StringFilter<"Question"> | string
    disciplineId?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    discipline?: XOR<DisciplineScalarRelationFilter, DisciplineWhereInput>
    answers?: AnswerListRelationFilter
    attachments?: QuestionAttachmentListRelationFilter
    stateChanges?: QuestionStateChangeListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    state?: SortOrder
    gradeYear?: SortOrder
    authorId?: SortOrder
    disciplineId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
    discipline?: DisciplineOrderByWithRelationInput
    answers?: AnswerOrderByRelationAggregateInput
    attachments?: QuestionAttachmentOrderByRelationAggregateInput
    stateChanges?: QuestionStateChangeOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    title?: StringFilter<"Question"> | string
    content?: StringFilter<"Question"> | string
    state?: EnumQuestionStateFilter<"Question"> | $Enums.QuestionState
    gradeYear?: IntFilter<"Question"> | number
    authorId?: StringFilter<"Question"> | string
    disciplineId?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    discipline?: XOR<DisciplineScalarRelationFilter, DisciplineWhereInput>
    answers?: AnswerListRelationFilter
    attachments?: QuestionAttachmentListRelationFilter
    stateChanges?: QuestionStateChangeListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    state?: SortOrder
    gradeYear?: SortOrder
    authorId?: SortOrder
    disciplineId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    title?: StringWithAggregatesFilter<"Question"> | string
    content?: StringWithAggregatesFilter<"Question"> | string
    state?: EnumQuestionStateWithAggregatesFilter<"Question"> | $Enums.QuestionState
    gradeYear?: IntWithAggregatesFilter<"Question"> | number
    authorId?: StringWithAggregatesFilter<"Question"> | string
    disciplineId?: StringWithAggregatesFilter<"Question"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type QuestionStateChangeWhereInput = {
    AND?: QuestionStateChangeWhereInput | QuestionStateChangeWhereInput[]
    OR?: QuestionStateChangeWhereInput[]
    NOT?: QuestionStateChangeWhereInput | QuestionStateChangeWhereInput[]
    id?: StringFilter<"QuestionStateChange"> | string
    questionId?: StringFilter<"QuestionStateChange"> | string
    changedById?: StringFilter<"QuestionStateChange"> | string
    fromState?: EnumQuestionStateFilter<"QuestionStateChange"> | $Enums.QuestionState
    toState?: EnumQuestionStateFilter<"QuestionStateChange"> | $Enums.QuestionState
    summary?: StringNullableFilter<"QuestionStateChange"> | string | null
    createdAt?: DateTimeFilter<"QuestionStateChange"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    changedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type QuestionStateChangeOrderByWithRelationInput = {
    id?: SortOrder
    questionId?: SortOrder
    changedById?: SortOrder
    fromState?: SortOrder
    toState?: SortOrder
    summary?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    question?: QuestionOrderByWithRelationInput
    changedBy?: UserOrderByWithRelationInput
  }

  export type QuestionStateChangeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionStateChangeWhereInput | QuestionStateChangeWhereInput[]
    OR?: QuestionStateChangeWhereInput[]
    NOT?: QuestionStateChangeWhereInput | QuestionStateChangeWhereInput[]
    questionId?: StringFilter<"QuestionStateChange"> | string
    changedById?: StringFilter<"QuestionStateChange"> | string
    fromState?: EnumQuestionStateFilter<"QuestionStateChange"> | $Enums.QuestionState
    toState?: EnumQuestionStateFilter<"QuestionStateChange"> | $Enums.QuestionState
    summary?: StringNullableFilter<"QuestionStateChange"> | string | null
    createdAt?: DateTimeFilter<"QuestionStateChange"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    changedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type QuestionStateChangeOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    changedById?: SortOrder
    fromState?: SortOrder
    toState?: SortOrder
    summary?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: QuestionStateChangeCountOrderByAggregateInput
    _max?: QuestionStateChangeMaxOrderByAggregateInput
    _min?: QuestionStateChangeMinOrderByAggregateInput
  }

  export type QuestionStateChangeScalarWhereWithAggregatesInput = {
    AND?: QuestionStateChangeScalarWhereWithAggregatesInput | QuestionStateChangeScalarWhereWithAggregatesInput[]
    OR?: QuestionStateChangeScalarWhereWithAggregatesInput[]
    NOT?: QuestionStateChangeScalarWhereWithAggregatesInput | QuestionStateChangeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuestionStateChange"> | string
    questionId?: StringWithAggregatesFilter<"QuestionStateChange"> | string
    changedById?: StringWithAggregatesFilter<"QuestionStateChange"> | string
    fromState?: EnumQuestionStateWithAggregatesFilter<"QuestionStateChange"> | $Enums.QuestionState
    toState?: EnumQuestionStateWithAggregatesFilter<"QuestionStateChange"> | $Enums.QuestionState
    summary?: StringNullableWithAggregatesFilter<"QuestionStateChange"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"QuestionStateChange"> | Date | string
  }

  export type AnswerWhereInput = {
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    id?: StringFilter<"Answer"> | string
    content?: StringFilter<"Answer"> | string
    questionId?: StringFilter<"Answer"> | string
    authorId?: StringFilter<"Answer"> | string
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    attachments?: AnswerAttachmentListRelationFilter
  }

  export type AnswerOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    questionId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    question?: QuestionOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
    attachments?: AnswerAttachmentOrderByRelationAggregateInput
  }

  export type AnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    content?: StringFilter<"Answer"> | string
    questionId?: StringFilter<"Answer"> | string
    authorId?: StringFilter<"Answer"> | string
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    attachments?: AnswerAttachmentListRelationFilter
  }, "id">

  export type AnswerOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    questionId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnswerCountOrderByAggregateInput
    _max?: AnswerMaxOrderByAggregateInput
    _min?: AnswerMinOrderByAggregateInput
  }

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    OR?: AnswerScalarWhereWithAggregatesInput[]
    NOT?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Answer"> | string
    content?: StringWithAggregatesFilter<"Answer"> | string
    questionId?: StringWithAggregatesFilter<"Answer"> | string
    authorId?: StringWithAggregatesFilter<"Answer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
  }

  export type QuestionAttachmentWhereInput = {
    AND?: QuestionAttachmentWhereInput | QuestionAttachmentWhereInput[]
    OR?: QuestionAttachmentWhereInput[]
    NOT?: QuestionAttachmentWhereInput | QuestionAttachmentWhereInput[]
    id?: StringFilter<"QuestionAttachment"> | string
    questionId?: StringFilter<"QuestionAttachment"> | string
    fileName?: StringFilter<"QuestionAttachment"> | string
    fileUrl?: StringFilter<"QuestionAttachment"> | string
    fileType?: StringFilter<"QuestionAttachment"> | string
    fileSize?: IntFilter<"QuestionAttachment"> | number
    createdAt?: DateTimeFilter<"QuestionAttachment"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type QuestionAttachmentOrderByWithRelationInput = {
    id?: SortOrder
    questionId?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
    question?: QuestionOrderByWithRelationInput
  }

  export type QuestionAttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionAttachmentWhereInput | QuestionAttachmentWhereInput[]
    OR?: QuestionAttachmentWhereInput[]
    NOT?: QuestionAttachmentWhereInput | QuestionAttachmentWhereInput[]
    questionId?: StringFilter<"QuestionAttachment"> | string
    fileName?: StringFilter<"QuestionAttachment"> | string
    fileUrl?: StringFilter<"QuestionAttachment"> | string
    fileType?: StringFilter<"QuestionAttachment"> | string
    fileSize?: IntFilter<"QuestionAttachment"> | number
    createdAt?: DateTimeFilter<"QuestionAttachment"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id">

  export type QuestionAttachmentOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
    _count?: QuestionAttachmentCountOrderByAggregateInput
    _avg?: QuestionAttachmentAvgOrderByAggregateInput
    _max?: QuestionAttachmentMaxOrderByAggregateInput
    _min?: QuestionAttachmentMinOrderByAggregateInput
    _sum?: QuestionAttachmentSumOrderByAggregateInput
  }

  export type QuestionAttachmentScalarWhereWithAggregatesInput = {
    AND?: QuestionAttachmentScalarWhereWithAggregatesInput | QuestionAttachmentScalarWhereWithAggregatesInput[]
    OR?: QuestionAttachmentScalarWhereWithAggregatesInput[]
    NOT?: QuestionAttachmentScalarWhereWithAggregatesInput | QuestionAttachmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuestionAttachment"> | string
    questionId?: StringWithAggregatesFilter<"QuestionAttachment"> | string
    fileName?: StringWithAggregatesFilter<"QuestionAttachment"> | string
    fileUrl?: StringWithAggregatesFilter<"QuestionAttachment"> | string
    fileType?: StringWithAggregatesFilter<"QuestionAttachment"> | string
    fileSize?: IntWithAggregatesFilter<"QuestionAttachment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"QuestionAttachment"> | Date | string
  }

  export type AnswerAttachmentWhereInput = {
    AND?: AnswerAttachmentWhereInput | AnswerAttachmentWhereInput[]
    OR?: AnswerAttachmentWhereInput[]
    NOT?: AnswerAttachmentWhereInput | AnswerAttachmentWhereInput[]
    id?: StringFilter<"AnswerAttachment"> | string
    answerId?: StringFilter<"AnswerAttachment"> | string
    fileName?: StringFilter<"AnswerAttachment"> | string
    fileUrl?: StringFilter<"AnswerAttachment"> | string
    fileType?: StringFilter<"AnswerAttachment"> | string
    fileSize?: IntFilter<"AnswerAttachment"> | number
    createdAt?: DateTimeFilter<"AnswerAttachment"> | Date | string
    answer?: XOR<AnswerScalarRelationFilter, AnswerWhereInput>
  }

  export type AnswerAttachmentOrderByWithRelationInput = {
    id?: SortOrder
    answerId?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
    answer?: AnswerOrderByWithRelationInput
  }

  export type AnswerAttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnswerAttachmentWhereInput | AnswerAttachmentWhereInput[]
    OR?: AnswerAttachmentWhereInput[]
    NOT?: AnswerAttachmentWhereInput | AnswerAttachmentWhereInput[]
    answerId?: StringFilter<"AnswerAttachment"> | string
    fileName?: StringFilter<"AnswerAttachment"> | string
    fileUrl?: StringFilter<"AnswerAttachment"> | string
    fileType?: StringFilter<"AnswerAttachment"> | string
    fileSize?: IntFilter<"AnswerAttachment"> | number
    createdAt?: DateTimeFilter<"AnswerAttachment"> | Date | string
    answer?: XOR<AnswerScalarRelationFilter, AnswerWhereInput>
  }, "id">

  export type AnswerAttachmentOrderByWithAggregationInput = {
    id?: SortOrder
    answerId?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
    _count?: AnswerAttachmentCountOrderByAggregateInput
    _avg?: AnswerAttachmentAvgOrderByAggregateInput
    _max?: AnswerAttachmentMaxOrderByAggregateInput
    _min?: AnswerAttachmentMinOrderByAggregateInput
    _sum?: AnswerAttachmentSumOrderByAggregateInput
  }

  export type AnswerAttachmentScalarWhereWithAggregatesInput = {
    AND?: AnswerAttachmentScalarWhereWithAggregatesInput | AnswerAttachmentScalarWhereWithAggregatesInput[]
    OR?: AnswerAttachmentScalarWhereWithAggregatesInput[]
    NOT?: AnswerAttachmentScalarWhereWithAggregatesInput | AnswerAttachmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnswerAttachment"> | string
    answerId?: StringWithAggregatesFilter<"AnswerAttachment"> | string
    fileName?: StringWithAggregatesFilter<"AnswerAttachment"> | string
    fileUrl?: StringWithAggregatesFilter<"AnswerAttachment"> | string
    fileType?: StringWithAggregatesFilter<"AnswerAttachment"> | string
    fileSize?: IntWithAggregatesFilter<"AnswerAttachment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AnswerAttachment"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutAuthorInput
    answers?: AnswerCreateNestedManyWithoutAuthorInput
    disciplines?: TeacherDisciplineCreateNestedManyWithoutTeacherInput
    questionStateChanges?: QuestionStateChangeCreateNestedManyWithoutChangedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutAuthorInput
    answers?: AnswerUncheckedCreateNestedManyWithoutAuthorInput
    disciplines?: TeacherDisciplineUncheckedCreateNestedManyWithoutTeacherInput
    questionStateChanges?: QuestionStateChangeUncheckedCreateNestedManyWithoutChangedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutAuthorNestedInput
    answers?: AnswerUpdateManyWithoutAuthorNestedInput
    disciplines?: TeacherDisciplineUpdateManyWithoutTeacherNestedInput
    questionStateChanges?: QuestionStateChangeUpdateManyWithoutChangedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutAuthorNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutAuthorNestedInput
    disciplines?: TeacherDisciplineUncheckedUpdateManyWithoutTeacherNestedInput
    questionStateChanges?: QuestionStateChangeUncheckedUpdateManyWithoutChangedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplineCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutDisciplineInput
    teachers?: TeacherDisciplineCreateNestedManyWithoutDisciplineInput
  }

  export type DisciplineUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutDisciplineInput
    teachers?: TeacherDisciplineUncheckedCreateNestedManyWithoutDisciplineInput
  }

  export type DisciplineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutDisciplineNestedInput
    teachers?: TeacherDisciplineUpdateManyWithoutDisciplineNestedInput
  }

  export type DisciplineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutDisciplineNestedInput
    teachers?: TeacherDisciplineUncheckedUpdateManyWithoutDisciplineNestedInput
  }

  export type DisciplineCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type DisciplineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherDisciplineCreateInput = {
    id?: string
    createdAt?: Date | string
    teacher: UserCreateNestedOneWithoutDisciplinesInput
    discipline: DisciplineCreateNestedOneWithoutTeachersInput
  }

  export type TeacherDisciplineUncheckedCreateInput = {
    id?: string
    teacherId: string
    disciplineId: string
    createdAt?: Date | string
  }

  export type TeacherDisciplineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutDisciplinesNestedInput
    discipline?: DisciplineUpdateOneRequiredWithoutTeachersNestedInput
  }

  export type TeacherDisciplineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    disciplineId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherDisciplineCreateManyInput = {
    id?: string
    teacherId: string
    disciplineId: string
    createdAt?: Date | string
  }

  export type TeacherDisciplineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherDisciplineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    disciplineId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    id?: string
    title: string
    content: string
    state?: $Enums.QuestionState
    gradeYear: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutQuestionsInput
    discipline: DisciplineCreateNestedOneWithoutQuestionsInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    attachments?: QuestionAttachmentCreateNestedManyWithoutQuestionInput
    stateChanges?: QuestionStateChangeCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    state?: $Enums.QuestionState
    gradeYear: number
    authorId: string
    disciplineId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    attachments?: QuestionAttachmentUncheckedCreateNestedManyWithoutQuestionInput
    stateChanges?: QuestionStateChangeUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    state?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    gradeYear?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutQuestionsNestedInput
    discipline?: DisciplineUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    attachments?: QuestionAttachmentUpdateManyWithoutQuestionNestedInput
    stateChanges?: QuestionStateChangeUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    state?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    gradeYear?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    disciplineId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    attachments?: QuestionAttachmentUncheckedUpdateManyWithoutQuestionNestedInput
    stateChanges?: QuestionStateChangeUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    title: string
    content: string
    state?: $Enums.QuestionState
    gradeYear: number
    authorId: string
    disciplineId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    state?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    gradeYear?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    state?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    gradeYear?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    disciplineId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionStateChangeCreateInput = {
    id?: string
    fromState: $Enums.QuestionState
    toState: $Enums.QuestionState
    summary?: string | null
    createdAt?: Date | string
    question: QuestionCreateNestedOneWithoutStateChangesInput
    changedBy: UserCreateNestedOneWithoutQuestionStateChangesInput
  }

  export type QuestionStateChangeUncheckedCreateInput = {
    id?: string
    questionId: string
    changedById: string
    fromState: $Enums.QuestionState
    toState: $Enums.QuestionState
    summary?: string | null
    createdAt?: Date | string
  }

  export type QuestionStateChangeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromState?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    toState?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutStateChangesNestedInput
    changedBy?: UserUpdateOneRequiredWithoutQuestionStateChangesNestedInput
  }

  export type QuestionStateChangeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    changedById?: StringFieldUpdateOperationsInput | string
    fromState?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    toState?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionStateChangeCreateManyInput = {
    id?: string
    questionId: string
    changedById: string
    fromState: $Enums.QuestionState
    toState: $Enums.QuestionState
    summary?: string | null
    createdAt?: Date | string
  }

  export type QuestionStateChangeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromState?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    toState?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionStateChangeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    changedById?: StringFieldUpdateOperationsInput | string
    fromState?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    toState?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuestionCreateNestedOneWithoutAnswersInput
    author: UserCreateNestedOneWithoutAnswersInput
    attachments?: AnswerAttachmentCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateInput = {
    id?: string
    content: string
    questionId: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attachments?: AnswerAttachmentUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    author?: UserUpdateOneRequiredWithoutAnswersNestedInput
    attachments?: AnswerAttachmentUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: AnswerAttachmentUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerCreateManyInput = {
    id?: string
    content: string
    questionId: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionAttachmentCreateInput = {
    id?: string
    fileName: string
    fileUrl: string
    fileType: string
    fileSize: number
    createdAt?: Date | string
    question: QuestionCreateNestedOneWithoutAttachmentsInput
  }

  export type QuestionAttachmentUncheckedCreateInput = {
    id?: string
    questionId: string
    fileName: string
    fileUrl: string
    fileType: string
    fileSize: number
    createdAt?: Date | string
  }

  export type QuestionAttachmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type QuestionAttachmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionAttachmentCreateManyInput = {
    id?: string
    questionId: string
    fileName: string
    fileUrl: string
    fileType: string
    fileSize: number
    createdAt?: Date | string
  }

  export type QuestionAttachmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionAttachmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerAttachmentCreateInput = {
    id?: string
    fileName: string
    fileUrl: string
    fileType: string
    fileSize: number
    createdAt?: Date | string
    answer: AnswerCreateNestedOneWithoutAttachmentsInput
  }

  export type AnswerAttachmentUncheckedCreateInput = {
    id?: string
    answerId: string
    fileName: string
    fileUrl: string
    fileType: string
    fileSize: number
    createdAt?: Date | string
  }

  export type AnswerAttachmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answer?: AnswerUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type AnswerAttachmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerAttachmentCreateManyInput = {
    id?: string
    answerId: string
    fileName: string
    fileUrl: string
    fileType: string
    fileSize: number
    createdAt?: Date | string
  }

  export type AnswerAttachmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerAttachmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput
    some?: AnswerWhereInput
    none?: AnswerWhereInput
  }

  export type TeacherDisciplineListRelationFilter = {
    every?: TeacherDisciplineWhereInput
    some?: TeacherDisciplineWhereInput
    none?: TeacherDisciplineWhereInput
  }

  export type QuestionStateChangeListRelationFilter = {
    every?: QuestionStateChangeWhereInput
    some?: QuestionStateChangeWhereInput
    none?: QuestionStateChangeWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeacherDisciplineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionStateChangeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DisciplineCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type DisciplineMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type DisciplineMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DisciplineScalarRelationFilter = {
    is?: DisciplineWhereInput
    isNot?: DisciplineWhereInput
  }

  export type TeacherDisciplineTeacherIdDisciplineIdCompoundUniqueInput = {
    teacherId: string
    disciplineId: string
  }

  export type TeacherDisciplineCountOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    disciplineId?: SortOrder
    createdAt?: SortOrder
  }

  export type TeacherDisciplineMaxOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    disciplineId?: SortOrder
    createdAt?: SortOrder
  }

  export type TeacherDisciplineMinOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    disciplineId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumQuestionStateFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionState | EnumQuestionStateFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionState[] | ListEnumQuestionStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionState[] | ListEnumQuestionStateFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionStateFilter<$PrismaModel> | $Enums.QuestionState
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type QuestionAttachmentListRelationFilter = {
    every?: QuestionAttachmentWhereInput
    some?: QuestionAttachmentWhereInput
    none?: QuestionAttachmentWhereInput
  }

  export type QuestionAttachmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    state?: SortOrder
    gradeYear?: SortOrder
    authorId?: SortOrder
    disciplineId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    gradeYear?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    state?: SortOrder
    gradeYear?: SortOrder
    authorId?: SortOrder
    disciplineId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    state?: SortOrder
    gradeYear?: SortOrder
    authorId?: SortOrder
    disciplineId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    gradeYear?: SortOrder
  }

  export type EnumQuestionStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionState | EnumQuestionStateFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionState[] | ListEnumQuestionStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionState[] | ListEnumQuestionStateFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionStateWithAggregatesFilter<$PrismaModel> | $Enums.QuestionState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionStateFilter<$PrismaModel>
    _max?: NestedEnumQuestionStateFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type QuestionStateChangeCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    changedById?: SortOrder
    fromState?: SortOrder
    toState?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionStateChangeMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    changedById?: SortOrder
    fromState?: SortOrder
    toState?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionStateChangeMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    changedById?: SortOrder
    fromState?: SortOrder
    toState?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type AnswerAttachmentListRelationFilter = {
    every?: AnswerAttachmentWhereInput
    some?: AnswerAttachmentWhereInput
    none?: AnswerAttachmentWhereInput
  }

  export type AnswerAttachmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnswerCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    questionId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    questionId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    questionId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionAttachmentCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionAttachmentAvgOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type QuestionAttachmentMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionAttachmentMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionAttachmentSumOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type AnswerScalarRelationFilter = {
    is?: AnswerWhereInput
    isNot?: AnswerWhereInput
  }

  export type AnswerAttachmentCountOrderByAggregateInput = {
    id?: SortOrder
    answerId?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
  }

  export type AnswerAttachmentAvgOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type AnswerAttachmentMaxOrderByAggregateInput = {
    id?: SortOrder
    answerId?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
  }

  export type AnswerAttachmentMinOrderByAggregateInput = {
    id?: SortOrder
    answerId?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
  }

  export type AnswerAttachmentSumOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type QuestionCreateNestedManyWithoutAuthorInput = {
    create?: XOR<QuestionCreateWithoutAuthorInput, QuestionUncheckedCreateWithoutAuthorInput> | QuestionCreateWithoutAuthorInput[] | QuestionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutAuthorInput | QuestionCreateOrConnectWithoutAuthorInput[]
    createMany?: QuestionCreateManyAuthorInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type AnswerCreateNestedManyWithoutAuthorInput = {
    create?: XOR<AnswerCreateWithoutAuthorInput, AnswerUncheckedCreateWithoutAuthorInput> | AnswerCreateWithoutAuthorInput[] | AnswerUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutAuthorInput | AnswerCreateOrConnectWithoutAuthorInput[]
    createMany?: AnswerCreateManyAuthorInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type TeacherDisciplineCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherDisciplineCreateWithoutTeacherInput, TeacherDisciplineUncheckedCreateWithoutTeacherInput> | TeacherDisciplineCreateWithoutTeacherInput[] | TeacherDisciplineUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherDisciplineCreateOrConnectWithoutTeacherInput | TeacherDisciplineCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherDisciplineCreateManyTeacherInputEnvelope
    connect?: TeacherDisciplineWhereUniqueInput | TeacherDisciplineWhereUniqueInput[]
  }

  export type QuestionStateChangeCreateNestedManyWithoutChangedByInput = {
    create?: XOR<QuestionStateChangeCreateWithoutChangedByInput, QuestionStateChangeUncheckedCreateWithoutChangedByInput> | QuestionStateChangeCreateWithoutChangedByInput[] | QuestionStateChangeUncheckedCreateWithoutChangedByInput[]
    connectOrCreate?: QuestionStateChangeCreateOrConnectWithoutChangedByInput | QuestionStateChangeCreateOrConnectWithoutChangedByInput[]
    createMany?: QuestionStateChangeCreateManyChangedByInputEnvelope
    connect?: QuestionStateChangeWhereUniqueInput | QuestionStateChangeWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<QuestionCreateWithoutAuthorInput, QuestionUncheckedCreateWithoutAuthorInput> | QuestionCreateWithoutAuthorInput[] | QuestionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutAuthorInput | QuestionCreateOrConnectWithoutAuthorInput[]
    createMany?: QuestionCreateManyAuthorInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<AnswerCreateWithoutAuthorInput, AnswerUncheckedCreateWithoutAuthorInput> | AnswerCreateWithoutAuthorInput[] | AnswerUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutAuthorInput | AnswerCreateOrConnectWithoutAuthorInput[]
    createMany?: AnswerCreateManyAuthorInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type TeacherDisciplineUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherDisciplineCreateWithoutTeacherInput, TeacherDisciplineUncheckedCreateWithoutTeacherInput> | TeacherDisciplineCreateWithoutTeacherInput[] | TeacherDisciplineUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherDisciplineCreateOrConnectWithoutTeacherInput | TeacherDisciplineCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherDisciplineCreateManyTeacherInputEnvelope
    connect?: TeacherDisciplineWhereUniqueInput | TeacherDisciplineWhereUniqueInput[]
  }

  export type QuestionStateChangeUncheckedCreateNestedManyWithoutChangedByInput = {
    create?: XOR<QuestionStateChangeCreateWithoutChangedByInput, QuestionStateChangeUncheckedCreateWithoutChangedByInput> | QuestionStateChangeCreateWithoutChangedByInput[] | QuestionStateChangeUncheckedCreateWithoutChangedByInput[]
    connectOrCreate?: QuestionStateChangeCreateOrConnectWithoutChangedByInput | QuestionStateChangeCreateOrConnectWithoutChangedByInput[]
    createMany?: QuestionStateChangeCreateManyChangedByInputEnvelope
    connect?: QuestionStateChangeWhereUniqueInput | QuestionStateChangeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type QuestionUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<QuestionCreateWithoutAuthorInput, QuestionUncheckedCreateWithoutAuthorInput> | QuestionCreateWithoutAuthorInput[] | QuestionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutAuthorInput | QuestionCreateOrConnectWithoutAuthorInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutAuthorInput | QuestionUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: QuestionCreateManyAuthorInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutAuthorInput | QuestionUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutAuthorInput | QuestionUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type AnswerUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<AnswerCreateWithoutAuthorInput, AnswerUncheckedCreateWithoutAuthorInput> | AnswerCreateWithoutAuthorInput[] | AnswerUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutAuthorInput | AnswerCreateOrConnectWithoutAuthorInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutAuthorInput | AnswerUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: AnswerCreateManyAuthorInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutAuthorInput | AnswerUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutAuthorInput | AnswerUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type TeacherDisciplineUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherDisciplineCreateWithoutTeacherInput, TeacherDisciplineUncheckedCreateWithoutTeacherInput> | TeacherDisciplineCreateWithoutTeacherInput[] | TeacherDisciplineUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherDisciplineCreateOrConnectWithoutTeacherInput | TeacherDisciplineCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherDisciplineUpsertWithWhereUniqueWithoutTeacherInput | TeacherDisciplineUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherDisciplineCreateManyTeacherInputEnvelope
    set?: TeacherDisciplineWhereUniqueInput | TeacherDisciplineWhereUniqueInput[]
    disconnect?: TeacherDisciplineWhereUniqueInput | TeacherDisciplineWhereUniqueInput[]
    delete?: TeacherDisciplineWhereUniqueInput | TeacherDisciplineWhereUniqueInput[]
    connect?: TeacherDisciplineWhereUniqueInput | TeacherDisciplineWhereUniqueInput[]
    update?: TeacherDisciplineUpdateWithWhereUniqueWithoutTeacherInput | TeacherDisciplineUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherDisciplineUpdateManyWithWhereWithoutTeacherInput | TeacherDisciplineUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherDisciplineScalarWhereInput | TeacherDisciplineScalarWhereInput[]
  }

  export type QuestionStateChangeUpdateManyWithoutChangedByNestedInput = {
    create?: XOR<QuestionStateChangeCreateWithoutChangedByInput, QuestionStateChangeUncheckedCreateWithoutChangedByInput> | QuestionStateChangeCreateWithoutChangedByInput[] | QuestionStateChangeUncheckedCreateWithoutChangedByInput[]
    connectOrCreate?: QuestionStateChangeCreateOrConnectWithoutChangedByInput | QuestionStateChangeCreateOrConnectWithoutChangedByInput[]
    upsert?: QuestionStateChangeUpsertWithWhereUniqueWithoutChangedByInput | QuestionStateChangeUpsertWithWhereUniqueWithoutChangedByInput[]
    createMany?: QuestionStateChangeCreateManyChangedByInputEnvelope
    set?: QuestionStateChangeWhereUniqueInput | QuestionStateChangeWhereUniqueInput[]
    disconnect?: QuestionStateChangeWhereUniqueInput | QuestionStateChangeWhereUniqueInput[]
    delete?: QuestionStateChangeWhereUniqueInput | QuestionStateChangeWhereUniqueInput[]
    connect?: QuestionStateChangeWhereUniqueInput | QuestionStateChangeWhereUniqueInput[]
    update?: QuestionStateChangeUpdateWithWhereUniqueWithoutChangedByInput | QuestionStateChangeUpdateWithWhereUniqueWithoutChangedByInput[]
    updateMany?: QuestionStateChangeUpdateManyWithWhereWithoutChangedByInput | QuestionStateChangeUpdateManyWithWhereWithoutChangedByInput[]
    deleteMany?: QuestionStateChangeScalarWhereInput | QuestionStateChangeScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<QuestionCreateWithoutAuthorInput, QuestionUncheckedCreateWithoutAuthorInput> | QuestionCreateWithoutAuthorInput[] | QuestionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutAuthorInput | QuestionCreateOrConnectWithoutAuthorInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutAuthorInput | QuestionUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: QuestionCreateManyAuthorInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutAuthorInput | QuestionUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutAuthorInput | QuestionUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<AnswerCreateWithoutAuthorInput, AnswerUncheckedCreateWithoutAuthorInput> | AnswerCreateWithoutAuthorInput[] | AnswerUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutAuthorInput | AnswerCreateOrConnectWithoutAuthorInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutAuthorInput | AnswerUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: AnswerCreateManyAuthorInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutAuthorInput | AnswerUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutAuthorInput | AnswerUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type TeacherDisciplineUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherDisciplineCreateWithoutTeacherInput, TeacherDisciplineUncheckedCreateWithoutTeacherInput> | TeacherDisciplineCreateWithoutTeacherInput[] | TeacherDisciplineUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherDisciplineCreateOrConnectWithoutTeacherInput | TeacherDisciplineCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherDisciplineUpsertWithWhereUniqueWithoutTeacherInput | TeacherDisciplineUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherDisciplineCreateManyTeacherInputEnvelope
    set?: TeacherDisciplineWhereUniqueInput | TeacherDisciplineWhereUniqueInput[]
    disconnect?: TeacherDisciplineWhereUniqueInput | TeacherDisciplineWhereUniqueInput[]
    delete?: TeacherDisciplineWhereUniqueInput | TeacherDisciplineWhereUniqueInput[]
    connect?: TeacherDisciplineWhereUniqueInput | TeacherDisciplineWhereUniqueInput[]
    update?: TeacherDisciplineUpdateWithWhereUniqueWithoutTeacherInput | TeacherDisciplineUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherDisciplineUpdateManyWithWhereWithoutTeacherInput | TeacherDisciplineUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherDisciplineScalarWhereInput | TeacherDisciplineScalarWhereInput[]
  }

  export type QuestionStateChangeUncheckedUpdateManyWithoutChangedByNestedInput = {
    create?: XOR<QuestionStateChangeCreateWithoutChangedByInput, QuestionStateChangeUncheckedCreateWithoutChangedByInput> | QuestionStateChangeCreateWithoutChangedByInput[] | QuestionStateChangeUncheckedCreateWithoutChangedByInput[]
    connectOrCreate?: QuestionStateChangeCreateOrConnectWithoutChangedByInput | QuestionStateChangeCreateOrConnectWithoutChangedByInput[]
    upsert?: QuestionStateChangeUpsertWithWhereUniqueWithoutChangedByInput | QuestionStateChangeUpsertWithWhereUniqueWithoutChangedByInput[]
    createMany?: QuestionStateChangeCreateManyChangedByInputEnvelope
    set?: QuestionStateChangeWhereUniqueInput | QuestionStateChangeWhereUniqueInput[]
    disconnect?: QuestionStateChangeWhereUniqueInput | QuestionStateChangeWhereUniqueInput[]
    delete?: QuestionStateChangeWhereUniqueInput | QuestionStateChangeWhereUniqueInput[]
    connect?: QuestionStateChangeWhereUniqueInput | QuestionStateChangeWhereUniqueInput[]
    update?: QuestionStateChangeUpdateWithWhereUniqueWithoutChangedByInput | QuestionStateChangeUpdateWithWhereUniqueWithoutChangedByInput[]
    updateMany?: QuestionStateChangeUpdateManyWithWhereWithoutChangedByInput | QuestionStateChangeUpdateManyWithWhereWithoutChangedByInput[]
    deleteMany?: QuestionStateChangeScalarWhereInput | QuestionStateChangeScalarWhereInput[]
  }

  export type QuestionCreateNestedManyWithoutDisciplineInput = {
    create?: XOR<QuestionCreateWithoutDisciplineInput, QuestionUncheckedCreateWithoutDisciplineInput> | QuestionCreateWithoutDisciplineInput[] | QuestionUncheckedCreateWithoutDisciplineInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutDisciplineInput | QuestionCreateOrConnectWithoutDisciplineInput[]
    createMany?: QuestionCreateManyDisciplineInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type TeacherDisciplineCreateNestedManyWithoutDisciplineInput = {
    create?: XOR<TeacherDisciplineCreateWithoutDisciplineInput, TeacherDisciplineUncheckedCreateWithoutDisciplineInput> | TeacherDisciplineCreateWithoutDisciplineInput[] | TeacherDisciplineUncheckedCreateWithoutDisciplineInput[]
    connectOrCreate?: TeacherDisciplineCreateOrConnectWithoutDisciplineInput | TeacherDisciplineCreateOrConnectWithoutDisciplineInput[]
    createMany?: TeacherDisciplineCreateManyDisciplineInputEnvelope
    connect?: TeacherDisciplineWhereUniqueInput | TeacherDisciplineWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutDisciplineInput = {
    create?: XOR<QuestionCreateWithoutDisciplineInput, QuestionUncheckedCreateWithoutDisciplineInput> | QuestionCreateWithoutDisciplineInput[] | QuestionUncheckedCreateWithoutDisciplineInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutDisciplineInput | QuestionCreateOrConnectWithoutDisciplineInput[]
    createMany?: QuestionCreateManyDisciplineInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type TeacherDisciplineUncheckedCreateNestedManyWithoutDisciplineInput = {
    create?: XOR<TeacherDisciplineCreateWithoutDisciplineInput, TeacherDisciplineUncheckedCreateWithoutDisciplineInput> | TeacherDisciplineCreateWithoutDisciplineInput[] | TeacherDisciplineUncheckedCreateWithoutDisciplineInput[]
    connectOrCreate?: TeacherDisciplineCreateOrConnectWithoutDisciplineInput | TeacherDisciplineCreateOrConnectWithoutDisciplineInput[]
    createMany?: TeacherDisciplineCreateManyDisciplineInputEnvelope
    connect?: TeacherDisciplineWhereUniqueInput | TeacherDisciplineWhereUniqueInput[]
  }

  export type QuestionUpdateManyWithoutDisciplineNestedInput = {
    create?: XOR<QuestionCreateWithoutDisciplineInput, QuestionUncheckedCreateWithoutDisciplineInput> | QuestionCreateWithoutDisciplineInput[] | QuestionUncheckedCreateWithoutDisciplineInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutDisciplineInput | QuestionCreateOrConnectWithoutDisciplineInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutDisciplineInput | QuestionUpsertWithWhereUniqueWithoutDisciplineInput[]
    createMany?: QuestionCreateManyDisciplineInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutDisciplineInput | QuestionUpdateWithWhereUniqueWithoutDisciplineInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutDisciplineInput | QuestionUpdateManyWithWhereWithoutDisciplineInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type TeacherDisciplineUpdateManyWithoutDisciplineNestedInput = {
    create?: XOR<TeacherDisciplineCreateWithoutDisciplineInput, TeacherDisciplineUncheckedCreateWithoutDisciplineInput> | TeacherDisciplineCreateWithoutDisciplineInput[] | TeacherDisciplineUncheckedCreateWithoutDisciplineInput[]
    connectOrCreate?: TeacherDisciplineCreateOrConnectWithoutDisciplineInput | TeacherDisciplineCreateOrConnectWithoutDisciplineInput[]
    upsert?: TeacherDisciplineUpsertWithWhereUniqueWithoutDisciplineInput | TeacherDisciplineUpsertWithWhereUniqueWithoutDisciplineInput[]
    createMany?: TeacherDisciplineCreateManyDisciplineInputEnvelope
    set?: TeacherDisciplineWhereUniqueInput | TeacherDisciplineWhereUniqueInput[]
    disconnect?: TeacherDisciplineWhereUniqueInput | TeacherDisciplineWhereUniqueInput[]
    delete?: TeacherDisciplineWhereUniqueInput | TeacherDisciplineWhereUniqueInput[]
    connect?: TeacherDisciplineWhereUniqueInput | TeacherDisciplineWhereUniqueInput[]
    update?: TeacherDisciplineUpdateWithWhereUniqueWithoutDisciplineInput | TeacherDisciplineUpdateWithWhereUniqueWithoutDisciplineInput[]
    updateMany?: TeacherDisciplineUpdateManyWithWhereWithoutDisciplineInput | TeacherDisciplineUpdateManyWithWhereWithoutDisciplineInput[]
    deleteMany?: TeacherDisciplineScalarWhereInput | TeacherDisciplineScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutDisciplineNestedInput = {
    create?: XOR<QuestionCreateWithoutDisciplineInput, QuestionUncheckedCreateWithoutDisciplineInput> | QuestionCreateWithoutDisciplineInput[] | QuestionUncheckedCreateWithoutDisciplineInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutDisciplineInput | QuestionCreateOrConnectWithoutDisciplineInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutDisciplineInput | QuestionUpsertWithWhereUniqueWithoutDisciplineInput[]
    createMany?: QuestionCreateManyDisciplineInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutDisciplineInput | QuestionUpdateWithWhereUniqueWithoutDisciplineInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutDisciplineInput | QuestionUpdateManyWithWhereWithoutDisciplineInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type TeacherDisciplineUncheckedUpdateManyWithoutDisciplineNestedInput = {
    create?: XOR<TeacherDisciplineCreateWithoutDisciplineInput, TeacherDisciplineUncheckedCreateWithoutDisciplineInput> | TeacherDisciplineCreateWithoutDisciplineInput[] | TeacherDisciplineUncheckedCreateWithoutDisciplineInput[]
    connectOrCreate?: TeacherDisciplineCreateOrConnectWithoutDisciplineInput | TeacherDisciplineCreateOrConnectWithoutDisciplineInput[]
    upsert?: TeacherDisciplineUpsertWithWhereUniqueWithoutDisciplineInput | TeacherDisciplineUpsertWithWhereUniqueWithoutDisciplineInput[]
    createMany?: TeacherDisciplineCreateManyDisciplineInputEnvelope
    set?: TeacherDisciplineWhereUniqueInput | TeacherDisciplineWhereUniqueInput[]
    disconnect?: TeacherDisciplineWhereUniqueInput | TeacherDisciplineWhereUniqueInput[]
    delete?: TeacherDisciplineWhereUniqueInput | TeacherDisciplineWhereUniqueInput[]
    connect?: TeacherDisciplineWhereUniqueInput | TeacherDisciplineWhereUniqueInput[]
    update?: TeacherDisciplineUpdateWithWhereUniqueWithoutDisciplineInput | TeacherDisciplineUpdateWithWhereUniqueWithoutDisciplineInput[]
    updateMany?: TeacherDisciplineUpdateManyWithWhereWithoutDisciplineInput | TeacherDisciplineUpdateManyWithWhereWithoutDisciplineInput[]
    deleteMany?: TeacherDisciplineScalarWhereInput | TeacherDisciplineScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDisciplinesInput = {
    create?: XOR<UserCreateWithoutDisciplinesInput, UserUncheckedCreateWithoutDisciplinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDisciplinesInput
    connect?: UserWhereUniqueInput
  }

  export type DisciplineCreateNestedOneWithoutTeachersInput = {
    create?: XOR<DisciplineCreateWithoutTeachersInput, DisciplineUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: DisciplineCreateOrConnectWithoutTeachersInput
    connect?: DisciplineWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDisciplinesNestedInput = {
    create?: XOR<UserCreateWithoutDisciplinesInput, UserUncheckedCreateWithoutDisciplinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDisciplinesInput
    upsert?: UserUpsertWithoutDisciplinesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDisciplinesInput, UserUpdateWithoutDisciplinesInput>, UserUncheckedUpdateWithoutDisciplinesInput>
  }

  export type DisciplineUpdateOneRequiredWithoutTeachersNestedInput = {
    create?: XOR<DisciplineCreateWithoutTeachersInput, DisciplineUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: DisciplineCreateOrConnectWithoutTeachersInput
    upsert?: DisciplineUpsertWithoutTeachersInput
    connect?: DisciplineWhereUniqueInput
    update?: XOR<XOR<DisciplineUpdateToOneWithWhereWithoutTeachersInput, DisciplineUpdateWithoutTeachersInput>, DisciplineUncheckedUpdateWithoutTeachersInput>
  }

  export type UserCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<UserCreateWithoutQuestionsInput, UserUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionsInput
    connect?: UserWhereUniqueInput
  }

  export type DisciplineCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<DisciplineCreateWithoutQuestionsInput, DisciplineUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: DisciplineCreateOrConnectWithoutQuestionsInput
    connect?: DisciplineWhereUniqueInput
  }

  export type AnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type QuestionAttachmentCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionAttachmentCreateWithoutQuestionInput, QuestionAttachmentUncheckedCreateWithoutQuestionInput> | QuestionAttachmentCreateWithoutQuestionInput[] | QuestionAttachmentUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionAttachmentCreateOrConnectWithoutQuestionInput | QuestionAttachmentCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionAttachmentCreateManyQuestionInputEnvelope
    connect?: QuestionAttachmentWhereUniqueInput | QuestionAttachmentWhereUniqueInput[]
  }

  export type QuestionStateChangeCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionStateChangeCreateWithoutQuestionInput, QuestionStateChangeUncheckedCreateWithoutQuestionInput> | QuestionStateChangeCreateWithoutQuestionInput[] | QuestionStateChangeUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionStateChangeCreateOrConnectWithoutQuestionInput | QuestionStateChangeCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionStateChangeCreateManyQuestionInputEnvelope
    connect?: QuestionStateChangeWhereUniqueInput | QuestionStateChangeWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type QuestionAttachmentUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionAttachmentCreateWithoutQuestionInput, QuestionAttachmentUncheckedCreateWithoutQuestionInput> | QuestionAttachmentCreateWithoutQuestionInput[] | QuestionAttachmentUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionAttachmentCreateOrConnectWithoutQuestionInput | QuestionAttachmentCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionAttachmentCreateManyQuestionInputEnvelope
    connect?: QuestionAttachmentWhereUniqueInput | QuestionAttachmentWhereUniqueInput[]
  }

  export type QuestionStateChangeUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionStateChangeCreateWithoutQuestionInput, QuestionStateChangeUncheckedCreateWithoutQuestionInput> | QuestionStateChangeCreateWithoutQuestionInput[] | QuestionStateChangeUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionStateChangeCreateOrConnectWithoutQuestionInput | QuestionStateChangeCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionStateChangeCreateManyQuestionInputEnvelope
    connect?: QuestionStateChangeWhereUniqueInput | QuestionStateChangeWhereUniqueInput[]
  }

  export type EnumQuestionStateFieldUpdateOperationsInput = {
    set?: $Enums.QuestionState
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<UserCreateWithoutQuestionsInput, UserUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionsInput
    upsert?: UserUpsertWithoutQuestionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuestionsInput, UserUpdateWithoutQuestionsInput>, UserUncheckedUpdateWithoutQuestionsInput>
  }

  export type DisciplineUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<DisciplineCreateWithoutQuestionsInput, DisciplineUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: DisciplineCreateOrConnectWithoutQuestionsInput
    upsert?: DisciplineUpsertWithoutQuestionsInput
    connect?: DisciplineWhereUniqueInput
    update?: XOR<XOR<DisciplineUpdateToOneWithWhereWithoutQuestionsInput, DisciplineUpdateWithoutQuestionsInput>, DisciplineUncheckedUpdateWithoutQuestionsInput>
  }

  export type AnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type QuestionAttachmentUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionAttachmentCreateWithoutQuestionInput, QuestionAttachmentUncheckedCreateWithoutQuestionInput> | QuestionAttachmentCreateWithoutQuestionInput[] | QuestionAttachmentUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionAttachmentCreateOrConnectWithoutQuestionInput | QuestionAttachmentCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionAttachmentUpsertWithWhereUniqueWithoutQuestionInput | QuestionAttachmentUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionAttachmentCreateManyQuestionInputEnvelope
    set?: QuestionAttachmentWhereUniqueInput | QuestionAttachmentWhereUniqueInput[]
    disconnect?: QuestionAttachmentWhereUniqueInput | QuestionAttachmentWhereUniqueInput[]
    delete?: QuestionAttachmentWhereUniqueInput | QuestionAttachmentWhereUniqueInput[]
    connect?: QuestionAttachmentWhereUniqueInput | QuestionAttachmentWhereUniqueInput[]
    update?: QuestionAttachmentUpdateWithWhereUniqueWithoutQuestionInput | QuestionAttachmentUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionAttachmentUpdateManyWithWhereWithoutQuestionInput | QuestionAttachmentUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionAttachmentScalarWhereInput | QuestionAttachmentScalarWhereInput[]
  }

  export type QuestionStateChangeUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionStateChangeCreateWithoutQuestionInput, QuestionStateChangeUncheckedCreateWithoutQuestionInput> | QuestionStateChangeCreateWithoutQuestionInput[] | QuestionStateChangeUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionStateChangeCreateOrConnectWithoutQuestionInput | QuestionStateChangeCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionStateChangeUpsertWithWhereUniqueWithoutQuestionInput | QuestionStateChangeUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionStateChangeCreateManyQuestionInputEnvelope
    set?: QuestionStateChangeWhereUniqueInput | QuestionStateChangeWhereUniqueInput[]
    disconnect?: QuestionStateChangeWhereUniqueInput | QuestionStateChangeWhereUniqueInput[]
    delete?: QuestionStateChangeWhereUniqueInput | QuestionStateChangeWhereUniqueInput[]
    connect?: QuestionStateChangeWhereUniqueInput | QuestionStateChangeWhereUniqueInput[]
    update?: QuestionStateChangeUpdateWithWhereUniqueWithoutQuestionInput | QuestionStateChangeUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionStateChangeUpdateManyWithWhereWithoutQuestionInput | QuestionStateChangeUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionStateChangeScalarWhereInput | QuestionStateChangeScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type QuestionAttachmentUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionAttachmentCreateWithoutQuestionInput, QuestionAttachmentUncheckedCreateWithoutQuestionInput> | QuestionAttachmentCreateWithoutQuestionInput[] | QuestionAttachmentUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionAttachmentCreateOrConnectWithoutQuestionInput | QuestionAttachmentCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionAttachmentUpsertWithWhereUniqueWithoutQuestionInput | QuestionAttachmentUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionAttachmentCreateManyQuestionInputEnvelope
    set?: QuestionAttachmentWhereUniqueInput | QuestionAttachmentWhereUniqueInput[]
    disconnect?: QuestionAttachmentWhereUniqueInput | QuestionAttachmentWhereUniqueInput[]
    delete?: QuestionAttachmentWhereUniqueInput | QuestionAttachmentWhereUniqueInput[]
    connect?: QuestionAttachmentWhereUniqueInput | QuestionAttachmentWhereUniqueInput[]
    update?: QuestionAttachmentUpdateWithWhereUniqueWithoutQuestionInput | QuestionAttachmentUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionAttachmentUpdateManyWithWhereWithoutQuestionInput | QuestionAttachmentUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionAttachmentScalarWhereInput | QuestionAttachmentScalarWhereInput[]
  }

  export type QuestionStateChangeUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionStateChangeCreateWithoutQuestionInput, QuestionStateChangeUncheckedCreateWithoutQuestionInput> | QuestionStateChangeCreateWithoutQuestionInput[] | QuestionStateChangeUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionStateChangeCreateOrConnectWithoutQuestionInput | QuestionStateChangeCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionStateChangeUpsertWithWhereUniqueWithoutQuestionInput | QuestionStateChangeUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionStateChangeCreateManyQuestionInputEnvelope
    set?: QuestionStateChangeWhereUniqueInput | QuestionStateChangeWhereUniqueInput[]
    disconnect?: QuestionStateChangeWhereUniqueInput | QuestionStateChangeWhereUniqueInput[]
    delete?: QuestionStateChangeWhereUniqueInput | QuestionStateChangeWhereUniqueInput[]
    connect?: QuestionStateChangeWhereUniqueInput | QuestionStateChangeWhereUniqueInput[]
    update?: QuestionStateChangeUpdateWithWhereUniqueWithoutQuestionInput | QuestionStateChangeUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionStateChangeUpdateManyWithWhereWithoutQuestionInput | QuestionStateChangeUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionStateChangeScalarWhereInput | QuestionStateChangeScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutStateChangesInput = {
    create?: XOR<QuestionCreateWithoutStateChangesInput, QuestionUncheckedCreateWithoutStateChangesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutStateChangesInput
    connect?: QuestionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutQuestionStateChangesInput = {
    create?: XOR<UserCreateWithoutQuestionStateChangesInput, UserUncheckedCreateWithoutQuestionStateChangesInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionStateChangesInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type QuestionUpdateOneRequiredWithoutStateChangesNestedInput = {
    create?: XOR<QuestionCreateWithoutStateChangesInput, QuestionUncheckedCreateWithoutStateChangesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutStateChangesInput
    upsert?: QuestionUpsertWithoutStateChangesInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutStateChangesInput, QuestionUpdateWithoutStateChangesInput>, QuestionUncheckedUpdateWithoutStateChangesInput>
  }

  export type UserUpdateOneRequiredWithoutQuestionStateChangesNestedInput = {
    create?: XOR<UserCreateWithoutQuestionStateChangesInput, UserUncheckedCreateWithoutQuestionStateChangesInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionStateChangesInput
    upsert?: UserUpsertWithoutQuestionStateChangesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuestionStateChangesInput, UserUpdateWithoutQuestionStateChangesInput>, UserUncheckedUpdateWithoutQuestionStateChangesInput>
  }

  export type QuestionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAnswersInput = {
    create?: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnswersInput
    connect?: UserWhereUniqueInput
  }

  export type AnswerAttachmentCreateNestedManyWithoutAnswerInput = {
    create?: XOR<AnswerAttachmentCreateWithoutAnswerInput, AnswerAttachmentUncheckedCreateWithoutAnswerInput> | AnswerAttachmentCreateWithoutAnswerInput[] | AnswerAttachmentUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: AnswerAttachmentCreateOrConnectWithoutAnswerInput | AnswerAttachmentCreateOrConnectWithoutAnswerInput[]
    createMany?: AnswerAttachmentCreateManyAnswerInputEnvelope
    connect?: AnswerAttachmentWhereUniqueInput | AnswerAttachmentWhereUniqueInput[]
  }

  export type AnswerAttachmentUncheckedCreateNestedManyWithoutAnswerInput = {
    create?: XOR<AnswerAttachmentCreateWithoutAnswerInput, AnswerAttachmentUncheckedCreateWithoutAnswerInput> | AnswerAttachmentCreateWithoutAnswerInput[] | AnswerAttachmentUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: AnswerAttachmentCreateOrConnectWithoutAnswerInput | AnswerAttachmentCreateOrConnectWithoutAnswerInput[]
    createMany?: AnswerAttachmentCreateManyAnswerInputEnvelope
    connect?: AnswerAttachmentWhereUniqueInput | AnswerAttachmentWhereUniqueInput[]
  }

  export type QuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    upsert?: QuestionUpsertWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAnswersInput, QuestionUpdateWithoutAnswersInput>, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type UserUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnswersInput
    upsert?: UserUpsertWithoutAnswersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnswersInput, UserUpdateWithoutAnswersInput>, UserUncheckedUpdateWithoutAnswersInput>
  }

  export type AnswerAttachmentUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<AnswerAttachmentCreateWithoutAnswerInput, AnswerAttachmentUncheckedCreateWithoutAnswerInput> | AnswerAttachmentCreateWithoutAnswerInput[] | AnswerAttachmentUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: AnswerAttachmentCreateOrConnectWithoutAnswerInput | AnswerAttachmentCreateOrConnectWithoutAnswerInput[]
    upsert?: AnswerAttachmentUpsertWithWhereUniqueWithoutAnswerInput | AnswerAttachmentUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: AnswerAttachmentCreateManyAnswerInputEnvelope
    set?: AnswerAttachmentWhereUniqueInput | AnswerAttachmentWhereUniqueInput[]
    disconnect?: AnswerAttachmentWhereUniqueInput | AnswerAttachmentWhereUniqueInput[]
    delete?: AnswerAttachmentWhereUniqueInput | AnswerAttachmentWhereUniqueInput[]
    connect?: AnswerAttachmentWhereUniqueInput | AnswerAttachmentWhereUniqueInput[]
    update?: AnswerAttachmentUpdateWithWhereUniqueWithoutAnswerInput | AnswerAttachmentUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: AnswerAttachmentUpdateManyWithWhereWithoutAnswerInput | AnswerAttachmentUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: AnswerAttachmentScalarWhereInput | AnswerAttachmentScalarWhereInput[]
  }

  export type AnswerAttachmentUncheckedUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<AnswerAttachmentCreateWithoutAnswerInput, AnswerAttachmentUncheckedCreateWithoutAnswerInput> | AnswerAttachmentCreateWithoutAnswerInput[] | AnswerAttachmentUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: AnswerAttachmentCreateOrConnectWithoutAnswerInput | AnswerAttachmentCreateOrConnectWithoutAnswerInput[]
    upsert?: AnswerAttachmentUpsertWithWhereUniqueWithoutAnswerInput | AnswerAttachmentUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: AnswerAttachmentCreateManyAnswerInputEnvelope
    set?: AnswerAttachmentWhereUniqueInput | AnswerAttachmentWhereUniqueInput[]
    disconnect?: AnswerAttachmentWhereUniqueInput | AnswerAttachmentWhereUniqueInput[]
    delete?: AnswerAttachmentWhereUniqueInput | AnswerAttachmentWhereUniqueInput[]
    connect?: AnswerAttachmentWhereUniqueInput | AnswerAttachmentWhereUniqueInput[]
    update?: AnswerAttachmentUpdateWithWhereUniqueWithoutAnswerInput | AnswerAttachmentUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: AnswerAttachmentUpdateManyWithWhereWithoutAnswerInput | AnswerAttachmentUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: AnswerAttachmentScalarWhereInput | AnswerAttachmentScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<QuestionCreateWithoutAttachmentsInput, QuestionUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAttachmentsInput
    connect?: QuestionWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<QuestionCreateWithoutAttachmentsInput, QuestionUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAttachmentsInput
    upsert?: QuestionUpsertWithoutAttachmentsInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAttachmentsInput, QuestionUpdateWithoutAttachmentsInput>, QuestionUncheckedUpdateWithoutAttachmentsInput>
  }

  export type AnswerCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<AnswerCreateWithoutAttachmentsInput, AnswerUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutAttachmentsInput
    connect?: AnswerWhereUniqueInput
  }

  export type AnswerUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<AnswerCreateWithoutAttachmentsInput, AnswerUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutAttachmentsInput
    upsert?: AnswerUpsertWithoutAttachmentsInput
    connect?: AnswerWhereUniqueInput
    update?: XOR<XOR<AnswerUpdateToOneWithWhereWithoutAttachmentsInput, AnswerUpdateWithoutAttachmentsInput>, AnswerUncheckedUpdateWithoutAttachmentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumQuestionStateFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionState | EnumQuestionStateFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionState[] | ListEnumQuestionStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionState[] | ListEnumQuestionStateFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionStateFilter<$PrismaModel> | $Enums.QuestionState
  }

  export type NestedEnumQuestionStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionState | EnumQuestionStateFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionState[] | ListEnumQuestionStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionState[] | ListEnumQuestionStateFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionStateWithAggregatesFilter<$PrismaModel> | $Enums.QuestionState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionStateFilter<$PrismaModel>
    _max?: NestedEnumQuestionStateFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type QuestionCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: string
    state?: $Enums.QuestionState
    gradeYear: number
    createdAt?: Date | string
    updatedAt?: Date | string
    discipline: DisciplineCreateNestedOneWithoutQuestionsInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    attachments?: QuestionAttachmentCreateNestedManyWithoutQuestionInput
    stateChanges?: QuestionStateChangeCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: string
    state?: $Enums.QuestionState
    gradeYear: number
    disciplineId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    attachments?: QuestionAttachmentUncheckedCreateNestedManyWithoutQuestionInput
    stateChanges?: QuestionStateChangeUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutAuthorInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAuthorInput, QuestionUncheckedCreateWithoutAuthorInput>
  }

  export type QuestionCreateManyAuthorInputEnvelope = {
    data: QuestionCreateManyAuthorInput | QuestionCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type AnswerCreateWithoutAuthorInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuestionCreateNestedOneWithoutAnswersInput
    attachments?: AnswerAttachmentCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutAuthorInput = {
    id?: string
    content: string
    questionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attachments?: AnswerAttachmentUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutAuthorInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutAuthorInput, AnswerUncheckedCreateWithoutAuthorInput>
  }

  export type AnswerCreateManyAuthorInputEnvelope = {
    data: AnswerCreateManyAuthorInput | AnswerCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type TeacherDisciplineCreateWithoutTeacherInput = {
    id?: string
    createdAt?: Date | string
    discipline: DisciplineCreateNestedOneWithoutTeachersInput
  }

  export type TeacherDisciplineUncheckedCreateWithoutTeacherInput = {
    id?: string
    disciplineId: string
    createdAt?: Date | string
  }

  export type TeacherDisciplineCreateOrConnectWithoutTeacherInput = {
    where: TeacherDisciplineWhereUniqueInput
    create: XOR<TeacherDisciplineCreateWithoutTeacherInput, TeacherDisciplineUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherDisciplineCreateManyTeacherInputEnvelope = {
    data: TeacherDisciplineCreateManyTeacherInput | TeacherDisciplineCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type QuestionStateChangeCreateWithoutChangedByInput = {
    id?: string
    fromState: $Enums.QuestionState
    toState: $Enums.QuestionState
    summary?: string | null
    createdAt?: Date | string
    question: QuestionCreateNestedOneWithoutStateChangesInput
  }

  export type QuestionStateChangeUncheckedCreateWithoutChangedByInput = {
    id?: string
    questionId: string
    fromState: $Enums.QuestionState
    toState: $Enums.QuestionState
    summary?: string | null
    createdAt?: Date | string
  }

  export type QuestionStateChangeCreateOrConnectWithoutChangedByInput = {
    where: QuestionStateChangeWhereUniqueInput
    create: XOR<QuestionStateChangeCreateWithoutChangedByInput, QuestionStateChangeUncheckedCreateWithoutChangedByInput>
  }

  export type QuestionStateChangeCreateManyChangedByInputEnvelope = {
    data: QuestionStateChangeCreateManyChangedByInput | QuestionStateChangeCreateManyChangedByInput[]
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithWhereUniqueWithoutAuthorInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutAuthorInput, QuestionUncheckedUpdateWithoutAuthorInput>
    create: XOR<QuestionCreateWithoutAuthorInput, QuestionUncheckedCreateWithoutAuthorInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutAuthorInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutAuthorInput, QuestionUncheckedUpdateWithoutAuthorInput>
  }

  export type QuestionUpdateManyWithWhereWithoutAuthorInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutAuthorInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    title?: StringFilter<"Question"> | string
    content?: StringFilter<"Question"> | string
    state?: EnumQuestionStateFilter<"Question"> | $Enums.QuestionState
    gradeYear?: IntFilter<"Question"> | number
    authorId?: StringFilter<"Question"> | string
    disciplineId?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
  }

  export type AnswerUpsertWithWhereUniqueWithoutAuthorInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutAuthorInput, AnswerUncheckedUpdateWithoutAuthorInput>
    create: XOR<AnswerCreateWithoutAuthorInput, AnswerUncheckedCreateWithoutAuthorInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutAuthorInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutAuthorInput, AnswerUncheckedUpdateWithoutAuthorInput>
  }

  export type AnswerUpdateManyWithWhereWithoutAuthorInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutAuthorInput>
  }

  export type AnswerScalarWhereInput = {
    AND?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    OR?: AnswerScalarWhereInput[]
    NOT?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    id?: StringFilter<"Answer"> | string
    content?: StringFilter<"Answer"> | string
    questionId?: StringFilter<"Answer"> | string
    authorId?: StringFilter<"Answer"> | string
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
  }

  export type TeacherDisciplineUpsertWithWhereUniqueWithoutTeacherInput = {
    where: TeacherDisciplineWhereUniqueInput
    update: XOR<TeacherDisciplineUpdateWithoutTeacherInput, TeacherDisciplineUncheckedUpdateWithoutTeacherInput>
    create: XOR<TeacherDisciplineCreateWithoutTeacherInput, TeacherDisciplineUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherDisciplineUpdateWithWhereUniqueWithoutTeacherInput = {
    where: TeacherDisciplineWhereUniqueInput
    data: XOR<TeacherDisciplineUpdateWithoutTeacherInput, TeacherDisciplineUncheckedUpdateWithoutTeacherInput>
  }

  export type TeacherDisciplineUpdateManyWithWhereWithoutTeacherInput = {
    where: TeacherDisciplineScalarWhereInput
    data: XOR<TeacherDisciplineUpdateManyMutationInput, TeacherDisciplineUncheckedUpdateManyWithoutTeacherInput>
  }

  export type TeacherDisciplineScalarWhereInput = {
    AND?: TeacherDisciplineScalarWhereInput | TeacherDisciplineScalarWhereInput[]
    OR?: TeacherDisciplineScalarWhereInput[]
    NOT?: TeacherDisciplineScalarWhereInput | TeacherDisciplineScalarWhereInput[]
    id?: StringFilter<"TeacherDiscipline"> | string
    teacherId?: StringFilter<"TeacherDiscipline"> | string
    disciplineId?: StringFilter<"TeacherDiscipline"> | string
    createdAt?: DateTimeFilter<"TeacherDiscipline"> | Date | string
  }

  export type QuestionStateChangeUpsertWithWhereUniqueWithoutChangedByInput = {
    where: QuestionStateChangeWhereUniqueInput
    update: XOR<QuestionStateChangeUpdateWithoutChangedByInput, QuestionStateChangeUncheckedUpdateWithoutChangedByInput>
    create: XOR<QuestionStateChangeCreateWithoutChangedByInput, QuestionStateChangeUncheckedCreateWithoutChangedByInput>
  }

  export type QuestionStateChangeUpdateWithWhereUniqueWithoutChangedByInput = {
    where: QuestionStateChangeWhereUniqueInput
    data: XOR<QuestionStateChangeUpdateWithoutChangedByInput, QuestionStateChangeUncheckedUpdateWithoutChangedByInput>
  }

  export type QuestionStateChangeUpdateManyWithWhereWithoutChangedByInput = {
    where: QuestionStateChangeScalarWhereInput
    data: XOR<QuestionStateChangeUpdateManyMutationInput, QuestionStateChangeUncheckedUpdateManyWithoutChangedByInput>
  }

  export type QuestionStateChangeScalarWhereInput = {
    AND?: QuestionStateChangeScalarWhereInput | QuestionStateChangeScalarWhereInput[]
    OR?: QuestionStateChangeScalarWhereInput[]
    NOT?: QuestionStateChangeScalarWhereInput | QuestionStateChangeScalarWhereInput[]
    id?: StringFilter<"QuestionStateChange"> | string
    questionId?: StringFilter<"QuestionStateChange"> | string
    changedById?: StringFilter<"QuestionStateChange"> | string
    fromState?: EnumQuestionStateFilter<"QuestionStateChange"> | $Enums.QuestionState
    toState?: EnumQuestionStateFilter<"QuestionStateChange"> | $Enums.QuestionState
    summary?: StringNullableFilter<"QuestionStateChange"> | string | null
    createdAt?: DateTimeFilter<"QuestionStateChange"> | Date | string
  }

  export type QuestionCreateWithoutDisciplineInput = {
    id?: string
    title: string
    content: string
    state?: $Enums.QuestionState
    gradeYear: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutQuestionsInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    attachments?: QuestionAttachmentCreateNestedManyWithoutQuestionInput
    stateChanges?: QuestionStateChangeCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutDisciplineInput = {
    id?: string
    title: string
    content: string
    state?: $Enums.QuestionState
    gradeYear: number
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    attachments?: QuestionAttachmentUncheckedCreateNestedManyWithoutQuestionInput
    stateChanges?: QuestionStateChangeUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutDisciplineInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutDisciplineInput, QuestionUncheckedCreateWithoutDisciplineInput>
  }

  export type QuestionCreateManyDisciplineInputEnvelope = {
    data: QuestionCreateManyDisciplineInput | QuestionCreateManyDisciplineInput[]
    skipDuplicates?: boolean
  }

  export type TeacherDisciplineCreateWithoutDisciplineInput = {
    id?: string
    createdAt?: Date | string
    teacher: UserCreateNestedOneWithoutDisciplinesInput
  }

  export type TeacherDisciplineUncheckedCreateWithoutDisciplineInput = {
    id?: string
    teacherId: string
    createdAt?: Date | string
  }

  export type TeacherDisciplineCreateOrConnectWithoutDisciplineInput = {
    where: TeacherDisciplineWhereUniqueInput
    create: XOR<TeacherDisciplineCreateWithoutDisciplineInput, TeacherDisciplineUncheckedCreateWithoutDisciplineInput>
  }

  export type TeacherDisciplineCreateManyDisciplineInputEnvelope = {
    data: TeacherDisciplineCreateManyDisciplineInput | TeacherDisciplineCreateManyDisciplineInput[]
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithWhereUniqueWithoutDisciplineInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutDisciplineInput, QuestionUncheckedUpdateWithoutDisciplineInput>
    create: XOR<QuestionCreateWithoutDisciplineInput, QuestionUncheckedCreateWithoutDisciplineInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutDisciplineInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutDisciplineInput, QuestionUncheckedUpdateWithoutDisciplineInput>
  }

  export type QuestionUpdateManyWithWhereWithoutDisciplineInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutDisciplineInput>
  }

  export type TeacherDisciplineUpsertWithWhereUniqueWithoutDisciplineInput = {
    where: TeacherDisciplineWhereUniqueInput
    update: XOR<TeacherDisciplineUpdateWithoutDisciplineInput, TeacherDisciplineUncheckedUpdateWithoutDisciplineInput>
    create: XOR<TeacherDisciplineCreateWithoutDisciplineInput, TeacherDisciplineUncheckedCreateWithoutDisciplineInput>
  }

  export type TeacherDisciplineUpdateWithWhereUniqueWithoutDisciplineInput = {
    where: TeacherDisciplineWhereUniqueInput
    data: XOR<TeacherDisciplineUpdateWithoutDisciplineInput, TeacherDisciplineUncheckedUpdateWithoutDisciplineInput>
  }

  export type TeacherDisciplineUpdateManyWithWhereWithoutDisciplineInput = {
    where: TeacherDisciplineScalarWhereInput
    data: XOR<TeacherDisciplineUpdateManyMutationInput, TeacherDisciplineUncheckedUpdateManyWithoutDisciplineInput>
  }

  export type UserCreateWithoutDisciplinesInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutAuthorInput
    answers?: AnswerCreateNestedManyWithoutAuthorInput
    questionStateChanges?: QuestionStateChangeCreateNestedManyWithoutChangedByInput
  }

  export type UserUncheckedCreateWithoutDisciplinesInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutAuthorInput
    answers?: AnswerUncheckedCreateNestedManyWithoutAuthorInput
    questionStateChanges?: QuestionStateChangeUncheckedCreateNestedManyWithoutChangedByInput
  }

  export type UserCreateOrConnectWithoutDisciplinesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDisciplinesInput, UserUncheckedCreateWithoutDisciplinesInput>
  }

  export type DisciplineCreateWithoutTeachersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutDisciplineInput
  }

  export type DisciplineUncheckedCreateWithoutTeachersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutDisciplineInput
  }

  export type DisciplineCreateOrConnectWithoutTeachersInput = {
    where: DisciplineWhereUniqueInput
    create: XOR<DisciplineCreateWithoutTeachersInput, DisciplineUncheckedCreateWithoutTeachersInput>
  }

  export type UserUpsertWithoutDisciplinesInput = {
    update: XOR<UserUpdateWithoutDisciplinesInput, UserUncheckedUpdateWithoutDisciplinesInput>
    create: XOR<UserCreateWithoutDisciplinesInput, UserUncheckedCreateWithoutDisciplinesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDisciplinesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDisciplinesInput, UserUncheckedUpdateWithoutDisciplinesInput>
  }

  export type UserUpdateWithoutDisciplinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutAuthorNestedInput
    answers?: AnswerUpdateManyWithoutAuthorNestedInput
    questionStateChanges?: QuestionStateChangeUpdateManyWithoutChangedByNestedInput
  }

  export type UserUncheckedUpdateWithoutDisciplinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutAuthorNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutAuthorNestedInput
    questionStateChanges?: QuestionStateChangeUncheckedUpdateManyWithoutChangedByNestedInput
  }

  export type DisciplineUpsertWithoutTeachersInput = {
    update: XOR<DisciplineUpdateWithoutTeachersInput, DisciplineUncheckedUpdateWithoutTeachersInput>
    create: XOR<DisciplineCreateWithoutTeachersInput, DisciplineUncheckedCreateWithoutTeachersInput>
    where?: DisciplineWhereInput
  }

  export type DisciplineUpdateToOneWithWhereWithoutTeachersInput = {
    where?: DisciplineWhereInput
    data: XOR<DisciplineUpdateWithoutTeachersInput, DisciplineUncheckedUpdateWithoutTeachersInput>
  }

  export type DisciplineUpdateWithoutTeachersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutDisciplineNestedInput
  }

  export type DisciplineUncheckedUpdateWithoutTeachersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutDisciplineNestedInput
  }

  export type UserCreateWithoutQuestionsInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    answers?: AnswerCreateNestedManyWithoutAuthorInput
    disciplines?: TeacherDisciplineCreateNestedManyWithoutTeacherInput
    questionStateChanges?: QuestionStateChangeCreateNestedManyWithoutChangedByInput
  }

  export type UserUncheckedCreateWithoutQuestionsInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutAuthorInput
    disciplines?: TeacherDisciplineUncheckedCreateNestedManyWithoutTeacherInput
    questionStateChanges?: QuestionStateChangeUncheckedCreateNestedManyWithoutChangedByInput
  }

  export type UserCreateOrConnectWithoutQuestionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuestionsInput, UserUncheckedCreateWithoutQuestionsInput>
  }

  export type DisciplineCreateWithoutQuestionsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    teachers?: TeacherDisciplineCreateNestedManyWithoutDisciplineInput
  }

  export type DisciplineUncheckedCreateWithoutQuestionsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    teachers?: TeacherDisciplineUncheckedCreateNestedManyWithoutDisciplineInput
  }

  export type DisciplineCreateOrConnectWithoutQuestionsInput = {
    where: DisciplineWhereUniqueInput
    create: XOR<DisciplineCreateWithoutQuestionsInput, DisciplineUncheckedCreateWithoutQuestionsInput>
  }

  export type AnswerCreateWithoutQuestionInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutAnswersInput
    attachments?: AnswerAttachmentCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutQuestionInput = {
    id?: string
    content: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attachments?: AnswerAttachmentUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerCreateManyQuestionInputEnvelope = {
    data: AnswerCreateManyQuestionInput | AnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type QuestionAttachmentCreateWithoutQuestionInput = {
    id?: string
    fileName: string
    fileUrl: string
    fileType: string
    fileSize: number
    createdAt?: Date | string
  }

  export type QuestionAttachmentUncheckedCreateWithoutQuestionInput = {
    id?: string
    fileName: string
    fileUrl: string
    fileType: string
    fileSize: number
    createdAt?: Date | string
  }

  export type QuestionAttachmentCreateOrConnectWithoutQuestionInput = {
    where: QuestionAttachmentWhereUniqueInput
    create: XOR<QuestionAttachmentCreateWithoutQuestionInput, QuestionAttachmentUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionAttachmentCreateManyQuestionInputEnvelope = {
    data: QuestionAttachmentCreateManyQuestionInput | QuestionAttachmentCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type QuestionStateChangeCreateWithoutQuestionInput = {
    id?: string
    fromState: $Enums.QuestionState
    toState: $Enums.QuestionState
    summary?: string | null
    createdAt?: Date | string
    changedBy: UserCreateNestedOneWithoutQuestionStateChangesInput
  }

  export type QuestionStateChangeUncheckedCreateWithoutQuestionInput = {
    id?: string
    changedById: string
    fromState: $Enums.QuestionState
    toState: $Enums.QuestionState
    summary?: string | null
    createdAt?: Date | string
  }

  export type QuestionStateChangeCreateOrConnectWithoutQuestionInput = {
    where: QuestionStateChangeWhereUniqueInput
    create: XOR<QuestionStateChangeCreateWithoutQuestionInput, QuestionStateChangeUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionStateChangeCreateManyQuestionInputEnvelope = {
    data: QuestionStateChangeCreateManyQuestionInput | QuestionStateChangeCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutQuestionsInput = {
    update: XOR<UserUpdateWithoutQuestionsInput, UserUncheckedUpdateWithoutQuestionsInput>
    create: XOR<UserCreateWithoutQuestionsInput, UserUncheckedCreateWithoutQuestionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuestionsInput, UserUncheckedUpdateWithoutQuestionsInput>
  }

  export type UserUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUpdateManyWithoutAuthorNestedInput
    disciplines?: TeacherDisciplineUpdateManyWithoutTeacherNestedInput
    questionStateChanges?: QuestionStateChangeUpdateManyWithoutChangedByNestedInput
  }

  export type UserUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutAuthorNestedInput
    disciplines?: TeacherDisciplineUncheckedUpdateManyWithoutTeacherNestedInput
    questionStateChanges?: QuestionStateChangeUncheckedUpdateManyWithoutChangedByNestedInput
  }

  export type DisciplineUpsertWithoutQuestionsInput = {
    update: XOR<DisciplineUpdateWithoutQuestionsInput, DisciplineUncheckedUpdateWithoutQuestionsInput>
    create: XOR<DisciplineCreateWithoutQuestionsInput, DisciplineUncheckedCreateWithoutQuestionsInput>
    where?: DisciplineWhereInput
  }

  export type DisciplineUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: DisciplineWhereInput
    data: XOR<DisciplineUpdateWithoutQuestionsInput, DisciplineUncheckedUpdateWithoutQuestionsInput>
  }

  export type DisciplineUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teachers?: TeacherDisciplineUpdateManyWithoutDisciplineNestedInput
  }

  export type DisciplineUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teachers?: TeacherDisciplineUncheckedUpdateManyWithoutDisciplineNestedInput
  }

  export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuestionAttachmentUpsertWithWhereUniqueWithoutQuestionInput = {
    where: QuestionAttachmentWhereUniqueInput
    update: XOR<QuestionAttachmentUpdateWithoutQuestionInput, QuestionAttachmentUncheckedUpdateWithoutQuestionInput>
    create: XOR<QuestionAttachmentCreateWithoutQuestionInput, QuestionAttachmentUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionAttachmentUpdateWithWhereUniqueWithoutQuestionInput = {
    where: QuestionAttachmentWhereUniqueInput
    data: XOR<QuestionAttachmentUpdateWithoutQuestionInput, QuestionAttachmentUncheckedUpdateWithoutQuestionInput>
  }

  export type QuestionAttachmentUpdateManyWithWhereWithoutQuestionInput = {
    where: QuestionAttachmentScalarWhereInput
    data: XOR<QuestionAttachmentUpdateManyMutationInput, QuestionAttachmentUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuestionAttachmentScalarWhereInput = {
    AND?: QuestionAttachmentScalarWhereInput | QuestionAttachmentScalarWhereInput[]
    OR?: QuestionAttachmentScalarWhereInput[]
    NOT?: QuestionAttachmentScalarWhereInput | QuestionAttachmentScalarWhereInput[]
    id?: StringFilter<"QuestionAttachment"> | string
    questionId?: StringFilter<"QuestionAttachment"> | string
    fileName?: StringFilter<"QuestionAttachment"> | string
    fileUrl?: StringFilter<"QuestionAttachment"> | string
    fileType?: StringFilter<"QuestionAttachment"> | string
    fileSize?: IntFilter<"QuestionAttachment"> | number
    createdAt?: DateTimeFilter<"QuestionAttachment"> | Date | string
  }

  export type QuestionStateChangeUpsertWithWhereUniqueWithoutQuestionInput = {
    where: QuestionStateChangeWhereUniqueInput
    update: XOR<QuestionStateChangeUpdateWithoutQuestionInput, QuestionStateChangeUncheckedUpdateWithoutQuestionInput>
    create: XOR<QuestionStateChangeCreateWithoutQuestionInput, QuestionStateChangeUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionStateChangeUpdateWithWhereUniqueWithoutQuestionInput = {
    where: QuestionStateChangeWhereUniqueInput
    data: XOR<QuestionStateChangeUpdateWithoutQuestionInput, QuestionStateChangeUncheckedUpdateWithoutQuestionInput>
  }

  export type QuestionStateChangeUpdateManyWithWhereWithoutQuestionInput = {
    where: QuestionStateChangeScalarWhereInput
    data: XOR<QuestionStateChangeUpdateManyMutationInput, QuestionStateChangeUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuestionCreateWithoutStateChangesInput = {
    id?: string
    title: string
    content: string
    state?: $Enums.QuestionState
    gradeYear: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutQuestionsInput
    discipline: DisciplineCreateNestedOneWithoutQuestionsInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    attachments?: QuestionAttachmentCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutStateChangesInput = {
    id?: string
    title: string
    content: string
    state?: $Enums.QuestionState
    gradeYear: number
    authorId: string
    disciplineId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    attachments?: QuestionAttachmentUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutStateChangesInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutStateChangesInput, QuestionUncheckedCreateWithoutStateChangesInput>
  }

  export type UserCreateWithoutQuestionStateChangesInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutAuthorInput
    answers?: AnswerCreateNestedManyWithoutAuthorInput
    disciplines?: TeacherDisciplineCreateNestedManyWithoutTeacherInput
  }

  export type UserUncheckedCreateWithoutQuestionStateChangesInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutAuthorInput
    answers?: AnswerUncheckedCreateNestedManyWithoutAuthorInput
    disciplines?: TeacherDisciplineUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type UserCreateOrConnectWithoutQuestionStateChangesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuestionStateChangesInput, UserUncheckedCreateWithoutQuestionStateChangesInput>
  }

  export type QuestionUpsertWithoutStateChangesInput = {
    update: XOR<QuestionUpdateWithoutStateChangesInput, QuestionUncheckedUpdateWithoutStateChangesInput>
    create: XOR<QuestionCreateWithoutStateChangesInput, QuestionUncheckedCreateWithoutStateChangesInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutStateChangesInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutStateChangesInput, QuestionUncheckedUpdateWithoutStateChangesInput>
  }

  export type QuestionUpdateWithoutStateChangesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    state?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    gradeYear?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutQuestionsNestedInput
    discipline?: DisciplineUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    attachments?: QuestionAttachmentUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutStateChangesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    state?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    gradeYear?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    disciplineId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    attachments?: QuestionAttachmentUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type UserUpsertWithoutQuestionStateChangesInput = {
    update: XOR<UserUpdateWithoutQuestionStateChangesInput, UserUncheckedUpdateWithoutQuestionStateChangesInput>
    create: XOR<UserCreateWithoutQuestionStateChangesInput, UserUncheckedCreateWithoutQuestionStateChangesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuestionStateChangesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuestionStateChangesInput, UserUncheckedUpdateWithoutQuestionStateChangesInput>
  }

  export type UserUpdateWithoutQuestionStateChangesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutAuthorNestedInput
    answers?: AnswerUpdateManyWithoutAuthorNestedInput
    disciplines?: TeacherDisciplineUpdateManyWithoutTeacherNestedInput
  }

  export type UserUncheckedUpdateWithoutQuestionStateChangesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutAuthorNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutAuthorNestedInput
    disciplines?: TeacherDisciplineUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type QuestionCreateWithoutAnswersInput = {
    id?: string
    title: string
    content: string
    state?: $Enums.QuestionState
    gradeYear: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutQuestionsInput
    discipline: DisciplineCreateNestedOneWithoutQuestionsInput
    attachments?: QuestionAttachmentCreateNestedManyWithoutQuestionInput
    stateChanges?: QuestionStateChangeCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutAnswersInput = {
    id?: string
    title: string
    content: string
    state?: $Enums.QuestionState
    gradeYear: number
    authorId: string
    disciplineId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attachments?: QuestionAttachmentUncheckedCreateNestedManyWithoutQuestionInput
    stateChanges?: QuestionStateChangeUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutAnswersInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
  }

  export type UserCreateWithoutAnswersInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutAuthorInput
    disciplines?: TeacherDisciplineCreateNestedManyWithoutTeacherInput
    questionStateChanges?: QuestionStateChangeCreateNestedManyWithoutChangedByInput
  }

  export type UserUncheckedCreateWithoutAnswersInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutAuthorInput
    disciplines?: TeacherDisciplineUncheckedCreateNestedManyWithoutTeacherInput
    questionStateChanges?: QuestionStateChangeUncheckedCreateNestedManyWithoutChangedByInput
  }

  export type UserCreateOrConnectWithoutAnswersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
  }

  export type AnswerAttachmentCreateWithoutAnswerInput = {
    id?: string
    fileName: string
    fileUrl: string
    fileType: string
    fileSize: number
    createdAt?: Date | string
  }

  export type AnswerAttachmentUncheckedCreateWithoutAnswerInput = {
    id?: string
    fileName: string
    fileUrl: string
    fileType: string
    fileSize: number
    createdAt?: Date | string
  }

  export type AnswerAttachmentCreateOrConnectWithoutAnswerInput = {
    where: AnswerAttachmentWhereUniqueInput
    create: XOR<AnswerAttachmentCreateWithoutAnswerInput, AnswerAttachmentUncheckedCreateWithoutAnswerInput>
  }

  export type AnswerAttachmentCreateManyAnswerInputEnvelope = {
    data: AnswerAttachmentCreateManyAnswerInput | AnswerAttachmentCreateManyAnswerInput[]
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithoutAnswersInput = {
    update: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    state?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    gradeYear?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutQuestionsNestedInput
    discipline?: DisciplineUpdateOneRequiredWithoutQuestionsNestedInput
    attachments?: QuestionAttachmentUpdateManyWithoutQuestionNestedInput
    stateChanges?: QuestionStateChangeUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    state?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    gradeYear?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    disciplineId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: QuestionAttachmentUncheckedUpdateManyWithoutQuestionNestedInput
    stateChanges?: QuestionStateChangeUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type UserUpsertWithoutAnswersInput = {
    update: XOR<UserUpdateWithoutAnswersInput, UserUncheckedUpdateWithoutAnswersInput>
    create: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnswersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnswersInput, UserUncheckedUpdateWithoutAnswersInput>
  }

  export type UserUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutAuthorNestedInput
    disciplines?: TeacherDisciplineUpdateManyWithoutTeacherNestedInput
    questionStateChanges?: QuestionStateChangeUpdateManyWithoutChangedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutAuthorNestedInput
    disciplines?: TeacherDisciplineUncheckedUpdateManyWithoutTeacherNestedInput
    questionStateChanges?: QuestionStateChangeUncheckedUpdateManyWithoutChangedByNestedInput
  }

  export type AnswerAttachmentUpsertWithWhereUniqueWithoutAnswerInput = {
    where: AnswerAttachmentWhereUniqueInput
    update: XOR<AnswerAttachmentUpdateWithoutAnswerInput, AnswerAttachmentUncheckedUpdateWithoutAnswerInput>
    create: XOR<AnswerAttachmentCreateWithoutAnswerInput, AnswerAttachmentUncheckedCreateWithoutAnswerInput>
  }

  export type AnswerAttachmentUpdateWithWhereUniqueWithoutAnswerInput = {
    where: AnswerAttachmentWhereUniqueInput
    data: XOR<AnswerAttachmentUpdateWithoutAnswerInput, AnswerAttachmentUncheckedUpdateWithoutAnswerInput>
  }

  export type AnswerAttachmentUpdateManyWithWhereWithoutAnswerInput = {
    where: AnswerAttachmentScalarWhereInput
    data: XOR<AnswerAttachmentUpdateManyMutationInput, AnswerAttachmentUncheckedUpdateManyWithoutAnswerInput>
  }

  export type AnswerAttachmentScalarWhereInput = {
    AND?: AnswerAttachmentScalarWhereInput | AnswerAttachmentScalarWhereInput[]
    OR?: AnswerAttachmentScalarWhereInput[]
    NOT?: AnswerAttachmentScalarWhereInput | AnswerAttachmentScalarWhereInput[]
    id?: StringFilter<"AnswerAttachment"> | string
    answerId?: StringFilter<"AnswerAttachment"> | string
    fileName?: StringFilter<"AnswerAttachment"> | string
    fileUrl?: StringFilter<"AnswerAttachment"> | string
    fileType?: StringFilter<"AnswerAttachment"> | string
    fileSize?: IntFilter<"AnswerAttachment"> | number
    createdAt?: DateTimeFilter<"AnswerAttachment"> | Date | string
  }

  export type QuestionCreateWithoutAttachmentsInput = {
    id?: string
    title: string
    content: string
    state?: $Enums.QuestionState
    gradeYear: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutQuestionsInput
    discipline: DisciplineCreateNestedOneWithoutQuestionsInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    stateChanges?: QuestionStateChangeCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutAttachmentsInput = {
    id?: string
    title: string
    content: string
    state?: $Enums.QuestionState
    gradeYear: number
    authorId: string
    disciplineId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    stateChanges?: QuestionStateChangeUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutAttachmentsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAttachmentsInput, QuestionUncheckedCreateWithoutAttachmentsInput>
  }

  export type QuestionUpsertWithoutAttachmentsInput = {
    update: XOR<QuestionUpdateWithoutAttachmentsInput, QuestionUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<QuestionCreateWithoutAttachmentsInput, QuestionUncheckedCreateWithoutAttachmentsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAttachmentsInput, QuestionUncheckedUpdateWithoutAttachmentsInput>
  }

  export type QuestionUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    state?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    gradeYear?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutQuestionsNestedInput
    discipline?: DisciplineUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    stateChanges?: QuestionStateChangeUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    state?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    gradeYear?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    disciplineId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    stateChanges?: QuestionStateChangeUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type AnswerCreateWithoutAttachmentsInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuestionCreateNestedOneWithoutAnswersInput
    author: UserCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateWithoutAttachmentsInput = {
    id?: string
    content: string
    questionId: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerCreateOrConnectWithoutAttachmentsInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutAttachmentsInput, AnswerUncheckedCreateWithoutAttachmentsInput>
  }

  export type AnswerUpsertWithoutAttachmentsInput = {
    update: XOR<AnswerUpdateWithoutAttachmentsInput, AnswerUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<AnswerCreateWithoutAttachmentsInput, AnswerUncheckedCreateWithoutAttachmentsInput>
    where?: AnswerWhereInput
  }

  export type AnswerUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: AnswerWhereInput
    data: XOR<AnswerUpdateWithoutAttachmentsInput, AnswerUncheckedUpdateWithoutAttachmentsInput>
  }

  export type AnswerUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    author?: UserUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyAuthorInput = {
    id?: string
    title: string
    content: string
    state?: $Enums.QuestionState
    gradeYear: number
    disciplineId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerCreateManyAuthorInput = {
    id?: string
    content: string
    questionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherDisciplineCreateManyTeacherInput = {
    id?: string
    disciplineId: string
    createdAt?: Date | string
  }

  export type QuestionStateChangeCreateManyChangedByInput = {
    id?: string
    questionId: string
    fromState: $Enums.QuestionState
    toState: $Enums.QuestionState
    summary?: string | null
    createdAt?: Date | string
  }

  export type QuestionUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    state?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    gradeYear?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discipline?: DisciplineUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    attachments?: QuestionAttachmentUpdateManyWithoutQuestionNestedInput
    stateChanges?: QuestionStateChangeUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    state?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    gradeYear?: IntFieldUpdateOperationsInput | number
    disciplineId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    attachments?: QuestionAttachmentUncheckedUpdateManyWithoutQuestionNestedInput
    stateChanges?: QuestionStateChangeUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    state?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    gradeYear?: IntFieldUpdateOperationsInput | number
    disciplineId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    attachments?: AnswerAttachmentUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: AnswerAttachmentUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherDisciplineUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discipline?: DisciplineUpdateOneRequiredWithoutTeachersNestedInput
  }

  export type TeacherDisciplineUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    disciplineId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherDisciplineUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    disciplineId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionStateChangeUpdateWithoutChangedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromState?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    toState?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutStateChangesNestedInput
  }

  export type QuestionStateChangeUncheckedUpdateWithoutChangedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    fromState?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    toState?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionStateChangeUncheckedUpdateManyWithoutChangedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    fromState?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    toState?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyDisciplineInput = {
    id?: string
    title: string
    content: string
    state?: $Enums.QuestionState
    gradeYear: number
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherDisciplineCreateManyDisciplineInput = {
    id?: string
    teacherId: string
    createdAt?: Date | string
  }

  export type QuestionUpdateWithoutDisciplineInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    state?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    gradeYear?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    attachments?: QuestionAttachmentUpdateManyWithoutQuestionNestedInput
    stateChanges?: QuestionStateChangeUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutDisciplineInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    state?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    gradeYear?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    attachments?: QuestionAttachmentUncheckedUpdateManyWithoutQuestionNestedInput
    stateChanges?: QuestionStateChangeUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutDisciplineInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    state?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    gradeYear?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherDisciplineUpdateWithoutDisciplineInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutDisciplinesNestedInput
  }

  export type TeacherDisciplineUncheckedUpdateWithoutDisciplineInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherDisciplineUncheckedUpdateManyWithoutDisciplineInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateManyQuestionInput = {
    id?: string
    content: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionAttachmentCreateManyQuestionInput = {
    id?: string
    fileName: string
    fileUrl: string
    fileType: string
    fileSize: number
    createdAt?: Date | string
  }

  export type QuestionStateChangeCreateManyQuestionInput = {
    id?: string
    changedById: string
    fromState: $Enums.QuestionState
    toState: $Enums.QuestionState
    summary?: string | null
    createdAt?: Date | string
  }

  export type AnswerUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutAnswersNestedInput
    attachments?: AnswerAttachmentUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: AnswerAttachmentUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionAttachmentUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionAttachmentUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionAttachmentUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionStateChangeUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromState?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    toState?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedBy?: UserUpdateOneRequiredWithoutQuestionStateChangesNestedInput
  }

  export type QuestionStateChangeUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    changedById?: StringFieldUpdateOperationsInput | string
    fromState?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    toState?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionStateChangeUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    changedById?: StringFieldUpdateOperationsInput | string
    fromState?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    toState?: EnumQuestionStateFieldUpdateOperationsInput | $Enums.QuestionState
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerAttachmentCreateManyAnswerInput = {
    id?: string
    fileName: string
    fileUrl: string
    fileType: string
    fileSize: number
    createdAt?: Date | string
  }

  export type AnswerAttachmentUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerAttachmentUncheckedUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerAttachmentUncheckedUpdateManyWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}