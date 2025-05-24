/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Friend
 *
 */
export type Friend = $Result.DefaultSelection<Prisma.$FriendPayload>;
/**
 * Model FriendRequest
 *
 */
export type FriendRequest =
  $Result.DefaultSelection<Prisma.$FriendRequestPayload>;
/**
 * Model Block
 *
 */
export type Block = $Result.DefaultSelection<Prisma.$BlockPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const RequestStatus: {
    PENDING: 'PENDING';
    ACCEPTED: 'ACCEPTED';
    REJECTED: 'REJECTED';
  };

  export type RequestStatus =
    (typeof RequestStatus)[keyof typeof RequestStatus];
}

export type RequestStatus = $Enums.RequestStatus;

export const RequestStatus: typeof $Enums.RequestStatus;

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
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

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

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

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
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

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
   * `prisma.friend`: Exposes CRUD operations for the **Friend** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Friends
   * const friends = await prisma.friend.findMany()
   * ```
   */
  get friend(): Prisma.FriendDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friendRequest`: Exposes CRUD operations for the **FriendRequest** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more FriendRequests
   * const friendRequests = await prisma.friendRequest.findMany()
   * ```
   */
  get friendRequest(): Prisma.FriendRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.block`: Exposes CRUD operations for the **Block** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Blocks
   * const blocks = await prisma.block.findMany()
   * ```
   */
  get block(): Prisma.BlockDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: 'User';
    Friend: 'Friend';
    FriendRequest: 'FriendRequest';
    Block: 'Block';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: 'user' | 'friend' | 'friendRequest' | 'block';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Friend: {
        payload: Prisma.$FriendPayload<ExtArgs>;
        fields: Prisma.FriendFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.FriendFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FriendPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.FriendFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>;
          };
          findFirst: {
            args: Prisma.FriendFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FriendPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.FriendFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>;
          };
          findMany: {
            args: Prisma.FriendFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>[];
          };
          create: {
            args: Prisma.FriendCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>;
          };
          createMany: {
            args: Prisma.FriendCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.FriendCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>[];
          };
          delete: {
            args: Prisma.FriendDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>;
          };
          update: {
            args: Prisma.FriendUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>;
          };
          deleteMany: {
            args: Prisma.FriendDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.FriendUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.FriendUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>[];
          };
          upsert: {
            args: Prisma.FriendUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>;
          };
          aggregate: {
            args: Prisma.FriendAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFriend>;
          };
          groupBy: {
            args: Prisma.FriendGroupByArgs<ExtArgs>;
            result: $Utils.Optional<FriendGroupByOutputType>[];
          };
          count: {
            args: Prisma.FriendCountArgs<ExtArgs>;
            result: $Utils.Optional<FriendCountAggregateOutputType> | number;
          };
        };
      };
      FriendRequest: {
        payload: Prisma.$FriendRequestPayload<ExtArgs>;
        fields: Prisma.FriendRequestFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.FriendRequestFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.FriendRequestFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>;
          };
          findFirst: {
            args: Prisma.FriendRequestFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.FriendRequestFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>;
          };
          findMany: {
            args: Prisma.FriendRequestFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>[];
          };
          create: {
            args: Prisma.FriendRequestCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>;
          };
          createMany: {
            args: Prisma.FriendRequestCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.FriendRequestCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>[];
          };
          delete: {
            args: Prisma.FriendRequestDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>;
          };
          update: {
            args: Prisma.FriendRequestUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>;
          };
          deleteMany: {
            args: Prisma.FriendRequestDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.FriendRequestUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.FriendRequestUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>[];
          };
          upsert: {
            args: Prisma.FriendRequestUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>;
          };
          aggregate: {
            args: Prisma.FriendRequestAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFriendRequest>;
          };
          groupBy: {
            args: Prisma.FriendRequestGroupByArgs<ExtArgs>;
            result: $Utils.Optional<FriendRequestGroupByOutputType>[];
          };
          count: {
            args: Prisma.FriendRequestCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<FriendRequestCountAggregateOutputType>
              | number;
          };
        };
      };
      Block: {
        payload: Prisma.$BlockPayload<ExtArgs>;
        fields: Prisma.BlockFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.BlockFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BlockPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.BlockFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>;
          };
          findFirst: {
            args: Prisma.BlockFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BlockPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.BlockFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>;
          };
          findMany: {
            args: Prisma.BlockFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>[];
          };
          create: {
            args: Prisma.BlockCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>;
          };
          createMany: {
            args: Prisma.BlockCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.BlockCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>[];
          };
          delete: {
            args: Prisma.BlockDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>;
          };
          update: {
            args: Prisma.BlockUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>;
          };
          deleteMany: {
            args: Prisma.BlockDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.BlockUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.BlockUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>[];
          };
          upsert: {
            args: Prisma.BlockUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>;
          };
          aggregate: {
            args: Prisma.BlockAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBlock>;
          };
          groupBy: {
            args: Prisma.BlockGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BlockGroupByOutputType>[];
          };
          count: {
            args: Prisma.BlockCountArgs<ExtArgs>;
            result: $Utils.Optional<BlockCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
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
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    friend?: FriendOmit;
    friendRequest?: FriendRequestOmit;
    block?: BlockOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
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
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    friends: number;
    friendOf: number;
    friendRequestsSent: number;
    friendRequestsReceived: number;
    blockedUsers: number;
    blockedBy: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    friends?: boolean | UserCountOutputTypeCountFriendsArgs;
    friendOf?: boolean | UserCountOutputTypeCountFriendOfArgs;
    friendRequestsSent?:
      | boolean
      | UserCountOutputTypeCountFriendRequestsSentArgs;
    friendRequestsReceived?:
      | boolean
      | UserCountOutputTypeCountFriendRequestsReceivedArgs;
    blockedUsers?: boolean | UserCountOutputTypeCountBlockedUsersArgs;
    blockedBy?: boolean | UserCountOutputTypeCountBlockedByArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FriendWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendOfArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FriendWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendRequestsSentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FriendRequestWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendRequestsReceivedArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FriendRequestWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlockedUsersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BlockWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlockedByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BlockWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserAvgAggregateOutputType = {
    id: number | null;
  };

  export type UserSumAggregateOutputType = {
    id: number | null;
  };

  export type UserMinAggregateOutputType = {
    id: number | null;
    email: string | null;
    password: string | null;
    firstName: string | null;
    lastName: string | null;
    createdAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: number | null;
    email: string | null;
    password: string | null;
    firstName: string | null;
    lastName: string | null;
    createdAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    password: number;
    firstName: number;
    lastName: number;
    createdAt: number;
    _all: number;
  };

  export type UserAvgAggregateInputType = {
    id?: true;
  };

  export type UserSumAggregateInputType = {
    id?: true;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    firstName?: true;
    lastName?: true;
    createdAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    firstName?: true;
    lastName?: true;
    createdAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    firstName?: true;
    lastName?: true;
    createdAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      password?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      createdAt?: boolean;
      friends?: boolean | User$friendsArgs<ExtArgs>;
      friendOf?: boolean | User$friendOfArgs<ExtArgs>;
      friendRequestsSent?: boolean | User$friendRequestsSentArgs<ExtArgs>;
      friendRequestsReceived?:
        | boolean
        | User$friendRequestsReceivedArgs<ExtArgs>;
      blockedUsers?: boolean | User$blockedUsersArgs<ExtArgs>;
      blockedBy?: boolean | User$blockedByArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      password?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      createdAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      password?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      createdAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    password?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    createdAt?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'email' | 'password' | 'firstName' | 'lastName' | 'createdAt',
    ExtArgs['result']['user']
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    friends?: boolean | User$friendsArgs<ExtArgs>;
    friendOf?: boolean | User$friendOfArgs<ExtArgs>;
    friendRequestsSent?: boolean | User$friendRequestsSentArgs<ExtArgs>;
    friendRequestsReceived?: boolean | User$friendRequestsReceivedArgs<ExtArgs>;
    blockedUsers?: boolean | User$blockedUsersArgs<ExtArgs>;
    blockedBy?: boolean | User$blockedByArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User';
    objects: {
      friends: Prisma.$FriendPayload<ExtArgs>[];
      friendOf: Prisma.$FriendPayload<ExtArgs>[];
      friendRequestsSent: Prisma.$FriendRequestPayload<ExtArgs>[];
      friendRequestsReceived: Prisma.$FriendRequestPayload<ExtArgs>[];
      blockedUsers: Prisma.$BlockPayload<ExtArgs>[];
      blockedBy: Prisma.$BlockPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        createdAt: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
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
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

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
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

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
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

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
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

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
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
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
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    friends<T extends User$friendsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$friendsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$FriendPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    friendOf<T extends User$friendOfArgs<ExtArgs> = {}>(
      args?: Subset<T, User$friendOfArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$FriendPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    friendRequestsSent<T extends User$friendRequestsSentArgs<ExtArgs> = {}>(
      args?: Subset<T, User$friendRequestsSentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$FriendRequestPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    friendRequestsReceived<
      T extends User$friendRequestsReceivedArgs<ExtArgs> = {},
    >(
      args?: Subset<T, User$friendRequestsReceivedArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$FriendRequestPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    blockedUsers<T extends User$blockedUsersArgs<ExtArgs> = {}>(
      args?: Subset<T, User$blockedUsersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$BlockPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    blockedBy<T extends User$blockedByArgs<ExtArgs> = {}>(
      args?: Subset<T, User$blockedByArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$BlockPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'Int'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly password: FieldRef<'User', 'String'>;
    readonly firstName: FieldRef<'User', 'String'>;
    readonly lastName: FieldRef<'User', 'String'>;
    readonly createdAt: FieldRef<'User', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.friends
   */
  export type User$friendsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null;
    where?: FriendWhereInput;
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[];
    cursor?: FriendWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[];
  };

  /**
   * User.friendOf
   */
  export type User$friendOfArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null;
    where?: FriendWhereInput;
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[];
    cursor?: FriendWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[];
  };

  /**
   * User.friendRequestsSent
   */
  export type User$friendRequestsSentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null;
    where?: FriendRequestWhereInput;
    orderBy?:
      | FriendRequestOrderByWithRelationInput
      | FriendRequestOrderByWithRelationInput[];
    cursor?: FriendRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[];
  };

  /**
   * User.friendRequestsReceived
   */
  export type User$friendRequestsReceivedArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null;
    where?: FriendRequestWhereInput;
    orderBy?:
      | FriendRequestOrderByWithRelationInput
      | FriendRequestOrderByWithRelationInput[];
    cursor?: FriendRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[];
  };

  /**
   * User.blockedUsers
   */
  export type User$blockedUsersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null;
    where?: BlockWhereInput;
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[];
    cursor?: BlockWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[];
  };

  /**
   * User.blockedBy
   */
  export type User$blockedByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null;
    where?: BlockWhereInput;
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[];
    cursor?: BlockWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Friend
   */

  export type AggregateFriend = {
    _count: FriendCountAggregateOutputType | null;
    _avg: FriendAvgAggregateOutputType | null;
    _sum: FriendSumAggregateOutputType | null;
    _min: FriendMinAggregateOutputType | null;
    _max: FriendMaxAggregateOutputType | null;
  };

  export type FriendAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
    friendId: number | null;
  };

  export type FriendSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
    friendId: number | null;
  };

  export type FriendMinAggregateOutputType = {
    id: number | null;
    userId: number | null;
    friendId: number | null;
    createdAt: Date | null;
  };

  export type FriendMaxAggregateOutputType = {
    id: number | null;
    userId: number | null;
    friendId: number | null;
    createdAt: Date | null;
  };

  export type FriendCountAggregateOutputType = {
    id: number;
    userId: number;
    friendId: number;
    createdAt: number;
    _all: number;
  };

  export type FriendAvgAggregateInputType = {
    id?: true;
    userId?: true;
    friendId?: true;
  };

  export type FriendSumAggregateInputType = {
    id?: true;
    userId?: true;
    friendId?: true;
  };

  export type FriendMinAggregateInputType = {
    id?: true;
    userId?: true;
    friendId?: true;
    createdAt?: true;
  };

  export type FriendMaxAggregateInputType = {
    id?: true;
    userId?: true;
    friendId?: true;
    createdAt?: true;
  };

  export type FriendCountAggregateInputType = {
    id?: true;
    userId?: true;
    friendId?: true;
    createdAt?: true;
    _all?: true;
  };

  export type FriendAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Friend to aggregate.
     */
    where?: FriendWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: FriendWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Friends.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Friends
     **/
    _count?: true | FriendCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: FriendAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: FriendSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: FriendMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: FriendMaxAggregateInputType;
  };

  export type GetFriendAggregateType<T extends FriendAggregateArgs> = {
    [P in keyof T & keyof AggregateFriend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriend[P]>
      : GetScalarType<T[P], AggregateFriend[P]>;
  };

  export type FriendGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FriendWhereInput;
    orderBy?:
      | FriendOrderByWithAggregationInput
      | FriendOrderByWithAggregationInput[];
    by: FriendScalarFieldEnum[] | FriendScalarFieldEnum;
    having?: FriendScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FriendCountAggregateInputType | true;
    _avg?: FriendAvgAggregateInputType;
    _sum?: FriendSumAggregateInputType;
    _min?: FriendMinAggregateInputType;
    _max?: FriendMaxAggregateInputType;
  };

  export type FriendGroupByOutputType = {
    id: number;
    userId: number;
    friendId: number;
    createdAt: Date;
    _count: FriendCountAggregateOutputType | null;
    _avg: FriendAvgAggregateOutputType | null;
    _sum: FriendSumAggregateOutputType | null;
    _min: FriendMinAggregateOutputType | null;
    _max: FriendMaxAggregateOutputType | null;
  };

  type GetFriendGroupByPayload<T extends FriendGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<FriendGroupByOutputType, T['by']> & {
          [P in keyof T & keyof FriendGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendGroupByOutputType[P]>
            : GetScalarType<T[P], FriendGroupByOutputType[P]>;
        }
      >
    >;

  export type FriendSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      friendId?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      friend?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['friend']
  >;

  export type FriendSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      friendId?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      friend?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['friend']
  >;

  export type FriendSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      friendId?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      friend?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['friend']
  >;

  export type FriendSelectScalar = {
    id?: boolean;
    userId?: boolean;
    friendId?: boolean;
    createdAt?: boolean;
  };

  export type FriendOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'userId' | 'friendId' | 'createdAt',
    ExtArgs['result']['friend']
  >;
  export type FriendInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    friend?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type FriendIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    friend?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type FriendIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    friend?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $FriendPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Friend';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      friend: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        userId: number;
        friendId: number;
        createdAt: Date;
      },
      ExtArgs['result']['friend']
    >;
    composites: {};
  };

  type FriendGetPayload<
    S extends boolean | null | undefined | FriendDefaultArgs,
  > = $Result.GetResult<Prisma.$FriendPayload, S>;

  type FriendCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<FriendFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FriendCountAggregateInputType | true;
  };

  export interface FriendDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Friend'];
      meta: { name: 'Friend' };
    };
    /**
     * Find zero or one Friend that matches the filter.
     * @param {FriendFindUniqueArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendFindUniqueArgs>(
      args: SelectSubset<T, FriendFindUniqueArgs<ExtArgs>>,
    ): Prisma__FriendClient<
      $Result.GetResult<
        Prisma.$FriendPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Friend that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FriendFindUniqueOrThrowArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendFindUniqueOrThrowArgs>(
      args: SelectSubset<T, FriendFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__FriendClient<
      $Result.GetResult<
        Prisma.$FriendPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Friend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindFirstArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendFindFirstArgs>(
      args?: SelectSubset<T, FriendFindFirstArgs<ExtArgs>>,
    ): Prisma__FriendClient<
      $Result.GetResult<
        Prisma.$FriendPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Friend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindFirstOrThrowArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FriendFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__FriendClient<
      $Result.GetResult<
        Prisma.$FriendPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Friends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friends
     * const friends = await prisma.friend.findMany()
     *
     * // Get first 10 Friends
     * const friends = await prisma.friend.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const friendWithIdOnly = await prisma.friend.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FriendFindManyArgs>(
      args?: SelectSubset<T, FriendFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FriendPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Friend.
     * @param {FriendCreateArgs} args - Arguments to create a Friend.
     * @example
     * // Create one Friend
     * const Friend = await prisma.friend.create({
     *   data: {
     *     // ... data to create a Friend
     *   }
     * })
     *
     */
    create<T extends FriendCreateArgs>(
      args: SelectSubset<T, FriendCreateArgs<ExtArgs>>,
    ): Prisma__FriendClient<
      $Result.GetResult<
        Prisma.$FriendPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Friends.
     * @param {FriendCreateManyArgs} args - Arguments to create many Friends.
     * @example
     * // Create many Friends
     * const friend = await prisma.friend.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FriendCreateManyArgs>(
      args?: SelectSubset<T, FriendCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Friends and returns the data saved in the database.
     * @param {FriendCreateManyAndReturnArgs} args - Arguments to create many Friends.
     * @example
     * // Create many Friends
     * const friend = await prisma.friend.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Friends and only return the `id`
     * const friendWithIdOnly = await prisma.friend.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FriendCreateManyAndReturnArgs>(
      args?: SelectSubset<T, FriendCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FriendPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Friend.
     * @param {FriendDeleteArgs} args - Arguments to delete one Friend.
     * @example
     * // Delete one Friend
     * const Friend = await prisma.friend.delete({
     *   where: {
     *     // ... filter to delete one Friend
     *   }
     * })
     *
     */
    delete<T extends FriendDeleteArgs>(
      args: SelectSubset<T, FriendDeleteArgs<ExtArgs>>,
    ): Prisma__FriendClient<
      $Result.GetResult<
        Prisma.$FriendPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Friend.
     * @param {FriendUpdateArgs} args - Arguments to update one Friend.
     * @example
     * // Update one Friend
     * const friend = await prisma.friend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FriendUpdateArgs>(
      args: SelectSubset<T, FriendUpdateArgs<ExtArgs>>,
    ): Prisma__FriendClient<
      $Result.GetResult<
        Prisma.$FriendPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Friends.
     * @param {FriendDeleteManyArgs} args - Arguments to filter Friends to delete.
     * @example
     * // Delete a few Friends
     * const { count } = await prisma.friend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FriendDeleteManyArgs>(
      args?: SelectSubset<T, FriendDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friends
     * const friend = await prisma.friend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FriendUpdateManyArgs>(
      args: SelectSubset<T, FriendUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Friends and returns the data updated in the database.
     * @param {FriendUpdateManyAndReturnArgs} args - Arguments to update many Friends.
     * @example
     * // Update many Friends
     * const friend = await prisma.friend.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Friends and only return the `id`
     * const friendWithIdOnly = await prisma.friend.updateManyAndReturn({
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
    updateManyAndReturn<T extends FriendUpdateManyAndReturnArgs>(
      args: SelectSubset<T, FriendUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FriendPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Friend.
     * @param {FriendUpsertArgs} args - Arguments to update or create a Friend.
     * @example
     * // Update or create a Friend
     * const friend = await prisma.friend.upsert({
     *   create: {
     *     // ... data to create a Friend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friend we want to update
     *   }
     * })
     */
    upsert<T extends FriendUpsertArgs>(
      args: SelectSubset<T, FriendUpsertArgs<ExtArgs>>,
    ): Prisma__FriendClient<
      $Result.GetResult<
        Prisma.$FriendPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendCountArgs} args - Arguments to filter Friends to count.
     * @example
     * // Count the number of Friends
     * const count = await prisma.friend.count({
     *   where: {
     *     // ... the filter for the Friends we want to count
     *   }
     * })
     **/
    count<T extends FriendCountArgs>(
      args?: Subset<T, FriendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Friend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FriendAggregateArgs>(
      args: Subset<T, FriendAggregateArgs>,
    ): Prisma.PrismaPromise<GetFriendAggregateType<T>>;

    /**
     * Group by Friend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendGroupByArgs} args - Group by arguments.
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
      T extends FriendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendGroupByArgs['orderBy'] }
        : { orderBy?: FriendGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, FriendGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetFriendGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Friend model
     */
    readonly fields: FriendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Friend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    friend<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Friend model
   */
  interface FriendFieldRefs {
    readonly id: FieldRef<'Friend', 'Int'>;
    readonly userId: FieldRef<'Friend', 'Int'>;
    readonly friendId: FieldRef<'Friend', 'Int'>;
    readonly createdAt: FieldRef<'Friend', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Friend findUnique
   */
  export type FriendFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null;
    /**
     * Filter, which Friend to fetch.
     */
    where: FriendWhereUniqueInput;
  };

  /**
   * Friend findUniqueOrThrow
   */
  export type FriendFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null;
    /**
     * Filter, which Friend to fetch.
     */
    where: FriendWhereUniqueInput;
  };

  /**
   * Friend findFirst
   */
  export type FriendFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null;
    /**
     * Filter, which Friend to fetch.
     */
    where?: FriendWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Friends.
     */
    cursor?: FriendWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Friends.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Friends.
     */
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[];
  };

  /**
   * Friend findFirstOrThrow
   */
  export type FriendFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null;
    /**
     * Filter, which Friend to fetch.
     */
    where?: FriendWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Friends.
     */
    cursor?: FriendWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Friends.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Friends.
     */
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[];
  };

  /**
   * Friend findMany
   */
  export type FriendFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null;
    /**
     * Filter, which Friends to fetch.
     */
    where?: FriendWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Friends.
     */
    cursor?: FriendWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Friends.
     */
    skip?: number;
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[];
  };

  /**
   * Friend create
   */
  export type FriendCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null;
    /**
     * The data needed to create a Friend.
     */
    data: XOR<FriendCreateInput, FriendUncheckedCreateInput>;
  };

  /**
   * Friend createMany
   */
  export type FriendCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Friends.
     */
    data: FriendCreateManyInput | FriendCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Friend createManyAndReturn
   */
  export type FriendCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null;
    /**
     * The data used to create many Friends.
     */
    data: FriendCreateManyInput | FriendCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Friend update
   */
  export type FriendUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null;
    /**
     * The data needed to update a Friend.
     */
    data: XOR<FriendUpdateInput, FriendUncheckedUpdateInput>;
    /**
     * Choose, which Friend to update.
     */
    where: FriendWhereUniqueInput;
  };

  /**
   * Friend updateMany
   */
  export type FriendUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Friends.
     */
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyInput>;
    /**
     * Filter which Friends to update
     */
    where?: FriendWhereInput;
    /**
     * Limit how many Friends to update.
     */
    limit?: number;
  };

  /**
   * Friend updateManyAndReturn
   */
  export type FriendUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null;
    /**
     * The data used to update Friends.
     */
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyInput>;
    /**
     * Filter which Friends to update
     */
    where?: FriendWhereInput;
    /**
     * Limit how many Friends to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Friend upsert
   */
  export type FriendUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null;
    /**
     * The filter to search for the Friend to update in case it exists.
     */
    where: FriendWhereUniqueInput;
    /**
     * In case the Friend found by the `where` argument doesn't exist, create a new Friend with this data.
     */
    create: XOR<FriendCreateInput, FriendUncheckedCreateInput>;
    /**
     * In case the Friend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendUpdateInput, FriendUncheckedUpdateInput>;
  };

  /**
   * Friend delete
   */
  export type FriendDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null;
    /**
     * Filter which Friend to delete.
     */
    where: FriendWhereUniqueInput;
  };

  /**
   * Friend deleteMany
   */
  export type FriendDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Friends to delete
     */
    where?: FriendWhereInput;
    /**
     * Limit how many Friends to delete.
     */
    limit?: number;
  };

  /**
   * Friend without action
   */
  export type FriendDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null;
  };

  /**
   * Model FriendRequest
   */

  export type AggregateFriendRequest = {
    _count: FriendRequestCountAggregateOutputType | null;
    _avg: FriendRequestAvgAggregateOutputType | null;
    _sum: FriendRequestSumAggregateOutputType | null;
    _min: FriendRequestMinAggregateOutputType | null;
    _max: FriendRequestMaxAggregateOutputType | null;
  };

  export type FriendRequestAvgAggregateOutputType = {
    id: number | null;
    senderId: number | null;
    receiverId: number | null;
  };

  export type FriendRequestSumAggregateOutputType = {
    id: number | null;
    senderId: number | null;
    receiverId: number | null;
  };

  export type FriendRequestMinAggregateOutputType = {
    id: number | null;
    senderId: number | null;
    receiverId: number | null;
    status: $Enums.RequestStatus | null;
    createdAt: Date | null;
  };

  export type FriendRequestMaxAggregateOutputType = {
    id: number | null;
    senderId: number | null;
    receiverId: number | null;
    status: $Enums.RequestStatus | null;
    createdAt: Date | null;
  };

  export type FriendRequestCountAggregateOutputType = {
    id: number;
    senderId: number;
    receiverId: number;
    status: number;
    createdAt: number;
    _all: number;
  };

  export type FriendRequestAvgAggregateInputType = {
    id?: true;
    senderId?: true;
    receiverId?: true;
  };

  export type FriendRequestSumAggregateInputType = {
    id?: true;
    senderId?: true;
    receiverId?: true;
  };

  export type FriendRequestMinAggregateInputType = {
    id?: true;
    senderId?: true;
    receiverId?: true;
    status?: true;
    createdAt?: true;
  };

  export type FriendRequestMaxAggregateInputType = {
    id?: true;
    senderId?: true;
    receiverId?: true;
    status?: true;
    createdAt?: true;
  };

  export type FriendRequestCountAggregateInputType = {
    id?: true;
    senderId?: true;
    receiverId?: true;
    status?: true;
    createdAt?: true;
    _all?: true;
  };

  export type FriendRequestAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which FriendRequest to aggregate.
     */
    where?: FriendRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FriendRequests to fetch.
     */
    orderBy?:
      | FriendRequestOrderByWithRelationInput
      | FriendRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: FriendRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FriendRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FriendRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned FriendRequests
     **/
    _count?: true | FriendRequestCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: FriendRequestAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: FriendRequestSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: FriendRequestMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: FriendRequestMaxAggregateInputType;
  };

  export type GetFriendRequestAggregateType<
    T extends FriendRequestAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateFriendRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriendRequest[P]>
      : GetScalarType<T[P], AggregateFriendRequest[P]>;
  };

  export type FriendRequestGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FriendRequestWhereInput;
    orderBy?:
      | FriendRequestOrderByWithAggregationInput
      | FriendRequestOrderByWithAggregationInput[];
    by: FriendRequestScalarFieldEnum[] | FriendRequestScalarFieldEnum;
    having?: FriendRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FriendRequestCountAggregateInputType | true;
    _avg?: FriendRequestAvgAggregateInputType;
    _sum?: FriendRequestSumAggregateInputType;
    _min?: FriendRequestMinAggregateInputType;
    _max?: FriendRequestMaxAggregateInputType;
  };

  export type FriendRequestGroupByOutputType = {
    id: number;
    senderId: number;
    receiverId: number;
    status: $Enums.RequestStatus;
    createdAt: Date;
    _count: FriendRequestCountAggregateOutputType | null;
    _avg: FriendRequestAvgAggregateOutputType | null;
    _sum: FriendRequestSumAggregateOutputType | null;
    _min: FriendRequestMinAggregateOutputType | null;
    _max: FriendRequestMaxAggregateOutputType | null;
  };

  type GetFriendRequestGroupByPayload<T extends FriendRequestGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<FriendRequestGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof FriendRequestGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendRequestGroupByOutputType[P]>
            : GetScalarType<T[P], FriendRequestGroupByOutputType[P]>;
        }
      >
    >;

  export type FriendRequestSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      senderId?: boolean;
      receiverId?: boolean;
      status?: boolean;
      createdAt?: boolean;
      sender?: boolean | UserDefaultArgs<ExtArgs>;
      receiver?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['friendRequest']
  >;

  export type FriendRequestSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      senderId?: boolean;
      receiverId?: boolean;
      status?: boolean;
      createdAt?: boolean;
      sender?: boolean | UserDefaultArgs<ExtArgs>;
      receiver?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['friendRequest']
  >;

  export type FriendRequestSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      senderId?: boolean;
      receiverId?: boolean;
      status?: boolean;
      createdAt?: boolean;
      sender?: boolean | UserDefaultArgs<ExtArgs>;
      receiver?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['friendRequest']
  >;

  export type FriendRequestSelectScalar = {
    id?: boolean;
    senderId?: boolean;
    receiverId?: boolean;
    status?: boolean;
    createdAt?: boolean;
  };

  export type FriendRequestOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'senderId' | 'receiverId' | 'status' | 'createdAt',
    ExtArgs['result']['friendRequest']
  >;
  export type FriendRequestInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    sender?: boolean | UserDefaultArgs<ExtArgs>;
    receiver?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type FriendRequestIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    sender?: boolean | UserDefaultArgs<ExtArgs>;
    receiver?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type FriendRequestIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    sender?: boolean | UserDefaultArgs<ExtArgs>;
    receiver?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $FriendRequestPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'FriendRequest';
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>;
      receiver: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        senderId: number;
        receiverId: number;
        status: $Enums.RequestStatus;
        createdAt: Date;
      },
      ExtArgs['result']['friendRequest']
    >;
    composites: {};
  };

  type FriendRequestGetPayload<
    S extends boolean | null | undefined | FriendRequestDefaultArgs,
  > = $Result.GetResult<Prisma.$FriendRequestPayload, S>;

  type FriendRequestCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    FriendRequestFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: FriendRequestCountAggregateInputType | true;
  };

  export interface FriendRequestDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['FriendRequest'];
      meta: { name: 'FriendRequest' };
    };
    /**
     * Find zero or one FriendRequest that matches the filter.
     * @param {FriendRequestFindUniqueArgs} args - Arguments to find a FriendRequest
     * @example
     * // Get one FriendRequest
     * const friendRequest = await prisma.friendRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendRequestFindUniqueArgs>(
      args: SelectSubset<T, FriendRequestFindUniqueArgs<ExtArgs>>,
    ): Prisma__FriendRequestClient<
      $Result.GetResult<
        Prisma.$FriendRequestPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one FriendRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FriendRequestFindUniqueOrThrowArgs} args - Arguments to find a FriendRequest
     * @example
     * // Get one FriendRequest
     * const friendRequest = await prisma.friendRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendRequestFindUniqueOrThrowArgs>(
      args: SelectSubset<T, FriendRequestFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__FriendRequestClient<
      $Result.GetResult<
        Prisma.$FriendRequestPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first FriendRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestFindFirstArgs} args - Arguments to find a FriendRequest
     * @example
     * // Get one FriendRequest
     * const friendRequest = await prisma.friendRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendRequestFindFirstArgs>(
      args?: SelectSubset<T, FriendRequestFindFirstArgs<ExtArgs>>,
    ): Prisma__FriendRequestClient<
      $Result.GetResult<
        Prisma.$FriendRequestPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first FriendRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestFindFirstOrThrowArgs} args - Arguments to find a FriendRequest
     * @example
     * // Get one FriendRequest
     * const friendRequest = await prisma.friendRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendRequestFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FriendRequestFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__FriendRequestClient<
      $Result.GetResult<
        Prisma.$FriendRequestPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more FriendRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FriendRequests
     * const friendRequests = await prisma.friendRequest.findMany()
     *
     * // Get first 10 FriendRequests
     * const friendRequests = await prisma.friendRequest.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const friendRequestWithIdOnly = await prisma.friendRequest.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FriendRequestFindManyArgs>(
      args?: SelectSubset<T, FriendRequestFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FriendRequestPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a FriendRequest.
     * @param {FriendRequestCreateArgs} args - Arguments to create a FriendRequest.
     * @example
     * // Create one FriendRequest
     * const FriendRequest = await prisma.friendRequest.create({
     *   data: {
     *     // ... data to create a FriendRequest
     *   }
     * })
     *
     */
    create<T extends FriendRequestCreateArgs>(
      args: SelectSubset<T, FriendRequestCreateArgs<ExtArgs>>,
    ): Prisma__FriendRequestClient<
      $Result.GetResult<
        Prisma.$FriendRequestPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many FriendRequests.
     * @param {FriendRequestCreateManyArgs} args - Arguments to create many FriendRequests.
     * @example
     * // Create many FriendRequests
     * const friendRequest = await prisma.friendRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FriendRequestCreateManyArgs>(
      args?: SelectSubset<T, FriendRequestCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many FriendRequests and returns the data saved in the database.
     * @param {FriendRequestCreateManyAndReturnArgs} args - Arguments to create many FriendRequests.
     * @example
     * // Create many FriendRequests
     * const friendRequest = await prisma.friendRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many FriendRequests and only return the `id`
     * const friendRequestWithIdOnly = await prisma.friendRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FriendRequestCreateManyAndReturnArgs>(
      args?: SelectSubset<T, FriendRequestCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FriendRequestPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a FriendRequest.
     * @param {FriendRequestDeleteArgs} args - Arguments to delete one FriendRequest.
     * @example
     * // Delete one FriendRequest
     * const FriendRequest = await prisma.friendRequest.delete({
     *   where: {
     *     // ... filter to delete one FriendRequest
     *   }
     * })
     *
     */
    delete<T extends FriendRequestDeleteArgs>(
      args: SelectSubset<T, FriendRequestDeleteArgs<ExtArgs>>,
    ): Prisma__FriendRequestClient<
      $Result.GetResult<
        Prisma.$FriendRequestPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one FriendRequest.
     * @param {FriendRequestUpdateArgs} args - Arguments to update one FriendRequest.
     * @example
     * // Update one FriendRequest
     * const friendRequest = await prisma.friendRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FriendRequestUpdateArgs>(
      args: SelectSubset<T, FriendRequestUpdateArgs<ExtArgs>>,
    ): Prisma__FriendRequestClient<
      $Result.GetResult<
        Prisma.$FriendRequestPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more FriendRequests.
     * @param {FriendRequestDeleteManyArgs} args - Arguments to filter FriendRequests to delete.
     * @example
     * // Delete a few FriendRequests
     * const { count } = await prisma.friendRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FriendRequestDeleteManyArgs>(
      args?: SelectSubset<T, FriendRequestDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more FriendRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FriendRequests
     * const friendRequest = await prisma.friendRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FriendRequestUpdateManyArgs>(
      args: SelectSubset<T, FriendRequestUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more FriendRequests and returns the data updated in the database.
     * @param {FriendRequestUpdateManyAndReturnArgs} args - Arguments to update many FriendRequests.
     * @example
     * // Update many FriendRequests
     * const friendRequest = await prisma.friendRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more FriendRequests and only return the `id`
     * const friendRequestWithIdOnly = await prisma.friendRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends FriendRequestUpdateManyAndReturnArgs>(
      args: SelectSubset<T, FriendRequestUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FriendRequestPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one FriendRequest.
     * @param {FriendRequestUpsertArgs} args - Arguments to update or create a FriendRequest.
     * @example
     * // Update or create a FriendRequest
     * const friendRequest = await prisma.friendRequest.upsert({
     *   create: {
     *     // ... data to create a FriendRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FriendRequest we want to update
     *   }
     * })
     */
    upsert<T extends FriendRequestUpsertArgs>(
      args: SelectSubset<T, FriendRequestUpsertArgs<ExtArgs>>,
    ): Prisma__FriendRequestClient<
      $Result.GetResult<
        Prisma.$FriendRequestPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of FriendRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestCountArgs} args - Arguments to filter FriendRequests to count.
     * @example
     * // Count the number of FriendRequests
     * const count = await prisma.friendRequest.count({
     *   where: {
     *     // ... the filter for the FriendRequests we want to count
     *   }
     * })
     **/
    count<T extends FriendRequestCountArgs>(
      args?: Subset<T, FriendRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendRequestCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a FriendRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FriendRequestAggregateArgs>(
      args: Subset<T, FriendRequestAggregateArgs>,
    ): Prisma.PrismaPromise<GetFriendRequestAggregateType<T>>;

    /**
     * Group by FriendRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestGroupByArgs} args - Group by arguments.
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
      T extends FriendRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendRequestGroupByArgs['orderBy'] }
        : { orderBy?: FriendRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, FriendRequestGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetFriendRequestGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the FriendRequest model
     */
    readonly fields: FriendRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FriendRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendRequestClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the FriendRequest model
   */
  interface FriendRequestFieldRefs {
    readonly id: FieldRef<'FriendRequest', 'Int'>;
    readonly senderId: FieldRef<'FriendRequest', 'Int'>;
    readonly receiverId: FieldRef<'FriendRequest', 'Int'>;
    readonly status: FieldRef<'FriendRequest', 'RequestStatus'>;
    readonly createdAt: FieldRef<'FriendRequest', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * FriendRequest findUnique
   */
  export type FriendRequestFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null;
    /**
     * Filter, which FriendRequest to fetch.
     */
    where: FriendRequestWhereUniqueInput;
  };

  /**
   * FriendRequest findUniqueOrThrow
   */
  export type FriendRequestFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null;
    /**
     * Filter, which FriendRequest to fetch.
     */
    where: FriendRequestWhereUniqueInput;
  };

  /**
   * FriendRequest findFirst
   */
  export type FriendRequestFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null;
    /**
     * Filter, which FriendRequest to fetch.
     */
    where?: FriendRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FriendRequests to fetch.
     */
    orderBy?:
      | FriendRequestOrderByWithRelationInput
      | FriendRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FriendRequests.
     */
    cursor?: FriendRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FriendRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FriendRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FriendRequests.
     */
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[];
  };

  /**
   * FriendRequest findFirstOrThrow
   */
  export type FriendRequestFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null;
    /**
     * Filter, which FriendRequest to fetch.
     */
    where?: FriendRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FriendRequests to fetch.
     */
    orderBy?:
      | FriendRequestOrderByWithRelationInput
      | FriendRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FriendRequests.
     */
    cursor?: FriendRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FriendRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FriendRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FriendRequests.
     */
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[];
  };

  /**
   * FriendRequest findMany
   */
  export type FriendRequestFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null;
    /**
     * Filter, which FriendRequests to fetch.
     */
    where?: FriendRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FriendRequests to fetch.
     */
    orderBy?:
      | FriendRequestOrderByWithRelationInput
      | FriendRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing FriendRequests.
     */
    cursor?: FriendRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FriendRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FriendRequests.
     */
    skip?: number;
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[];
  };

  /**
   * FriendRequest create
   */
  export type FriendRequestCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null;
    /**
     * The data needed to create a FriendRequest.
     */
    data: XOR<FriendRequestCreateInput, FriendRequestUncheckedCreateInput>;
  };

  /**
   * FriendRequest createMany
   */
  export type FriendRequestCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many FriendRequests.
     */
    data: FriendRequestCreateManyInput | FriendRequestCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * FriendRequest createManyAndReturn
   */
  export type FriendRequestCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null;
    /**
     * The data used to create many FriendRequests.
     */
    data: FriendRequestCreateManyInput | FriendRequestCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * FriendRequest update
   */
  export type FriendRequestUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null;
    /**
     * The data needed to update a FriendRequest.
     */
    data: XOR<FriendRequestUpdateInput, FriendRequestUncheckedUpdateInput>;
    /**
     * Choose, which FriendRequest to update.
     */
    where: FriendRequestWhereUniqueInput;
  };

  /**
   * FriendRequest updateMany
   */
  export type FriendRequestUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update FriendRequests.
     */
    data: XOR<
      FriendRequestUpdateManyMutationInput,
      FriendRequestUncheckedUpdateManyInput
    >;
    /**
     * Filter which FriendRequests to update
     */
    where?: FriendRequestWhereInput;
    /**
     * Limit how many FriendRequests to update.
     */
    limit?: number;
  };

  /**
   * FriendRequest updateManyAndReturn
   */
  export type FriendRequestUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null;
    /**
     * The data used to update FriendRequests.
     */
    data: XOR<
      FriendRequestUpdateManyMutationInput,
      FriendRequestUncheckedUpdateManyInput
    >;
    /**
     * Filter which FriendRequests to update
     */
    where?: FriendRequestWhereInput;
    /**
     * Limit how many FriendRequests to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * FriendRequest upsert
   */
  export type FriendRequestUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null;
    /**
     * The filter to search for the FriendRequest to update in case it exists.
     */
    where: FriendRequestWhereUniqueInput;
    /**
     * In case the FriendRequest found by the `where` argument doesn't exist, create a new FriendRequest with this data.
     */
    create: XOR<FriendRequestCreateInput, FriendRequestUncheckedCreateInput>;
    /**
     * In case the FriendRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendRequestUpdateInput, FriendRequestUncheckedUpdateInput>;
  };

  /**
   * FriendRequest delete
   */
  export type FriendRequestDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null;
    /**
     * Filter which FriendRequest to delete.
     */
    where: FriendRequestWhereUniqueInput;
  };

  /**
   * FriendRequest deleteMany
   */
  export type FriendRequestDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which FriendRequests to delete
     */
    where?: FriendRequestWhereInput;
    /**
     * Limit how many FriendRequests to delete.
     */
    limit?: number;
  };

  /**
   * FriendRequest without action
   */
  export type FriendRequestDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null;
  };

  /**
   * Model Block
   */

  export type AggregateBlock = {
    _count: BlockCountAggregateOutputType | null;
    _avg: BlockAvgAggregateOutputType | null;
    _sum: BlockSumAggregateOutputType | null;
    _min: BlockMinAggregateOutputType | null;
    _max: BlockMaxAggregateOutputType | null;
  };

  export type BlockAvgAggregateOutputType = {
    id: number | null;
    blockerId: number | null;
    blockedId: number | null;
  };

  export type BlockSumAggregateOutputType = {
    id: number | null;
    blockerId: number | null;
    blockedId: number | null;
  };

  export type BlockMinAggregateOutputType = {
    id: number | null;
    blockerId: number | null;
    blockedId: number | null;
    createdAt: Date | null;
  };

  export type BlockMaxAggregateOutputType = {
    id: number | null;
    blockerId: number | null;
    blockedId: number | null;
    createdAt: Date | null;
  };

  export type BlockCountAggregateOutputType = {
    id: number;
    blockerId: number;
    blockedId: number;
    createdAt: number;
    _all: number;
  };

  export type BlockAvgAggregateInputType = {
    id?: true;
    blockerId?: true;
    blockedId?: true;
  };

  export type BlockSumAggregateInputType = {
    id?: true;
    blockerId?: true;
    blockedId?: true;
  };

  export type BlockMinAggregateInputType = {
    id?: true;
    blockerId?: true;
    blockedId?: true;
    createdAt?: true;
  };

  export type BlockMaxAggregateInputType = {
    id?: true;
    blockerId?: true;
    blockedId?: true;
    createdAt?: true;
  };

  export type BlockCountAggregateInputType = {
    id?: true;
    blockerId?: true;
    blockedId?: true;
    createdAt?: true;
    _all?: true;
  };

  export type BlockAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Block to aggregate.
     */
    where?: BlockWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: BlockWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Blocks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Blocks
     **/
    _count?: true | BlockCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: BlockAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: BlockSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BlockMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BlockMaxAggregateInputType;
  };

  export type GetBlockAggregateType<T extends BlockAggregateArgs> = {
    [P in keyof T & keyof AggregateBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlock[P]>
      : GetScalarType<T[P], AggregateBlock[P]>;
  };

  export type BlockGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BlockWhereInput;
    orderBy?:
      | BlockOrderByWithAggregationInput
      | BlockOrderByWithAggregationInput[];
    by: BlockScalarFieldEnum[] | BlockScalarFieldEnum;
    having?: BlockScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BlockCountAggregateInputType | true;
    _avg?: BlockAvgAggregateInputType;
    _sum?: BlockSumAggregateInputType;
    _min?: BlockMinAggregateInputType;
    _max?: BlockMaxAggregateInputType;
  };

  export type BlockGroupByOutputType = {
    id: number;
    blockerId: number;
    blockedId: number;
    createdAt: Date;
    _count: BlockCountAggregateOutputType | null;
    _avg: BlockAvgAggregateOutputType | null;
    _sum: BlockSumAggregateOutputType | null;
    _min: BlockMinAggregateOutputType | null;
    _max: BlockMaxAggregateOutputType | null;
  };

  type GetBlockGroupByPayload<T extends BlockGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<BlockGroupByOutputType, T['by']> & {
          [P in keyof T & keyof BlockGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockGroupByOutputType[P]>
            : GetScalarType<T[P], BlockGroupByOutputType[P]>;
        }
      >
    >;

  export type BlockSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      blockerId?: boolean;
      blockedId?: boolean;
      createdAt?: boolean;
      blocker?: boolean | UserDefaultArgs<ExtArgs>;
      blocked?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['block']
  >;

  export type BlockSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      blockerId?: boolean;
      blockedId?: boolean;
      createdAt?: boolean;
      blocker?: boolean | UserDefaultArgs<ExtArgs>;
      blocked?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['block']
  >;

  export type BlockSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      blockerId?: boolean;
      blockedId?: boolean;
      createdAt?: boolean;
      blocker?: boolean | UserDefaultArgs<ExtArgs>;
      blocked?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['block']
  >;

  export type BlockSelectScalar = {
    id?: boolean;
    blockerId?: boolean;
    blockedId?: boolean;
    createdAt?: boolean;
  };

  export type BlockOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'blockerId' | 'blockedId' | 'createdAt',
    ExtArgs['result']['block']
  >;
  export type BlockInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    blocker?: boolean | UserDefaultArgs<ExtArgs>;
    blocked?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type BlockIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    blocker?: boolean | UserDefaultArgs<ExtArgs>;
    blocked?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type BlockIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    blocker?: boolean | UserDefaultArgs<ExtArgs>;
    blocked?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $BlockPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Block';
    objects: {
      blocker: Prisma.$UserPayload<ExtArgs>;
      blocked: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        blockerId: number;
        blockedId: number;
        createdAt: Date;
      },
      ExtArgs['result']['block']
    >;
    composites: {};
  };

  type BlockGetPayload<
    S extends boolean | null | undefined | BlockDefaultArgs,
  > = $Result.GetResult<Prisma.$BlockPayload, S>;

  type BlockCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<BlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BlockCountAggregateInputType | true;
  };

  export interface BlockDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Block'];
      meta: { name: 'Block' };
    };
    /**
     * Find zero or one Block that matches the filter.
     * @param {BlockFindUniqueArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlockFindUniqueArgs>(
      args: SelectSubset<T, BlockFindUniqueArgs<ExtArgs>>,
    ): Prisma__BlockClient<
      $Result.GetResult<
        Prisma.$BlockPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Block that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlockFindUniqueOrThrowArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlockFindUniqueOrThrowArgs>(
      args: SelectSubset<T, BlockFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__BlockClient<
      $Result.GetResult<
        Prisma.$BlockPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Block that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindFirstArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlockFindFirstArgs>(
      args?: SelectSubset<T, BlockFindFirstArgs<ExtArgs>>,
    ): Prisma__BlockClient<
      $Result.GetResult<
        Prisma.$BlockPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Block that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindFirstOrThrowArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlockFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BlockFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__BlockClient<
      $Result.GetResult<
        Prisma.$BlockPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Blocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blocks
     * const blocks = await prisma.block.findMany()
     *
     * // Get first 10 Blocks
     * const blocks = await prisma.block.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const blockWithIdOnly = await prisma.block.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BlockFindManyArgs>(
      args?: SelectSubset<T, BlockFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BlockPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Block.
     * @param {BlockCreateArgs} args - Arguments to create a Block.
     * @example
     * // Create one Block
     * const Block = await prisma.block.create({
     *   data: {
     *     // ... data to create a Block
     *   }
     * })
     *
     */
    create<T extends BlockCreateArgs>(
      args: SelectSubset<T, BlockCreateArgs<ExtArgs>>,
    ): Prisma__BlockClient<
      $Result.GetResult<
        Prisma.$BlockPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Blocks.
     * @param {BlockCreateManyArgs} args - Arguments to create many Blocks.
     * @example
     * // Create many Blocks
     * const block = await prisma.block.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BlockCreateManyArgs>(
      args?: SelectSubset<T, BlockCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Blocks and returns the data saved in the database.
     * @param {BlockCreateManyAndReturnArgs} args - Arguments to create many Blocks.
     * @example
     * // Create many Blocks
     * const block = await prisma.block.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Blocks and only return the `id`
     * const blockWithIdOnly = await prisma.block.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BlockCreateManyAndReturnArgs>(
      args?: SelectSubset<T, BlockCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BlockPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Block.
     * @param {BlockDeleteArgs} args - Arguments to delete one Block.
     * @example
     * // Delete one Block
     * const Block = await prisma.block.delete({
     *   where: {
     *     // ... filter to delete one Block
     *   }
     * })
     *
     */
    delete<T extends BlockDeleteArgs>(
      args: SelectSubset<T, BlockDeleteArgs<ExtArgs>>,
    ): Prisma__BlockClient<
      $Result.GetResult<
        Prisma.$BlockPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Block.
     * @param {BlockUpdateArgs} args - Arguments to update one Block.
     * @example
     * // Update one Block
     * const block = await prisma.block.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BlockUpdateArgs>(
      args: SelectSubset<T, BlockUpdateArgs<ExtArgs>>,
    ): Prisma__BlockClient<
      $Result.GetResult<
        Prisma.$BlockPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Blocks.
     * @param {BlockDeleteManyArgs} args - Arguments to filter Blocks to delete.
     * @example
     * // Delete a few Blocks
     * const { count } = await prisma.block.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BlockDeleteManyArgs>(
      args?: SelectSubset<T, BlockDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blocks
     * const block = await prisma.block.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BlockUpdateManyArgs>(
      args: SelectSubset<T, BlockUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Blocks and returns the data updated in the database.
     * @param {BlockUpdateManyAndReturnArgs} args - Arguments to update many Blocks.
     * @example
     * // Update many Blocks
     * const block = await prisma.block.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Blocks and only return the `id`
     * const blockWithIdOnly = await prisma.block.updateManyAndReturn({
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
    updateManyAndReturn<T extends BlockUpdateManyAndReturnArgs>(
      args: SelectSubset<T, BlockUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BlockPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Block.
     * @param {BlockUpsertArgs} args - Arguments to update or create a Block.
     * @example
     * // Update or create a Block
     * const block = await prisma.block.upsert({
     *   create: {
     *     // ... data to create a Block
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Block we want to update
     *   }
     * })
     */
    upsert<T extends BlockUpsertArgs>(
      args: SelectSubset<T, BlockUpsertArgs<ExtArgs>>,
    ): Prisma__BlockClient<
      $Result.GetResult<
        Prisma.$BlockPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockCountArgs} args - Arguments to filter Blocks to count.
     * @example
     * // Count the number of Blocks
     * const count = await prisma.block.count({
     *   where: {
     *     // ... the filter for the Blocks we want to count
     *   }
     * })
     **/
    count<T extends BlockCountArgs>(
      args?: Subset<T, BlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Block.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlockAggregateArgs>(
      args: Subset<T, BlockAggregateArgs>,
    ): Prisma.PrismaPromise<GetBlockAggregateType<T>>;

    /**
     * Group by Block.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockGroupByArgs} args - Group by arguments.
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
      T extends BlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockGroupByArgs['orderBy'] }
        : { orderBy?: BlockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, BlockGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetBlockGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Block model
     */
    readonly fields: BlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Block.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    blocker<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    blocked<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Block model
   */
  interface BlockFieldRefs {
    readonly id: FieldRef<'Block', 'Int'>;
    readonly blockerId: FieldRef<'Block', 'Int'>;
    readonly blockedId: FieldRef<'Block', 'Int'>;
    readonly createdAt: FieldRef<'Block', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Block findUnique
   */
  export type BlockFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null;
    /**
     * Filter, which Block to fetch.
     */
    where: BlockWhereUniqueInput;
  };

  /**
   * Block findUniqueOrThrow
   */
  export type BlockFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null;
    /**
     * Filter, which Block to fetch.
     */
    where: BlockWhereUniqueInput;
  };

  /**
   * Block findFirst
   */
  export type BlockFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null;
    /**
     * Filter, which Block to fetch.
     */
    where?: BlockWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Blocks.
     */
    cursor?: BlockWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Blocks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[];
  };

  /**
   * Block findFirstOrThrow
   */
  export type BlockFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null;
    /**
     * Filter, which Block to fetch.
     */
    where?: BlockWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Blocks.
     */
    cursor?: BlockWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Blocks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[];
  };

  /**
   * Block findMany
   */
  export type BlockFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null;
    /**
     * Filter, which Blocks to fetch.
     */
    where?: BlockWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Blocks.
     */
    cursor?: BlockWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Blocks.
     */
    skip?: number;
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[];
  };

  /**
   * Block create
   */
  export type BlockCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null;
    /**
     * The data needed to create a Block.
     */
    data: XOR<BlockCreateInput, BlockUncheckedCreateInput>;
  };

  /**
   * Block createMany
   */
  export type BlockCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Blocks.
     */
    data: BlockCreateManyInput | BlockCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Block createManyAndReturn
   */
  export type BlockCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null;
    /**
     * The data used to create many Blocks.
     */
    data: BlockCreateManyInput | BlockCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Block update
   */
  export type BlockUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null;
    /**
     * The data needed to update a Block.
     */
    data: XOR<BlockUpdateInput, BlockUncheckedUpdateInput>;
    /**
     * Choose, which Block to update.
     */
    where: BlockWhereUniqueInput;
  };

  /**
   * Block updateMany
   */
  export type BlockUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Blocks.
     */
    data: XOR<BlockUpdateManyMutationInput, BlockUncheckedUpdateManyInput>;
    /**
     * Filter which Blocks to update
     */
    where?: BlockWhereInput;
    /**
     * Limit how many Blocks to update.
     */
    limit?: number;
  };

  /**
   * Block updateManyAndReturn
   */
  export type BlockUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null;
    /**
     * The data used to update Blocks.
     */
    data: XOR<BlockUpdateManyMutationInput, BlockUncheckedUpdateManyInput>;
    /**
     * Filter which Blocks to update
     */
    where?: BlockWhereInput;
    /**
     * Limit how many Blocks to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Block upsert
   */
  export type BlockUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null;
    /**
     * The filter to search for the Block to update in case it exists.
     */
    where: BlockWhereUniqueInput;
    /**
     * In case the Block found by the `where` argument doesn't exist, create a new Block with this data.
     */
    create: XOR<BlockCreateInput, BlockUncheckedCreateInput>;
    /**
     * In case the Block was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockUpdateInput, BlockUncheckedUpdateInput>;
  };

  /**
   * Block delete
   */
  export type BlockDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null;
    /**
     * Filter which Block to delete.
     */
    where: BlockWhereUniqueInput;
  };

  /**
   * Block deleteMany
   */
  export type BlockDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Blocks to delete
     */
    where?: BlockWhereInput;
    /**
     * Limit how many Blocks to delete.
     */
    limit?: number;
  };

  /**
   * Block without action
   */
  export type BlockDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    password: 'password';
    firstName: 'firstName';
    lastName: 'lastName';
    createdAt: 'createdAt';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const FriendScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    friendId: 'friendId';
    createdAt: 'createdAt';
  };

  export type FriendScalarFieldEnum =
    (typeof FriendScalarFieldEnum)[keyof typeof FriendScalarFieldEnum];

  export const FriendRequestScalarFieldEnum: {
    id: 'id';
    senderId: 'senderId';
    receiverId: 'receiverId';
    status: 'status';
    createdAt: 'createdAt';
  };

  export type FriendRequestScalarFieldEnum =
    (typeof FriendRequestScalarFieldEnum)[keyof typeof FriendRequestScalarFieldEnum];

  export const BlockScalarFieldEnum: {
    id: 'id';
    blockerId: 'blockerId';
    blockedId: 'blockedId';
    createdAt: 'createdAt';
  };

  export type BlockScalarFieldEnum =
    (typeof BlockScalarFieldEnum)[keyof typeof BlockScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'RequestStatus'
  >;

  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'RequestStatus[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: IntFilter<'User'> | number;
    email?: StringFilter<'User'> | string;
    password?: StringFilter<'User'> | string;
    firstName?: StringFilter<'User'> | string;
    lastName?: StringFilter<'User'> | string;
    createdAt?: DateTimeFilter<'User'> | Date | string;
    friends?: FriendListRelationFilter;
    friendOf?: FriendListRelationFilter;
    friendRequestsSent?: FriendRequestListRelationFilter;
    friendRequestsReceived?: FriendRequestListRelationFilter;
    blockedUsers?: BlockListRelationFilter;
    blockedBy?: BlockListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    createdAt?: SortOrder;
    friends?: FriendOrderByRelationAggregateInput;
    friendOf?: FriendOrderByRelationAggregateInput;
    friendRequestsSent?: FriendRequestOrderByRelationAggregateInput;
    friendRequestsReceived?: FriendRequestOrderByRelationAggregateInput;
    blockedUsers?: BlockOrderByRelationAggregateInput;
    blockedBy?: BlockOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      password?: StringFilter<'User'> | string;
      firstName?: StringFilter<'User'> | string;
      lastName?: StringFilter<'User'> | string;
      createdAt?: DateTimeFilter<'User'> | Date | string;
      friends?: FriendListRelationFilter;
      friendOf?: FriendListRelationFilter;
      friendRequestsSent?: FriendRequestListRelationFilter;
      friendRequestsReceived?: FriendRequestListRelationFilter;
      blockedUsers?: BlockListRelationFilter;
      blockedBy?: BlockListRelationFilter;
    },
    'id' | 'email'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    createdAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _avg?: UserAvgOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
    _sum?: UserSumOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'User'> | number;
    email?: StringWithAggregatesFilter<'User'> | string;
    password?: StringWithAggregatesFilter<'User'> | string;
    firstName?: StringWithAggregatesFilter<'User'> | string;
    lastName?: StringWithAggregatesFilter<'User'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
  };

  export type FriendWhereInput = {
    AND?: FriendWhereInput | FriendWhereInput[];
    OR?: FriendWhereInput[];
    NOT?: FriendWhereInput | FriendWhereInput[];
    id?: IntFilter<'Friend'> | number;
    userId?: IntFilter<'Friend'> | number;
    friendId?: IntFilter<'Friend'> | number;
    createdAt?: DateTimeFilter<'Friend'> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    friend?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type FriendOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    friendId?: SortOrder;
    createdAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
    friend?: UserOrderByWithRelationInput;
  };

  export type FriendWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      userId_friendId?: FriendUserIdFriendIdCompoundUniqueInput;
      AND?: FriendWhereInput | FriendWhereInput[];
      OR?: FriendWhereInput[];
      NOT?: FriendWhereInput | FriendWhereInput[];
      userId?: IntFilter<'Friend'> | number;
      friendId?: IntFilter<'Friend'> | number;
      createdAt?: DateTimeFilter<'Friend'> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      friend?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id' | 'userId_friendId'
  >;

  export type FriendOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    friendId?: SortOrder;
    createdAt?: SortOrder;
    _count?: FriendCountOrderByAggregateInput;
    _avg?: FriendAvgOrderByAggregateInput;
    _max?: FriendMaxOrderByAggregateInput;
    _min?: FriendMinOrderByAggregateInput;
    _sum?: FriendSumOrderByAggregateInput;
  };

  export type FriendScalarWhereWithAggregatesInput = {
    AND?:
      | FriendScalarWhereWithAggregatesInput
      | FriendScalarWhereWithAggregatesInput[];
    OR?: FriendScalarWhereWithAggregatesInput[];
    NOT?:
      | FriendScalarWhereWithAggregatesInput
      | FriendScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Friend'> | number;
    userId?: IntWithAggregatesFilter<'Friend'> | number;
    friendId?: IntWithAggregatesFilter<'Friend'> | number;
    createdAt?: DateTimeWithAggregatesFilter<'Friend'> | Date | string;
  };

  export type FriendRequestWhereInput = {
    AND?: FriendRequestWhereInput | FriendRequestWhereInput[];
    OR?: FriendRequestWhereInput[];
    NOT?: FriendRequestWhereInput | FriendRequestWhereInput[];
    id?: IntFilter<'FriendRequest'> | number;
    senderId?: IntFilter<'FriendRequest'> | number;
    receiverId?: IntFilter<'FriendRequest'> | number;
    status?: EnumRequestStatusFilter<'FriendRequest'> | $Enums.RequestStatus;
    createdAt?: DateTimeFilter<'FriendRequest'> | Date | string;
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>;
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type FriendRequestOrderByWithRelationInput = {
    id?: SortOrder;
    senderId?: SortOrder;
    receiverId?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    sender?: UserOrderByWithRelationInput;
    receiver?: UserOrderByWithRelationInput;
  };

  export type FriendRequestWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      senderId_receiverId?: FriendRequestSenderIdReceiverIdCompoundUniqueInput;
      AND?: FriendRequestWhereInput | FriendRequestWhereInput[];
      OR?: FriendRequestWhereInput[];
      NOT?: FriendRequestWhereInput | FriendRequestWhereInput[];
      senderId?: IntFilter<'FriendRequest'> | number;
      receiverId?: IntFilter<'FriendRequest'> | number;
      status?: EnumRequestStatusFilter<'FriendRequest'> | $Enums.RequestStatus;
      createdAt?: DateTimeFilter<'FriendRequest'> | Date | string;
      sender?: XOR<UserScalarRelationFilter, UserWhereInput>;
      receiver?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id' | 'senderId_receiverId'
  >;

  export type FriendRequestOrderByWithAggregationInput = {
    id?: SortOrder;
    senderId?: SortOrder;
    receiverId?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    _count?: FriendRequestCountOrderByAggregateInput;
    _avg?: FriendRequestAvgOrderByAggregateInput;
    _max?: FriendRequestMaxOrderByAggregateInput;
    _min?: FriendRequestMinOrderByAggregateInput;
    _sum?: FriendRequestSumOrderByAggregateInput;
  };

  export type FriendRequestScalarWhereWithAggregatesInput = {
    AND?:
      | FriendRequestScalarWhereWithAggregatesInput
      | FriendRequestScalarWhereWithAggregatesInput[];
    OR?: FriendRequestScalarWhereWithAggregatesInput[];
    NOT?:
      | FriendRequestScalarWhereWithAggregatesInput
      | FriendRequestScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'FriendRequest'> | number;
    senderId?: IntWithAggregatesFilter<'FriendRequest'> | number;
    receiverId?: IntWithAggregatesFilter<'FriendRequest'> | number;
    status?:
      | EnumRequestStatusWithAggregatesFilter<'FriendRequest'>
      | $Enums.RequestStatus;
    createdAt?: DateTimeWithAggregatesFilter<'FriendRequest'> | Date | string;
  };

  export type BlockWhereInput = {
    AND?: BlockWhereInput | BlockWhereInput[];
    OR?: BlockWhereInput[];
    NOT?: BlockWhereInput | BlockWhereInput[];
    id?: IntFilter<'Block'> | number;
    blockerId?: IntFilter<'Block'> | number;
    blockedId?: IntFilter<'Block'> | number;
    createdAt?: DateTimeFilter<'Block'> | Date | string;
    blocker?: XOR<UserScalarRelationFilter, UserWhereInput>;
    blocked?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type BlockOrderByWithRelationInput = {
    id?: SortOrder;
    blockerId?: SortOrder;
    blockedId?: SortOrder;
    createdAt?: SortOrder;
    blocker?: UserOrderByWithRelationInput;
    blocked?: UserOrderByWithRelationInput;
  };

  export type BlockWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      blockerId_blockedId?: BlockBlockerIdBlockedIdCompoundUniqueInput;
      AND?: BlockWhereInput | BlockWhereInput[];
      OR?: BlockWhereInput[];
      NOT?: BlockWhereInput | BlockWhereInput[];
      blockerId?: IntFilter<'Block'> | number;
      blockedId?: IntFilter<'Block'> | number;
      createdAt?: DateTimeFilter<'Block'> | Date | string;
      blocker?: XOR<UserScalarRelationFilter, UserWhereInput>;
      blocked?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id' | 'blockerId_blockedId'
  >;

  export type BlockOrderByWithAggregationInput = {
    id?: SortOrder;
    blockerId?: SortOrder;
    blockedId?: SortOrder;
    createdAt?: SortOrder;
    _count?: BlockCountOrderByAggregateInput;
    _avg?: BlockAvgOrderByAggregateInput;
    _max?: BlockMaxOrderByAggregateInput;
    _min?: BlockMinOrderByAggregateInput;
    _sum?: BlockSumOrderByAggregateInput;
  };

  export type BlockScalarWhereWithAggregatesInput = {
    AND?:
      | BlockScalarWhereWithAggregatesInput
      | BlockScalarWhereWithAggregatesInput[];
    OR?: BlockScalarWhereWithAggregatesInput[];
    NOT?:
      | BlockScalarWhereWithAggregatesInput
      | BlockScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Block'> | number;
    blockerId?: IntWithAggregatesFilter<'Block'> | number;
    blockedId?: IntWithAggregatesFilter<'Block'> | number;
    createdAt?: DateTimeWithAggregatesFilter<'Block'> | Date | string;
  };

  export type UserCreateInput = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt?: Date | string;
    friends?: FriendCreateNestedManyWithoutUserInput;
    friendOf?: FriendCreateNestedManyWithoutFriendInput;
    friendRequestsSent?: FriendRequestCreateNestedManyWithoutSenderInput;
    friendRequestsReceived?: FriendRequestCreateNestedManyWithoutReceiverInput;
    blockedUsers?: BlockCreateNestedManyWithoutBlockerInput;
    blockedBy?: BlockCreateNestedManyWithoutBlockedInput;
  };

  export type UserUncheckedCreateInput = {
    id?: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt?: Date | string;
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput;
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput;
    friendRequestsSent?: FriendRequestUncheckedCreateNestedManyWithoutSenderInput;
    friendRequestsReceived?: FriendRequestUncheckedCreateNestedManyWithoutReceiverInput;
    blockedUsers?: BlockUncheckedCreateNestedManyWithoutBlockerInput;
    blockedBy?: BlockUncheckedCreateNestedManyWithoutBlockedInput;
  };

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    friends?: FriendUpdateManyWithoutUserNestedInput;
    friendOf?: FriendUpdateManyWithoutFriendNestedInput;
    friendRequestsSent?: FriendRequestUpdateManyWithoutSenderNestedInput;
    friendRequestsReceived?: FriendRequestUpdateManyWithoutReceiverNestedInput;
    blockedUsers?: BlockUpdateManyWithoutBlockerNestedInput;
    blockedBy?: BlockUpdateManyWithoutBlockedNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput;
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput;
    friendRequestsSent?: FriendRequestUncheckedUpdateManyWithoutSenderNestedInput;
    friendRequestsReceived?: FriendRequestUncheckedUpdateManyWithoutReceiverNestedInput;
    blockedUsers?: BlockUncheckedUpdateManyWithoutBlockerNestedInput;
    blockedBy?: BlockUncheckedUpdateManyWithoutBlockedNestedInput;
  };

  export type UserCreateManyInput = {
    id?: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FriendCreateInput = {
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutFriendsInput;
    friend: UserCreateNestedOneWithoutFriendOfInput;
  };

  export type FriendUncheckedCreateInput = {
    id?: number;
    userId: number;
    friendId: number;
    createdAt?: Date | string;
  };

  export type FriendUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutFriendsNestedInput;
    friend?: UserUpdateOneRequiredWithoutFriendOfNestedInput;
  };

  export type FriendUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    friendId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FriendCreateManyInput = {
    id?: number;
    userId: number;
    friendId: number;
    createdAt?: Date | string;
  };

  export type FriendUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FriendUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    friendId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FriendRequestCreateInput = {
    status?: $Enums.RequestStatus;
    createdAt?: Date | string;
    sender: UserCreateNestedOneWithoutFriendRequestsSentInput;
    receiver: UserCreateNestedOneWithoutFriendRequestsReceivedInput;
  };

  export type FriendRequestUncheckedCreateInput = {
    id?: number;
    senderId: number;
    receiverId: number;
    status?: $Enums.RequestStatus;
    createdAt?: Date | string;
  };

  export type FriendRequestUpdateInput = {
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    sender?: UserUpdateOneRequiredWithoutFriendRequestsSentNestedInput;
    receiver?: UserUpdateOneRequiredWithoutFriendRequestsReceivedNestedInput;
  };

  export type FriendRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    senderId?: IntFieldUpdateOperationsInput | number;
    receiverId?: IntFieldUpdateOperationsInput | number;
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FriendRequestCreateManyInput = {
    id?: number;
    senderId: number;
    receiverId: number;
    status?: $Enums.RequestStatus;
    createdAt?: Date | string;
  };

  export type FriendRequestUpdateManyMutationInput = {
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FriendRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    senderId?: IntFieldUpdateOperationsInput | number;
    receiverId?: IntFieldUpdateOperationsInput | number;
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BlockCreateInput = {
    createdAt?: Date | string;
    blocker: UserCreateNestedOneWithoutBlockedUsersInput;
    blocked: UserCreateNestedOneWithoutBlockedByInput;
  };

  export type BlockUncheckedCreateInput = {
    id?: number;
    blockerId: number;
    blockedId: number;
    createdAt?: Date | string;
  };

  export type BlockUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    blocker?: UserUpdateOneRequiredWithoutBlockedUsersNestedInput;
    blocked?: UserUpdateOneRequiredWithoutBlockedByNestedInput;
  };

  export type BlockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    blockerId?: IntFieldUpdateOperationsInput | number;
    blockedId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BlockCreateManyInput = {
    id?: number;
    blockerId: number;
    blockedId: number;
    createdAt?: Date | string;
  };

  export type BlockUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BlockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    blockerId?: IntFieldUpdateOperationsInput | number;
    blockedId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type FriendListRelationFilter = {
    every?: FriendWhereInput;
    some?: FriendWhereInput;
    none?: FriendWhereInput;
  };

  export type FriendRequestListRelationFilter = {
    every?: FriendRequestWhereInput;
    some?: FriendRequestWhereInput;
    none?: FriendRequestWhereInput;
  };

  export type BlockListRelationFilter = {
    every?: BlockWhereInput;
    some?: BlockWhereInput;
    none?: BlockWhereInput;
  };

  export type FriendOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type FriendRequestOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type BlockOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    createdAt?: SortOrder;
  };

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    createdAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    createdAt?: SortOrder;
  };

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type FriendUserIdFriendIdCompoundUniqueInput = {
    userId: number;
    friendId: number;
  };

  export type FriendCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    friendId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type FriendAvgOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    friendId?: SortOrder;
  };

  export type FriendMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    friendId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type FriendMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    friendId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type FriendSumOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    friendId?: SortOrder;
  };

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.RequestStatus
      | EnumRequestStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.RequestStatus[]
      | ListEnumRequestStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.RequestStatus[]
      | ListEnumRequestStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus;
  };

  export type FriendRequestSenderIdReceiverIdCompoundUniqueInput = {
    senderId: number;
    receiverId: number;
  };

  export type FriendRequestCountOrderByAggregateInput = {
    id?: SortOrder;
    senderId?: SortOrder;
    receiverId?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
  };

  export type FriendRequestAvgOrderByAggregateInput = {
    id?: SortOrder;
    senderId?: SortOrder;
    receiverId?: SortOrder;
  };

  export type FriendRequestMaxOrderByAggregateInput = {
    id?: SortOrder;
    senderId?: SortOrder;
    receiverId?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
  };

  export type FriendRequestMinOrderByAggregateInput = {
    id?: SortOrder;
    senderId?: SortOrder;
    receiverId?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
  };

  export type FriendRequestSumOrderByAggregateInput = {
    id?: SortOrder;
    senderId?: SortOrder;
    receiverId?: SortOrder;
  };

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.RequestStatus
      | EnumRequestStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.RequestStatus[]
      | ListEnumRequestStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.RequestStatus[]
      | ListEnumRequestStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.RequestStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>;
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>;
  };

  export type BlockBlockerIdBlockedIdCompoundUniqueInput = {
    blockerId: number;
    blockedId: number;
  };

  export type BlockCountOrderByAggregateInput = {
    id?: SortOrder;
    blockerId?: SortOrder;
    blockedId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type BlockAvgOrderByAggregateInput = {
    id?: SortOrder;
    blockerId?: SortOrder;
    blockedId?: SortOrder;
  };

  export type BlockMaxOrderByAggregateInput = {
    id?: SortOrder;
    blockerId?: SortOrder;
    blockedId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type BlockMinOrderByAggregateInput = {
    id?: SortOrder;
    blockerId?: SortOrder;
    blockedId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type BlockSumOrderByAggregateInput = {
    id?: SortOrder;
    blockerId?: SortOrder;
    blockedId?: SortOrder;
  };

  export type FriendCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput>
      | FriendCreateWithoutUserInput[]
      | FriendUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | FriendCreateOrConnectWithoutUserInput
      | FriendCreateOrConnectWithoutUserInput[];
    createMany?: FriendCreateManyUserInputEnvelope;
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[];
  };

  export type FriendCreateNestedManyWithoutFriendInput = {
    create?:
      | XOR<
          FriendCreateWithoutFriendInput,
          FriendUncheckedCreateWithoutFriendInput
        >
      | FriendCreateWithoutFriendInput[]
      | FriendUncheckedCreateWithoutFriendInput[];
    connectOrCreate?:
      | FriendCreateOrConnectWithoutFriendInput
      | FriendCreateOrConnectWithoutFriendInput[];
    createMany?: FriendCreateManyFriendInputEnvelope;
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[];
  };

  export type FriendRequestCreateNestedManyWithoutSenderInput = {
    create?:
      | XOR<
          FriendRequestCreateWithoutSenderInput,
          FriendRequestUncheckedCreateWithoutSenderInput
        >
      | FriendRequestCreateWithoutSenderInput[]
      | FriendRequestUncheckedCreateWithoutSenderInput[];
    connectOrCreate?:
      | FriendRequestCreateOrConnectWithoutSenderInput
      | FriendRequestCreateOrConnectWithoutSenderInput[];
    createMany?: FriendRequestCreateManySenderInputEnvelope;
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[];
  };

  export type FriendRequestCreateNestedManyWithoutReceiverInput = {
    create?:
      | XOR<
          FriendRequestCreateWithoutReceiverInput,
          FriendRequestUncheckedCreateWithoutReceiverInput
        >
      | FriendRequestCreateWithoutReceiverInput[]
      | FriendRequestUncheckedCreateWithoutReceiverInput[];
    connectOrCreate?:
      | FriendRequestCreateOrConnectWithoutReceiverInput
      | FriendRequestCreateOrConnectWithoutReceiverInput[];
    createMany?: FriendRequestCreateManyReceiverInputEnvelope;
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[];
  };

  export type BlockCreateNestedManyWithoutBlockerInput = {
    create?:
      | XOR<
          BlockCreateWithoutBlockerInput,
          BlockUncheckedCreateWithoutBlockerInput
        >
      | BlockCreateWithoutBlockerInput[]
      | BlockUncheckedCreateWithoutBlockerInput[];
    connectOrCreate?:
      | BlockCreateOrConnectWithoutBlockerInput
      | BlockCreateOrConnectWithoutBlockerInput[];
    createMany?: BlockCreateManyBlockerInputEnvelope;
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
  };

  export type BlockCreateNestedManyWithoutBlockedInput = {
    create?:
      | XOR<
          BlockCreateWithoutBlockedInput,
          BlockUncheckedCreateWithoutBlockedInput
        >
      | BlockCreateWithoutBlockedInput[]
      | BlockUncheckedCreateWithoutBlockedInput[];
    connectOrCreate?:
      | BlockCreateOrConnectWithoutBlockedInput
      | BlockCreateOrConnectWithoutBlockedInput[];
    createMany?: BlockCreateManyBlockedInputEnvelope;
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
  };

  export type FriendUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput>
      | FriendCreateWithoutUserInput[]
      | FriendUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | FriendCreateOrConnectWithoutUserInput
      | FriendCreateOrConnectWithoutUserInput[];
    createMany?: FriendCreateManyUserInputEnvelope;
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[];
  };

  export type FriendUncheckedCreateNestedManyWithoutFriendInput = {
    create?:
      | XOR<
          FriendCreateWithoutFriendInput,
          FriendUncheckedCreateWithoutFriendInput
        >
      | FriendCreateWithoutFriendInput[]
      | FriendUncheckedCreateWithoutFriendInput[];
    connectOrCreate?:
      | FriendCreateOrConnectWithoutFriendInput
      | FriendCreateOrConnectWithoutFriendInput[];
    createMany?: FriendCreateManyFriendInputEnvelope;
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[];
  };

  export type FriendRequestUncheckedCreateNestedManyWithoutSenderInput = {
    create?:
      | XOR<
          FriendRequestCreateWithoutSenderInput,
          FriendRequestUncheckedCreateWithoutSenderInput
        >
      | FriendRequestCreateWithoutSenderInput[]
      | FriendRequestUncheckedCreateWithoutSenderInput[];
    connectOrCreate?:
      | FriendRequestCreateOrConnectWithoutSenderInput
      | FriendRequestCreateOrConnectWithoutSenderInput[];
    createMany?: FriendRequestCreateManySenderInputEnvelope;
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[];
  };

  export type FriendRequestUncheckedCreateNestedManyWithoutReceiverInput = {
    create?:
      | XOR<
          FriendRequestCreateWithoutReceiverInput,
          FriendRequestUncheckedCreateWithoutReceiverInput
        >
      | FriendRequestCreateWithoutReceiverInput[]
      | FriendRequestUncheckedCreateWithoutReceiverInput[];
    connectOrCreate?:
      | FriendRequestCreateOrConnectWithoutReceiverInput
      | FriendRequestCreateOrConnectWithoutReceiverInput[];
    createMany?: FriendRequestCreateManyReceiverInputEnvelope;
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[];
  };

  export type BlockUncheckedCreateNestedManyWithoutBlockerInput = {
    create?:
      | XOR<
          BlockCreateWithoutBlockerInput,
          BlockUncheckedCreateWithoutBlockerInput
        >
      | BlockCreateWithoutBlockerInput[]
      | BlockUncheckedCreateWithoutBlockerInput[];
    connectOrCreate?:
      | BlockCreateOrConnectWithoutBlockerInput
      | BlockCreateOrConnectWithoutBlockerInput[];
    createMany?: BlockCreateManyBlockerInputEnvelope;
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
  };

  export type BlockUncheckedCreateNestedManyWithoutBlockedInput = {
    create?:
      | XOR<
          BlockCreateWithoutBlockedInput,
          BlockUncheckedCreateWithoutBlockedInput
        >
      | BlockCreateWithoutBlockedInput[]
      | BlockUncheckedCreateWithoutBlockedInput[];
    connectOrCreate?:
      | BlockCreateOrConnectWithoutBlockedInput
      | BlockCreateOrConnectWithoutBlockedInput[];
    createMany?: BlockCreateManyBlockedInputEnvelope;
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type FriendUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput>
      | FriendCreateWithoutUserInput[]
      | FriendUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | FriendCreateOrConnectWithoutUserInput
      | FriendCreateOrConnectWithoutUserInput[];
    upsert?:
      | FriendUpsertWithWhereUniqueWithoutUserInput
      | FriendUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: FriendCreateManyUserInputEnvelope;
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[];
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[];
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[];
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[];
    update?:
      | FriendUpdateWithWhereUniqueWithoutUserInput
      | FriendUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | FriendUpdateManyWithWhereWithoutUserInput
      | FriendUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[];
  };

  export type FriendUpdateManyWithoutFriendNestedInput = {
    create?:
      | XOR<
          FriendCreateWithoutFriendInput,
          FriendUncheckedCreateWithoutFriendInput
        >
      | FriendCreateWithoutFriendInput[]
      | FriendUncheckedCreateWithoutFriendInput[];
    connectOrCreate?:
      | FriendCreateOrConnectWithoutFriendInput
      | FriendCreateOrConnectWithoutFriendInput[];
    upsert?:
      | FriendUpsertWithWhereUniqueWithoutFriendInput
      | FriendUpsertWithWhereUniqueWithoutFriendInput[];
    createMany?: FriendCreateManyFriendInputEnvelope;
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[];
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[];
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[];
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[];
    update?:
      | FriendUpdateWithWhereUniqueWithoutFriendInput
      | FriendUpdateWithWhereUniqueWithoutFriendInput[];
    updateMany?:
      | FriendUpdateManyWithWhereWithoutFriendInput
      | FriendUpdateManyWithWhereWithoutFriendInput[];
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[];
  };

  export type FriendRequestUpdateManyWithoutSenderNestedInput = {
    create?:
      | XOR<
          FriendRequestCreateWithoutSenderInput,
          FriendRequestUncheckedCreateWithoutSenderInput
        >
      | FriendRequestCreateWithoutSenderInput[]
      | FriendRequestUncheckedCreateWithoutSenderInput[];
    connectOrCreate?:
      | FriendRequestCreateOrConnectWithoutSenderInput
      | FriendRequestCreateOrConnectWithoutSenderInput[];
    upsert?:
      | FriendRequestUpsertWithWhereUniqueWithoutSenderInput
      | FriendRequestUpsertWithWhereUniqueWithoutSenderInput[];
    createMany?: FriendRequestCreateManySenderInputEnvelope;
    set?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[];
    disconnect?:
      | FriendRequestWhereUniqueInput
      | FriendRequestWhereUniqueInput[];
    delete?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[];
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[];
    update?:
      | FriendRequestUpdateWithWhereUniqueWithoutSenderInput
      | FriendRequestUpdateWithWhereUniqueWithoutSenderInput[];
    updateMany?:
      | FriendRequestUpdateManyWithWhereWithoutSenderInput
      | FriendRequestUpdateManyWithWhereWithoutSenderInput[];
    deleteMany?:
      | FriendRequestScalarWhereInput
      | FriendRequestScalarWhereInput[];
  };

  export type FriendRequestUpdateManyWithoutReceiverNestedInput = {
    create?:
      | XOR<
          FriendRequestCreateWithoutReceiverInput,
          FriendRequestUncheckedCreateWithoutReceiverInput
        >
      | FriendRequestCreateWithoutReceiverInput[]
      | FriendRequestUncheckedCreateWithoutReceiverInput[];
    connectOrCreate?:
      | FriendRequestCreateOrConnectWithoutReceiverInput
      | FriendRequestCreateOrConnectWithoutReceiverInput[];
    upsert?:
      | FriendRequestUpsertWithWhereUniqueWithoutReceiverInput
      | FriendRequestUpsertWithWhereUniqueWithoutReceiverInput[];
    createMany?: FriendRequestCreateManyReceiverInputEnvelope;
    set?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[];
    disconnect?:
      | FriendRequestWhereUniqueInput
      | FriendRequestWhereUniqueInput[];
    delete?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[];
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[];
    update?:
      | FriendRequestUpdateWithWhereUniqueWithoutReceiverInput
      | FriendRequestUpdateWithWhereUniqueWithoutReceiverInput[];
    updateMany?:
      | FriendRequestUpdateManyWithWhereWithoutReceiverInput
      | FriendRequestUpdateManyWithWhereWithoutReceiverInput[];
    deleteMany?:
      | FriendRequestScalarWhereInput
      | FriendRequestScalarWhereInput[];
  };

  export type BlockUpdateManyWithoutBlockerNestedInput = {
    create?:
      | XOR<
          BlockCreateWithoutBlockerInput,
          BlockUncheckedCreateWithoutBlockerInput
        >
      | BlockCreateWithoutBlockerInput[]
      | BlockUncheckedCreateWithoutBlockerInput[];
    connectOrCreate?:
      | BlockCreateOrConnectWithoutBlockerInput
      | BlockCreateOrConnectWithoutBlockerInput[];
    upsert?:
      | BlockUpsertWithWhereUniqueWithoutBlockerInput
      | BlockUpsertWithWhereUniqueWithoutBlockerInput[];
    createMany?: BlockCreateManyBlockerInputEnvelope;
    set?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
    disconnect?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
    delete?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
    update?:
      | BlockUpdateWithWhereUniqueWithoutBlockerInput
      | BlockUpdateWithWhereUniqueWithoutBlockerInput[];
    updateMany?:
      | BlockUpdateManyWithWhereWithoutBlockerInput
      | BlockUpdateManyWithWhereWithoutBlockerInput[];
    deleteMany?: BlockScalarWhereInput | BlockScalarWhereInput[];
  };

  export type BlockUpdateManyWithoutBlockedNestedInput = {
    create?:
      | XOR<
          BlockCreateWithoutBlockedInput,
          BlockUncheckedCreateWithoutBlockedInput
        >
      | BlockCreateWithoutBlockedInput[]
      | BlockUncheckedCreateWithoutBlockedInput[];
    connectOrCreate?:
      | BlockCreateOrConnectWithoutBlockedInput
      | BlockCreateOrConnectWithoutBlockedInput[];
    upsert?:
      | BlockUpsertWithWhereUniqueWithoutBlockedInput
      | BlockUpsertWithWhereUniqueWithoutBlockedInput[];
    createMany?: BlockCreateManyBlockedInputEnvelope;
    set?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
    disconnect?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
    delete?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
    update?:
      | BlockUpdateWithWhereUniqueWithoutBlockedInput
      | BlockUpdateWithWhereUniqueWithoutBlockedInput[];
    updateMany?:
      | BlockUpdateManyWithWhereWithoutBlockedInput
      | BlockUpdateManyWithWhereWithoutBlockedInput[];
    deleteMany?: BlockScalarWhereInput | BlockScalarWhereInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type FriendUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput>
      | FriendCreateWithoutUserInput[]
      | FriendUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | FriendCreateOrConnectWithoutUserInput
      | FriendCreateOrConnectWithoutUserInput[];
    upsert?:
      | FriendUpsertWithWhereUniqueWithoutUserInput
      | FriendUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: FriendCreateManyUserInputEnvelope;
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[];
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[];
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[];
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[];
    update?:
      | FriendUpdateWithWhereUniqueWithoutUserInput
      | FriendUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | FriendUpdateManyWithWhereWithoutUserInput
      | FriendUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[];
  };

  export type FriendUncheckedUpdateManyWithoutFriendNestedInput = {
    create?:
      | XOR<
          FriendCreateWithoutFriendInput,
          FriendUncheckedCreateWithoutFriendInput
        >
      | FriendCreateWithoutFriendInput[]
      | FriendUncheckedCreateWithoutFriendInput[];
    connectOrCreate?:
      | FriendCreateOrConnectWithoutFriendInput
      | FriendCreateOrConnectWithoutFriendInput[];
    upsert?:
      | FriendUpsertWithWhereUniqueWithoutFriendInput
      | FriendUpsertWithWhereUniqueWithoutFriendInput[];
    createMany?: FriendCreateManyFriendInputEnvelope;
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[];
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[];
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[];
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[];
    update?:
      | FriendUpdateWithWhereUniqueWithoutFriendInput
      | FriendUpdateWithWhereUniqueWithoutFriendInput[];
    updateMany?:
      | FriendUpdateManyWithWhereWithoutFriendInput
      | FriendUpdateManyWithWhereWithoutFriendInput[];
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[];
  };

  export type FriendRequestUncheckedUpdateManyWithoutSenderNestedInput = {
    create?:
      | XOR<
          FriendRequestCreateWithoutSenderInput,
          FriendRequestUncheckedCreateWithoutSenderInput
        >
      | FriendRequestCreateWithoutSenderInput[]
      | FriendRequestUncheckedCreateWithoutSenderInput[];
    connectOrCreate?:
      | FriendRequestCreateOrConnectWithoutSenderInput
      | FriendRequestCreateOrConnectWithoutSenderInput[];
    upsert?:
      | FriendRequestUpsertWithWhereUniqueWithoutSenderInput
      | FriendRequestUpsertWithWhereUniqueWithoutSenderInput[];
    createMany?: FriendRequestCreateManySenderInputEnvelope;
    set?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[];
    disconnect?:
      | FriendRequestWhereUniqueInput
      | FriendRequestWhereUniqueInput[];
    delete?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[];
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[];
    update?:
      | FriendRequestUpdateWithWhereUniqueWithoutSenderInput
      | FriendRequestUpdateWithWhereUniqueWithoutSenderInput[];
    updateMany?:
      | FriendRequestUpdateManyWithWhereWithoutSenderInput
      | FriendRequestUpdateManyWithWhereWithoutSenderInput[];
    deleteMany?:
      | FriendRequestScalarWhereInput
      | FriendRequestScalarWhereInput[];
  };

  export type FriendRequestUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?:
      | XOR<
          FriendRequestCreateWithoutReceiverInput,
          FriendRequestUncheckedCreateWithoutReceiverInput
        >
      | FriendRequestCreateWithoutReceiverInput[]
      | FriendRequestUncheckedCreateWithoutReceiverInput[];
    connectOrCreate?:
      | FriendRequestCreateOrConnectWithoutReceiverInput
      | FriendRequestCreateOrConnectWithoutReceiverInput[];
    upsert?:
      | FriendRequestUpsertWithWhereUniqueWithoutReceiverInput
      | FriendRequestUpsertWithWhereUniqueWithoutReceiverInput[];
    createMany?: FriendRequestCreateManyReceiverInputEnvelope;
    set?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[];
    disconnect?:
      | FriendRequestWhereUniqueInput
      | FriendRequestWhereUniqueInput[];
    delete?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[];
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[];
    update?:
      | FriendRequestUpdateWithWhereUniqueWithoutReceiverInput
      | FriendRequestUpdateWithWhereUniqueWithoutReceiverInput[];
    updateMany?:
      | FriendRequestUpdateManyWithWhereWithoutReceiverInput
      | FriendRequestUpdateManyWithWhereWithoutReceiverInput[];
    deleteMany?:
      | FriendRequestScalarWhereInput
      | FriendRequestScalarWhereInput[];
  };

  export type BlockUncheckedUpdateManyWithoutBlockerNestedInput = {
    create?:
      | XOR<
          BlockCreateWithoutBlockerInput,
          BlockUncheckedCreateWithoutBlockerInput
        >
      | BlockCreateWithoutBlockerInput[]
      | BlockUncheckedCreateWithoutBlockerInput[];
    connectOrCreate?:
      | BlockCreateOrConnectWithoutBlockerInput
      | BlockCreateOrConnectWithoutBlockerInput[];
    upsert?:
      | BlockUpsertWithWhereUniqueWithoutBlockerInput
      | BlockUpsertWithWhereUniqueWithoutBlockerInput[];
    createMany?: BlockCreateManyBlockerInputEnvelope;
    set?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
    disconnect?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
    delete?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
    update?:
      | BlockUpdateWithWhereUniqueWithoutBlockerInput
      | BlockUpdateWithWhereUniqueWithoutBlockerInput[];
    updateMany?:
      | BlockUpdateManyWithWhereWithoutBlockerInput
      | BlockUpdateManyWithWhereWithoutBlockerInput[];
    deleteMany?: BlockScalarWhereInput | BlockScalarWhereInput[];
  };

  export type BlockUncheckedUpdateManyWithoutBlockedNestedInput = {
    create?:
      | XOR<
          BlockCreateWithoutBlockedInput,
          BlockUncheckedCreateWithoutBlockedInput
        >
      | BlockCreateWithoutBlockedInput[]
      | BlockUncheckedCreateWithoutBlockedInput[];
    connectOrCreate?:
      | BlockCreateOrConnectWithoutBlockedInput
      | BlockCreateOrConnectWithoutBlockedInput[];
    upsert?:
      | BlockUpsertWithWhereUniqueWithoutBlockedInput
      | BlockUpsertWithWhereUniqueWithoutBlockedInput[];
    createMany?: BlockCreateManyBlockedInputEnvelope;
    set?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
    disconnect?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
    delete?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
    update?:
      | BlockUpdateWithWhereUniqueWithoutBlockedInput
      | BlockUpdateWithWhereUniqueWithoutBlockedInput[];
    updateMany?:
      | BlockUpdateManyWithWhereWithoutBlockedInput
      | BlockUpdateManyWithWhereWithoutBlockedInput[];
    deleteMany?: BlockScalarWhereInput | BlockScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutFriendsInput = {
    create?: XOR<
      UserCreateWithoutFriendsInput,
      UserUncheckedCreateWithoutFriendsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutFriendsInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutFriendOfInput = {
    create?: XOR<
      UserCreateWithoutFriendOfInput,
      UserUncheckedCreateWithoutFriendOfInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutFriendOfInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutFriendsNestedInput = {
    create?: XOR<
      UserCreateWithoutFriendsInput,
      UserUncheckedCreateWithoutFriendsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutFriendsInput;
    upsert?: UserUpsertWithoutFriendsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutFriendsInput,
        UserUpdateWithoutFriendsInput
      >,
      UserUncheckedUpdateWithoutFriendsInput
    >;
  };

  export type UserUpdateOneRequiredWithoutFriendOfNestedInput = {
    create?: XOR<
      UserCreateWithoutFriendOfInput,
      UserUncheckedCreateWithoutFriendOfInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutFriendOfInput;
    upsert?: UserUpsertWithoutFriendOfInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutFriendOfInput,
        UserUpdateWithoutFriendOfInput
      >,
      UserUncheckedUpdateWithoutFriendOfInput
    >;
  };

  export type UserCreateNestedOneWithoutFriendRequestsSentInput = {
    create?: XOR<
      UserCreateWithoutFriendRequestsSentInput,
      UserUncheckedCreateWithoutFriendRequestsSentInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutFriendRequestsSentInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutFriendRequestsReceivedInput = {
    create?: XOR<
      UserCreateWithoutFriendRequestsReceivedInput,
      UserUncheckedCreateWithoutFriendRequestsReceivedInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutFriendRequestsReceivedInput;
    connect?: UserWhereUniqueInput;
  };

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus;
  };

  export type UserUpdateOneRequiredWithoutFriendRequestsSentNestedInput = {
    create?: XOR<
      UserCreateWithoutFriendRequestsSentInput,
      UserUncheckedCreateWithoutFriendRequestsSentInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutFriendRequestsSentInput;
    upsert?: UserUpsertWithoutFriendRequestsSentInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutFriendRequestsSentInput,
        UserUpdateWithoutFriendRequestsSentInput
      >,
      UserUncheckedUpdateWithoutFriendRequestsSentInput
    >;
  };

  export type UserUpdateOneRequiredWithoutFriendRequestsReceivedNestedInput = {
    create?: XOR<
      UserCreateWithoutFriendRequestsReceivedInput,
      UserUncheckedCreateWithoutFriendRequestsReceivedInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutFriendRequestsReceivedInput;
    upsert?: UserUpsertWithoutFriendRequestsReceivedInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutFriendRequestsReceivedInput,
        UserUpdateWithoutFriendRequestsReceivedInput
      >,
      UserUncheckedUpdateWithoutFriendRequestsReceivedInput
    >;
  };

  export type UserCreateNestedOneWithoutBlockedUsersInput = {
    create?: XOR<
      UserCreateWithoutBlockedUsersInput,
      UserUncheckedCreateWithoutBlockedUsersInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutBlockedUsersInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutBlockedByInput = {
    create?: XOR<
      UserCreateWithoutBlockedByInput,
      UserUncheckedCreateWithoutBlockedByInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutBlockedByInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutBlockedUsersNestedInput = {
    create?: XOR<
      UserCreateWithoutBlockedUsersInput,
      UserUncheckedCreateWithoutBlockedUsersInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutBlockedUsersInput;
    upsert?: UserUpsertWithoutBlockedUsersInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutBlockedUsersInput,
        UserUpdateWithoutBlockedUsersInput
      >,
      UserUncheckedUpdateWithoutBlockedUsersInput
    >;
  };

  export type UserUpdateOneRequiredWithoutBlockedByNestedInput = {
    create?: XOR<
      UserCreateWithoutBlockedByInput,
      UserUncheckedCreateWithoutBlockedByInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutBlockedByInput;
    upsert?: UserUpsertWithoutBlockedByInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutBlockedByInput,
        UserUpdateWithoutBlockedByInput
      >,
      UserUncheckedUpdateWithoutBlockedByInput
    >;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.RequestStatus
      | EnumRequestStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.RequestStatus[]
      | ListEnumRequestStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.RequestStatus[]
      | ListEnumRequestStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus;
  };

  export type NestedEnumRequestStatusWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.RequestStatus
      | EnumRequestStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.RequestStatus[]
      | ListEnumRequestStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.RequestStatus[]
      | ListEnumRequestStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.RequestStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>;
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>;
  };

  export type FriendCreateWithoutUserInput = {
    createdAt?: Date | string;
    friend: UserCreateNestedOneWithoutFriendOfInput;
  };

  export type FriendUncheckedCreateWithoutUserInput = {
    id?: number;
    friendId: number;
    createdAt?: Date | string;
  };

  export type FriendCreateOrConnectWithoutUserInput = {
    where: FriendWhereUniqueInput;
    create: XOR<
      FriendCreateWithoutUserInput,
      FriendUncheckedCreateWithoutUserInput
    >;
  };

  export type FriendCreateManyUserInputEnvelope = {
    data: FriendCreateManyUserInput | FriendCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type FriendCreateWithoutFriendInput = {
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutFriendsInput;
  };

  export type FriendUncheckedCreateWithoutFriendInput = {
    id?: number;
    userId: number;
    createdAt?: Date | string;
  };

  export type FriendCreateOrConnectWithoutFriendInput = {
    where: FriendWhereUniqueInput;
    create: XOR<
      FriendCreateWithoutFriendInput,
      FriendUncheckedCreateWithoutFriendInput
    >;
  };

  export type FriendCreateManyFriendInputEnvelope = {
    data: FriendCreateManyFriendInput | FriendCreateManyFriendInput[];
    skipDuplicates?: boolean;
  };

  export type FriendRequestCreateWithoutSenderInput = {
    status?: $Enums.RequestStatus;
    createdAt?: Date | string;
    receiver: UserCreateNestedOneWithoutFriendRequestsReceivedInput;
  };

  export type FriendRequestUncheckedCreateWithoutSenderInput = {
    id?: number;
    receiverId: number;
    status?: $Enums.RequestStatus;
    createdAt?: Date | string;
  };

  export type FriendRequestCreateOrConnectWithoutSenderInput = {
    where: FriendRequestWhereUniqueInput;
    create: XOR<
      FriendRequestCreateWithoutSenderInput,
      FriendRequestUncheckedCreateWithoutSenderInput
    >;
  };

  export type FriendRequestCreateManySenderInputEnvelope = {
    data:
      | FriendRequestCreateManySenderInput
      | FriendRequestCreateManySenderInput[];
    skipDuplicates?: boolean;
  };

  export type FriendRequestCreateWithoutReceiverInput = {
    status?: $Enums.RequestStatus;
    createdAt?: Date | string;
    sender: UserCreateNestedOneWithoutFriendRequestsSentInput;
  };

  export type FriendRequestUncheckedCreateWithoutReceiverInput = {
    id?: number;
    senderId: number;
    status?: $Enums.RequestStatus;
    createdAt?: Date | string;
  };

  export type FriendRequestCreateOrConnectWithoutReceiverInput = {
    where: FriendRequestWhereUniqueInput;
    create: XOR<
      FriendRequestCreateWithoutReceiverInput,
      FriendRequestUncheckedCreateWithoutReceiverInput
    >;
  };

  export type FriendRequestCreateManyReceiverInputEnvelope = {
    data:
      | FriendRequestCreateManyReceiverInput
      | FriendRequestCreateManyReceiverInput[];
    skipDuplicates?: boolean;
  };

  export type BlockCreateWithoutBlockerInput = {
    createdAt?: Date | string;
    blocked: UserCreateNestedOneWithoutBlockedByInput;
  };

  export type BlockUncheckedCreateWithoutBlockerInput = {
    id?: number;
    blockedId: number;
    createdAt?: Date | string;
  };

  export type BlockCreateOrConnectWithoutBlockerInput = {
    where: BlockWhereUniqueInput;
    create: XOR<
      BlockCreateWithoutBlockerInput,
      BlockUncheckedCreateWithoutBlockerInput
    >;
  };

  export type BlockCreateManyBlockerInputEnvelope = {
    data: BlockCreateManyBlockerInput | BlockCreateManyBlockerInput[];
    skipDuplicates?: boolean;
  };

  export type BlockCreateWithoutBlockedInput = {
    createdAt?: Date | string;
    blocker: UserCreateNestedOneWithoutBlockedUsersInput;
  };

  export type BlockUncheckedCreateWithoutBlockedInput = {
    id?: number;
    blockerId: number;
    createdAt?: Date | string;
  };

  export type BlockCreateOrConnectWithoutBlockedInput = {
    where: BlockWhereUniqueInput;
    create: XOR<
      BlockCreateWithoutBlockedInput,
      BlockUncheckedCreateWithoutBlockedInput
    >;
  };

  export type BlockCreateManyBlockedInputEnvelope = {
    data: BlockCreateManyBlockedInput | BlockCreateManyBlockedInput[];
    skipDuplicates?: boolean;
  };

  export type FriendUpsertWithWhereUniqueWithoutUserInput = {
    where: FriendWhereUniqueInput;
    update: XOR<
      FriendUpdateWithoutUserInput,
      FriendUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      FriendCreateWithoutUserInput,
      FriendUncheckedCreateWithoutUserInput
    >;
  };

  export type FriendUpdateWithWhereUniqueWithoutUserInput = {
    where: FriendWhereUniqueInput;
    data: XOR<
      FriendUpdateWithoutUserInput,
      FriendUncheckedUpdateWithoutUserInput
    >;
  };

  export type FriendUpdateManyWithWhereWithoutUserInput = {
    where: FriendScalarWhereInput;
    data: XOR<
      FriendUpdateManyMutationInput,
      FriendUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type FriendScalarWhereInput = {
    AND?: FriendScalarWhereInput | FriendScalarWhereInput[];
    OR?: FriendScalarWhereInput[];
    NOT?: FriendScalarWhereInput | FriendScalarWhereInput[];
    id?: IntFilter<'Friend'> | number;
    userId?: IntFilter<'Friend'> | number;
    friendId?: IntFilter<'Friend'> | number;
    createdAt?: DateTimeFilter<'Friend'> | Date | string;
  };

  export type FriendUpsertWithWhereUniqueWithoutFriendInput = {
    where: FriendWhereUniqueInput;
    update: XOR<
      FriendUpdateWithoutFriendInput,
      FriendUncheckedUpdateWithoutFriendInput
    >;
    create: XOR<
      FriendCreateWithoutFriendInput,
      FriendUncheckedCreateWithoutFriendInput
    >;
  };

  export type FriendUpdateWithWhereUniqueWithoutFriendInput = {
    where: FriendWhereUniqueInput;
    data: XOR<
      FriendUpdateWithoutFriendInput,
      FriendUncheckedUpdateWithoutFriendInput
    >;
  };

  export type FriendUpdateManyWithWhereWithoutFriendInput = {
    where: FriendScalarWhereInput;
    data: XOR<
      FriendUpdateManyMutationInput,
      FriendUncheckedUpdateManyWithoutFriendInput
    >;
  };

  export type FriendRequestUpsertWithWhereUniqueWithoutSenderInput = {
    where: FriendRequestWhereUniqueInput;
    update: XOR<
      FriendRequestUpdateWithoutSenderInput,
      FriendRequestUncheckedUpdateWithoutSenderInput
    >;
    create: XOR<
      FriendRequestCreateWithoutSenderInput,
      FriendRequestUncheckedCreateWithoutSenderInput
    >;
  };

  export type FriendRequestUpdateWithWhereUniqueWithoutSenderInput = {
    where: FriendRequestWhereUniqueInput;
    data: XOR<
      FriendRequestUpdateWithoutSenderInput,
      FriendRequestUncheckedUpdateWithoutSenderInput
    >;
  };

  export type FriendRequestUpdateManyWithWhereWithoutSenderInput = {
    where: FriendRequestScalarWhereInput;
    data: XOR<
      FriendRequestUpdateManyMutationInput,
      FriendRequestUncheckedUpdateManyWithoutSenderInput
    >;
  };

  export type FriendRequestScalarWhereInput = {
    AND?: FriendRequestScalarWhereInput | FriendRequestScalarWhereInput[];
    OR?: FriendRequestScalarWhereInput[];
    NOT?: FriendRequestScalarWhereInput | FriendRequestScalarWhereInput[];
    id?: IntFilter<'FriendRequest'> | number;
    senderId?: IntFilter<'FriendRequest'> | number;
    receiverId?: IntFilter<'FriendRequest'> | number;
    status?: EnumRequestStatusFilter<'FriendRequest'> | $Enums.RequestStatus;
    createdAt?: DateTimeFilter<'FriendRequest'> | Date | string;
  };

  export type FriendRequestUpsertWithWhereUniqueWithoutReceiverInput = {
    where: FriendRequestWhereUniqueInput;
    update: XOR<
      FriendRequestUpdateWithoutReceiverInput,
      FriendRequestUncheckedUpdateWithoutReceiverInput
    >;
    create: XOR<
      FriendRequestCreateWithoutReceiverInput,
      FriendRequestUncheckedCreateWithoutReceiverInput
    >;
  };

  export type FriendRequestUpdateWithWhereUniqueWithoutReceiverInput = {
    where: FriendRequestWhereUniqueInput;
    data: XOR<
      FriendRequestUpdateWithoutReceiverInput,
      FriendRequestUncheckedUpdateWithoutReceiverInput
    >;
  };

  export type FriendRequestUpdateManyWithWhereWithoutReceiverInput = {
    where: FriendRequestScalarWhereInput;
    data: XOR<
      FriendRequestUpdateManyMutationInput,
      FriendRequestUncheckedUpdateManyWithoutReceiverInput
    >;
  };

  export type BlockUpsertWithWhereUniqueWithoutBlockerInput = {
    where: BlockWhereUniqueInput;
    update: XOR<
      BlockUpdateWithoutBlockerInput,
      BlockUncheckedUpdateWithoutBlockerInput
    >;
    create: XOR<
      BlockCreateWithoutBlockerInput,
      BlockUncheckedCreateWithoutBlockerInput
    >;
  };

  export type BlockUpdateWithWhereUniqueWithoutBlockerInput = {
    where: BlockWhereUniqueInput;
    data: XOR<
      BlockUpdateWithoutBlockerInput,
      BlockUncheckedUpdateWithoutBlockerInput
    >;
  };

  export type BlockUpdateManyWithWhereWithoutBlockerInput = {
    where: BlockScalarWhereInput;
    data: XOR<
      BlockUpdateManyMutationInput,
      BlockUncheckedUpdateManyWithoutBlockerInput
    >;
  };

  export type BlockScalarWhereInput = {
    AND?: BlockScalarWhereInput | BlockScalarWhereInput[];
    OR?: BlockScalarWhereInput[];
    NOT?: BlockScalarWhereInput | BlockScalarWhereInput[];
    id?: IntFilter<'Block'> | number;
    blockerId?: IntFilter<'Block'> | number;
    blockedId?: IntFilter<'Block'> | number;
    createdAt?: DateTimeFilter<'Block'> | Date | string;
  };

  export type BlockUpsertWithWhereUniqueWithoutBlockedInput = {
    where: BlockWhereUniqueInput;
    update: XOR<
      BlockUpdateWithoutBlockedInput,
      BlockUncheckedUpdateWithoutBlockedInput
    >;
    create: XOR<
      BlockCreateWithoutBlockedInput,
      BlockUncheckedCreateWithoutBlockedInput
    >;
  };

  export type BlockUpdateWithWhereUniqueWithoutBlockedInput = {
    where: BlockWhereUniqueInput;
    data: XOR<
      BlockUpdateWithoutBlockedInput,
      BlockUncheckedUpdateWithoutBlockedInput
    >;
  };

  export type BlockUpdateManyWithWhereWithoutBlockedInput = {
    where: BlockScalarWhereInput;
    data: XOR<
      BlockUpdateManyMutationInput,
      BlockUncheckedUpdateManyWithoutBlockedInput
    >;
  };

  export type UserCreateWithoutFriendsInput = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt?: Date | string;
    friendOf?: FriendCreateNestedManyWithoutFriendInput;
    friendRequestsSent?: FriendRequestCreateNestedManyWithoutSenderInput;
    friendRequestsReceived?: FriendRequestCreateNestedManyWithoutReceiverInput;
    blockedUsers?: BlockCreateNestedManyWithoutBlockerInput;
    blockedBy?: BlockCreateNestedManyWithoutBlockedInput;
  };

  export type UserUncheckedCreateWithoutFriendsInput = {
    id?: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt?: Date | string;
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput;
    friendRequestsSent?: FriendRequestUncheckedCreateNestedManyWithoutSenderInput;
    friendRequestsReceived?: FriendRequestUncheckedCreateNestedManyWithoutReceiverInput;
    blockedUsers?: BlockUncheckedCreateNestedManyWithoutBlockerInput;
    blockedBy?: BlockUncheckedCreateNestedManyWithoutBlockedInput;
  };

  export type UserCreateOrConnectWithoutFriendsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutFriendsInput,
      UserUncheckedCreateWithoutFriendsInput
    >;
  };

  export type UserCreateWithoutFriendOfInput = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt?: Date | string;
    friends?: FriendCreateNestedManyWithoutUserInput;
    friendRequestsSent?: FriendRequestCreateNestedManyWithoutSenderInput;
    friendRequestsReceived?: FriendRequestCreateNestedManyWithoutReceiverInput;
    blockedUsers?: BlockCreateNestedManyWithoutBlockerInput;
    blockedBy?: BlockCreateNestedManyWithoutBlockedInput;
  };

  export type UserUncheckedCreateWithoutFriendOfInput = {
    id?: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt?: Date | string;
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput;
    friendRequestsSent?: FriendRequestUncheckedCreateNestedManyWithoutSenderInput;
    friendRequestsReceived?: FriendRequestUncheckedCreateNestedManyWithoutReceiverInput;
    blockedUsers?: BlockUncheckedCreateNestedManyWithoutBlockerInput;
    blockedBy?: BlockUncheckedCreateNestedManyWithoutBlockedInput;
  };

  export type UserCreateOrConnectWithoutFriendOfInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutFriendOfInput,
      UserUncheckedCreateWithoutFriendOfInput
    >;
  };

  export type UserUpsertWithoutFriendsInput = {
    update: XOR<
      UserUpdateWithoutFriendsInput,
      UserUncheckedUpdateWithoutFriendsInput
    >;
    create: XOR<
      UserCreateWithoutFriendsInput,
      UserUncheckedCreateWithoutFriendsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutFriendsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutFriendsInput,
      UserUncheckedUpdateWithoutFriendsInput
    >;
  };

  export type UserUpdateWithoutFriendsInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    friendOf?: FriendUpdateManyWithoutFriendNestedInput;
    friendRequestsSent?: FriendRequestUpdateManyWithoutSenderNestedInput;
    friendRequestsReceived?: FriendRequestUpdateManyWithoutReceiverNestedInput;
    blockedUsers?: BlockUpdateManyWithoutBlockerNestedInput;
    blockedBy?: BlockUpdateManyWithoutBlockedNestedInput;
  };

  export type UserUncheckedUpdateWithoutFriendsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput;
    friendRequestsSent?: FriendRequestUncheckedUpdateManyWithoutSenderNestedInput;
    friendRequestsReceived?: FriendRequestUncheckedUpdateManyWithoutReceiverNestedInput;
    blockedUsers?: BlockUncheckedUpdateManyWithoutBlockerNestedInput;
    blockedBy?: BlockUncheckedUpdateManyWithoutBlockedNestedInput;
  };

  export type UserUpsertWithoutFriendOfInput = {
    update: XOR<
      UserUpdateWithoutFriendOfInput,
      UserUncheckedUpdateWithoutFriendOfInput
    >;
    create: XOR<
      UserCreateWithoutFriendOfInput,
      UserUncheckedCreateWithoutFriendOfInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutFriendOfInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutFriendOfInput,
      UserUncheckedUpdateWithoutFriendOfInput
    >;
  };

  export type UserUpdateWithoutFriendOfInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    friends?: FriendUpdateManyWithoutUserNestedInput;
    friendRequestsSent?: FriendRequestUpdateManyWithoutSenderNestedInput;
    friendRequestsReceived?: FriendRequestUpdateManyWithoutReceiverNestedInput;
    blockedUsers?: BlockUpdateManyWithoutBlockerNestedInput;
    blockedBy?: BlockUpdateManyWithoutBlockedNestedInput;
  };

  export type UserUncheckedUpdateWithoutFriendOfInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput;
    friendRequestsSent?: FriendRequestUncheckedUpdateManyWithoutSenderNestedInput;
    friendRequestsReceived?: FriendRequestUncheckedUpdateManyWithoutReceiverNestedInput;
    blockedUsers?: BlockUncheckedUpdateManyWithoutBlockerNestedInput;
    blockedBy?: BlockUncheckedUpdateManyWithoutBlockedNestedInput;
  };

  export type UserCreateWithoutFriendRequestsSentInput = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt?: Date | string;
    friends?: FriendCreateNestedManyWithoutUserInput;
    friendOf?: FriendCreateNestedManyWithoutFriendInput;
    friendRequestsReceived?: FriendRequestCreateNestedManyWithoutReceiverInput;
    blockedUsers?: BlockCreateNestedManyWithoutBlockerInput;
    blockedBy?: BlockCreateNestedManyWithoutBlockedInput;
  };

  export type UserUncheckedCreateWithoutFriendRequestsSentInput = {
    id?: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt?: Date | string;
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput;
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput;
    friendRequestsReceived?: FriendRequestUncheckedCreateNestedManyWithoutReceiverInput;
    blockedUsers?: BlockUncheckedCreateNestedManyWithoutBlockerInput;
    blockedBy?: BlockUncheckedCreateNestedManyWithoutBlockedInput;
  };

  export type UserCreateOrConnectWithoutFriendRequestsSentInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutFriendRequestsSentInput,
      UserUncheckedCreateWithoutFriendRequestsSentInput
    >;
  };

  export type UserCreateWithoutFriendRequestsReceivedInput = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt?: Date | string;
    friends?: FriendCreateNestedManyWithoutUserInput;
    friendOf?: FriendCreateNestedManyWithoutFriendInput;
    friendRequestsSent?: FriendRequestCreateNestedManyWithoutSenderInput;
    blockedUsers?: BlockCreateNestedManyWithoutBlockerInput;
    blockedBy?: BlockCreateNestedManyWithoutBlockedInput;
  };

  export type UserUncheckedCreateWithoutFriendRequestsReceivedInput = {
    id?: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt?: Date | string;
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput;
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput;
    friendRequestsSent?: FriendRequestUncheckedCreateNestedManyWithoutSenderInput;
    blockedUsers?: BlockUncheckedCreateNestedManyWithoutBlockerInput;
    blockedBy?: BlockUncheckedCreateNestedManyWithoutBlockedInput;
  };

  export type UserCreateOrConnectWithoutFriendRequestsReceivedInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutFriendRequestsReceivedInput,
      UserUncheckedCreateWithoutFriendRequestsReceivedInput
    >;
  };

  export type UserUpsertWithoutFriendRequestsSentInput = {
    update: XOR<
      UserUpdateWithoutFriendRequestsSentInput,
      UserUncheckedUpdateWithoutFriendRequestsSentInput
    >;
    create: XOR<
      UserCreateWithoutFriendRequestsSentInput,
      UserUncheckedCreateWithoutFriendRequestsSentInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutFriendRequestsSentInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutFriendRequestsSentInput,
      UserUncheckedUpdateWithoutFriendRequestsSentInput
    >;
  };

  export type UserUpdateWithoutFriendRequestsSentInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    friends?: FriendUpdateManyWithoutUserNestedInput;
    friendOf?: FriendUpdateManyWithoutFriendNestedInput;
    friendRequestsReceived?: FriendRequestUpdateManyWithoutReceiverNestedInput;
    blockedUsers?: BlockUpdateManyWithoutBlockerNestedInput;
    blockedBy?: BlockUpdateManyWithoutBlockedNestedInput;
  };

  export type UserUncheckedUpdateWithoutFriendRequestsSentInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput;
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput;
    friendRequestsReceived?: FriendRequestUncheckedUpdateManyWithoutReceiverNestedInput;
    blockedUsers?: BlockUncheckedUpdateManyWithoutBlockerNestedInput;
    blockedBy?: BlockUncheckedUpdateManyWithoutBlockedNestedInput;
  };

  export type UserUpsertWithoutFriendRequestsReceivedInput = {
    update: XOR<
      UserUpdateWithoutFriendRequestsReceivedInput,
      UserUncheckedUpdateWithoutFriendRequestsReceivedInput
    >;
    create: XOR<
      UserCreateWithoutFriendRequestsReceivedInput,
      UserUncheckedCreateWithoutFriendRequestsReceivedInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutFriendRequestsReceivedInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutFriendRequestsReceivedInput,
      UserUncheckedUpdateWithoutFriendRequestsReceivedInput
    >;
  };

  export type UserUpdateWithoutFriendRequestsReceivedInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    friends?: FriendUpdateManyWithoutUserNestedInput;
    friendOf?: FriendUpdateManyWithoutFriendNestedInput;
    friendRequestsSent?: FriendRequestUpdateManyWithoutSenderNestedInput;
    blockedUsers?: BlockUpdateManyWithoutBlockerNestedInput;
    blockedBy?: BlockUpdateManyWithoutBlockedNestedInput;
  };

  export type UserUncheckedUpdateWithoutFriendRequestsReceivedInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput;
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput;
    friendRequestsSent?: FriendRequestUncheckedUpdateManyWithoutSenderNestedInput;
    blockedUsers?: BlockUncheckedUpdateManyWithoutBlockerNestedInput;
    blockedBy?: BlockUncheckedUpdateManyWithoutBlockedNestedInput;
  };

  export type UserCreateWithoutBlockedUsersInput = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt?: Date | string;
    friends?: FriendCreateNestedManyWithoutUserInput;
    friendOf?: FriendCreateNestedManyWithoutFriendInput;
    friendRequestsSent?: FriendRequestCreateNestedManyWithoutSenderInput;
    friendRequestsReceived?: FriendRequestCreateNestedManyWithoutReceiverInput;
    blockedBy?: BlockCreateNestedManyWithoutBlockedInput;
  };

  export type UserUncheckedCreateWithoutBlockedUsersInput = {
    id?: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt?: Date | string;
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput;
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput;
    friendRequestsSent?: FriendRequestUncheckedCreateNestedManyWithoutSenderInput;
    friendRequestsReceived?: FriendRequestUncheckedCreateNestedManyWithoutReceiverInput;
    blockedBy?: BlockUncheckedCreateNestedManyWithoutBlockedInput;
  };

  export type UserCreateOrConnectWithoutBlockedUsersInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutBlockedUsersInput,
      UserUncheckedCreateWithoutBlockedUsersInput
    >;
  };

  export type UserCreateWithoutBlockedByInput = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt?: Date | string;
    friends?: FriendCreateNestedManyWithoutUserInput;
    friendOf?: FriendCreateNestedManyWithoutFriendInput;
    friendRequestsSent?: FriendRequestCreateNestedManyWithoutSenderInput;
    friendRequestsReceived?: FriendRequestCreateNestedManyWithoutReceiverInput;
    blockedUsers?: BlockCreateNestedManyWithoutBlockerInput;
  };

  export type UserUncheckedCreateWithoutBlockedByInput = {
    id?: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt?: Date | string;
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput;
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput;
    friendRequestsSent?: FriendRequestUncheckedCreateNestedManyWithoutSenderInput;
    friendRequestsReceived?: FriendRequestUncheckedCreateNestedManyWithoutReceiverInput;
    blockedUsers?: BlockUncheckedCreateNestedManyWithoutBlockerInput;
  };

  export type UserCreateOrConnectWithoutBlockedByInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutBlockedByInput,
      UserUncheckedCreateWithoutBlockedByInput
    >;
  };

  export type UserUpsertWithoutBlockedUsersInput = {
    update: XOR<
      UserUpdateWithoutBlockedUsersInput,
      UserUncheckedUpdateWithoutBlockedUsersInput
    >;
    create: XOR<
      UserCreateWithoutBlockedUsersInput,
      UserUncheckedCreateWithoutBlockedUsersInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutBlockedUsersInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutBlockedUsersInput,
      UserUncheckedUpdateWithoutBlockedUsersInput
    >;
  };

  export type UserUpdateWithoutBlockedUsersInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    friends?: FriendUpdateManyWithoutUserNestedInput;
    friendOf?: FriendUpdateManyWithoutFriendNestedInput;
    friendRequestsSent?: FriendRequestUpdateManyWithoutSenderNestedInput;
    friendRequestsReceived?: FriendRequestUpdateManyWithoutReceiverNestedInput;
    blockedBy?: BlockUpdateManyWithoutBlockedNestedInput;
  };

  export type UserUncheckedUpdateWithoutBlockedUsersInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput;
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput;
    friendRequestsSent?: FriendRequestUncheckedUpdateManyWithoutSenderNestedInput;
    friendRequestsReceived?: FriendRequestUncheckedUpdateManyWithoutReceiverNestedInput;
    blockedBy?: BlockUncheckedUpdateManyWithoutBlockedNestedInput;
  };

  export type UserUpsertWithoutBlockedByInput = {
    update: XOR<
      UserUpdateWithoutBlockedByInput,
      UserUncheckedUpdateWithoutBlockedByInput
    >;
    create: XOR<
      UserCreateWithoutBlockedByInput,
      UserUncheckedCreateWithoutBlockedByInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutBlockedByInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutBlockedByInput,
      UserUncheckedUpdateWithoutBlockedByInput
    >;
  };

  export type UserUpdateWithoutBlockedByInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    friends?: FriendUpdateManyWithoutUserNestedInput;
    friendOf?: FriendUpdateManyWithoutFriendNestedInput;
    friendRequestsSent?: FriendRequestUpdateManyWithoutSenderNestedInput;
    friendRequestsReceived?: FriendRequestUpdateManyWithoutReceiverNestedInput;
    blockedUsers?: BlockUpdateManyWithoutBlockerNestedInput;
  };

  export type UserUncheckedUpdateWithoutBlockedByInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput;
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput;
    friendRequestsSent?: FriendRequestUncheckedUpdateManyWithoutSenderNestedInput;
    friendRequestsReceived?: FriendRequestUncheckedUpdateManyWithoutReceiverNestedInput;
    blockedUsers?: BlockUncheckedUpdateManyWithoutBlockerNestedInput;
  };

  export type FriendCreateManyUserInput = {
    id?: number;
    friendId: number;
    createdAt?: Date | string;
  };

  export type FriendCreateManyFriendInput = {
    id?: number;
    userId: number;
    createdAt?: Date | string;
  };

  export type FriendRequestCreateManySenderInput = {
    id?: number;
    receiverId: number;
    status?: $Enums.RequestStatus;
    createdAt?: Date | string;
  };

  export type FriendRequestCreateManyReceiverInput = {
    id?: number;
    senderId: number;
    status?: $Enums.RequestStatus;
    createdAt?: Date | string;
  };

  export type BlockCreateManyBlockerInput = {
    id?: number;
    blockedId: number;
    createdAt?: Date | string;
  };

  export type BlockCreateManyBlockedInput = {
    id?: number;
    blockerId: number;
    createdAt?: Date | string;
  };

  export type FriendUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    friend?: UserUpdateOneRequiredWithoutFriendOfNestedInput;
  };

  export type FriendUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    friendId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FriendUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    friendId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FriendUpdateWithoutFriendInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutFriendsNestedInput;
  };

  export type FriendUncheckedUpdateWithoutFriendInput = {
    id?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FriendUncheckedUpdateManyWithoutFriendInput = {
    id?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FriendRequestUpdateWithoutSenderInput = {
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    receiver?: UserUpdateOneRequiredWithoutFriendRequestsReceivedNestedInput;
  };

  export type FriendRequestUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number;
    receiverId?: IntFieldUpdateOperationsInput | number;
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FriendRequestUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number;
    receiverId?: IntFieldUpdateOperationsInput | number;
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FriendRequestUpdateWithoutReceiverInput = {
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    sender?: UserUpdateOneRequiredWithoutFriendRequestsSentNestedInput;
  };

  export type FriendRequestUncheckedUpdateWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number;
    senderId?: IntFieldUpdateOperationsInput | number;
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FriendRequestUncheckedUpdateManyWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number;
    senderId?: IntFieldUpdateOperationsInput | number;
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BlockUpdateWithoutBlockerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    blocked?: UserUpdateOneRequiredWithoutBlockedByNestedInput;
  };

  export type BlockUncheckedUpdateWithoutBlockerInput = {
    id?: IntFieldUpdateOperationsInput | number;
    blockedId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BlockUncheckedUpdateManyWithoutBlockerInput = {
    id?: IntFieldUpdateOperationsInput | number;
    blockedId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BlockUpdateWithoutBlockedInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    blocker?: UserUpdateOneRequiredWithoutBlockedUsersNestedInput;
  };

  export type BlockUncheckedUpdateWithoutBlockedInput = {
    id?: IntFieldUpdateOperationsInput | number;
    blockerId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BlockUncheckedUpdateManyWithoutBlockedInput = {
    id?: IntFieldUpdateOperationsInput | number;
    blockerId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
