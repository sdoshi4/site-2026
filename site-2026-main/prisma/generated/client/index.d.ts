
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
 * Model Slot
 * 
 */
export type Slot = $Result.DefaultSelection<Prisma.$SlotPayload>
/**
 * Model Volunteer
 * 
 */
export type Volunteer = $Result.DefaultSelection<Prisma.$VolunteerPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Slots
 * const slots = await prisma.slot.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Slots
   * const slots = await prisma.slot.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.slot`: Exposes CRUD operations for the **Slot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Slots
    * const slots = await prisma.slot.findMany()
    * ```
    */
  get slot(): Prisma.SlotDelegate<ExtArgs>;

  /**
   * `prisma.volunteer`: Exposes CRUD operations for the **Volunteer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Volunteers
    * const volunteers = await prisma.volunteer.findMany()
    * ```
    */
  get volunteer(): Prisma.VolunteerDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.9.1
   * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Slot: 'Slot',
    Volunteer: 'Volunteer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'slot' | 'volunteer'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Slot: {
        payload: Prisma.$SlotPayload<ExtArgs>
        fields: Prisma.SlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SlotFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SlotFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SlotPayload>
          }
          findFirst: {
            args: Prisma.SlotFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SlotFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SlotPayload>
          }
          findMany: {
            args: Prisma.SlotFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SlotPayload>[]
          }
          create: {
            args: Prisma.SlotCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SlotPayload>
          }
          createMany: {
            args: Prisma.SlotCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SlotDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SlotPayload>
          }
          update: {
            args: Prisma.SlotUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SlotPayload>
          }
          deleteMany: {
            args: Prisma.SlotDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SlotUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SlotUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SlotPayload>
          }
          aggregate: {
            args: Prisma.SlotAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSlot>
          }
          groupBy: {
            args: Prisma.SlotGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.SlotCountArgs<ExtArgs>,
            result: $Utils.Optional<SlotCountAggregateOutputType> | number
          }
        }
      }
      Volunteer: {
        payload: Prisma.$VolunteerPayload<ExtArgs>
        fields: Prisma.VolunteerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VolunteerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VolunteerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          findFirst: {
            args: Prisma.VolunteerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VolunteerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          findMany: {
            args: Prisma.VolunteerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>[]
          }
          create: {
            args: Prisma.VolunteerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          createMany: {
            args: Prisma.VolunteerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VolunteerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          update: {
            args: Prisma.VolunteerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          deleteMany: {
            args: Prisma.VolunteerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VolunteerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VolunteerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          aggregate: {
            args: Prisma.VolunteerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVolunteer>
          }
          groupBy: {
            args: Prisma.VolunteerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VolunteerGroupByOutputType>[]
          }
          count: {
            args: Prisma.VolunteerCountArgs<ExtArgs>,
            result: $Utils.Optional<VolunteerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type SlotCountOutputType
   */

  export type SlotCountOutputType = {
    waitList: number
    volunteers: number
  }

  export type SlotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    waitList?: boolean | SlotCountOutputTypeCountWaitListArgs
    volunteers?: boolean | SlotCountOutputTypeCountVolunteersArgs
  }

  // Custom InputTypes

  /**
   * SlotCountOutputType without action
   */
  export type SlotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotCountOutputType
     */
    select?: SlotCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SlotCountOutputType without action
   */
  export type SlotCountOutputTypeCountWaitListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolunteerWhereInput
  }


  /**
   * SlotCountOutputType without action
   */
  export type SlotCountOutputTypeCountVolunteersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolunteerWhereInput
  }



  /**
   * Count Type VolunteerCountOutputType
   */

  export type VolunteerCountOutputType = {
    Slots: number
    waitListedSlots: number
  }

  export type VolunteerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Slots?: boolean | VolunteerCountOutputTypeCountSlotsArgs
    waitListedSlots?: boolean | VolunteerCountOutputTypeCountWaitListedSlotsArgs
  }

  // Custom InputTypes

  /**
   * VolunteerCountOutputType without action
   */
  export type VolunteerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerCountOutputType
     */
    select?: VolunteerCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * VolunteerCountOutputType without action
   */
  export type VolunteerCountOutputTypeCountSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlotWhereInput
  }


  /**
   * VolunteerCountOutputType without action
   */
  export type VolunteerCountOutputTypeCountWaitListedSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlotWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Slot
   */

  export type AggregateSlot = {
    _count: SlotCountAggregateOutputType | null
    _avg: SlotAvgAggregateOutputType | null
    _sum: SlotSumAggregateOutputType | null
    _min: SlotMinAggregateOutputType | null
    _max: SlotMaxAggregateOutputType | null
  }

  export type SlotAvgAggregateOutputType = {
    id: number | null
    maxParticipants: number | null
    waitListSize: number | null
  }

  export type SlotSumAggregateOutputType = {
    id: number | null
    maxParticipants: number | null
    waitListSize: number | null
  }

  export type SlotMinAggregateOutputType = {
    id: number | null
    description: string | null
    time: string | null
    endTime: string | null
    location: string | null
    maxParticipants: number | null
    waitListSize: number | null
  }

  export type SlotMaxAggregateOutputType = {
    id: number | null
    description: string | null
    time: string | null
    endTime: string | null
    location: string | null
    maxParticipants: number | null
    waitListSize: number | null
  }

  export type SlotCountAggregateOutputType = {
    id: number
    description: number
    time: number
    endTime: number
    location: number
    maxParticipants: number
    waitListSize: number
    _all: number
  }


  export type SlotAvgAggregateInputType = {
    id?: true
    maxParticipants?: true
    waitListSize?: true
  }

  export type SlotSumAggregateInputType = {
    id?: true
    maxParticipants?: true
    waitListSize?: true
  }

  export type SlotMinAggregateInputType = {
    id?: true
    description?: true
    time?: true
    endTime?: true
    location?: true
    maxParticipants?: true
    waitListSize?: true
  }

  export type SlotMaxAggregateInputType = {
    id?: true
    description?: true
    time?: true
    endTime?: true
    location?: true
    maxParticipants?: true
    waitListSize?: true
  }

  export type SlotCountAggregateInputType = {
    id?: true
    description?: true
    time?: true
    endTime?: true
    location?: true
    maxParticipants?: true
    waitListSize?: true
    _all?: true
  }

  export type SlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Slot to aggregate.
     */
    where?: SlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slots to fetch.
     */
    orderBy?: SlotOrderByWithRelationInput | SlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Slots
    **/
    _count?: true | SlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SlotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SlotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SlotMaxAggregateInputType
  }

  export type GetSlotAggregateType<T extends SlotAggregateArgs> = {
        [P in keyof T & keyof AggregateSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSlot[P]>
      : GetScalarType<T[P], AggregateSlot[P]>
  }




  export type SlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlotWhereInput
    orderBy?: SlotOrderByWithAggregationInput | SlotOrderByWithAggregationInput[]
    by: SlotScalarFieldEnum[] | SlotScalarFieldEnum
    having?: SlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SlotCountAggregateInputType | true
    _avg?: SlotAvgAggregateInputType
    _sum?: SlotSumAggregateInputType
    _min?: SlotMinAggregateInputType
    _max?: SlotMaxAggregateInputType
  }

  export type SlotGroupByOutputType = {
    id: number
    description: string
    time: string
    endTime: string
    location: string
    maxParticipants: number
    waitListSize: number
    _count: SlotCountAggregateOutputType | null
    _avg: SlotAvgAggregateOutputType | null
    _sum: SlotSumAggregateOutputType | null
    _min: SlotMinAggregateOutputType | null
    _max: SlotMaxAggregateOutputType | null
  }

  type GetSlotGroupByPayload<T extends SlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SlotGroupByOutputType[P]>
            : GetScalarType<T[P], SlotGroupByOutputType[P]>
        }
      >
    >


  export type SlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    time?: boolean
    endTime?: boolean
    location?: boolean
    maxParticipants?: boolean
    waitListSize?: boolean
    waitList?: boolean | Slot$waitListArgs<ExtArgs>
    volunteers?: boolean | Slot$volunteersArgs<ExtArgs>
    _count?: boolean | SlotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["slot"]>

  export type SlotSelectScalar = {
    id?: boolean
    description?: boolean
    time?: boolean
    endTime?: boolean
    location?: boolean
    maxParticipants?: boolean
    waitListSize?: boolean
  }

  export type SlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    waitList?: boolean | Slot$waitListArgs<ExtArgs>
    volunteers?: boolean | Slot$volunteersArgs<ExtArgs>
    _count?: boolean | SlotCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Slot"
    objects: {
      waitList: Prisma.$VolunteerPayload<ExtArgs>[]
      volunteers: Prisma.$VolunteerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      time: string
      endTime: string
      location: string
      maxParticipants: number
      waitListSize: number
    }, ExtArgs["result"]["slot"]>
    composites: {}
  }


  type SlotGetPayload<S extends boolean | null | undefined | SlotDefaultArgs> = $Result.GetResult<Prisma.$SlotPayload, S>

  type SlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SlotFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SlotCountAggregateInputType | true
    }

  export interface SlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Slot'], meta: { name: 'Slot' } }
    /**
     * Find zero or one Slot that matches the filter.
     * @param {SlotFindUniqueArgs} args - Arguments to find a Slot
     * @example
     * // Get one Slot
     * const slot = await prisma.slot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SlotFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SlotFindUniqueArgs<ExtArgs>>
    ): Prisma__SlotClient<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Slot that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SlotFindUniqueOrThrowArgs} args - Arguments to find a Slot
     * @example
     * // Get one Slot
     * const slot = await prisma.slot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SlotFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SlotFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SlotClient<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Slot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotFindFirstArgs} args - Arguments to find a Slot
     * @example
     * // Get one Slot
     * const slot = await prisma.slot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SlotFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SlotFindFirstArgs<ExtArgs>>
    ): Prisma__SlotClient<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Slot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotFindFirstOrThrowArgs} args - Arguments to find a Slot
     * @example
     * // Get one Slot
     * const slot = await prisma.slot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SlotFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SlotFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SlotClient<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Slots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Slots
     * const slots = await prisma.slot.findMany()
     * 
     * // Get first 10 Slots
     * const slots = await prisma.slot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const slotWithIdOnly = await prisma.slot.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SlotFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SlotFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Slot.
     * @param {SlotCreateArgs} args - Arguments to create a Slot.
     * @example
     * // Create one Slot
     * const Slot = await prisma.slot.create({
     *   data: {
     *     // ... data to create a Slot
     *   }
     * })
     * 
    **/
    create<T extends SlotCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SlotCreateArgs<ExtArgs>>
    ): Prisma__SlotClient<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Slots.
     *     @param {SlotCreateManyArgs} args - Arguments to create many Slots.
     *     @example
     *     // Create many Slots
     *     const slot = await prisma.slot.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SlotCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SlotCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Slot.
     * @param {SlotDeleteArgs} args - Arguments to delete one Slot.
     * @example
     * // Delete one Slot
     * const Slot = await prisma.slot.delete({
     *   where: {
     *     // ... filter to delete one Slot
     *   }
     * })
     * 
    **/
    delete<T extends SlotDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SlotDeleteArgs<ExtArgs>>
    ): Prisma__SlotClient<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Slot.
     * @param {SlotUpdateArgs} args - Arguments to update one Slot.
     * @example
     * // Update one Slot
     * const slot = await prisma.slot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SlotUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SlotUpdateArgs<ExtArgs>>
    ): Prisma__SlotClient<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Slots.
     * @param {SlotDeleteManyArgs} args - Arguments to filter Slots to delete.
     * @example
     * // Delete a few Slots
     * const { count } = await prisma.slot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SlotDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SlotDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Slots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Slots
     * const slot = await prisma.slot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SlotUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SlotUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Slot.
     * @param {SlotUpsertArgs} args - Arguments to update or create a Slot.
     * @example
     * // Update or create a Slot
     * const slot = await prisma.slot.upsert({
     *   create: {
     *     // ... data to create a Slot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Slot we want to update
     *   }
     * })
    **/
    upsert<T extends SlotUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SlotUpsertArgs<ExtArgs>>
    ): Prisma__SlotClient<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Slots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotCountArgs} args - Arguments to filter Slots to count.
     * @example
     * // Count the number of Slots
     * const count = await prisma.slot.count({
     *   where: {
     *     // ... the filter for the Slots we want to count
     *   }
     * })
    **/
    count<T extends SlotCountArgs>(
      args?: Subset<T, SlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Slot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SlotAggregateArgs>(args: Subset<T, SlotAggregateArgs>): Prisma.PrismaPromise<GetSlotAggregateType<T>>

    /**
     * Group by Slot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotGroupByArgs} args - Group by arguments.
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
      T extends SlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SlotGroupByArgs['orderBy'] }
        : { orderBy?: SlotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Slot model
   */
  readonly fields: SlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Slot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    waitList<T extends Slot$waitListArgs<ExtArgs> = {}>(args?: Subset<T, Slot$waitListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, 'findMany'> | Null>;

    volunteers<T extends Slot$volunteersArgs<ExtArgs> = {}>(args?: Subset<T, Slot$volunteersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Slot model
   */ 
  interface SlotFieldRefs {
    readonly id: FieldRef<"Slot", 'Int'>
    readonly description: FieldRef<"Slot", 'String'>
    readonly time: FieldRef<"Slot", 'String'>
    readonly endTime: FieldRef<"Slot", 'String'>
    readonly location: FieldRef<"Slot", 'String'>
    readonly maxParticipants: FieldRef<"Slot", 'Int'>
    readonly waitListSize: FieldRef<"Slot", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Slot findUnique
   */
  export type SlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlotInclude<ExtArgs> | null
    /**
     * Filter, which Slot to fetch.
     */
    where: SlotWhereUniqueInput
  }


  /**
   * Slot findUniqueOrThrow
   */
  export type SlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlotInclude<ExtArgs> | null
    /**
     * Filter, which Slot to fetch.
     */
    where: SlotWhereUniqueInput
  }


  /**
   * Slot findFirst
   */
  export type SlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlotInclude<ExtArgs> | null
    /**
     * Filter, which Slot to fetch.
     */
    where?: SlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slots to fetch.
     */
    orderBy?: SlotOrderByWithRelationInput | SlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Slots.
     */
    cursor?: SlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Slots.
     */
    distinct?: SlotScalarFieldEnum | SlotScalarFieldEnum[]
  }


  /**
   * Slot findFirstOrThrow
   */
  export type SlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlotInclude<ExtArgs> | null
    /**
     * Filter, which Slot to fetch.
     */
    where?: SlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slots to fetch.
     */
    orderBy?: SlotOrderByWithRelationInput | SlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Slots.
     */
    cursor?: SlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Slots.
     */
    distinct?: SlotScalarFieldEnum | SlotScalarFieldEnum[]
  }


  /**
   * Slot findMany
   */
  export type SlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlotInclude<ExtArgs> | null
    /**
     * Filter, which Slots to fetch.
     */
    where?: SlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slots to fetch.
     */
    orderBy?: SlotOrderByWithRelationInput | SlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Slots.
     */
    cursor?: SlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slots.
     */
    skip?: number
    distinct?: SlotScalarFieldEnum | SlotScalarFieldEnum[]
  }


  /**
   * Slot create
   */
  export type SlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlotInclude<ExtArgs> | null
    /**
     * The data needed to create a Slot.
     */
    data: XOR<SlotCreateInput, SlotUncheckedCreateInput>
  }


  /**
   * Slot createMany
   */
  export type SlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Slots.
     */
    data: SlotCreateManyInput | SlotCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Slot update
   */
  export type SlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlotInclude<ExtArgs> | null
    /**
     * The data needed to update a Slot.
     */
    data: XOR<SlotUpdateInput, SlotUncheckedUpdateInput>
    /**
     * Choose, which Slot to update.
     */
    where: SlotWhereUniqueInput
  }


  /**
   * Slot updateMany
   */
  export type SlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Slots.
     */
    data: XOR<SlotUpdateManyMutationInput, SlotUncheckedUpdateManyInput>
    /**
     * Filter which Slots to update
     */
    where?: SlotWhereInput
  }


  /**
   * Slot upsert
   */
  export type SlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlotInclude<ExtArgs> | null
    /**
     * The filter to search for the Slot to update in case it exists.
     */
    where: SlotWhereUniqueInput
    /**
     * In case the Slot found by the `where` argument doesn't exist, create a new Slot with this data.
     */
    create: XOR<SlotCreateInput, SlotUncheckedCreateInput>
    /**
     * In case the Slot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SlotUpdateInput, SlotUncheckedUpdateInput>
  }


  /**
   * Slot delete
   */
  export type SlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlotInclude<ExtArgs> | null
    /**
     * Filter which Slot to delete.
     */
    where: SlotWhereUniqueInput
  }


  /**
   * Slot deleteMany
   */
  export type SlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Slots to delete
     */
    where?: SlotWhereInput
  }


  /**
   * Slot.waitList
   */
  export type Slot$waitListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VolunteerInclude<ExtArgs> | null
    where?: VolunteerWhereInput
    orderBy?: VolunteerOrderByWithRelationInput | VolunteerOrderByWithRelationInput[]
    cursor?: VolunteerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VolunteerScalarFieldEnum | VolunteerScalarFieldEnum[]
  }


  /**
   * Slot.volunteers
   */
  export type Slot$volunteersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VolunteerInclude<ExtArgs> | null
    where?: VolunteerWhereInput
    orderBy?: VolunteerOrderByWithRelationInput | VolunteerOrderByWithRelationInput[]
    cursor?: VolunteerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VolunteerScalarFieldEnum | VolunteerScalarFieldEnum[]
  }


  /**
   * Slot without action
   */
  export type SlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlotInclude<ExtArgs> | null
  }



  /**
   * Model Volunteer
   */

  export type AggregateVolunteer = {
    _count: VolunteerCountAggregateOutputType | null
    _avg: VolunteerAvgAggregateOutputType | null
    _sum: VolunteerSumAggregateOutputType | null
    _min: VolunteerMinAggregateOutputType | null
    _max: VolunteerMaxAggregateOutputType | null
  }

  export type VolunteerAvgAggregateOutputType = {
    id: number | null
  }

  export type VolunteerSumAggregateOutputType = {
    id: number | null
  }

  export type VolunteerMinAggregateOutputType = {
    id: number | null
    clerkId: string | null
    email: string | null
    name: string | null
  }

  export type VolunteerMaxAggregateOutputType = {
    id: number | null
    clerkId: string | null
    email: string | null
    name: string | null
  }

  export type VolunteerCountAggregateOutputType = {
    id: number
    clerkId: number
    email: number
    name: number
    _all: number
  }


  export type VolunteerAvgAggregateInputType = {
    id?: true
  }

  export type VolunteerSumAggregateInputType = {
    id?: true
  }

  export type VolunteerMinAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    name?: true
  }

  export type VolunteerMaxAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    name?: true
  }

  export type VolunteerCountAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    name?: true
    _all?: true
  }

  export type VolunteerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Volunteer to aggregate.
     */
    where?: VolunteerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volunteers to fetch.
     */
    orderBy?: VolunteerOrderByWithRelationInput | VolunteerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VolunteerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volunteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volunteers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Volunteers
    **/
    _count?: true | VolunteerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VolunteerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VolunteerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VolunteerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VolunteerMaxAggregateInputType
  }

  export type GetVolunteerAggregateType<T extends VolunteerAggregateArgs> = {
        [P in keyof T & keyof AggregateVolunteer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVolunteer[P]>
      : GetScalarType<T[P], AggregateVolunteer[P]>
  }




  export type VolunteerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolunteerWhereInput
    orderBy?: VolunteerOrderByWithAggregationInput | VolunteerOrderByWithAggregationInput[]
    by: VolunteerScalarFieldEnum[] | VolunteerScalarFieldEnum
    having?: VolunteerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VolunteerCountAggregateInputType | true
    _avg?: VolunteerAvgAggregateInputType
    _sum?: VolunteerSumAggregateInputType
    _min?: VolunteerMinAggregateInputType
    _max?: VolunteerMaxAggregateInputType
  }

  export type VolunteerGroupByOutputType = {
    id: number
    clerkId: string
    email: string
    name: string
    _count: VolunteerCountAggregateOutputType | null
    _avg: VolunteerAvgAggregateOutputType | null
    _sum: VolunteerSumAggregateOutputType | null
    _min: VolunteerMinAggregateOutputType | null
    _max: VolunteerMaxAggregateOutputType | null
  }

  type GetVolunteerGroupByPayload<T extends VolunteerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VolunteerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VolunteerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VolunteerGroupByOutputType[P]>
            : GetScalarType<T[P], VolunteerGroupByOutputType[P]>
        }
      >
    >


  export type VolunteerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    name?: boolean
    Slots?: boolean | Volunteer$SlotsArgs<ExtArgs>
    waitListedSlots?: boolean | Volunteer$waitListedSlotsArgs<ExtArgs>
    _count?: boolean | VolunteerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volunteer"]>

  export type VolunteerSelectScalar = {
    id?: boolean
    clerkId?: boolean
    email?: boolean
    name?: boolean
  }

  export type VolunteerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Slots?: boolean | Volunteer$SlotsArgs<ExtArgs>
    waitListedSlots?: boolean | Volunteer$waitListedSlotsArgs<ExtArgs>
    _count?: boolean | VolunteerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $VolunteerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Volunteer"
    objects: {
      Slots: Prisma.$SlotPayload<ExtArgs>[]
      waitListedSlots: Prisma.$SlotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clerkId: string
      email: string
      name: string
    }, ExtArgs["result"]["volunteer"]>
    composites: {}
  }


  type VolunteerGetPayload<S extends boolean | null | undefined | VolunteerDefaultArgs> = $Result.GetResult<Prisma.$VolunteerPayload, S>

  type VolunteerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VolunteerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VolunteerCountAggregateInputType | true
    }

  export interface VolunteerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Volunteer'], meta: { name: 'Volunteer' } }
    /**
     * Find zero or one Volunteer that matches the filter.
     * @param {VolunteerFindUniqueArgs} args - Arguments to find a Volunteer
     * @example
     * // Get one Volunteer
     * const volunteer = await prisma.volunteer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VolunteerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VolunteerFindUniqueArgs<ExtArgs>>
    ): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Volunteer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VolunteerFindUniqueOrThrowArgs} args - Arguments to find a Volunteer
     * @example
     * // Get one Volunteer
     * const volunteer = await prisma.volunteer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VolunteerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VolunteerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Volunteer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerFindFirstArgs} args - Arguments to find a Volunteer
     * @example
     * // Get one Volunteer
     * const volunteer = await prisma.volunteer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VolunteerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VolunteerFindFirstArgs<ExtArgs>>
    ): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Volunteer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerFindFirstOrThrowArgs} args - Arguments to find a Volunteer
     * @example
     * // Get one Volunteer
     * const volunteer = await prisma.volunteer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VolunteerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VolunteerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Volunteers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Volunteers
     * const volunteers = await prisma.volunteer.findMany()
     * 
     * // Get first 10 Volunteers
     * const volunteers = await prisma.volunteer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const volunteerWithIdOnly = await prisma.volunteer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VolunteerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VolunteerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Volunteer.
     * @param {VolunteerCreateArgs} args - Arguments to create a Volunteer.
     * @example
     * // Create one Volunteer
     * const Volunteer = await prisma.volunteer.create({
     *   data: {
     *     // ... data to create a Volunteer
     *   }
     * })
     * 
    **/
    create<T extends VolunteerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VolunteerCreateArgs<ExtArgs>>
    ): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Volunteers.
     *     @param {VolunteerCreateManyArgs} args - Arguments to create many Volunteers.
     *     @example
     *     // Create many Volunteers
     *     const volunteer = await prisma.volunteer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VolunteerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VolunteerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Volunteer.
     * @param {VolunteerDeleteArgs} args - Arguments to delete one Volunteer.
     * @example
     * // Delete one Volunteer
     * const Volunteer = await prisma.volunteer.delete({
     *   where: {
     *     // ... filter to delete one Volunteer
     *   }
     * })
     * 
    **/
    delete<T extends VolunteerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VolunteerDeleteArgs<ExtArgs>>
    ): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Volunteer.
     * @param {VolunteerUpdateArgs} args - Arguments to update one Volunteer.
     * @example
     * // Update one Volunteer
     * const volunteer = await prisma.volunteer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VolunteerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VolunteerUpdateArgs<ExtArgs>>
    ): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Volunteers.
     * @param {VolunteerDeleteManyArgs} args - Arguments to filter Volunteers to delete.
     * @example
     * // Delete a few Volunteers
     * const { count } = await prisma.volunteer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VolunteerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VolunteerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Volunteers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Volunteers
     * const volunteer = await prisma.volunteer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VolunteerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VolunteerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Volunteer.
     * @param {VolunteerUpsertArgs} args - Arguments to update or create a Volunteer.
     * @example
     * // Update or create a Volunteer
     * const volunteer = await prisma.volunteer.upsert({
     *   create: {
     *     // ... data to create a Volunteer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Volunteer we want to update
     *   }
     * })
    **/
    upsert<T extends VolunteerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VolunteerUpsertArgs<ExtArgs>>
    ): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Volunteers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerCountArgs} args - Arguments to filter Volunteers to count.
     * @example
     * // Count the number of Volunteers
     * const count = await prisma.volunteer.count({
     *   where: {
     *     // ... the filter for the Volunteers we want to count
     *   }
     * })
    **/
    count<T extends VolunteerCountArgs>(
      args?: Subset<T, VolunteerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VolunteerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Volunteer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VolunteerAggregateArgs>(args: Subset<T, VolunteerAggregateArgs>): Prisma.PrismaPromise<GetVolunteerAggregateType<T>>

    /**
     * Group by Volunteer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerGroupByArgs} args - Group by arguments.
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
      T extends VolunteerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VolunteerGroupByArgs['orderBy'] }
        : { orderBy?: VolunteerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VolunteerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVolunteerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Volunteer model
   */
  readonly fields: VolunteerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Volunteer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VolunteerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Slots<T extends Volunteer$SlotsArgs<ExtArgs> = {}>(args?: Subset<T, Volunteer$SlotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, 'findMany'> | Null>;

    waitListedSlots<T extends Volunteer$waitListedSlotsArgs<ExtArgs> = {}>(args?: Subset<T, Volunteer$waitListedSlotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Volunteer model
   */ 
  interface VolunteerFieldRefs {
    readonly id: FieldRef<"Volunteer", 'Int'>
    readonly clerkId: FieldRef<"Volunteer", 'String'>
    readonly email: FieldRef<"Volunteer", 'String'>
    readonly name: FieldRef<"Volunteer", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Volunteer findUnique
   */
  export type VolunteerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteer to fetch.
     */
    where: VolunteerWhereUniqueInput
  }


  /**
   * Volunteer findUniqueOrThrow
   */
  export type VolunteerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteer to fetch.
     */
    where: VolunteerWhereUniqueInput
  }


  /**
   * Volunteer findFirst
   */
  export type VolunteerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteer to fetch.
     */
    where?: VolunteerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volunteers to fetch.
     */
    orderBy?: VolunteerOrderByWithRelationInput | VolunteerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Volunteers.
     */
    cursor?: VolunteerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volunteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volunteers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Volunteers.
     */
    distinct?: VolunteerScalarFieldEnum | VolunteerScalarFieldEnum[]
  }


  /**
   * Volunteer findFirstOrThrow
   */
  export type VolunteerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteer to fetch.
     */
    where?: VolunteerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volunteers to fetch.
     */
    orderBy?: VolunteerOrderByWithRelationInput | VolunteerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Volunteers.
     */
    cursor?: VolunteerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volunteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volunteers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Volunteers.
     */
    distinct?: VolunteerScalarFieldEnum | VolunteerScalarFieldEnum[]
  }


  /**
   * Volunteer findMany
   */
  export type VolunteerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteers to fetch.
     */
    where?: VolunteerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volunteers to fetch.
     */
    orderBy?: VolunteerOrderByWithRelationInput | VolunteerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Volunteers.
     */
    cursor?: VolunteerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volunteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volunteers.
     */
    skip?: number
    distinct?: VolunteerScalarFieldEnum | VolunteerScalarFieldEnum[]
  }


  /**
   * Volunteer create
   */
  export type VolunteerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * The data needed to create a Volunteer.
     */
    data: XOR<VolunteerCreateInput, VolunteerUncheckedCreateInput>
  }


  /**
   * Volunteer createMany
   */
  export type VolunteerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Volunteers.
     */
    data: VolunteerCreateManyInput | VolunteerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Volunteer update
   */
  export type VolunteerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * The data needed to update a Volunteer.
     */
    data: XOR<VolunteerUpdateInput, VolunteerUncheckedUpdateInput>
    /**
     * Choose, which Volunteer to update.
     */
    where: VolunteerWhereUniqueInput
  }


  /**
   * Volunteer updateMany
   */
  export type VolunteerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Volunteers.
     */
    data: XOR<VolunteerUpdateManyMutationInput, VolunteerUncheckedUpdateManyInput>
    /**
     * Filter which Volunteers to update
     */
    where?: VolunteerWhereInput
  }


  /**
   * Volunteer upsert
   */
  export type VolunteerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * The filter to search for the Volunteer to update in case it exists.
     */
    where: VolunteerWhereUniqueInput
    /**
     * In case the Volunteer found by the `where` argument doesn't exist, create a new Volunteer with this data.
     */
    create: XOR<VolunteerCreateInput, VolunteerUncheckedCreateInput>
    /**
     * In case the Volunteer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VolunteerUpdateInput, VolunteerUncheckedUpdateInput>
  }


  /**
   * Volunteer delete
   */
  export type VolunteerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter which Volunteer to delete.
     */
    where: VolunteerWhereUniqueInput
  }


  /**
   * Volunteer deleteMany
   */
  export type VolunteerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Volunteers to delete
     */
    where?: VolunteerWhereInput
  }


  /**
   * Volunteer.Slots
   */
  export type Volunteer$SlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlotInclude<ExtArgs> | null
    where?: SlotWhereInput
    orderBy?: SlotOrderByWithRelationInput | SlotOrderByWithRelationInput[]
    cursor?: SlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SlotScalarFieldEnum | SlotScalarFieldEnum[]
  }


  /**
   * Volunteer.waitListedSlots
   */
  export type Volunteer$waitListedSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlotInclude<ExtArgs> | null
    where?: SlotWhereInput
    orderBy?: SlotOrderByWithRelationInput | SlotOrderByWithRelationInput[]
    cursor?: SlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SlotScalarFieldEnum | SlotScalarFieldEnum[]
  }


  /**
   * Volunteer without action
   */
  export type VolunteerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VolunteerInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SlotScalarFieldEnum: {
    id: 'id',
    description: 'description',
    time: 'time',
    endTime: 'endTime',
    location: 'location',
    maxParticipants: 'maxParticipants',
    waitListSize: 'waitListSize'
  };

  export type SlotScalarFieldEnum = (typeof SlotScalarFieldEnum)[keyof typeof SlotScalarFieldEnum]


  export const VolunteerScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    email: 'email',
    name: 'name'
  };

  export type VolunteerScalarFieldEnum = (typeof VolunteerScalarFieldEnum)[keyof typeof VolunteerScalarFieldEnum]


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


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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


  export type SlotWhereInput = {
    AND?: SlotWhereInput | SlotWhereInput[]
    OR?: SlotWhereInput[]
    NOT?: SlotWhereInput | SlotWhereInput[]
    id?: IntFilter<"Slot"> | number
    description?: StringFilter<"Slot"> | string
    time?: StringFilter<"Slot"> | string
    endTime?: StringFilter<"Slot"> | string
    location?: StringFilter<"Slot"> | string
    maxParticipants?: IntFilter<"Slot"> | number
    waitListSize?: IntFilter<"Slot"> | number
    waitList?: VolunteerListRelationFilter
    volunteers?: VolunteerListRelationFilter
  }

  export type SlotOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    time?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    maxParticipants?: SortOrder
    waitListSize?: SortOrder
    waitList?: VolunteerOrderByRelationAggregateInput
    volunteers?: VolunteerOrderByRelationAggregateInput
  }

  export type SlotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SlotWhereInput | SlotWhereInput[]
    OR?: SlotWhereInput[]
    NOT?: SlotWhereInput | SlotWhereInput[]
    description?: StringFilter<"Slot"> | string
    time?: StringFilter<"Slot"> | string
    endTime?: StringFilter<"Slot"> | string
    location?: StringFilter<"Slot"> | string
    maxParticipants?: IntFilter<"Slot"> | number
    waitListSize?: IntFilter<"Slot"> | number
    waitList?: VolunteerListRelationFilter
    volunteers?: VolunteerListRelationFilter
  }, "id">

  export type SlotOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    time?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    maxParticipants?: SortOrder
    waitListSize?: SortOrder
    _count?: SlotCountOrderByAggregateInput
    _avg?: SlotAvgOrderByAggregateInput
    _max?: SlotMaxOrderByAggregateInput
    _min?: SlotMinOrderByAggregateInput
    _sum?: SlotSumOrderByAggregateInput
  }

  export type SlotScalarWhereWithAggregatesInput = {
    AND?: SlotScalarWhereWithAggregatesInput | SlotScalarWhereWithAggregatesInput[]
    OR?: SlotScalarWhereWithAggregatesInput[]
    NOT?: SlotScalarWhereWithAggregatesInput | SlotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Slot"> | number
    description?: StringWithAggregatesFilter<"Slot"> | string
    time?: StringWithAggregatesFilter<"Slot"> | string
    endTime?: StringWithAggregatesFilter<"Slot"> | string
    location?: StringWithAggregatesFilter<"Slot"> | string
    maxParticipants?: IntWithAggregatesFilter<"Slot"> | number
    waitListSize?: IntWithAggregatesFilter<"Slot"> | number
  }

  export type VolunteerWhereInput = {
    AND?: VolunteerWhereInput | VolunteerWhereInput[]
    OR?: VolunteerWhereInput[]
    NOT?: VolunteerWhereInput | VolunteerWhereInput[]
    id?: IntFilter<"Volunteer"> | number
    clerkId?: StringFilter<"Volunteer"> | string
    email?: StringFilter<"Volunteer"> | string
    name?: StringFilter<"Volunteer"> | string
    Slots?: SlotListRelationFilter
    waitListedSlots?: SlotListRelationFilter
  }

  export type VolunteerOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    Slots?: SlotOrderByRelationAggregateInput
    waitListedSlots?: SlotOrderByRelationAggregateInput
  }

  export type VolunteerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    clerkId?: string
    AND?: VolunteerWhereInput | VolunteerWhereInput[]
    OR?: VolunteerWhereInput[]
    NOT?: VolunteerWhereInput | VolunteerWhereInput[]
    email?: StringFilter<"Volunteer"> | string
    name?: StringFilter<"Volunteer"> | string
    Slots?: SlotListRelationFilter
    waitListedSlots?: SlotListRelationFilter
  }, "id" | "clerkId">

  export type VolunteerOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    _count?: VolunteerCountOrderByAggregateInput
    _avg?: VolunteerAvgOrderByAggregateInput
    _max?: VolunteerMaxOrderByAggregateInput
    _min?: VolunteerMinOrderByAggregateInput
    _sum?: VolunteerSumOrderByAggregateInput
  }

  export type VolunteerScalarWhereWithAggregatesInput = {
    AND?: VolunteerScalarWhereWithAggregatesInput | VolunteerScalarWhereWithAggregatesInput[]
    OR?: VolunteerScalarWhereWithAggregatesInput[]
    NOT?: VolunteerScalarWhereWithAggregatesInput | VolunteerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Volunteer"> | number
    clerkId?: StringWithAggregatesFilter<"Volunteer"> | string
    email?: StringWithAggregatesFilter<"Volunteer"> | string
    name?: StringWithAggregatesFilter<"Volunteer"> | string
  }

  export type SlotCreateInput = {
    description: string
    time: string
    endTime: string
    location: string
    maxParticipants: number
    waitListSize: number
    waitList?: VolunteerCreateNestedManyWithoutWaitListedSlotsInput
    volunteers?: VolunteerCreateNestedManyWithoutSlotsInput
  }

  export type SlotUncheckedCreateInput = {
    id?: number
    description: string
    time: string
    endTime: string
    location: string
    maxParticipants: number
    waitListSize: number
    waitList?: VolunteerUncheckedCreateNestedManyWithoutWaitListedSlotsInput
    volunteers?: VolunteerUncheckedCreateNestedManyWithoutSlotsInput
  }

  export type SlotUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    waitListSize?: IntFieldUpdateOperationsInput | number
    waitList?: VolunteerUpdateManyWithoutWaitListedSlotsNestedInput
    volunteers?: VolunteerUpdateManyWithoutSlotsNestedInput
  }

  export type SlotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    waitListSize?: IntFieldUpdateOperationsInput | number
    waitList?: VolunteerUncheckedUpdateManyWithoutWaitListedSlotsNestedInput
    volunteers?: VolunteerUncheckedUpdateManyWithoutSlotsNestedInput
  }

  export type SlotCreateManyInput = {
    id?: number
    description: string
    time: string
    endTime: string
    location: string
    maxParticipants: number
    waitListSize: number
  }

  export type SlotUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    waitListSize?: IntFieldUpdateOperationsInput | number
  }

  export type SlotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    waitListSize?: IntFieldUpdateOperationsInput | number
  }

  export type VolunteerCreateInput = {
    clerkId: string
    email: string
    name: string
    Slots?: SlotCreateNestedManyWithoutVolunteersInput
    waitListedSlots?: SlotCreateNestedManyWithoutWaitListInput
  }

  export type VolunteerUncheckedCreateInput = {
    id?: number
    clerkId: string
    email: string
    name: string
    Slots?: SlotUncheckedCreateNestedManyWithoutVolunteersInput
    waitListedSlots?: SlotUncheckedCreateNestedManyWithoutWaitListInput
  }

  export type VolunteerUpdateInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Slots?: SlotUpdateManyWithoutVolunteersNestedInput
    waitListedSlots?: SlotUpdateManyWithoutWaitListNestedInput
  }

  export type VolunteerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Slots?: SlotUncheckedUpdateManyWithoutVolunteersNestedInput
    waitListedSlots?: SlotUncheckedUpdateManyWithoutWaitListNestedInput
  }

  export type VolunteerCreateManyInput = {
    id?: number
    clerkId: string
    email: string
    name: string
  }

  export type VolunteerUpdateManyMutationInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type VolunteerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
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

  export type VolunteerListRelationFilter = {
    every?: VolunteerWhereInput
    some?: VolunteerWhereInput
    none?: VolunteerWhereInput
  }

  export type VolunteerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SlotCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    time?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    maxParticipants?: SortOrder
    waitListSize?: SortOrder
  }

  export type SlotAvgOrderByAggregateInput = {
    id?: SortOrder
    maxParticipants?: SortOrder
    waitListSize?: SortOrder
  }

  export type SlotMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    time?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    maxParticipants?: SortOrder
    waitListSize?: SortOrder
  }

  export type SlotMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    time?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    maxParticipants?: SortOrder
    waitListSize?: SortOrder
  }

  export type SlotSumOrderByAggregateInput = {
    id?: SortOrder
    maxParticipants?: SortOrder
    waitListSize?: SortOrder
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

  export type SlotListRelationFilter = {
    every?: SlotWhereInput
    some?: SlotWhereInput
    none?: SlotWhereInput
  }

  export type SlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VolunteerCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type VolunteerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VolunteerMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type VolunteerMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type VolunteerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VolunteerCreateNestedManyWithoutWaitListedSlotsInput = {
    create?: XOR<VolunteerCreateWithoutWaitListedSlotsInput, VolunteerUncheckedCreateWithoutWaitListedSlotsInput> | VolunteerCreateWithoutWaitListedSlotsInput[] | VolunteerUncheckedCreateWithoutWaitListedSlotsInput[]
    connectOrCreate?: VolunteerCreateOrConnectWithoutWaitListedSlotsInput | VolunteerCreateOrConnectWithoutWaitListedSlotsInput[]
    connect?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
  }

  export type VolunteerCreateNestedManyWithoutSlotsInput = {
    create?: XOR<VolunteerCreateWithoutSlotsInput, VolunteerUncheckedCreateWithoutSlotsInput> | VolunteerCreateWithoutSlotsInput[] | VolunteerUncheckedCreateWithoutSlotsInput[]
    connectOrCreate?: VolunteerCreateOrConnectWithoutSlotsInput | VolunteerCreateOrConnectWithoutSlotsInput[]
    connect?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
  }

  export type VolunteerUncheckedCreateNestedManyWithoutWaitListedSlotsInput = {
    create?: XOR<VolunteerCreateWithoutWaitListedSlotsInput, VolunteerUncheckedCreateWithoutWaitListedSlotsInput> | VolunteerCreateWithoutWaitListedSlotsInput[] | VolunteerUncheckedCreateWithoutWaitListedSlotsInput[]
    connectOrCreate?: VolunteerCreateOrConnectWithoutWaitListedSlotsInput | VolunteerCreateOrConnectWithoutWaitListedSlotsInput[]
    connect?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
  }

  export type VolunteerUncheckedCreateNestedManyWithoutSlotsInput = {
    create?: XOR<VolunteerCreateWithoutSlotsInput, VolunteerUncheckedCreateWithoutSlotsInput> | VolunteerCreateWithoutSlotsInput[] | VolunteerUncheckedCreateWithoutSlotsInput[]
    connectOrCreate?: VolunteerCreateOrConnectWithoutSlotsInput | VolunteerCreateOrConnectWithoutSlotsInput[]
    connect?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VolunteerUpdateManyWithoutWaitListedSlotsNestedInput = {
    create?: XOR<VolunteerCreateWithoutWaitListedSlotsInput, VolunteerUncheckedCreateWithoutWaitListedSlotsInput> | VolunteerCreateWithoutWaitListedSlotsInput[] | VolunteerUncheckedCreateWithoutWaitListedSlotsInput[]
    connectOrCreate?: VolunteerCreateOrConnectWithoutWaitListedSlotsInput | VolunteerCreateOrConnectWithoutWaitListedSlotsInput[]
    upsert?: VolunteerUpsertWithWhereUniqueWithoutWaitListedSlotsInput | VolunteerUpsertWithWhereUniqueWithoutWaitListedSlotsInput[]
    set?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
    disconnect?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
    delete?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
    connect?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
    update?: VolunteerUpdateWithWhereUniqueWithoutWaitListedSlotsInput | VolunteerUpdateWithWhereUniqueWithoutWaitListedSlotsInput[]
    updateMany?: VolunteerUpdateManyWithWhereWithoutWaitListedSlotsInput | VolunteerUpdateManyWithWhereWithoutWaitListedSlotsInput[]
    deleteMany?: VolunteerScalarWhereInput | VolunteerScalarWhereInput[]
  }

  export type VolunteerUpdateManyWithoutSlotsNestedInput = {
    create?: XOR<VolunteerCreateWithoutSlotsInput, VolunteerUncheckedCreateWithoutSlotsInput> | VolunteerCreateWithoutSlotsInput[] | VolunteerUncheckedCreateWithoutSlotsInput[]
    connectOrCreate?: VolunteerCreateOrConnectWithoutSlotsInput | VolunteerCreateOrConnectWithoutSlotsInput[]
    upsert?: VolunteerUpsertWithWhereUniqueWithoutSlotsInput | VolunteerUpsertWithWhereUniqueWithoutSlotsInput[]
    set?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
    disconnect?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
    delete?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
    connect?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
    update?: VolunteerUpdateWithWhereUniqueWithoutSlotsInput | VolunteerUpdateWithWhereUniqueWithoutSlotsInput[]
    updateMany?: VolunteerUpdateManyWithWhereWithoutSlotsInput | VolunteerUpdateManyWithWhereWithoutSlotsInput[]
    deleteMany?: VolunteerScalarWhereInput | VolunteerScalarWhereInput[]
  }

  export type VolunteerUncheckedUpdateManyWithoutWaitListedSlotsNestedInput = {
    create?: XOR<VolunteerCreateWithoutWaitListedSlotsInput, VolunteerUncheckedCreateWithoutWaitListedSlotsInput> | VolunteerCreateWithoutWaitListedSlotsInput[] | VolunteerUncheckedCreateWithoutWaitListedSlotsInput[]
    connectOrCreate?: VolunteerCreateOrConnectWithoutWaitListedSlotsInput | VolunteerCreateOrConnectWithoutWaitListedSlotsInput[]
    upsert?: VolunteerUpsertWithWhereUniqueWithoutWaitListedSlotsInput | VolunteerUpsertWithWhereUniqueWithoutWaitListedSlotsInput[]
    set?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
    disconnect?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
    delete?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
    connect?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
    update?: VolunteerUpdateWithWhereUniqueWithoutWaitListedSlotsInput | VolunteerUpdateWithWhereUniqueWithoutWaitListedSlotsInput[]
    updateMany?: VolunteerUpdateManyWithWhereWithoutWaitListedSlotsInput | VolunteerUpdateManyWithWhereWithoutWaitListedSlotsInput[]
    deleteMany?: VolunteerScalarWhereInput | VolunteerScalarWhereInput[]
  }

  export type VolunteerUncheckedUpdateManyWithoutSlotsNestedInput = {
    create?: XOR<VolunteerCreateWithoutSlotsInput, VolunteerUncheckedCreateWithoutSlotsInput> | VolunteerCreateWithoutSlotsInput[] | VolunteerUncheckedCreateWithoutSlotsInput[]
    connectOrCreate?: VolunteerCreateOrConnectWithoutSlotsInput | VolunteerCreateOrConnectWithoutSlotsInput[]
    upsert?: VolunteerUpsertWithWhereUniqueWithoutSlotsInput | VolunteerUpsertWithWhereUniqueWithoutSlotsInput[]
    set?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
    disconnect?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
    delete?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
    connect?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
    update?: VolunteerUpdateWithWhereUniqueWithoutSlotsInput | VolunteerUpdateWithWhereUniqueWithoutSlotsInput[]
    updateMany?: VolunteerUpdateManyWithWhereWithoutSlotsInput | VolunteerUpdateManyWithWhereWithoutSlotsInput[]
    deleteMany?: VolunteerScalarWhereInput | VolunteerScalarWhereInput[]
  }

  export type SlotCreateNestedManyWithoutVolunteersInput = {
    create?: XOR<SlotCreateWithoutVolunteersInput, SlotUncheckedCreateWithoutVolunteersInput> | SlotCreateWithoutVolunteersInput[] | SlotUncheckedCreateWithoutVolunteersInput[]
    connectOrCreate?: SlotCreateOrConnectWithoutVolunteersInput | SlotCreateOrConnectWithoutVolunteersInput[]
    connect?: SlotWhereUniqueInput | SlotWhereUniqueInput[]
  }

  export type SlotCreateNestedManyWithoutWaitListInput = {
    create?: XOR<SlotCreateWithoutWaitListInput, SlotUncheckedCreateWithoutWaitListInput> | SlotCreateWithoutWaitListInput[] | SlotUncheckedCreateWithoutWaitListInput[]
    connectOrCreate?: SlotCreateOrConnectWithoutWaitListInput | SlotCreateOrConnectWithoutWaitListInput[]
    connect?: SlotWhereUniqueInput | SlotWhereUniqueInput[]
  }

  export type SlotUncheckedCreateNestedManyWithoutVolunteersInput = {
    create?: XOR<SlotCreateWithoutVolunteersInput, SlotUncheckedCreateWithoutVolunteersInput> | SlotCreateWithoutVolunteersInput[] | SlotUncheckedCreateWithoutVolunteersInput[]
    connectOrCreate?: SlotCreateOrConnectWithoutVolunteersInput | SlotCreateOrConnectWithoutVolunteersInput[]
    connect?: SlotWhereUniqueInput | SlotWhereUniqueInput[]
  }

  export type SlotUncheckedCreateNestedManyWithoutWaitListInput = {
    create?: XOR<SlotCreateWithoutWaitListInput, SlotUncheckedCreateWithoutWaitListInput> | SlotCreateWithoutWaitListInput[] | SlotUncheckedCreateWithoutWaitListInput[]
    connectOrCreate?: SlotCreateOrConnectWithoutWaitListInput | SlotCreateOrConnectWithoutWaitListInput[]
    connect?: SlotWhereUniqueInput | SlotWhereUniqueInput[]
  }

  export type SlotUpdateManyWithoutVolunteersNestedInput = {
    create?: XOR<SlotCreateWithoutVolunteersInput, SlotUncheckedCreateWithoutVolunteersInput> | SlotCreateWithoutVolunteersInput[] | SlotUncheckedCreateWithoutVolunteersInput[]
    connectOrCreate?: SlotCreateOrConnectWithoutVolunteersInput | SlotCreateOrConnectWithoutVolunteersInput[]
    upsert?: SlotUpsertWithWhereUniqueWithoutVolunteersInput | SlotUpsertWithWhereUniqueWithoutVolunteersInput[]
    set?: SlotWhereUniqueInput | SlotWhereUniqueInput[]
    disconnect?: SlotWhereUniqueInput | SlotWhereUniqueInput[]
    delete?: SlotWhereUniqueInput | SlotWhereUniqueInput[]
    connect?: SlotWhereUniqueInput | SlotWhereUniqueInput[]
    update?: SlotUpdateWithWhereUniqueWithoutVolunteersInput | SlotUpdateWithWhereUniqueWithoutVolunteersInput[]
    updateMany?: SlotUpdateManyWithWhereWithoutVolunteersInput | SlotUpdateManyWithWhereWithoutVolunteersInput[]
    deleteMany?: SlotScalarWhereInput | SlotScalarWhereInput[]
  }

  export type SlotUpdateManyWithoutWaitListNestedInput = {
    create?: XOR<SlotCreateWithoutWaitListInput, SlotUncheckedCreateWithoutWaitListInput> | SlotCreateWithoutWaitListInput[] | SlotUncheckedCreateWithoutWaitListInput[]
    connectOrCreate?: SlotCreateOrConnectWithoutWaitListInput | SlotCreateOrConnectWithoutWaitListInput[]
    upsert?: SlotUpsertWithWhereUniqueWithoutWaitListInput | SlotUpsertWithWhereUniqueWithoutWaitListInput[]
    set?: SlotWhereUniqueInput | SlotWhereUniqueInput[]
    disconnect?: SlotWhereUniqueInput | SlotWhereUniqueInput[]
    delete?: SlotWhereUniqueInput | SlotWhereUniqueInput[]
    connect?: SlotWhereUniqueInput | SlotWhereUniqueInput[]
    update?: SlotUpdateWithWhereUniqueWithoutWaitListInput | SlotUpdateWithWhereUniqueWithoutWaitListInput[]
    updateMany?: SlotUpdateManyWithWhereWithoutWaitListInput | SlotUpdateManyWithWhereWithoutWaitListInput[]
    deleteMany?: SlotScalarWhereInput | SlotScalarWhereInput[]
  }

  export type SlotUncheckedUpdateManyWithoutVolunteersNestedInput = {
    create?: XOR<SlotCreateWithoutVolunteersInput, SlotUncheckedCreateWithoutVolunteersInput> | SlotCreateWithoutVolunteersInput[] | SlotUncheckedCreateWithoutVolunteersInput[]
    connectOrCreate?: SlotCreateOrConnectWithoutVolunteersInput | SlotCreateOrConnectWithoutVolunteersInput[]
    upsert?: SlotUpsertWithWhereUniqueWithoutVolunteersInput | SlotUpsertWithWhereUniqueWithoutVolunteersInput[]
    set?: SlotWhereUniqueInput | SlotWhereUniqueInput[]
    disconnect?: SlotWhereUniqueInput | SlotWhereUniqueInput[]
    delete?: SlotWhereUniqueInput | SlotWhereUniqueInput[]
    connect?: SlotWhereUniqueInput | SlotWhereUniqueInput[]
    update?: SlotUpdateWithWhereUniqueWithoutVolunteersInput | SlotUpdateWithWhereUniqueWithoutVolunteersInput[]
    updateMany?: SlotUpdateManyWithWhereWithoutVolunteersInput | SlotUpdateManyWithWhereWithoutVolunteersInput[]
    deleteMany?: SlotScalarWhereInput | SlotScalarWhereInput[]
  }

  export type SlotUncheckedUpdateManyWithoutWaitListNestedInput = {
    create?: XOR<SlotCreateWithoutWaitListInput, SlotUncheckedCreateWithoutWaitListInput> | SlotCreateWithoutWaitListInput[] | SlotUncheckedCreateWithoutWaitListInput[]
    connectOrCreate?: SlotCreateOrConnectWithoutWaitListInput | SlotCreateOrConnectWithoutWaitListInput[]
    upsert?: SlotUpsertWithWhereUniqueWithoutWaitListInput | SlotUpsertWithWhereUniqueWithoutWaitListInput[]
    set?: SlotWhereUniqueInput | SlotWhereUniqueInput[]
    disconnect?: SlotWhereUniqueInput | SlotWhereUniqueInput[]
    delete?: SlotWhereUniqueInput | SlotWhereUniqueInput[]
    connect?: SlotWhereUniqueInput | SlotWhereUniqueInput[]
    update?: SlotUpdateWithWhereUniqueWithoutWaitListInput | SlotUpdateWithWhereUniqueWithoutWaitListInput[]
    updateMany?: SlotUpdateManyWithWhereWithoutWaitListInput | SlotUpdateManyWithWhereWithoutWaitListInput[]
    deleteMany?: SlotScalarWhereInput | SlotScalarWhereInput[]
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

  export type VolunteerCreateWithoutWaitListedSlotsInput = {
    clerkId: string
    email: string
    name: string
    Slots?: SlotCreateNestedManyWithoutVolunteersInput
  }

  export type VolunteerUncheckedCreateWithoutWaitListedSlotsInput = {
    id?: number
    clerkId: string
    email: string
    name: string
    Slots?: SlotUncheckedCreateNestedManyWithoutVolunteersInput
  }

  export type VolunteerCreateOrConnectWithoutWaitListedSlotsInput = {
    where: VolunteerWhereUniqueInput
    create: XOR<VolunteerCreateWithoutWaitListedSlotsInput, VolunteerUncheckedCreateWithoutWaitListedSlotsInput>
  }

  export type VolunteerCreateWithoutSlotsInput = {
    clerkId: string
    email: string
    name: string
    waitListedSlots?: SlotCreateNestedManyWithoutWaitListInput
  }

  export type VolunteerUncheckedCreateWithoutSlotsInput = {
    id?: number
    clerkId: string
    email: string
    name: string
    waitListedSlots?: SlotUncheckedCreateNestedManyWithoutWaitListInput
  }

  export type VolunteerCreateOrConnectWithoutSlotsInput = {
    where: VolunteerWhereUniqueInput
    create: XOR<VolunteerCreateWithoutSlotsInput, VolunteerUncheckedCreateWithoutSlotsInput>
  }

  export type VolunteerUpsertWithWhereUniqueWithoutWaitListedSlotsInput = {
    where: VolunteerWhereUniqueInput
    update: XOR<VolunteerUpdateWithoutWaitListedSlotsInput, VolunteerUncheckedUpdateWithoutWaitListedSlotsInput>
    create: XOR<VolunteerCreateWithoutWaitListedSlotsInput, VolunteerUncheckedCreateWithoutWaitListedSlotsInput>
  }

  export type VolunteerUpdateWithWhereUniqueWithoutWaitListedSlotsInput = {
    where: VolunteerWhereUniqueInput
    data: XOR<VolunteerUpdateWithoutWaitListedSlotsInput, VolunteerUncheckedUpdateWithoutWaitListedSlotsInput>
  }

  export type VolunteerUpdateManyWithWhereWithoutWaitListedSlotsInput = {
    where: VolunteerScalarWhereInput
    data: XOR<VolunteerUpdateManyMutationInput, VolunteerUncheckedUpdateManyWithoutWaitListedSlotsInput>
  }

  export type VolunteerScalarWhereInput = {
    AND?: VolunteerScalarWhereInput | VolunteerScalarWhereInput[]
    OR?: VolunteerScalarWhereInput[]
    NOT?: VolunteerScalarWhereInput | VolunteerScalarWhereInput[]
    id?: IntFilter<"Volunteer"> | number
    clerkId?: StringFilter<"Volunteer"> | string
    email?: StringFilter<"Volunteer"> | string
    name?: StringFilter<"Volunteer"> | string
  }

  export type VolunteerUpsertWithWhereUniqueWithoutSlotsInput = {
    where: VolunteerWhereUniqueInput
    update: XOR<VolunteerUpdateWithoutSlotsInput, VolunteerUncheckedUpdateWithoutSlotsInput>
    create: XOR<VolunteerCreateWithoutSlotsInput, VolunteerUncheckedCreateWithoutSlotsInput>
  }

  export type VolunteerUpdateWithWhereUniqueWithoutSlotsInput = {
    where: VolunteerWhereUniqueInput
    data: XOR<VolunteerUpdateWithoutSlotsInput, VolunteerUncheckedUpdateWithoutSlotsInput>
  }

  export type VolunteerUpdateManyWithWhereWithoutSlotsInput = {
    where: VolunteerScalarWhereInput
    data: XOR<VolunteerUpdateManyMutationInput, VolunteerUncheckedUpdateManyWithoutSlotsInput>
  }

  export type SlotCreateWithoutVolunteersInput = {
    description: string
    time: string
    endTime: string
    location: string
    maxParticipants: number
    waitListSize: number
    waitList?: VolunteerCreateNestedManyWithoutWaitListedSlotsInput
  }

  export type SlotUncheckedCreateWithoutVolunteersInput = {
    id?: number
    description: string
    time: string
    endTime: string
    location: string
    maxParticipants: number
    waitListSize: number
    waitList?: VolunteerUncheckedCreateNestedManyWithoutWaitListedSlotsInput
  }

  export type SlotCreateOrConnectWithoutVolunteersInput = {
    where: SlotWhereUniqueInput
    create: XOR<SlotCreateWithoutVolunteersInput, SlotUncheckedCreateWithoutVolunteersInput>
  }

  export type SlotCreateWithoutWaitListInput = {
    description: string
    time: string
    endTime: string
    location: string
    maxParticipants: number
    waitListSize: number
    volunteers?: VolunteerCreateNestedManyWithoutSlotsInput
  }

  export type SlotUncheckedCreateWithoutWaitListInput = {
    id?: number
    description: string
    time: string
    endTime: string
    location: string
    maxParticipants: number
    waitListSize: number
    volunteers?: VolunteerUncheckedCreateNestedManyWithoutSlotsInput
  }

  export type SlotCreateOrConnectWithoutWaitListInput = {
    where: SlotWhereUniqueInput
    create: XOR<SlotCreateWithoutWaitListInput, SlotUncheckedCreateWithoutWaitListInput>
  }

  export type SlotUpsertWithWhereUniqueWithoutVolunteersInput = {
    where: SlotWhereUniqueInput
    update: XOR<SlotUpdateWithoutVolunteersInput, SlotUncheckedUpdateWithoutVolunteersInput>
    create: XOR<SlotCreateWithoutVolunteersInput, SlotUncheckedCreateWithoutVolunteersInput>
  }

  export type SlotUpdateWithWhereUniqueWithoutVolunteersInput = {
    where: SlotWhereUniqueInput
    data: XOR<SlotUpdateWithoutVolunteersInput, SlotUncheckedUpdateWithoutVolunteersInput>
  }

  export type SlotUpdateManyWithWhereWithoutVolunteersInput = {
    where: SlotScalarWhereInput
    data: XOR<SlotUpdateManyMutationInput, SlotUncheckedUpdateManyWithoutVolunteersInput>
  }

  export type SlotScalarWhereInput = {
    AND?: SlotScalarWhereInput | SlotScalarWhereInput[]
    OR?: SlotScalarWhereInput[]
    NOT?: SlotScalarWhereInput | SlotScalarWhereInput[]
    id?: IntFilter<"Slot"> | number
    description?: StringFilter<"Slot"> | string
    time?: StringFilter<"Slot"> | string
    endTime?: StringFilter<"Slot"> | string
    location?: StringFilter<"Slot"> | string
    maxParticipants?: IntFilter<"Slot"> | number
    waitListSize?: IntFilter<"Slot"> | number
  }

  export type SlotUpsertWithWhereUniqueWithoutWaitListInput = {
    where: SlotWhereUniqueInput
    update: XOR<SlotUpdateWithoutWaitListInput, SlotUncheckedUpdateWithoutWaitListInput>
    create: XOR<SlotCreateWithoutWaitListInput, SlotUncheckedCreateWithoutWaitListInput>
  }

  export type SlotUpdateWithWhereUniqueWithoutWaitListInput = {
    where: SlotWhereUniqueInput
    data: XOR<SlotUpdateWithoutWaitListInput, SlotUncheckedUpdateWithoutWaitListInput>
  }

  export type SlotUpdateManyWithWhereWithoutWaitListInput = {
    where: SlotScalarWhereInput
    data: XOR<SlotUpdateManyMutationInput, SlotUncheckedUpdateManyWithoutWaitListInput>
  }

  export type VolunteerUpdateWithoutWaitListedSlotsInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Slots?: SlotUpdateManyWithoutVolunteersNestedInput
  }

  export type VolunteerUncheckedUpdateWithoutWaitListedSlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Slots?: SlotUncheckedUpdateManyWithoutVolunteersNestedInput
  }

  export type VolunteerUncheckedUpdateManyWithoutWaitListedSlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type VolunteerUpdateWithoutSlotsInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    waitListedSlots?: SlotUpdateManyWithoutWaitListNestedInput
  }

  export type VolunteerUncheckedUpdateWithoutSlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    waitListedSlots?: SlotUncheckedUpdateManyWithoutWaitListNestedInput
  }

  export type VolunteerUncheckedUpdateManyWithoutSlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SlotUpdateWithoutVolunteersInput = {
    description?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    waitListSize?: IntFieldUpdateOperationsInput | number
    waitList?: VolunteerUpdateManyWithoutWaitListedSlotsNestedInput
  }

  export type SlotUncheckedUpdateWithoutVolunteersInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    waitListSize?: IntFieldUpdateOperationsInput | number
    waitList?: VolunteerUncheckedUpdateManyWithoutWaitListedSlotsNestedInput
  }

  export type SlotUncheckedUpdateManyWithoutVolunteersInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    waitListSize?: IntFieldUpdateOperationsInput | number
  }

  export type SlotUpdateWithoutWaitListInput = {
    description?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    waitListSize?: IntFieldUpdateOperationsInput | number
    volunteers?: VolunteerUpdateManyWithoutSlotsNestedInput
  }

  export type SlotUncheckedUpdateWithoutWaitListInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    waitListSize?: IntFieldUpdateOperationsInput | number
    volunteers?: VolunteerUncheckedUpdateManyWithoutSlotsNestedInput
  }

  export type SlotUncheckedUpdateManyWithoutWaitListInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    waitListSize?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use SlotCountOutputTypeDefaultArgs instead
     */
    export type SlotCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SlotCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VolunteerCountOutputTypeDefaultArgs instead
     */
    export type VolunteerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VolunteerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SlotDefaultArgs instead
     */
    export type SlotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SlotDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VolunteerDefaultArgs instead
     */
    export type VolunteerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VolunteerDefaultArgs<ExtArgs>

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