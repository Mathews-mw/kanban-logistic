
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
 * Model Otp
 * 
 */
export type Otp = $Result.DefaultSelection<Prisma.$OtpPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model DeliveryPlant
 * 
 */
export type DeliveryPlant = $Result.DefaultSelection<Prisma.$DeliveryPlantPayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model TicketDocument
 * 
 */
export type TicketDocument = $Result.DefaultSelection<Prisma.$TicketDocumentPayload>
/**
 * Model TicketEventLog
 * 
 */
export type TicketEventLog = $Result.DefaultSelection<Prisma.$TicketEventLogPayload>
/**
 * Model TicketSequence
 * *
 *  * Sequência mensal para numeração de ticket (YYYYMM-000001)
 */
export type TicketSequence = $Result.DefaultSelection<Prisma.$TicketSequencePayload>
/**
 * Model ApiKey
 * 
 */
export type ApiKey = $Result.DefaultSelection<Prisma.$ApiKeyPayload>
/**
 * Model ImportJob
 * 
 */
export type ImportJob = $Result.DefaultSelection<Prisma.$ImportJobPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  DEFAULT: 'DEFAULT',
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR',
  CUSTOMER: 'CUSTOMER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const CompanyRole: {
  SUPPLIER: 'SUPPLIER',
  CUSTOMER: 'CUSTOMER',
  TRANSPORTER: 'TRANSPORTER'
};

export type CompanyRole = (typeof CompanyRole)[keyof typeof CompanyRole]


export const TicketStatus: {
  DRAFT: 'DRAFT',
  READY: 'READY',
  SHARED: 'SHARED',
  ARCHIVED: 'ARCHIVED',
  PENDING_REGISTRATION: 'PENDING_REGISTRATION',
  AVAILABLE: 'AVAILABLE',
  DOWNLOADED: 'DOWNLOADED',
  CANCELED: 'CANCELED'
};

export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus]


export const TicketDirection: {
  IN: 'IN',
  OUT: 'OUT'
};

export type TicketDirection = (typeof TicketDirection)[keyof typeof TicketDirection]


export const DocType: {
  XML: 'XML',
  PDF: 'PDF'
};

export type DocType = (typeof DocType)[keyof typeof DocType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type CompanyRole = $Enums.CompanyRole

export const CompanyRole: typeof $Enums.CompanyRole

export type TicketStatus = $Enums.TicketStatus

export const TicketStatus: typeof $Enums.TicketStatus

export type TicketDirection = $Enums.TicketDirection

export const TicketDirection: typeof $Enums.TicketDirection

export type DocType = $Enums.DocType

export const DocType: typeof $Enums.DocType

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
   * `prisma.otp`: Exposes CRUD operations for the **Otp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Otps
    * const otps = await prisma.otp.findMany()
    * ```
    */
  get otp(): Prisma.OtpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deliveryPlant`: Exposes CRUD operations for the **DeliveryPlant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeliveryPlants
    * const deliveryPlants = await prisma.deliveryPlant.findMany()
    * ```
    */
  get deliveryPlant(): Prisma.DeliveryPlantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketDocument`: Exposes CRUD operations for the **TicketDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketDocuments
    * const ticketDocuments = await prisma.ticketDocument.findMany()
    * ```
    */
  get ticketDocument(): Prisma.TicketDocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketEventLog`: Exposes CRUD operations for the **TicketEventLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketEventLogs
    * const ticketEventLogs = await prisma.ticketEventLog.findMany()
    * ```
    */
  get ticketEventLog(): Prisma.TicketEventLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketSequence`: Exposes CRUD operations for the **TicketSequence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketSequences
    * const ticketSequences = await prisma.ticketSequence.findMany()
    * ```
    */
  get ticketSequence(): Prisma.TicketSequenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiKey`: Exposes CRUD operations for the **ApiKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiKeys
    * const apiKeys = await prisma.apiKey.findMany()
    * ```
    */
  get apiKey(): Prisma.ApiKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.importJob`: Exposes CRUD operations for the **ImportJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImportJobs
    * const importJobs = await prisma.importJob.findMany()
    * ```
    */
  get importJob(): Prisma.ImportJobDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Otp: 'Otp',
    Company: 'Company',
    DeliveryPlant: 'DeliveryPlant',
    Vehicle: 'Vehicle',
    Product: 'Product',
    Ticket: 'Ticket',
    TicketDocument: 'TicketDocument',
    TicketEventLog: 'TicketEventLog',
    TicketSequence: 'TicketSequence',
    ApiKey: 'ApiKey',
    ImportJob: 'ImportJob'
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
      modelProps: "user" | "otp" | "company" | "deliveryPlant" | "vehicle" | "product" | "ticket" | "ticketDocument" | "ticketEventLog" | "ticketSequence" | "apiKey" | "importJob"
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
      Otp: {
        payload: Prisma.$OtpPayload<ExtArgs>
        fields: Prisma.OtpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findFirst: {
            args: Prisma.OtpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findMany: {
            args: Prisma.OtpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          create: {
            args: Prisma.OtpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          createMany: {
            args: Prisma.OtpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OtpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          delete: {
            args: Prisma.OtpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          update: {
            args: Prisma.OtpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          deleteMany: {
            args: Prisma.OtpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OtpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          upsert: {
            args: Prisma.OtpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          aggregate: {
            args: Prisma.OtpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtp>
          }
          groupBy: {
            args: Prisma.OtpGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtpCountArgs<ExtArgs>
            result: $Utils.Optional<OtpCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      DeliveryPlant: {
        payload: Prisma.$DeliveryPlantPayload<ExtArgs>
        fields: Prisma.DeliveryPlantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliveryPlantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPlantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliveryPlantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPlantPayload>
          }
          findFirst: {
            args: Prisma.DeliveryPlantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPlantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliveryPlantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPlantPayload>
          }
          findMany: {
            args: Prisma.DeliveryPlantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPlantPayload>[]
          }
          create: {
            args: Prisma.DeliveryPlantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPlantPayload>
          }
          createMany: {
            args: Prisma.DeliveryPlantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeliveryPlantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPlantPayload>[]
          }
          delete: {
            args: Prisma.DeliveryPlantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPlantPayload>
          }
          update: {
            args: Prisma.DeliveryPlantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPlantPayload>
          }
          deleteMany: {
            args: Prisma.DeliveryPlantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeliveryPlantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeliveryPlantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPlantPayload>[]
          }
          upsert: {
            args: Prisma.DeliveryPlantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPlantPayload>
          }
          aggregate: {
            args: Prisma.DeliveryPlantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeliveryPlant>
          }
          groupBy: {
            args: Prisma.DeliveryPlantGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliveryPlantGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliveryPlantCountArgs<ExtArgs>
            result: $Utils.Optional<DeliveryPlantCountAggregateOutputType> | number
          }
        }
      }
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      TicketDocument: {
        payload: Prisma.$TicketDocumentPayload<ExtArgs>
        fields: Prisma.TicketDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketDocumentPayload>
          }
          findFirst: {
            args: Prisma.TicketDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketDocumentPayload>
          }
          findMany: {
            args: Prisma.TicketDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketDocumentPayload>[]
          }
          create: {
            args: Prisma.TicketDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketDocumentPayload>
          }
          createMany: {
            args: Prisma.TicketDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketDocumentPayload>[]
          }
          delete: {
            args: Prisma.TicketDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketDocumentPayload>
          }
          update: {
            args: Prisma.TicketDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketDocumentPayload>
          }
          deleteMany: {
            args: Prisma.TicketDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketDocumentPayload>[]
          }
          upsert: {
            args: Prisma.TicketDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketDocumentPayload>
          }
          aggregate: {
            args: Prisma.TicketDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketDocument>
          }
          groupBy: {
            args: Prisma.TicketDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<TicketDocumentCountAggregateOutputType> | number
          }
        }
      }
      TicketEventLog: {
        payload: Prisma.$TicketEventLogPayload<ExtArgs>
        fields: Prisma.TicketEventLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketEventLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketEventLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketEventLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketEventLogPayload>
          }
          findFirst: {
            args: Prisma.TicketEventLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketEventLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketEventLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketEventLogPayload>
          }
          findMany: {
            args: Prisma.TicketEventLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketEventLogPayload>[]
          }
          create: {
            args: Prisma.TicketEventLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketEventLogPayload>
          }
          createMany: {
            args: Prisma.TicketEventLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketEventLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketEventLogPayload>[]
          }
          delete: {
            args: Prisma.TicketEventLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketEventLogPayload>
          }
          update: {
            args: Prisma.TicketEventLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketEventLogPayload>
          }
          deleteMany: {
            args: Prisma.TicketEventLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketEventLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketEventLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketEventLogPayload>[]
          }
          upsert: {
            args: Prisma.TicketEventLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketEventLogPayload>
          }
          aggregate: {
            args: Prisma.TicketEventLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketEventLog>
          }
          groupBy: {
            args: Prisma.TicketEventLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketEventLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketEventLogCountArgs<ExtArgs>
            result: $Utils.Optional<TicketEventLogCountAggregateOutputType> | number
          }
        }
      }
      TicketSequence: {
        payload: Prisma.$TicketSequencePayload<ExtArgs>
        fields: Prisma.TicketSequenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketSequenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSequencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketSequenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSequencePayload>
          }
          findFirst: {
            args: Prisma.TicketSequenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSequencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketSequenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSequencePayload>
          }
          findMany: {
            args: Prisma.TicketSequenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSequencePayload>[]
          }
          create: {
            args: Prisma.TicketSequenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSequencePayload>
          }
          createMany: {
            args: Prisma.TicketSequenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketSequenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSequencePayload>[]
          }
          delete: {
            args: Prisma.TicketSequenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSequencePayload>
          }
          update: {
            args: Prisma.TicketSequenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSequencePayload>
          }
          deleteMany: {
            args: Prisma.TicketSequenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketSequenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketSequenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSequencePayload>[]
          }
          upsert: {
            args: Prisma.TicketSequenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSequencePayload>
          }
          aggregate: {
            args: Prisma.TicketSequenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketSequence>
          }
          groupBy: {
            args: Prisma.TicketSequenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketSequenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketSequenceCountArgs<ExtArgs>
            result: $Utils.Optional<TicketSequenceCountAggregateOutputType> | number
          }
        }
      }
      ApiKey: {
        payload: Prisma.$ApiKeyPayload<ExtArgs>
        fields: Prisma.ApiKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findFirst: {
            args: Prisma.ApiKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findMany: {
            args: Prisma.ApiKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          create: {
            args: Prisma.ApiKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          createMany: {
            args: Prisma.ApiKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          delete: {
            args: Prisma.ApiKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          update: {
            args: Prisma.ApiKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          deleteMany: {
            args: Prisma.ApiKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          upsert: {
            args: Prisma.ApiKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          aggregate: {
            args: Prisma.ApiKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiKey>
          }
          groupBy: {
            args: Prisma.ApiKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiKeyCountArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyCountAggregateOutputType> | number
          }
        }
      }
      ImportJob: {
        payload: Prisma.$ImportJobPayload<ExtArgs>
        fields: Prisma.ImportJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImportJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImportJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportJobPayload>
          }
          findFirst: {
            args: Prisma.ImportJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImportJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportJobPayload>
          }
          findMany: {
            args: Prisma.ImportJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportJobPayload>[]
          }
          create: {
            args: Prisma.ImportJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportJobPayload>
          }
          createMany: {
            args: Prisma.ImportJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImportJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportJobPayload>[]
          }
          delete: {
            args: Prisma.ImportJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportJobPayload>
          }
          update: {
            args: Prisma.ImportJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportJobPayload>
          }
          deleteMany: {
            args: Prisma.ImportJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImportJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImportJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportJobPayload>[]
          }
          upsert: {
            args: Prisma.ImportJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportJobPayload>
          }
          aggregate: {
            args: Prisma.ImportJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImportJob>
          }
          groupBy: {
            args: Prisma.ImportJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImportJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImportJobCountArgs<ExtArgs>
            result: $Utils.Optional<ImportJobCountAggregateOutputType> | number
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
    otp?: OtpOmit
    company?: CompanyOmit
    deliveryPlant?: DeliveryPlantOmit
    vehicle?: VehicleOmit
    product?: ProductOmit
    ticket?: TicketOmit
    ticketDocument?: TicketDocumentOmit
    ticketEventLog?: TicketEventLogOmit
    ticketSequence?: TicketSequenceOmit
    apiKey?: ApiKeyOmit
    importJob?: ImportJobOmit
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
    importJobs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    importJobs?: boolean | UserCountOutputTypeCountImportJobsArgs
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
  export type UserCountOutputTypeCountImportJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImportJobWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    users: number
    deliveryPlants: number
    vehicles: number
    suppliedProducts: number
    sentTickets: number
    customerTickets: number
    transporterTickets: number
    apiKeys: number
    importJobs: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | CompanyCountOutputTypeCountUsersArgs
    deliveryPlants?: boolean | CompanyCountOutputTypeCountDeliveryPlantsArgs
    vehicles?: boolean | CompanyCountOutputTypeCountVehiclesArgs
    suppliedProducts?: boolean | CompanyCountOutputTypeCountSuppliedProductsArgs
    sentTickets?: boolean | CompanyCountOutputTypeCountSentTicketsArgs
    customerTickets?: boolean | CompanyCountOutputTypeCountCustomerTicketsArgs
    transporterTickets?: boolean | CompanyCountOutputTypeCountTransporterTicketsArgs
    apiKeys?: boolean | CompanyCountOutputTypeCountApiKeysArgs
    importJobs?: boolean | CompanyCountOutputTypeCountImportJobsArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountDeliveryPlantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryPlantWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountVehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountSuppliedProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountSentTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountCustomerTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountTransporterTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountApiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountImportJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImportJobWhereInput
  }


  /**
   * Count Type DeliveryPlantCountOutputType
   */

  export type DeliveryPlantCountOutputType = {
    tickets: number
  }

  export type DeliveryPlantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | DeliveryPlantCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * DeliveryPlantCountOutputType without action
   */
  export type DeliveryPlantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPlantCountOutputType
     */
    select?: DeliveryPlantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeliveryPlantCountOutputType without action
   */
  export type DeliveryPlantCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    tickets: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | VehicleCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    tickets: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | ProductCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    documents: number
    events: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | TicketCountOutputTypeCountDocumentsArgs
    events?: boolean | TicketCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketDocumentWhereInput
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketEventLogWhereInput
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
    password: string | null
    companyId: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    companyId: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    companyId: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    companyId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    companyId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    companyId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
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
    password: string | null
    companyId: string | null
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date | null
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
    password?: boolean
    companyId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | User$companyArgs<ExtArgs>
    importJobs?: boolean | User$importJobsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    companyId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | User$companyArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    companyId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | User$companyArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    companyId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "companyId" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | User$companyArgs<ExtArgs>
    importJobs?: boolean | User$importJobsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | User$companyArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | User$companyArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs> | null
      importJobs: Prisma.$ImportJobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string | null
      companyId: string | null
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date | null
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
    company<T extends User$companyArgs<ExtArgs> = {}>(args?: Subset<T, User$companyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    importJobs<T extends User$importJobsArgs<ExtArgs> = {}>(args?: Subset<T, User$importJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly password: FieldRef<"User", 'String'>
    readonly companyId: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.company
   */
  export type User$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * User.importJobs
   */
  export type User$importJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportJob
     */
    select?: ImportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportJob
     */
    omit?: ImportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportJobInclude<ExtArgs> | null
    where?: ImportJobWhereInput
    orderBy?: ImportJobOrderByWithRelationInput | ImportJobOrderByWithRelationInput[]
    cursor?: ImportJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImportJobScalarFieldEnum | ImportJobScalarFieldEnum[]
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
   * Model Otp
   */

  export type AggregateOtp = {
    _count: OtpCountAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  export type OtpMinAggregateOutputType = {
    id: string | null
    email: string | null
    otpHash: string | null
    used: boolean | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type OtpMaxAggregateOutputType = {
    id: string | null
    email: string | null
    otpHash: string | null
    used: boolean | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type OtpCountAggregateOutputType = {
    id: number
    email: number
    otpHash: number
    used: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type OtpMinAggregateInputType = {
    id?: true
    email?: true
    otpHash?: true
    used?: true
    expiresAt?: true
    createdAt?: true
  }

  export type OtpMaxAggregateInputType = {
    id?: true
    email?: true
    otpHash?: true
    used?: true
    expiresAt?: true
    createdAt?: true
  }

  export type OtpCountAggregateInputType = {
    id?: true
    email?: true
    otpHash?: true
    used?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type OtpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otp to aggregate.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Otps
    **/
    _count?: true | OtpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpMaxAggregateInputType
  }

  export type GetOtpAggregateType<T extends OtpAggregateArgs> = {
        [P in keyof T & keyof AggregateOtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtp[P]>
      : GetScalarType<T[P], AggregateOtp[P]>
  }




  export type OtpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpWhereInput
    orderBy?: OtpOrderByWithAggregationInput | OtpOrderByWithAggregationInput[]
    by: OtpScalarFieldEnum[] | OtpScalarFieldEnum
    having?: OtpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpCountAggregateInputType | true
    _min?: OtpMinAggregateInputType
    _max?: OtpMaxAggregateInputType
  }

  export type OtpGroupByOutputType = {
    id: string
    email: string
    otpHash: string
    used: boolean
    expiresAt: Date
    createdAt: Date
    _count: OtpCountAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  type GetOtpGroupByPayload<T extends OtpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpGroupByOutputType[P]>
            : GetScalarType<T[P], OtpGroupByOutputType[P]>
        }
      >
    >


  export type OtpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otpHash?: boolean
    used?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otpHash?: boolean
    used?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otpHash?: boolean
    used?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectScalar = {
    id?: boolean
    email?: boolean
    otpHash?: boolean
    used?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type OtpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "otpHash" | "used" | "expiresAt" | "createdAt", ExtArgs["result"]["otp"]>

  export type $OtpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Otp"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      otpHash: string
      used: boolean
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["otp"]>
    composites: {}
  }

  type OtpGetPayload<S extends boolean | null | undefined | OtpDefaultArgs> = $Result.GetResult<Prisma.$OtpPayload, S>

  type OtpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OtpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtpCountAggregateInputType | true
    }

  export interface OtpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Otp'], meta: { name: 'Otp' } }
    /**
     * Find zero or one Otp that matches the filter.
     * @param {OtpFindUniqueArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtpFindUniqueArgs>(args: SelectSubset<T, OtpFindUniqueArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Otp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtpFindUniqueOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtpFindUniqueOrThrowArgs>(args: SelectSubset<T, OtpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtpFindFirstArgs>(args?: SelectSubset<T, OtpFindFirstArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtpFindFirstOrThrowArgs>(args?: SelectSubset<T, OtpFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Otps
     * const otps = await prisma.otp.findMany()
     * 
     * // Get first 10 Otps
     * const otps = await prisma.otp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpWithIdOnly = await prisma.otp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtpFindManyArgs>(args?: SelectSubset<T, OtpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Otp.
     * @param {OtpCreateArgs} args - Arguments to create a Otp.
     * @example
     * // Create one Otp
     * const Otp = await prisma.otp.create({
     *   data: {
     *     // ... data to create a Otp
     *   }
     * })
     * 
     */
    create<T extends OtpCreateArgs>(args: SelectSubset<T, OtpCreateArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Otps.
     * @param {OtpCreateManyArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtpCreateManyArgs>(args?: SelectSubset<T, OtpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Otps and returns the data saved in the database.
     * @param {OtpCreateManyAndReturnArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Otps and only return the `id`
     * const otpWithIdOnly = await prisma.otp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OtpCreateManyAndReturnArgs>(args?: SelectSubset<T, OtpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Otp.
     * @param {OtpDeleteArgs} args - Arguments to delete one Otp.
     * @example
     * // Delete one Otp
     * const Otp = await prisma.otp.delete({
     *   where: {
     *     // ... filter to delete one Otp
     *   }
     * })
     * 
     */
    delete<T extends OtpDeleteArgs>(args: SelectSubset<T, OtpDeleteArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Otp.
     * @param {OtpUpdateArgs} args - Arguments to update one Otp.
     * @example
     * // Update one Otp
     * const otp = await prisma.otp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtpUpdateArgs>(args: SelectSubset<T, OtpUpdateArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Otps.
     * @param {OtpDeleteManyArgs} args - Arguments to filter Otps to delete.
     * @example
     * // Delete a few Otps
     * const { count } = await prisma.otp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtpDeleteManyArgs>(args?: SelectSubset<T, OtpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtpUpdateManyArgs>(args: SelectSubset<T, OtpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps and returns the data updated in the database.
     * @param {OtpUpdateManyAndReturnArgs} args - Arguments to update many Otps.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Otps and only return the `id`
     * const otpWithIdOnly = await prisma.otp.updateManyAndReturn({
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
    updateManyAndReturn<T extends OtpUpdateManyAndReturnArgs>(args: SelectSubset<T, OtpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Otp.
     * @param {OtpUpsertArgs} args - Arguments to update or create a Otp.
     * @example
     * // Update or create a Otp
     * const otp = await prisma.otp.upsert({
     *   create: {
     *     // ... data to create a Otp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Otp we want to update
     *   }
     * })
     */
    upsert<T extends OtpUpsertArgs>(args: SelectSubset<T, OtpUpsertArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCountArgs} args - Arguments to filter Otps to count.
     * @example
     * // Count the number of Otps
     * const count = await prisma.otp.count({
     *   where: {
     *     // ... the filter for the Otps we want to count
     *   }
     * })
    **/
    count<T extends OtpCountArgs>(
      args?: Subset<T, OtpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtpAggregateArgs>(args: Subset<T, OtpAggregateArgs>): Prisma.PrismaPromise<GetOtpAggregateType<T>>

    /**
     * Group by Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpGroupByArgs} args - Group by arguments.
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
      T extends OtpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpGroupByArgs['orderBy'] }
        : { orderBy?: OtpGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OtpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Otp model
   */
  readonly fields: OtpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Otp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Otp model
   */
  interface OtpFieldRefs {
    readonly id: FieldRef<"Otp", 'String'>
    readonly email: FieldRef<"Otp", 'String'>
    readonly otpHash: FieldRef<"Otp", 'String'>
    readonly used: FieldRef<"Otp", 'Boolean'>
    readonly expiresAt: FieldRef<"Otp", 'DateTime'>
    readonly createdAt: FieldRef<"Otp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Otp findUnique
   */
  export type OtpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp findUniqueOrThrow
   */
  export type OtpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp findFirst
   */
  export type OtpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp findFirstOrThrow
   */
  export type OtpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp findMany
   */
  export type OtpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otps to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp create
   */
  export type OtpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data needed to create a Otp.
     */
    data: XOR<OtpCreateInput, OtpUncheckedCreateInput>
  }

  /**
   * Otp createMany
   */
  export type OtpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Otps.
     */
    data: OtpCreateManyInput | OtpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Otp createManyAndReturn
   */
  export type OtpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data used to create many Otps.
     */
    data: OtpCreateManyInput | OtpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Otp update
   */
  export type OtpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data needed to update a Otp.
     */
    data: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
    /**
     * Choose, which Otp to update.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp updateMany
   */
  export type OtpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Otps.
     */
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyInput>
    /**
     * Filter which Otps to update
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to update.
     */
    limit?: number
  }

  /**
   * Otp updateManyAndReturn
   */
  export type OtpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data used to update Otps.
     */
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyInput>
    /**
     * Filter which Otps to update
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to update.
     */
    limit?: number
  }

  /**
   * Otp upsert
   */
  export type OtpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The filter to search for the Otp to update in case it exists.
     */
    where: OtpWhereUniqueInput
    /**
     * In case the Otp found by the `where` argument doesn't exist, create a new Otp with this data.
     */
    create: XOR<OtpCreateInput, OtpUncheckedCreateInput>
    /**
     * In case the Otp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
  }

  /**
   * Otp delete
   */
  export type OtpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter which Otp to delete.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp deleteMany
   */
  export type OtpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otps to delete
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to delete.
     */
    limit?: number
  }

  /**
   * Otp without action
   */
  export type OtpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    vatNumber: string | null
    email: string | null
    phone: string | null
    country: string | null
    city: string | null
    postalCode: string | null
    address1: string | null
    address2: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    vatNumber: string | null
    email: string | null
    phone: string | null
    country: string | null
    city: string | null
    postalCode: string | null
    address1: string | null
    address2: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    vatNumber: number
    email: number
    phone: number
    country: number
    city: number
    postalCode: number
    address1: number
    address2: number
    roles: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    vatNumber?: true
    email?: true
    phone?: true
    country?: true
    city?: true
    postalCode?: true
    address1?: true
    address2?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    vatNumber?: true
    email?: true
    phone?: true
    country?: true
    city?: true
    postalCode?: true
    address1?: true
    address2?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    vatNumber?: true
    email?: true
    phone?: true
    country?: true
    city?: true
    postalCode?: true
    address1?: true
    address2?: true
    roles?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    vatNumber: string
    email: string | null
    phone: string | null
    country: string | null
    city: string | null
    postalCode: string | null
    address1: string | null
    address2: string | null
    roles: $Enums.CompanyRole[]
    createdAt: Date
    updatedAt: Date | null
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    vatNumber?: boolean
    email?: boolean
    phone?: boolean
    country?: boolean
    city?: boolean
    postalCode?: boolean
    address1?: boolean
    address2?: boolean
    roles?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Company$usersArgs<ExtArgs>
    deliveryPlants?: boolean | Company$deliveryPlantsArgs<ExtArgs>
    vehicles?: boolean | Company$vehiclesArgs<ExtArgs>
    suppliedProducts?: boolean | Company$suppliedProductsArgs<ExtArgs>
    sentTickets?: boolean | Company$sentTicketsArgs<ExtArgs>
    customerTickets?: boolean | Company$customerTicketsArgs<ExtArgs>
    transporterTickets?: boolean | Company$transporterTicketsArgs<ExtArgs>
    apiKeys?: boolean | Company$apiKeysArgs<ExtArgs>
    importJobs?: boolean | Company$importJobsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    vatNumber?: boolean
    email?: boolean
    phone?: boolean
    country?: boolean
    city?: boolean
    postalCode?: boolean
    address1?: boolean
    address2?: boolean
    roles?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    vatNumber?: boolean
    email?: boolean
    phone?: boolean
    country?: boolean
    city?: boolean
    postalCode?: boolean
    address1?: boolean
    address2?: boolean
    roles?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    vatNumber?: boolean
    email?: boolean
    phone?: boolean
    country?: boolean
    city?: boolean
    postalCode?: boolean
    address1?: boolean
    address2?: boolean
    roles?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "vatNumber" | "email" | "phone" | "country" | "city" | "postalCode" | "address1" | "address2" | "roles" | "createdAt" | "updatedAt", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Company$usersArgs<ExtArgs>
    deliveryPlants?: boolean | Company$deliveryPlantsArgs<ExtArgs>
    vehicles?: boolean | Company$vehiclesArgs<ExtArgs>
    suppliedProducts?: boolean | Company$suppliedProductsArgs<ExtArgs>
    sentTickets?: boolean | Company$sentTicketsArgs<ExtArgs>
    customerTickets?: boolean | Company$customerTicketsArgs<ExtArgs>
    transporterTickets?: boolean | Company$transporterTicketsArgs<ExtArgs>
    apiKeys?: boolean | Company$apiKeysArgs<ExtArgs>
    importJobs?: boolean | Company$importJobsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      deliveryPlants: Prisma.$DeliveryPlantPayload<ExtArgs>[]
      vehicles: Prisma.$VehiclePayload<ExtArgs>[]
      suppliedProducts: Prisma.$ProductPayload<ExtArgs>[]
      sentTickets: Prisma.$TicketPayload<ExtArgs>[]
      customerTickets: Prisma.$TicketPayload<ExtArgs>[]
      transporterTickets: Prisma.$TicketPayload<ExtArgs>[]
      apiKeys: Prisma.$ApiKeyPayload<ExtArgs>[]
      importJobs: Prisma.$ImportJobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      vatNumber: string
      email: string | null
      phone: string | null
      country: string | null
      city: string | null
      postalCode: string | null
      address1: string | null
      address2: string | null
      roles: $Enums.CompanyRole[]
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Company$usersArgs<ExtArgs> = {}>(args?: Subset<T, Company$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deliveryPlants<T extends Company$deliveryPlantsArgs<ExtArgs> = {}>(args?: Subset<T, Company$deliveryPlantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPlantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vehicles<T extends Company$vehiclesArgs<ExtArgs> = {}>(args?: Subset<T, Company$vehiclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    suppliedProducts<T extends Company$suppliedProductsArgs<ExtArgs> = {}>(args?: Subset<T, Company$suppliedProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentTickets<T extends Company$sentTicketsArgs<ExtArgs> = {}>(args?: Subset<T, Company$sentTicketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customerTickets<T extends Company$customerTicketsArgs<ExtArgs> = {}>(args?: Subset<T, Company$customerTicketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transporterTickets<T extends Company$transporterTicketsArgs<ExtArgs> = {}>(args?: Subset<T, Company$transporterTicketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    apiKeys<T extends Company$apiKeysArgs<ExtArgs> = {}>(args?: Subset<T, Company$apiKeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    importJobs<T extends Company$importJobsArgs<ExtArgs> = {}>(args?: Subset<T, Company$importJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly vatNumber: FieldRef<"Company", 'String'>
    readonly email: FieldRef<"Company", 'String'>
    readonly phone: FieldRef<"Company", 'String'>
    readonly country: FieldRef<"Company", 'String'>
    readonly city: FieldRef<"Company", 'String'>
    readonly postalCode: FieldRef<"Company", 'String'>
    readonly address1: FieldRef<"Company", 'String'>
    readonly address2: FieldRef<"Company", 'String'>
    readonly roles: FieldRef<"Company", 'CompanyRole[]'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.users
   */
  export type Company$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Company.deliveryPlants
   */
  export type Company$deliveryPlantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPlant
     */
    select?: DeliveryPlantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPlant
     */
    omit?: DeliveryPlantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPlantInclude<ExtArgs> | null
    where?: DeliveryPlantWhereInput
    orderBy?: DeliveryPlantOrderByWithRelationInput | DeliveryPlantOrderByWithRelationInput[]
    cursor?: DeliveryPlantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveryPlantScalarFieldEnum | DeliveryPlantScalarFieldEnum[]
  }

  /**
   * Company.vehicles
   */
  export type Company$vehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    cursor?: VehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Company.suppliedProducts
   */
  export type Company$suppliedProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Company.sentTickets
   */
  export type Company$sentTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Company.customerTickets
   */
  export type Company$customerTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Company.transporterTickets
   */
  export type Company$transporterTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Company.apiKeys
   */
  export type Company$apiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    cursor?: ApiKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * Company.importJobs
   */
  export type Company$importJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportJob
     */
    select?: ImportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportJob
     */
    omit?: ImportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportJobInclude<ExtArgs> | null
    where?: ImportJobWhereInput
    orderBy?: ImportJobOrderByWithRelationInput | ImportJobOrderByWithRelationInput[]
    cursor?: ImportJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImportJobScalarFieldEnum | ImportJobScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model DeliveryPlant
   */

  export type AggregateDeliveryPlant = {
    _count: DeliveryPlantCountAggregateOutputType | null
    _min: DeliveryPlantMinAggregateOutputType | null
    _max: DeliveryPlantMaxAggregateOutputType | null
  }

  export type DeliveryPlantMinAggregateOutputType = {
    id: string | null
    name: string | null
    country: string | null
    city: string | null
    postalCode: string | null
    address1: string | null
    address2: string | null
    companyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeliveryPlantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    country: string | null
    city: string | null
    postalCode: string | null
    address1: string | null
    address2: string | null
    companyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeliveryPlantCountAggregateOutputType = {
    id: number
    name: number
    country: number
    city: number
    postalCode: number
    address1: number
    address2: number
    companyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeliveryPlantMinAggregateInputType = {
    id?: true
    name?: true
    country?: true
    city?: true
    postalCode?: true
    address1?: true
    address2?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeliveryPlantMaxAggregateInputType = {
    id?: true
    name?: true
    country?: true
    city?: true
    postalCode?: true
    address1?: true
    address2?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeliveryPlantCountAggregateInputType = {
    id?: true
    name?: true
    country?: true
    city?: true
    postalCode?: true
    address1?: true
    address2?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeliveryPlantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryPlant to aggregate.
     */
    where?: DeliveryPlantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryPlants to fetch.
     */
    orderBy?: DeliveryPlantOrderByWithRelationInput | DeliveryPlantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliveryPlantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryPlants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryPlants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeliveryPlants
    **/
    _count?: true | DeliveryPlantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveryPlantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveryPlantMaxAggregateInputType
  }

  export type GetDeliveryPlantAggregateType<T extends DeliveryPlantAggregateArgs> = {
        [P in keyof T & keyof AggregateDeliveryPlant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeliveryPlant[P]>
      : GetScalarType<T[P], AggregateDeliveryPlant[P]>
  }




  export type DeliveryPlantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryPlantWhereInput
    orderBy?: DeliveryPlantOrderByWithAggregationInput | DeliveryPlantOrderByWithAggregationInput[]
    by: DeliveryPlantScalarFieldEnum[] | DeliveryPlantScalarFieldEnum
    having?: DeliveryPlantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveryPlantCountAggregateInputType | true
    _min?: DeliveryPlantMinAggregateInputType
    _max?: DeliveryPlantMaxAggregateInputType
  }

  export type DeliveryPlantGroupByOutputType = {
    id: string
    name: string
    country: string | null
    city: string | null
    postalCode: string | null
    address1: string | null
    address2: string | null
    companyId: string
    createdAt: Date
    updatedAt: Date | null
    _count: DeliveryPlantCountAggregateOutputType | null
    _min: DeliveryPlantMinAggregateOutputType | null
    _max: DeliveryPlantMaxAggregateOutputType | null
  }

  type GetDeliveryPlantGroupByPayload<T extends DeliveryPlantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveryPlantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveryPlantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveryPlantGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveryPlantGroupByOutputType[P]>
        }
      >
    >


  export type DeliveryPlantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    city?: boolean
    postalCode?: boolean
    address1?: boolean
    address2?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    tickets?: boolean | DeliveryPlant$ticketsArgs<ExtArgs>
    _count?: boolean | DeliveryPlantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveryPlant"]>

  export type DeliveryPlantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    city?: boolean
    postalCode?: boolean
    address1?: boolean
    address2?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveryPlant"]>

  export type DeliveryPlantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    city?: boolean
    postalCode?: boolean
    address1?: boolean
    address2?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveryPlant"]>

  export type DeliveryPlantSelectScalar = {
    id?: boolean
    name?: boolean
    country?: boolean
    city?: boolean
    postalCode?: boolean
    address1?: boolean
    address2?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeliveryPlantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "country" | "city" | "postalCode" | "address1" | "address2" | "companyId" | "createdAt" | "updatedAt", ExtArgs["result"]["deliveryPlant"]>
  export type DeliveryPlantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    tickets?: boolean | DeliveryPlant$ticketsArgs<ExtArgs>
    _count?: boolean | DeliveryPlantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeliveryPlantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type DeliveryPlantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $DeliveryPlantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeliveryPlant"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      country: string | null
      city: string | null
      postalCode: string | null
      address1: string | null
      address2: string | null
      companyId: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["deliveryPlant"]>
    composites: {}
  }

  type DeliveryPlantGetPayload<S extends boolean | null | undefined | DeliveryPlantDefaultArgs> = $Result.GetResult<Prisma.$DeliveryPlantPayload, S>

  type DeliveryPlantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeliveryPlantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeliveryPlantCountAggregateInputType | true
    }

  export interface DeliveryPlantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeliveryPlant'], meta: { name: 'DeliveryPlant' } }
    /**
     * Find zero or one DeliveryPlant that matches the filter.
     * @param {DeliveryPlantFindUniqueArgs} args - Arguments to find a DeliveryPlant
     * @example
     * // Get one DeliveryPlant
     * const deliveryPlant = await prisma.deliveryPlant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeliveryPlantFindUniqueArgs>(args: SelectSubset<T, DeliveryPlantFindUniqueArgs<ExtArgs>>): Prisma__DeliveryPlantClient<$Result.GetResult<Prisma.$DeliveryPlantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeliveryPlant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeliveryPlantFindUniqueOrThrowArgs} args - Arguments to find a DeliveryPlant
     * @example
     * // Get one DeliveryPlant
     * const deliveryPlant = await prisma.deliveryPlant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeliveryPlantFindUniqueOrThrowArgs>(args: SelectSubset<T, DeliveryPlantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeliveryPlantClient<$Result.GetResult<Prisma.$DeliveryPlantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeliveryPlant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryPlantFindFirstArgs} args - Arguments to find a DeliveryPlant
     * @example
     * // Get one DeliveryPlant
     * const deliveryPlant = await prisma.deliveryPlant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeliveryPlantFindFirstArgs>(args?: SelectSubset<T, DeliveryPlantFindFirstArgs<ExtArgs>>): Prisma__DeliveryPlantClient<$Result.GetResult<Prisma.$DeliveryPlantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeliveryPlant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryPlantFindFirstOrThrowArgs} args - Arguments to find a DeliveryPlant
     * @example
     * // Get one DeliveryPlant
     * const deliveryPlant = await prisma.deliveryPlant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeliveryPlantFindFirstOrThrowArgs>(args?: SelectSubset<T, DeliveryPlantFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeliveryPlantClient<$Result.GetResult<Prisma.$DeliveryPlantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeliveryPlants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryPlantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeliveryPlants
     * const deliveryPlants = await prisma.deliveryPlant.findMany()
     * 
     * // Get first 10 DeliveryPlants
     * const deliveryPlants = await prisma.deliveryPlant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliveryPlantWithIdOnly = await prisma.deliveryPlant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeliveryPlantFindManyArgs>(args?: SelectSubset<T, DeliveryPlantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPlantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeliveryPlant.
     * @param {DeliveryPlantCreateArgs} args - Arguments to create a DeliveryPlant.
     * @example
     * // Create one DeliveryPlant
     * const DeliveryPlant = await prisma.deliveryPlant.create({
     *   data: {
     *     // ... data to create a DeliveryPlant
     *   }
     * })
     * 
     */
    create<T extends DeliveryPlantCreateArgs>(args: SelectSubset<T, DeliveryPlantCreateArgs<ExtArgs>>): Prisma__DeliveryPlantClient<$Result.GetResult<Prisma.$DeliveryPlantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeliveryPlants.
     * @param {DeliveryPlantCreateManyArgs} args - Arguments to create many DeliveryPlants.
     * @example
     * // Create many DeliveryPlants
     * const deliveryPlant = await prisma.deliveryPlant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeliveryPlantCreateManyArgs>(args?: SelectSubset<T, DeliveryPlantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeliveryPlants and returns the data saved in the database.
     * @param {DeliveryPlantCreateManyAndReturnArgs} args - Arguments to create many DeliveryPlants.
     * @example
     * // Create many DeliveryPlants
     * const deliveryPlant = await prisma.deliveryPlant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeliveryPlants and only return the `id`
     * const deliveryPlantWithIdOnly = await prisma.deliveryPlant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeliveryPlantCreateManyAndReturnArgs>(args?: SelectSubset<T, DeliveryPlantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPlantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeliveryPlant.
     * @param {DeliveryPlantDeleteArgs} args - Arguments to delete one DeliveryPlant.
     * @example
     * // Delete one DeliveryPlant
     * const DeliveryPlant = await prisma.deliveryPlant.delete({
     *   where: {
     *     // ... filter to delete one DeliveryPlant
     *   }
     * })
     * 
     */
    delete<T extends DeliveryPlantDeleteArgs>(args: SelectSubset<T, DeliveryPlantDeleteArgs<ExtArgs>>): Prisma__DeliveryPlantClient<$Result.GetResult<Prisma.$DeliveryPlantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeliveryPlant.
     * @param {DeliveryPlantUpdateArgs} args - Arguments to update one DeliveryPlant.
     * @example
     * // Update one DeliveryPlant
     * const deliveryPlant = await prisma.deliveryPlant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeliveryPlantUpdateArgs>(args: SelectSubset<T, DeliveryPlantUpdateArgs<ExtArgs>>): Prisma__DeliveryPlantClient<$Result.GetResult<Prisma.$DeliveryPlantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeliveryPlants.
     * @param {DeliveryPlantDeleteManyArgs} args - Arguments to filter DeliveryPlants to delete.
     * @example
     * // Delete a few DeliveryPlants
     * const { count } = await prisma.deliveryPlant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeliveryPlantDeleteManyArgs>(args?: SelectSubset<T, DeliveryPlantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeliveryPlants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryPlantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeliveryPlants
     * const deliveryPlant = await prisma.deliveryPlant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeliveryPlantUpdateManyArgs>(args: SelectSubset<T, DeliveryPlantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeliveryPlants and returns the data updated in the database.
     * @param {DeliveryPlantUpdateManyAndReturnArgs} args - Arguments to update many DeliveryPlants.
     * @example
     * // Update many DeliveryPlants
     * const deliveryPlant = await prisma.deliveryPlant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeliveryPlants and only return the `id`
     * const deliveryPlantWithIdOnly = await prisma.deliveryPlant.updateManyAndReturn({
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
    updateManyAndReturn<T extends DeliveryPlantUpdateManyAndReturnArgs>(args: SelectSubset<T, DeliveryPlantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPlantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeliveryPlant.
     * @param {DeliveryPlantUpsertArgs} args - Arguments to update or create a DeliveryPlant.
     * @example
     * // Update or create a DeliveryPlant
     * const deliveryPlant = await prisma.deliveryPlant.upsert({
     *   create: {
     *     // ... data to create a DeliveryPlant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeliveryPlant we want to update
     *   }
     * })
     */
    upsert<T extends DeliveryPlantUpsertArgs>(args: SelectSubset<T, DeliveryPlantUpsertArgs<ExtArgs>>): Prisma__DeliveryPlantClient<$Result.GetResult<Prisma.$DeliveryPlantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeliveryPlants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryPlantCountArgs} args - Arguments to filter DeliveryPlants to count.
     * @example
     * // Count the number of DeliveryPlants
     * const count = await prisma.deliveryPlant.count({
     *   where: {
     *     // ... the filter for the DeliveryPlants we want to count
     *   }
     * })
    **/
    count<T extends DeliveryPlantCountArgs>(
      args?: Subset<T, DeliveryPlantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveryPlantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeliveryPlant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryPlantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeliveryPlantAggregateArgs>(args: Subset<T, DeliveryPlantAggregateArgs>): Prisma.PrismaPromise<GetDeliveryPlantAggregateType<T>>

    /**
     * Group by DeliveryPlant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryPlantGroupByArgs} args - Group by arguments.
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
      T extends DeliveryPlantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliveryPlantGroupByArgs['orderBy'] }
        : { orderBy?: DeliveryPlantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeliveryPlantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryPlantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeliveryPlant model
   */
  readonly fields: DeliveryPlantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeliveryPlant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliveryPlantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tickets<T extends DeliveryPlant$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, DeliveryPlant$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DeliveryPlant model
   */
  interface DeliveryPlantFieldRefs {
    readonly id: FieldRef<"DeliveryPlant", 'String'>
    readonly name: FieldRef<"DeliveryPlant", 'String'>
    readonly country: FieldRef<"DeliveryPlant", 'String'>
    readonly city: FieldRef<"DeliveryPlant", 'String'>
    readonly postalCode: FieldRef<"DeliveryPlant", 'String'>
    readonly address1: FieldRef<"DeliveryPlant", 'String'>
    readonly address2: FieldRef<"DeliveryPlant", 'String'>
    readonly companyId: FieldRef<"DeliveryPlant", 'String'>
    readonly createdAt: FieldRef<"DeliveryPlant", 'DateTime'>
    readonly updatedAt: FieldRef<"DeliveryPlant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DeliveryPlant findUnique
   */
  export type DeliveryPlantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPlant
     */
    select?: DeliveryPlantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPlant
     */
    omit?: DeliveryPlantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPlantInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryPlant to fetch.
     */
    where: DeliveryPlantWhereUniqueInput
  }

  /**
   * DeliveryPlant findUniqueOrThrow
   */
  export type DeliveryPlantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPlant
     */
    select?: DeliveryPlantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPlant
     */
    omit?: DeliveryPlantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPlantInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryPlant to fetch.
     */
    where: DeliveryPlantWhereUniqueInput
  }

  /**
   * DeliveryPlant findFirst
   */
  export type DeliveryPlantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPlant
     */
    select?: DeliveryPlantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPlant
     */
    omit?: DeliveryPlantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPlantInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryPlant to fetch.
     */
    where?: DeliveryPlantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryPlants to fetch.
     */
    orderBy?: DeliveryPlantOrderByWithRelationInput | DeliveryPlantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryPlants.
     */
    cursor?: DeliveryPlantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryPlants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryPlants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryPlants.
     */
    distinct?: DeliveryPlantScalarFieldEnum | DeliveryPlantScalarFieldEnum[]
  }

  /**
   * DeliveryPlant findFirstOrThrow
   */
  export type DeliveryPlantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPlant
     */
    select?: DeliveryPlantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPlant
     */
    omit?: DeliveryPlantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPlantInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryPlant to fetch.
     */
    where?: DeliveryPlantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryPlants to fetch.
     */
    orderBy?: DeliveryPlantOrderByWithRelationInput | DeliveryPlantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryPlants.
     */
    cursor?: DeliveryPlantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryPlants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryPlants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryPlants.
     */
    distinct?: DeliveryPlantScalarFieldEnum | DeliveryPlantScalarFieldEnum[]
  }

  /**
   * DeliveryPlant findMany
   */
  export type DeliveryPlantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPlant
     */
    select?: DeliveryPlantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPlant
     */
    omit?: DeliveryPlantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPlantInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryPlants to fetch.
     */
    where?: DeliveryPlantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryPlants to fetch.
     */
    orderBy?: DeliveryPlantOrderByWithRelationInput | DeliveryPlantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeliveryPlants.
     */
    cursor?: DeliveryPlantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryPlants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryPlants.
     */
    skip?: number
    distinct?: DeliveryPlantScalarFieldEnum | DeliveryPlantScalarFieldEnum[]
  }

  /**
   * DeliveryPlant create
   */
  export type DeliveryPlantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPlant
     */
    select?: DeliveryPlantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPlant
     */
    omit?: DeliveryPlantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPlantInclude<ExtArgs> | null
    /**
     * The data needed to create a DeliveryPlant.
     */
    data: XOR<DeliveryPlantCreateInput, DeliveryPlantUncheckedCreateInput>
  }

  /**
   * DeliveryPlant createMany
   */
  export type DeliveryPlantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeliveryPlants.
     */
    data: DeliveryPlantCreateManyInput | DeliveryPlantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeliveryPlant createManyAndReturn
   */
  export type DeliveryPlantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPlant
     */
    select?: DeliveryPlantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPlant
     */
    omit?: DeliveryPlantOmit<ExtArgs> | null
    /**
     * The data used to create many DeliveryPlants.
     */
    data: DeliveryPlantCreateManyInput | DeliveryPlantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPlantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeliveryPlant update
   */
  export type DeliveryPlantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPlant
     */
    select?: DeliveryPlantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPlant
     */
    omit?: DeliveryPlantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPlantInclude<ExtArgs> | null
    /**
     * The data needed to update a DeliveryPlant.
     */
    data: XOR<DeliveryPlantUpdateInput, DeliveryPlantUncheckedUpdateInput>
    /**
     * Choose, which DeliveryPlant to update.
     */
    where: DeliveryPlantWhereUniqueInput
  }

  /**
   * DeliveryPlant updateMany
   */
  export type DeliveryPlantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeliveryPlants.
     */
    data: XOR<DeliveryPlantUpdateManyMutationInput, DeliveryPlantUncheckedUpdateManyInput>
    /**
     * Filter which DeliveryPlants to update
     */
    where?: DeliveryPlantWhereInput
    /**
     * Limit how many DeliveryPlants to update.
     */
    limit?: number
  }

  /**
   * DeliveryPlant updateManyAndReturn
   */
  export type DeliveryPlantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPlant
     */
    select?: DeliveryPlantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPlant
     */
    omit?: DeliveryPlantOmit<ExtArgs> | null
    /**
     * The data used to update DeliveryPlants.
     */
    data: XOR<DeliveryPlantUpdateManyMutationInput, DeliveryPlantUncheckedUpdateManyInput>
    /**
     * Filter which DeliveryPlants to update
     */
    where?: DeliveryPlantWhereInput
    /**
     * Limit how many DeliveryPlants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPlantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeliveryPlant upsert
   */
  export type DeliveryPlantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPlant
     */
    select?: DeliveryPlantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPlant
     */
    omit?: DeliveryPlantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPlantInclude<ExtArgs> | null
    /**
     * The filter to search for the DeliveryPlant to update in case it exists.
     */
    where: DeliveryPlantWhereUniqueInput
    /**
     * In case the DeliveryPlant found by the `where` argument doesn't exist, create a new DeliveryPlant with this data.
     */
    create: XOR<DeliveryPlantCreateInput, DeliveryPlantUncheckedCreateInput>
    /**
     * In case the DeliveryPlant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliveryPlantUpdateInput, DeliveryPlantUncheckedUpdateInput>
  }

  /**
   * DeliveryPlant delete
   */
  export type DeliveryPlantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPlant
     */
    select?: DeliveryPlantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPlant
     */
    omit?: DeliveryPlantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPlantInclude<ExtArgs> | null
    /**
     * Filter which DeliveryPlant to delete.
     */
    where: DeliveryPlantWhereUniqueInput
  }

  /**
   * DeliveryPlant deleteMany
   */
  export type DeliveryPlantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryPlants to delete
     */
    where?: DeliveryPlantWhereInput
    /**
     * Limit how many DeliveryPlants to delete.
     */
    limit?: number
  }

  /**
   * DeliveryPlant.tickets
   */
  export type DeliveryPlant$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * DeliveryPlant without action
   */
  export type DeliveryPlantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPlant
     */
    select?: DeliveryPlantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPlant
     */
    omit?: DeliveryPlantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPlantInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    tareWeight: number | null
    maxLoadKg: number | null
  }

  export type VehicleSumAggregateOutputType = {
    tareWeight: number | null
    maxLoadKg: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    plateNumber: string | null
    vehicleType: string | null
    tareWeight: number | null
    maxLoadKg: number | null
    transporterId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    plateNumber: string | null
    vehicleType: string | null
    tareWeight: number | null
    maxLoadKg: number | null
    transporterId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    plateNumber: number
    vehicleType: number
    tareWeight: number
    maxLoadKg: number
    transporterId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    tareWeight?: true
    maxLoadKg?: true
  }

  export type VehicleSumAggregateInputType = {
    tareWeight?: true
    maxLoadKg?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    plateNumber?: true
    vehicleType?: true
    tareWeight?: true
    maxLoadKg?: true
    transporterId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    plateNumber?: true
    vehicleType?: true
    tareWeight?: true
    maxLoadKg?: true
    transporterId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    plateNumber?: true
    vehicleType?: true
    tareWeight?: true
    maxLoadKg?: true
    transporterId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: string
    plateNumber: string
    vehicleType: string | null
    tareWeight: number | null
    maxLoadKg: number | null
    transporterId: string
    createdAt: Date
    updatedAt: Date | null
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plateNumber?: boolean
    vehicleType?: boolean
    tareWeight?: boolean
    maxLoadKg?: boolean
    transporterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transporter?: boolean | CompanyDefaultArgs<ExtArgs>
    tickets?: boolean | Vehicle$ticketsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plateNumber?: boolean
    vehicleType?: boolean
    tareWeight?: boolean
    maxLoadKg?: boolean
    transporterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transporter?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plateNumber?: boolean
    vehicleType?: boolean
    tareWeight?: boolean
    maxLoadKg?: boolean
    transporterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transporter?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    plateNumber?: boolean
    vehicleType?: boolean
    tareWeight?: boolean
    maxLoadKg?: boolean
    transporterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "plateNumber" | "vehicleType" | "tareWeight" | "maxLoadKg" | "transporterId" | "createdAt" | "updatedAt", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transporter?: boolean | CompanyDefaultArgs<ExtArgs>
    tickets?: boolean | Vehicle$ticketsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transporter?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transporter?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      transporter: Prisma.$CompanyPayload<ExtArgs>
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      plateNumber: string
      vehicleType: string | null
      tareWeight: number | null
      maxLoadKg: number | null
      transporterId: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {VehicleCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles and returns the data updated in the database.
     * @param {VehicleUpdateManyAndReturnArgs} args - Arguments to update many Vehicles.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.updateManyAndReturn({
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
    updateManyAndReturn<T extends VehicleUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
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
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transporter<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tickets<T extends Vehicle$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Vehicle model
   */
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'String'>
    readonly plateNumber: FieldRef<"Vehicle", 'String'>
    readonly vehicleType: FieldRef<"Vehicle", 'String'>
    readonly tareWeight: FieldRef<"Vehicle", 'Int'>
    readonly maxLoadKg: FieldRef<"Vehicle", 'Int'>
    readonly transporterId: FieldRef<"Vehicle", 'String'>
    readonly createdAt: FieldRef<"Vehicle", 'DateTime'>
    readonly updatedAt: FieldRef<"Vehicle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle createManyAndReturn
   */
  export type VehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle updateManyAndReturn
   */
  export type VehicleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicle.tickets
   */
  export type Vehicle$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    density: number | null
  }

  export type ProductSumAggregateOutputType = {
    density: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    code: string | null
    description: string | null
    unit: string | null
    density: number | null
    supplierId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    code: string | null
    description: string | null
    unit: string | null
    density: number | null
    supplierId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    code: number
    description: number
    unit: number
    density: number
    supplierId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    density?: true
  }

  export type ProductSumAggregateInputType = {
    density?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    code?: true
    description?: true
    unit?: true
    density?: true
    supplierId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    code?: true
    description?: true
    unit?: true
    density?: true
    supplierId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    code?: true
    description?: true
    unit?: true
    density?: true
    supplierId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    code: string
    description: string
    unit: string | null
    density: number | null
    supplierId: string | null
    createdAt: Date
    updatedAt: Date | null
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    description?: boolean
    unit?: boolean
    density?: boolean
    supplierId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplier?: boolean | Product$supplierArgs<ExtArgs>
    tickets?: boolean | Product$ticketsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    description?: boolean
    unit?: boolean
    density?: boolean
    supplierId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplier?: boolean | Product$supplierArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    description?: boolean
    unit?: boolean
    density?: boolean
    supplierId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplier?: boolean | Product$supplierArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    code?: boolean
    description?: boolean
    unit?: boolean
    density?: boolean
    supplierId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "description" | "unit" | "density" | "supplierId" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | Product$supplierArgs<ExtArgs>
    tickets?: boolean | Product$ticketsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | Product$supplierArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | Product$supplierArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      supplier: Prisma.$CompanyPayload<ExtArgs> | null
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      description: string
      unit: string | null
      density: number | null
      supplierId: string | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplier<T extends Product$supplierArgs<ExtArgs> = {}>(args?: Subset<T, Product$supplierArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tickets<T extends Product$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Product$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly code: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly unit: FieldRef<"Product", 'String'>
    readonly density: FieldRef<"Product", 'Float'>
    readonly supplierId: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.supplier
   */
  export type Product$supplierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * Product.tickets
   */
  export type Product$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    grossWeight: number | null
    tareWeight: number | null
    netWeight: number | null
  }

  export type TicketSumAggregateOutputType = {
    grossWeight: number | null
    tareWeight: number | null
    netWeight: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: string | null
    number: string | null
    supplierId: string | null
    customerId: string | null
    transporterId: string | null
    vehicleId: string | null
    deliveryPlantId: string | null
    productId: string | null
    externalCode: string | null
    direction: $Enums.TicketDirection | null
    status: $Enums.TicketStatus | null
    grossWeight: number | null
    tareWeight: number | null
    netWeight: number | null
    unit: string | null
    notes: string | null
    weighedAt: Date | null
    shareToken: string | null
    sharedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    id: string | null
    number: string | null
    supplierId: string | null
    customerId: string | null
    transporterId: string | null
    vehicleId: string | null
    deliveryPlantId: string | null
    productId: string | null
    externalCode: string | null
    direction: $Enums.TicketDirection | null
    status: $Enums.TicketStatus | null
    grossWeight: number | null
    tareWeight: number | null
    netWeight: number | null
    unit: string | null
    notes: string | null
    weighedAt: Date | null
    shareToken: string | null
    sharedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    number: number
    supplierId: number
    customerId: number
    transporterId: number
    vehicleId: number
    deliveryPlantId: number
    productId: number
    externalCode: number
    direction: number
    status: number
    grossWeight: number
    tareWeight: number
    netWeight: number
    unit: number
    notes: number
    meta: number
    weighedAt: number
    shareToken: number
    sharedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    grossWeight?: true
    tareWeight?: true
    netWeight?: true
  }

  export type TicketSumAggregateInputType = {
    grossWeight?: true
    tareWeight?: true
    netWeight?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    number?: true
    supplierId?: true
    customerId?: true
    transporterId?: true
    vehicleId?: true
    deliveryPlantId?: true
    productId?: true
    externalCode?: true
    direction?: true
    status?: true
    grossWeight?: true
    tareWeight?: true
    netWeight?: true
    unit?: true
    notes?: true
    weighedAt?: true
    shareToken?: true
    sharedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    number?: true
    supplierId?: true
    customerId?: true
    transporterId?: true
    vehicleId?: true
    deliveryPlantId?: true
    productId?: true
    externalCode?: true
    direction?: true
    status?: true
    grossWeight?: true
    tareWeight?: true
    netWeight?: true
    unit?: true
    notes?: true
    weighedAt?: true
    shareToken?: true
    sharedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    number?: true
    supplierId?: true
    customerId?: true
    transporterId?: true
    vehicleId?: true
    deliveryPlantId?: true
    productId?: true
    externalCode?: true
    direction?: true
    status?: true
    grossWeight?: true
    tareWeight?: true
    netWeight?: true
    unit?: true
    notes?: true
    meta?: true
    weighedAt?: true
    shareToken?: true
    sharedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: string
    number: string
    supplierId: string
    customerId: string
    transporterId: string
    vehicleId: string
    deliveryPlantId: string
    productId: string
    externalCode: string | null
    direction: $Enums.TicketDirection
    status: $Enums.TicketStatus
    grossWeight: number | null
    tareWeight: number | null
    netWeight: number | null
    unit: string | null
    notes: string | null
    meta: JsonValue | null
    weighedAt: Date | null
    shareToken: string | null
    sharedAt: Date | null
    createdAt: Date
    updatedAt: Date | null
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    supplierId?: boolean
    customerId?: boolean
    transporterId?: boolean
    vehicleId?: boolean
    deliveryPlantId?: boolean
    productId?: boolean
    externalCode?: boolean
    direction?: boolean
    status?: boolean
    grossWeight?: boolean
    tareWeight?: boolean
    netWeight?: boolean
    unit?: boolean
    notes?: boolean
    meta?: boolean
    weighedAt?: boolean
    shareToken?: boolean
    sharedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplier?: boolean | CompanyDefaultArgs<ExtArgs>
    customer?: boolean | CompanyDefaultArgs<ExtArgs>
    transporter?: boolean | CompanyDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    deliveryPlant?: boolean | DeliveryPlantDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    documents?: boolean | Ticket$documentsArgs<ExtArgs>
    events?: boolean | Ticket$eventsArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    supplierId?: boolean
    customerId?: boolean
    transporterId?: boolean
    vehicleId?: boolean
    deliveryPlantId?: boolean
    productId?: boolean
    externalCode?: boolean
    direction?: boolean
    status?: boolean
    grossWeight?: boolean
    tareWeight?: boolean
    netWeight?: boolean
    unit?: boolean
    notes?: boolean
    meta?: boolean
    weighedAt?: boolean
    shareToken?: boolean
    sharedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplier?: boolean | CompanyDefaultArgs<ExtArgs>
    customer?: boolean | CompanyDefaultArgs<ExtArgs>
    transporter?: boolean | CompanyDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    deliveryPlant?: boolean | DeliveryPlantDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    supplierId?: boolean
    customerId?: boolean
    transporterId?: boolean
    vehicleId?: boolean
    deliveryPlantId?: boolean
    productId?: boolean
    externalCode?: boolean
    direction?: boolean
    status?: boolean
    grossWeight?: boolean
    tareWeight?: boolean
    netWeight?: boolean
    unit?: boolean
    notes?: boolean
    meta?: boolean
    weighedAt?: boolean
    shareToken?: boolean
    sharedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplier?: boolean | CompanyDefaultArgs<ExtArgs>
    customer?: boolean | CompanyDefaultArgs<ExtArgs>
    transporter?: boolean | CompanyDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    deliveryPlant?: boolean | DeliveryPlantDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    number?: boolean
    supplierId?: boolean
    customerId?: boolean
    transporterId?: boolean
    vehicleId?: boolean
    deliveryPlantId?: boolean
    productId?: boolean
    externalCode?: boolean
    direction?: boolean
    status?: boolean
    grossWeight?: boolean
    tareWeight?: boolean
    netWeight?: boolean
    unit?: boolean
    notes?: boolean
    meta?: boolean
    weighedAt?: boolean
    shareToken?: boolean
    sharedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number" | "supplierId" | "customerId" | "transporterId" | "vehicleId" | "deliveryPlantId" | "productId" | "externalCode" | "direction" | "status" | "grossWeight" | "tareWeight" | "netWeight" | "unit" | "notes" | "meta" | "weighedAt" | "shareToken" | "sharedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | CompanyDefaultArgs<ExtArgs>
    customer?: boolean | CompanyDefaultArgs<ExtArgs>
    transporter?: boolean | CompanyDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    deliveryPlant?: boolean | DeliveryPlantDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    documents?: boolean | Ticket$documentsArgs<ExtArgs>
    events?: boolean | Ticket$eventsArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | CompanyDefaultArgs<ExtArgs>
    customer?: boolean | CompanyDefaultArgs<ExtArgs>
    transporter?: boolean | CompanyDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    deliveryPlant?: boolean | DeliveryPlantDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type TicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | CompanyDefaultArgs<ExtArgs>
    customer?: boolean | CompanyDefaultArgs<ExtArgs>
    transporter?: boolean | CompanyDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    deliveryPlant?: boolean | DeliveryPlantDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      supplier: Prisma.$CompanyPayload<ExtArgs>
      customer: Prisma.$CompanyPayload<ExtArgs>
      transporter: Prisma.$CompanyPayload<ExtArgs>
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      deliveryPlant: Prisma.$DeliveryPlantPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
      documents: Prisma.$TicketDocumentPayload<ExtArgs>[]
      events: Prisma.$TicketEventLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      number: string
      supplierId: string
      customerId: string
      transporterId: string
      vehicleId: string
      deliveryPlantId: string
      productId: string
      externalCode: string | null
      direction: $Enums.TicketDirection
      status: $Enums.TicketStatus
      grossWeight: number | null
      tareWeight: number | null
      netWeight: number | null
      unit: string | null
      notes: string | null
      meta: Prisma.JsonValue | null
      weighedAt: Date | null
      shareToken: string | null
      sharedAt: Date | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {TicketUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.updateManyAndReturn({
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
    updateManyAndReturn<T extends TicketUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
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
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplier<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transporter<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    deliveryPlant<T extends DeliveryPlantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeliveryPlantDefaultArgs<ExtArgs>>): Prisma__DeliveryPlantClient<$Result.GetResult<Prisma.$DeliveryPlantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    documents<T extends Ticket$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends Ticket$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketEventLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'String'>
    readonly number: FieldRef<"Ticket", 'String'>
    readonly supplierId: FieldRef<"Ticket", 'String'>
    readonly customerId: FieldRef<"Ticket", 'String'>
    readonly transporterId: FieldRef<"Ticket", 'String'>
    readonly vehicleId: FieldRef<"Ticket", 'String'>
    readonly deliveryPlantId: FieldRef<"Ticket", 'String'>
    readonly productId: FieldRef<"Ticket", 'String'>
    readonly externalCode: FieldRef<"Ticket", 'String'>
    readonly direction: FieldRef<"Ticket", 'TicketDirection'>
    readonly status: FieldRef<"Ticket", 'TicketStatus'>
    readonly grossWeight: FieldRef<"Ticket", 'Float'>
    readonly tareWeight: FieldRef<"Ticket", 'Float'>
    readonly netWeight: FieldRef<"Ticket", 'Float'>
    readonly unit: FieldRef<"Ticket", 'String'>
    readonly notes: FieldRef<"Ticket", 'String'>
    readonly meta: FieldRef<"Ticket", 'Json'>
    readonly weighedAt: FieldRef<"Ticket", 'DateTime'>
    readonly shareToken: FieldRef<"Ticket", 'String'>
    readonly sharedAt: FieldRef<"Ticket", 'DateTime'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
    readonly updatedAt: FieldRef<"Ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket updateManyAndReturn
   */
  export type TicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket.documents
   */
  export type Ticket$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketDocument
     */
    select?: TicketDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketDocument
     */
    omit?: TicketDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketDocumentInclude<ExtArgs> | null
    where?: TicketDocumentWhereInput
    orderBy?: TicketDocumentOrderByWithRelationInput | TicketDocumentOrderByWithRelationInput[]
    cursor?: TicketDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketDocumentScalarFieldEnum | TicketDocumentScalarFieldEnum[]
  }

  /**
   * Ticket.events
   */
  export type Ticket$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketEventLog
     */
    select?: TicketEventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketEventLog
     */
    omit?: TicketEventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketEventLogInclude<ExtArgs> | null
    where?: TicketEventLogWhereInput
    orderBy?: TicketEventLogOrderByWithRelationInput | TicketEventLogOrderByWithRelationInput[]
    cursor?: TicketEventLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketEventLogScalarFieldEnum | TicketEventLogScalarFieldEnum[]
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model TicketDocument
   */

  export type AggregateTicketDocument = {
    _count: TicketDocumentCountAggregateOutputType | null
    _min: TicketDocumentMinAggregateOutputType | null
    _max: TicketDocumentMaxAggregateOutputType | null
  }

  export type TicketDocumentMinAggregateOutputType = {
    id: string | null
    ticketId: string | null
    type: $Enums.DocType | null
    path: string | null
    createdAt: Date | null
  }

  export type TicketDocumentMaxAggregateOutputType = {
    id: string | null
    ticketId: string | null
    type: $Enums.DocType | null
    path: string | null
    createdAt: Date | null
  }

  export type TicketDocumentCountAggregateOutputType = {
    id: number
    ticketId: number
    type: number
    path: number
    createdAt: number
    _all: number
  }


  export type TicketDocumentMinAggregateInputType = {
    id?: true
    ticketId?: true
    type?: true
    path?: true
    createdAt?: true
  }

  export type TicketDocumentMaxAggregateInputType = {
    id?: true
    ticketId?: true
    type?: true
    path?: true
    createdAt?: true
  }

  export type TicketDocumentCountAggregateInputType = {
    id?: true
    ticketId?: true
    type?: true
    path?: true
    createdAt?: true
    _all?: true
  }

  export type TicketDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketDocument to aggregate.
     */
    where?: TicketDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketDocuments to fetch.
     */
    orderBy?: TicketDocumentOrderByWithRelationInput | TicketDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketDocuments
    **/
    _count?: true | TicketDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketDocumentMaxAggregateInputType
  }

  export type GetTicketDocumentAggregateType<T extends TicketDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketDocument[P]>
      : GetScalarType<T[P], AggregateTicketDocument[P]>
  }




  export type TicketDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketDocumentWhereInput
    orderBy?: TicketDocumentOrderByWithAggregationInput | TicketDocumentOrderByWithAggregationInput[]
    by: TicketDocumentScalarFieldEnum[] | TicketDocumentScalarFieldEnum
    having?: TicketDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketDocumentCountAggregateInputType | true
    _min?: TicketDocumentMinAggregateInputType
    _max?: TicketDocumentMaxAggregateInputType
  }

  export type TicketDocumentGroupByOutputType = {
    id: string
    ticketId: string
    type: $Enums.DocType
    path: string
    createdAt: Date
    _count: TicketDocumentCountAggregateOutputType | null
    _min: TicketDocumentMinAggregateOutputType | null
    _max: TicketDocumentMaxAggregateOutputType | null
  }

  type GetTicketDocumentGroupByPayload<T extends TicketDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], TicketDocumentGroupByOutputType[P]>
        }
      >
    >


  export type TicketDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    type?: boolean
    path?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketDocument"]>

  export type TicketDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    type?: boolean
    path?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketDocument"]>

  export type TicketDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    type?: boolean
    path?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketDocument"]>

  export type TicketDocumentSelectScalar = {
    id?: boolean
    ticketId?: boolean
    type?: boolean
    path?: boolean
    createdAt?: boolean
  }

  export type TicketDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticketId" | "type" | "path" | "createdAt", ExtArgs["result"]["ticketDocument"]>
  export type TicketDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }
  export type TicketDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }
  export type TicketDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }

  export type $TicketDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketDocument"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticketId: string
      type: $Enums.DocType
      path: string
      createdAt: Date
    }, ExtArgs["result"]["ticketDocument"]>
    composites: {}
  }

  type TicketDocumentGetPayload<S extends boolean | null | undefined | TicketDocumentDefaultArgs> = $Result.GetResult<Prisma.$TicketDocumentPayload, S>

  type TicketDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketDocumentCountAggregateInputType | true
    }

  export interface TicketDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketDocument'], meta: { name: 'TicketDocument' } }
    /**
     * Find zero or one TicketDocument that matches the filter.
     * @param {TicketDocumentFindUniqueArgs} args - Arguments to find a TicketDocument
     * @example
     * // Get one TicketDocument
     * const ticketDocument = await prisma.ticketDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketDocumentFindUniqueArgs>(args: SelectSubset<T, TicketDocumentFindUniqueArgs<ExtArgs>>): Prisma__TicketDocumentClient<$Result.GetResult<Prisma.$TicketDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketDocumentFindUniqueOrThrowArgs} args - Arguments to find a TicketDocument
     * @example
     * // Get one TicketDocument
     * const ticketDocument = await prisma.ticketDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketDocumentClient<$Result.GetResult<Prisma.$TicketDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketDocumentFindFirstArgs} args - Arguments to find a TicketDocument
     * @example
     * // Get one TicketDocument
     * const ticketDocument = await prisma.ticketDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketDocumentFindFirstArgs>(args?: SelectSubset<T, TicketDocumentFindFirstArgs<ExtArgs>>): Prisma__TicketDocumentClient<$Result.GetResult<Prisma.$TicketDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketDocumentFindFirstOrThrowArgs} args - Arguments to find a TicketDocument
     * @example
     * // Get one TicketDocument
     * const ticketDocument = await prisma.ticketDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketDocumentClient<$Result.GetResult<Prisma.$TicketDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketDocuments
     * const ticketDocuments = await prisma.ticketDocument.findMany()
     * 
     * // Get first 10 TicketDocuments
     * const ticketDocuments = await prisma.ticketDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketDocumentWithIdOnly = await prisma.ticketDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketDocumentFindManyArgs>(args?: SelectSubset<T, TicketDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketDocument.
     * @param {TicketDocumentCreateArgs} args - Arguments to create a TicketDocument.
     * @example
     * // Create one TicketDocument
     * const TicketDocument = await prisma.ticketDocument.create({
     *   data: {
     *     // ... data to create a TicketDocument
     *   }
     * })
     * 
     */
    create<T extends TicketDocumentCreateArgs>(args: SelectSubset<T, TicketDocumentCreateArgs<ExtArgs>>): Prisma__TicketDocumentClient<$Result.GetResult<Prisma.$TicketDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketDocuments.
     * @param {TicketDocumentCreateManyArgs} args - Arguments to create many TicketDocuments.
     * @example
     * // Create many TicketDocuments
     * const ticketDocument = await prisma.ticketDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketDocumentCreateManyArgs>(args?: SelectSubset<T, TicketDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketDocuments and returns the data saved in the database.
     * @param {TicketDocumentCreateManyAndReturnArgs} args - Arguments to create many TicketDocuments.
     * @example
     * // Create many TicketDocuments
     * const ticketDocument = await prisma.ticketDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketDocuments and only return the `id`
     * const ticketDocumentWithIdOnly = await prisma.ticketDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TicketDocument.
     * @param {TicketDocumentDeleteArgs} args - Arguments to delete one TicketDocument.
     * @example
     * // Delete one TicketDocument
     * const TicketDocument = await prisma.ticketDocument.delete({
     *   where: {
     *     // ... filter to delete one TicketDocument
     *   }
     * })
     * 
     */
    delete<T extends TicketDocumentDeleteArgs>(args: SelectSubset<T, TicketDocumentDeleteArgs<ExtArgs>>): Prisma__TicketDocumentClient<$Result.GetResult<Prisma.$TicketDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketDocument.
     * @param {TicketDocumentUpdateArgs} args - Arguments to update one TicketDocument.
     * @example
     * // Update one TicketDocument
     * const ticketDocument = await prisma.ticketDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketDocumentUpdateArgs>(args: SelectSubset<T, TicketDocumentUpdateArgs<ExtArgs>>): Prisma__TicketDocumentClient<$Result.GetResult<Prisma.$TicketDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketDocuments.
     * @param {TicketDocumentDeleteManyArgs} args - Arguments to filter TicketDocuments to delete.
     * @example
     * // Delete a few TicketDocuments
     * const { count } = await prisma.ticketDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDocumentDeleteManyArgs>(args?: SelectSubset<T, TicketDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketDocuments
     * const ticketDocument = await prisma.ticketDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketDocumentUpdateManyArgs>(args: SelectSubset<T, TicketDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketDocuments and returns the data updated in the database.
     * @param {TicketDocumentUpdateManyAndReturnArgs} args - Arguments to update many TicketDocuments.
     * @example
     * // Update many TicketDocuments
     * const ticketDocument = await prisma.ticketDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketDocuments and only return the `id`
     * const ticketDocumentWithIdOnly = await prisma.ticketDocument.updateManyAndReturn({
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
    updateManyAndReturn<T extends TicketDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TicketDocument.
     * @param {TicketDocumentUpsertArgs} args - Arguments to update or create a TicketDocument.
     * @example
     * // Update or create a TicketDocument
     * const ticketDocument = await prisma.ticketDocument.upsert({
     *   create: {
     *     // ... data to create a TicketDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketDocument we want to update
     *   }
     * })
     */
    upsert<T extends TicketDocumentUpsertArgs>(args: SelectSubset<T, TicketDocumentUpsertArgs<ExtArgs>>): Prisma__TicketDocumentClient<$Result.GetResult<Prisma.$TicketDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketDocumentCountArgs} args - Arguments to filter TicketDocuments to count.
     * @example
     * // Count the number of TicketDocuments
     * const count = await prisma.ticketDocument.count({
     *   where: {
     *     // ... the filter for the TicketDocuments we want to count
     *   }
     * })
    **/
    count<T extends TicketDocumentCountArgs>(
      args?: Subset<T, TicketDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketDocumentAggregateArgs>(args: Subset<T, TicketDocumentAggregateArgs>): Prisma.PrismaPromise<GetTicketDocumentAggregateType<T>>

    /**
     * Group by TicketDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketDocumentGroupByArgs} args - Group by arguments.
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
      T extends TicketDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketDocumentGroupByArgs['orderBy'] }
        : { orderBy?: TicketDocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketDocument model
   */
  readonly fields: TicketDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TicketDocument model
   */
  interface TicketDocumentFieldRefs {
    readonly id: FieldRef<"TicketDocument", 'String'>
    readonly ticketId: FieldRef<"TicketDocument", 'String'>
    readonly type: FieldRef<"TicketDocument", 'DocType'>
    readonly path: FieldRef<"TicketDocument", 'String'>
    readonly createdAt: FieldRef<"TicketDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TicketDocument findUnique
   */
  export type TicketDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketDocument
     */
    select?: TicketDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketDocument
     */
    omit?: TicketDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketDocumentInclude<ExtArgs> | null
    /**
     * Filter, which TicketDocument to fetch.
     */
    where: TicketDocumentWhereUniqueInput
  }

  /**
   * TicketDocument findUniqueOrThrow
   */
  export type TicketDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketDocument
     */
    select?: TicketDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketDocument
     */
    omit?: TicketDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketDocumentInclude<ExtArgs> | null
    /**
     * Filter, which TicketDocument to fetch.
     */
    where: TicketDocumentWhereUniqueInput
  }

  /**
   * TicketDocument findFirst
   */
  export type TicketDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketDocument
     */
    select?: TicketDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketDocument
     */
    omit?: TicketDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketDocumentInclude<ExtArgs> | null
    /**
     * Filter, which TicketDocument to fetch.
     */
    where?: TicketDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketDocuments to fetch.
     */
    orderBy?: TicketDocumentOrderByWithRelationInput | TicketDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketDocuments.
     */
    cursor?: TicketDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketDocuments.
     */
    distinct?: TicketDocumentScalarFieldEnum | TicketDocumentScalarFieldEnum[]
  }

  /**
   * TicketDocument findFirstOrThrow
   */
  export type TicketDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketDocument
     */
    select?: TicketDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketDocument
     */
    omit?: TicketDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketDocumentInclude<ExtArgs> | null
    /**
     * Filter, which TicketDocument to fetch.
     */
    where?: TicketDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketDocuments to fetch.
     */
    orderBy?: TicketDocumentOrderByWithRelationInput | TicketDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketDocuments.
     */
    cursor?: TicketDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketDocuments.
     */
    distinct?: TicketDocumentScalarFieldEnum | TicketDocumentScalarFieldEnum[]
  }

  /**
   * TicketDocument findMany
   */
  export type TicketDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketDocument
     */
    select?: TicketDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketDocument
     */
    omit?: TicketDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketDocumentInclude<ExtArgs> | null
    /**
     * Filter, which TicketDocuments to fetch.
     */
    where?: TicketDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketDocuments to fetch.
     */
    orderBy?: TicketDocumentOrderByWithRelationInput | TicketDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketDocuments.
     */
    cursor?: TicketDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketDocuments.
     */
    skip?: number
    distinct?: TicketDocumentScalarFieldEnum | TicketDocumentScalarFieldEnum[]
  }

  /**
   * TicketDocument create
   */
  export type TicketDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketDocument
     */
    select?: TicketDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketDocument
     */
    omit?: TicketDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketDocument.
     */
    data: XOR<TicketDocumentCreateInput, TicketDocumentUncheckedCreateInput>
  }

  /**
   * TicketDocument createMany
   */
  export type TicketDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketDocuments.
     */
    data: TicketDocumentCreateManyInput | TicketDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketDocument createManyAndReturn
   */
  export type TicketDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketDocument
     */
    select?: TicketDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketDocument
     */
    omit?: TicketDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many TicketDocuments.
     */
    data: TicketDocumentCreateManyInput | TicketDocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketDocument update
   */
  export type TicketDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketDocument
     */
    select?: TicketDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketDocument
     */
    omit?: TicketDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketDocument.
     */
    data: XOR<TicketDocumentUpdateInput, TicketDocumentUncheckedUpdateInput>
    /**
     * Choose, which TicketDocument to update.
     */
    where: TicketDocumentWhereUniqueInput
  }

  /**
   * TicketDocument updateMany
   */
  export type TicketDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketDocuments.
     */
    data: XOR<TicketDocumentUpdateManyMutationInput, TicketDocumentUncheckedUpdateManyInput>
    /**
     * Filter which TicketDocuments to update
     */
    where?: TicketDocumentWhereInput
    /**
     * Limit how many TicketDocuments to update.
     */
    limit?: number
  }

  /**
   * TicketDocument updateManyAndReturn
   */
  export type TicketDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketDocument
     */
    select?: TicketDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketDocument
     */
    omit?: TicketDocumentOmit<ExtArgs> | null
    /**
     * The data used to update TicketDocuments.
     */
    data: XOR<TicketDocumentUpdateManyMutationInput, TicketDocumentUncheckedUpdateManyInput>
    /**
     * Filter which TicketDocuments to update
     */
    where?: TicketDocumentWhereInput
    /**
     * Limit how many TicketDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketDocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketDocument upsert
   */
  export type TicketDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketDocument
     */
    select?: TicketDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketDocument
     */
    omit?: TicketDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketDocument to update in case it exists.
     */
    where: TicketDocumentWhereUniqueInput
    /**
     * In case the TicketDocument found by the `where` argument doesn't exist, create a new TicketDocument with this data.
     */
    create: XOR<TicketDocumentCreateInput, TicketDocumentUncheckedCreateInput>
    /**
     * In case the TicketDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketDocumentUpdateInput, TicketDocumentUncheckedUpdateInput>
  }

  /**
   * TicketDocument delete
   */
  export type TicketDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketDocument
     */
    select?: TicketDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketDocument
     */
    omit?: TicketDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketDocumentInclude<ExtArgs> | null
    /**
     * Filter which TicketDocument to delete.
     */
    where: TicketDocumentWhereUniqueInput
  }

  /**
   * TicketDocument deleteMany
   */
  export type TicketDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketDocuments to delete
     */
    where?: TicketDocumentWhereInput
    /**
     * Limit how many TicketDocuments to delete.
     */
    limit?: number
  }

  /**
   * TicketDocument without action
   */
  export type TicketDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketDocument
     */
    select?: TicketDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketDocument
     */
    omit?: TicketDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketDocumentInclude<ExtArgs> | null
  }


  /**
   * Model TicketEventLog
   */

  export type AggregateTicketEventLog = {
    _count: TicketEventLogCountAggregateOutputType | null
    _min: TicketEventLogMinAggregateOutputType | null
    _max: TicketEventLogMaxAggregateOutputType | null
  }

  export type TicketEventLogMinAggregateOutputType = {
    id: string | null
    ticketId: string | null
    actorId: string | null
    action: string | null
    from: string | null
    to: string | null
    createdAt: Date | null
  }

  export type TicketEventLogMaxAggregateOutputType = {
    id: string | null
    ticketId: string | null
    actorId: string | null
    action: string | null
    from: string | null
    to: string | null
    createdAt: Date | null
  }

  export type TicketEventLogCountAggregateOutputType = {
    id: number
    ticketId: number
    actorId: number
    action: number
    from: number
    to: number
    meta: number
    createdAt: number
    _all: number
  }


  export type TicketEventLogMinAggregateInputType = {
    id?: true
    ticketId?: true
    actorId?: true
    action?: true
    from?: true
    to?: true
    createdAt?: true
  }

  export type TicketEventLogMaxAggregateInputType = {
    id?: true
    ticketId?: true
    actorId?: true
    action?: true
    from?: true
    to?: true
    createdAt?: true
  }

  export type TicketEventLogCountAggregateInputType = {
    id?: true
    ticketId?: true
    actorId?: true
    action?: true
    from?: true
    to?: true
    meta?: true
    createdAt?: true
    _all?: true
  }

  export type TicketEventLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketEventLog to aggregate.
     */
    where?: TicketEventLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketEventLogs to fetch.
     */
    orderBy?: TicketEventLogOrderByWithRelationInput | TicketEventLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketEventLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketEventLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketEventLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketEventLogs
    **/
    _count?: true | TicketEventLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketEventLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketEventLogMaxAggregateInputType
  }

  export type GetTicketEventLogAggregateType<T extends TicketEventLogAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketEventLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketEventLog[P]>
      : GetScalarType<T[P], AggregateTicketEventLog[P]>
  }




  export type TicketEventLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketEventLogWhereInput
    orderBy?: TicketEventLogOrderByWithAggregationInput | TicketEventLogOrderByWithAggregationInput[]
    by: TicketEventLogScalarFieldEnum[] | TicketEventLogScalarFieldEnum
    having?: TicketEventLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketEventLogCountAggregateInputType | true
    _min?: TicketEventLogMinAggregateInputType
    _max?: TicketEventLogMaxAggregateInputType
  }

  export type TicketEventLogGroupByOutputType = {
    id: string
    ticketId: string
    actorId: string
    action: string
    from: string | null
    to: string | null
    meta: JsonValue | null
    createdAt: Date
    _count: TicketEventLogCountAggregateOutputType | null
    _min: TicketEventLogMinAggregateOutputType | null
    _max: TicketEventLogMaxAggregateOutputType | null
  }

  type GetTicketEventLogGroupByPayload<T extends TicketEventLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketEventLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketEventLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketEventLogGroupByOutputType[P]>
            : GetScalarType<T[P], TicketEventLogGroupByOutputType[P]>
        }
      >
    >


  export type TicketEventLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    actorId?: boolean
    action?: boolean
    from?: boolean
    to?: boolean
    meta?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketEventLog"]>

  export type TicketEventLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    actorId?: boolean
    action?: boolean
    from?: boolean
    to?: boolean
    meta?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketEventLog"]>

  export type TicketEventLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    actorId?: boolean
    action?: boolean
    from?: boolean
    to?: boolean
    meta?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketEventLog"]>

  export type TicketEventLogSelectScalar = {
    id?: boolean
    ticketId?: boolean
    actorId?: boolean
    action?: boolean
    from?: boolean
    to?: boolean
    meta?: boolean
    createdAt?: boolean
  }

  export type TicketEventLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticketId" | "actorId" | "action" | "from" | "to" | "meta" | "createdAt", ExtArgs["result"]["ticketEventLog"]>
  export type TicketEventLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }
  export type TicketEventLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }
  export type TicketEventLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }

  export type $TicketEventLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketEventLog"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticketId: string
      actorId: string
      action: string
      from: string | null
      to: string | null
      meta: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["ticketEventLog"]>
    composites: {}
  }

  type TicketEventLogGetPayload<S extends boolean | null | undefined | TicketEventLogDefaultArgs> = $Result.GetResult<Prisma.$TicketEventLogPayload, S>

  type TicketEventLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketEventLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketEventLogCountAggregateInputType | true
    }

  export interface TicketEventLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketEventLog'], meta: { name: 'TicketEventLog' } }
    /**
     * Find zero or one TicketEventLog that matches the filter.
     * @param {TicketEventLogFindUniqueArgs} args - Arguments to find a TicketEventLog
     * @example
     * // Get one TicketEventLog
     * const ticketEventLog = await prisma.ticketEventLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketEventLogFindUniqueArgs>(args: SelectSubset<T, TicketEventLogFindUniqueArgs<ExtArgs>>): Prisma__TicketEventLogClient<$Result.GetResult<Prisma.$TicketEventLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketEventLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketEventLogFindUniqueOrThrowArgs} args - Arguments to find a TicketEventLog
     * @example
     * // Get one TicketEventLog
     * const ticketEventLog = await prisma.ticketEventLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketEventLogFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketEventLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketEventLogClient<$Result.GetResult<Prisma.$TicketEventLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketEventLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketEventLogFindFirstArgs} args - Arguments to find a TicketEventLog
     * @example
     * // Get one TicketEventLog
     * const ticketEventLog = await prisma.ticketEventLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketEventLogFindFirstArgs>(args?: SelectSubset<T, TicketEventLogFindFirstArgs<ExtArgs>>): Prisma__TicketEventLogClient<$Result.GetResult<Prisma.$TicketEventLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketEventLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketEventLogFindFirstOrThrowArgs} args - Arguments to find a TicketEventLog
     * @example
     * // Get one TicketEventLog
     * const ticketEventLog = await prisma.ticketEventLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketEventLogFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketEventLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketEventLogClient<$Result.GetResult<Prisma.$TicketEventLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketEventLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketEventLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketEventLogs
     * const ticketEventLogs = await prisma.ticketEventLog.findMany()
     * 
     * // Get first 10 TicketEventLogs
     * const ticketEventLogs = await prisma.ticketEventLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketEventLogWithIdOnly = await prisma.ticketEventLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketEventLogFindManyArgs>(args?: SelectSubset<T, TicketEventLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketEventLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketEventLog.
     * @param {TicketEventLogCreateArgs} args - Arguments to create a TicketEventLog.
     * @example
     * // Create one TicketEventLog
     * const TicketEventLog = await prisma.ticketEventLog.create({
     *   data: {
     *     // ... data to create a TicketEventLog
     *   }
     * })
     * 
     */
    create<T extends TicketEventLogCreateArgs>(args: SelectSubset<T, TicketEventLogCreateArgs<ExtArgs>>): Prisma__TicketEventLogClient<$Result.GetResult<Prisma.$TicketEventLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketEventLogs.
     * @param {TicketEventLogCreateManyArgs} args - Arguments to create many TicketEventLogs.
     * @example
     * // Create many TicketEventLogs
     * const ticketEventLog = await prisma.ticketEventLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketEventLogCreateManyArgs>(args?: SelectSubset<T, TicketEventLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketEventLogs and returns the data saved in the database.
     * @param {TicketEventLogCreateManyAndReturnArgs} args - Arguments to create many TicketEventLogs.
     * @example
     * // Create many TicketEventLogs
     * const ticketEventLog = await prisma.ticketEventLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketEventLogs and only return the `id`
     * const ticketEventLogWithIdOnly = await prisma.ticketEventLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketEventLogCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketEventLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketEventLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TicketEventLog.
     * @param {TicketEventLogDeleteArgs} args - Arguments to delete one TicketEventLog.
     * @example
     * // Delete one TicketEventLog
     * const TicketEventLog = await prisma.ticketEventLog.delete({
     *   where: {
     *     // ... filter to delete one TicketEventLog
     *   }
     * })
     * 
     */
    delete<T extends TicketEventLogDeleteArgs>(args: SelectSubset<T, TicketEventLogDeleteArgs<ExtArgs>>): Prisma__TicketEventLogClient<$Result.GetResult<Prisma.$TicketEventLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketEventLog.
     * @param {TicketEventLogUpdateArgs} args - Arguments to update one TicketEventLog.
     * @example
     * // Update one TicketEventLog
     * const ticketEventLog = await prisma.ticketEventLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketEventLogUpdateArgs>(args: SelectSubset<T, TicketEventLogUpdateArgs<ExtArgs>>): Prisma__TicketEventLogClient<$Result.GetResult<Prisma.$TicketEventLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketEventLogs.
     * @param {TicketEventLogDeleteManyArgs} args - Arguments to filter TicketEventLogs to delete.
     * @example
     * // Delete a few TicketEventLogs
     * const { count } = await prisma.ticketEventLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketEventLogDeleteManyArgs>(args?: SelectSubset<T, TicketEventLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketEventLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketEventLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketEventLogs
     * const ticketEventLog = await prisma.ticketEventLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketEventLogUpdateManyArgs>(args: SelectSubset<T, TicketEventLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketEventLogs and returns the data updated in the database.
     * @param {TicketEventLogUpdateManyAndReturnArgs} args - Arguments to update many TicketEventLogs.
     * @example
     * // Update many TicketEventLogs
     * const ticketEventLog = await prisma.ticketEventLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketEventLogs and only return the `id`
     * const ticketEventLogWithIdOnly = await prisma.ticketEventLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends TicketEventLogUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketEventLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketEventLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TicketEventLog.
     * @param {TicketEventLogUpsertArgs} args - Arguments to update or create a TicketEventLog.
     * @example
     * // Update or create a TicketEventLog
     * const ticketEventLog = await prisma.ticketEventLog.upsert({
     *   create: {
     *     // ... data to create a TicketEventLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketEventLog we want to update
     *   }
     * })
     */
    upsert<T extends TicketEventLogUpsertArgs>(args: SelectSubset<T, TicketEventLogUpsertArgs<ExtArgs>>): Prisma__TicketEventLogClient<$Result.GetResult<Prisma.$TicketEventLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketEventLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketEventLogCountArgs} args - Arguments to filter TicketEventLogs to count.
     * @example
     * // Count the number of TicketEventLogs
     * const count = await prisma.ticketEventLog.count({
     *   where: {
     *     // ... the filter for the TicketEventLogs we want to count
     *   }
     * })
    **/
    count<T extends TicketEventLogCountArgs>(
      args?: Subset<T, TicketEventLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketEventLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketEventLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketEventLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketEventLogAggregateArgs>(args: Subset<T, TicketEventLogAggregateArgs>): Prisma.PrismaPromise<GetTicketEventLogAggregateType<T>>

    /**
     * Group by TicketEventLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketEventLogGroupByArgs} args - Group by arguments.
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
      T extends TicketEventLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketEventLogGroupByArgs['orderBy'] }
        : { orderBy?: TicketEventLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketEventLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketEventLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketEventLog model
   */
  readonly fields: TicketEventLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketEventLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketEventLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TicketEventLog model
   */
  interface TicketEventLogFieldRefs {
    readonly id: FieldRef<"TicketEventLog", 'String'>
    readonly ticketId: FieldRef<"TicketEventLog", 'String'>
    readonly actorId: FieldRef<"TicketEventLog", 'String'>
    readonly action: FieldRef<"TicketEventLog", 'String'>
    readonly from: FieldRef<"TicketEventLog", 'String'>
    readonly to: FieldRef<"TicketEventLog", 'String'>
    readonly meta: FieldRef<"TicketEventLog", 'Json'>
    readonly createdAt: FieldRef<"TicketEventLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TicketEventLog findUnique
   */
  export type TicketEventLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketEventLog
     */
    select?: TicketEventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketEventLog
     */
    omit?: TicketEventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketEventLogInclude<ExtArgs> | null
    /**
     * Filter, which TicketEventLog to fetch.
     */
    where: TicketEventLogWhereUniqueInput
  }

  /**
   * TicketEventLog findUniqueOrThrow
   */
  export type TicketEventLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketEventLog
     */
    select?: TicketEventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketEventLog
     */
    omit?: TicketEventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketEventLogInclude<ExtArgs> | null
    /**
     * Filter, which TicketEventLog to fetch.
     */
    where: TicketEventLogWhereUniqueInput
  }

  /**
   * TicketEventLog findFirst
   */
  export type TicketEventLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketEventLog
     */
    select?: TicketEventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketEventLog
     */
    omit?: TicketEventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketEventLogInclude<ExtArgs> | null
    /**
     * Filter, which TicketEventLog to fetch.
     */
    where?: TicketEventLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketEventLogs to fetch.
     */
    orderBy?: TicketEventLogOrderByWithRelationInput | TicketEventLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketEventLogs.
     */
    cursor?: TicketEventLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketEventLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketEventLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketEventLogs.
     */
    distinct?: TicketEventLogScalarFieldEnum | TicketEventLogScalarFieldEnum[]
  }

  /**
   * TicketEventLog findFirstOrThrow
   */
  export type TicketEventLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketEventLog
     */
    select?: TicketEventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketEventLog
     */
    omit?: TicketEventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketEventLogInclude<ExtArgs> | null
    /**
     * Filter, which TicketEventLog to fetch.
     */
    where?: TicketEventLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketEventLogs to fetch.
     */
    orderBy?: TicketEventLogOrderByWithRelationInput | TicketEventLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketEventLogs.
     */
    cursor?: TicketEventLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketEventLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketEventLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketEventLogs.
     */
    distinct?: TicketEventLogScalarFieldEnum | TicketEventLogScalarFieldEnum[]
  }

  /**
   * TicketEventLog findMany
   */
  export type TicketEventLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketEventLog
     */
    select?: TicketEventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketEventLog
     */
    omit?: TicketEventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketEventLogInclude<ExtArgs> | null
    /**
     * Filter, which TicketEventLogs to fetch.
     */
    where?: TicketEventLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketEventLogs to fetch.
     */
    orderBy?: TicketEventLogOrderByWithRelationInput | TicketEventLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketEventLogs.
     */
    cursor?: TicketEventLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketEventLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketEventLogs.
     */
    skip?: number
    distinct?: TicketEventLogScalarFieldEnum | TicketEventLogScalarFieldEnum[]
  }

  /**
   * TicketEventLog create
   */
  export type TicketEventLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketEventLog
     */
    select?: TicketEventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketEventLog
     */
    omit?: TicketEventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketEventLogInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketEventLog.
     */
    data: XOR<TicketEventLogCreateInput, TicketEventLogUncheckedCreateInput>
  }

  /**
   * TicketEventLog createMany
   */
  export type TicketEventLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketEventLogs.
     */
    data: TicketEventLogCreateManyInput | TicketEventLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketEventLog createManyAndReturn
   */
  export type TicketEventLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketEventLog
     */
    select?: TicketEventLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketEventLog
     */
    omit?: TicketEventLogOmit<ExtArgs> | null
    /**
     * The data used to create many TicketEventLogs.
     */
    data: TicketEventLogCreateManyInput | TicketEventLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketEventLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketEventLog update
   */
  export type TicketEventLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketEventLog
     */
    select?: TicketEventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketEventLog
     */
    omit?: TicketEventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketEventLogInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketEventLog.
     */
    data: XOR<TicketEventLogUpdateInput, TicketEventLogUncheckedUpdateInput>
    /**
     * Choose, which TicketEventLog to update.
     */
    where: TicketEventLogWhereUniqueInput
  }

  /**
   * TicketEventLog updateMany
   */
  export type TicketEventLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketEventLogs.
     */
    data: XOR<TicketEventLogUpdateManyMutationInput, TicketEventLogUncheckedUpdateManyInput>
    /**
     * Filter which TicketEventLogs to update
     */
    where?: TicketEventLogWhereInput
    /**
     * Limit how many TicketEventLogs to update.
     */
    limit?: number
  }

  /**
   * TicketEventLog updateManyAndReturn
   */
  export type TicketEventLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketEventLog
     */
    select?: TicketEventLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketEventLog
     */
    omit?: TicketEventLogOmit<ExtArgs> | null
    /**
     * The data used to update TicketEventLogs.
     */
    data: XOR<TicketEventLogUpdateManyMutationInput, TicketEventLogUncheckedUpdateManyInput>
    /**
     * Filter which TicketEventLogs to update
     */
    where?: TicketEventLogWhereInput
    /**
     * Limit how many TicketEventLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketEventLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketEventLog upsert
   */
  export type TicketEventLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketEventLog
     */
    select?: TicketEventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketEventLog
     */
    omit?: TicketEventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketEventLogInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketEventLog to update in case it exists.
     */
    where: TicketEventLogWhereUniqueInput
    /**
     * In case the TicketEventLog found by the `where` argument doesn't exist, create a new TicketEventLog with this data.
     */
    create: XOR<TicketEventLogCreateInput, TicketEventLogUncheckedCreateInput>
    /**
     * In case the TicketEventLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketEventLogUpdateInput, TicketEventLogUncheckedUpdateInput>
  }

  /**
   * TicketEventLog delete
   */
  export type TicketEventLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketEventLog
     */
    select?: TicketEventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketEventLog
     */
    omit?: TicketEventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketEventLogInclude<ExtArgs> | null
    /**
     * Filter which TicketEventLog to delete.
     */
    where: TicketEventLogWhereUniqueInput
  }

  /**
   * TicketEventLog deleteMany
   */
  export type TicketEventLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketEventLogs to delete
     */
    where?: TicketEventLogWhereInput
    /**
     * Limit how many TicketEventLogs to delete.
     */
    limit?: number
  }

  /**
   * TicketEventLog without action
   */
  export type TicketEventLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketEventLog
     */
    select?: TicketEventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketEventLog
     */
    omit?: TicketEventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketEventLogInclude<ExtArgs> | null
  }


  /**
   * Model TicketSequence
   */

  export type AggregateTicketSequence = {
    _count: TicketSequenceCountAggregateOutputType | null
    _avg: TicketSequenceAvgAggregateOutputType | null
    _sum: TicketSequenceSumAggregateOutputType | null
    _min: TicketSequenceMinAggregateOutputType | null
    _max: TicketSequenceMaxAggregateOutputType | null
  }

  export type TicketSequenceAvgAggregateOutputType = {
    counter: number | null
  }

  export type TicketSequenceSumAggregateOutputType = {
    counter: number | null
  }

  export type TicketSequenceMinAggregateOutputType = {
    id: string | null
    yearMonth: string | null
    counter: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketSequenceMaxAggregateOutputType = {
    id: string | null
    yearMonth: string | null
    counter: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketSequenceCountAggregateOutputType = {
    id: number
    yearMonth: number
    counter: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TicketSequenceAvgAggregateInputType = {
    counter?: true
  }

  export type TicketSequenceSumAggregateInputType = {
    counter?: true
  }

  export type TicketSequenceMinAggregateInputType = {
    id?: true
    yearMonth?: true
    counter?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketSequenceMaxAggregateInputType = {
    id?: true
    yearMonth?: true
    counter?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketSequenceCountAggregateInputType = {
    id?: true
    yearMonth?: true
    counter?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TicketSequenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketSequence to aggregate.
     */
    where?: TicketSequenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketSequences to fetch.
     */
    orderBy?: TicketSequenceOrderByWithRelationInput | TicketSequenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketSequenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketSequences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketSequences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketSequences
    **/
    _count?: true | TicketSequenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketSequenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSequenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketSequenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketSequenceMaxAggregateInputType
  }

  export type GetTicketSequenceAggregateType<T extends TicketSequenceAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketSequence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketSequence[P]>
      : GetScalarType<T[P], AggregateTicketSequence[P]>
  }




  export type TicketSequenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketSequenceWhereInput
    orderBy?: TicketSequenceOrderByWithAggregationInput | TicketSequenceOrderByWithAggregationInput[]
    by: TicketSequenceScalarFieldEnum[] | TicketSequenceScalarFieldEnum
    having?: TicketSequenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketSequenceCountAggregateInputType | true
    _avg?: TicketSequenceAvgAggregateInputType
    _sum?: TicketSequenceSumAggregateInputType
    _min?: TicketSequenceMinAggregateInputType
    _max?: TicketSequenceMaxAggregateInputType
  }

  export type TicketSequenceGroupByOutputType = {
    id: string
    yearMonth: string
    counter: number
    createdAt: Date
    updatedAt: Date | null
    _count: TicketSequenceCountAggregateOutputType | null
    _avg: TicketSequenceAvgAggregateOutputType | null
    _sum: TicketSequenceSumAggregateOutputType | null
    _min: TicketSequenceMinAggregateOutputType | null
    _max: TicketSequenceMaxAggregateOutputType | null
  }

  type GetTicketSequenceGroupByPayload<T extends TicketSequenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketSequenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketSequenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketSequenceGroupByOutputType[P]>
            : GetScalarType<T[P], TicketSequenceGroupByOutputType[P]>
        }
      >
    >


  export type TicketSequenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    yearMonth?: boolean
    counter?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ticketSequence"]>

  export type TicketSequenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    yearMonth?: boolean
    counter?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ticketSequence"]>

  export type TicketSequenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    yearMonth?: boolean
    counter?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ticketSequence"]>

  export type TicketSequenceSelectScalar = {
    id?: boolean
    yearMonth?: boolean
    counter?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TicketSequenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "yearMonth" | "counter" | "createdAt" | "updatedAt", ExtArgs["result"]["ticketSequence"]>

  export type $TicketSequencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketSequence"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      yearMonth: string
      counter: number
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["ticketSequence"]>
    composites: {}
  }

  type TicketSequenceGetPayload<S extends boolean | null | undefined | TicketSequenceDefaultArgs> = $Result.GetResult<Prisma.$TicketSequencePayload, S>

  type TicketSequenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketSequenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketSequenceCountAggregateInputType | true
    }

  export interface TicketSequenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketSequence'], meta: { name: 'TicketSequence' } }
    /**
     * Find zero or one TicketSequence that matches the filter.
     * @param {TicketSequenceFindUniqueArgs} args - Arguments to find a TicketSequence
     * @example
     * // Get one TicketSequence
     * const ticketSequence = await prisma.ticketSequence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketSequenceFindUniqueArgs>(args: SelectSubset<T, TicketSequenceFindUniqueArgs<ExtArgs>>): Prisma__TicketSequenceClient<$Result.GetResult<Prisma.$TicketSequencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketSequence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketSequenceFindUniqueOrThrowArgs} args - Arguments to find a TicketSequence
     * @example
     * // Get one TicketSequence
     * const ticketSequence = await prisma.ticketSequence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketSequenceFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketSequenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketSequenceClient<$Result.GetResult<Prisma.$TicketSequencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketSequence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketSequenceFindFirstArgs} args - Arguments to find a TicketSequence
     * @example
     * // Get one TicketSequence
     * const ticketSequence = await prisma.ticketSequence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketSequenceFindFirstArgs>(args?: SelectSubset<T, TicketSequenceFindFirstArgs<ExtArgs>>): Prisma__TicketSequenceClient<$Result.GetResult<Prisma.$TicketSequencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketSequence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketSequenceFindFirstOrThrowArgs} args - Arguments to find a TicketSequence
     * @example
     * // Get one TicketSequence
     * const ticketSequence = await prisma.ticketSequence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketSequenceFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketSequenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketSequenceClient<$Result.GetResult<Prisma.$TicketSequencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketSequences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketSequenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketSequences
     * const ticketSequences = await prisma.ticketSequence.findMany()
     * 
     * // Get first 10 TicketSequences
     * const ticketSequences = await prisma.ticketSequence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketSequenceWithIdOnly = await prisma.ticketSequence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketSequenceFindManyArgs>(args?: SelectSubset<T, TicketSequenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketSequencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketSequence.
     * @param {TicketSequenceCreateArgs} args - Arguments to create a TicketSequence.
     * @example
     * // Create one TicketSequence
     * const TicketSequence = await prisma.ticketSequence.create({
     *   data: {
     *     // ... data to create a TicketSequence
     *   }
     * })
     * 
     */
    create<T extends TicketSequenceCreateArgs>(args: SelectSubset<T, TicketSequenceCreateArgs<ExtArgs>>): Prisma__TicketSequenceClient<$Result.GetResult<Prisma.$TicketSequencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketSequences.
     * @param {TicketSequenceCreateManyArgs} args - Arguments to create many TicketSequences.
     * @example
     * // Create many TicketSequences
     * const ticketSequence = await prisma.ticketSequence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketSequenceCreateManyArgs>(args?: SelectSubset<T, TicketSequenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketSequences and returns the data saved in the database.
     * @param {TicketSequenceCreateManyAndReturnArgs} args - Arguments to create many TicketSequences.
     * @example
     * // Create many TicketSequences
     * const ticketSequence = await prisma.ticketSequence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketSequences and only return the `id`
     * const ticketSequenceWithIdOnly = await prisma.ticketSequence.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketSequenceCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketSequenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketSequencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TicketSequence.
     * @param {TicketSequenceDeleteArgs} args - Arguments to delete one TicketSequence.
     * @example
     * // Delete one TicketSequence
     * const TicketSequence = await prisma.ticketSequence.delete({
     *   where: {
     *     // ... filter to delete one TicketSequence
     *   }
     * })
     * 
     */
    delete<T extends TicketSequenceDeleteArgs>(args: SelectSubset<T, TicketSequenceDeleteArgs<ExtArgs>>): Prisma__TicketSequenceClient<$Result.GetResult<Prisma.$TicketSequencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketSequence.
     * @param {TicketSequenceUpdateArgs} args - Arguments to update one TicketSequence.
     * @example
     * // Update one TicketSequence
     * const ticketSequence = await prisma.ticketSequence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketSequenceUpdateArgs>(args: SelectSubset<T, TicketSequenceUpdateArgs<ExtArgs>>): Prisma__TicketSequenceClient<$Result.GetResult<Prisma.$TicketSequencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketSequences.
     * @param {TicketSequenceDeleteManyArgs} args - Arguments to filter TicketSequences to delete.
     * @example
     * // Delete a few TicketSequences
     * const { count } = await prisma.ticketSequence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketSequenceDeleteManyArgs>(args?: SelectSubset<T, TicketSequenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketSequences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketSequenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketSequences
     * const ticketSequence = await prisma.ticketSequence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketSequenceUpdateManyArgs>(args: SelectSubset<T, TicketSequenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketSequences and returns the data updated in the database.
     * @param {TicketSequenceUpdateManyAndReturnArgs} args - Arguments to update many TicketSequences.
     * @example
     * // Update many TicketSequences
     * const ticketSequence = await prisma.ticketSequence.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketSequences and only return the `id`
     * const ticketSequenceWithIdOnly = await prisma.ticketSequence.updateManyAndReturn({
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
    updateManyAndReturn<T extends TicketSequenceUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketSequenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketSequencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TicketSequence.
     * @param {TicketSequenceUpsertArgs} args - Arguments to update or create a TicketSequence.
     * @example
     * // Update or create a TicketSequence
     * const ticketSequence = await prisma.ticketSequence.upsert({
     *   create: {
     *     // ... data to create a TicketSequence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketSequence we want to update
     *   }
     * })
     */
    upsert<T extends TicketSequenceUpsertArgs>(args: SelectSubset<T, TicketSequenceUpsertArgs<ExtArgs>>): Prisma__TicketSequenceClient<$Result.GetResult<Prisma.$TicketSequencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketSequences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketSequenceCountArgs} args - Arguments to filter TicketSequences to count.
     * @example
     * // Count the number of TicketSequences
     * const count = await prisma.ticketSequence.count({
     *   where: {
     *     // ... the filter for the TicketSequences we want to count
     *   }
     * })
    **/
    count<T extends TicketSequenceCountArgs>(
      args?: Subset<T, TicketSequenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketSequenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketSequence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketSequenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketSequenceAggregateArgs>(args: Subset<T, TicketSequenceAggregateArgs>): Prisma.PrismaPromise<GetTicketSequenceAggregateType<T>>

    /**
     * Group by TicketSequence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketSequenceGroupByArgs} args - Group by arguments.
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
      T extends TicketSequenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketSequenceGroupByArgs['orderBy'] }
        : { orderBy?: TicketSequenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketSequenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketSequenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketSequence model
   */
  readonly fields: TicketSequenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketSequence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketSequenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the TicketSequence model
   */
  interface TicketSequenceFieldRefs {
    readonly id: FieldRef<"TicketSequence", 'String'>
    readonly yearMonth: FieldRef<"TicketSequence", 'String'>
    readonly counter: FieldRef<"TicketSequence", 'Int'>
    readonly createdAt: FieldRef<"TicketSequence", 'DateTime'>
    readonly updatedAt: FieldRef<"TicketSequence", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TicketSequence findUnique
   */
  export type TicketSequenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSequence
     */
    select?: TicketSequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSequence
     */
    omit?: TicketSequenceOmit<ExtArgs> | null
    /**
     * Filter, which TicketSequence to fetch.
     */
    where: TicketSequenceWhereUniqueInput
  }

  /**
   * TicketSequence findUniqueOrThrow
   */
  export type TicketSequenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSequence
     */
    select?: TicketSequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSequence
     */
    omit?: TicketSequenceOmit<ExtArgs> | null
    /**
     * Filter, which TicketSequence to fetch.
     */
    where: TicketSequenceWhereUniqueInput
  }

  /**
   * TicketSequence findFirst
   */
  export type TicketSequenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSequence
     */
    select?: TicketSequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSequence
     */
    omit?: TicketSequenceOmit<ExtArgs> | null
    /**
     * Filter, which TicketSequence to fetch.
     */
    where?: TicketSequenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketSequences to fetch.
     */
    orderBy?: TicketSequenceOrderByWithRelationInput | TicketSequenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketSequences.
     */
    cursor?: TicketSequenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketSequences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketSequences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketSequences.
     */
    distinct?: TicketSequenceScalarFieldEnum | TicketSequenceScalarFieldEnum[]
  }

  /**
   * TicketSequence findFirstOrThrow
   */
  export type TicketSequenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSequence
     */
    select?: TicketSequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSequence
     */
    omit?: TicketSequenceOmit<ExtArgs> | null
    /**
     * Filter, which TicketSequence to fetch.
     */
    where?: TicketSequenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketSequences to fetch.
     */
    orderBy?: TicketSequenceOrderByWithRelationInput | TicketSequenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketSequences.
     */
    cursor?: TicketSequenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketSequences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketSequences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketSequences.
     */
    distinct?: TicketSequenceScalarFieldEnum | TicketSequenceScalarFieldEnum[]
  }

  /**
   * TicketSequence findMany
   */
  export type TicketSequenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSequence
     */
    select?: TicketSequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSequence
     */
    omit?: TicketSequenceOmit<ExtArgs> | null
    /**
     * Filter, which TicketSequences to fetch.
     */
    where?: TicketSequenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketSequences to fetch.
     */
    orderBy?: TicketSequenceOrderByWithRelationInput | TicketSequenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketSequences.
     */
    cursor?: TicketSequenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketSequences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketSequences.
     */
    skip?: number
    distinct?: TicketSequenceScalarFieldEnum | TicketSequenceScalarFieldEnum[]
  }

  /**
   * TicketSequence create
   */
  export type TicketSequenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSequence
     */
    select?: TicketSequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSequence
     */
    omit?: TicketSequenceOmit<ExtArgs> | null
    /**
     * The data needed to create a TicketSequence.
     */
    data: XOR<TicketSequenceCreateInput, TicketSequenceUncheckedCreateInput>
  }

  /**
   * TicketSequence createMany
   */
  export type TicketSequenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketSequences.
     */
    data: TicketSequenceCreateManyInput | TicketSequenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketSequence createManyAndReturn
   */
  export type TicketSequenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSequence
     */
    select?: TicketSequenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSequence
     */
    omit?: TicketSequenceOmit<ExtArgs> | null
    /**
     * The data used to create many TicketSequences.
     */
    data: TicketSequenceCreateManyInput | TicketSequenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketSequence update
   */
  export type TicketSequenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSequence
     */
    select?: TicketSequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSequence
     */
    omit?: TicketSequenceOmit<ExtArgs> | null
    /**
     * The data needed to update a TicketSequence.
     */
    data: XOR<TicketSequenceUpdateInput, TicketSequenceUncheckedUpdateInput>
    /**
     * Choose, which TicketSequence to update.
     */
    where: TicketSequenceWhereUniqueInput
  }

  /**
   * TicketSequence updateMany
   */
  export type TicketSequenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketSequences.
     */
    data: XOR<TicketSequenceUpdateManyMutationInput, TicketSequenceUncheckedUpdateManyInput>
    /**
     * Filter which TicketSequences to update
     */
    where?: TicketSequenceWhereInput
    /**
     * Limit how many TicketSequences to update.
     */
    limit?: number
  }

  /**
   * TicketSequence updateManyAndReturn
   */
  export type TicketSequenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSequence
     */
    select?: TicketSequenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSequence
     */
    omit?: TicketSequenceOmit<ExtArgs> | null
    /**
     * The data used to update TicketSequences.
     */
    data: XOR<TicketSequenceUpdateManyMutationInput, TicketSequenceUncheckedUpdateManyInput>
    /**
     * Filter which TicketSequences to update
     */
    where?: TicketSequenceWhereInput
    /**
     * Limit how many TicketSequences to update.
     */
    limit?: number
  }

  /**
   * TicketSequence upsert
   */
  export type TicketSequenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSequence
     */
    select?: TicketSequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSequence
     */
    omit?: TicketSequenceOmit<ExtArgs> | null
    /**
     * The filter to search for the TicketSequence to update in case it exists.
     */
    where: TicketSequenceWhereUniqueInput
    /**
     * In case the TicketSequence found by the `where` argument doesn't exist, create a new TicketSequence with this data.
     */
    create: XOR<TicketSequenceCreateInput, TicketSequenceUncheckedCreateInput>
    /**
     * In case the TicketSequence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketSequenceUpdateInput, TicketSequenceUncheckedUpdateInput>
  }

  /**
   * TicketSequence delete
   */
  export type TicketSequenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSequence
     */
    select?: TicketSequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSequence
     */
    omit?: TicketSequenceOmit<ExtArgs> | null
    /**
     * Filter which TicketSequence to delete.
     */
    where: TicketSequenceWhereUniqueInput
  }

  /**
   * TicketSequence deleteMany
   */
  export type TicketSequenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketSequences to delete
     */
    where?: TicketSequenceWhereInput
    /**
     * Limit how many TicketSequences to delete.
     */
    limit?: number
  }

  /**
   * TicketSequence without action
   */
  export type TicketSequenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSequence
     */
    select?: TicketSequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSequence
     */
    omit?: TicketSequenceOmit<ExtArgs> | null
  }


  /**
   * Model ApiKey
   */

  export type AggregateApiKey = {
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  export type ApiKeyMinAggregateOutputType = {
    id: string | null
    name: string | null
    keyHash: string | null
    companyId: string | null
    lastUsedAt: Date | null
    revokedAt: Date | null
    createdAt: Date | null
  }

  export type ApiKeyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    keyHash: string | null
    companyId: string | null
    lastUsedAt: Date | null
    revokedAt: Date | null
    createdAt: Date | null
  }

  export type ApiKeyCountAggregateOutputType = {
    id: number
    name: number
    keyHash: number
    companyId: number
    lastUsedAt: number
    revokedAt: number
    createdAt: number
    _all: number
  }


  export type ApiKeyMinAggregateInputType = {
    id?: true
    name?: true
    keyHash?: true
    companyId?: true
    lastUsedAt?: true
    revokedAt?: true
    createdAt?: true
  }

  export type ApiKeyMaxAggregateInputType = {
    id?: true
    name?: true
    keyHash?: true
    companyId?: true
    lastUsedAt?: true
    revokedAt?: true
    createdAt?: true
  }

  export type ApiKeyCountAggregateInputType = {
    id?: true
    name?: true
    keyHash?: true
    companyId?: true
    lastUsedAt?: true
    revokedAt?: true
    createdAt?: true
    _all?: true
  }

  export type ApiKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKey to aggregate.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiKeys
    **/
    _count?: true | ApiKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiKeyMaxAggregateInputType
  }

  export type GetApiKeyAggregateType<T extends ApiKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateApiKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiKey[P]>
      : GetScalarType<T[P], AggregateApiKey[P]>
  }




  export type ApiKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithAggregationInput | ApiKeyOrderByWithAggregationInput[]
    by: ApiKeyScalarFieldEnum[] | ApiKeyScalarFieldEnum
    having?: ApiKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiKeyCountAggregateInputType | true
    _min?: ApiKeyMinAggregateInputType
    _max?: ApiKeyMaxAggregateInputType
  }

  export type ApiKeyGroupByOutputType = {
    id: string
    name: string | null
    keyHash: string
    companyId: string
    lastUsedAt: Date | null
    revokedAt: Date | null
    createdAt: Date
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  type GetApiKeyGroupByPayload<T extends ApiKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
            : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
        }
      >
    >


  export type ApiKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    keyHash?: boolean
    companyId?: boolean
    lastUsedAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    keyHash?: boolean
    companyId?: boolean
    lastUsedAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    keyHash?: boolean
    companyId?: boolean
    lastUsedAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectScalar = {
    id?: boolean
    name?: boolean
    keyHash?: boolean
    companyId?: boolean
    lastUsedAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
  }

  export type ApiKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "keyHash" | "companyId" | "lastUsedAt" | "revokedAt" | "createdAt", ExtArgs["result"]["apiKey"]>
  export type ApiKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type ApiKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type ApiKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $ApiKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiKey"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      keyHash: string
      companyId: string
      lastUsedAt: Date | null
      revokedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["apiKey"]>
    composites: {}
  }

  type ApiKeyGetPayload<S extends boolean | null | undefined | ApiKeyDefaultArgs> = $Result.GetResult<Prisma.$ApiKeyPayload, S>

  type ApiKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiKeyCountAggregateInputType | true
    }

  export interface ApiKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiKey'], meta: { name: 'ApiKey' } }
    /**
     * Find zero or one ApiKey that matches the filter.
     * @param {ApiKeyFindUniqueArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiKeyFindUniqueArgs>(args: SelectSubset<T, ApiKeyFindUniqueArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiKeyFindUniqueOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiKeyFindFirstArgs>(args?: SelectSubset<T, ApiKeyFindFirstArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiKeys
     * const apiKeys = await prisma.apiKey.findMany()
     * 
     * // Get first 10 ApiKeys
     * const apiKeys = await prisma.apiKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiKeyFindManyArgs>(args?: SelectSubset<T, ApiKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiKey.
     * @param {ApiKeyCreateArgs} args - Arguments to create a ApiKey.
     * @example
     * // Create one ApiKey
     * const ApiKey = await prisma.apiKey.create({
     *   data: {
     *     // ... data to create a ApiKey
     *   }
     * })
     * 
     */
    create<T extends ApiKeyCreateArgs>(args: SelectSubset<T, ApiKeyCreateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiKeys.
     * @param {ApiKeyCreateManyArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiKeyCreateManyArgs>(args?: SelectSubset<T, ApiKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiKeys and returns the data saved in the database.
     * @param {ApiKeyCreateManyAndReturnArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiKey.
     * @param {ApiKeyDeleteArgs} args - Arguments to delete one ApiKey.
     * @example
     * // Delete one ApiKey
     * const ApiKey = await prisma.apiKey.delete({
     *   where: {
     *     // ... filter to delete one ApiKey
     *   }
     * })
     * 
     */
    delete<T extends ApiKeyDeleteArgs>(args: SelectSubset<T, ApiKeyDeleteArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiKey.
     * @param {ApiKeyUpdateArgs} args - Arguments to update one ApiKey.
     * @example
     * // Update one ApiKey
     * const apiKey = await prisma.apiKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiKeyUpdateArgs>(args: SelectSubset<T, ApiKeyUpdateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiKeys.
     * @param {ApiKeyDeleteManyArgs} args - Arguments to filter ApiKeys to delete.
     * @example
     * // Delete a few ApiKeys
     * const { count } = await prisma.apiKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiKeyDeleteManyArgs>(args?: SelectSubset<T, ApiKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiKeyUpdateManyArgs>(args: SelectSubset<T, ApiKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys and returns the data updated in the database.
     * @param {ApiKeyUpdateManyAndReturnArgs} args - Arguments to update many ApiKeys.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApiKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiKey.
     * @param {ApiKeyUpsertArgs} args - Arguments to update or create a ApiKey.
     * @example
     * // Update or create a ApiKey
     * const apiKey = await prisma.apiKey.upsert({
     *   create: {
     *     // ... data to create a ApiKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiKey we want to update
     *   }
     * })
     */
    upsert<T extends ApiKeyUpsertArgs>(args: SelectSubset<T, ApiKeyUpsertArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCountArgs} args - Arguments to filter ApiKeys to count.
     * @example
     * // Count the number of ApiKeys
     * const count = await prisma.apiKey.count({
     *   where: {
     *     // ... the filter for the ApiKeys we want to count
     *   }
     * })
    **/
    count<T extends ApiKeyCountArgs>(
      args?: Subset<T, ApiKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApiKeyAggregateArgs>(args: Subset<T, ApiKeyAggregateArgs>): Prisma.PrismaPromise<GetApiKeyAggregateType<T>>

    /**
     * Group by ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyGroupByArgs} args - Group by arguments.
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
      T extends ApiKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiKeyGroupByArgs['orderBy'] }
        : { orderBy?: ApiKeyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApiKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiKey model
   */
  readonly fields: ApiKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ApiKey model
   */
  interface ApiKeyFieldRefs {
    readonly id: FieldRef<"ApiKey", 'String'>
    readonly name: FieldRef<"ApiKey", 'String'>
    readonly keyHash: FieldRef<"ApiKey", 'String'>
    readonly companyId: FieldRef<"ApiKey", 'String'>
    readonly lastUsedAt: FieldRef<"ApiKey", 'DateTime'>
    readonly revokedAt: FieldRef<"ApiKey", 'DateTime'>
    readonly createdAt: FieldRef<"ApiKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiKey findUnique
   */
  export type ApiKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findUniqueOrThrow
   */
  export type ApiKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findFirst
   */
  export type ApiKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findFirstOrThrow
   */
  export type ApiKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findMany
   */
  export type ApiKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeys to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey create
   */
  export type ApiKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiKey.
     */
    data: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
  }

  /**
   * ApiKey createMany
   */
  export type ApiKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKey createManyAndReturn
   */
  export type ApiKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey update
   */
  export type ApiKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiKey.
     */
    data: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
    /**
     * Choose, which ApiKey to update.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey updateMany
   */
  export type ApiKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
  }

  /**
   * ApiKey updateManyAndReturn
   */
  export type ApiKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey upsert
   */
  export type ApiKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiKey to update in case it exists.
     */
    where: ApiKeyWhereUniqueInput
    /**
     * In case the ApiKey found by the `where` argument doesn't exist, create a new ApiKey with this data.
     */
    create: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
    /**
     * In case the ApiKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
  }

  /**
   * ApiKey delete
   */
  export type ApiKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter which ApiKey to delete.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey deleteMany
   */
  export type ApiKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeys to delete
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to delete.
     */
    limit?: number
  }

  /**
   * ApiKey without action
   */
  export type ApiKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
  }


  /**
   * Model ImportJob
   */

  export type AggregateImportJob = {
    _count: ImportJobCountAggregateOutputType | null
    _min: ImportJobMinAggregateOutputType | null
    _max: ImportJobMaxAggregateOutputType | null
  }

  export type ImportJobMinAggregateOutputType = {
    id: string | null
    userId: string | null
    companyId: string | null
    entity: string | null
    source: string | null
    success: boolean | null
    processedAt: Date | null
    createdAt: Date | null
  }

  export type ImportJobMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    companyId: string | null
    entity: string | null
    source: string | null
    success: boolean | null
    processedAt: Date | null
    createdAt: Date | null
  }

  export type ImportJobCountAggregateOutputType = {
    id: number
    userId: number
    companyId: number
    entity: number
    mapping: number
    source: number
    success: number
    stats: number
    processedAt: number
    createdAt: number
    _all: number
  }


  export type ImportJobMinAggregateInputType = {
    id?: true
    userId?: true
    companyId?: true
    entity?: true
    source?: true
    success?: true
    processedAt?: true
    createdAt?: true
  }

  export type ImportJobMaxAggregateInputType = {
    id?: true
    userId?: true
    companyId?: true
    entity?: true
    source?: true
    success?: true
    processedAt?: true
    createdAt?: true
  }

  export type ImportJobCountAggregateInputType = {
    id?: true
    userId?: true
    companyId?: true
    entity?: true
    mapping?: true
    source?: true
    success?: true
    stats?: true
    processedAt?: true
    createdAt?: true
    _all?: true
  }

  export type ImportJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImportJob to aggregate.
     */
    where?: ImportJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportJobs to fetch.
     */
    orderBy?: ImportJobOrderByWithRelationInput | ImportJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImportJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImportJobs
    **/
    _count?: true | ImportJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImportJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImportJobMaxAggregateInputType
  }

  export type GetImportJobAggregateType<T extends ImportJobAggregateArgs> = {
        [P in keyof T & keyof AggregateImportJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImportJob[P]>
      : GetScalarType<T[P], AggregateImportJob[P]>
  }




  export type ImportJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImportJobWhereInput
    orderBy?: ImportJobOrderByWithAggregationInput | ImportJobOrderByWithAggregationInput[]
    by: ImportJobScalarFieldEnum[] | ImportJobScalarFieldEnum
    having?: ImportJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImportJobCountAggregateInputType | true
    _min?: ImportJobMinAggregateInputType
    _max?: ImportJobMaxAggregateInputType
  }

  export type ImportJobGroupByOutputType = {
    id: string
    userId: string | null
    companyId: string | null
    entity: string
    mapping: JsonValue
    source: string | null
    success: boolean | null
    stats: JsonValue | null
    processedAt: Date | null
    createdAt: Date
    _count: ImportJobCountAggregateOutputType | null
    _min: ImportJobMinAggregateOutputType | null
    _max: ImportJobMaxAggregateOutputType | null
  }

  type GetImportJobGroupByPayload<T extends ImportJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImportJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImportJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImportJobGroupByOutputType[P]>
            : GetScalarType<T[P], ImportJobGroupByOutputType[P]>
        }
      >
    >


  export type ImportJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyId?: boolean
    entity?: boolean
    mapping?: boolean
    source?: boolean
    success?: boolean
    stats?: boolean
    processedAt?: boolean
    createdAt?: boolean
    user?: boolean | ImportJob$userArgs<ExtArgs>
    company?: boolean | ImportJob$companyArgs<ExtArgs>
  }, ExtArgs["result"]["importJob"]>

  export type ImportJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyId?: boolean
    entity?: boolean
    mapping?: boolean
    source?: boolean
    success?: boolean
    stats?: boolean
    processedAt?: boolean
    createdAt?: boolean
    user?: boolean | ImportJob$userArgs<ExtArgs>
    company?: boolean | ImportJob$companyArgs<ExtArgs>
  }, ExtArgs["result"]["importJob"]>

  export type ImportJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyId?: boolean
    entity?: boolean
    mapping?: boolean
    source?: boolean
    success?: boolean
    stats?: boolean
    processedAt?: boolean
    createdAt?: boolean
    user?: boolean | ImportJob$userArgs<ExtArgs>
    company?: boolean | ImportJob$companyArgs<ExtArgs>
  }, ExtArgs["result"]["importJob"]>

  export type ImportJobSelectScalar = {
    id?: boolean
    userId?: boolean
    companyId?: boolean
    entity?: boolean
    mapping?: boolean
    source?: boolean
    success?: boolean
    stats?: boolean
    processedAt?: boolean
    createdAt?: boolean
  }

  export type ImportJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "companyId" | "entity" | "mapping" | "source" | "success" | "stats" | "processedAt" | "createdAt", ExtArgs["result"]["importJob"]>
  export type ImportJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ImportJob$userArgs<ExtArgs>
    company?: boolean | ImportJob$companyArgs<ExtArgs>
  }
  export type ImportJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ImportJob$userArgs<ExtArgs>
    company?: boolean | ImportJob$companyArgs<ExtArgs>
  }
  export type ImportJobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ImportJob$userArgs<ExtArgs>
    company?: boolean | ImportJob$companyArgs<ExtArgs>
  }

  export type $ImportJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImportJob"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      company: Prisma.$CompanyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      companyId: string | null
      entity: string
      mapping: Prisma.JsonValue
      source: string | null
      success: boolean | null
      stats: Prisma.JsonValue | null
      processedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["importJob"]>
    composites: {}
  }

  type ImportJobGetPayload<S extends boolean | null | undefined | ImportJobDefaultArgs> = $Result.GetResult<Prisma.$ImportJobPayload, S>

  type ImportJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImportJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImportJobCountAggregateInputType | true
    }

  export interface ImportJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImportJob'], meta: { name: 'ImportJob' } }
    /**
     * Find zero or one ImportJob that matches the filter.
     * @param {ImportJobFindUniqueArgs} args - Arguments to find a ImportJob
     * @example
     * // Get one ImportJob
     * const importJob = await prisma.importJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImportJobFindUniqueArgs>(args: SelectSubset<T, ImportJobFindUniqueArgs<ExtArgs>>): Prisma__ImportJobClient<$Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImportJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImportJobFindUniqueOrThrowArgs} args - Arguments to find a ImportJob
     * @example
     * // Get one ImportJob
     * const importJob = await prisma.importJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImportJobFindUniqueOrThrowArgs>(args: SelectSubset<T, ImportJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImportJobClient<$Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImportJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportJobFindFirstArgs} args - Arguments to find a ImportJob
     * @example
     * // Get one ImportJob
     * const importJob = await prisma.importJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImportJobFindFirstArgs>(args?: SelectSubset<T, ImportJobFindFirstArgs<ExtArgs>>): Prisma__ImportJobClient<$Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImportJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportJobFindFirstOrThrowArgs} args - Arguments to find a ImportJob
     * @example
     * // Get one ImportJob
     * const importJob = await prisma.importJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImportJobFindFirstOrThrowArgs>(args?: SelectSubset<T, ImportJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImportJobClient<$Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImportJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImportJobs
     * const importJobs = await prisma.importJob.findMany()
     * 
     * // Get first 10 ImportJobs
     * const importJobs = await prisma.importJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const importJobWithIdOnly = await prisma.importJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImportJobFindManyArgs>(args?: SelectSubset<T, ImportJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImportJob.
     * @param {ImportJobCreateArgs} args - Arguments to create a ImportJob.
     * @example
     * // Create one ImportJob
     * const ImportJob = await prisma.importJob.create({
     *   data: {
     *     // ... data to create a ImportJob
     *   }
     * })
     * 
     */
    create<T extends ImportJobCreateArgs>(args: SelectSubset<T, ImportJobCreateArgs<ExtArgs>>): Prisma__ImportJobClient<$Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImportJobs.
     * @param {ImportJobCreateManyArgs} args - Arguments to create many ImportJobs.
     * @example
     * // Create many ImportJobs
     * const importJob = await prisma.importJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImportJobCreateManyArgs>(args?: SelectSubset<T, ImportJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImportJobs and returns the data saved in the database.
     * @param {ImportJobCreateManyAndReturnArgs} args - Arguments to create many ImportJobs.
     * @example
     * // Create many ImportJobs
     * const importJob = await prisma.importJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImportJobs and only return the `id`
     * const importJobWithIdOnly = await prisma.importJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImportJobCreateManyAndReturnArgs>(args?: SelectSubset<T, ImportJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ImportJob.
     * @param {ImportJobDeleteArgs} args - Arguments to delete one ImportJob.
     * @example
     * // Delete one ImportJob
     * const ImportJob = await prisma.importJob.delete({
     *   where: {
     *     // ... filter to delete one ImportJob
     *   }
     * })
     * 
     */
    delete<T extends ImportJobDeleteArgs>(args: SelectSubset<T, ImportJobDeleteArgs<ExtArgs>>): Prisma__ImportJobClient<$Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImportJob.
     * @param {ImportJobUpdateArgs} args - Arguments to update one ImportJob.
     * @example
     * // Update one ImportJob
     * const importJob = await prisma.importJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImportJobUpdateArgs>(args: SelectSubset<T, ImportJobUpdateArgs<ExtArgs>>): Prisma__ImportJobClient<$Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImportJobs.
     * @param {ImportJobDeleteManyArgs} args - Arguments to filter ImportJobs to delete.
     * @example
     * // Delete a few ImportJobs
     * const { count } = await prisma.importJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImportJobDeleteManyArgs>(args?: SelectSubset<T, ImportJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImportJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImportJobs
     * const importJob = await prisma.importJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImportJobUpdateManyArgs>(args: SelectSubset<T, ImportJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImportJobs and returns the data updated in the database.
     * @param {ImportJobUpdateManyAndReturnArgs} args - Arguments to update many ImportJobs.
     * @example
     * // Update many ImportJobs
     * const importJob = await prisma.importJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ImportJobs and only return the `id`
     * const importJobWithIdOnly = await prisma.importJob.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImportJobUpdateManyAndReturnArgs>(args: SelectSubset<T, ImportJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ImportJob.
     * @param {ImportJobUpsertArgs} args - Arguments to update or create a ImportJob.
     * @example
     * // Update or create a ImportJob
     * const importJob = await prisma.importJob.upsert({
     *   create: {
     *     // ... data to create a ImportJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImportJob we want to update
     *   }
     * })
     */
    upsert<T extends ImportJobUpsertArgs>(args: SelectSubset<T, ImportJobUpsertArgs<ExtArgs>>): Prisma__ImportJobClient<$Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImportJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportJobCountArgs} args - Arguments to filter ImportJobs to count.
     * @example
     * // Count the number of ImportJobs
     * const count = await prisma.importJob.count({
     *   where: {
     *     // ... the filter for the ImportJobs we want to count
     *   }
     * })
    **/
    count<T extends ImportJobCountArgs>(
      args?: Subset<T, ImportJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImportJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImportJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImportJobAggregateArgs>(args: Subset<T, ImportJobAggregateArgs>): Prisma.PrismaPromise<GetImportJobAggregateType<T>>

    /**
     * Group by ImportJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportJobGroupByArgs} args - Group by arguments.
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
      T extends ImportJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImportJobGroupByArgs['orderBy'] }
        : { orderBy?: ImportJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImportJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImportJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImportJob model
   */
  readonly fields: ImportJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImportJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImportJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ImportJob$userArgs<ExtArgs> = {}>(args?: Subset<T, ImportJob$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    company<T extends ImportJob$companyArgs<ExtArgs> = {}>(args?: Subset<T, ImportJob$companyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ImportJob model
   */
  interface ImportJobFieldRefs {
    readonly id: FieldRef<"ImportJob", 'String'>
    readonly userId: FieldRef<"ImportJob", 'String'>
    readonly companyId: FieldRef<"ImportJob", 'String'>
    readonly entity: FieldRef<"ImportJob", 'String'>
    readonly mapping: FieldRef<"ImportJob", 'Json'>
    readonly source: FieldRef<"ImportJob", 'String'>
    readonly success: FieldRef<"ImportJob", 'Boolean'>
    readonly stats: FieldRef<"ImportJob", 'Json'>
    readonly processedAt: FieldRef<"ImportJob", 'DateTime'>
    readonly createdAt: FieldRef<"ImportJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ImportJob findUnique
   */
  export type ImportJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportJob
     */
    select?: ImportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportJob
     */
    omit?: ImportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportJobInclude<ExtArgs> | null
    /**
     * Filter, which ImportJob to fetch.
     */
    where: ImportJobWhereUniqueInput
  }

  /**
   * ImportJob findUniqueOrThrow
   */
  export type ImportJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportJob
     */
    select?: ImportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportJob
     */
    omit?: ImportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportJobInclude<ExtArgs> | null
    /**
     * Filter, which ImportJob to fetch.
     */
    where: ImportJobWhereUniqueInput
  }

  /**
   * ImportJob findFirst
   */
  export type ImportJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportJob
     */
    select?: ImportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportJob
     */
    omit?: ImportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportJobInclude<ExtArgs> | null
    /**
     * Filter, which ImportJob to fetch.
     */
    where?: ImportJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportJobs to fetch.
     */
    orderBy?: ImportJobOrderByWithRelationInput | ImportJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImportJobs.
     */
    cursor?: ImportJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImportJobs.
     */
    distinct?: ImportJobScalarFieldEnum | ImportJobScalarFieldEnum[]
  }

  /**
   * ImportJob findFirstOrThrow
   */
  export type ImportJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportJob
     */
    select?: ImportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportJob
     */
    omit?: ImportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportJobInclude<ExtArgs> | null
    /**
     * Filter, which ImportJob to fetch.
     */
    where?: ImportJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportJobs to fetch.
     */
    orderBy?: ImportJobOrderByWithRelationInput | ImportJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImportJobs.
     */
    cursor?: ImportJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImportJobs.
     */
    distinct?: ImportJobScalarFieldEnum | ImportJobScalarFieldEnum[]
  }

  /**
   * ImportJob findMany
   */
  export type ImportJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportJob
     */
    select?: ImportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportJob
     */
    omit?: ImportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportJobInclude<ExtArgs> | null
    /**
     * Filter, which ImportJobs to fetch.
     */
    where?: ImportJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportJobs to fetch.
     */
    orderBy?: ImportJobOrderByWithRelationInput | ImportJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImportJobs.
     */
    cursor?: ImportJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportJobs.
     */
    skip?: number
    distinct?: ImportJobScalarFieldEnum | ImportJobScalarFieldEnum[]
  }

  /**
   * ImportJob create
   */
  export type ImportJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportJob
     */
    select?: ImportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportJob
     */
    omit?: ImportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportJobInclude<ExtArgs> | null
    /**
     * The data needed to create a ImportJob.
     */
    data: XOR<ImportJobCreateInput, ImportJobUncheckedCreateInput>
  }

  /**
   * ImportJob createMany
   */
  export type ImportJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImportJobs.
     */
    data: ImportJobCreateManyInput | ImportJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImportJob createManyAndReturn
   */
  export type ImportJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportJob
     */
    select?: ImportJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImportJob
     */
    omit?: ImportJobOmit<ExtArgs> | null
    /**
     * The data used to create many ImportJobs.
     */
    data: ImportJobCreateManyInput | ImportJobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportJobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImportJob update
   */
  export type ImportJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportJob
     */
    select?: ImportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportJob
     */
    omit?: ImportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportJobInclude<ExtArgs> | null
    /**
     * The data needed to update a ImportJob.
     */
    data: XOR<ImportJobUpdateInput, ImportJobUncheckedUpdateInput>
    /**
     * Choose, which ImportJob to update.
     */
    where: ImportJobWhereUniqueInput
  }

  /**
   * ImportJob updateMany
   */
  export type ImportJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImportJobs.
     */
    data: XOR<ImportJobUpdateManyMutationInput, ImportJobUncheckedUpdateManyInput>
    /**
     * Filter which ImportJobs to update
     */
    where?: ImportJobWhereInput
    /**
     * Limit how many ImportJobs to update.
     */
    limit?: number
  }

  /**
   * ImportJob updateManyAndReturn
   */
  export type ImportJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportJob
     */
    select?: ImportJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImportJob
     */
    omit?: ImportJobOmit<ExtArgs> | null
    /**
     * The data used to update ImportJobs.
     */
    data: XOR<ImportJobUpdateManyMutationInput, ImportJobUncheckedUpdateManyInput>
    /**
     * Filter which ImportJobs to update
     */
    where?: ImportJobWhereInput
    /**
     * Limit how many ImportJobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportJobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImportJob upsert
   */
  export type ImportJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportJob
     */
    select?: ImportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportJob
     */
    omit?: ImportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportJobInclude<ExtArgs> | null
    /**
     * The filter to search for the ImportJob to update in case it exists.
     */
    where: ImportJobWhereUniqueInput
    /**
     * In case the ImportJob found by the `where` argument doesn't exist, create a new ImportJob with this data.
     */
    create: XOR<ImportJobCreateInput, ImportJobUncheckedCreateInput>
    /**
     * In case the ImportJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImportJobUpdateInput, ImportJobUncheckedUpdateInput>
  }

  /**
   * ImportJob delete
   */
  export type ImportJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportJob
     */
    select?: ImportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportJob
     */
    omit?: ImportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportJobInclude<ExtArgs> | null
    /**
     * Filter which ImportJob to delete.
     */
    where: ImportJobWhereUniqueInput
  }

  /**
   * ImportJob deleteMany
   */
  export type ImportJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImportJobs to delete
     */
    where?: ImportJobWhereInput
    /**
     * Limit how many ImportJobs to delete.
     */
    limit?: number
  }

  /**
   * ImportJob.user
   */
  export type ImportJob$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * ImportJob.company
   */
  export type ImportJob$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * ImportJob without action
   */
  export type ImportJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportJob
     */
    select?: ImportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportJob
     */
    omit?: ImportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportJobInclude<ExtArgs> | null
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
    password: 'password',
    companyId: 'companyId',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OtpScalarFieldEnum: {
    id: 'id',
    email: 'email',
    otpHash: 'otpHash',
    used: 'used',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type OtpScalarFieldEnum = (typeof OtpScalarFieldEnum)[keyof typeof OtpScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    vatNumber: 'vatNumber',
    email: 'email',
    phone: 'phone',
    country: 'country',
    city: 'city',
    postalCode: 'postalCode',
    address1: 'address1',
    address2: 'address2',
    roles: 'roles',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const DeliveryPlantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    country: 'country',
    city: 'city',
    postalCode: 'postalCode',
    address1: 'address1',
    address2: 'address2',
    companyId: 'companyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeliveryPlantScalarFieldEnum = (typeof DeliveryPlantScalarFieldEnum)[keyof typeof DeliveryPlantScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    plateNumber: 'plateNumber',
    vehicleType: 'vehicleType',
    tareWeight: 'tareWeight',
    maxLoadKg: 'maxLoadKg',
    transporterId: 'transporterId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    code: 'code',
    description: 'description',
    unit: 'unit',
    density: 'density',
    supplierId: 'supplierId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    number: 'number',
    supplierId: 'supplierId',
    customerId: 'customerId',
    transporterId: 'transporterId',
    vehicleId: 'vehicleId',
    deliveryPlantId: 'deliveryPlantId',
    productId: 'productId',
    externalCode: 'externalCode',
    direction: 'direction',
    status: 'status',
    grossWeight: 'grossWeight',
    tareWeight: 'tareWeight',
    netWeight: 'netWeight',
    unit: 'unit',
    notes: 'notes',
    meta: 'meta',
    weighedAt: 'weighedAt',
    shareToken: 'shareToken',
    sharedAt: 'sharedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const TicketDocumentScalarFieldEnum: {
    id: 'id',
    ticketId: 'ticketId',
    type: 'type',
    path: 'path',
    createdAt: 'createdAt'
  };

  export type TicketDocumentScalarFieldEnum = (typeof TicketDocumentScalarFieldEnum)[keyof typeof TicketDocumentScalarFieldEnum]


  export const TicketEventLogScalarFieldEnum: {
    id: 'id',
    ticketId: 'ticketId',
    actorId: 'actorId',
    action: 'action',
    from: 'from',
    to: 'to',
    meta: 'meta',
    createdAt: 'createdAt'
  };

  export type TicketEventLogScalarFieldEnum = (typeof TicketEventLogScalarFieldEnum)[keyof typeof TicketEventLogScalarFieldEnum]


  export const TicketSequenceScalarFieldEnum: {
    id: 'id',
    yearMonth: 'yearMonth',
    counter: 'counter',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TicketSequenceScalarFieldEnum = (typeof TicketSequenceScalarFieldEnum)[keyof typeof TicketSequenceScalarFieldEnum]


  export const ApiKeyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    keyHash: 'keyHash',
    companyId: 'companyId',
    lastUsedAt: 'lastUsedAt',
    revokedAt: 'revokedAt',
    createdAt: 'createdAt'
  };

  export type ApiKeyScalarFieldEnum = (typeof ApiKeyScalarFieldEnum)[keyof typeof ApiKeyScalarFieldEnum]


  export const ImportJobScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    companyId: 'companyId',
    entity: 'entity',
    mapping: 'mapping',
    source: 'source',
    success: 'success',
    stats: 'stats',
    processedAt: 'processedAt',
    createdAt: 'createdAt'
  };

  export type ImportJobScalarFieldEnum = (typeof ImportJobScalarFieldEnum)[keyof typeof ImportJobScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'CompanyRole[]'
   */
  export type ListEnumCompanyRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompanyRole[]'>
    


  /**
   * Reference to a field of type 'CompanyRole'
   */
  export type EnumCompanyRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompanyRole'>
    


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
   * Reference to a field of type 'TicketDirection'
   */
  export type EnumTicketDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketDirection'>
    


  /**
   * Reference to a field of type 'TicketDirection[]'
   */
  export type ListEnumTicketDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketDirection[]'>
    


  /**
   * Reference to a field of type 'TicketStatus'
   */
  export type EnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus'>
    


  /**
   * Reference to a field of type 'TicketStatus[]'
   */
  export type ListEnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DocType'
   */
  export type EnumDocTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocType'>
    


  /**
   * Reference to a field of type 'DocType[]'
   */
  export type ListEnumDocTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocType[]'>
    
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
    password?: StringNullableFilter<"User"> | string | null
    companyId?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    importJobs?: ImportJobListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrderInput | SortOrder
    companyId?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    company?: CompanyOrderByWithRelationInput
    importJobs?: ImportJobOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    companyId?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    importJobs?: ImportJobListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrderInput | SortOrder
    companyId?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
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
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    companyId?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type OtpWhereInput = {
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    id?: StringFilter<"Otp"> | string
    email?: StringFilter<"Otp"> | string
    otpHash?: StringFilter<"Otp"> | string
    used?: BoolFilter<"Otp"> | boolean
    expiresAt?: DateTimeFilter<"Otp"> | Date | string
    createdAt?: DateTimeFilter<"Otp"> | Date | string
  }

  export type OtpOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    otpHash?: SortOrder
    used?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email_otpHash?: OtpEmailOtpHashCompoundUniqueInput
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    email?: StringFilter<"Otp"> | string
    otpHash?: StringFilter<"Otp"> | string
    used?: BoolFilter<"Otp"> | boolean
    expiresAt?: DateTimeFilter<"Otp"> | Date | string
    createdAt?: DateTimeFilter<"Otp"> | Date | string
  }, "id" | "email_otpHash">

  export type OtpOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    otpHash?: SortOrder
    used?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: OtpCountOrderByAggregateInput
    _max?: OtpMaxOrderByAggregateInput
    _min?: OtpMinOrderByAggregateInput
  }

  export type OtpScalarWhereWithAggregatesInput = {
    AND?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    OR?: OtpScalarWhereWithAggregatesInput[]
    NOT?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Otp"> | string
    email?: StringWithAggregatesFilter<"Otp"> | string
    otpHash?: StringWithAggregatesFilter<"Otp"> | string
    used?: BoolWithAggregatesFilter<"Otp"> | boolean
    expiresAt?: DateTimeWithAggregatesFilter<"Otp"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Otp"> | Date | string
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    vatNumber?: StringFilter<"Company"> | string
    email?: StringNullableFilter<"Company"> | string | null
    phone?: StringNullableFilter<"Company"> | string | null
    country?: StringNullableFilter<"Company"> | string | null
    city?: StringNullableFilter<"Company"> | string | null
    postalCode?: StringNullableFilter<"Company"> | string | null
    address1?: StringNullableFilter<"Company"> | string | null
    address2?: StringNullableFilter<"Company"> | string | null
    roles?: EnumCompanyRoleNullableListFilter<"Company">
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Company"> | Date | string | null
    users?: UserListRelationFilter
    deliveryPlants?: DeliveryPlantListRelationFilter
    vehicles?: VehicleListRelationFilter
    suppliedProducts?: ProductListRelationFilter
    sentTickets?: TicketListRelationFilter
    customerTickets?: TicketListRelationFilter
    transporterTickets?: TicketListRelationFilter
    apiKeys?: ApiKeyListRelationFilter
    importJobs?: ImportJobListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    vatNumber?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    address1?: SortOrderInput | SortOrder
    address2?: SortOrderInput | SortOrder
    roles?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    users?: UserOrderByRelationAggregateInput
    deliveryPlants?: DeliveryPlantOrderByRelationAggregateInput
    vehicles?: VehicleOrderByRelationAggregateInput
    suppliedProducts?: ProductOrderByRelationAggregateInput
    sentTickets?: TicketOrderByRelationAggregateInput
    customerTickets?: TicketOrderByRelationAggregateInput
    transporterTickets?: TicketOrderByRelationAggregateInput
    apiKeys?: ApiKeyOrderByRelationAggregateInput
    importJobs?: ImportJobOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    vatNumber?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    email?: StringNullableFilter<"Company"> | string | null
    phone?: StringNullableFilter<"Company"> | string | null
    country?: StringNullableFilter<"Company"> | string | null
    city?: StringNullableFilter<"Company"> | string | null
    postalCode?: StringNullableFilter<"Company"> | string | null
    address1?: StringNullableFilter<"Company"> | string | null
    address2?: StringNullableFilter<"Company"> | string | null
    roles?: EnumCompanyRoleNullableListFilter<"Company">
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Company"> | Date | string | null
    users?: UserListRelationFilter
    deliveryPlants?: DeliveryPlantListRelationFilter
    vehicles?: VehicleListRelationFilter
    suppliedProducts?: ProductListRelationFilter
    sentTickets?: TicketListRelationFilter
    customerTickets?: TicketListRelationFilter
    transporterTickets?: TicketListRelationFilter
    apiKeys?: ApiKeyListRelationFilter
    importJobs?: ImportJobListRelationFilter
  }, "id" | "vatNumber">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    vatNumber?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    address1?: SortOrderInput | SortOrder
    address2?: SortOrderInput | SortOrder
    roles?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    vatNumber?: StringWithAggregatesFilter<"Company"> | string
    email?: StringNullableWithAggregatesFilter<"Company"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Company"> | string | null
    country?: StringNullableWithAggregatesFilter<"Company"> | string | null
    city?: StringNullableWithAggregatesFilter<"Company"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"Company"> | string | null
    address1?: StringNullableWithAggregatesFilter<"Company"> | string | null
    address2?: StringNullableWithAggregatesFilter<"Company"> | string | null
    roles?: EnumCompanyRoleNullableListFilter<"Company">
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Company"> | Date | string | null
  }

  export type DeliveryPlantWhereInput = {
    AND?: DeliveryPlantWhereInput | DeliveryPlantWhereInput[]
    OR?: DeliveryPlantWhereInput[]
    NOT?: DeliveryPlantWhereInput | DeliveryPlantWhereInput[]
    id?: StringFilter<"DeliveryPlant"> | string
    name?: StringFilter<"DeliveryPlant"> | string
    country?: StringNullableFilter<"DeliveryPlant"> | string | null
    city?: StringNullableFilter<"DeliveryPlant"> | string | null
    postalCode?: StringNullableFilter<"DeliveryPlant"> | string | null
    address1?: StringNullableFilter<"DeliveryPlant"> | string | null
    address2?: StringNullableFilter<"DeliveryPlant"> | string | null
    companyId?: StringFilter<"DeliveryPlant"> | string
    createdAt?: DateTimeFilter<"DeliveryPlant"> | Date | string
    updatedAt?: DateTimeNullableFilter<"DeliveryPlant"> | Date | string | null
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    tickets?: TicketListRelationFilter
  }

  export type DeliveryPlantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    address1?: SortOrderInput | SortOrder
    address2?: SortOrderInput | SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    company?: CompanyOrderByWithRelationInput
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type DeliveryPlantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    companyId_name?: DeliveryPlantCompanyIdNameCompoundUniqueInput
    AND?: DeliveryPlantWhereInput | DeliveryPlantWhereInput[]
    OR?: DeliveryPlantWhereInput[]
    NOT?: DeliveryPlantWhereInput | DeliveryPlantWhereInput[]
    name?: StringFilter<"DeliveryPlant"> | string
    country?: StringNullableFilter<"DeliveryPlant"> | string | null
    city?: StringNullableFilter<"DeliveryPlant"> | string | null
    postalCode?: StringNullableFilter<"DeliveryPlant"> | string | null
    address1?: StringNullableFilter<"DeliveryPlant"> | string | null
    address2?: StringNullableFilter<"DeliveryPlant"> | string | null
    companyId?: StringFilter<"DeliveryPlant"> | string
    createdAt?: DateTimeFilter<"DeliveryPlant"> | Date | string
    updatedAt?: DateTimeNullableFilter<"DeliveryPlant"> | Date | string | null
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    tickets?: TicketListRelationFilter
  }, "id" | "companyId_name">

  export type DeliveryPlantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    address1?: SortOrderInput | SortOrder
    address2?: SortOrderInput | SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: DeliveryPlantCountOrderByAggregateInput
    _max?: DeliveryPlantMaxOrderByAggregateInput
    _min?: DeliveryPlantMinOrderByAggregateInput
  }

  export type DeliveryPlantScalarWhereWithAggregatesInput = {
    AND?: DeliveryPlantScalarWhereWithAggregatesInput | DeliveryPlantScalarWhereWithAggregatesInput[]
    OR?: DeliveryPlantScalarWhereWithAggregatesInput[]
    NOT?: DeliveryPlantScalarWhereWithAggregatesInput | DeliveryPlantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DeliveryPlant"> | string
    name?: StringWithAggregatesFilter<"DeliveryPlant"> | string
    country?: StringNullableWithAggregatesFilter<"DeliveryPlant"> | string | null
    city?: StringNullableWithAggregatesFilter<"DeliveryPlant"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"DeliveryPlant"> | string | null
    address1?: StringNullableWithAggregatesFilter<"DeliveryPlant"> | string | null
    address2?: StringNullableWithAggregatesFilter<"DeliveryPlant"> | string | null
    companyId?: StringWithAggregatesFilter<"DeliveryPlant"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DeliveryPlant"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"DeliveryPlant"> | Date | string | null
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    plateNumber?: StringFilter<"Vehicle"> | string
    vehicleType?: StringNullableFilter<"Vehicle"> | string | null
    tareWeight?: IntNullableFilter<"Vehicle"> | number | null
    maxLoadKg?: IntNullableFilter<"Vehicle"> | number | null
    transporterId?: StringFilter<"Vehicle"> | string
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Vehicle"> | Date | string | null
    transporter?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    tickets?: TicketListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    vehicleType?: SortOrderInput | SortOrder
    tareWeight?: SortOrderInput | SortOrder
    maxLoadKg?: SortOrderInput | SortOrder
    transporterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    transporter?: CompanyOrderByWithRelationInput
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    plateNumber?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    vehicleType?: StringNullableFilter<"Vehicle"> | string | null
    tareWeight?: IntNullableFilter<"Vehicle"> | number | null
    maxLoadKg?: IntNullableFilter<"Vehicle"> | number | null
    transporterId?: StringFilter<"Vehicle"> | string
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Vehicle"> | Date | string | null
    transporter?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    tickets?: TicketListRelationFilter
  }, "id" | "plateNumber">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    vehicleType?: SortOrderInput | SortOrder
    tareWeight?: SortOrderInput | SortOrder
    maxLoadKg?: SortOrderInput | SortOrder
    transporterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vehicle"> | string
    plateNumber?: StringWithAggregatesFilter<"Vehicle"> | string
    vehicleType?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    tareWeight?: IntNullableWithAggregatesFilter<"Vehicle"> | number | null
    maxLoadKg?: IntNullableWithAggregatesFilter<"Vehicle"> | number | null
    transporterId?: StringWithAggregatesFilter<"Vehicle"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Vehicle"> | Date | string | null
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    code?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    unit?: StringNullableFilter<"Product"> | string | null
    density?: FloatNullableFilter<"Product"> | number | null
    supplierId?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    supplier?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    tickets?: TicketListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    unit?: SortOrderInput | SortOrder
    density?: SortOrderInput | SortOrder
    supplierId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    supplier?: CompanyOrderByWithRelationInput
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    description?: StringFilter<"Product"> | string
    unit?: StringNullableFilter<"Product"> | string | null
    density?: FloatNullableFilter<"Product"> | number | null
    supplierId?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    supplier?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    tickets?: TicketListRelationFilter
  }, "id" | "code">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    unit?: SortOrderInput | SortOrder
    density?: SortOrderInput | SortOrder
    supplierId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    code?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    unit?: StringNullableWithAggregatesFilter<"Product"> | string | null
    density?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    supplierId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: StringFilter<"Ticket"> | string
    number?: StringFilter<"Ticket"> | string
    supplierId?: StringFilter<"Ticket"> | string
    customerId?: StringFilter<"Ticket"> | string
    transporterId?: StringFilter<"Ticket"> | string
    vehicleId?: StringFilter<"Ticket"> | string
    deliveryPlantId?: StringFilter<"Ticket"> | string
    productId?: StringFilter<"Ticket"> | string
    externalCode?: StringNullableFilter<"Ticket"> | string | null
    direction?: EnumTicketDirectionFilter<"Ticket"> | $Enums.TicketDirection
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    grossWeight?: FloatNullableFilter<"Ticket"> | number | null
    tareWeight?: FloatNullableFilter<"Ticket"> | number | null
    netWeight?: FloatNullableFilter<"Ticket"> | number | null
    unit?: StringNullableFilter<"Ticket"> | string | null
    notes?: StringNullableFilter<"Ticket"> | string | null
    meta?: JsonNullableFilter<"Ticket">
    weighedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    shareToken?: StringNullableFilter<"Ticket"> | string | null
    sharedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    supplier?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    customer?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    transporter?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    deliveryPlant?: XOR<DeliveryPlantScalarRelationFilter, DeliveryPlantWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    documents?: TicketDocumentListRelationFilter
    events?: TicketEventLogListRelationFilter
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    supplierId?: SortOrder
    customerId?: SortOrder
    transporterId?: SortOrder
    vehicleId?: SortOrder
    deliveryPlantId?: SortOrder
    productId?: SortOrder
    externalCode?: SortOrderInput | SortOrder
    direction?: SortOrder
    status?: SortOrder
    grossWeight?: SortOrderInput | SortOrder
    tareWeight?: SortOrderInput | SortOrder
    netWeight?: SortOrderInput | SortOrder
    unit?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    meta?: SortOrderInput | SortOrder
    weighedAt?: SortOrderInput | SortOrder
    shareToken?: SortOrderInput | SortOrder
    sharedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    supplier?: CompanyOrderByWithRelationInput
    customer?: CompanyOrderByWithRelationInput
    transporter?: CompanyOrderByWithRelationInput
    vehicle?: VehicleOrderByWithRelationInput
    deliveryPlant?: DeliveryPlantOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    documents?: TicketDocumentOrderByRelationAggregateInput
    events?: TicketEventLogOrderByRelationAggregateInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    number?: string
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    supplierId?: StringFilter<"Ticket"> | string
    customerId?: StringFilter<"Ticket"> | string
    transporterId?: StringFilter<"Ticket"> | string
    vehicleId?: StringFilter<"Ticket"> | string
    deliveryPlantId?: StringFilter<"Ticket"> | string
    productId?: StringFilter<"Ticket"> | string
    externalCode?: StringNullableFilter<"Ticket"> | string | null
    direction?: EnumTicketDirectionFilter<"Ticket"> | $Enums.TicketDirection
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    grossWeight?: FloatNullableFilter<"Ticket"> | number | null
    tareWeight?: FloatNullableFilter<"Ticket"> | number | null
    netWeight?: FloatNullableFilter<"Ticket"> | number | null
    unit?: StringNullableFilter<"Ticket"> | string | null
    notes?: StringNullableFilter<"Ticket"> | string | null
    meta?: JsonNullableFilter<"Ticket">
    weighedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    shareToken?: StringNullableFilter<"Ticket"> | string | null
    sharedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    supplier?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    customer?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    transporter?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    deliveryPlant?: XOR<DeliveryPlantScalarRelationFilter, DeliveryPlantWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    documents?: TicketDocumentListRelationFilter
    events?: TicketEventLogListRelationFilter
  }, "id" | "number">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    supplierId?: SortOrder
    customerId?: SortOrder
    transporterId?: SortOrder
    vehicleId?: SortOrder
    deliveryPlantId?: SortOrder
    productId?: SortOrder
    externalCode?: SortOrderInput | SortOrder
    direction?: SortOrder
    status?: SortOrder
    grossWeight?: SortOrderInput | SortOrder
    tareWeight?: SortOrderInput | SortOrder
    netWeight?: SortOrderInput | SortOrder
    unit?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    meta?: SortOrderInput | SortOrder
    weighedAt?: SortOrderInput | SortOrder
    shareToken?: SortOrderInput | SortOrder
    sharedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ticket"> | string
    number?: StringWithAggregatesFilter<"Ticket"> | string
    supplierId?: StringWithAggregatesFilter<"Ticket"> | string
    customerId?: StringWithAggregatesFilter<"Ticket"> | string
    transporterId?: StringWithAggregatesFilter<"Ticket"> | string
    vehicleId?: StringWithAggregatesFilter<"Ticket"> | string
    deliveryPlantId?: StringWithAggregatesFilter<"Ticket"> | string
    productId?: StringWithAggregatesFilter<"Ticket"> | string
    externalCode?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    direction?: EnumTicketDirectionWithAggregatesFilter<"Ticket"> | $Enums.TicketDirection
    status?: EnumTicketStatusWithAggregatesFilter<"Ticket"> | $Enums.TicketStatus
    grossWeight?: FloatNullableWithAggregatesFilter<"Ticket"> | number | null
    tareWeight?: FloatNullableWithAggregatesFilter<"Ticket"> | number | null
    netWeight?: FloatNullableWithAggregatesFilter<"Ticket"> | number | null
    unit?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    meta?: JsonNullableWithAggregatesFilter<"Ticket">
    weighedAt?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    shareToken?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    sharedAt?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
  }

  export type TicketDocumentWhereInput = {
    AND?: TicketDocumentWhereInput | TicketDocumentWhereInput[]
    OR?: TicketDocumentWhereInput[]
    NOT?: TicketDocumentWhereInput | TicketDocumentWhereInput[]
    id?: StringFilter<"TicketDocument"> | string
    ticketId?: StringFilter<"TicketDocument"> | string
    type?: EnumDocTypeFilter<"TicketDocument"> | $Enums.DocType
    path?: StringFilter<"TicketDocument"> | string
    createdAt?: DateTimeFilter<"TicketDocument"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }

  export type TicketDocumentOrderByWithRelationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    type?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    ticket?: TicketOrderByWithRelationInput
  }

  export type TicketDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketDocumentWhereInput | TicketDocumentWhereInput[]
    OR?: TicketDocumentWhereInput[]
    NOT?: TicketDocumentWhereInput | TicketDocumentWhereInput[]
    ticketId?: StringFilter<"TicketDocument"> | string
    type?: EnumDocTypeFilter<"TicketDocument"> | $Enums.DocType
    path?: StringFilter<"TicketDocument"> | string
    createdAt?: DateTimeFilter<"TicketDocument"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }, "id">

  export type TicketDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    type?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    _count?: TicketDocumentCountOrderByAggregateInput
    _max?: TicketDocumentMaxOrderByAggregateInput
    _min?: TicketDocumentMinOrderByAggregateInput
  }

  export type TicketDocumentScalarWhereWithAggregatesInput = {
    AND?: TicketDocumentScalarWhereWithAggregatesInput | TicketDocumentScalarWhereWithAggregatesInput[]
    OR?: TicketDocumentScalarWhereWithAggregatesInput[]
    NOT?: TicketDocumentScalarWhereWithAggregatesInput | TicketDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TicketDocument"> | string
    ticketId?: StringWithAggregatesFilter<"TicketDocument"> | string
    type?: EnumDocTypeWithAggregatesFilter<"TicketDocument"> | $Enums.DocType
    path?: StringWithAggregatesFilter<"TicketDocument"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TicketDocument"> | Date | string
  }

  export type TicketEventLogWhereInput = {
    AND?: TicketEventLogWhereInput | TicketEventLogWhereInput[]
    OR?: TicketEventLogWhereInput[]
    NOT?: TicketEventLogWhereInput | TicketEventLogWhereInput[]
    id?: StringFilter<"TicketEventLog"> | string
    ticketId?: StringFilter<"TicketEventLog"> | string
    actorId?: StringFilter<"TicketEventLog"> | string
    action?: StringFilter<"TicketEventLog"> | string
    from?: StringNullableFilter<"TicketEventLog"> | string | null
    to?: StringNullableFilter<"TicketEventLog"> | string | null
    meta?: JsonNullableFilter<"TicketEventLog">
    createdAt?: DateTimeFilter<"TicketEventLog"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }

  export type TicketEventLogOrderByWithRelationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    from?: SortOrderInput | SortOrder
    to?: SortOrderInput | SortOrder
    meta?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    ticket?: TicketOrderByWithRelationInput
  }

  export type TicketEventLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketEventLogWhereInput | TicketEventLogWhereInput[]
    OR?: TicketEventLogWhereInput[]
    NOT?: TicketEventLogWhereInput | TicketEventLogWhereInput[]
    ticketId?: StringFilter<"TicketEventLog"> | string
    actorId?: StringFilter<"TicketEventLog"> | string
    action?: StringFilter<"TicketEventLog"> | string
    from?: StringNullableFilter<"TicketEventLog"> | string | null
    to?: StringNullableFilter<"TicketEventLog"> | string | null
    meta?: JsonNullableFilter<"TicketEventLog">
    createdAt?: DateTimeFilter<"TicketEventLog"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }, "id">

  export type TicketEventLogOrderByWithAggregationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    from?: SortOrderInput | SortOrder
    to?: SortOrderInput | SortOrder
    meta?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TicketEventLogCountOrderByAggregateInput
    _max?: TicketEventLogMaxOrderByAggregateInput
    _min?: TicketEventLogMinOrderByAggregateInput
  }

  export type TicketEventLogScalarWhereWithAggregatesInput = {
    AND?: TicketEventLogScalarWhereWithAggregatesInput | TicketEventLogScalarWhereWithAggregatesInput[]
    OR?: TicketEventLogScalarWhereWithAggregatesInput[]
    NOT?: TicketEventLogScalarWhereWithAggregatesInput | TicketEventLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TicketEventLog"> | string
    ticketId?: StringWithAggregatesFilter<"TicketEventLog"> | string
    actorId?: StringWithAggregatesFilter<"TicketEventLog"> | string
    action?: StringWithAggregatesFilter<"TicketEventLog"> | string
    from?: StringNullableWithAggregatesFilter<"TicketEventLog"> | string | null
    to?: StringNullableWithAggregatesFilter<"TicketEventLog"> | string | null
    meta?: JsonNullableWithAggregatesFilter<"TicketEventLog">
    createdAt?: DateTimeWithAggregatesFilter<"TicketEventLog"> | Date | string
  }

  export type TicketSequenceWhereInput = {
    AND?: TicketSequenceWhereInput | TicketSequenceWhereInput[]
    OR?: TicketSequenceWhereInput[]
    NOT?: TicketSequenceWhereInput | TicketSequenceWhereInput[]
    id?: StringFilter<"TicketSequence"> | string
    yearMonth?: StringFilter<"TicketSequence"> | string
    counter?: IntFilter<"TicketSequence"> | number
    createdAt?: DateTimeFilter<"TicketSequence"> | Date | string
    updatedAt?: DateTimeNullableFilter<"TicketSequence"> | Date | string | null
  }

  export type TicketSequenceOrderByWithRelationInput = {
    id?: SortOrder
    yearMonth?: SortOrder
    counter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type TicketSequenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    yearMonth?: string
    AND?: TicketSequenceWhereInput | TicketSequenceWhereInput[]
    OR?: TicketSequenceWhereInput[]
    NOT?: TicketSequenceWhereInput | TicketSequenceWhereInput[]
    counter?: IntFilter<"TicketSequence"> | number
    createdAt?: DateTimeFilter<"TicketSequence"> | Date | string
    updatedAt?: DateTimeNullableFilter<"TicketSequence"> | Date | string | null
  }, "id" | "yearMonth">

  export type TicketSequenceOrderByWithAggregationInput = {
    id?: SortOrder
    yearMonth?: SortOrder
    counter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: TicketSequenceCountOrderByAggregateInput
    _avg?: TicketSequenceAvgOrderByAggregateInput
    _max?: TicketSequenceMaxOrderByAggregateInput
    _min?: TicketSequenceMinOrderByAggregateInput
    _sum?: TicketSequenceSumOrderByAggregateInput
  }

  export type TicketSequenceScalarWhereWithAggregatesInput = {
    AND?: TicketSequenceScalarWhereWithAggregatesInput | TicketSequenceScalarWhereWithAggregatesInput[]
    OR?: TicketSequenceScalarWhereWithAggregatesInput[]
    NOT?: TicketSequenceScalarWhereWithAggregatesInput | TicketSequenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TicketSequence"> | string
    yearMonth?: StringWithAggregatesFilter<"TicketSequence"> | string
    counter?: IntWithAggregatesFilter<"TicketSequence"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TicketSequence"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"TicketSequence"> | Date | string | null
  }

  export type ApiKeyWhereInput = {
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    name?: StringNullableFilter<"ApiKey"> | string | null
    keyHash?: StringFilter<"ApiKey"> | string
    companyId?: StringFilter<"ApiKey"> | string
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type ApiKeyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    keyHash?: SortOrder
    companyId?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    revokedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type ApiKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    name?: StringNullableFilter<"ApiKey"> | string | null
    keyHash?: StringFilter<"ApiKey"> | string
    companyId?: StringFilter<"ApiKey"> | string
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id">

  export type ApiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    keyHash?: SortOrder
    companyId?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    revokedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ApiKeyCountOrderByAggregateInput
    _max?: ApiKeyMaxOrderByAggregateInput
    _min?: ApiKeyMinOrderByAggregateInput
  }

  export type ApiKeyScalarWhereWithAggregatesInput = {
    AND?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    OR?: ApiKeyScalarWhereWithAggregatesInput[]
    NOT?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiKey"> | string
    name?: StringNullableWithAggregatesFilter<"ApiKey"> | string | null
    keyHash?: StringWithAggregatesFilter<"ApiKey"> | string
    companyId?: StringWithAggregatesFilter<"ApiKey"> | string
    lastUsedAt?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
    revokedAt?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
  }

  export type ImportJobWhereInput = {
    AND?: ImportJobWhereInput | ImportJobWhereInput[]
    OR?: ImportJobWhereInput[]
    NOT?: ImportJobWhereInput | ImportJobWhereInput[]
    id?: StringFilter<"ImportJob"> | string
    userId?: StringNullableFilter<"ImportJob"> | string | null
    companyId?: StringNullableFilter<"ImportJob"> | string | null
    entity?: StringFilter<"ImportJob"> | string
    mapping?: JsonFilter<"ImportJob">
    source?: StringNullableFilter<"ImportJob"> | string | null
    success?: BoolNullableFilter<"ImportJob"> | boolean | null
    stats?: JsonNullableFilter<"ImportJob">
    processedAt?: DateTimeNullableFilter<"ImportJob"> | Date | string | null
    createdAt?: DateTimeFilter<"ImportJob"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
  }

  export type ImportJobOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    companyId?: SortOrderInput | SortOrder
    entity?: SortOrder
    mapping?: SortOrder
    source?: SortOrderInput | SortOrder
    success?: SortOrderInput | SortOrder
    stats?: SortOrderInput | SortOrder
    processedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    company?: CompanyOrderByWithRelationInput
  }

  export type ImportJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImportJobWhereInput | ImportJobWhereInput[]
    OR?: ImportJobWhereInput[]
    NOT?: ImportJobWhereInput | ImportJobWhereInput[]
    userId?: StringNullableFilter<"ImportJob"> | string | null
    companyId?: StringNullableFilter<"ImportJob"> | string | null
    entity?: StringFilter<"ImportJob"> | string
    mapping?: JsonFilter<"ImportJob">
    source?: StringNullableFilter<"ImportJob"> | string | null
    success?: BoolNullableFilter<"ImportJob"> | boolean | null
    stats?: JsonNullableFilter<"ImportJob">
    processedAt?: DateTimeNullableFilter<"ImportJob"> | Date | string | null
    createdAt?: DateTimeFilter<"ImportJob"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
  }, "id">

  export type ImportJobOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    companyId?: SortOrderInput | SortOrder
    entity?: SortOrder
    mapping?: SortOrder
    source?: SortOrderInput | SortOrder
    success?: SortOrderInput | SortOrder
    stats?: SortOrderInput | SortOrder
    processedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ImportJobCountOrderByAggregateInput
    _max?: ImportJobMaxOrderByAggregateInput
    _min?: ImportJobMinOrderByAggregateInput
  }

  export type ImportJobScalarWhereWithAggregatesInput = {
    AND?: ImportJobScalarWhereWithAggregatesInput | ImportJobScalarWhereWithAggregatesInput[]
    OR?: ImportJobScalarWhereWithAggregatesInput[]
    NOT?: ImportJobScalarWhereWithAggregatesInput | ImportJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ImportJob"> | string
    userId?: StringNullableWithAggregatesFilter<"ImportJob"> | string | null
    companyId?: StringNullableWithAggregatesFilter<"ImportJob"> | string | null
    entity?: StringWithAggregatesFilter<"ImportJob"> | string
    mapping?: JsonWithAggregatesFilter<"ImportJob">
    source?: StringNullableWithAggregatesFilter<"ImportJob"> | string | null
    success?: BoolNullableWithAggregatesFilter<"ImportJob"> | boolean | null
    stats?: JsonNullableWithAggregatesFilter<"ImportJob">
    processedAt?: DateTimeNullableWithAggregatesFilter<"ImportJob"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ImportJob"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    password?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string | null
    company?: CompanyCreateNestedOneWithoutUsersInput
    importJobs?: ImportJobCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password?: string | null
    companyId?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string | null
    importJobs?: ImportJobUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: CompanyUpdateOneWithoutUsersNestedInput
    importJobs?: ImportJobUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    importJobs?: ImportJobUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    password?: string | null
    companyId?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OtpCreateInput = {
    id?: string
    email: string
    otpHash: string
    used?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OtpUncheckedCreateInput = {
    id?: string
    email: string
    otpHash: string
    used?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OtpUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otpHash?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otpHash?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCreateManyInput = {
    id?: string
    email: string
    otpHash: string
    used?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OtpUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otpHash?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otpHash?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateInput = {
    id?: string
    name: string
    vatNumber: string
    email?: string | null
    phone?: string | null
    country?: string | null
    city?: string | null
    postalCode?: string | null
    address1?: string | null
    address2?: string | null
    roles?: CompanyCreaterolesInput | $Enums.CompanyRole[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutCompanyInput
    deliveryPlants?: DeliveryPlantCreateNestedManyWithoutCompanyInput
    vehicles?: VehicleCreateNestedManyWithoutTransporterInput
    suppliedProducts?: ProductCreateNestedManyWithoutSupplierInput
    sentTickets?: TicketCreateNestedManyWithoutSupplierInput
    customerTickets?: TicketCreateNestedManyWithoutCustomerInput
    transporterTickets?: TicketCreateNestedManyWithoutTransporterInput
    apiKeys?: ApiKeyCreateNestedManyWithoutCompanyInput
    importJobs?: ImportJobCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    name: string
    vatNumber: string
    email?: string | null
    phone?: string | null
    country?: string | null
    city?: string | null
    postalCode?: string | null
    address1?: string | null
    address2?: string | null
    roles?: CompanyCreaterolesInput | $Enums.CompanyRole[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    deliveryPlants?: DeliveryPlantUncheckedCreateNestedManyWithoutCompanyInput
    vehicles?: VehicleUncheckedCreateNestedManyWithoutTransporterInput
    suppliedProducts?: ProductUncheckedCreateNestedManyWithoutSupplierInput
    sentTickets?: TicketUncheckedCreateNestedManyWithoutSupplierInput
    customerTickets?: TicketUncheckedCreateNestedManyWithoutCustomerInput
    transporterTickets?: TicketUncheckedCreateNestedManyWithoutTransporterInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutCompanyInput
    importJobs?: ImportJobUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: CompanyUpdaterolesInput | $Enums.CompanyRole[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutCompanyNestedInput
    deliveryPlants?: DeliveryPlantUpdateManyWithoutCompanyNestedInput
    vehicles?: VehicleUpdateManyWithoutTransporterNestedInput
    suppliedProducts?: ProductUpdateManyWithoutSupplierNestedInput
    sentTickets?: TicketUpdateManyWithoutSupplierNestedInput
    customerTickets?: TicketUpdateManyWithoutCustomerNestedInput
    transporterTickets?: TicketUpdateManyWithoutTransporterNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutCompanyNestedInput
    importJobs?: ImportJobUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: CompanyUpdaterolesInput | $Enums.CompanyRole[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    deliveryPlants?: DeliveryPlantUncheckedUpdateManyWithoutCompanyNestedInput
    vehicles?: VehicleUncheckedUpdateManyWithoutTransporterNestedInput
    suppliedProducts?: ProductUncheckedUpdateManyWithoutSupplierNestedInput
    sentTickets?: TicketUncheckedUpdateManyWithoutSupplierNestedInput
    customerTickets?: TicketUncheckedUpdateManyWithoutCustomerNestedInput
    transporterTickets?: TicketUncheckedUpdateManyWithoutTransporterNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutCompanyNestedInput
    importJobs?: ImportJobUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    name: string
    vatNumber: string
    email?: string | null
    phone?: string | null
    country?: string | null
    city?: string | null
    postalCode?: string | null
    address1?: string | null
    address2?: string | null
    roles?: CompanyCreaterolesInput | $Enums.CompanyRole[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: CompanyUpdaterolesInput | $Enums.CompanyRole[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: CompanyUpdaterolesInput | $Enums.CompanyRole[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DeliveryPlantCreateInput = {
    id?: string
    name: string
    country?: string | null
    city?: string | null
    postalCode?: string | null
    address1?: string | null
    address2?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    company: CompanyCreateNestedOneWithoutDeliveryPlantsInput
    tickets?: TicketCreateNestedManyWithoutDeliveryPlantInput
  }

  export type DeliveryPlantUncheckedCreateInput = {
    id?: string
    name: string
    country?: string | null
    city?: string | null
    postalCode?: string | null
    address1?: string | null
    address2?: string | null
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    tickets?: TicketUncheckedCreateNestedManyWithoutDeliveryPlantInput
  }

  export type DeliveryPlantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: CompanyUpdateOneRequiredWithoutDeliveryPlantsNestedInput
    tickets?: TicketUpdateManyWithoutDeliveryPlantNestedInput
  }

  export type DeliveryPlantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tickets?: TicketUncheckedUpdateManyWithoutDeliveryPlantNestedInput
  }

  export type DeliveryPlantCreateManyInput = {
    id?: string
    name: string
    country?: string | null
    city?: string | null
    postalCode?: string | null
    address1?: string | null
    address2?: string | null
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type DeliveryPlantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DeliveryPlantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehicleCreateInput = {
    id?: string
    plateNumber: string
    vehicleType?: string | null
    tareWeight?: number | null
    maxLoadKg?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    transporter: CompanyCreateNestedOneWithoutVehiclesInput
    tickets?: TicketCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: string
    plateNumber: string
    vehicleType?: string | null
    tareWeight?: number | null
    maxLoadKg?: number | null
    transporterId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    tickets?: TicketUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    tareWeight?: NullableIntFieldUpdateOperationsInput | number | null
    maxLoadKg?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transporter?: CompanyUpdateOneRequiredWithoutVehiclesNestedInput
    tickets?: TicketUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    tareWeight?: NullableIntFieldUpdateOperationsInput | number | null
    maxLoadKg?: NullableIntFieldUpdateOperationsInput | number | null
    transporterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tickets?: TicketUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: string
    plateNumber: string
    vehicleType?: string | null
    tareWeight?: number | null
    maxLoadKg?: number | null
    transporterId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type VehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    tareWeight?: NullableIntFieldUpdateOperationsInput | number | null
    maxLoadKg?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    tareWeight?: NullableIntFieldUpdateOperationsInput | number | null
    maxLoadKg?: NullableIntFieldUpdateOperationsInput | number | null
    transporterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCreateInput = {
    id?: string
    code: string
    description: string
    unit?: string | null
    density?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    supplier?: CompanyCreateNestedOneWithoutSuppliedProductsInput
    tickets?: TicketCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    code: string
    description: string
    unit?: string | null
    density?: number | null
    supplierId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    tickets?: TicketUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    density?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    supplier?: CompanyUpdateOneWithoutSuppliedProductsNestedInput
    tickets?: TicketUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    density?: NullableFloatFieldUpdateOperationsInput | number | null
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tickets?: TicketUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    code: string
    description: string
    unit?: string | null
    density?: number | null
    supplierId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    density?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    density?: NullableFloatFieldUpdateOperationsInput | number | null
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketCreateInput = {
    id?: string
    number: string
    externalCode?: string | null
    direction: $Enums.TicketDirection
    status?: $Enums.TicketStatus
    grossWeight?: number | null
    tareWeight?: number | null
    netWeight?: number | null
    unit?: string | null
    notes?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: Date | string | null
    shareToken?: string | null
    sharedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    supplier: CompanyCreateNestedOneWithoutSentTicketsInput
    customer: CompanyCreateNestedOneWithoutCustomerTicketsInput
    transporter: CompanyCreateNestedOneWithoutTransporterTicketsInput
    vehicle: VehicleCreateNestedOneWithoutTicketsInput
    deliveryPlant: DeliveryPlantCreateNestedOneWithoutTicketsInput
    product: ProductCreateNestedOneWithoutTicketsInput
    documents?: TicketDocumentCreateNestedManyWithoutTicketInput
    events?: TicketEventLogCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    id?: string
    number: string
    supplierId: string
    customerId: string
    transporterId: string
    vehicleId: string
    deliveryPlantId: string
    productId: string
    externalCode?: string | null
    direction: $Enums.TicketDirection
    status?: $Enums.TicketStatus
    grossWeight?: number | null
    tareWeight?: number | null
    netWeight?: number | null
    unit?: string | null
    notes?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: Date | string | null
    shareToken?: string | null
    sharedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    documents?: TicketDocumentUncheckedCreateNestedManyWithoutTicketInput
    events?: TicketEventLogUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: EnumTicketDirectionFieldUpdateOperationsInput | $Enums.TicketDirection
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    tareWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    netWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    sharedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    supplier?: CompanyUpdateOneRequiredWithoutSentTicketsNestedInput
    customer?: CompanyUpdateOneRequiredWithoutCustomerTicketsNestedInput
    transporter?: CompanyUpdateOneRequiredWithoutTransporterTicketsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutTicketsNestedInput
    deliveryPlant?: DeliveryPlantUpdateOneRequiredWithoutTicketsNestedInput
    product?: ProductUpdateOneRequiredWithoutTicketsNestedInput
    documents?: TicketDocumentUpdateManyWithoutTicketNestedInput
    events?: TicketEventLogUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    transporterId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    deliveryPlantId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: EnumTicketDirectionFieldUpdateOperationsInput | $Enums.TicketDirection
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    tareWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    netWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    sharedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: TicketDocumentUncheckedUpdateManyWithoutTicketNestedInput
    events?: TicketEventLogUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    id?: string
    number: string
    supplierId: string
    customerId: string
    transporterId: string
    vehicleId: string
    deliveryPlantId: string
    productId: string
    externalCode?: string | null
    direction: $Enums.TicketDirection
    status?: $Enums.TicketStatus
    grossWeight?: number | null
    tareWeight?: number | null
    netWeight?: number | null
    unit?: string | null
    notes?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: Date | string | null
    shareToken?: string | null
    sharedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: EnumTicketDirectionFieldUpdateOperationsInput | $Enums.TicketDirection
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    tareWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    netWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    sharedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    transporterId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    deliveryPlantId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: EnumTicketDirectionFieldUpdateOperationsInput | $Enums.TicketDirection
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    tareWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    netWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    sharedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketDocumentCreateInput = {
    id?: string
    type: $Enums.DocType
    path: string
    createdAt?: Date | string
    ticket: TicketCreateNestedOneWithoutDocumentsInput
  }

  export type TicketDocumentUncheckedCreateInput = {
    id?: string
    ticketId: string
    type: $Enums.DocType
    path: string
    createdAt?: Date | string
  }

  export type TicketDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocTypeFieldUpdateOperationsInput | $Enums.DocType
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type TicketDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    type?: EnumDocTypeFieldUpdateOperationsInput | $Enums.DocType
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketDocumentCreateManyInput = {
    id?: string
    ticketId: string
    type: $Enums.DocType
    path: string
    createdAt?: Date | string
  }

  export type TicketDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocTypeFieldUpdateOperationsInput | $Enums.DocType
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    type?: EnumDocTypeFieldUpdateOperationsInput | $Enums.DocType
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketEventLogCreateInput = {
    id?: string
    actorId: string
    action: string
    from?: string | null
    to?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    ticket: TicketCreateNestedOneWithoutEventsInput
  }

  export type TicketEventLogUncheckedCreateInput = {
    id?: string
    ticketId: string
    actorId: string
    action: string
    from?: string | null
    to?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TicketEventLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    from?: NullableStringFieldUpdateOperationsInput | string | null
    to?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutEventsNestedInput
  }

  export type TicketEventLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    from?: NullableStringFieldUpdateOperationsInput | string | null
    to?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketEventLogCreateManyInput = {
    id?: string
    ticketId: string
    actorId: string
    action: string
    from?: string | null
    to?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TicketEventLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    from?: NullableStringFieldUpdateOperationsInput | string | null
    to?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketEventLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    from?: NullableStringFieldUpdateOperationsInput | string | null
    to?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketSequenceCreateInput = {
    id?: string
    yearMonth: string
    counter?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TicketSequenceUncheckedCreateInput = {
    id?: string
    yearMonth: string
    counter?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TicketSequenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    yearMonth?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketSequenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    yearMonth?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketSequenceCreateManyInput = {
    id?: string
    yearMonth: string
    counter?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TicketSequenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    yearMonth?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketSequenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    yearMonth?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApiKeyCreateInput = {
    id?: string
    name?: string | null
    keyHash: string
    lastUsedAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutApiKeysInput
  }

  export type ApiKeyUncheckedCreateInput = {
    id?: string
    name?: string | null
    keyHash: string
    companyId: string
    lastUsedAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ApiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    keyHash?: StringFieldUpdateOperationsInput | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutApiKeysNestedInput
  }

  export type ApiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    keyHash?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateManyInput = {
    id?: string
    name?: string | null
    keyHash: string
    companyId: string
    lastUsedAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ApiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    keyHash?: StringFieldUpdateOperationsInput | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    keyHash?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImportJobCreateInput = {
    id?: string
    entity: string
    mapping: JsonNullValueInput | InputJsonValue
    source?: string | null
    success?: boolean | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutImportJobsInput
    company?: CompanyCreateNestedOneWithoutImportJobsInput
  }

  export type ImportJobUncheckedCreateInput = {
    id?: string
    userId?: string | null
    companyId?: string | null
    entity: string
    mapping: JsonNullValueInput | InputJsonValue
    source?: string | null
    success?: boolean | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ImportJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    mapping?: JsonNullValueInput | InputJsonValue
    source?: NullableStringFieldUpdateOperationsInput | string | null
    success?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutImportJobsNestedInput
    company?: CompanyUpdateOneWithoutImportJobsNestedInput
  }

  export type ImportJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    entity?: StringFieldUpdateOperationsInput | string
    mapping?: JsonNullValueInput | InputJsonValue
    source?: NullableStringFieldUpdateOperationsInput | string | null
    success?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImportJobCreateManyInput = {
    id?: string
    userId?: string | null
    companyId?: string | null
    entity: string
    mapping: JsonNullValueInput | InputJsonValue
    source?: string | null
    success?: boolean | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ImportJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    mapping?: JsonNullValueInput | InputJsonValue
    source?: NullableStringFieldUpdateOperationsInput | string | null
    success?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImportJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    entity?: StringFieldUpdateOperationsInput | string
    mapping?: JsonNullValueInput | InputJsonValue
    source?: NullableStringFieldUpdateOperationsInput | string | null
    success?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CompanyNullableScalarRelationFilter = {
    is?: CompanyWhereInput | null
    isNot?: CompanyWhereInput | null
  }

  export type ImportJobListRelationFilter = {
    every?: ImportJobWhereInput
    some?: ImportJobWhereInput
    none?: ImportJobWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ImportJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    companyId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    companyId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    companyId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type OtpEmailOtpHashCompoundUniqueInput = {
    email: string
    otpHash: string
  }

  export type OtpCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otpHash?: SortOrder
    used?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otpHash?: SortOrder
    used?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otpHash?: SortOrder
    used?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumCompanyRoleNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanyRole[] | ListEnumCompanyRoleFieldRefInput<$PrismaModel> | null
    has?: $Enums.CompanyRole | EnumCompanyRoleFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.CompanyRole[] | ListEnumCompanyRoleFieldRefInput<$PrismaModel>
    hasSome?: $Enums.CompanyRole[] | ListEnumCompanyRoleFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type DeliveryPlantListRelationFilter = {
    every?: DeliveryPlantWhereInput
    some?: DeliveryPlantWhereInput
    none?: DeliveryPlantWhereInput
  }

  export type VehicleListRelationFilter = {
    every?: VehicleWhereInput
    some?: VehicleWhereInput
    none?: VehicleWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type ApiKeyListRelationFilter = {
    every?: ApiKeyWhereInput
    some?: ApiKeyWhereInput
    none?: ApiKeyWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeliveryPlantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    vatNumber?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    roles?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    vatNumber?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    vatNumber?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type DeliveryPlantCompanyIdNameCompoundUniqueInput = {
    companyId: string
    name: string
  }

  export type DeliveryPlantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeliveryPlantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeliveryPlantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    vehicleType?: SortOrder
    tareWeight?: SortOrder
    maxLoadKg?: SortOrder
    transporterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    tareWeight?: SortOrder
    maxLoadKg?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    vehicleType?: SortOrder
    tareWeight?: SortOrder
    maxLoadKg?: SortOrder
    transporterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    vehicleType?: SortOrder
    tareWeight?: SortOrder
    maxLoadKg?: SortOrder
    transporterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    tareWeight?: SortOrder
    maxLoadKg?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    unit?: SortOrder
    density?: SortOrder
    supplierId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    density?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    unit?: SortOrder
    density?: SortOrder
    supplierId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    unit?: SortOrder
    density?: SortOrder
    supplierId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    density?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumTicketDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketDirection | EnumTicketDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.TicketDirection[] | ListEnumTicketDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketDirection[] | ListEnumTicketDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketDirectionFilter<$PrismaModel> | $Enums.TicketDirection
  }

  export type EnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type VehicleScalarRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type DeliveryPlantScalarRelationFilter = {
    is?: DeliveryPlantWhereInput
    isNot?: DeliveryPlantWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type TicketDocumentListRelationFilter = {
    every?: TicketDocumentWhereInput
    some?: TicketDocumentWhereInput
    none?: TicketDocumentWhereInput
  }

  export type TicketEventLogListRelationFilter = {
    every?: TicketEventLogWhereInput
    some?: TicketEventLogWhereInput
    none?: TicketEventLogWhereInput
  }

  export type TicketDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketEventLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    supplierId?: SortOrder
    customerId?: SortOrder
    transporterId?: SortOrder
    vehicleId?: SortOrder
    deliveryPlantId?: SortOrder
    productId?: SortOrder
    externalCode?: SortOrder
    direction?: SortOrder
    status?: SortOrder
    grossWeight?: SortOrder
    tareWeight?: SortOrder
    netWeight?: SortOrder
    unit?: SortOrder
    notes?: SortOrder
    meta?: SortOrder
    weighedAt?: SortOrder
    shareToken?: SortOrder
    sharedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    grossWeight?: SortOrder
    tareWeight?: SortOrder
    netWeight?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    supplierId?: SortOrder
    customerId?: SortOrder
    transporterId?: SortOrder
    vehicleId?: SortOrder
    deliveryPlantId?: SortOrder
    productId?: SortOrder
    externalCode?: SortOrder
    direction?: SortOrder
    status?: SortOrder
    grossWeight?: SortOrder
    tareWeight?: SortOrder
    netWeight?: SortOrder
    unit?: SortOrder
    notes?: SortOrder
    weighedAt?: SortOrder
    shareToken?: SortOrder
    sharedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    supplierId?: SortOrder
    customerId?: SortOrder
    transporterId?: SortOrder
    vehicleId?: SortOrder
    deliveryPlantId?: SortOrder
    productId?: SortOrder
    externalCode?: SortOrder
    direction?: SortOrder
    status?: SortOrder
    grossWeight?: SortOrder
    tareWeight?: SortOrder
    netWeight?: SortOrder
    unit?: SortOrder
    notes?: SortOrder
    weighedAt?: SortOrder
    shareToken?: SortOrder
    sharedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    grossWeight?: SortOrder
    tareWeight?: SortOrder
    netWeight?: SortOrder
  }

  export type EnumTicketDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketDirection | EnumTicketDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.TicketDirection[] | ListEnumTicketDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketDirection[] | ListEnumTicketDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketDirectionWithAggregatesFilter<$PrismaModel> | $Enums.TicketDirection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketDirectionFilter<$PrismaModel>
    _max?: NestedEnumTicketDirectionFilter<$PrismaModel>
  }

  export type EnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumDocTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocType | EnumDocTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocTypeFilter<$PrismaModel> | $Enums.DocType
  }

  export type TicketScalarRelationFilter = {
    is?: TicketWhereInput
    isNot?: TicketWhereInput
  }

  export type TicketDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    type?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    type?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    type?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumDocTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocType | EnumDocTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocTypeFilter<$PrismaModel>
    _max?: NestedEnumDocTypeFilter<$PrismaModel>
  }

  export type TicketEventLogCountOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    from?: SortOrder
    to?: SortOrder
    meta?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketEventLogMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    from?: SortOrder
    to?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketEventLogMinOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    from?: SortOrder
    to?: SortOrder
    createdAt?: SortOrder
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

  export type TicketSequenceCountOrderByAggregateInput = {
    id?: SortOrder
    yearMonth?: SortOrder
    counter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketSequenceAvgOrderByAggregateInput = {
    counter?: SortOrder
  }

  export type TicketSequenceMaxOrderByAggregateInput = {
    id?: SortOrder
    yearMonth?: SortOrder
    counter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketSequenceMinOrderByAggregateInput = {
    id?: SortOrder
    yearMonth?: SortOrder
    counter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketSequenceSumOrderByAggregateInput = {
    counter?: SortOrder
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

  export type ApiKeyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    companyId?: SortOrder
    lastUsedAt?: SortOrder
    revokedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    companyId?: SortOrder
    lastUsedAt?: SortOrder
    revokedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    companyId?: SortOrder
    lastUsedAt?: SortOrder
    revokedAt?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ImportJobCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyId?: SortOrder
    entity?: SortOrder
    mapping?: SortOrder
    source?: SortOrder
    success?: SortOrder
    stats?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ImportJobMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyId?: SortOrder
    entity?: SortOrder
    source?: SortOrder
    success?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ImportJobMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyId?: SortOrder
    entity?: SortOrder
    source?: SortOrder
    success?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type CompanyCreateNestedOneWithoutUsersInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    connect?: CompanyWhereUniqueInput
  }

  export type ImportJobCreateNestedManyWithoutUserInput = {
    create?: XOR<ImportJobCreateWithoutUserInput, ImportJobUncheckedCreateWithoutUserInput> | ImportJobCreateWithoutUserInput[] | ImportJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ImportJobCreateOrConnectWithoutUserInput | ImportJobCreateOrConnectWithoutUserInput[]
    createMany?: ImportJobCreateManyUserInputEnvelope
    connect?: ImportJobWhereUniqueInput | ImportJobWhereUniqueInput[]
  }

  export type ImportJobUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ImportJobCreateWithoutUserInput, ImportJobUncheckedCreateWithoutUserInput> | ImportJobCreateWithoutUserInput[] | ImportJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ImportJobCreateOrConnectWithoutUserInput | ImportJobCreateOrConnectWithoutUserInput[]
    createMany?: ImportJobCreateManyUserInputEnvelope
    connect?: ImportJobWhereUniqueInput | ImportJobWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CompanyUpdateOneWithoutUsersNestedInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    upsert?: CompanyUpsertWithoutUsersInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutUsersInput, CompanyUpdateWithoutUsersInput>, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type ImportJobUpdateManyWithoutUserNestedInput = {
    create?: XOR<ImportJobCreateWithoutUserInput, ImportJobUncheckedCreateWithoutUserInput> | ImportJobCreateWithoutUserInput[] | ImportJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ImportJobCreateOrConnectWithoutUserInput | ImportJobCreateOrConnectWithoutUserInput[]
    upsert?: ImportJobUpsertWithWhereUniqueWithoutUserInput | ImportJobUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ImportJobCreateManyUserInputEnvelope
    set?: ImportJobWhereUniqueInput | ImportJobWhereUniqueInput[]
    disconnect?: ImportJobWhereUniqueInput | ImportJobWhereUniqueInput[]
    delete?: ImportJobWhereUniqueInput | ImportJobWhereUniqueInput[]
    connect?: ImportJobWhereUniqueInput | ImportJobWhereUniqueInput[]
    update?: ImportJobUpdateWithWhereUniqueWithoutUserInput | ImportJobUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ImportJobUpdateManyWithWhereWithoutUserInput | ImportJobUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ImportJobScalarWhereInput | ImportJobScalarWhereInput[]
  }

  export type ImportJobUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ImportJobCreateWithoutUserInput, ImportJobUncheckedCreateWithoutUserInput> | ImportJobCreateWithoutUserInput[] | ImportJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ImportJobCreateOrConnectWithoutUserInput | ImportJobCreateOrConnectWithoutUserInput[]
    upsert?: ImportJobUpsertWithWhereUniqueWithoutUserInput | ImportJobUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ImportJobCreateManyUserInputEnvelope
    set?: ImportJobWhereUniqueInput | ImportJobWhereUniqueInput[]
    disconnect?: ImportJobWhereUniqueInput | ImportJobWhereUniqueInput[]
    delete?: ImportJobWhereUniqueInput | ImportJobWhereUniqueInput[]
    connect?: ImportJobWhereUniqueInput | ImportJobWhereUniqueInput[]
    update?: ImportJobUpdateWithWhereUniqueWithoutUserInput | ImportJobUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ImportJobUpdateManyWithWhereWithoutUserInput | ImportJobUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ImportJobScalarWhereInput | ImportJobScalarWhereInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CompanyCreaterolesInput = {
    set: $Enums.CompanyRole[]
  }

  export type UserCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DeliveryPlantCreateNestedManyWithoutCompanyInput = {
    create?: XOR<DeliveryPlantCreateWithoutCompanyInput, DeliveryPlantUncheckedCreateWithoutCompanyInput> | DeliveryPlantCreateWithoutCompanyInput[] | DeliveryPlantUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: DeliveryPlantCreateOrConnectWithoutCompanyInput | DeliveryPlantCreateOrConnectWithoutCompanyInput[]
    createMany?: DeliveryPlantCreateManyCompanyInputEnvelope
    connect?: DeliveryPlantWhereUniqueInput | DeliveryPlantWhereUniqueInput[]
  }

  export type VehicleCreateNestedManyWithoutTransporterInput = {
    create?: XOR<VehicleCreateWithoutTransporterInput, VehicleUncheckedCreateWithoutTransporterInput> | VehicleCreateWithoutTransporterInput[] | VehicleUncheckedCreateWithoutTransporterInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutTransporterInput | VehicleCreateOrConnectWithoutTransporterInput[]
    createMany?: VehicleCreateManyTransporterInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutSupplierInput = {
    create?: XOR<ProductCreateWithoutSupplierInput, ProductUncheckedCreateWithoutSupplierInput> | ProductCreateWithoutSupplierInput[] | ProductUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSupplierInput | ProductCreateOrConnectWithoutSupplierInput[]
    createMany?: ProductCreateManySupplierInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutSupplierInput = {
    create?: XOR<TicketCreateWithoutSupplierInput, TicketUncheckedCreateWithoutSupplierInput> | TicketCreateWithoutSupplierInput[] | TicketUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutSupplierInput | TicketCreateOrConnectWithoutSupplierInput[]
    createMany?: TicketCreateManySupplierInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutCustomerInput = {
    create?: XOR<TicketCreateWithoutCustomerInput, TicketUncheckedCreateWithoutCustomerInput> | TicketCreateWithoutCustomerInput[] | TicketUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCustomerInput | TicketCreateOrConnectWithoutCustomerInput[]
    createMany?: TicketCreateManyCustomerInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutTransporterInput = {
    create?: XOR<TicketCreateWithoutTransporterInput, TicketUncheckedCreateWithoutTransporterInput> | TicketCreateWithoutTransporterInput[] | TicketUncheckedCreateWithoutTransporterInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTransporterInput | TicketCreateOrConnectWithoutTransporterInput[]
    createMany?: TicketCreateManyTransporterInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type ApiKeyCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ApiKeyCreateWithoutCompanyInput, ApiKeyUncheckedCreateWithoutCompanyInput> | ApiKeyCreateWithoutCompanyInput[] | ApiKeyUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutCompanyInput | ApiKeyCreateOrConnectWithoutCompanyInput[]
    createMany?: ApiKeyCreateManyCompanyInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type ImportJobCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ImportJobCreateWithoutCompanyInput, ImportJobUncheckedCreateWithoutCompanyInput> | ImportJobCreateWithoutCompanyInput[] | ImportJobUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ImportJobCreateOrConnectWithoutCompanyInput | ImportJobCreateOrConnectWithoutCompanyInput[]
    createMany?: ImportJobCreateManyCompanyInputEnvelope
    connect?: ImportJobWhereUniqueInput | ImportJobWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DeliveryPlantUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<DeliveryPlantCreateWithoutCompanyInput, DeliveryPlantUncheckedCreateWithoutCompanyInput> | DeliveryPlantCreateWithoutCompanyInput[] | DeliveryPlantUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: DeliveryPlantCreateOrConnectWithoutCompanyInput | DeliveryPlantCreateOrConnectWithoutCompanyInput[]
    createMany?: DeliveryPlantCreateManyCompanyInputEnvelope
    connect?: DeliveryPlantWhereUniqueInput | DeliveryPlantWhereUniqueInput[]
  }

  export type VehicleUncheckedCreateNestedManyWithoutTransporterInput = {
    create?: XOR<VehicleCreateWithoutTransporterInput, VehicleUncheckedCreateWithoutTransporterInput> | VehicleCreateWithoutTransporterInput[] | VehicleUncheckedCreateWithoutTransporterInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutTransporterInput | VehicleCreateOrConnectWithoutTransporterInput[]
    createMany?: VehicleCreateManyTransporterInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<ProductCreateWithoutSupplierInput, ProductUncheckedCreateWithoutSupplierInput> | ProductCreateWithoutSupplierInput[] | ProductUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSupplierInput | ProductCreateOrConnectWithoutSupplierInput[]
    createMany?: ProductCreateManySupplierInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<TicketCreateWithoutSupplierInput, TicketUncheckedCreateWithoutSupplierInput> | TicketCreateWithoutSupplierInput[] | TicketUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutSupplierInput | TicketCreateOrConnectWithoutSupplierInput[]
    createMany?: TicketCreateManySupplierInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<TicketCreateWithoutCustomerInput, TicketUncheckedCreateWithoutCustomerInput> | TicketCreateWithoutCustomerInput[] | TicketUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCustomerInput | TicketCreateOrConnectWithoutCustomerInput[]
    createMany?: TicketCreateManyCustomerInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutTransporterInput = {
    create?: XOR<TicketCreateWithoutTransporterInput, TicketUncheckedCreateWithoutTransporterInput> | TicketCreateWithoutTransporterInput[] | TicketUncheckedCreateWithoutTransporterInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTransporterInput | TicketCreateOrConnectWithoutTransporterInput[]
    createMany?: TicketCreateManyTransporterInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type ApiKeyUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ApiKeyCreateWithoutCompanyInput, ApiKeyUncheckedCreateWithoutCompanyInput> | ApiKeyCreateWithoutCompanyInput[] | ApiKeyUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutCompanyInput | ApiKeyCreateOrConnectWithoutCompanyInput[]
    createMany?: ApiKeyCreateManyCompanyInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type ImportJobUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ImportJobCreateWithoutCompanyInput, ImportJobUncheckedCreateWithoutCompanyInput> | ImportJobCreateWithoutCompanyInput[] | ImportJobUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ImportJobCreateOrConnectWithoutCompanyInput | ImportJobCreateOrConnectWithoutCompanyInput[]
    createMany?: ImportJobCreateManyCompanyInputEnvelope
    connect?: ImportJobWhereUniqueInput | ImportJobWhereUniqueInput[]
  }

  export type CompanyUpdaterolesInput = {
    set?: $Enums.CompanyRole[]
    push?: $Enums.CompanyRole | $Enums.CompanyRole[]
  }

  export type UserUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DeliveryPlantUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<DeliveryPlantCreateWithoutCompanyInput, DeliveryPlantUncheckedCreateWithoutCompanyInput> | DeliveryPlantCreateWithoutCompanyInput[] | DeliveryPlantUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: DeliveryPlantCreateOrConnectWithoutCompanyInput | DeliveryPlantCreateOrConnectWithoutCompanyInput[]
    upsert?: DeliveryPlantUpsertWithWhereUniqueWithoutCompanyInput | DeliveryPlantUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: DeliveryPlantCreateManyCompanyInputEnvelope
    set?: DeliveryPlantWhereUniqueInput | DeliveryPlantWhereUniqueInput[]
    disconnect?: DeliveryPlantWhereUniqueInput | DeliveryPlantWhereUniqueInput[]
    delete?: DeliveryPlantWhereUniqueInput | DeliveryPlantWhereUniqueInput[]
    connect?: DeliveryPlantWhereUniqueInput | DeliveryPlantWhereUniqueInput[]
    update?: DeliveryPlantUpdateWithWhereUniqueWithoutCompanyInput | DeliveryPlantUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: DeliveryPlantUpdateManyWithWhereWithoutCompanyInput | DeliveryPlantUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: DeliveryPlantScalarWhereInput | DeliveryPlantScalarWhereInput[]
  }

  export type VehicleUpdateManyWithoutTransporterNestedInput = {
    create?: XOR<VehicleCreateWithoutTransporterInput, VehicleUncheckedCreateWithoutTransporterInput> | VehicleCreateWithoutTransporterInput[] | VehicleUncheckedCreateWithoutTransporterInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutTransporterInput | VehicleCreateOrConnectWithoutTransporterInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutTransporterInput | VehicleUpsertWithWhereUniqueWithoutTransporterInput[]
    createMany?: VehicleCreateManyTransporterInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutTransporterInput | VehicleUpdateWithWhereUniqueWithoutTransporterInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutTransporterInput | VehicleUpdateManyWithWhereWithoutTransporterInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<ProductCreateWithoutSupplierInput, ProductUncheckedCreateWithoutSupplierInput> | ProductCreateWithoutSupplierInput[] | ProductUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSupplierInput | ProductCreateOrConnectWithoutSupplierInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutSupplierInput | ProductUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: ProductCreateManySupplierInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutSupplierInput | ProductUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutSupplierInput | ProductUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<TicketCreateWithoutSupplierInput, TicketUncheckedCreateWithoutSupplierInput> | TicketCreateWithoutSupplierInput[] | TicketUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutSupplierInput | TicketCreateOrConnectWithoutSupplierInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutSupplierInput | TicketUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: TicketCreateManySupplierInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutSupplierInput | TicketUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutSupplierInput | TicketUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<TicketCreateWithoutCustomerInput, TicketUncheckedCreateWithoutCustomerInput> | TicketCreateWithoutCustomerInput[] | TicketUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCustomerInput | TicketCreateOrConnectWithoutCustomerInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCustomerInput | TicketUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: TicketCreateManyCustomerInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCustomerInput | TicketUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCustomerInput | TicketUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutTransporterNestedInput = {
    create?: XOR<TicketCreateWithoutTransporterInput, TicketUncheckedCreateWithoutTransporterInput> | TicketCreateWithoutTransporterInput[] | TicketUncheckedCreateWithoutTransporterInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTransporterInput | TicketCreateOrConnectWithoutTransporterInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutTransporterInput | TicketUpsertWithWhereUniqueWithoutTransporterInput[]
    createMany?: TicketCreateManyTransporterInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutTransporterInput | TicketUpdateWithWhereUniqueWithoutTransporterInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutTransporterInput | TicketUpdateManyWithWhereWithoutTransporterInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type ApiKeyUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ApiKeyCreateWithoutCompanyInput, ApiKeyUncheckedCreateWithoutCompanyInput> | ApiKeyCreateWithoutCompanyInput[] | ApiKeyUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutCompanyInput | ApiKeyCreateOrConnectWithoutCompanyInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutCompanyInput | ApiKeyUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ApiKeyCreateManyCompanyInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutCompanyInput | ApiKeyUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutCompanyInput | ApiKeyUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type ImportJobUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ImportJobCreateWithoutCompanyInput, ImportJobUncheckedCreateWithoutCompanyInput> | ImportJobCreateWithoutCompanyInput[] | ImportJobUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ImportJobCreateOrConnectWithoutCompanyInput | ImportJobCreateOrConnectWithoutCompanyInput[]
    upsert?: ImportJobUpsertWithWhereUniqueWithoutCompanyInput | ImportJobUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ImportJobCreateManyCompanyInputEnvelope
    set?: ImportJobWhereUniqueInput | ImportJobWhereUniqueInput[]
    disconnect?: ImportJobWhereUniqueInput | ImportJobWhereUniqueInput[]
    delete?: ImportJobWhereUniqueInput | ImportJobWhereUniqueInput[]
    connect?: ImportJobWhereUniqueInput | ImportJobWhereUniqueInput[]
    update?: ImportJobUpdateWithWhereUniqueWithoutCompanyInput | ImportJobUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ImportJobUpdateManyWithWhereWithoutCompanyInput | ImportJobUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ImportJobScalarWhereInput | ImportJobScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DeliveryPlantUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<DeliveryPlantCreateWithoutCompanyInput, DeliveryPlantUncheckedCreateWithoutCompanyInput> | DeliveryPlantCreateWithoutCompanyInput[] | DeliveryPlantUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: DeliveryPlantCreateOrConnectWithoutCompanyInput | DeliveryPlantCreateOrConnectWithoutCompanyInput[]
    upsert?: DeliveryPlantUpsertWithWhereUniqueWithoutCompanyInput | DeliveryPlantUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: DeliveryPlantCreateManyCompanyInputEnvelope
    set?: DeliveryPlantWhereUniqueInput | DeliveryPlantWhereUniqueInput[]
    disconnect?: DeliveryPlantWhereUniqueInput | DeliveryPlantWhereUniqueInput[]
    delete?: DeliveryPlantWhereUniqueInput | DeliveryPlantWhereUniqueInput[]
    connect?: DeliveryPlantWhereUniqueInput | DeliveryPlantWhereUniqueInput[]
    update?: DeliveryPlantUpdateWithWhereUniqueWithoutCompanyInput | DeliveryPlantUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: DeliveryPlantUpdateManyWithWhereWithoutCompanyInput | DeliveryPlantUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: DeliveryPlantScalarWhereInput | DeliveryPlantScalarWhereInput[]
  }

  export type VehicleUncheckedUpdateManyWithoutTransporterNestedInput = {
    create?: XOR<VehicleCreateWithoutTransporterInput, VehicleUncheckedCreateWithoutTransporterInput> | VehicleCreateWithoutTransporterInput[] | VehicleUncheckedCreateWithoutTransporterInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutTransporterInput | VehicleCreateOrConnectWithoutTransporterInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutTransporterInput | VehicleUpsertWithWhereUniqueWithoutTransporterInput[]
    createMany?: VehicleCreateManyTransporterInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutTransporterInput | VehicleUpdateWithWhereUniqueWithoutTransporterInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutTransporterInput | VehicleUpdateManyWithWhereWithoutTransporterInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<ProductCreateWithoutSupplierInput, ProductUncheckedCreateWithoutSupplierInput> | ProductCreateWithoutSupplierInput[] | ProductUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSupplierInput | ProductCreateOrConnectWithoutSupplierInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutSupplierInput | ProductUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: ProductCreateManySupplierInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutSupplierInput | ProductUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutSupplierInput | ProductUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<TicketCreateWithoutSupplierInput, TicketUncheckedCreateWithoutSupplierInput> | TicketCreateWithoutSupplierInput[] | TicketUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutSupplierInput | TicketCreateOrConnectWithoutSupplierInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutSupplierInput | TicketUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: TicketCreateManySupplierInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutSupplierInput | TicketUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutSupplierInput | TicketUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<TicketCreateWithoutCustomerInput, TicketUncheckedCreateWithoutCustomerInput> | TicketCreateWithoutCustomerInput[] | TicketUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCustomerInput | TicketCreateOrConnectWithoutCustomerInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCustomerInput | TicketUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: TicketCreateManyCustomerInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCustomerInput | TicketUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCustomerInput | TicketUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutTransporterNestedInput = {
    create?: XOR<TicketCreateWithoutTransporterInput, TicketUncheckedCreateWithoutTransporterInput> | TicketCreateWithoutTransporterInput[] | TicketUncheckedCreateWithoutTransporterInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTransporterInput | TicketCreateOrConnectWithoutTransporterInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutTransporterInput | TicketUpsertWithWhereUniqueWithoutTransporterInput[]
    createMany?: TicketCreateManyTransporterInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutTransporterInput | TicketUpdateWithWhereUniqueWithoutTransporterInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutTransporterInput | TicketUpdateManyWithWhereWithoutTransporterInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type ApiKeyUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ApiKeyCreateWithoutCompanyInput, ApiKeyUncheckedCreateWithoutCompanyInput> | ApiKeyCreateWithoutCompanyInput[] | ApiKeyUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutCompanyInput | ApiKeyCreateOrConnectWithoutCompanyInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutCompanyInput | ApiKeyUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ApiKeyCreateManyCompanyInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutCompanyInput | ApiKeyUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutCompanyInput | ApiKeyUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type ImportJobUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ImportJobCreateWithoutCompanyInput, ImportJobUncheckedCreateWithoutCompanyInput> | ImportJobCreateWithoutCompanyInput[] | ImportJobUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ImportJobCreateOrConnectWithoutCompanyInput | ImportJobCreateOrConnectWithoutCompanyInput[]
    upsert?: ImportJobUpsertWithWhereUniqueWithoutCompanyInput | ImportJobUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ImportJobCreateManyCompanyInputEnvelope
    set?: ImportJobWhereUniqueInput | ImportJobWhereUniqueInput[]
    disconnect?: ImportJobWhereUniqueInput | ImportJobWhereUniqueInput[]
    delete?: ImportJobWhereUniqueInput | ImportJobWhereUniqueInput[]
    connect?: ImportJobWhereUniqueInput | ImportJobWhereUniqueInput[]
    update?: ImportJobUpdateWithWhereUniqueWithoutCompanyInput | ImportJobUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ImportJobUpdateManyWithWhereWithoutCompanyInput | ImportJobUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ImportJobScalarWhereInput | ImportJobScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutDeliveryPlantsInput = {
    create?: XOR<CompanyCreateWithoutDeliveryPlantsInput, CompanyUncheckedCreateWithoutDeliveryPlantsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutDeliveryPlantsInput
    connect?: CompanyWhereUniqueInput
  }

  export type TicketCreateNestedManyWithoutDeliveryPlantInput = {
    create?: XOR<TicketCreateWithoutDeliveryPlantInput, TicketUncheckedCreateWithoutDeliveryPlantInput> | TicketCreateWithoutDeliveryPlantInput[] | TicketUncheckedCreateWithoutDeliveryPlantInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutDeliveryPlantInput | TicketCreateOrConnectWithoutDeliveryPlantInput[]
    createMany?: TicketCreateManyDeliveryPlantInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutDeliveryPlantInput = {
    create?: XOR<TicketCreateWithoutDeliveryPlantInput, TicketUncheckedCreateWithoutDeliveryPlantInput> | TicketCreateWithoutDeliveryPlantInput[] | TicketUncheckedCreateWithoutDeliveryPlantInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutDeliveryPlantInput | TicketCreateOrConnectWithoutDeliveryPlantInput[]
    createMany?: TicketCreateManyDeliveryPlantInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type CompanyUpdateOneRequiredWithoutDeliveryPlantsNestedInput = {
    create?: XOR<CompanyCreateWithoutDeliveryPlantsInput, CompanyUncheckedCreateWithoutDeliveryPlantsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutDeliveryPlantsInput
    upsert?: CompanyUpsertWithoutDeliveryPlantsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutDeliveryPlantsInput, CompanyUpdateWithoutDeliveryPlantsInput>, CompanyUncheckedUpdateWithoutDeliveryPlantsInput>
  }

  export type TicketUpdateManyWithoutDeliveryPlantNestedInput = {
    create?: XOR<TicketCreateWithoutDeliveryPlantInput, TicketUncheckedCreateWithoutDeliveryPlantInput> | TicketCreateWithoutDeliveryPlantInput[] | TicketUncheckedCreateWithoutDeliveryPlantInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutDeliveryPlantInput | TicketCreateOrConnectWithoutDeliveryPlantInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutDeliveryPlantInput | TicketUpsertWithWhereUniqueWithoutDeliveryPlantInput[]
    createMany?: TicketCreateManyDeliveryPlantInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutDeliveryPlantInput | TicketUpdateWithWhereUniqueWithoutDeliveryPlantInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutDeliveryPlantInput | TicketUpdateManyWithWhereWithoutDeliveryPlantInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutDeliveryPlantNestedInput = {
    create?: XOR<TicketCreateWithoutDeliveryPlantInput, TicketUncheckedCreateWithoutDeliveryPlantInput> | TicketCreateWithoutDeliveryPlantInput[] | TicketUncheckedCreateWithoutDeliveryPlantInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutDeliveryPlantInput | TicketCreateOrConnectWithoutDeliveryPlantInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutDeliveryPlantInput | TicketUpsertWithWhereUniqueWithoutDeliveryPlantInput[]
    createMany?: TicketCreateManyDeliveryPlantInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutDeliveryPlantInput | TicketUpdateWithWhereUniqueWithoutDeliveryPlantInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutDeliveryPlantInput | TicketUpdateManyWithWhereWithoutDeliveryPlantInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutVehiclesInput = {
    create?: XOR<CompanyCreateWithoutVehiclesInput, CompanyUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutVehiclesInput
    connect?: CompanyWhereUniqueInput
  }

  export type TicketCreateNestedManyWithoutVehicleInput = {
    create?: XOR<TicketCreateWithoutVehicleInput, TicketUncheckedCreateWithoutVehicleInput> | TicketCreateWithoutVehicleInput[] | TicketUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutVehicleInput | TicketCreateOrConnectWithoutVehicleInput[]
    createMany?: TicketCreateManyVehicleInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<TicketCreateWithoutVehicleInput, TicketUncheckedCreateWithoutVehicleInput> | TicketCreateWithoutVehicleInput[] | TicketUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutVehicleInput | TicketCreateOrConnectWithoutVehicleInput[]
    createMany?: TicketCreateManyVehicleInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompanyUpdateOneRequiredWithoutVehiclesNestedInput = {
    create?: XOR<CompanyCreateWithoutVehiclesInput, CompanyUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutVehiclesInput
    upsert?: CompanyUpsertWithoutVehiclesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutVehiclesInput, CompanyUpdateWithoutVehiclesInput>, CompanyUncheckedUpdateWithoutVehiclesInput>
  }

  export type TicketUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<TicketCreateWithoutVehicleInput, TicketUncheckedCreateWithoutVehicleInput> | TicketCreateWithoutVehicleInput[] | TicketUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutVehicleInput | TicketCreateOrConnectWithoutVehicleInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutVehicleInput | TicketUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: TicketCreateManyVehicleInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutVehicleInput | TicketUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutVehicleInput | TicketUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<TicketCreateWithoutVehicleInput, TicketUncheckedCreateWithoutVehicleInput> | TicketCreateWithoutVehicleInput[] | TicketUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutVehicleInput | TicketCreateOrConnectWithoutVehicleInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutVehicleInput | TicketUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: TicketCreateManyVehicleInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutVehicleInput | TicketUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutVehicleInput | TicketUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutSuppliedProductsInput = {
    create?: XOR<CompanyCreateWithoutSuppliedProductsInput, CompanyUncheckedCreateWithoutSuppliedProductsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutSuppliedProductsInput
    connect?: CompanyWhereUniqueInput
  }

  export type TicketCreateNestedManyWithoutProductInput = {
    create?: XOR<TicketCreateWithoutProductInput, TicketUncheckedCreateWithoutProductInput> | TicketCreateWithoutProductInput[] | TicketUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutProductInput | TicketCreateOrConnectWithoutProductInput[]
    createMany?: TicketCreateManyProductInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<TicketCreateWithoutProductInput, TicketUncheckedCreateWithoutProductInput> | TicketCreateWithoutProductInput[] | TicketUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutProductInput | TicketCreateOrConnectWithoutProductInput[]
    createMany?: TicketCreateManyProductInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompanyUpdateOneWithoutSuppliedProductsNestedInput = {
    create?: XOR<CompanyCreateWithoutSuppliedProductsInput, CompanyUncheckedCreateWithoutSuppliedProductsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutSuppliedProductsInput
    upsert?: CompanyUpsertWithoutSuppliedProductsInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutSuppliedProductsInput, CompanyUpdateWithoutSuppliedProductsInput>, CompanyUncheckedUpdateWithoutSuppliedProductsInput>
  }

  export type TicketUpdateManyWithoutProductNestedInput = {
    create?: XOR<TicketCreateWithoutProductInput, TicketUncheckedCreateWithoutProductInput> | TicketCreateWithoutProductInput[] | TicketUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutProductInput | TicketCreateOrConnectWithoutProductInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutProductInput | TicketUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: TicketCreateManyProductInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutProductInput | TicketUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutProductInput | TicketUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<TicketCreateWithoutProductInput, TicketUncheckedCreateWithoutProductInput> | TicketCreateWithoutProductInput[] | TicketUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutProductInput | TicketCreateOrConnectWithoutProductInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutProductInput | TicketUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: TicketCreateManyProductInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutProductInput | TicketUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutProductInput | TicketUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutSentTicketsInput = {
    create?: XOR<CompanyCreateWithoutSentTicketsInput, CompanyUncheckedCreateWithoutSentTicketsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutSentTicketsInput
    connect?: CompanyWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutCustomerTicketsInput = {
    create?: XOR<CompanyCreateWithoutCustomerTicketsInput, CompanyUncheckedCreateWithoutCustomerTicketsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutCustomerTicketsInput
    connect?: CompanyWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutTransporterTicketsInput = {
    create?: XOR<CompanyCreateWithoutTransporterTicketsInput, CompanyUncheckedCreateWithoutTransporterTicketsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutTransporterTicketsInput
    connect?: CompanyWhereUniqueInput
  }

  export type VehicleCreateNestedOneWithoutTicketsInput = {
    create?: XOR<VehicleCreateWithoutTicketsInput, VehicleUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutTicketsInput
    connect?: VehicleWhereUniqueInput
  }

  export type DeliveryPlantCreateNestedOneWithoutTicketsInput = {
    create?: XOR<DeliveryPlantCreateWithoutTicketsInput, DeliveryPlantUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: DeliveryPlantCreateOrConnectWithoutTicketsInput
    connect?: DeliveryPlantWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutTicketsInput = {
    create?: XOR<ProductCreateWithoutTicketsInput, ProductUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutTicketsInput
    connect?: ProductWhereUniqueInput
  }

  export type TicketDocumentCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketDocumentCreateWithoutTicketInput, TicketDocumentUncheckedCreateWithoutTicketInput> | TicketDocumentCreateWithoutTicketInput[] | TicketDocumentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketDocumentCreateOrConnectWithoutTicketInput | TicketDocumentCreateOrConnectWithoutTicketInput[]
    createMany?: TicketDocumentCreateManyTicketInputEnvelope
    connect?: TicketDocumentWhereUniqueInput | TicketDocumentWhereUniqueInput[]
  }

  export type TicketEventLogCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketEventLogCreateWithoutTicketInput, TicketEventLogUncheckedCreateWithoutTicketInput> | TicketEventLogCreateWithoutTicketInput[] | TicketEventLogUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketEventLogCreateOrConnectWithoutTicketInput | TicketEventLogCreateOrConnectWithoutTicketInput[]
    createMany?: TicketEventLogCreateManyTicketInputEnvelope
    connect?: TicketEventLogWhereUniqueInput | TicketEventLogWhereUniqueInput[]
  }

  export type TicketDocumentUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketDocumentCreateWithoutTicketInput, TicketDocumentUncheckedCreateWithoutTicketInput> | TicketDocumentCreateWithoutTicketInput[] | TicketDocumentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketDocumentCreateOrConnectWithoutTicketInput | TicketDocumentCreateOrConnectWithoutTicketInput[]
    createMany?: TicketDocumentCreateManyTicketInputEnvelope
    connect?: TicketDocumentWhereUniqueInput | TicketDocumentWhereUniqueInput[]
  }

  export type TicketEventLogUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketEventLogCreateWithoutTicketInput, TicketEventLogUncheckedCreateWithoutTicketInput> | TicketEventLogCreateWithoutTicketInput[] | TicketEventLogUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketEventLogCreateOrConnectWithoutTicketInput | TicketEventLogCreateOrConnectWithoutTicketInput[]
    createMany?: TicketEventLogCreateManyTicketInputEnvelope
    connect?: TicketEventLogWhereUniqueInput | TicketEventLogWhereUniqueInput[]
  }

  export type EnumTicketDirectionFieldUpdateOperationsInput = {
    set?: $Enums.TicketDirection
  }

  export type EnumTicketStatusFieldUpdateOperationsInput = {
    set?: $Enums.TicketStatus
  }

  export type CompanyUpdateOneRequiredWithoutSentTicketsNestedInput = {
    create?: XOR<CompanyCreateWithoutSentTicketsInput, CompanyUncheckedCreateWithoutSentTicketsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutSentTicketsInput
    upsert?: CompanyUpsertWithoutSentTicketsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutSentTicketsInput, CompanyUpdateWithoutSentTicketsInput>, CompanyUncheckedUpdateWithoutSentTicketsInput>
  }

  export type CompanyUpdateOneRequiredWithoutCustomerTicketsNestedInput = {
    create?: XOR<CompanyCreateWithoutCustomerTicketsInput, CompanyUncheckedCreateWithoutCustomerTicketsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutCustomerTicketsInput
    upsert?: CompanyUpsertWithoutCustomerTicketsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutCustomerTicketsInput, CompanyUpdateWithoutCustomerTicketsInput>, CompanyUncheckedUpdateWithoutCustomerTicketsInput>
  }

  export type CompanyUpdateOneRequiredWithoutTransporterTicketsNestedInput = {
    create?: XOR<CompanyCreateWithoutTransporterTicketsInput, CompanyUncheckedCreateWithoutTransporterTicketsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutTransporterTicketsInput
    upsert?: CompanyUpsertWithoutTransporterTicketsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutTransporterTicketsInput, CompanyUpdateWithoutTransporterTicketsInput>, CompanyUncheckedUpdateWithoutTransporterTicketsInput>
  }

  export type VehicleUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<VehicleCreateWithoutTicketsInput, VehicleUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutTicketsInput
    upsert?: VehicleUpsertWithoutTicketsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutTicketsInput, VehicleUpdateWithoutTicketsInput>, VehicleUncheckedUpdateWithoutTicketsInput>
  }

  export type DeliveryPlantUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<DeliveryPlantCreateWithoutTicketsInput, DeliveryPlantUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: DeliveryPlantCreateOrConnectWithoutTicketsInput
    upsert?: DeliveryPlantUpsertWithoutTicketsInput
    connect?: DeliveryPlantWhereUniqueInput
    update?: XOR<XOR<DeliveryPlantUpdateToOneWithWhereWithoutTicketsInput, DeliveryPlantUpdateWithoutTicketsInput>, DeliveryPlantUncheckedUpdateWithoutTicketsInput>
  }

  export type ProductUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<ProductCreateWithoutTicketsInput, ProductUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutTicketsInput
    upsert?: ProductUpsertWithoutTicketsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutTicketsInput, ProductUpdateWithoutTicketsInput>, ProductUncheckedUpdateWithoutTicketsInput>
  }

  export type TicketDocumentUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketDocumentCreateWithoutTicketInput, TicketDocumentUncheckedCreateWithoutTicketInput> | TicketDocumentCreateWithoutTicketInput[] | TicketDocumentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketDocumentCreateOrConnectWithoutTicketInput | TicketDocumentCreateOrConnectWithoutTicketInput[]
    upsert?: TicketDocumentUpsertWithWhereUniqueWithoutTicketInput | TicketDocumentUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketDocumentCreateManyTicketInputEnvelope
    set?: TicketDocumentWhereUniqueInput | TicketDocumentWhereUniqueInput[]
    disconnect?: TicketDocumentWhereUniqueInput | TicketDocumentWhereUniqueInput[]
    delete?: TicketDocumentWhereUniqueInput | TicketDocumentWhereUniqueInput[]
    connect?: TicketDocumentWhereUniqueInput | TicketDocumentWhereUniqueInput[]
    update?: TicketDocumentUpdateWithWhereUniqueWithoutTicketInput | TicketDocumentUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketDocumentUpdateManyWithWhereWithoutTicketInput | TicketDocumentUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketDocumentScalarWhereInput | TicketDocumentScalarWhereInput[]
  }

  export type TicketEventLogUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketEventLogCreateWithoutTicketInput, TicketEventLogUncheckedCreateWithoutTicketInput> | TicketEventLogCreateWithoutTicketInput[] | TicketEventLogUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketEventLogCreateOrConnectWithoutTicketInput | TicketEventLogCreateOrConnectWithoutTicketInput[]
    upsert?: TicketEventLogUpsertWithWhereUniqueWithoutTicketInput | TicketEventLogUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketEventLogCreateManyTicketInputEnvelope
    set?: TicketEventLogWhereUniqueInput | TicketEventLogWhereUniqueInput[]
    disconnect?: TicketEventLogWhereUniqueInput | TicketEventLogWhereUniqueInput[]
    delete?: TicketEventLogWhereUniqueInput | TicketEventLogWhereUniqueInput[]
    connect?: TicketEventLogWhereUniqueInput | TicketEventLogWhereUniqueInput[]
    update?: TicketEventLogUpdateWithWhereUniqueWithoutTicketInput | TicketEventLogUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketEventLogUpdateManyWithWhereWithoutTicketInput | TicketEventLogUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketEventLogScalarWhereInput | TicketEventLogScalarWhereInput[]
  }

  export type TicketDocumentUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketDocumentCreateWithoutTicketInput, TicketDocumentUncheckedCreateWithoutTicketInput> | TicketDocumentCreateWithoutTicketInput[] | TicketDocumentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketDocumentCreateOrConnectWithoutTicketInput | TicketDocumentCreateOrConnectWithoutTicketInput[]
    upsert?: TicketDocumentUpsertWithWhereUniqueWithoutTicketInput | TicketDocumentUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketDocumentCreateManyTicketInputEnvelope
    set?: TicketDocumentWhereUniqueInput | TicketDocumentWhereUniqueInput[]
    disconnect?: TicketDocumentWhereUniqueInput | TicketDocumentWhereUniqueInput[]
    delete?: TicketDocumentWhereUniqueInput | TicketDocumentWhereUniqueInput[]
    connect?: TicketDocumentWhereUniqueInput | TicketDocumentWhereUniqueInput[]
    update?: TicketDocumentUpdateWithWhereUniqueWithoutTicketInput | TicketDocumentUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketDocumentUpdateManyWithWhereWithoutTicketInput | TicketDocumentUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketDocumentScalarWhereInput | TicketDocumentScalarWhereInput[]
  }

  export type TicketEventLogUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketEventLogCreateWithoutTicketInput, TicketEventLogUncheckedCreateWithoutTicketInput> | TicketEventLogCreateWithoutTicketInput[] | TicketEventLogUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketEventLogCreateOrConnectWithoutTicketInput | TicketEventLogCreateOrConnectWithoutTicketInput[]
    upsert?: TicketEventLogUpsertWithWhereUniqueWithoutTicketInput | TicketEventLogUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketEventLogCreateManyTicketInputEnvelope
    set?: TicketEventLogWhereUniqueInput | TicketEventLogWhereUniqueInput[]
    disconnect?: TicketEventLogWhereUniqueInput | TicketEventLogWhereUniqueInput[]
    delete?: TicketEventLogWhereUniqueInput | TicketEventLogWhereUniqueInput[]
    connect?: TicketEventLogWhereUniqueInput | TicketEventLogWhereUniqueInput[]
    update?: TicketEventLogUpdateWithWhereUniqueWithoutTicketInput | TicketEventLogUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketEventLogUpdateManyWithWhereWithoutTicketInput | TicketEventLogUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketEventLogScalarWhereInput | TicketEventLogScalarWhereInput[]
  }

  export type TicketCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<TicketCreateWithoutDocumentsInput, TicketUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutDocumentsInput
    connect?: TicketWhereUniqueInput
  }

  export type EnumDocTypeFieldUpdateOperationsInput = {
    set?: $Enums.DocType
  }

  export type TicketUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<TicketCreateWithoutDocumentsInput, TicketUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutDocumentsInput
    upsert?: TicketUpsertWithoutDocumentsInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutDocumentsInput, TicketUpdateWithoutDocumentsInput>, TicketUncheckedUpdateWithoutDocumentsInput>
  }

  export type TicketCreateNestedOneWithoutEventsInput = {
    create?: XOR<TicketCreateWithoutEventsInput, TicketUncheckedCreateWithoutEventsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutEventsInput
    connect?: TicketWhereUniqueInput
  }

  export type TicketUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<TicketCreateWithoutEventsInput, TicketUncheckedCreateWithoutEventsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutEventsInput
    upsert?: TicketUpsertWithoutEventsInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutEventsInput, TicketUpdateWithoutEventsInput>, TicketUncheckedUpdateWithoutEventsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompanyCreateNestedOneWithoutApiKeysInput = {
    create?: XOR<CompanyCreateWithoutApiKeysInput, CompanyUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutApiKeysInput
    connect?: CompanyWhereUniqueInput
  }

  export type CompanyUpdateOneRequiredWithoutApiKeysNestedInput = {
    create?: XOR<CompanyCreateWithoutApiKeysInput, CompanyUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutApiKeysInput
    upsert?: CompanyUpsertWithoutApiKeysInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutApiKeysInput, CompanyUpdateWithoutApiKeysInput>, CompanyUncheckedUpdateWithoutApiKeysInput>
  }

  export type UserCreateNestedOneWithoutImportJobsInput = {
    create?: XOR<UserCreateWithoutImportJobsInput, UserUncheckedCreateWithoutImportJobsInput>
    connectOrCreate?: UserCreateOrConnectWithoutImportJobsInput
    connect?: UserWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutImportJobsInput = {
    create?: XOR<CompanyCreateWithoutImportJobsInput, CompanyUncheckedCreateWithoutImportJobsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutImportJobsInput
    connect?: CompanyWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UserUpdateOneWithoutImportJobsNestedInput = {
    create?: XOR<UserCreateWithoutImportJobsInput, UserUncheckedCreateWithoutImportJobsInput>
    connectOrCreate?: UserCreateOrConnectWithoutImportJobsInput
    upsert?: UserUpsertWithoutImportJobsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutImportJobsInput, UserUpdateWithoutImportJobsInput>, UserUncheckedUpdateWithoutImportJobsInput>
  }

  export type CompanyUpdateOneWithoutImportJobsNestedInput = {
    create?: XOR<CompanyCreateWithoutImportJobsInput, CompanyUncheckedCreateWithoutImportJobsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutImportJobsInput
    upsert?: CompanyUpsertWithoutImportJobsInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutImportJobsInput, CompanyUpdateWithoutImportJobsInput>, CompanyUncheckedUpdateWithoutImportJobsInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumTicketDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketDirection | EnumTicketDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.TicketDirection[] | ListEnumTicketDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketDirection[] | ListEnumTicketDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketDirectionFilter<$PrismaModel> | $Enums.TicketDirection
  }

  export type NestedEnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type NestedEnumTicketDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketDirection | EnumTicketDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.TicketDirection[] | ListEnumTicketDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketDirection[] | ListEnumTicketDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketDirectionWithAggregatesFilter<$PrismaModel> | $Enums.TicketDirection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketDirectionFilter<$PrismaModel>
    _max?: NestedEnumTicketDirectionFilter<$PrismaModel>
  }

  export type NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumDocTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocType | EnumDocTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocTypeFilter<$PrismaModel> | $Enums.DocType
  }

  export type NestedEnumDocTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocType | EnumDocTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocTypeFilter<$PrismaModel>
    _max?: NestedEnumDocTypeFilter<$PrismaModel>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type CompanyCreateWithoutUsersInput = {
    id?: string
    name: string
    vatNumber: string
    email?: string | null
    phone?: string | null
    country?: string | null
    city?: string | null
    postalCode?: string | null
    address1?: string | null
    address2?: string | null
    roles?: CompanyCreaterolesInput | $Enums.CompanyRole[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deliveryPlants?: DeliveryPlantCreateNestedManyWithoutCompanyInput
    vehicles?: VehicleCreateNestedManyWithoutTransporterInput
    suppliedProducts?: ProductCreateNestedManyWithoutSupplierInput
    sentTickets?: TicketCreateNestedManyWithoutSupplierInput
    customerTickets?: TicketCreateNestedManyWithoutCustomerInput
    transporterTickets?: TicketCreateNestedManyWithoutTransporterInput
    apiKeys?: ApiKeyCreateNestedManyWithoutCompanyInput
    importJobs?: ImportJobCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    vatNumber: string
    email?: string | null
    phone?: string | null
    country?: string | null
    city?: string | null
    postalCode?: string | null
    address1?: string | null
    address2?: string | null
    roles?: CompanyCreaterolesInput | $Enums.CompanyRole[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deliveryPlants?: DeliveryPlantUncheckedCreateNestedManyWithoutCompanyInput
    vehicles?: VehicleUncheckedCreateNestedManyWithoutTransporterInput
    suppliedProducts?: ProductUncheckedCreateNestedManyWithoutSupplierInput
    sentTickets?: TicketUncheckedCreateNestedManyWithoutSupplierInput
    customerTickets?: TicketUncheckedCreateNestedManyWithoutCustomerInput
    transporterTickets?: TicketUncheckedCreateNestedManyWithoutTransporterInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutCompanyInput
    importJobs?: ImportJobUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutUsersInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
  }

  export type ImportJobCreateWithoutUserInput = {
    id?: string
    entity: string
    mapping: JsonNullValueInput | InputJsonValue
    source?: string | null
    success?: boolean | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    createdAt?: Date | string
    company?: CompanyCreateNestedOneWithoutImportJobsInput
  }

  export type ImportJobUncheckedCreateWithoutUserInput = {
    id?: string
    companyId?: string | null
    entity: string
    mapping: JsonNullValueInput | InputJsonValue
    source?: string | null
    success?: boolean | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ImportJobCreateOrConnectWithoutUserInput = {
    where: ImportJobWhereUniqueInput
    create: XOR<ImportJobCreateWithoutUserInput, ImportJobUncheckedCreateWithoutUserInput>
  }

  export type ImportJobCreateManyUserInputEnvelope = {
    data: ImportJobCreateManyUserInput | ImportJobCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutUsersInput = {
    update: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutUsersInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type CompanyUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: CompanyUpdaterolesInput | $Enums.CompanyRole[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveryPlants?: DeliveryPlantUpdateManyWithoutCompanyNestedInput
    vehicles?: VehicleUpdateManyWithoutTransporterNestedInput
    suppliedProducts?: ProductUpdateManyWithoutSupplierNestedInput
    sentTickets?: TicketUpdateManyWithoutSupplierNestedInput
    customerTickets?: TicketUpdateManyWithoutCustomerNestedInput
    transporterTickets?: TicketUpdateManyWithoutTransporterNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutCompanyNestedInput
    importJobs?: ImportJobUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: CompanyUpdaterolesInput | $Enums.CompanyRole[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveryPlants?: DeliveryPlantUncheckedUpdateManyWithoutCompanyNestedInput
    vehicles?: VehicleUncheckedUpdateManyWithoutTransporterNestedInput
    suppliedProducts?: ProductUncheckedUpdateManyWithoutSupplierNestedInput
    sentTickets?: TicketUncheckedUpdateManyWithoutSupplierNestedInput
    customerTickets?: TicketUncheckedUpdateManyWithoutCustomerNestedInput
    transporterTickets?: TicketUncheckedUpdateManyWithoutTransporterNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutCompanyNestedInput
    importJobs?: ImportJobUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type ImportJobUpsertWithWhereUniqueWithoutUserInput = {
    where: ImportJobWhereUniqueInput
    update: XOR<ImportJobUpdateWithoutUserInput, ImportJobUncheckedUpdateWithoutUserInput>
    create: XOR<ImportJobCreateWithoutUserInput, ImportJobUncheckedCreateWithoutUserInput>
  }

  export type ImportJobUpdateWithWhereUniqueWithoutUserInput = {
    where: ImportJobWhereUniqueInput
    data: XOR<ImportJobUpdateWithoutUserInput, ImportJobUncheckedUpdateWithoutUserInput>
  }

  export type ImportJobUpdateManyWithWhereWithoutUserInput = {
    where: ImportJobScalarWhereInput
    data: XOR<ImportJobUpdateManyMutationInput, ImportJobUncheckedUpdateManyWithoutUserInput>
  }

  export type ImportJobScalarWhereInput = {
    AND?: ImportJobScalarWhereInput | ImportJobScalarWhereInput[]
    OR?: ImportJobScalarWhereInput[]
    NOT?: ImportJobScalarWhereInput | ImportJobScalarWhereInput[]
    id?: StringFilter<"ImportJob"> | string
    userId?: StringNullableFilter<"ImportJob"> | string | null
    companyId?: StringNullableFilter<"ImportJob"> | string | null
    entity?: StringFilter<"ImportJob"> | string
    mapping?: JsonFilter<"ImportJob">
    source?: StringNullableFilter<"ImportJob"> | string | null
    success?: BoolNullableFilter<"ImportJob"> | boolean | null
    stats?: JsonNullableFilter<"ImportJob">
    processedAt?: DateTimeNullableFilter<"ImportJob"> | Date | string | null
    createdAt?: DateTimeFilter<"ImportJob"> | Date | string
  }

  export type UserCreateWithoutCompanyInput = {
    id?: string
    email: string
    name: string
    password?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string | null
    importJobs?: ImportJobCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompanyInput = {
    id?: string
    email: string
    name: string
    password?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string | null
    importJobs?: ImportJobUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCompanyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserCreateManyCompanyInputEnvelope = {
    data: UserCreateManyCompanyInput | UserCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type DeliveryPlantCreateWithoutCompanyInput = {
    id?: string
    name: string
    country?: string | null
    city?: string | null
    postalCode?: string | null
    address1?: string | null
    address2?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    tickets?: TicketCreateNestedManyWithoutDeliveryPlantInput
  }

  export type DeliveryPlantUncheckedCreateWithoutCompanyInput = {
    id?: string
    name: string
    country?: string | null
    city?: string | null
    postalCode?: string | null
    address1?: string | null
    address2?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    tickets?: TicketUncheckedCreateNestedManyWithoutDeliveryPlantInput
  }

  export type DeliveryPlantCreateOrConnectWithoutCompanyInput = {
    where: DeliveryPlantWhereUniqueInput
    create: XOR<DeliveryPlantCreateWithoutCompanyInput, DeliveryPlantUncheckedCreateWithoutCompanyInput>
  }

  export type DeliveryPlantCreateManyCompanyInputEnvelope = {
    data: DeliveryPlantCreateManyCompanyInput | DeliveryPlantCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type VehicleCreateWithoutTransporterInput = {
    id?: string
    plateNumber: string
    vehicleType?: string | null
    tareWeight?: number | null
    maxLoadKg?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    tickets?: TicketCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutTransporterInput = {
    id?: string
    plateNumber: string
    vehicleType?: string | null
    tareWeight?: number | null
    maxLoadKg?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    tickets?: TicketUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutTransporterInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutTransporterInput, VehicleUncheckedCreateWithoutTransporterInput>
  }

  export type VehicleCreateManyTransporterInputEnvelope = {
    data: VehicleCreateManyTransporterInput | VehicleCreateManyTransporterInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutSupplierInput = {
    id?: string
    code: string
    description: string
    unit?: string | null
    density?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    tickets?: TicketCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSupplierInput = {
    id?: string
    code: string
    description: string
    unit?: string | null
    density?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    tickets?: TicketUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSupplierInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSupplierInput, ProductUncheckedCreateWithoutSupplierInput>
  }

  export type ProductCreateManySupplierInputEnvelope = {
    data: ProductCreateManySupplierInput | ProductCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutSupplierInput = {
    id?: string
    number: string
    externalCode?: string | null
    direction: $Enums.TicketDirection
    status?: $Enums.TicketStatus
    grossWeight?: number | null
    tareWeight?: number | null
    netWeight?: number | null
    unit?: string | null
    notes?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: Date | string | null
    shareToken?: string | null
    sharedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    customer: CompanyCreateNestedOneWithoutCustomerTicketsInput
    transporter: CompanyCreateNestedOneWithoutTransporterTicketsInput
    vehicle: VehicleCreateNestedOneWithoutTicketsInput
    deliveryPlant: DeliveryPlantCreateNestedOneWithoutTicketsInput
    product: ProductCreateNestedOneWithoutTicketsInput
    documents?: TicketDocumentCreateNestedManyWithoutTicketInput
    events?: TicketEventLogCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutSupplierInput = {
    id?: string
    number: string
    customerId: string
    transporterId: string
    vehicleId: string
    deliveryPlantId: string
    productId: string
    externalCode?: string | null
    direction: $Enums.TicketDirection
    status?: $Enums.TicketStatus
    grossWeight?: number | null
    tareWeight?: number | null
    netWeight?: number | null
    unit?: string | null
    notes?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: Date | string | null
    shareToken?: string | null
    sharedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    documents?: TicketDocumentUncheckedCreateNestedManyWithoutTicketInput
    events?: TicketEventLogUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutSupplierInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutSupplierInput, TicketUncheckedCreateWithoutSupplierInput>
  }

  export type TicketCreateManySupplierInputEnvelope = {
    data: TicketCreateManySupplierInput | TicketCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutCustomerInput = {
    id?: string
    number: string
    externalCode?: string | null
    direction: $Enums.TicketDirection
    status?: $Enums.TicketStatus
    grossWeight?: number | null
    tareWeight?: number | null
    netWeight?: number | null
    unit?: string | null
    notes?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: Date | string | null
    shareToken?: string | null
    sharedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    supplier: CompanyCreateNestedOneWithoutSentTicketsInput
    transporter: CompanyCreateNestedOneWithoutTransporterTicketsInput
    vehicle: VehicleCreateNestedOneWithoutTicketsInput
    deliveryPlant: DeliveryPlantCreateNestedOneWithoutTicketsInput
    product: ProductCreateNestedOneWithoutTicketsInput
    documents?: TicketDocumentCreateNestedManyWithoutTicketInput
    events?: TicketEventLogCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutCustomerInput = {
    id?: string
    number: string
    supplierId: string
    transporterId: string
    vehicleId: string
    deliveryPlantId: string
    productId: string
    externalCode?: string | null
    direction: $Enums.TicketDirection
    status?: $Enums.TicketStatus
    grossWeight?: number | null
    tareWeight?: number | null
    netWeight?: number | null
    unit?: string | null
    notes?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: Date | string | null
    shareToken?: string | null
    sharedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    documents?: TicketDocumentUncheckedCreateNestedManyWithoutTicketInput
    events?: TicketEventLogUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutCustomerInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutCustomerInput, TicketUncheckedCreateWithoutCustomerInput>
  }

  export type TicketCreateManyCustomerInputEnvelope = {
    data: TicketCreateManyCustomerInput | TicketCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutTransporterInput = {
    id?: string
    number: string
    externalCode?: string | null
    direction: $Enums.TicketDirection
    status?: $Enums.TicketStatus
    grossWeight?: number | null
    tareWeight?: number | null
    netWeight?: number | null
    unit?: string | null
    notes?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: Date | string | null
    shareToken?: string | null
    sharedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    supplier: CompanyCreateNestedOneWithoutSentTicketsInput
    customer: CompanyCreateNestedOneWithoutCustomerTicketsInput
    vehicle: VehicleCreateNestedOneWithoutTicketsInput
    deliveryPlant: DeliveryPlantCreateNestedOneWithoutTicketsInput
    product: ProductCreateNestedOneWithoutTicketsInput
    documents?: TicketDocumentCreateNestedManyWithoutTicketInput
    events?: TicketEventLogCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutTransporterInput = {
    id?: string
    number: string
    supplierId: string
    customerId: string
    vehicleId: string
    deliveryPlantId: string
    productId: string
    externalCode?: string | null
    direction: $Enums.TicketDirection
    status?: $Enums.TicketStatus
    grossWeight?: number | null
    tareWeight?: number | null
    netWeight?: number | null
    unit?: string | null
    notes?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: Date | string | null
    shareToken?: string | null
    sharedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    documents?: TicketDocumentUncheckedCreateNestedManyWithoutTicketInput
    events?: TicketEventLogUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutTransporterInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutTransporterInput, TicketUncheckedCreateWithoutTransporterInput>
  }

  export type TicketCreateManyTransporterInputEnvelope = {
    data: TicketCreateManyTransporterInput | TicketCreateManyTransporterInput[]
    skipDuplicates?: boolean
  }

  export type ApiKeyCreateWithoutCompanyInput = {
    id?: string
    name?: string | null
    keyHash: string
    lastUsedAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ApiKeyUncheckedCreateWithoutCompanyInput = {
    id?: string
    name?: string | null
    keyHash: string
    lastUsedAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ApiKeyCreateOrConnectWithoutCompanyInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutCompanyInput, ApiKeyUncheckedCreateWithoutCompanyInput>
  }

  export type ApiKeyCreateManyCompanyInputEnvelope = {
    data: ApiKeyCreateManyCompanyInput | ApiKeyCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type ImportJobCreateWithoutCompanyInput = {
    id?: string
    entity: string
    mapping: JsonNullValueInput | InputJsonValue
    source?: string | null
    success?: boolean | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutImportJobsInput
  }

  export type ImportJobUncheckedCreateWithoutCompanyInput = {
    id?: string
    userId?: string | null
    entity: string
    mapping: JsonNullValueInput | InputJsonValue
    source?: string | null
    success?: boolean | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ImportJobCreateOrConnectWithoutCompanyInput = {
    where: ImportJobWhereUniqueInput
    create: XOR<ImportJobCreateWithoutCompanyInput, ImportJobUncheckedCreateWithoutCompanyInput>
  }

  export type ImportJobCreateManyCompanyInputEnvelope = {
    data: ImportJobCreateManyCompanyInput | ImportJobCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type UserUpdateManyWithWhereWithoutCompanyInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCompanyInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    companyId?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type DeliveryPlantUpsertWithWhereUniqueWithoutCompanyInput = {
    where: DeliveryPlantWhereUniqueInput
    update: XOR<DeliveryPlantUpdateWithoutCompanyInput, DeliveryPlantUncheckedUpdateWithoutCompanyInput>
    create: XOR<DeliveryPlantCreateWithoutCompanyInput, DeliveryPlantUncheckedCreateWithoutCompanyInput>
  }

  export type DeliveryPlantUpdateWithWhereUniqueWithoutCompanyInput = {
    where: DeliveryPlantWhereUniqueInput
    data: XOR<DeliveryPlantUpdateWithoutCompanyInput, DeliveryPlantUncheckedUpdateWithoutCompanyInput>
  }

  export type DeliveryPlantUpdateManyWithWhereWithoutCompanyInput = {
    where: DeliveryPlantScalarWhereInput
    data: XOR<DeliveryPlantUpdateManyMutationInput, DeliveryPlantUncheckedUpdateManyWithoutCompanyInput>
  }

  export type DeliveryPlantScalarWhereInput = {
    AND?: DeliveryPlantScalarWhereInput | DeliveryPlantScalarWhereInput[]
    OR?: DeliveryPlantScalarWhereInput[]
    NOT?: DeliveryPlantScalarWhereInput | DeliveryPlantScalarWhereInput[]
    id?: StringFilter<"DeliveryPlant"> | string
    name?: StringFilter<"DeliveryPlant"> | string
    country?: StringNullableFilter<"DeliveryPlant"> | string | null
    city?: StringNullableFilter<"DeliveryPlant"> | string | null
    postalCode?: StringNullableFilter<"DeliveryPlant"> | string | null
    address1?: StringNullableFilter<"DeliveryPlant"> | string | null
    address2?: StringNullableFilter<"DeliveryPlant"> | string | null
    companyId?: StringFilter<"DeliveryPlant"> | string
    createdAt?: DateTimeFilter<"DeliveryPlant"> | Date | string
    updatedAt?: DateTimeNullableFilter<"DeliveryPlant"> | Date | string | null
  }

  export type VehicleUpsertWithWhereUniqueWithoutTransporterInput = {
    where: VehicleWhereUniqueInput
    update: XOR<VehicleUpdateWithoutTransporterInput, VehicleUncheckedUpdateWithoutTransporterInput>
    create: XOR<VehicleCreateWithoutTransporterInput, VehicleUncheckedCreateWithoutTransporterInput>
  }

  export type VehicleUpdateWithWhereUniqueWithoutTransporterInput = {
    where: VehicleWhereUniqueInput
    data: XOR<VehicleUpdateWithoutTransporterInput, VehicleUncheckedUpdateWithoutTransporterInput>
  }

  export type VehicleUpdateManyWithWhereWithoutTransporterInput = {
    where: VehicleScalarWhereInput
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyWithoutTransporterInput>
  }

  export type VehicleScalarWhereInput = {
    AND?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    OR?: VehicleScalarWhereInput[]
    NOT?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    plateNumber?: StringFilter<"Vehicle"> | string
    vehicleType?: StringNullableFilter<"Vehicle"> | string | null
    tareWeight?: IntNullableFilter<"Vehicle"> | number | null
    maxLoadKg?: IntNullableFilter<"Vehicle"> | number | null
    transporterId?: StringFilter<"Vehicle"> | string
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Vehicle"> | Date | string | null
  }

  export type ProductUpsertWithWhereUniqueWithoutSupplierInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutSupplierInput, ProductUncheckedUpdateWithoutSupplierInput>
    create: XOR<ProductCreateWithoutSupplierInput, ProductUncheckedCreateWithoutSupplierInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutSupplierInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutSupplierInput, ProductUncheckedUpdateWithoutSupplierInput>
  }

  export type ProductUpdateManyWithWhereWithoutSupplierInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutSupplierInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    code?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    unit?: StringNullableFilter<"Product"> | string | null
    density?: FloatNullableFilter<"Product"> | number | null
    supplierId?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
  }

  export type TicketUpsertWithWhereUniqueWithoutSupplierInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutSupplierInput, TicketUncheckedUpdateWithoutSupplierInput>
    create: XOR<TicketCreateWithoutSupplierInput, TicketUncheckedCreateWithoutSupplierInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutSupplierInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutSupplierInput, TicketUncheckedUpdateWithoutSupplierInput>
  }

  export type TicketUpdateManyWithWhereWithoutSupplierInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutSupplierInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: StringFilter<"Ticket"> | string
    number?: StringFilter<"Ticket"> | string
    supplierId?: StringFilter<"Ticket"> | string
    customerId?: StringFilter<"Ticket"> | string
    transporterId?: StringFilter<"Ticket"> | string
    vehicleId?: StringFilter<"Ticket"> | string
    deliveryPlantId?: StringFilter<"Ticket"> | string
    productId?: StringFilter<"Ticket"> | string
    externalCode?: StringNullableFilter<"Ticket"> | string | null
    direction?: EnumTicketDirectionFilter<"Ticket"> | $Enums.TicketDirection
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    grossWeight?: FloatNullableFilter<"Ticket"> | number | null
    tareWeight?: FloatNullableFilter<"Ticket"> | number | null
    netWeight?: FloatNullableFilter<"Ticket"> | number | null
    unit?: StringNullableFilter<"Ticket"> | string | null
    notes?: StringNullableFilter<"Ticket"> | string | null
    meta?: JsonNullableFilter<"Ticket">
    weighedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    shareToken?: StringNullableFilter<"Ticket"> | string | null
    sharedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
  }

  export type TicketUpsertWithWhereUniqueWithoutCustomerInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutCustomerInput, TicketUncheckedUpdateWithoutCustomerInput>
    create: XOR<TicketCreateWithoutCustomerInput, TicketUncheckedCreateWithoutCustomerInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutCustomerInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutCustomerInput, TicketUncheckedUpdateWithoutCustomerInput>
  }

  export type TicketUpdateManyWithWhereWithoutCustomerInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutCustomerInput>
  }

  export type TicketUpsertWithWhereUniqueWithoutTransporterInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutTransporterInput, TicketUncheckedUpdateWithoutTransporterInput>
    create: XOR<TicketCreateWithoutTransporterInput, TicketUncheckedCreateWithoutTransporterInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutTransporterInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutTransporterInput, TicketUncheckedUpdateWithoutTransporterInput>
  }

  export type TicketUpdateManyWithWhereWithoutTransporterInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutTransporterInput>
  }

  export type ApiKeyUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ApiKeyWhereUniqueInput
    update: XOR<ApiKeyUpdateWithoutCompanyInput, ApiKeyUncheckedUpdateWithoutCompanyInput>
    create: XOR<ApiKeyCreateWithoutCompanyInput, ApiKeyUncheckedCreateWithoutCompanyInput>
  }

  export type ApiKeyUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ApiKeyWhereUniqueInput
    data: XOR<ApiKeyUpdateWithoutCompanyInput, ApiKeyUncheckedUpdateWithoutCompanyInput>
  }

  export type ApiKeyUpdateManyWithWhereWithoutCompanyInput = {
    where: ApiKeyScalarWhereInput
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyWithoutCompanyInput>
  }

  export type ApiKeyScalarWhereInput = {
    AND?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    OR?: ApiKeyScalarWhereInput[]
    NOT?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    name?: StringNullableFilter<"ApiKey"> | string | null
    keyHash?: StringFilter<"ApiKey"> | string
    companyId?: StringFilter<"ApiKey"> | string
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
  }

  export type ImportJobUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ImportJobWhereUniqueInput
    update: XOR<ImportJobUpdateWithoutCompanyInput, ImportJobUncheckedUpdateWithoutCompanyInput>
    create: XOR<ImportJobCreateWithoutCompanyInput, ImportJobUncheckedCreateWithoutCompanyInput>
  }

  export type ImportJobUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ImportJobWhereUniqueInput
    data: XOR<ImportJobUpdateWithoutCompanyInput, ImportJobUncheckedUpdateWithoutCompanyInput>
  }

  export type ImportJobUpdateManyWithWhereWithoutCompanyInput = {
    where: ImportJobScalarWhereInput
    data: XOR<ImportJobUpdateManyMutationInput, ImportJobUncheckedUpdateManyWithoutCompanyInput>
  }

  export type CompanyCreateWithoutDeliveryPlantsInput = {
    id?: string
    name: string
    vatNumber: string
    email?: string | null
    phone?: string | null
    country?: string | null
    city?: string | null
    postalCode?: string | null
    address1?: string | null
    address2?: string | null
    roles?: CompanyCreaterolesInput | $Enums.CompanyRole[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutCompanyInput
    vehicles?: VehicleCreateNestedManyWithoutTransporterInput
    suppliedProducts?: ProductCreateNestedManyWithoutSupplierInput
    sentTickets?: TicketCreateNestedManyWithoutSupplierInput
    customerTickets?: TicketCreateNestedManyWithoutCustomerInput
    transporterTickets?: TicketCreateNestedManyWithoutTransporterInput
    apiKeys?: ApiKeyCreateNestedManyWithoutCompanyInput
    importJobs?: ImportJobCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutDeliveryPlantsInput = {
    id?: string
    name: string
    vatNumber: string
    email?: string | null
    phone?: string | null
    country?: string | null
    city?: string | null
    postalCode?: string | null
    address1?: string | null
    address2?: string | null
    roles?: CompanyCreaterolesInput | $Enums.CompanyRole[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    vehicles?: VehicleUncheckedCreateNestedManyWithoutTransporterInput
    suppliedProducts?: ProductUncheckedCreateNestedManyWithoutSupplierInput
    sentTickets?: TicketUncheckedCreateNestedManyWithoutSupplierInput
    customerTickets?: TicketUncheckedCreateNestedManyWithoutCustomerInput
    transporterTickets?: TicketUncheckedCreateNestedManyWithoutTransporterInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutCompanyInput
    importJobs?: ImportJobUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutDeliveryPlantsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutDeliveryPlantsInput, CompanyUncheckedCreateWithoutDeliveryPlantsInput>
  }

  export type TicketCreateWithoutDeliveryPlantInput = {
    id?: string
    number: string
    externalCode?: string | null
    direction: $Enums.TicketDirection
    status?: $Enums.TicketStatus
    grossWeight?: number | null
    tareWeight?: number | null
    netWeight?: number | null
    unit?: string | null
    notes?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: Date | string | null
    shareToken?: string | null
    sharedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    supplier: CompanyCreateNestedOneWithoutSentTicketsInput
    customer: CompanyCreateNestedOneWithoutCustomerTicketsInput
    transporter: CompanyCreateNestedOneWithoutTransporterTicketsInput
    vehicle: VehicleCreateNestedOneWithoutTicketsInput
    product: ProductCreateNestedOneWithoutTicketsInput
    documents?: TicketDocumentCreateNestedManyWithoutTicketInput
    events?: TicketEventLogCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutDeliveryPlantInput = {
    id?: string
    number: string
    supplierId: string
    customerId: string
    transporterId: string
    vehicleId: string
    productId: string
    externalCode?: string | null
    direction: $Enums.TicketDirection
    status?: $Enums.TicketStatus
    grossWeight?: number | null
    tareWeight?: number | null
    netWeight?: number | null
    unit?: string | null
    notes?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: Date | string | null
    shareToken?: string | null
    sharedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    documents?: TicketDocumentUncheckedCreateNestedManyWithoutTicketInput
    events?: TicketEventLogUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutDeliveryPlantInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutDeliveryPlantInput, TicketUncheckedCreateWithoutDeliveryPlantInput>
  }

  export type TicketCreateManyDeliveryPlantInputEnvelope = {
    data: TicketCreateManyDeliveryPlantInput | TicketCreateManyDeliveryPlantInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutDeliveryPlantsInput = {
    update: XOR<CompanyUpdateWithoutDeliveryPlantsInput, CompanyUncheckedUpdateWithoutDeliveryPlantsInput>
    create: XOR<CompanyCreateWithoutDeliveryPlantsInput, CompanyUncheckedCreateWithoutDeliveryPlantsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutDeliveryPlantsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutDeliveryPlantsInput, CompanyUncheckedUpdateWithoutDeliveryPlantsInput>
  }

  export type CompanyUpdateWithoutDeliveryPlantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: CompanyUpdaterolesInput | $Enums.CompanyRole[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutCompanyNestedInput
    vehicles?: VehicleUpdateManyWithoutTransporterNestedInput
    suppliedProducts?: ProductUpdateManyWithoutSupplierNestedInput
    sentTickets?: TicketUpdateManyWithoutSupplierNestedInput
    customerTickets?: TicketUpdateManyWithoutCustomerNestedInput
    transporterTickets?: TicketUpdateManyWithoutTransporterNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutCompanyNestedInput
    importJobs?: ImportJobUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutDeliveryPlantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: CompanyUpdaterolesInput | $Enums.CompanyRole[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    vehicles?: VehicleUncheckedUpdateManyWithoutTransporterNestedInput
    suppliedProducts?: ProductUncheckedUpdateManyWithoutSupplierNestedInput
    sentTickets?: TicketUncheckedUpdateManyWithoutSupplierNestedInput
    customerTickets?: TicketUncheckedUpdateManyWithoutCustomerNestedInput
    transporterTickets?: TicketUncheckedUpdateManyWithoutTransporterNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutCompanyNestedInput
    importJobs?: ImportJobUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type TicketUpsertWithWhereUniqueWithoutDeliveryPlantInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutDeliveryPlantInput, TicketUncheckedUpdateWithoutDeliveryPlantInput>
    create: XOR<TicketCreateWithoutDeliveryPlantInput, TicketUncheckedCreateWithoutDeliveryPlantInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutDeliveryPlantInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutDeliveryPlantInput, TicketUncheckedUpdateWithoutDeliveryPlantInput>
  }

  export type TicketUpdateManyWithWhereWithoutDeliveryPlantInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutDeliveryPlantInput>
  }

  export type CompanyCreateWithoutVehiclesInput = {
    id?: string
    name: string
    vatNumber: string
    email?: string | null
    phone?: string | null
    country?: string | null
    city?: string | null
    postalCode?: string | null
    address1?: string | null
    address2?: string | null
    roles?: CompanyCreaterolesInput | $Enums.CompanyRole[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutCompanyInput
    deliveryPlants?: DeliveryPlantCreateNestedManyWithoutCompanyInput
    suppliedProducts?: ProductCreateNestedManyWithoutSupplierInput
    sentTickets?: TicketCreateNestedManyWithoutSupplierInput
    customerTickets?: TicketCreateNestedManyWithoutCustomerInput
    transporterTickets?: TicketCreateNestedManyWithoutTransporterInput
    apiKeys?: ApiKeyCreateNestedManyWithoutCompanyInput
    importJobs?: ImportJobCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutVehiclesInput = {
    id?: string
    name: string
    vatNumber: string
    email?: string | null
    phone?: string | null
    country?: string | null
    city?: string | null
    postalCode?: string | null
    address1?: string | null
    address2?: string | null
    roles?: CompanyCreaterolesInput | $Enums.CompanyRole[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    deliveryPlants?: DeliveryPlantUncheckedCreateNestedManyWithoutCompanyInput
    suppliedProducts?: ProductUncheckedCreateNestedManyWithoutSupplierInput
    sentTickets?: TicketUncheckedCreateNestedManyWithoutSupplierInput
    customerTickets?: TicketUncheckedCreateNestedManyWithoutCustomerInput
    transporterTickets?: TicketUncheckedCreateNestedManyWithoutTransporterInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutCompanyInput
    importJobs?: ImportJobUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutVehiclesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutVehiclesInput, CompanyUncheckedCreateWithoutVehiclesInput>
  }

  export type TicketCreateWithoutVehicleInput = {
    id?: string
    number: string
    externalCode?: string | null
    direction: $Enums.TicketDirection
    status?: $Enums.TicketStatus
    grossWeight?: number | null
    tareWeight?: number | null
    netWeight?: number | null
    unit?: string | null
    notes?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: Date | string | null
    shareToken?: string | null
    sharedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    supplier: CompanyCreateNestedOneWithoutSentTicketsInput
    customer: CompanyCreateNestedOneWithoutCustomerTicketsInput
    transporter: CompanyCreateNestedOneWithoutTransporterTicketsInput
    deliveryPlant: DeliveryPlantCreateNestedOneWithoutTicketsInput
    product: ProductCreateNestedOneWithoutTicketsInput
    documents?: TicketDocumentCreateNestedManyWithoutTicketInput
    events?: TicketEventLogCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutVehicleInput = {
    id?: string
    number: string
    supplierId: string
    customerId: string
    transporterId: string
    deliveryPlantId: string
    productId: string
    externalCode?: string | null
    direction: $Enums.TicketDirection
    status?: $Enums.TicketStatus
    grossWeight?: number | null
    tareWeight?: number | null
    netWeight?: number | null
    unit?: string | null
    notes?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: Date | string | null
    shareToken?: string | null
    sharedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    documents?: TicketDocumentUncheckedCreateNestedManyWithoutTicketInput
    events?: TicketEventLogUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutVehicleInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutVehicleInput, TicketUncheckedCreateWithoutVehicleInput>
  }

  export type TicketCreateManyVehicleInputEnvelope = {
    data: TicketCreateManyVehicleInput | TicketCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutVehiclesInput = {
    update: XOR<CompanyUpdateWithoutVehiclesInput, CompanyUncheckedUpdateWithoutVehiclesInput>
    create: XOR<CompanyCreateWithoutVehiclesInput, CompanyUncheckedCreateWithoutVehiclesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutVehiclesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutVehiclesInput, CompanyUncheckedUpdateWithoutVehiclesInput>
  }

  export type CompanyUpdateWithoutVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: CompanyUpdaterolesInput | $Enums.CompanyRole[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutCompanyNestedInput
    deliveryPlants?: DeliveryPlantUpdateManyWithoutCompanyNestedInput
    suppliedProducts?: ProductUpdateManyWithoutSupplierNestedInput
    sentTickets?: TicketUpdateManyWithoutSupplierNestedInput
    customerTickets?: TicketUpdateManyWithoutCustomerNestedInput
    transporterTickets?: TicketUpdateManyWithoutTransporterNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutCompanyNestedInput
    importJobs?: ImportJobUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: CompanyUpdaterolesInput | $Enums.CompanyRole[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    deliveryPlants?: DeliveryPlantUncheckedUpdateManyWithoutCompanyNestedInput
    suppliedProducts?: ProductUncheckedUpdateManyWithoutSupplierNestedInput
    sentTickets?: TicketUncheckedUpdateManyWithoutSupplierNestedInput
    customerTickets?: TicketUncheckedUpdateManyWithoutCustomerNestedInput
    transporterTickets?: TicketUncheckedUpdateManyWithoutTransporterNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutCompanyNestedInput
    importJobs?: ImportJobUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type TicketUpsertWithWhereUniqueWithoutVehicleInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutVehicleInput, TicketUncheckedUpdateWithoutVehicleInput>
    create: XOR<TicketCreateWithoutVehicleInput, TicketUncheckedCreateWithoutVehicleInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutVehicleInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutVehicleInput, TicketUncheckedUpdateWithoutVehicleInput>
  }

  export type TicketUpdateManyWithWhereWithoutVehicleInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutVehicleInput>
  }

  export type CompanyCreateWithoutSuppliedProductsInput = {
    id?: string
    name: string
    vatNumber: string
    email?: string | null
    phone?: string | null
    country?: string | null
    city?: string | null
    postalCode?: string | null
    address1?: string | null
    address2?: string | null
    roles?: CompanyCreaterolesInput | $Enums.CompanyRole[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutCompanyInput
    deliveryPlants?: DeliveryPlantCreateNestedManyWithoutCompanyInput
    vehicles?: VehicleCreateNestedManyWithoutTransporterInput
    sentTickets?: TicketCreateNestedManyWithoutSupplierInput
    customerTickets?: TicketCreateNestedManyWithoutCustomerInput
    transporterTickets?: TicketCreateNestedManyWithoutTransporterInput
    apiKeys?: ApiKeyCreateNestedManyWithoutCompanyInput
    importJobs?: ImportJobCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutSuppliedProductsInput = {
    id?: string
    name: string
    vatNumber: string
    email?: string | null
    phone?: string | null
    country?: string | null
    city?: string | null
    postalCode?: string | null
    address1?: string | null
    address2?: string | null
    roles?: CompanyCreaterolesInput | $Enums.CompanyRole[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    deliveryPlants?: DeliveryPlantUncheckedCreateNestedManyWithoutCompanyInput
    vehicles?: VehicleUncheckedCreateNestedManyWithoutTransporterInput
    sentTickets?: TicketUncheckedCreateNestedManyWithoutSupplierInput
    customerTickets?: TicketUncheckedCreateNestedManyWithoutCustomerInput
    transporterTickets?: TicketUncheckedCreateNestedManyWithoutTransporterInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutCompanyInput
    importJobs?: ImportJobUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutSuppliedProductsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutSuppliedProductsInput, CompanyUncheckedCreateWithoutSuppliedProductsInput>
  }

  export type TicketCreateWithoutProductInput = {
    id?: string
    number: string
    externalCode?: string | null
    direction: $Enums.TicketDirection
    status?: $Enums.TicketStatus
    grossWeight?: number | null
    tareWeight?: number | null
    netWeight?: number | null
    unit?: string | null
    notes?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: Date | string | null
    shareToken?: string | null
    sharedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    supplier: CompanyCreateNestedOneWithoutSentTicketsInput
    customer: CompanyCreateNestedOneWithoutCustomerTicketsInput
    transporter: CompanyCreateNestedOneWithoutTransporterTicketsInput
    vehicle: VehicleCreateNestedOneWithoutTicketsInput
    deliveryPlant: DeliveryPlantCreateNestedOneWithoutTicketsInput
    documents?: TicketDocumentCreateNestedManyWithoutTicketInput
    events?: TicketEventLogCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutProductInput = {
    id?: string
    number: string
    supplierId: string
    customerId: string
    transporterId: string
    vehicleId: string
    deliveryPlantId: string
    externalCode?: string | null
    direction: $Enums.TicketDirection
    status?: $Enums.TicketStatus
    grossWeight?: number | null
    tareWeight?: number | null
    netWeight?: number | null
    unit?: string | null
    notes?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: Date | string | null
    shareToken?: string | null
    sharedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    documents?: TicketDocumentUncheckedCreateNestedManyWithoutTicketInput
    events?: TicketEventLogUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutProductInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutProductInput, TicketUncheckedCreateWithoutProductInput>
  }

  export type TicketCreateManyProductInputEnvelope = {
    data: TicketCreateManyProductInput | TicketCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutSuppliedProductsInput = {
    update: XOR<CompanyUpdateWithoutSuppliedProductsInput, CompanyUncheckedUpdateWithoutSuppliedProductsInput>
    create: XOR<CompanyCreateWithoutSuppliedProductsInput, CompanyUncheckedCreateWithoutSuppliedProductsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutSuppliedProductsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutSuppliedProductsInput, CompanyUncheckedUpdateWithoutSuppliedProductsInput>
  }

  export type CompanyUpdateWithoutSuppliedProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: CompanyUpdaterolesInput | $Enums.CompanyRole[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutCompanyNestedInput
    deliveryPlants?: DeliveryPlantUpdateManyWithoutCompanyNestedInput
    vehicles?: VehicleUpdateManyWithoutTransporterNestedInput
    sentTickets?: TicketUpdateManyWithoutSupplierNestedInput
    customerTickets?: TicketUpdateManyWithoutCustomerNestedInput
    transporterTickets?: TicketUpdateManyWithoutTransporterNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutCompanyNestedInput
    importJobs?: ImportJobUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutSuppliedProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: CompanyUpdaterolesInput | $Enums.CompanyRole[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    deliveryPlants?: DeliveryPlantUncheckedUpdateManyWithoutCompanyNestedInput
    vehicles?: VehicleUncheckedUpdateManyWithoutTransporterNestedInput
    sentTickets?: TicketUncheckedUpdateManyWithoutSupplierNestedInput
    customerTickets?: TicketUncheckedUpdateManyWithoutCustomerNestedInput
    transporterTickets?: TicketUncheckedUpdateManyWithoutTransporterNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutCompanyNestedInput
    importJobs?: ImportJobUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type TicketUpsertWithWhereUniqueWithoutProductInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutProductInput, TicketUncheckedUpdateWithoutProductInput>
    create: XOR<TicketCreateWithoutProductInput, TicketUncheckedCreateWithoutProductInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutProductInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutProductInput, TicketUncheckedUpdateWithoutProductInput>
  }

  export type TicketUpdateManyWithWhereWithoutProductInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutProductInput>
  }

  export type CompanyCreateWithoutSentTicketsInput = {
    id?: string
    name: string
    vatNumber: string
    email?: string | null
    phone?: string | null
    country?: string | null
    city?: string | null
    postalCode?: string | null
    address1?: string | null
    address2?: string | null
    roles?: CompanyCreaterolesInput | $Enums.CompanyRole[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutCompanyInput
    deliveryPlants?: DeliveryPlantCreateNestedManyWithoutCompanyInput
    vehicles?: VehicleCreateNestedManyWithoutTransporterInput
    suppliedProducts?: ProductCreateNestedManyWithoutSupplierInput
    customerTickets?: TicketCreateNestedManyWithoutCustomerInput
    transporterTickets?: TicketCreateNestedManyWithoutTransporterInput
    apiKeys?: ApiKeyCreateNestedManyWithoutCompanyInput
    importJobs?: ImportJobCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutSentTicketsInput = {
    id?: string
    name: string
    vatNumber: string
    email?: string | null
    phone?: string | null
    country?: string | null
    city?: string | null
    postalCode?: string | null
    address1?: string | null
    address2?: string | null
    roles?: CompanyCreaterolesInput | $Enums.CompanyRole[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    deliveryPlants?: DeliveryPlantUncheckedCreateNestedManyWithoutCompanyInput
    vehicles?: VehicleUncheckedCreateNestedManyWithoutTransporterInput
    suppliedProducts?: ProductUncheckedCreateNestedManyWithoutSupplierInput
    customerTickets?: TicketUncheckedCreateNestedManyWithoutCustomerInput
    transporterTickets?: TicketUncheckedCreateNestedManyWithoutTransporterInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutCompanyInput
    importJobs?: ImportJobUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutSentTicketsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutSentTicketsInput, CompanyUncheckedCreateWithoutSentTicketsInput>
  }

  export type CompanyCreateWithoutCustomerTicketsInput = {
    id?: string
    name: string
    vatNumber: string
    email?: string | null
    phone?: string | null
    country?: string | null
    city?: string | null
    postalCode?: string | null
    address1?: string | null
    address2?: string | null
    roles?: CompanyCreaterolesInput | $Enums.CompanyRole[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutCompanyInput
    deliveryPlants?: DeliveryPlantCreateNestedManyWithoutCompanyInput
    vehicles?: VehicleCreateNestedManyWithoutTransporterInput
    suppliedProducts?: ProductCreateNestedManyWithoutSupplierInput
    sentTickets?: TicketCreateNestedManyWithoutSupplierInput
    transporterTickets?: TicketCreateNestedManyWithoutTransporterInput
    apiKeys?: ApiKeyCreateNestedManyWithoutCompanyInput
    importJobs?: ImportJobCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutCustomerTicketsInput = {
    id?: string
    name: string
    vatNumber: string
    email?: string | null
    phone?: string | null
    country?: string | null
    city?: string | null
    postalCode?: string | null
    address1?: string | null
    address2?: string | null
    roles?: CompanyCreaterolesInput | $Enums.CompanyRole[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    deliveryPlants?: DeliveryPlantUncheckedCreateNestedManyWithoutCompanyInput
    vehicles?: VehicleUncheckedCreateNestedManyWithoutTransporterInput
    suppliedProducts?: ProductUncheckedCreateNestedManyWithoutSupplierInput
    sentTickets?: TicketUncheckedCreateNestedManyWithoutSupplierInput
    transporterTickets?: TicketUncheckedCreateNestedManyWithoutTransporterInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutCompanyInput
    importJobs?: ImportJobUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutCustomerTicketsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutCustomerTicketsInput, CompanyUncheckedCreateWithoutCustomerTicketsInput>
  }

  export type CompanyCreateWithoutTransporterTicketsInput = {
    id?: string
    name: string
    vatNumber: string
    email?: string | null
    phone?: string | null
    country?: string | null
    city?: string | null
    postalCode?: string | null
    address1?: string | null
    address2?: string | null
    roles?: CompanyCreaterolesInput | $Enums.CompanyRole[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutCompanyInput
    deliveryPlants?: DeliveryPlantCreateNestedManyWithoutCompanyInput
    vehicles?: VehicleCreateNestedManyWithoutTransporterInput
    suppliedProducts?: ProductCreateNestedManyWithoutSupplierInput
    sentTickets?: TicketCreateNestedManyWithoutSupplierInput
    customerTickets?: TicketCreateNestedManyWithoutCustomerInput
    apiKeys?: ApiKeyCreateNestedManyWithoutCompanyInput
    importJobs?: ImportJobCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutTransporterTicketsInput = {
    id?: string
    name: string
    vatNumber: string
    email?: string | null
    phone?: string | null
    country?: string | null
    city?: string | null
    postalCode?: string | null
    address1?: string | null
    address2?: string | null
    roles?: CompanyCreaterolesInput | $Enums.CompanyRole[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    deliveryPlants?: DeliveryPlantUncheckedCreateNestedManyWithoutCompanyInput
    vehicles?: VehicleUncheckedCreateNestedManyWithoutTransporterInput
    suppliedProducts?: ProductUncheckedCreateNestedManyWithoutSupplierInput
    sentTickets?: TicketUncheckedCreateNestedManyWithoutSupplierInput
    customerTickets?: TicketUncheckedCreateNestedManyWithoutCustomerInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutCompanyInput
    importJobs?: ImportJobUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutTransporterTicketsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutTransporterTicketsInput, CompanyUncheckedCreateWithoutTransporterTicketsInput>
  }

  export type VehicleCreateWithoutTicketsInput = {
    id?: string
    plateNumber: string
    vehicleType?: string | null
    tareWeight?: number | null
    maxLoadKg?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    transporter: CompanyCreateNestedOneWithoutVehiclesInput
  }

  export type VehicleUncheckedCreateWithoutTicketsInput = {
    id?: string
    plateNumber: string
    vehicleType?: string | null
    tareWeight?: number | null
    maxLoadKg?: number | null
    transporterId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type VehicleCreateOrConnectWithoutTicketsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutTicketsInput, VehicleUncheckedCreateWithoutTicketsInput>
  }

  export type DeliveryPlantCreateWithoutTicketsInput = {
    id?: string
    name: string
    country?: string | null
    city?: string | null
    postalCode?: string | null
    address1?: string | null
    address2?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    company: CompanyCreateNestedOneWithoutDeliveryPlantsInput
  }

  export type DeliveryPlantUncheckedCreateWithoutTicketsInput = {
    id?: string
    name: string
    country?: string | null
    city?: string | null
    postalCode?: string | null
    address1?: string | null
    address2?: string | null
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type DeliveryPlantCreateOrConnectWithoutTicketsInput = {
    where: DeliveryPlantWhereUniqueInput
    create: XOR<DeliveryPlantCreateWithoutTicketsInput, DeliveryPlantUncheckedCreateWithoutTicketsInput>
  }

  export type ProductCreateWithoutTicketsInput = {
    id?: string
    code: string
    description: string
    unit?: string | null
    density?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    supplier?: CompanyCreateNestedOneWithoutSuppliedProductsInput
  }

  export type ProductUncheckedCreateWithoutTicketsInput = {
    id?: string
    code: string
    description: string
    unit?: string | null
    density?: number | null
    supplierId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ProductCreateOrConnectWithoutTicketsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutTicketsInput, ProductUncheckedCreateWithoutTicketsInput>
  }

  export type TicketDocumentCreateWithoutTicketInput = {
    id?: string
    type: $Enums.DocType
    path: string
    createdAt?: Date | string
  }

  export type TicketDocumentUncheckedCreateWithoutTicketInput = {
    id?: string
    type: $Enums.DocType
    path: string
    createdAt?: Date | string
  }

  export type TicketDocumentCreateOrConnectWithoutTicketInput = {
    where: TicketDocumentWhereUniqueInput
    create: XOR<TicketDocumentCreateWithoutTicketInput, TicketDocumentUncheckedCreateWithoutTicketInput>
  }

  export type TicketDocumentCreateManyTicketInputEnvelope = {
    data: TicketDocumentCreateManyTicketInput | TicketDocumentCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type TicketEventLogCreateWithoutTicketInput = {
    id?: string
    actorId: string
    action: string
    from?: string | null
    to?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TicketEventLogUncheckedCreateWithoutTicketInput = {
    id?: string
    actorId: string
    action: string
    from?: string | null
    to?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TicketEventLogCreateOrConnectWithoutTicketInput = {
    where: TicketEventLogWhereUniqueInput
    create: XOR<TicketEventLogCreateWithoutTicketInput, TicketEventLogUncheckedCreateWithoutTicketInput>
  }

  export type TicketEventLogCreateManyTicketInputEnvelope = {
    data: TicketEventLogCreateManyTicketInput | TicketEventLogCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutSentTicketsInput = {
    update: XOR<CompanyUpdateWithoutSentTicketsInput, CompanyUncheckedUpdateWithoutSentTicketsInput>
    create: XOR<CompanyCreateWithoutSentTicketsInput, CompanyUncheckedCreateWithoutSentTicketsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutSentTicketsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutSentTicketsInput, CompanyUncheckedUpdateWithoutSentTicketsInput>
  }

  export type CompanyUpdateWithoutSentTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: CompanyUpdaterolesInput | $Enums.CompanyRole[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutCompanyNestedInput
    deliveryPlants?: DeliveryPlantUpdateManyWithoutCompanyNestedInput
    vehicles?: VehicleUpdateManyWithoutTransporterNestedInput
    suppliedProducts?: ProductUpdateManyWithoutSupplierNestedInput
    customerTickets?: TicketUpdateManyWithoutCustomerNestedInput
    transporterTickets?: TicketUpdateManyWithoutTransporterNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutCompanyNestedInput
    importJobs?: ImportJobUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutSentTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: CompanyUpdaterolesInput | $Enums.CompanyRole[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    deliveryPlants?: DeliveryPlantUncheckedUpdateManyWithoutCompanyNestedInput
    vehicles?: VehicleUncheckedUpdateManyWithoutTransporterNestedInput
    suppliedProducts?: ProductUncheckedUpdateManyWithoutSupplierNestedInput
    customerTickets?: TicketUncheckedUpdateManyWithoutCustomerNestedInput
    transporterTickets?: TicketUncheckedUpdateManyWithoutTransporterNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutCompanyNestedInput
    importJobs?: ImportJobUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUpsertWithoutCustomerTicketsInput = {
    update: XOR<CompanyUpdateWithoutCustomerTicketsInput, CompanyUncheckedUpdateWithoutCustomerTicketsInput>
    create: XOR<CompanyCreateWithoutCustomerTicketsInput, CompanyUncheckedCreateWithoutCustomerTicketsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutCustomerTicketsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutCustomerTicketsInput, CompanyUncheckedUpdateWithoutCustomerTicketsInput>
  }

  export type CompanyUpdateWithoutCustomerTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: CompanyUpdaterolesInput | $Enums.CompanyRole[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutCompanyNestedInput
    deliveryPlants?: DeliveryPlantUpdateManyWithoutCompanyNestedInput
    vehicles?: VehicleUpdateManyWithoutTransporterNestedInput
    suppliedProducts?: ProductUpdateManyWithoutSupplierNestedInput
    sentTickets?: TicketUpdateManyWithoutSupplierNestedInput
    transporterTickets?: TicketUpdateManyWithoutTransporterNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutCompanyNestedInput
    importJobs?: ImportJobUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutCustomerTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: CompanyUpdaterolesInput | $Enums.CompanyRole[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    deliveryPlants?: DeliveryPlantUncheckedUpdateManyWithoutCompanyNestedInput
    vehicles?: VehicleUncheckedUpdateManyWithoutTransporterNestedInput
    suppliedProducts?: ProductUncheckedUpdateManyWithoutSupplierNestedInput
    sentTickets?: TicketUncheckedUpdateManyWithoutSupplierNestedInput
    transporterTickets?: TicketUncheckedUpdateManyWithoutTransporterNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutCompanyNestedInput
    importJobs?: ImportJobUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUpsertWithoutTransporterTicketsInput = {
    update: XOR<CompanyUpdateWithoutTransporterTicketsInput, CompanyUncheckedUpdateWithoutTransporterTicketsInput>
    create: XOR<CompanyCreateWithoutTransporterTicketsInput, CompanyUncheckedCreateWithoutTransporterTicketsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutTransporterTicketsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutTransporterTicketsInput, CompanyUncheckedUpdateWithoutTransporterTicketsInput>
  }

  export type CompanyUpdateWithoutTransporterTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: CompanyUpdaterolesInput | $Enums.CompanyRole[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutCompanyNestedInput
    deliveryPlants?: DeliveryPlantUpdateManyWithoutCompanyNestedInput
    vehicles?: VehicleUpdateManyWithoutTransporterNestedInput
    suppliedProducts?: ProductUpdateManyWithoutSupplierNestedInput
    sentTickets?: TicketUpdateManyWithoutSupplierNestedInput
    customerTickets?: TicketUpdateManyWithoutCustomerNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutCompanyNestedInput
    importJobs?: ImportJobUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutTransporterTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: CompanyUpdaterolesInput | $Enums.CompanyRole[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    deliveryPlants?: DeliveryPlantUncheckedUpdateManyWithoutCompanyNestedInput
    vehicles?: VehicleUncheckedUpdateManyWithoutTransporterNestedInput
    suppliedProducts?: ProductUncheckedUpdateManyWithoutSupplierNestedInput
    sentTickets?: TicketUncheckedUpdateManyWithoutSupplierNestedInput
    customerTickets?: TicketUncheckedUpdateManyWithoutCustomerNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutCompanyNestedInput
    importJobs?: ImportJobUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type VehicleUpsertWithoutTicketsInput = {
    update: XOR<VehicleUpdateWithoutTicketsInput, VehicleUncheckedUpdateWithoutTicketsInput>
    create: XOR<VehicleCreateWithoutTicketsInput, VehicleUncheckedCreateWithoutTicketsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutTicketsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutTicketsInput, VehicleUncheckedUpdateWithoutTicketsInput>
  }

  export type VehicleUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    tareWeight?: NullableIntFieldUpdateOperationsInput | number | null
    maxLoadKg?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transporter?: CompanyUpdateOneRequiredWithoutVehiclesNestedInput
  }

  export type VehicleUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    tareWeight?: NullableIntFieldUpdateOperationsInput | number | null
    maxLoadKg?: NullableIntFieldUpdateOperationsInput | number | null
    transporterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DeliveryPlantUpsertWithoutTicketsInput = {
    update: XOR<DeliveryPlantUpdateWithoutTicketsInput, DeliveryPlantUncheckedUpdateWithoutTicketsInput>
    create: XOR<DeliveryPlantCreateWithoutTicketsInput, DeliveryPlantUncheckedCreateWithoutTicketsInput>
    where?: DeliveryPlantWhereInput
  }

  export type DeliveryPlantUpdateToOneWithWhereWithoutTicketsInput = {
    where?: DeliveryPlantWhereInput
    data: XOR<DeliveryPlantUpdateWithoutTicketsInput, DeliveryPlantUncheckedUpdateWithoutTicketsInput>
  }

  export type DeliveryPlantUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: CompanyUpdateOneRequiredWithoutDeliveryPlantsNestedInput
  }

  export type DeliveryPlantUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductUpsertWithoutTicketsInput = {
    update: XOR<ProductUpdateWithoutTicketsInput, ProductUncheckedUpdateWithoutTicketsInput>
    create: XOR<ProductCreateWithoutTicketsInput, ProductUncheckedCreateWithoutTicketsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutTicketsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutTicketsInput, ProductUncheckedUpdateWithoutTicketsInput>
  }

  export type ProductUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    density?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    supplier?: CompanyUpdateOneWithoutSuppliedProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    density?: NullableFloatFieldUpdateOperationsInput | number | null
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketDocumentUpsertWithWhereUniqueWithoutTicketInput = {
    where: TicketDocumentWhereUniqueInput
    update: XOR<TicketDocumentUpdateWithoutTicketInput, TicketDocumentUncheckedUpdateWithoutTicketInput>
    create: XOR<TicketDocumentCreateWithoutTicketInput, TicketDocumentUncheckedCreateWithoutTicketInput>
  }

  export type TicketDocumentUpdateWithWhereUniqueWithoutTicketInput = {
    where: TicketDocumentWhereUniqueInput
    data: XOR<TicketDocumentUpdateWithoutTicketInput, TicketDocumentUncheckedUpdateWithoutTicketInput>
  }

  export type TicketDocumentUpdateManyWithWhereWithoutTicketInput = {
    where: TicketDocumentScalarWhereInput
    data: XOR<TicketDocumentUpdateManyMutationInput, TicketDocumentUncheckedUpdateManyWithoutTicketInput>
  }

  export type TicketDocumentScalarWhereInput = {
    AND?: TicketDocumentScalarWhereInput | TicketDocumentScalarWhereInput[]
    OR?: TicketDocumentScalarWhereInput[]
    NOT?: TicketDocumentScalarWhereInput | TicketDocumentScalarWhereInput[]
    id?: StringFilter<"TicketDocument"> | string
    ticketId?: StringFilter<"TicketDocument"> | string
    type?: EnumDocTypeFilter<"TicketDocument"> | $Enums.DocType
    path?: StringFilter<"TicketDocument"> | string
    createdAt?: DateTimeFilter<"TicketDocument"> | Date | string
  }

  export type TicketEventLogUpsertWithWhereUniqueWithoutTicketInput = {
    where: TicketEventLogWhereUniqueInput
    update: XOR<TicketEventLogUpdateWithoutTicketInput, TicketEventLogUncheckedUpdateWithoutTicketInput>
    create: XOR<TicketEventLogCreateWithoutTicketInput, TicketEventLogUncheckedCreateWithoutTicketInput>
  }

  export type TicketEventLogUpdateWithWhereUniqueWithoutTicketInput = {
    where: TicketEventLogWhereUniqueInput
    data: XOR<TicketEventLogUpdateWithoutTicketInput, TicketEventLogUncheckedUpdateWithoutTicketInput>
  }

  export type TicketEventLogUpdateManyWithWhereWithoutTicketInput = {
    where: TicketEventLogScalarWhereInput
    data: XOR<TicketEventLogUpdateManyMutationInput, TicketEventLogUncheckedUpdateManyWithoutTicketInput>
  }

  export type TicketEventLogScalarWhereInput = {
    AND?: TicketEventLogScalarWhereInput | TicketEventLogScalarWhereInput[]
    OR?: TicketEventLogScalarWhereInput[]
    NOT?: TicketEventLogScalarWhereInput | TicketEventLogScalarWhereInput[]
    id?: StringFilter<"TicketEventLog"> | string
    ticketId?: StringFilter<"TicketEventLog"> | string
    actorId?: StringFilter<"TicketEventLog"> | string
    action?: StringFilter<"TicketEventLog"> | string
    from?: StringNullableFilter<"TicketEventLog"> | string | null
    to?: StringNullableFilter<"TicketEventLog"> | string | null
    meta?: JsonNullableFilter<"TicketEventLog">
    createdAt?: DateTimeFilter<"TicketEventLog"> | Date | string
  }

  export type TicketCreateWithoutDocumentsInput = {
    id?: string
    number: string
    externalCode?: string | null
    direction: $Enums.TicketDirection
    status?: $Enums.TicketStatus
    grossWeight?: number | null
    tareWeight?: number | null
    netWeight?: number | null
    unit?: string | null
    notes?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: Date | string | null
    shareToken?: string | null
    sharedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    supplier: CompanyCreateNestedOneWithoutSentTicketsInput
    customer: CompanyCreateNestedOneWithoutCustomerTicketsInput
    transporter: CompanyCreateNestedOneWithoutTransporterTicketsInput
    vehicle: VehicleCreateNestedOneWithoutTicketsInput
    deliveryPlant: DeliveryPlantCreateNestedOneWithoutTicketsInput
    product: ProductCreateNestedOneWithoutTicketsInput
    events?: TicketEventLogCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutDocumentsInput = {
    id?: string
    number: string
    supplierId: string
    customerId: string
    transporterId: string
    vehicleId: string
    deliveryPlantId: string
    productId: string
    externalCode?: string | null
    direction: $Enums.TicketDirection
    status?: $Enums.TicketStatus
    grossWeight?: number | null
    tareWeight?: number | null
    netWeight?: number | null
    unit?: string | null
    notes?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: Date | string | null
    shareToken?: string | null
    sharedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    events?: TicketEventLogUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutDocumentsInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutDocumentsInput, TicketUncheckedCreateWithoutDocumentsInput>
  }

  export type TicketUpsertWithoutDocumentsInput = {
    update: XOR<TicketUpdateWithoutDocumentsInput, TicketUncheckedUpdateWithoutDocumentsInput>
    create: XOR<TicketCreateWithoutDocumentsInput, TicketUncheckedCreateWithoutDocumentsInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutDocumentsInput, TicketUncheckedUpdateWithoutDocumentsInput>
  }

  export type TicketUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: EnumTicketDirectionFieldUpdateOperationsInput | $Enums.TicketDirection
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    tareWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    netWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    sharedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    supplier?: CompanyUpdateOneRequiredWithoutSentTicketsNestedInput
    customer?: CompanyUpdateOneRequiredWithoutCustomerTicketsNestedInput
    transporter?: CompanyUpdateOneRequiredWithoutTransporterTicketsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutTicketsNestedInput
    deliveryPlant?: DeliveryPlantUpdateOneRequiredWithoutTicketsNestedInput
    product?: ProductUpdateOneRequiredWithoutTicketsNestedInput
    events?: TicketEventLogUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    transporterId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    deliveryPlantId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: EnumTicketDirectionFieldUpdateOperationsInput | $Enums.TicketDirection
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    tareWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    netWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    sharedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    events?: TicketEventLogUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateWithoutEventsInput = {
    id?: string
    number: string
    externalCode?: string | null
    direction: $Enums.TicketDirection
    status?: $Enums.TicketStatus
    grossWeight?: number | null
    tareWeight?: number | null
    netWeight?: number | null
    unit?: string | null
    notes?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: Date | string | null
    shareToken?: string | null
    sharedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    supplier: CompanyCreateNestedOneWithoutSentTicketsInput
    customer: CompanyCreateNestedOneWithoutCustomerTicketsInput
    transporter: CompanyCreateNestedOneWithoutTransporterTicketsInput
    vehicle: VehicleCreateNestedOneWithoutTicketsInput
    deliveryPlant: DeliveryPlantCreateNestedOneWithoutTicketsInput
    product: ProductCreateNestedOneWithoutTicketsInput
    documents?: TicketDocumentCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutEventsInput = {
    id?: string
    number: string
    supplierId: string
    customerId: string
    transporterId: string
    vehicleId: string
    deliveryPlantId: string
    productId: string
    externalCode?: string | null
    direction: $Enums.TicketDirection
    status?: $Enums.TicketStatus
    grossWeight?: number | null
    tareWeight?: number | null
    netWeight?: number | null
    unit?: string | null
    notes?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: Date | string | null
    shareToken?: string | null
    sharedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    documents?: TicketDocumentUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutEventsInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutEventsInput, TicketUncheckedCreateWithoutEventsInput>
  }

  export type TicketUpsertWithoutEventsInput = {
    update: XOR<TicketUpdateWithoutEventsInput, TicketUncheckedUpdateWithoutEventsInput>
    create: XOR<TicketCreateWithoutEventsInput, TicketUncheckedCreateWithoutEventsInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutEventsInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutEventsInput, TicketUncheckedUpdateWithoutEventsInput>
  }

  export type TicketUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: EnumTicketDirectionFieldUpdateOperationsInput | $Enums.TicketDirection
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    tareWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    netWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    sharedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    supplier?: CompanyUpdateOneRequiredWithoutSentTicketsNestedInput
    customer?: CompanyUpdateOneRequiredWithoutCustomerTicketsNestedInput
    transporter?: CompanyUpdateOneRequiredWithoutTransporterTicketsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutTicketsNestedInput
    deliveryPlant?: DeliveryPlantUpdateOneRequiredWithoutTicketsNestedInput
    product?: ProductUpdateOneRequiredWithoutTicketsNestedInput
    documents?: TicketDocumentUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    transporterId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    deliveryPlantId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: EnumTicketDirectionFieldUpdateOperationsInput | $Enums.TicketDirection
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    tareWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    netWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    sharedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: TicketDocumentUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type CompanyCreateWithoutApiKeysInput = {
    id?: string
    name: string
    vatNumber: string
    email?: string | null
    phone?: string | null
    country?: string | null
    city?: string | null
    postalCode?: string | null
    address1?: string | null
    address2?: string | null
    roles?: CompanyCreaterolesInput | $Enums.CompanyRole[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutCompanyInput
    deliveryPlants?: DeliveryPlantCreateNestedManyWithoutCompanyInput
    vehicles?: VehicleCreateNestedManyWithoutTransporterInput
    suppliedProducts?: ProductCreateNestedManyWithoutSupplierInput
    sentTickets?: TicketCreateNestedManyWithoutSupplierInput
    customerTickets?: TicketCreateNestedManyWithoutCustomerInput
    transporterTickets?: TicketCreateNestedManyWithoutTransporterInput
    importJobs?: ImportJobCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutApiKeysInput = {
    id?: string
    name: string
    vatNumber: string
    email?: string | null
    phone?: string | null
    country?: string | null
    city?: string | null
    postalCode?: string | null
    address1?: string | null
    address2?: string | null
    roles?: CompanyCreaterolesInput | $Enums.CompanyRole[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    deliveryPlants?: DeliveryPlantUncheckedCreateNestedManyWithoutCompanyInput
    vehicles?: VehicleUncheckedCreateNestedManyWithoutTransporterInput
    suppliedProducts?: ProductUncheckedCreateNestedManyWithoutSupplierInput
    sentTickets?: TicketUncheckedCreateNestedManyWithoutSupplierInput
    customerTickets?: TicketUncheckedCreateNestedManyWithoutCustomerInput
    transporterTickets?: TicketUncheckedCreateNestedManyWithoutTransporterInput
    importJobs?: ImportJobUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutApiKeysInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutApiKeysInput, CompanyUncheckedCreateWithoutApiKeysInput>
  }

  export type CompanyUpsertWithoutApiKeysInput = {
    update: XOR<CompanyUpdateWithoutApiKeysInput, CompanyUncheckedUpdateWithoutApiKeysInput>
    create: XOR<CompanyCreateWithoutApiKeysInput, CompanyUncheckedCreateWithoutApiKeysInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutApiKeysInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutApiKeysInput, CompanyUncheckedUpdateWithoutApiKeysInput>
  }

  export type CompanyUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: CompanyUpdaterolesInput | $Enums.CompanyRole[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutCompanyNestedInput
    deliveryPlants?: DeliveryPlantUpdateManyWithoutCompanyNestedInput
    vehicles?: VehicleUpdateManyWithoutTransporterNestedInput
    suppliedProducts?: ProductUpdateManyWithoutSupplierNestedInput
    sentTickets?: TicketUpdateManyWithoutSupplierNestedInput
    customerTickets?: TicketUpdateManyWithoutCustomerNestedInput
    transporterTickets?: TicketUpdateManyWithoutTransporterNestedInput
    importJobs?: ImportJobUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: CompanyUpdaterolesInput | $Enums.CompanyRole[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    deliveryPlants?: DeliveryPlantUncheckedUpdateManyWithoutCompanyNestedInput
    vehicles?: VehicleUncheckedUpdateManyWithoutTransporterNestedInput
    suppliedProducts?: ProductUncheckedUpdateManyWithoutSupplierNestedInput
    sentTickets?: TicketUncheckedUpdateManyWithoutSupplierNestedInput
    customerTickets?: TicketUncheckedUpdateManyWithoutCustomerNestedInput
    transporterTickets?: TicketUncheckedUpdateManyWithoutTransporterNestedInput
    importJobs?: ImportJobUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type UserCreateWithoutImportJobsInput = {
    id?: string
    email: string
    name: string
    password?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string | null
    company?: CompanyCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutImportJobsInput = {
    id?: string
    email: string
    name: string
    password?: string | null
    companyId?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserCreateOrConnectWithoutImportJobsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutImportJobsInput, UserUncheckedCreateWithoutImportJobsInput>
  }

  export type CompanyCreateWithoutImportJobsInput = {
    id?: string
    name: string
    vatNumber: string
    email?: string | null
    phone?: string | null
    country?: string | null
    city?: string | null
    postalCode?: string | null
    address1?: string | null
    address2?: string | null
    roles?: CompanyCreaterolesInput | $Enums.CompanyRole[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutCompanyInput
    deliveryPlants?: DeliveryPlantCreateNestedManyWithoutCompanyInput
    vehicles?: VehicleCreateNestedManyWithoutTransporterInput
    suppliedProducts?: ProductCreateNestedManyWithoutSupplierInput
    sentTickets?: TicketCreateNestedManyWithoutSupplierInput
    customerTickets?: TicketCreateNestedManyWithoutCustomerInput
    transporterTickets?: TicketCreateNestedManyWithoutTransporterInput
    apiKeys?: ApiKeyCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutImportJobsInput = {
    id?: string
    name: string
    vatNumber: string
    email?: string | null
    phone?: string | null
    country?: string | null
    city?: string | null
    postalCode?: string | null
    address1?: string | null
    address2?: string | null
    roles?: CompanyCreaterolesInput | $Enums.CompanyRole[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    deliveryPlants?: DeliveryPlantUncheckedCreateNestedManyWithoutCompanyInput
    vehicles?: VehicleUncheckedCreateNestedManyWithoutTransporterInput
    suppliedProducts?: ProductUncheckedCreateNestedManyWithoutSupplierInput
    sentTickets?: TicketUncheckedCreateNestedManyWithoutSupplierInput
    customerTickets?: TicketUncheckedCreateNestedManyWithoutCustomerInput
    transporterTickets?: TicketUncheckedCreateNestedManyWithoutTransporterInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutImportJobsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutImportJobsInput, CompanyUncheckedCreateWithoutImportJobsInput>
  }

  export type UserUpsertWithoutImportJobsInput = {
    update: XOR<UserUpdateWithoutImportJobsInput, UserUncheckedUpdateWithoutImportJobsInput>
    create: XOR<UserCreateWithoutImportJobsInput, UserUncheckedCreateWithoutImportJobsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutImportJobsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutImportJobsInput, UserUncheckedUpdateWithoutImportJobsInput>
  }

  export type UserUpdateWithoutImportJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: CompanyUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutImportJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompanyUpsertWithoutImportJobsInput = {
    update: XOR<CompanyUpdateWithoutImportJobsInput, CompanyUncheckedUpdateWithoutImportJobsInput>
    create: XOR<CompanyCreateWithoutImportJobsInput, CompanyUncheckedCreateWithoutImportJobsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutImportJobsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutImportJobsInput, CompanyUncheckedUpdateWithoutImportJobsInput>
  }

  export type CompanyUpdateWithoutImportJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: CompanyUpdaterolesInput | $Enums.CompanyRole[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutCompanyNestedInput
    deliveryPlants?: DeliveryPlantUpdateManyWithoutCompanyNestedInput
    vehicles?: VehicleUpdateManyWithoutTransporterNestedInput
    suppliedProducts?: ProductUpdateManyWithoutSupplierNestedInput
    sentTickets?: TicketUpdateManyWithoutSupplierNestedInput
    customerTickets?: TicketUpdateManyWithoutCustomerNestedInput
    transporterTickets?: TicketUpdateManyWithoutTransporterNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutImportJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: CompanyUpdaterolesInput | $Enums.CompanyRole[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    deliveryPlants?: DeliveryPlantUncheckedUpdateManyWithoutCompanyNestedInput
    vehicles?: VehicleUncheckedUpdateManyWithoutTransporterNestedInput
    suppliedProducts?: ProductUncheckedUpdateManyWithoutSupplierNestedInput
    sentTickets?: TicketUncheckedUpdateManyWithoutSupplierNestedInput
    customerTickets?: TicketUncheckedUpdateManyWithoutCustomerNestedInput
    transporterTickets?: TicketUncheckedUpdateManyWithoutTransporterNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type ImportJobCreateManyUserInput = {
    id?: string
    companyId?: string | null
    entity: string
    mapping: JsonNullValueInput | InputJsonValue
    source?: string | null
    success?: boolean | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ImportJobUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    mapping?: JsonNullValueInput | InputJsonValue
    source?: NullableStringFieldUpdateOperationsInput | string | null
    success?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutImportJobsNestedInput
  }

  export type ImportJobUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    entity?: StringFieldUpdateOperationsInput | string
    mapping?: JsonNullValueInput | InputJsonValue
    source?: NullableStringFieldUpdateOperationsInput | string | null
    success?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImportJobUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    entity?: StringFieldUpdateOperationsInput | string
    mapping?: JsonNullValueInput | InputJsonValue
    source?: NullableStringFieldUpdateOperationsInput | string | null
    success?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyCompanyInput = {
    id?: string
    email: string
    name: string
    password?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type DeliveryPlantCreateManyCompanyInput = {
    id?: string
    name: string
    country?: string | null
    city?: string | null
    postalCode?: string | null
    address1?: string | null
    address2?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type VehicleCreateManyTransporterInput = {
    id?: string
    plateNumber: string
    vehicleType?: string | null
    tareWeight?: number | null
    maxLoadKg?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ProductCreateManySupplierInput = {
    id?: string
    code: string
    description: string
    unit?: string | null
    density?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TicketCreateManySupplierInput = {
    id?: string
    number: string
    customerId: string
    transporterId: string
    vehicleId: string
    deliveryPlantId: string
    productId: string
    externalCode?: string | null
    direction: $Enums.TicketDirection
    status?: $Enums.TicketStatus
    grossWeight?: number | null
    tareWeight?: number | null
    netWeight?: number | null
    unit?: string | null
    notes?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: Date | string | null
    shareToken?: string | null
    sharedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TicketCreateManyCustomerInput = {
    id?: string
    number: string
    supplierId: string
    transporterId: string
    vehicleId: string
    deliveryPlantId: string
    productId: string
    externalCode?: string | null
    direction: $Enums.TicketDirection
    status?: $Enums.TicketStatus
    grossWeight?: number | null
    tareWeight?: number | null
    netWeight?: number | null
    unit?: string | null
    notes?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: Date | string | null
    shareToken?: string | null
    sharedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TicketCreateManyTransporterInput = {
    id?: string
    number: string
    supplierId: string
    customerId: string
    vehicleId: string
    deliveryPlantId: string
    productId: string
    externalCode?: string | null
    direction: $Enums.TicketDirection
    status?: $Enums.TicketStatus
    grossWeight?: number | null
    tareWeight?: number | null
    netWeight?: number | null
    unit?: string | null
    notes?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: Date | string | null
    shareToken?: string | null
    sharedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ApiKeyCreateManyCompanyInput = {
    id?: string
    name?: string | null
    keyHash: string
    lastUsedAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ImportJobCreateManyCompanyInput = {
    id?: string
    userId?: string | null
    entity: string
    mapping: JsonNullValueInput | InputJsonValue
    source?: string | null
    success?: boolean | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    importJobs?: ImportJobUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    importJobs?: ImportJobUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DeliveryPlantUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tickets?: TicketUpdateManyWithoutDeliveryPlantNestedInput
  }

  export type DeliveryPlantUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tickets?: TicketUncheckedUpdateManyWithoutDeliveryPlantNestedInput
  }

  export type DeliveryPlantUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehicleUpdateWithoutTransporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    tareWeight?: NullableIntFieldUpdateOperationsInput | number | null
    maxLoadKg?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tickets?: TicketUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutTransporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    tareWeight?: NullableIntFieldUpdateOperationsInput | number | null
    maxLoadKg?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tickets?: TicketUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateManyWithoutTransporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    tareWeight?: NullableIntFieldUpdateOperationsInput | number | null
    maxLoadKg?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    density?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tickets?: TicketUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    density?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tickets?: TicketUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    density?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: EnumTicketDirectionFieldUpdateOperationsInput | $Enums.TicketDirection
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    tareWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    netWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    sharedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CompanyUpdateOneRequiredWithoutCustomerTicketsNestedInput
    transporter?: CompanyUpdateOneRequiredWithoutTransporterTicketsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutTicketsNestedInput
    deliveryPlant?: DeliveryPlantUpdateOneRequiredWithoutTicketsNestedInput
    product?: ProductUpdateOneRequiredWithoutTicketsNestedInput
    documents?: TicketDocumentUpdateManyWithoutTicketNestedInput
    events?: TicketEventLogUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    transporterId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    deliveryPlantId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: EnumTicketDirectionFieldUpdateOperationsInput | $Enums.TicketDirection
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    tareWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    netWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    sharedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: TicketDocumentUncheckedUpdateManyWithoutTicketNestedInput
    events?: TicketEventLogUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    transporterId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    deliveryPlantId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: EnumTicketDirectionFieldUpdateOperationsInput | $Enums.TicketDirection
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    tareWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    netWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    sharedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: EnumTicketDirectionFieldUpdateOperationsInput | $Enums.TicketDirection
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    tareWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    netWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    sharedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    supplier?: CompanyUpdateOneRequiredWithoutSentTicketsNestedInput
    transporter?: CompanyUpdateOneRequiredWithoutTransporterTicketsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutTicketsNestedInput
    deliveryPlant?: DeliveryPlantUpdateOneRequiredWithoutTicketsNestedInput
    product?: ProductUpdateOneRequiredWithoutTicketsNestedInput
    documents?: TicketDocumentUpdateManyWithoutTicketNestedInput
    events?: TicketEventLogUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    transporterId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    deliveryPlantId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: EnumTicketDirectionFieldUpdateOperationsInput | $Enums.TicketDirection
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    tareWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    netWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    sharedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: TicketDocumentUncheckedUpdateManyWithoutTicketNestedInput
    events?: TicketEventLogUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    transporterId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    deliveryPlantId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: EnumTicketDirectionFieldUpdateOperationsInput | $Enums.TicketDirection
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    tareWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    netWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    sharedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketUpdateWithoutTransporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: EnumTicketDirectionFieldUpdateOperationsInput | $Enums.TicketDirection
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    tareWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    netWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    sharedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    supplier?: CompanyUpdateOneRequiredWithoutSentTicketsNestedInput
    customer?: CompanyUpdateOneRequiredWithoutCustomerTicketsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutTicketsNestedInput
    deliveryPlant?: DeliveryPlantUpdateOneRequiredWithoutTicketsNestedInput
    product?: ProductUpdateOneRequiredWithoutTicketsNestedInput
    documents?: TicketDocumentUpdateManyWithoutTicketNestedInput
    events?: TicketEventLogUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutTransporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    deliveryPlantId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: EnumTicketDirectionFieldUpdateOperationsInput | $Enums.TicketDirection
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    tareWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    netWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    sharedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: TicketDocumentUncheckedUpdateManyWithoutTicketNestedInput
    events?: TicketEventLogUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutTransporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    deliveryPlantId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: EnumTicketDirectionFieldUpdateOperationsInput | $Enums.TicketDirection
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    tareWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    netWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    sharedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApiKeyUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    keyHash?: StringFieldUpdateOperationsInput | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    keyHash?: StringFieldUpdateOperationsInput | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    keyHash?: StringFieldUpdateOperationsInput | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImportJobUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    mapping?: JsonNullValueInput | InputJsonValue
    source?: NullableStringFieldUpdateOperationsInput | string | null
    success?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutImportJobsNestedInput
  }

  export type ImportJobUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    entity?: StringFieldUpdateOperationsInput | string
    mapping?: JsonNullValueInput | InputJsonValue
    source?: NullableStringFieldUpdateOperationsInput | string | null
    success?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImportJobUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    entity?: StringFieldUpdateOperationsInput | string
    mapping?: JsonNullValueInput | InputJsonValue
    source?: NullableStringFieldUpdateOperationsInput | string | null
    success?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyDeliveryPlantInput = {
    id?: string
    number: string
    supplierId: string
    customerId: string
    transporterId: string
    vehicleId: string
    productId: string
    externalCode?: string | null
    direction: $Enums.TicketDirection
    status?: $Enums.TicketStatus
    grossWeight?: number | null
    tareWeight?: number | null
    netWeight?: number | null
    unit?: string | null
    notes?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: Date | string | null
    shareToken?: string | null
    sharedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TicketUpdateWithoutDeliveryPlantInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: EnumTicketDirectionFieldUpdateOperationsInput | $Enums.TicketDirection
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    tareWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    netWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    sharedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    supplier?: CompanyUpdateOneRequiredWithoutSentTicketsNestedInput
    customer?: CompanyUpdateOneRequiredWithoutCustomerTicketsNestedInput
    transporter?: CompanyUpdateOneRequiredWithoutTransporterTicketsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutTicketsNestedInput
    product?: ProductUpdateOneRequiredWithoutTicketsNestedInput
    documents?: TicketDocumentUpdateManyWithoutTicketNestedInput
    events?: TicketEventLogUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutDeliveryPlantInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    transporterId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: EnumTicketDirectionFieldUpdateOperationsInput | $Enums.TicketDirection
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    tareWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    netWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    sharedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: TicketDocumentUncheckedUpdateManyWithoutTicketNestedInput
    events?: TicketEventLogUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutDeliveryPlantInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    transporterId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: EnumTicketDirectionFieldUpdateOperationsInput | $Enums.TicketDirection
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    tareWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    netWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    sharedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketCreateManyVehicleInput = {
    id?: string
    number: string
    supplierId: string
    customerId: string
    transporterId: string
    deliveryPlantId: string
    productId: string
    externalCode?: string | null
    direction: $Enums.TicketDirection
    status?: $Enums.TicketStatus
    grossWeight?: number | null
    tareWeight?: number | null
    netWeight?: number | null
    unit?: string | null
    notes?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: Date | string | null
    shareToken?: string | null
    sharedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TicketUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: EnumTicketDirectionFieldUpdateOperationsInput | $Enums.TicketDirection
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    tareWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    netWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    sharedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    supplier?: CompanyUpdateOneRequiredWithoutSentTicketsNestedInput
    customer?: CompanyUpdateOneRequiredWithoutCustomerTicketsNestedInput
    transporter?: CompanyUpdateOneRequiredWithoutTransporterTicketsNestedInput
    deliveryPlant?: DeliveryPlantUpdateOneRequiredWithoutTicketsNestedInput
    product?: ProductUpdateOneRequiredWithoutTicketsNestedInput
    documents?: TicketDocumentUpdateManyWithoutTicketNestedInput
    events?: TicketEventLogUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    transporterId?: StringFieldUpdateOperationsInput | string
    deliveryPlantId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: EnumTicketDirectionFieldUpdateOperationsInput | $Enums.TicketDirection
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    tareWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    netWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    sharedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: TicketDocumentUncheckedUpdateManyWithoutTicketNestedInput
    events?: TicketEventLogUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    transporterId?: StringFieldUpdateOperationsInput | string
    deliveryPlantId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: EnumTicketDirectionFieldUpdateOperationsInput | $Enums.TicketDirection
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    tareWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    netWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    sharedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketCreateManyProductInput = {
    id?: string
    number: string
    supplierId: string
    customerId: string
    transporterId: string
    vehicleId: string
    deliveryPlantId: string
    externalCode?: string | null
    direction: $Enums.TicketDirection
    status?: $Enums.TicketStatus
    grossWeight?: number | null
    tareWeight?: number | null
    netWeight?: number | null
    unit?: string | null
    notes?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: Date | string | null
    shareToken?: string | null
    sharedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TicketUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: EnumTicketDirectionFieldUpdateOperationsInput | $Enums.TicketDirection
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    tareWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    netWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    sharedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    supplier?: CompanyUpdateOneRequiredWithoutSentTicketsNestedInput
    customer?: CompanyUpdateOneRequiredWithoutCustomerTicketsNestedInput
    transporter?: CompanyUpdateOneRequiredWithoutTransporterTicketsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutTicketsNestedInput
    deliveryPlant?: DeliveryPlantUpdateOneRequiredWithoutTicketsNestedInput
    documents?: TicketDocumentUpdateManyWithoutTicketNestedInput
    events?: TicketEventLogUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    transporterId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    deliveryPlantId?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: EnumTicketDirectionFieldUpdateOperationsInput | $Enums.TicketDirection
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    tareWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    netWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    sharedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: TicketDocumentUncheckedUpdateManyWithoutTicketNestedInput
    events?: TicketEventLogUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    transporterId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    deliveryPlantId?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: EnumTicketDirectionFieldUpdateOperationsInput | $Enums.TicketDirection
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    grossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    tareWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    netWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    weighedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    sharedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketDocumentCreateManyTicketInput = {
    id?: string
    type: $Enums.DocType
    path: string
    createdAt?: Date | string
  }

  export type TicketEventLogCreateManyTicketInput = {
    id?: string
    actorId: string
    action: string
    from?: string | null
    to?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TicketDocumentUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocTypeFieldUpdateOperationsInput | $Enums.DocType
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketDocumentUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocTypeFieldUpdateOperationsInput | $Enums.DocType
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketDocumentUncheckedUpdateManyWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocTypeFieldUpdateOperationsInput | $Enums.DocType
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketEventLogUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    from?: NullableStringFieldUpdateOperationsInput | string | null
    to?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketEventLogUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    from?: NullableStringFieldUpdateOperationsInput | string | null
    to?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketEventLogUncheckedUpdateManyWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    from?: NullableStringFieldUpdateOperationsInput | string | null
    to?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
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