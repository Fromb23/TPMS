
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
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Lecturer
 * 
 */
export type Lecturer = $Result.DefaultSelection<Prisma.$LecturerPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Zone
 * 
 */
export type Zone = $Result.DefaultSelection<Prisma.$ZonePayload>
/**
 * Model School
 * 
 */
export type School = $Result.DefaultSelection<Prisma.$SchoolPayload>
/**
 * Model TpApplication
 * 
 */
export type TpApplication = $Result.DefaultSelection<Prisma.$TpApplicationPayload>
/**
 * Model LecturerZoneAssigned
 * 
 */
export type LecturerZoneAssigned = $Result.DefaultSelection<Prisma.$LecturerZoneAssignedPayload>
/**
 * Model LecturerZoneRequest
 * 
 */
export type LecturerZoneRequest = $Result.DefaultSelection<Prisma.$LecturerZoneRequestPayload>
/**
 * Model SupervisionSchedule
 * 
 */
export type SupervisionSchedule = $Result.DefaultSelection<Prisma.$SupervisionSchedulePayload>
/**
 * Model LessonPlan
 * 
 */
export type LessonPlan = $Result.DefaultSelection<Prisma.$LessonPlanPayload>
/**
 * Model SupervisionVisit
 * 
 */
export type SupervisionVisit = $Result.DefaultSelection<Prisma.$SupervisionVisitPayload>
/**
 * Model Alert
 * 
 */
export type Alert = $Result.DefaultSelection<Prisma.$AlertPayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>
/**
 * Model FinalDocument
 * 
 */
export type FinalDocument = $Result.DefaultSelection<Prisma.$FinalDocumentPayload>
/**
 * Model Grade
 * 
 */
export type Grade = $Result.DefaultSelection<Prisma.$GradePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  STUDENT: 'STUDENT',
  LECTURER: 'LECTURER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const AlertType: {
  GENERAL: 'GENERAL',
  WARNING: 'WARNING',
  INFO: 'INFO'
};

export type AlertType = (typeof AlertType)[keyof typeof AlertType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type AlertType = $Enums.AlertType

export const AlertType: typeof $Enums.AlertType

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lecturer`: Exposes CRUD operations for the **Lecturer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lecturers
    * const lecturers = await prisma.lecturer.findMany()
    * ```
    */
  get lecturer(): Prisma.LecturerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zone`: Exposes CRUD operations for the **Zone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Zones
    * const zones = await prisma.zone.findMany()
    * ```
    */
  get zone(): Prisma.ZoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.school`: Exposes CRUD operations for the **School** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.school.findMany()
    * ```
    */
  get school(): Prisma.SchoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tpApplication`: Exposes CRUD operations for the **TpApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TpApplications
    * const tpApplications = await prisma.tpApplication.findMany()
    * ```
    */
  get tpApplication(): Prisma.TpApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lecturerZoneAssigned`: Exposes CRUD operations for the **LecturerZoneAssigned** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LecturerZoneAssigneds
    * const lecturerZoneAssigneds = await prisma.lecturerZoneAssigned.findMany()
    * ```
    */
  get lecturerZoneAssigned(): Prisma.LecturerZoneAssignedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lecturerZoneRequest`: Exposes CRUD operations for the **LecturerZoneRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LecturerZoneRequests
    * const lecturerZoneRequests = await prisma.lecturerZoneRequest.findMany()
    * ```
    */
  get lecturerZoneRequest(): Prisma.LecturerZoneRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supervisionSchedule`: Exposes CRUD operations for the **SupervisionSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupervisionSchedules
    * const supervisionSchedules = await prisma.supervisionSchedule.findMany()
    * ```
    */
  get supervisionSchedule(): Prisma.SupervisionScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lessonPlan`: Exposes CRUD operations for the **LessonPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LessonPlans
    * const lessonPlans = await prisma.lessonPlan.findMany()
    * ```
    */
  get lessonPlan(): Prisma.LessonPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supervisionVisit`: Exposes CRUD operations for the **SupervisionVisit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupervisionVisits
    * const supervisionVisits = await prisma.supervisionVisit.findMany()
    * ```
    */
  get supervisionVisit(): Prisma.SupervisionVisitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alert`: Exposes CRUD operations for the **Alert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alerts
    * const alerts = await prisma.alert.findMany()
    * ```
    */
  get alert(): Prisma.AlertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.finalDocument`: Exposes CRUD operations for the **FinalDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FinalDocuments
    * const finalDocuments = await prisma.finalDocument.findMany()
    * ```
    */
  get finalDocument(): Prisma.FinalDocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.grade`: Exposes CRUD operations for the **Grade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Grades
    * const grades = await prisma.grade.findMany()
    * ```
    */
  get grade(): Prisma.GradeDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
    Student: 'Student',
    Lecturer: 'Lecturer',
    Admin: 'Admin',
    Zone: 'Zone',
    School: 'School',
    TpApplication: 'TpApplication',
    LecturerZoneAssigned: 'LecturerZoneAssigned',
    LecturerZoneRequest: 'LecturerZoneRequest',
    SupervisionSchedule: 'SupervisionSchedule',
    LessonPlan: 'LessonPlan',
    SupervisionVisit: 'SupervisionVisit',
    Alert: 'Alert',
    Report: 'Report',
    FinalDocument: 'FinalDocument',
    Grade: 'Grade'
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
      modelProps: "user" | "student" | "lecturer" | "admin" | "zone" | "school" | "tpApplication" | "lecturerZoneAssigned" | "lecturerZoneRequest" | "supervisionSchedule" | "lessonPlan" | "supervisionVisit" | "alert" | "report" | "finalDocument" | "grade"
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
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Lecturer: {
        payload: Prisma.$LecturerPayload<ExtArgs>
        fields: Prisma.LecturerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LecturerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LecturerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload>
          }
          findFirst: {
            args: Prisma.LecturerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LecturerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload>
          }
          findMany: {
            args: Prisma.LecturerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload>[]
          }
          create: {
            args: Prisma.LecturerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload>
          }
          createMany: {
            args: Prisma.LecturerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LecturerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload>
          }
          update: {
            args: Prisma.LecturerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload>
          }
          deleteMany: {
            args: Prisma.LecturerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LecturerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LecturerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload>
          }
          aggregate: {
            args: Prisma.LecturerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLecturer>
          }
          groupBy: {
            args: Prisma.LecturerGroupByArgs<ExtArgs>
            result: $Utils.Optional<LecturerGroupByOutputType>[]
          }
          count: {
            args: Prisma.LecturerCountArgs<ExtArgs>
            result: $Utils.Optional<LecturerCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Zone: {
        payload: Prisma.$ZonePayload<ExtArgs>
        fields: Prisma.ZoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ZoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ZoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          findFirst: {
            args: Prisma.ZoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ZoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          findMany: {
            args: Prisma.ZoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>[]
          }
          create: {
            args: Prisma.ZoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          createMany: {
            args: Prisma.ZoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ZoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          update: {
            args: Prisma.ZoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          deleteMany: {
            args: Prisma.ZoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ZoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ZoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          aggregate: {
            args: Prisma.ZoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZone>
          }
          groupBy: {
            args: Prisma.ZoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.ZoneCountArgs<ExtArgs>
            result: $Utils.Optional<ZoneCountAggregateOutputType> | number
          }
        }
      }
      School: {
        payload: Prisma.$SchoolPayload<ExtArgs>
        fields: Prisma.SchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findFirst: {
            args: Prisma.SchoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findMany: {
            args: Prisma.SchoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          create: {
            args: Prisma.SchoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          createMany: {
            args: Prisma.SchoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SchoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          update: {
            args: Prisma.SchoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          deleteMany: {
            args: Prisma.SchoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SchoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          aggregate: {
            args: Prisma.SchoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchool>
          }
          groupBy: {
            args: Prisma.SchoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolCountAggregateOutputType> | number
          }
        }
      }
      TpApplication: {
        payload: Prisma.$TpApplicationPayload<ExtArgs>
        fields: Prisma.TpApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TpApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TpApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TpApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TpApplicationPayload>
          }
          findFirst: {
            args: Prisma.TpApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TpApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TpApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TpApplicationPayload>
          }
          findMany: {
            args: Prisma.TpApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TpApplicationPayload>[]
          }
          create: {
            args: Prisma.TpApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TpApplicationPayload>
          }
          createMany: {
            args: Prisma.TpApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TpApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TpApplicationPayload>
          }
          update: {
            args: Prisma.TpApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TpApplicationPayload>
          }
          deleteMany: {
            args: Prisma.TpApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TpApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TpApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TpApplicationPayload>
          }
          aggregate: {
            args: Prisma.TpApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTpApplication>
          }
          groupBy: {
            args: Prisma.TpApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<TpApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.TpApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<TpApplicationCountAggregateOutputType> | number
          }
        }
      }
      LecturerZoneAssigned: {
        payload: Prisma.$LecturerZoneAssignedPayload<ExtArgs>
        fields: Prisma.LecturerZoneAssignedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LecturerZoneAssignedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerZoneAssignedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LecturerZoneAssignedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerZoneAssignedPayload>
          }
          findFirst: {
            args: Prisma.LecturerZoneAssignedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerZoneAssignedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LecturerZoneAssignedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerZoneAssignedPayload>
          }
          findMany: {
            args: Prisma.LecturerZoneAssignedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerZoneAssignedPayload>[]
          }
          create: {
            args: Prisma.LecturerZoneAssignedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerZoneAssignedPayload>
          }
          createMany: {
            args: Prisma.LecturerZoneAssignedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LecturerZoneAssignedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerZoneAssignedPayload>
          }
          update: {
            args: Prisma.LecturerZoneAssignedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerZoneAssignedPayload>
          }
          deleteMany: {
            args: Prisma.LecturerZoneAssignedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LecturerZoneAssignedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LecturerZoneAssignedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerZoneAssignedPayload>
          }
          aggregate: {
            args: Prisma.LecturerZoneAssignedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLecturerZoneAssigned>
          }
          groupBy: {
            args: Prisma.LecturerZoneAssignedGroupByArgs<ExtArgs>
            result: $Utils.Optional<LecturerZoneAssignedGroupByOutputType>[]
          }
          count: {
            args: Prisma.LecturerZoneAssignedCountArgs<ExtArgs>
            result: $Utils.Optional<LecturerZoneAssignedCountAggregateOutputType> | number
          }
        }
      }
      LecturerZoneRequest: {
        payload: Prisma.$LecturerZoneRequestPayload<ExtArgs>
        fields: Prisma.LecturerZoneRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LecturerZoneRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerZoneRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LecturerZoneRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerZoneRequestPayload>
          }
          findFirst: {
            args: Prisma.LecturerZoneRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerZoneRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LecturerZoneRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerZoneRequestPayload>
          }
          findMany: {
            args: Prisma.LecturerZoneRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerZoneRequestPayload>[]
          }
          create: {
            args: Prisma.LecturerZoneRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerZoneRequestPayload>
          }
          createMany: {
            args: Prisma.LecturerZoneRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LecturerZoneRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerZoneRequestPayload>
          }
          update: {
            args: Prisma.LecturerZoneRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerZoneRequestPayload>
          }
          deleteMany: {
            args: Prisma.LecturerZoneRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LecturerZoneRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LecturerZoneRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerZoneRequestPayload>
          }
          aggregate: {
            args: Prisma.LecturerZoneRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLecturerZoneRequest>
          }
          groupBy: {
            args: Prisma.LecturerZoneRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<LecturerZoneRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.LecturerZoneRequestCountArgs<ExtArgs>
            result: $Utils.Optional<LecturerZoneRequestCountAggregateOutputType> | number
          }
        }
      }
      SupervisionSchedule: {
        payload: Prisma.$SupervisionSchedulePayload<ExtArgs>
        fields: Prisma.SupervisionScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupervisionScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisionSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupervisionScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisionSchedulePayload>
          }
          findFirst: {
            args: Prisma.SupervisionScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisionSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupervisionScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisionSchedulePayload>
          }
          findMany: {
            args: Prisma.SupervisionScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisionSchedulePayload>[]
          }
          create: {
            args: Prisma.SupervisionScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisionSchedulePayload>
          }
          createMany: {
            args: Prisma.SupervisionScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SupervisionScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisionSchedulePayload>
          }
          update: {
            args: Prisma.SupervisionScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisionSchedulePayload>
          }
          deleteMany: {
            args: Prisma.SupervisionScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupervisionScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SupervisionScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisionSchedulePayload>
          }
          aggregate: {
            args: Prisma.SupervisionScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupervisionSchedule>
          }
          groupBy: {
            args: Prisma.SupervisionScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupervisionScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupervisionScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<SupervisionScheduleCountAggregateOutputType> | number
          }
        }
      }
      LessonPlan: {
        payload: Prisma.$LessonPlanPayload<ExtArgs>
        fields: Prisma.LessonPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPlanPayload>
          }
          findFirst: {
            args: Prisma.LessonPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPlanPayload>
          }
          findMany: {
            args: Prisma.LessonPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPlanPayload>[]
          }
          create: {
            args: Prisma.LessonPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPlanPayload>
          }
          createMany: {
            args: Prisma.LessonPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LessonPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPlanPayload>
          }
          update: {
            args: Prisma.LessonPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPlanPayload>
          }
          deleteMany: {
            args: Prisma.LessonPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LessonPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPlanPayload>
          }
          aggregate: {
            args: Prisma.LessonPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLessonPlan>
          }
          groupBy: {
            args: Prisma.LessonPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonPlanCountArgs<ExtArgs>
            result: $Utils.Optional<LessonPlanCountAggregateOutputType> | number
          }
        }
      }
      SupervisionVisit: {
        payload: Prisma.$SupervisionVisitPayload<ExtArgs>
        fields: Prisma.SupervisionVisitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupervisionVisitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisionVisitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupervisionVisitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisionVisitPayload>
          }
          findFirst: {
            args: Prisma.SupervisionVisitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisionVisitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupervisionVisitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisionVisitPayload>
          }
          findMany: {
            args: Prisma.SupervisionVisitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisionVisitPayload>[]
          }
          create: {
            args: Prisma.SupervisionVisitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisionVisitPayload>
          }
          createMany: {
            args: Prisma.SupervisionVisitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SupervisionVisitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisionVisitPayload>
          }
          update: {
            args: Prisma.SupervisionVisitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisionVisitPayload>
          }
          deleteMany: {
            args: Prisma.SupervisionVisitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupervisionVisitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SupervisionVisitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisionVisitPayload>
          }
          aggregate: {
            args: Prisma.SupervisionVisitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupervisionVisit>
          }
          groupBy: {
            args: Prisma.SupervisionVisitGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupervisionVisitGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupervisionVisitCountArgs<ExtArgs>
            result: $Utils.Optional<SupervisionVisitCountAggregateOutputType> | number
          }
        }
      }
      Alert: {
        payload: Prisma.$AlertPayload<ExtArgs>
        fields: Prisma.AlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findFirst: {
            args: Prisma.AlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findMany: {
            args: Prisma.AlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          create: {
            args: Prisma.AlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          createMany: {
            args: Prisma.AlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          update: {
            args: Prisma.AlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          deleteMany: {
            args: Prisma.AlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          aggregate: {
            args: Prisma.AlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlert>
          }
          groupBy: {
            args: Prisma.AlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertCountArgs<ExtArgs>
            result: $Utils.Optional<AlertCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      FinalDocument: {
        payload: Prisma.$FinalDocumentPayload<ExtArgs>
        fields: Prisma.FinalDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinalDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinalDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinalDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinalDocumentPayload>
          }
          findFirst: {
            args: Prisma.FinalDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinalDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinalDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinalDocumentPayload>
          }
          findMany: {
            args: Prisma.FinalDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinalDocumentPayload>[]
          }
          create: {
            args: Prisma.FinalDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinalDocumentPayload>
          }
          createMany: {
            args: Prisma.FinalDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FinalDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinalDocumentPayload>
          }
          update: {
            args: Prisma.FinalDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinalDocumentPayload>
          }
          deleteMany: {
            args: Prisma.FinalDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinalDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FinalDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinalDocumentPayload>
          }
          aggregate: {
            args: Prisma.FinalDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinalDocument>
          }
          groupBy: {
            args: Prisma.FinalDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinalDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinalDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<FinalDocumentCountAggregateOutputType> | number
          }
        }
      }
      Grade: {
        payload: Prisma.$GradePayload<ExtArgs>
        fields: Prisma.GradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          findFirst: {
            args: Prisma.GradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          findMany: {
            args: Prisma.GradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>[]
          }
          create: {
            args: Prisma.GradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          createMany: {
            args: Prisma.GradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          update: {
            args: Prisma.GradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          deleteMany: {
            args: Prisma.GradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          aggregate: {
            args: Prisma.GradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrade>
          }
          groupBy: {
            args: Prisma.GradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<GradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.GradeCountArgs<ExtArgs>
            result: $Utils.Optional<GradeCountAggregateOutputType> | number
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
    student?: StudentOmit
    lecturer?: LecturerOmit
    admin?: AdminOmit
    zone?: ZoneOmit
    school?: SchoolOmit
    tpApplication?: TpApplicationOmit
    lecturerZoneAssigned?: LecturerZoneAssignedOmit
    lecturerZoneRequest?: LecturerZoneRequestOmit
    supervisionSchedule?: SupervisionScheduleOmit
    lessonPlan?: LessonPlanOmit
    supervisionVisit?: SupervisionVisitOmit
    alert?: AlertOmit
    report?: ReportOmit
    finalDocument?: FinalDocumentOmit
    grade?: GradeOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    student: number
    lecturer: number
    admin: number
    alert: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserCountOutputTypeCountStudentArgs
    lecturer?: boolean | UserCountOutputTypeCountLecturerArgs
    admin?: boolean | UserCountOutputTypeCountAdminArgs
    alert?: boolean | UserCountOutputTypeCountAlertArgs
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
  export type UserCountOutputTypeCountStudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLecturerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LecturerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAlertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    tpApplication: number
    lessonPlan: number
    supervisionVisit: number
    report: number
    finalDocument: number
    grade: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tpApplication?: boolean | StudentCountOutputTypeCountTpApplicationArgs
    lessonPlan?: boolean | StudentCountOutputTypeCountLessonPlanArgs
    supervisionVisit?: boolean | StudentCountOutputTypeCountSupervisionVisitArgs
    report?: boolean | StudentCountOutputTypeCountReportArgs
    finalDocument?: boolean | StudentCountOutputTypeCountFinalDocumentArgs
    grade?: boolean | StudentCountOutputTypeCountGradeArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountTpApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TpApplicationWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountLessonPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonPlanWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountSupervisionVisitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupervisionVisitWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountFinalDocumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinalDocumentWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountGradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GradeWhereInput
  }


  /**
   * Count Type LecturerCountOutputType
   */

  export type LecturerCountOutputType = {
    lecturerZoneAssigned: number
    lecturerZoneRequest: number
    supervisionSchedule: number
    supervisionVisit: number
    report: number
    grade: number
  }

  export type LecturerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecturerZoneAssigned?: boolean | LecturerCountOutputTypeCountLecturerZoneAssignedArgs
    lecturerZoneRequest?: boolean | LecturerCountOutputTypeCountLecturerZoneRequestArgs
    supervisionSchedule?: boolean | LecturerCountOutputTypeCountSupervisionScheduleArgs
    supervisionVisit?: boolean | LecturerCountOutputTypeCountSupervisionVisitArgs
    report?: boolean | LecturerCountOutputTypeCountReportArgs
    grade?: boolean | LecturerCountOutputTypeCountGradeArgs
  }

  // Custom InputTypes
  /**
   * LecturerCountOutputType without action
   */
  export type LecturerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerCountOutputType
     */
    select?: LecturerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LecturerCountOutputType without action
   */
  export type LecturerCountOutputTypeCountLecturerZoneAssignedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LecturerZoneAssignedWhereInput
  }

  /**
   * LecturerCountOutputType without action
   */
  export type LecturerCountOutputTypeCountLecturerZoneRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LecturerZoneRequestWhereInput
  }

  /**
   * LecturerCountOutputType without action
   */
  export type LecturerCountOutputTypeCountSupervisionScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupervisionScheduleWhereInput
  }

  /**
   * LecturerCountOutputType without action
   */
  export type LecturerCountOutputTypeCountSupervisionVisitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupervisionVisitWhereInput
  }

  /**
   * LecturerCountOutputType without action
   */
  export type LecturerCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * LecturerCountOutputType without action
   */
  export type LecturerCountOutputTypeCountGradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GradeWhereInput
  }


  /**
   * Count Type ZoneCountOutputType
   */

  export type ZoneCountOutputType = {
    schools: number
    lecturerZoneRequest: number
    lecturerZoneAssigned: number
  }

  export type ZoneCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schools?: boolean | ZoneCountOutputTypeCountSchoolsArgs
    lecturerZoneRequest?: boolean | ZoneCountOutputTypeCountLecturerZoneRequestArgs
    lecturerZoneAssigned?: boolean | ZoneCountOutputTypeCountLecturerZoneAssignedArgs
  }

  // Custom InputTypes
  /**
   * ZoneCountOutputType without action
   */
  export type ZoneCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneCountOutputType
     */
    select?: ZoneCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ZoneCountOutputType without action
   */
  export type ZoneCountOutputTypeCountSchoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolWhereInput
  }

  /**
   * ZoneCountOutputType without action
   */
  export type ZoneCountOutputTypeCountLecturerZoneRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LecturerZoneRequestWhereInput
  }

  /**
   * ZoneCountOutputType without action
   */
  export type ZoneCountOutputTypeCountLecturerZoneAssignedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LecturerZoneAssignedWhereInput
  }


  /**
   * Count Type SchoolCountOutputType
   */

  export type SchoolCountOutputType = {
    tpApplication: number
  }

  export type SchoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tpApplication?: boolean | SchoolCountOutputTypeCountTpApplicationArgs
  }

  // Custom InputTypes
  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCountOutputType
     */
    select?: SchoolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountTpApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TpApplicationWhereInput
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
    username: string | null
    fullName: string | null
    email: string | null
    role: $Enums.Role | null
    password: string | null
    isActive: boolean | null
    isVerified: boolean | null
    isBlocked: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    fullName: string | null
    email: string | null
    role: $Enums.Role | null
    password: string | null
    isActive: boolean | null
    isVerified: boolean | null
    isBlocked: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    fullName: number
    email: number
    role: number
    password: number
    isActive: number
    isVerified: number
    isBlocked: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    fullName?: true
    email?: true
    role?: true
    password?: true
    isActive?: true
    isVerified?: true
    isBlocked?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    fullName?: true
    email?: true
    role?: true
    password?: true
    isActive?: true
    isVerified?: true
    isBlocked?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    fullName?: true
    email?: true
    role?: true
    password?: true
    isActive?: true
    isVerified?: true
    isBlocked?: true
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
    username: string
    fullName: string
    email: string
    role: $Enums.Role
    password: string
    isActive: boolean
    isVerified: boolean
    isBlocked: boolean
    createdAt: Date
    updatedAt: Date
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
    username?: boolean
    fullName?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    isActive?: boolean
    isVerified?: boolean
    isBlocked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | User$studentArgs<ExtArgs>
    lecturer?: boolean | User$lecturerArgs<ExtArgs>
    admin?: boolean | User$adminArgs<ExtArgs>
    alert?: boolean | User$alertArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    fullName?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    isActive?: boolean
    isVerified?: boolean
    isBlocked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "fullName" | "email" | "role" | "password" | "isActive" | "isVerified" | "isBlocked" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | User$studentArgs<ExtArgs>
    lecturer?: boolean | User$lecturerArgs<ExtArgs>
    admin?: boolean | User$adminArgs<ExtArgs>
    alert?: boolean | User$alertArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>[]
      lecturer: Prisma.$LecturerPayload<ExtArgs>[]
      admin: Prisma.$AdminPayload<ExtArgs>[]
      alert: Prisma.$AlertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      fullName: string
      email: string
      role: $Enums.Role
      password: string
      isActive: boolean
      isVerified: boolean
      isBlocked: boolean
      createdAt: Date
      updatedAt: Date
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
    student<T extends User$studentArgs<ExtArgs> = {}>(args?: Subset<T, User$studentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lecturer<T extends User$lecturerArgs<ExtArgs> = {}>(args?: Subset<T, User$lecturerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    admin<T extends User$adminArgs<ExtArgs> = {}>(args?: Subset<T, User$adminArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alert<T extends User$alertArgs<ExtArgs> = {}>(args?: Subset<T, User$alertArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly username: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly password: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly isBlocked: FieldRef<"User", 'Boolean'>
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
   * User.student
   */
  export type User$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * User.lecturer
   */
  export type User$lecturerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    where?: LecturerWhereInput
    orderBy?: LecturerOrderByWithRelationInput | LecturerOrderByWithRelationInput[]
    cursor?: LecturerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LecturerScalarFieldEnum | LecturerScalarFieldEnum[]
  }

  /**
   * User.admin
   */
  export type User$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    cursor?: AdminWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * User.alert
   */
  export type User$alertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    cursor?: AlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
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
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tpApplication?: boolean | Student$tpApplicationArgs<ExtArgs>
    lessonPlan?: boolean | Student$lessonPlanArgs<ExtArgs>
    supervisionVisit?: boolean | Student$supervisionVisitArgs<ExtArgs>
    report?: boolean | Student$reportArgs<ExtArgs>
    finalDocument?: boolean | Student$finalDocumentArgs<ExtArgs>
    grade?: boolean | Student$gradeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>



  export type StudentSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tpApplication?: boolean | Student$tpApplicationArgs<ExtArgs>
    lessonPlan?: boolean | Student$lessonPlanArgs<ExtArgs>
    supervisionVisit?: boolean | Student$supervisionVisitArgs<ExtArgs>
    report?: boolean | Student$reportArgs<ExtArgs>
    finalDocument?: boolean | Student$finalDocumentArgs<ExtArgs>
    grade?: boolean | Student$gradeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      tpApplication: Prisma.$TpApplicationPayload<ExtArgs>[]
      lessonPlan: Prisma.$LessonPlanPayload<ExtArgs>[]
      supervisionVisit: Prisma.$SupervisionVisitPayload<ExtArgs>[]
      report: Prisma.$ReportPayload<ExtArgs>[]
      finalDocument: Prisma.$FinalDocumentPayload<ExtArgs>[]
      grade: Prisma.$GradePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tpApplication<T extends Student$tpApplicationArgs<ExtArgs> = {}>(args?: Subset<T, Student$tpApplicationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TpApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lessonPlan<T extends Student$lessonPlanArgs<ExtArgs> = {}>(args?: Subset<T, Student$lessonPlanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    supervisionVisit<T extends Student$supervisionVisitArgs<ExtArgs> = {}>(args?: Subset<T, Student$supervisionVisitArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupervisionVisitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    report<T extends Student$reportArgs<ExtArgs> = {}>(args?: Subset<T, Student$reportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    finalDocument<T extends Student$finalDocumentArgs<ExtArgs> = {}>(args?: Subset<T, Student$finalDocumentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinalDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    grade<T extends Student$gradeArgs<ExtArgs> = {}>(args?: Subset<T, Student$gradeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly userId: FieldRef<"Student", 'String'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
    readonly updatedAt: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.tpApplication
   */
  export type Student$tpApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TpApplication
     */
    select?: TpApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TpApplication
     */
    omit?: TpApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TpApplicationInclude<ExtArgs> | null
    where?: TpApplicationWhereInput
    orderBy?: TpApplicationOrderByWithRelationInput | TpApplicationOrderByWithRelationInput[]
    cursor?: TpApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TpApplicationScalarFieldEnum | TpApplicationScalarFieldEnum[]
  }

  /**
   * Student.lessonPlan
   */
  export type Student$lessonPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonPlan
     */
    select?: LessonPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonPlan
     */
    omit?: LessonPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonPlanInclude<ExtArgs> | null
    where?: LessonPlanWhereInput
    orderBy?: LessonPlanOrderByWithRelationInput | LessonPlanOrderByWithRelationInput[]
    cursor?: LessonPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonPlanScalarFieldEnum | LessonPlanScalarFieldEnum[]
  }

  /**
   * Student.supervisionVisit
   */
  export type Student$supervisionVisitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisionVisit
     */
    select?: SupervisionVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisionVisit
     */
    omit?: SupervisionVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisionVisitInclude<ExtArgs> | null
    where?: SupervisionVisitWhereInput
    orderBy?: SupervisionVisitOrderByWithRelationInput | SupervisionVisitOrderByWithRelationInput[]
    cursor?: SupervisionVisitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupervisionVisitScalarFieldEnum | SupervisionVisitScalarFieldEnum[]
  }

  /**
   * Student.report
   */
  export type Student$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Student.finalDocument
   */
  export type Student$finalDocumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalDocument
     */
    select?: FinalDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalDocument
     */
    omit?: FinalDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalDocumentInclude<ExtArgs> | null
    where?: FinalDocumentWhereInput
    orderBy?: FinalDocumentOrderByWithRelationInput | FinalDocumentOrderByWithRelationInput[]
    cursor?: FinalDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinalDocumentScalarFieldEnum | FinalDocumentScalarFieldEnum[]
  }

  /**
   * Student.grade
   */
  export type Student$gradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    where?: GradeWhereInput
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    cursor?: GradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Lecturer
   */

  export type AggregateLecturer = {
    _count: LecturerCountAggregateOutputType | null
    _min: LecturerMinAggregateOutputType | null
    _max: LecturerMaxAggregateOutputType | null
  }

  export type LecturerMinAggregateOutputType = {
    id: string | null
    department: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LecturerMaxAggregateOutputType = {
    id: string | null
    department: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LecturerCountAggregateOutputType = {
    id: number
    department: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LecturerMinAggregateInputType = {
    id?: true
    department?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LecturerMaxAggregateInputType = {
    id?: true
    department?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LecturerCountAggregateInputType = {
    id?: true
    department?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LecturerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lecturer to aggregate.
     */
    where?: LecturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lecturers to fetch.
     */
    orderBy?: LecturerOrderByWithRelationInput | LecturerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LecturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lecturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lecturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lecturers
    **/
    _count?: true | LecturerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LecturerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LecturerMaxAggregateInputType
  }

  export type GetLecturerAggregateType<T extends LecturerAggregateArgs> = {
        [P in keyof T & keyof AggregateLecturer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLecturer[P]>
      : GetScalarType<T[P], AggregateLecturer[P]>
  }




  export type LecturerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LecturerWhereInput
    orderBy?: LecturerOrderByWithAggregationInput | LecturerOrderByWithAggregationInput[]
    by: LecturerScalarFieldEnum[] | LecturerScalarFieldEnum
    having?: LecturerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LecturerCountAggregateInputType | true
    _min?: LecturerMinAggregateInputType
    _max?: LecturerMaxAggregateInputType
  }

  export type LecturerGroupByOutputType = {
    id: string
    department: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: LecturerCountAggregateOutputType | null
    _min: LecturerMinAggregateOutputType | null
    _max: LecturerMaxAggregateOutputType | null
  }

  type GetLecturerGroupByPayload<T extends LecturerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LecturerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LecturerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LecturerGroupByOutputType[P]>
            : GetScalarType<T[P], LecturerGroupByOutputType[P]>
        }
      >
    >


  export type LecturerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    department?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lecturerZoneAssigned?: boolean | Lecturer$lecturerZoneAssignedArgs<ExtArgs>
    lecturerZoneRequest?: boolean | Lecturer$lecturerZoneRequestArgs<ExtArgs>
    supervisionSchedule?: boolean | Lecturer$supervisionScheduleArgs<ExtArgs>
    supervisionVisit?: boolean | Lecturer$supervisionVisitArgs<ExtArgs>
    report?: boolean | Lecturer$reportArgs<ExtArgs>
    grade?: boolean | Lecturer$gradeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | LecturerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lecturer"]>



  export type LecturerSelectScalar = {
    id?: boolean
    department?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LecturerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "department" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["lecturer"]>
  export type LecturerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecturerZoneAssigned?: boolean | Lecturer$lecturerZoneAssignedArgs<ExtArgs>
    lecturerZoneRequest?: boolean | Lecturer$lecturerZoneRequestArgs<ExtArgs>
    supervisionSchedule?: boolean | Lecturer$supervisionScheduleArgs<ExtArgs>
    supervisionVisit?: boolean | Lecturer$supervisionVisitArgs<ExtArgs>
    report?: boolean | Lecturer$reportArgs<ExtArgs>
    grade?: boolean | Lecturer$gradeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | LecturerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LecturerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lecturer"
    objects: {
      lecturerZoneAssigned: Prisma.$LecturerZoneAssignedPayload<ExtArgs>[]
      lecturerZoneRequest: Prisma.$LecturerZoneRequestPayload<ExtArgs>[]
      supervisionSchedule: Prisma.$SupervisionSchedulePayload<ExtArgs>[]
      supervisionVisit: Prisma.$SupervisionVisitPayload<ExtArgs>[]
      report: Prisma.$ReportPayload<ExtArgs>[]
      grade: Prisma.$GradePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      department: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lecturer"]>
    composites: {}
  }

  type LecturerGetPayload<S extends boolean | null | undefined | LecturerDefaultArgs> = $Result.GetResult<Prisma.$LecturerPayload, S>

  type LecturerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LecturerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LecturerCountAggregateInputType | true
    }

  export interface LecturerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lecturer'], meta: { name: 'Lecturer' } }
    /**
     * Find zero or one Lecturer that matches the filter.
     * @param {LecturerFindUniqueArgs} args - Arguments to find a Lecturer
     * @example
     * // Get one Lecturer
     * const lecturer = await prisma.lecturer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LecturerFindUniqueArgs>(args: SelectSubset<T, LecturerFindUniqueArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lecturer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LecturerFindUniqueOrThrowArgs} args - Arguments to find a Lecturer
     * @example
     * // Get one Lecturer
     * const lecturer = await prisma.lecturer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LecturerFindUniqueOrThrowArgs>(args: SelectSubset<T, LecturerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lecturer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerFindFirstArgs} args - Arguments to find a Lecturer
     * @example
     * // Get one Lecturer
     * const lecturer = await prisma.lecturer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LecturerFindFirstArgs>(args?: SelectSubset<T, LecturerFindFirstArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lecturer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerFindFirstOrThrowArgs} args - Arguments to find a Lecturer
     * @example
     * // Get one Lecturer
     * const lecturer = await prisma.lecturer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LecturerFindFirstOrThrowArgs>(args?: SelectSubset<T, LecturerFindFirstOrThrowArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lecturers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lecturers
     * const lecturers = await prisma.lecturer.findMany()
     * 
     * // Get first 10 Lecturers
     * const lecturers = await prisma.lecturer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lecturerWithIdOnly = await prisma.lecturer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LecturerFindManyArgs>(args?: SelectSubset<T, LecturerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lecturer.
     * @param {LecturerCreateArgs} args - Arguments to create a Lecturer.
     * @example
     * // Create one Lecturer
     * const Lecturer = await prisma.lecturer.create({
     *   data: {
     *     // ... data to create a Lecturer
     *   }
     * })
     * 
     */
    create<T extends LecturerCreateArgs>(args: SelectSubset<T, LecturerCreateArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lecturers.
     * @param {LecturerCreateManyArgs} args - Arguments to create many Lecturers.
     * @example
     * // Create many Lecturers
     * const lecturer = await prisma.lecturer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LecturerCreateManyArgs>(args?: SelectSubset<T, LecturerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lecturer.
     * @param {LecturerDeleteArgs} args - Arguments to delete one Lecturer.
     * @example
     * // Delete one Lecturer
     * const Lecturer = await prisma.lecturer.delete({
     *   where: {
     *     // ... filter to delete one Lecturer
     *   }
     * })
     * 
     */
    delete<T extends LecturerDeleteArgs>(args: SelectSubset<T, LecturerDeleteArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lecturer.
     * @param {LecturerUpdateArgs} args - Arguments to update one Lecturer.
     * @example
     * // Update one Lecturer
     * const lecturer = await prisma.lecturer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LecturerUpdateArgs>(args: SelectSubset<T, LecturerUpdateArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lecturers.
     * @param {LecturerDeleteManyArgs} args - Arguments to filter Lecturers to delete.
     * @example
     * // Delete a few Lecturers
     * const { count } = await prisma.lecturer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LecturerDeleteManyArgs>(args?: SelectSubset<T, LecturerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lecturers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lecturers
     * const lecturer = await prisma.lecturer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LecturerUpdateManyArgs>(args: SelectSubset<T, LecturerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lecturer.
     * @param {LecturerUpsertArgs} args - Arguments to update or create a Lecturer.
     * @example
     * // Update or create a Lecturer
     * const lecturer = await prisma.lecturer.upsert({
     *   create: {
     *     // ... data to create a Lecturer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lecturer we want to update
     *   }
     * })
     */
    upsert<T extends LecturerUpsertArgs>(args: SelectSubset<T, LecturerUpsertArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lecturers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerCountArgs} args - Arguments to filter Lecturers to count.
     * @example
     * // Count the number of Lecturers
     * const count = await prisma.lecturer.count({
     *   where: {
     *     // ... the filter for the Lecturers we want to count
     *   }
     * })
    **/
    count<T extends LecturerCountArgs>(
      args?: Subset<T, LecturerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LecturerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lecturer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LecturerAggregateArgs>(args: Subset<T, LecturerAggregateArgs>): Prisma.PrismaPromise<GetLecturerAggregateType<T>>

    /**
     * Group by Lecturer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerGroupByArgs} args - Group by arguments.
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
      T extends LecturerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LecturerGroupByArgs['orderBy'] }
        : { orderBy?: LecturerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LecturerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLecturerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lecturer model
   */
  readonly fields: LecturerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lecturer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LecturerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lecturerZoneAssigned<T extends Lecturer$lecturerZoneAssignedArgs<ExtArgs> = {}>(args?: Subset<T, Lecturer$lecturerZoneAssignedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturerZoneAssignedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lecturerZoneRequest<T extends Lecturer$lecturerZoneRequestArgs<ExtArgs> = {}>(args?: Subset<T, Lecturer$lecturerZoneRequestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturerZoneRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    supervisionSchedule<T extends Lecturer$supervisionScheduleArgs<ExtArgs> = {}>(args?: Subset<T, Lecturer$supervisionScheduleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupervisionSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    supervisionVisit<T extends Lecturer$supervisionVisitArgs<ExtArgs> = {}>(args?: Subset<T, Lecturer$supervisionVisitArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupervisionVisitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    report<T extends Lecturer$reportArgs<ExtArgs> = {}>(args?: Subset<T, Lecturer$reportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    grade<T extends Lecturer$gradeArgs<ExtArgs> = {}>(args?: Subset<T, Lecturer$gradeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Lecturer model
   */
  interface LecturerFieldRefs {
    readonly id: FieldRef<"Lecturer", 'String'>
    readonly department: FieldRef<"Lecturer", 'String'>
    readonly userId: FieldRef<"Lecturer", 'String'>
    readonly createdAt: FieldRef<"Lecturer", 'DateTime'>
    readonly updatedAt: FieldRef<"Lecturer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lecturer findUnique
   */
  export type LecturerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * Filter, which Lecturer to fetch.
     */
    where: LecturerWhereUniqueInput
  }

  /**
   * Lecturer findUniqueOrThrow
   */
  export type LecturerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * Filter, which Lecturer to fetch.
     */
    where: LecturerWhereUniqueInput
  }

  /**
   * Lecturer findFirst
   */
  export type LecturerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * Filter, which Lecturer to fetch.
     */
    where?: LecturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lecturers to fetch.
     */
    orderBy?: LecturerOrderByWithRelationInput | LecturerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lecturers.
     */
    cursor?: LecturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lecturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lecturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lecturers.
     */
    distinct?: LecturerScalarFieldEnum | LecturerScalarFieldEnum[]
  }

  /**
   * Lecturer findFirstOrThrow
   */
  export type LecturerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * Filter, which Lecturer to fetch.
     */
    where?: LecturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lecturers to fetch.
     */
    orderBy?: LecturerOrderByWithRelationInput | LecturerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lecturers.
     */
    cursor?: LecturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lecturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lecturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lecturers.
     */
    distinct?: LecturerScalarFieldEnum | LecturerScalarFieldEnum[]
  }

  /**
   * Lecturer findMany
   */
  export type LecturerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * Filter, which Lecturers to fetch.
     */
    where?: LecturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lecturers to fetch.
     */
    orderBy?: LecturerOrderByWithRelationInput | LecturerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lecturers.
     */
    cursor?: LecturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lecturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lecturers.
     */
    skip?: number
    distinct?: LecturerScalarFieldEnum | LecturerScalarFieldEnum[]
  }

  /**
   * Lecturer create
   */
  export type LecturerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * The data needed to create a Lecturer.
     */
    data: XOR<LecturerCreateInput, LecturerUncheckedCreateInput>
  }

  /**
   * Lecturer createMany
   */
  export type LecturerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lecturers.
     */
    data: LecturerCreateManyInput | LecturerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lecturer update
   */
  export type LecturerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * The data needed to update a Lecturer.
     */
    data: XOR<LecturerUpdateInput, LecturerUncheckedUpdateInput>
    /**
     * Choose, which Lecturer to update.
     */
    where: LecturerWhereUniqueInput
  }

  /**
   * Lecturer updateMany
   */
  export type LecturerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lecturers.
     */
    data: XOR<LecturerUpdateManyMutationInput, LecturerUncheckedUpdateManyInput>
    /**
     * Filter which Lecturers to update
     */
    where?: LecturerWhereInput
    /**
     * Limit how many Lecturers to update.
     */
    limit?: number
  }

  /**
   * Lecturer upsert
   */
  export type LecturerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * The filter to search for the Lecturer to update in case it exists.
     */
    where: LecturerWhereUniqueInput
    /**
     * In case the Lecturer found by the `where` argument doesn't exist, create a new Lecturer with this data.
     */
    create: XOR<LecturerCreateInput, LecturerUncheckedCreateInput>
    /**
     * In case the Lecturer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LecturerUpdateInput, LecturerUncheckedUpdateInput>
  }

  /**
   * Lecturer delete
   */
  export type LecturerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * Filter which Lecturer to delete.
     */
    where: LecturerWhereUniqueInput
  }

  /**
   * Lecturer deleteMany
   */
  export type LecturerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lecturers to delete
     */
    where?: LecturerWhereInput
    /**
     * Limit how many Lecturers to delete.
     */
    limit?: number
  }

  /**
   * Lecturer.lecturerZoneAssigned
   */
  export type Lecturer$lecturerZoneAssignedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerZoneAssigned
     */
    select?: LecturerZoneAssignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerZoneAssigned
     */
    omit?: LecturerZoneAssignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerZoneAssignedInclude<ExtArgs> | null
    where?: LecturerZoneAssignedWhereInput
    orderBy?: LecturerZoneAssignedOrderByWithRelationInput | LecturerZoneAssignedOrderByWithRelationInput[]
    cursor?: LecturerZoneAssignedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LecturerZoneAssignedScalarFieldEnum | LecturerZoneAssignedScalarFieldEnum[]
  }

  /**
   * Lecturer.lecturerZoneRequest
   */
  export type Lecturer$lecturerZoneRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerZoneRequest
     */
    select?: LecturerZoneRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerZoneRequest
     */
    omit?: LecturerZoneRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerZoneRequestInclude<ExtArgs> | null
    where?: LecturerZoneRequestWhereInput
    orderBy?: LecturerZoneRequestOrderByWithRelationInput | LecturerZoneRequestOrderByWithRelationInput[]
    cursor?: LecturerZoneRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LecturerZoneRequestScalarFieldEnum | LecturerZoneRequestScalarFieldEnum[]
  }

  /**
   * Lecturer.supervisionSchedule
   */
  export type Lecturer$supervisionScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisionSchedule
     */
    select?: SupervisionScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisionSchedule
     */
    omit?: SupervisionScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisionScheduleInclude<ExtArgs> | null
    where?: SupervisionScheduleWhereInput
    orderBy?: SupervisionScheduleOrderByWithRelationInput | SupervisionScheduleOrderByWithRelationInput[]
    cursor?: SupervisionScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupervisionScheduleScalarFieldEnum | SupervisionScheduleScalarFieldEnum[]
  }

  /**
   * Lecturer.supervisionVisit
   */
  export type Lecturer$supervisionVisitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisionVisit
     */
    select?: SupervisionVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisionVisit
     */
    omit?: SupervisionVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisionVisitInclude<ExtArgs> | null
    where?: SupervisionVisitWhereInput
    orderBy?: SupervisionVisitOrderByWithRelationInput | SupervisionVisitOrderByWithRelationInput[]
    cursor?: SupervisionVisitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupervisionVisitScalarFieldEnum | SupervisionVisitScalarFieldEnum[]
  }

  /**
   * Lecturer.report
   */
  export type Lecturer$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Lecturer.grade
   */
  export type Lecturer$gradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    where?: GradeWhereInput
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    cursor?: GradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * Lecturer without action
   */
  export type LecturerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly userId: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Zone
   */

  export type AggregateZone = {
    _count: ZoneCountAggregateOutputType | null
    _min: ZoneMinAggregateOutputType | null
    _max: ZoneMaxAggregateOutputType | null
  }

  export type ZoneMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ZoneMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ZoneCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ZoneMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ZoneMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ZoneCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ZoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Zone to aggregate.
     */
    where?: ZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zones to fetch.
     */
    orderBy?: ZoneOrderByWithRelationInput | ZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Zones
    **/
    _count?: true | ZoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZoneMaxAggregateInputType
  }

  export type GetZoneAggregateType<T extends ZoneAggregateArgs> = {
        [P in keyof T & keyof AggregateZone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZone[P]>
      : GetScalarType<T[P], AggregateZone[P]>
  }




  export type ZoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZoneWhereInput
    orderBy?: ZoneOrderByWithAggregationInput | ZoneOrderByWithAggregationInput[]
    by: ZoneScalarFieldEnum[] | ZoneScalarFieldEnum
    having?: ZoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZoneCountAggregateInputType | true
    _min?: ZoneMinAggregateInputType
    _max?: ZoneMaxAggregateInputType
  }

  export type ZoneGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: ZoneCountAggregateOutputType | null
    _min: ZoneMinAggregateOutputType | null
    _max: ZoneMaxAggregateOutputType | null
  }

  type GetZoneGroupByPayload<T extends ZoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZoneGroupByOutputType[P]>
            : GetScalarType<T[P], ZoneGroupByOutputType[P]>
        }
      >
    >


  export type ZoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schools?: boolean | Zone$schoolsArgs<ExtArgs>
    lecturerZoneRequest?: boolean | Zone$lecturerZoneRequestArgs<ExtArgs>
    lecturerZoneAssigned?: boolean | Zone$lecturerZoneAssignedArgs<ExtArgs>
    _count?: boolean | ZoneCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zone"]>



  export type ZoneSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ZoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["zone"]>
  export type ZoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schools?: boolean | Zone$schoolsArgs<ExtArgs>
    lecturerZoneRequest?: boolean | Zone$lecturerZoneRequestArgs<ExtArgs>
    lecturerZoneAssigned?: boolean | Zone$lecturerZoneAssignedArgs<ExtArgs>
    _count?: boolean | ZoneCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ZonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Zone"
    objects: {
      schools: Prisma.$SchoolPayload<ExtArgs>[]
      lecturerZoneRequest: Prisma.$LecturerZoneRequestPayload<ExtArgs>[]
      lecturerZoneAssigned: Prisma.$LecturerZoneAssignedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["zone"]>
    composites: {}
  }

  type ZoneGetPayload<S extends boolean | null | undefined | ZoneDefaultArgs> = $Result.GetResult<Prisma.$ZonePayload, S>

  type ZoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ZoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZoneCountAggregateInputType | true
    }

  export interface ZoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Zone'], meta: { name: 'Zone' } }
    /**
     * Find zero or one Zone that matches the filter.
     * @param {ZoneFindUniqueArgs} args - Arguments to find a Zone
     * @example
     * // Get one Zone
     * const zone = await prisma.zone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZoneFindUniqueArgs>(args: SelectSubset<T, ZoneFindUniqueArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Zone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZoneFindUniqueOrThrowArgs} args - Arguments to find a Zone
     * @example
     * // Get one Zone
     * const zone = await prisma.zone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZoneFindUniqueOrThrowArgs>(args: SelectSubset<T, ZoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneFindFirstArgs} args - Arguments to find a Zone
     * @example
     * // Get one Zone
     * const zone = await prisma.zone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZoneFindFirstArgs>(args?: SelectSubset<T, ZoneFindFirstArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneFindFirstOrThrowArgs} args - Arguments to find a Zone
     * @example
     * // Get one Zone
     * const zone = await prisma.zone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZoneFindFirstOrThrowArgs>(args?: SelectSubset<T, ZoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Zones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Zones
     * const zones = await prisma.zone.findMany()
     * 
     * // Get first 10 Zones
     * const zones = await prisma.zone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zoneWithIdOnly = await prisma.zone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ZoneFindManyArgs>(args?: SelectSubset<T, ZoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Zone.
     * @param {ZoneCreateArgs} args - Arguments to create a Zone.
     * @example
     * // Create one Zone
     * const Zone = await prisma.zone.create({
     *   data: {
     *     // ... data to create a Zone
     *   }
     * })
     * 
     */
    create<T extends ZoneCreateArgs>(args: SelectSubset<T, ZoneCreateArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Zones.
     * @param {ZoneCreateManyArgs} args - Arguments to create many Zones.
     * @example
     * // Create many Zones
     * const zone = await prisma.zone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ZoneCreateManyArgs>(args?: SelectSubset<T, ZoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Zone.
     * @param {ZoneDeleteArgs} args - Arguments to delete one Zone.
     * @example
     * // Delete one Zone
     * const Zone = await prisma.zone.delete({
     *   where: {
     *     // ... filter to delete one Zone
     *   }
     * })
     * 
     */
    delete<T extends ZoneDeleteArgs>(args: SelectSubset<T, ZoneDeleteArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Zone.
     * @param {ZoneUpdateArgs} args - Arguments to update one Zone.
     * @example
     * // Update one Zone
     * const zone = await prisma.zone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ZoneUpdateArgs>(args: SelectSubset<T, ZoneUpdateArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Zones.
     * @param {ZoneDeleteManyArgs} args - Arguments to filter Zones to delete.
     * @example
     * // Delete a few Zones
     * const { count } = await prisma.zone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ZoneDeleteManyArgs>(args?: SelectSubset<T, ZoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Zones
     * const zone = await prisma.zone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ZoneUpdateManyArgs>(args: SelectSubset<T, ZoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Zone.
     * @param {ZoneUpsertArgs} args - Arguments to update or create a Zone.
     * @example
     * // Update or create a Zone
     * const zone = await prisma.zone.upsert({
     *   create: {
     *     // ... data to create a Zone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Zone we want to update
     *   }
     * })
     */
    upsert<T extends ZoneUpsertArgs>(args: SelectSubset<T, ZoneUpsertArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Zones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneCountArgs} args - Arguments to filter Zones to count.
     * @example
     * // Count the number of Zones
     * const count = await prisma.zone.count({
     *   where: {
     *     // ... the filter for the Zones we want to count
     *   }
     * })
    **/
    count<T extends ZoneCountArgs>(
      args?: Subset<T, ZoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Zone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ZoneAggregateArgs>(args: Subset<T, ZoneAggregateArgs>): Prisma.PrismaPromise<GetZoneAggregateType<T>>

    /**
     * Group by Zone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneGroupByArgs} args - Group by arguments.
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
      T extends ZoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZoneGroupByArgs['orderBy'] }
        : { orderBy?: ZoneGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ZoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Zone model
   */
  readonly fields: ZoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Zone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schools<T extends Zone$schoolsArgs<ExtArgs> = {}>(args?: Subset<T, Zone$schoolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lecturerZoneRequest<T extends Zone$lecturerZoneRequestArgs<ExtArgs> = {}>(args?: Subset<T, Zone$lecturerZoneRequestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturerZoneRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lecturerZoneAssigned<T extends Zone$lecturerZoneAssignedArgs<ExtArgs> = {}>(args?: Subset<T, Zone$lecturerZoneAssignedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturerZoneAssignedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Zone model
   */
  interface ZoneFieldRefs {
    readonly id: FieldRef<"Zone", 'String'>
    readonly name: FieldRef<"Zone", 'String'>
    readonly createdAt: FieldRef<"Zone", 'DateTime'>
    readonly updatedAt: FieldRef<"Zone", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Zone findUnique
   */
  export type ZoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter, which Zone to fetch.
     */
    where: ZoneWhereUniqueInput
  }

  /**
   * Zone findUniqueOrThrow
   */
  export type ZoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter, which Zone to fetch.
     */
    where: ZoneWhereUniqueInput
  }

  /**
   * Zone findFirst
   */
  export type ZoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter, which Zone to fetch.
     */
    where?: ZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zones to fetch.
     */
    orderBy?: ZoneOrderByWithRelationInput | ZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zones.
     */
    cursor?: ZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zones.
     */
    distinct?: ZoneScalarFieldEnum | ZoneScalarFieldEnum[]
  }

  /**
   * Zone findFirstOrThrow
   */
  export type ZoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter, which Zone to fetch.
     */
    where?: ZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zones to fetch.
     */
    orderBy?: ZoneOrderByWithRelationInput | ZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zones.
     */
    cursor?: ZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zones.
     */
    distinct?: ZoneScalarFieldEnum | ZoneScalarFieldEnum[]
  }

  /**
   * Zone findMany
   */
  export type ZoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter, which Zones to fetch.
     */
    where?: ZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zones to fetch.
     */
    orderBy?: ZoneOrderByWithRelationInput | ZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Zones.
     */
    cursor?: ZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zones.
     */
    skip?: number
    distinct?: ZoneScalarFieldEnum | ZoneScalarFieldEnum[]
  }

  /**
   * Zone create
   */
  export type ZoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * The data needed to create a Zone.
     */
    data: XOR<ZoneCreateInput, ZoneUncheckedCreateInput>
  }

  /**
   * Zone createMany
   */
  export type ZoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Zones.
     */
    data: ZoneCreateManyInput | ZoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Zone update
   */
  export type ZoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * The data needed to update a Zone.
     */
    data: XOR<ZoneUpdateInput, ZoneUncheckedUpdateInput>
    /**
     * Choose, which Zone to update.
     */
    where: ZoneWhereUniqueInput
  }

  /**
   * Zone updateMany
   */
  export type ZoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Zones.
     */
    data: XOR<ZoneUpdateManyMutationInput, ZoneUncheckedUpdateManyInput>
    /**
     * Filter which Zones to update
     */
    where?: ZoneWhereInput
    /**
     * Limit how many Zones to update.
     */
    limit?: number
  }

  /**
   * Zone upsert
   */
  export type ZoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * The filter to search for the Zone to update in case it exists.
     */
    where: ZoneWhereUniqueInput
    /**
     * In case the Zone found by the `where` argument doesn't exist, create a new Zone with this data.
     */
    create: XOR<ZoneCreateInput, ZoneUncheckedCreateInput>
    /**
     * In case the Zone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZoneUpdateInput, ZoneUncheckedUpdateInput>
  }

  /**
   * Zone delete
   */
  export type ZoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter which Zone to delete.
     */
    where: ZoneWhereUniqueInput
  }

  /**
   * Zone deleteMany
   */
  export type ZoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Zones to delete
     */
    where?: ZoneWhereInput
    /**
     * Limit how many Zones to delete.
     */
    limit?: number
  }

  /**
   * Zone.schools
   */
  export type Zone$schoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    where?: SchoolWhereInput
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    cursor?: SchoolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * Zone.lecturerZoneRequest
   */
  export type Zone$lecturerZoneRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerZoneRequest
     */
    select?: LecturerZoneRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerZoneRequest
     */
    omit?: LecturerZoneRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerZoneRequestInclude<ExtArgs> | null
    where?: LecturerZoneRequestWhereInput
    orderBy?: LecturerZoneRequestOrderByWithRelationInput | LecturerZoneRequestOrderByWithRelationInput[]
    cursor?: LecturerZoneRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LecturerZoneRequestScalarFieldEnum | LecturerZoneRequestScalarFieldEnum[]
  }

  /**
   * Zone.lecturerZoneAssigned
   */
  export type Zone$lecturerZoneAssignedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerZoneAssigned
     */
    select?: LecturerZoneAssignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerZoneAssigned
     */
    omit?: LecturerZoneAssignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerZoneAssignedInclude<ExtArgs> | null
    where?: LecturerZoneAssignedWhereInput
    orderBy?: LecturerZoneAssignedOrderByWithRelationInput | LecturerZoneAssignedOrderByWithRelationInput[]
    cursor?: LecturerZoneAssignedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LecturerZoneAssignedScalarFieldEnum | LecturerZoneAssignedScalarFieldEnum[]
  }

  /**
   * Zone without action
   */
  export type ZoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
  }


  /**
   * Model School
   */

  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  export type SchoolMinAggregateOutputType = {
    id: string | null
    name: string | null
    zoneId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchoolMaxAggregateOutputType = {
    id: string | null
    name: string | null
    zoneId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchoolCountAggregateOutputType = {
    id: number
    name: number
    zoneId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SchoolMinAggregateInputType = {
    id?: true
    name?: true
    zoneId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchoolMaxAggregateInputType = {
    id?: true
    name?: true
    zoneId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchoolCountAggregateInputType = {
    id?: true
    name?: true
    zoneId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which School to aggregate.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schools
    **/
    _count?: true | SchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolMaxAggregateInputType
  }

  export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool[P]>
      : GetScalarType<T[P], AggregateSchool[P]>
  }




  export type SchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolWhereInput
    orderBy?: SchoolOrderByWithAggregationInput | SchoolOrderByWithAggregationInput[]
    by: SchoolScalarFieldEnum[] | SchoolScalarFieldEnum
    having?: SchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolCountAggregateInputType | true
    _min?: SchoolMinAggregateInputType
    _max?: SchoolMaxAggregateInputType
  }

  export type SchoolGroupByOutputType = {
    id: string
    name: string
    zoneId: string
    createdAt: Date
    updatedAt: Date
    _count: SchoolCountAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  type GetSchoolGroupByPayload<T extends SchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolGroupByOutputType[P]>
        }
      >
    >


  export type SchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    zoneId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tpApplication?: boolean | School$tpApplicationArgs<ExtArgs>
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>



  export type SchoolSelectScalar = {
    id?: boolean
    name?: boolean
    zoneId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SchoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "zoneId" | "createdAt" | "updatedAt", ExtArgs["result"]["school"]>
  export type SchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tpApplication?: boolean | School$tpApplicationArgs<ExtArgs>
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "School"
    objects: {
      tpApplication: Prisma.$TpApplicationPayload<ExtArgs>[]
      zone: Prisma.$ZonePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      zoneId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["school"]>
    composites: {}
  }

  type SchoolGetPayload<S extends boolean | null | undefined | SchoolDefaultArgs> = $Result.GetResult<Prisma.$SchoolPayload, S>

  type SchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolCountAggregateInputType | true
    }

  export interface SchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['School'], meta: { name: 'School' } }
    /**
     * Find zero or one School that matches the filter.
     * @param {SchoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolFindUniqueArgs>(args: SelectSubset<T, SchoolFindUniqueArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one School that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolFindUniqueOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolFindFirstArgs>(args?: SelectSubset<T, SchoolFindFirstArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolWithIdOnly = await prisma.school.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolFindManyArgs>(args?: SelectSubset<T, SchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a School.
     * @param {SchoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     * 
     */
    create<T extends SchoolCreateArgs>(args: SelectSubset<T, SchoolCreateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schools.
     * @param {SchoolCreateManyArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolCreateManyArgs>(args?: SelectSubset<T, SchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a School.
     * @param {SchoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     * 
     */
    delete<T extends SchoolDeleteArgs>(args: SelectSubset<T, SchoolDeleteArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one School.
     * @param {SchoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolUpdateArgs>(args: SelectSubset<T, SchoolUpdateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schools.
     * @param {SchoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolDeleteManyArgs>(args?: SelectSubset<T, SchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolUpdateManyArgs>(args: SelectSubset<T, SchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one School.
     * @param {SchoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
     */
    upsert<T extends SchoolUpsertArgs>(args: SelectSubset<T, SchoolUpsertArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends SchoolCountArgs>(
      args?: Subset<T, SchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchoolAggregateArgs>(args: Subset<T, SchoolAggregateArgs>): Prisma.PrismaPromise<GetSchoolAggregateType<T>>

    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolGroupByArgs} args - Group by arguments.
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
      T extends SchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolGroupByArgs['orderBy'] }
        : { orderBy?: SchoolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the School model
   */
  readonly fields: SchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for School.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tpApplication<T extends School$tpApplicationArgs<ExtArgs> = {}>(args?: Subset<T, School$tpApplicationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TpApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    zone<T extends ZoneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZoneDefaultArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the School model
   */
  interface SchoolFieldRefs {
    readonly id: FieldRef<"School", 'String'>
    readonly name: FieldRef<"School", 'String'>
    readonly zoneId: FieldRef<"School", 'String'>
    readonly createdAt: FieldRef<"School", 'DateTime'>
    readonly updatedAt: FieldRef<"School", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * School findUnique
   */
  export type SchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findUniqueOrThrow
   */
  export type SchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findFirst
   */
  export type SchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findFirstOrThrow
   */
  export type SchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findMany
   */
  export type SchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which Schools to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School create
   */
  export type SchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to create a School.
     */
    data: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
  }

  /**
   * School createMany
   */
  export type SchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School update
   */
  export type SchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to update a School.
     */
    data: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
    /**
     * Choose, which School to update.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School updateMany
   */
  export type SchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School upsert
   */
  export type SchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The filter to search for the School to update in case it exists.
     */
    where: SchoolWhereUniqueInput
    /**
     * In case the School found by the `where` argument doesn't exist, create a new School with this data.
     */
    create: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
    /**
     * In case the School was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
  }

  /**
   * School delete
   */
  export type SchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter which School to delete.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School deleteMany
   */
  export type SchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schools to delete
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to delete.
     */
    limit?: number
  }

  /**
   * School.tpApplication
   */
  export type School$tpApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TpApplication
     */
    select?: TpApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TpApplication
     */
    omit?: TpApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TpApplicationInclude<ExtArgs> | null
    where?: TpApplicationWhereInput
    orderBy?: TpApplicationOrderByWithRelationInput | TpApplicationOrderByWithRelationInput[]
    cursor?: TpApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TpApplicationScalarFieldEnum | TpApplicationScalarFieldEnum[]
  }

  /**
   * School without action
   */
  export type SchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
  }


  /**
   * Model TpApplication
   */

  export type AggregateTpApplication = {
    _count: TpApplicationCountAggregateOutputType | null
    _min: TpApplicationMinAggregateOutputType | null
    _max: TpApplicationMaxAggregateOutputType | null
  }

  export type TpApplicationMinAggregateOutputType = {
    id: string | null
    schoolName: string | null
    position: string | null
    startDate: Date | null
    endDate: Date | null
    studentId: string | null
    schoolId: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TpApplicationMaxAggregateOutputType = {
    id: string | null
    schoolName: string | null
    position: string | null
    startDate: Date | null
    endDate: Date | null
    studentId: string | null
    schoolId: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TpApplicationCountAggregateOutputType = {
    id: number
    schoolName: number
    position: number
    startDate: number
    endDate: number
    studentId: number
    schoolId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TpApplicationMinAggregateInputType = {
    id?: true
    schoolName?: true
    position?: true
    startDate?: true
    endDate?: true
    studentId?: true
    schoolId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TpApplicationMaxAggregateInputType = {
    id?: true
    schoolName?: true
    position?: true
    startDate?: true
    endDate?: true
    studentId?: true
    schoolId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TpApplicationCountAggregateInputType = {
    id?: true
    schoolName?: true
    position?: true
    startDate?: true
    endDate?: true
    studentId?: true
    schoolId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TpApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TpApplication to aggregate.
     */
    where?: TpApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TpApplications to fetch.
     */
    orderBy?: TpApplicationOrderByWithRelationInput | TpApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TpApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TpApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TpApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TpApplications
    **/
    _count?: true | TpApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TpApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TpApplicationMaxAggregateInputType
  }

  export type GetTpApplicationAggregateType<T extends TpApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateTpApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTpApplication[P]>
      : GetScalarType<T[P], AggregateTpApplication[P]>
  }




  export type TpApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TpApplicationWhereInput
    orderBy?: TpApplicationOrderByWithAggregationInput | TpApplicationOrderByWithAggregationInput[]
    by: TpApplicationScalarFieldEnum[] | TpApplicationScalarFieldEnum
    having?: TpApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TpApplicationCountAggregateInputType | true
    _min?: TpApplicationMinAggregateInputType
    _max?: TpApplicationMaxAggregateInputType
  }

  export type TpApplicationGroupByOutputType = {
    id: string
    schoolName: string
    position: string
    startDate: Date
    endDate: Date
    studentId: string
    schoolId: string
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: TpApplicationCountAggregateOutputType | null
    _min: TpApplicationMinAggregateOutputType | null
    _max: TpApplicationMaxAggregateOutputType | null
  }

  type GetTpApplicationGroupByPayload<T extends TpApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TpApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TpApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TpApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], TpApplicationGroupByOutputType[P]>
        }
      >
    >


  export type TpApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolName?: boolean
    position?: boolean
    startDate?: boolean
    endDate?: boolean
    studentId?: boolean
    schoolId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tpApplication"]>



  export type TpApplicationSelectScalar = {
    id?: boolean
    schoolName?: boolean
    position?: boolean
    startDate?: boolean
    endDate?: boolean
    studentId?: boolean
    schoolId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TpApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schoolName" | "position" | "startDate" | "endDate" | "studentId" | "schoolId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["tpApplication"]>
  export type TpApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $TpApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TpApplication"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      school: Prisma.$SchoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      schoolName: string
      position: string
      startDate: Date
      endDate: Date
      studentId: string
      schoolId: string
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tpApplication"]>
    composites: {}
  }

  type TpApplicationGetPayload<S extends boolean | null | undefined | TpApplicationDefaultArgs> = $Result.GetResult<Prisma.$TpApplicationPayload, S>

  type TpApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TpApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TpApplicationCountAggregateInputType | true
    }

  export interface TpApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TpApplication'], meta: { name: 'TpApplication' } }
    /**
     * Find zero or one TpApplication that matches the filter.
     * @param {TpApplicationFindUniqueArgs} args - Arguments to find a TpApplication
     * @example
     * // Get one TpApplication
     * const tpApplication = await prisma.tpApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TpApplicationFindUniqueArgs>(args: SelectSubset<T, TpApplicationFindUniqueArgs<ExtArgs>>): Prisma__TpApplicationClient<$Result.GetResult<Prisma.$TpApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TpApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TpApplicationFindUniqueOrThrowArgs} args - Arguments to find a TpApplication
     * @example
     * // Get one TpApplication
     * const tpApplication = await prisma.tpApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TpApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, TpApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TpApplicationClient<$Result.GetResult<Prisma.$TpApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TpApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TpApplicationFindFirstArgs} args - Arguments to find a TpApplication
     * @example
     * // Get one TpApplication
     * const tpApplication = await prisma.tpApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TpApplicationFindFirstArgs>(args?: SelectSubset<T, TpApplicationFindFirstArgs<ExtArgs>>): Prisma__TpApplicationClient<$Result.GetResult<Prisma.$TpApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TpApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TpApplicationFindFirstOrThrowArgs} args - Arguments to find a TpApplication
     * @example
     * // Get one TpApplication
     * const tpApplication = await prisma.tpApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TpApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, TpApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__TpApplicationClient<$Result.GetResult<Prisma.$TpApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TpApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TpApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TpApplications
     * const tpApplications = await prisma.tpApplication.findMany()
     * 
     * // Get first 10 TpApplications
     * const tpApplications = await prisma.tpApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tpApplicationWithIdOnly = await prisma.tpApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TpApplicationFindManyArgs>(args?: SelectSubset<T, TpApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TpApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TpApplication.
     * @param {TpApplicationCreateArgs} args - Arguments to create a TpApplication.
     * @example
     * // Create one TpApplication
     * const TpApplication = await prisma.tpApplication.create({
     *   data: {
     *     // ... data to create a TpApplication
     *   }
     * })
     * 
     */
    create<T extends TpApplicationCreateArgs>(args: SelectSubset<T, TpApplicationCreateArgs<ExtArgs>>): Prisma__TpApplicationClient<$Result.GetResult<Prisma.$TpApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TpApplications.
     * @param {TpApplicationCreateManyArgs} args - Arguments to create many TpApplications.
     * @example
     * // Create many TpApplications
     * const tpApplication = await prisma.tpApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TpApplicationCreateManyArgs>(args?: SelectSubset<T, TpApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TpApplication.
     * @param {TpApplicationDeleteArgs} args - Arguments to delete one TpApplication.
     * @example
     * // Delete one TpApplication
     * const TpApplication = await prisma.tpApplication.delete({
     *   where: {
     *     // ... filter to delete one TpApplication
     *   }
     * })
     * 
     */
    delete<T extends TpApplicationDeleteArgs>(args: SelectSubset<T, TpApplicationDeleteArgs<ExtArgs>>): Prisma__TpApplicationClient<$Result.GetResult<Prisma.$TpApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TpApplication.
     * @param {TpApplicationUpdateArgs} args - Arguments to update one TpApplication.
     * @example
     * // Update one TpApplication
     * const tpApplication = await prisma.tpApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TpApplicationUpdateArgs>(args: SelectSubset<T, TpApplicationUpdateArgs<ExtArgs>>): Prisma__TpApplicationClient<$Result.GetResult<Prisma.$TpApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TpApplications.
     * @param {TpApplicationDeleteManyArgs} args - Arguments to filter TpApplications to delete.
     * @example
     * // Delete a few TpApplications
     * const { count } = await prisma.tpApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TpApplicationDeleteManyArgs>(args?: SelectSubset<T, TpApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TpApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TpApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TpApplications
     * const tpApplication = await prisma.tpApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TpApplicationUpdateManyArgs>(args: SelectSubset<T, TpApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TpApplication.
     * @param {TpApplicationUpsertArgs} args - Arguments to update or create a TpApplication.
     * @example
     * // Update or create a TpApplication
     * const tpApplication = await prisma.tpApplication.upsert({
     *   create: {
     *     // ... data to create a TpApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TpApplication we want to update
     *   }
     * })
     */
    upsert<T extends TpApplicationUpsertArgs>(args: SelectSubset<T, TpApplicationUpsertArgs<ExtArgs>>): Prisma__TpApplicationClient<$Result.GetResult<Prisma.$TpApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TpApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TpApplicationCountArgs} args - Arguments to filter TpApplications to count.
     * @example
     * // Count the number of TpApplications
     * const count = await prisma.tpApplication.count({
     *   where: {
     *     // ... the filter for the TpApplications we want to count
     *   }
     * })
    **/
    count<T extends TpApplicationCountArgs>(
      args?: Subset<T, TpApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TpApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TpApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TpApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TpApplicationAggregateArgs>(args: Subset<T, TpApplicationAggregateArgs>): Prisma.PrismaPromise<GetTpApplicationAggregateType<T>>

    /**
     * Group by TpApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TpApplicationGroupByArgs} args - Group by arguments.
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
      T extends TpApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TpApplicationGroupByArgs['orderBy'] }
        : { orderBy?: TpApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TpApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTpApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TpApplication model
   */
  readonly fields: TpApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TpApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TpApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TpApplication model
   */
  interface TpApplicationFieldRefs {
    readonly id: FieldRef<"TpApplication", 'String'>
    readonly schoolName: FieldRef<"TpApplication", 'String'>
    readonly position: FieldRef<"TpApplication", 'String'>
    readonly startDate: FieldRef<"TpApplication", 'DateTime'>
    readonly endDate: FieldRef<"TpApplication", 'DateTime'>
    readonly studentId: FieldRef<"TpApplication", 'String'>
    readonly schoolId: FieldRef<"TpApplication", 'String'>
    readonly status: FieldRef<"TpApplication", 'Status'>
    readonly createdAt: FieldRef<"TpApplication", 'DateTime'>
    readonly updatedAt: FieldRef<"TpApplication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TpApplication findUnique
   */
  export type TpApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TpApplication
     */
    select?: TpApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TpApplication
     */
    omit?: TpApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TpApplicationInclude<ExtArgs> | null
    /**
     * Filter, which TpApplication to fetch.
     */
    where: TpApplicationWhereUniqueInput
  }

  /**
   * TpApplication findUniqueOrThrow
   */
  export type TpApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TpApplication
     */
    select?: TpApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TpApplication
     */
    omit?: TpApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TpApplicationInclude<ExtArgs> | null
    /**
     * Filter, which TpApplication to fetch.
     */
    where: TpApplicationWhereUniqueInput
  }

  /**
   * TpApplication findFirst
   */
  export type TpApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TpApplication
     */
    select?: TpApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TpApplication
     */
    omit?: TpApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TpApplicationInclude<ExtArgs> | null
    /**
     * Filter, which TpApplication to fetch.
     */
    where?: TpApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TpApplications to fetch.
     */
    orderBy?: TpApplicationOrderByWithRelationInput | TpApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TpApplications.
     */
    cursor?: TpApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TpApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TpApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TpApplications.
     */
    distinct?: TpApplicationScalarFieldEnum | TpApplicationScalarFieldEnum[]
  }

  /**
   * TpApplication findFirstOrThrow
   */
  export type TpApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TpApplication
     */
    select?: TpApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TpApplication
     */
    omit?: TpApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TpApplicationInclude<ExtArgs> | null
    /**
     * Filter, which TpApplication to fetch.
     */
    where?: TpApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TpApplications to fetch.
     */
    orderBy?: TpApplicationOrderByWithRelationInput | TpApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TpApplications.
     */
    cursor?: TpApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TpApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TpApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TpApplications.
     */
    distinct?: TpApplicationScalarFieldEnum | TpApplicationScalarFieldEnum[]
  }

  /**
   * TpApplication findMany
   */
  export type TpApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TpApplication
     */
    select?: TpApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TpApplication
     */
    omit?: TpApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TpApplicationInclude<ExtArgs> | null
    /**
     * Filter, which TpApplications to fetch.
     */
    where?: TpApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TpApplications to fetch.
     */
    orderBy?: TpApplicationOrderByWithRelationInput | TpApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TpApplications.
     */
    cursor?: TpApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TpApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TpApplications.
     */
    skip?: number
    distinct?: TpApplicationScalarFieldEnum | TpApplicationScalarFieldEnum[]
  }

  /**
   * TpApplication create
   */
  export type TpApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TpApplication
     */
    select?: TpApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TpApplication
     */
    omit?: TpApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TpApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a TpApplication.
     */
    data: XOR<TpApplicationCreateInput, TpApplicationUncheckedCreateInput>
  }

  /**
   * TpApplication createMany
   */
  export type TpApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TpApplications.
     */
    data: TpApplicationCreateManyInput | TpApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TpApplication update
   */
  export type TpApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TpApplication
     */
    select?: TpApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TpApplication
     */
    omit?: TpApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TpApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a TpApplication.
     */
    data: XOR<TpApplicationUpdateInput, TpApplicationUncheckedUpdateInput>
    /**
     * Choose, which TpApplication to update.
     */
    where: TpApplicationWhereUniqueInput
  }

  /**
   * TpApplication updateMany
   */
  export type TpApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TpApplications.
     */
    data: XOR<TpApplicationUpdateManyMutationInput, TpApplicationUncheckedUpdateManyInput>
    /**
     * Filter which TpApplications to update
     */
    where?: TpApplicationWhereInput
    /**
     * Limit how many TpApplications to update.
     */
    limit?: number
  }

  /**
   * TpApplication upsert
   */
  export type TpApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TpApplication
     */
    select?: TpApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TpApplication
     */
    omit?: TpApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TpApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the TpApplication to update in case it exists.
     */
    where: TpApplicationWhereUniqueInput
    /**
     * In case the TpApplication found by the `where` argument doesn't exist, create a new TpApplication with this data.
     */
    create: XOR<TpApplicationCreateInput, TpApplicationUncheckedCreateInput>
    /**
     * In case the TpApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TpApplicationUpdateInput, TpApplicationUncheckedUpdateInput>
  }

  /**
   * TpApplication delete
   */
  export type TpApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TpApplication
     */
    select?: TpApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TpApplication
     */
    omit?: TpApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TpApplicationInclude<ExtArgs> | null
    /**
     * Filter which TpApplication to delete.
     */
    where: TpApplicationWhereUniqueInput
  }

  /**
   * TpApplication deleteMany
   */
  export type TpApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TpApplications to delete
     */
    where?: TpApplicationWhereInput
    /**
     * Limit how many TpApplications to delete.
     */
    limit?: number
  }

  /**
   * TpApplication without action
   */
  export type TpApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TpApplication
     */
    select?: TpApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TpApplication
     */
    omit?: TpApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TpApplicationInclude<ExtArgs> | null
  }


  /**
   * Model LecturerZoneAssigned
   */

  export type AggregateLecturerZoneAssigned = {
    _count: LecturerZoneAssignedCountAggregateOutputType | null
    _min: LecturerZoneAssignedMinAggregateOutputType | null
    _max: LecturerZoneAssignedMaxAggregateOutputType | null
  }

  export type LecturerZoneAssignedMinAggregateOutputType = {
    id: string | null
    lecturerId: string | null
    zoneId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LecturerZoneAssignedMaxAggregateOutputType = {
    id: string | null
    lecturerId: string | null
    zoneId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LecturerZoneAssignedCountAggregateOutputType = {
    id: number
    lecturerId: number
    zoneId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LecturerZoneAssignedMinAggregateInputType = {
    id?: true
    lecturerId?: true
    zoneId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LecturerZoneAssignedMaxAggregateInputType = {
    id?: true
    lecturerId?: true
    zoneId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LecturerZoneAssignedCountAggregateInputType = {
    id?: true
    lecturerId?: true
    zoneId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LecturerZoneAssignedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LecturerZoneAssigned to aggregate.
     */
    where?: LecturerZoneAssignedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LecturerZoneAssigneds to fetch.
     */
    orderBy?: LecturerZoneAssignedOrderByWithRelationInput | LecturerZoneAssignedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LecturerZoneAssignedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LecturerZoneAssigneds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LecturerZoneAssigneds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LecturerZoneAssigneds
    **/
    _count?: true | LecturerZoneAssignedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LecturerZoneAssignedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LecturerZoneAssignedMaxAggregateInputType
  }

  export type GetLecturerZoneAssignedAggregateType<T extends LecturerZoneAssignedAggregateArgs> = {
        [P in keyof T & keyof AggregateLecturerZoneAssigned]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLecturerZoneAssigned[P]>
      : GetScalarType<T[P], AggregateLecturerZoneAssigned[P]>
  }




  export type LecturerZoneAssignedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LecturerZoneAssignedWhereInput
    orderBy?: LecturerZoneAssignedOrderByWithAggregationInput | LecturerZoneAssignedOrderByWithAggregationInput[]
    by: LecturerZoneAssignedScalarFieldEnum[] | LecturerZoneAssignedScalarFieldEnum
    having?: LecturerZoneAssignedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LecturerZoneAssignedCountAggregateInputType | true
    _min?: LecturerZoneAssignedMinAggregateInputType
    _max?: LecturerZoneAssignedMaxAggregateInputType
  }

  export type LecturerZoneAssignedGroupByOutputType = {
    id: string
    lecturerId: string
    zoneId: string
    createdAt: Date
    updatedAt: Date
    _count: LecturerZoneAssignedCountAggregateOutputType | null
    _min: LecturerZoneAssignedMinAggregateOutputType | null
    _max: LecturerZoneAssignedMaxAggregateOutputType | null
  }

  type GetLecturerZoneAssignedGroupByPayload<T extends LecturerZoneAssignedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LecturerZoneAssignedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LecturerZoneAssignedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LecturerZoneAssignedGroupByOutputType[P]>
            : GetScalarType<T[P], LecturerZoneAssignedGroupByOutputType[P]>
        }
      >
    >


  export type LecturerZoneAssignedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lecturerId?: boolean
    zoneId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lecturerZoneAssigned"]>



  export type LecturerZoneAssignedSelectScalar = {
    id?: boolean
    lecturerId?: boolean
    zoneId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LecturerZoneAssignedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lecturerId" | "zoneId" | "createdAt" | "updatedAt", ExtArgs["result"]["lecturerZoneAssigned"]>
  export type LecturerZoneAssignedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
  }

  export type $LecturerZoneAssignedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LecturerZoneAssigned"
    objects: {
      lecturer: Prisma.$LecturerPayload<ExtArgs>
      zone: Prisma.$ZonePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lecturerId: string
      zoneId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lecturerZoneAssigned"]>
    composites: {}
  }

  type LecturerZoneAssignedGetPayload<S extends boolean | null | undefined | LecturerZoneAssignedDefaultArgs> = $Result.GetResult<Prisma.$LecturerZoneAssignedPayload, S>

  type LecturerZoneAssignedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LecturerZoneAssignedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LecturerZoneAssignedCountAggregateInputType | true
    }

  export interface LecturerZoneAssignedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LecturerZoneAssigned'], meta: { name: 'LecturerZoneAssigned' } }
    /**
     * Find zero or one LecturerZoneAssigned that matches the filter.
     * @param {LecturerZoneAssignedFindUniqueArgs} args - Arguments to find a LecturerZoneAssigned
     * @example
     * // Get one LecturerZoneAssigned
     * const lecturerZoneAssigned = await prisma.lecturerZoneAssigned.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LecturerZoneAssignedFindUniqueArgs>(args: SelectSubset<T, LecturerZoneAssignedFindUniqueArgs<ExtArgs>>): Prisma__LecturerZoneAssignedClient<$Result.GetResult<Prisma.$LecturerZoneAssignedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LecturerZoneAssigned that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LecturerZoneAssignedFindUniqueOrThrowArgs} args - Arguments to find a LecturerZoneAssigned
     * @example
     * // Get one LecturerZoneAssigned
     * const lecturerZoneAssigned = await prisma.lecturerZoneAssigned.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LecturerZoneAssignedFindUniqueOrThrowArgs>(args: SelectSubset<T, LecturerZoneAssignedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LecturerZoneAssignedClient<$Result.GetResult<Prisma.$LecturerZoneAssignedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LecturerZoneAssigned that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerZoneAssignedFindFirstArgs} args - Arguments to find a LecturerZoneAssigned
     * @example
     * // Get one LecturerZoneAssigned
     * const lecturerZoneAssigned = await prisma.lecturerZoneAssigned.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LecturerZoneAssignedFindFirstArgs>(args?: SelectSubset<T, LecturerZoneAssignedFindFirstArgs<ExtArgs>>): Prisma__LecturerZoneAssignedClient<$Result.GetResult<Prisma.$LecturerZoneAssignedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LecturerZoneAssigned that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerZoneAssignedFindFirstOrThrowArgs} args - Arguments to find a LecturerZoneAssigned
     * @example
     * // Get one LecturerZoneAssigned
     * const lecturerZoneAssigned = await prisma.lecturerZoneAssigned.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LecturerZoneAssignedFindFirstOrThrowArgs>(args?: SelectSubset<T, LecturerZoneAssignedFindFirstOrThrowArgs<ExtArgs>>): Prisma__LecturerZoneAssignedClient<$Result.GetResult<Prisma.$LecturerZoneAssignedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LecturerZoneAssigneds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerZoneAssignedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LecturerZoneAssigneds
     * const lecturerZoneAssigneds = await prisma.lecturerZoneAssigned.findMany()
     * 
     * // Get first 10 LecturerZoneAssigneds
     * const lecturerZoneAssigneds = await prisma.lecturerZoneAssigned.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lecturerZoneAssignedWithIdOnly = await prisma.lecturerZoneAssigned.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LecturerZoneAssignedFindManyArgs>(args?: SelectSubset<T, LecturerZoneAssignedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturerZoneAssignedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LecturerZoneAssigned.
     * @param {LecturerZoneAssignedCreateArgs} args - Arguments to create a LecturerZoneAssigned.
     * @example
     * // Create one LecturerZoneAssigned
     * const LecturerZoneAssigned = await prisma.lecturerZoneAssigned.create({
     *   data: {
     *     // ... data to create a LecturerZoneAssigned
     *   }
     * })
     * 
     */
    create<T extends LecturerZoneAssignedCreateArgs>(args: SelectSubset<T, LecturerZoneAssignedCreateArgs<ExtArgs>>): Prisma__LecturerZoneAssignedClient<$Result.GetResult<Prisma.$LecturerZoneAssignedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LecturerZoneAssigneds.
     * @param {LecturerZoneAssignedCreateManyArgs} args - Arguments to create many LecturerZoneAssigneds.
     * @example
     * // Create many LecturerZoneAssigneds
     * const lecturerZoneAssigned = await prisma.lecturerZoneAssigned.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LecturerZoneAssignedCreateManyArgs>(args?: SelectSubset<T, LecturerZoneAssignedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LecturerZoneAssigned.
     * @param {LecturerZoneAssignedDeleteArgs} args - Arguments to delete one LecturerZoneAssigned.
     * @example
     * // Delete one LecturerZoneAssigned
     * const LecturerZoneAssigned = await prisma.lecturerZoneAssigned.delete({
     *   where: {
     *     // ... filter to delete one LecturerZoneAssigned
     *   }
     * })
     * 
     */
    delete<T extends LecturerZoneAssignedDeleteArgs>(args: SelectSubset<T, LecturerZoneAssignedDeleteArgs<ExtArgs>>): Prisma__LecturerZoneAssignedClient<$Result.GetResult<Prisma.$LecturerZoneAssignedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LecturerZoneAssigned.
     * @param {LecturerZoneAssignedUpdateArgs} args - Arguments to update one LecturerZoneAssigned.
     * @example
     * // Update one LecturerZoneAssigned
     * const lecturerZoneAssigned = await prisma.lecturerZoneAssigned.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LecturerZoneAssignedUpdateArgs>(args: SelectSubset<T, LecturerZoneAssignedUpdateArgs<ExtArgs>>): Prisma__LecturerZoneAssignedClient<$Result.GetResult<Prisma.$LecturerZoneAssignedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LecturerZoneAssigneds.
     * @param {LecturerZoneAssignedDeleteManyArgs} args - Arguments to filter LecturerZoneAssigneds to delete.
     * @example
     * // Delete a few LecturerZoneAssigneds
     * const { count } = await prisma.lecturerZoneAssigned.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LecturerZoneAssignedDeleteManyArgs>(args?: SelectSubset<T, LecturerZoneAssignedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LecturerZoneAssigneds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerZoneAssignedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LecturerZoneAssigneds
     * const lecturerZoneAssigned = await prisma.lecturerZoneAssigned.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LecturerZoneAssignedUpdateManyArgs>(args: SelectSubset<T, LecturerZoneAssignedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LecturerZoneAssigned.
     * @param {LecturerZoneAssignedUpsertArgs} args - Arguments to update or create a LecturerZoneAssigned.
     * @example
     * // Update or create a LecturerZoneAssigned
     * const lecturerZoneAssigned = await prisma.lecturerZoneAssigned.upsert({
     *   create: {
     *     // ... data to create a LecturerZoneAssigned
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LecturerZoneAssigned we want to update
     *   }
     * })
     */
    upsert<T extends LecturerZoneAssignedUpsertArgs>(args: SelectSubset<T, LecturerZoneAssignedUpsertArgs<ExtArgs>>): Prisma__LecturerZoneAssignedClient<$Result.GetResult<Prisma.$LecturerZoneAssignedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LecturerZoneAssigneds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerZoneAssignedCountArgs} args - Arguments to filter LecturerZoneAssigneds to count.
     * @example
     * // Count the number of LecturerZoneAssigneds
     * const count = await prisma.lecturerZoneAssigned.count({
     *   where: {
     *     // ... the filter for the LecturerZoneAssigneds we want to count
     *   }
     * })
    **/
    count<T extends LecturerZoneAssignedCountArgs>(
      args?: Subset<T, LecturerZoneAssignedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LecturerZoneAssignedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LecturerZoneAssigned.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerZoneAssignedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LecturerZoneAssignedAggregateArgs>(args: Subset<T, LecturerZoneAssignedAggregateArgs>): Prisma.PrismaPromise<GetLecturerZoneAssignedAggregateType<T>>

    /**
     * Group by LecturerZoneAssigned.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerZoneAssignedGroupByArgs} args - Group by arguments.
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
      T extends LecturerZoneAssignedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LecturerZoneAssignedGroupByArgs['orderBy'] }
        : { orderBy?: LecturerZoneAssignedGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LecturerZoneAssignedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLecturerZoneAssignedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LecturerZoneAssigned model
   */
  readonly fields: LecturerZoneAssignedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LecturerZoneAssigned.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LecturerZoneAssignedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lecturer<T extends LecturerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LecturerDefaultArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    zone<T extends ZoneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZoneDefaultArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LecturerZoneAssigned model
   */
  interface LecturerZoneAssignedFieldRefs {
    readonly id: FieldRef<"LecturerZoneAssigned", 'String'>
    readonly lecturerId: FieldRef<"LecturerZoneAssigned", 'String'>
    readonly zoneId: FieldRef<"LecturerZoneAssigned", 'String'>
    readonly createdAt: FieldRef<"LecturerZoneAssigned", 'DateTime'>
    readonly updatedAt: FieldRef<"LecturerZoneAssigned", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LecturerZoneAssigned findUnique
   */
  export type LecturerZoneAssignedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerZoneAssigned
     */
    select?: LecturerZoneAssignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerZoneAssigned
     */
    omit?: LecturerZoneAssignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerZoneAssignedInclude<ExtArgs> | null
    /**
     * Filter, which LecturerZoneAssigned to fetch.
     */
    where: LecturerZoneAssignedWhereUniqueInput
  }

  /**
   * LecturerZoneAssigned findUniqueOrThrow
   */
  export type LecturerZoneAssignedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerZoneAssigned
     */
    select?: LecturerZoneAssignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerZoneAssigned
     */
    omit?: LecturerZoneAssignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerZoneAssignedInclude<ExtArgs> | null
    /**
     * Filter, which LecturerZoneAssigned to fetch.
     */
    where: LecturerZoneAssignedWhereUniqueInput
  }

  /**
   * LecturerZoneAssigned findFirst
   */
  export type LecturerZoneAssignedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerZoneAssigned
     */
    select?: LecturerZoneAssignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerZoneAssigned
     */
    omit?: LecturerZoneAssignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerZoneAssignedInclude<ExtArgs> | null
    /**
     * Filter, which LecturerZoneAssigned to fetch.
     */
    where?: LecturerZoneAssignedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LecturerZoneAssigneds to fetch.
     */
    orderBy?: LecturerZoneAssignedOrderByWithRelationInput | LecturerZoneAssignedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LecturerZoneAssigneds.
     */
    cursor?: LecturerZoneAssignedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LecturerZoneAssigneds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LecturerZoneAssigneds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LecturerZoneAssigneds.
     */
    distinct?: LecturerZoneAssignedScalarFieldEnum | LecturerZoneAssignedScalarFieldEnum[]
  }

  /**
   * LecturerZoneAssigned findFirstOrThrow
   */
  export type LecturerZoneAssignedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerZoneAssigned
     */
    select?: LecturerZoneAssignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerZoneAssigned
     */
    omit?: LecturerZoneAssignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerZoneAssignedInclude<ExtArgs> | null
    /**
     * Filter, which LecturerZoneAssigned to fetch.
     */
    where?: LecturerZoneAssignedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LecturerZoneAssigneds to fetch.
     */
    orderBy?: LecturerZoneAssignedOrderByWithRelationInput | LecturerZoneAssignedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LecturerZoneAssigneds.
     */
    cursor?: LecturerZoneAssignedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LecturerZoneAssigneds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LecturerZoneAssigneds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LecturerZoneAssigneds.
     */
    distinct?: LecturerZoneAssignedScalarFieldEnum | LecturerZoneAssignedScalarFieldEnum[]
  }

  /**
   * LecturerZoneAssigned findMany
   */
  export type LecturerZoneAssignedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerZoneAssigned
     */
    select?: LecturerZoneAssignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerZoneAssigned
     */
    omit?: LecturerZoneAssignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerZoneAssignedInclude<ExtArgs> | null
    /**
     * Filter, which LecturerZoneAssigneds to fetch.
     */
    where?: LecturerZoneAssignedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LecturerZoneAssigneds to fetch.
     */
    orderBy?: LecturerZoneAssignedOrderByWithRelationInput | LecturerZoneAssignedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LecturerZoneAssigneds.
     */
    cursor?: LecturerZoneAssignedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LecturerZoneAssigneds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LecturerZoneAssigneds.
     */
    skip?: number
    distinct?: LecturerZoneAssignedScalarFieldEnum | LecturerZoneAssignedScalarFieldEnum[]
  }

  /**
   * LecturerZoneAssigned create
   */
  export type LecturerZoneAssignedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerZoneAssigned
     */
    select?: LecturerZoneAssignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerZoneAssigned
     */
    omit?: LecturerZoneAssignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerZoneAssignedInclude<ExtArgs> | null
    /**
     * The data needed to create a LecturerZoneAssigned.
     */
    data: XOR<LecturerZoneAssignedCreateInput, LecturerZoneAssignedUncheckedCreateInput>
  }

  /**
   * LecturerZoneAssigned createMany
   */
  export type LecturerZoneAssignedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LecturerZoneAssigneds.
     */
    data: LecturerZoneAssignedCreateManyInput | LecturerZoneAssignedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LecturerZoneAssigned update
   */
  export type LecturerZoneAssignedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerZoneAssigned
     */
    select?: LecturerZoneAssignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerZoneAssigned
     */
    omit?: LecturerZoneAssignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerZoneAssignedInclude<ExtArgs> | null
    /**
     * The data needed to update a LecturerZoneAssigned.
     */
    data: XOR<LecturerZoneAssignedUpdateInput, LecturerZoneAssignedUncheckedUpdateInput>
    /**
     * Choose, which LecturerZoneAssigned to update.
     */
    where: LecturerZoneAssignedWhereUniqueInput
  }

  /**
   * LecturerZoneAssigned updateMany
   */
  export type LecturerZoneAssignedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LecturerZoneAssigneds.
     */
    data: XOR<LecturerZoneAssignedUpdateManyMutationInput, LecturerZoneAssignedUncheckedUpdateManyInput>
    /**
     * Filter which LecturerZoneAssigneds to update
     */
    where?: LecturerZoneAssignedWhereInput
    /**
     * Limit how many LecturerZoneAssigneds to update.
     */
    limit?: number
  }

  /**
   * LecturerZoneAssigned upsert
   */
  export type LecturerZoneAssignedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerZoneAssigned
     */
    select?: LecturerZoneAssignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerZoneAssigned
     */
    omit?: LecturerZoneAssignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerZoneAssignedInclude<ExtArgs> | null
    /**
     * The filter to search for the LecturerZoneAssigned to update in case it exists.
     */
    where: LecturerZoneAssignedWhereUniqueInput
    /**
     * In case the LecturerZoneAssigned found by the `where` argument doesn't exist, create a new LecturerZoneAssigned with this data.
     */
    create: XOR<LecturerZoneAssignedCreateInput, LecturerZoneAssignedUncheckedCreateInput>
    /**
     * In case the LecturerZoneAssigned was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LecturerZoneAssignedUpdateInput, LecturerZoneAssignedUncheckedUpdateInput>
  }

  /**
   * LecturerZoneAssigned delete
   */
  export type LecturerZoneAssignedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerZoneAssigned
     */
    select?: LecturerZoneAssignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerZoneAssigned
     */
    omit?: LecturerZoneAssignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerZoneAssignedInclude<ExtArgs> | null
    /**
     * Filter which LecturerZoneAssigned to delete.
     */
    where: LecturerZoneAssignedWhereUniqueInput
  }

  /**
   * LecturerZoneAssigned deleteMany
   */
  export type LecturerZoneAssignedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LecturerZoneAssigneds to delete
     */
    where?: LecturerZoneAssignedWhereInput
    /**
     * Limit how many LecturerZoneAssigneds to delete.
     */
    limit?: number
  }

  /**
   * LecturerZoneAssigned without action
   */
  export type LecturerZoneAssignedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerZoneAssigned
     */
    select?: LecturerZoneAssignedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerZoneAssigned
     */
    omit?: LecturerZoneAssignedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerZoneAssignedInclude<ExtArgs> | null
  }


  /**
   * Model LecturerZoneRequest
   */

  export type AggregateLecturerZoneRequest = {
    _count: LecturerZoneRequestCountAggregateOutputType | null
    _min: LecturerZoneRequestMinAggregateOutputType | null
    _max: LecturerZoneRequestMaxAggregateOutputType | null
  }

  export type LecturerZoneRequestMinAggregateOutputType = {
    id: string | null
    lecturerId: string | null
    zoneId: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LecturerZoneRequestMaxAggregateOutputType = {
    id: string | null
    lecturerId: string | null
    zoneId: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LecturerZoneRequestCountAggregateOutputType = {
    id: number
    lecturerId: number
    zoneId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LecturerZoneRequestMinAggregateInputType = {
    id?: true
    lecturerId?: true
    zoneId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LecturerZoneRequestMaxAggregateInputType = {
    id?: true
    lecturerId?: true
    zoneId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LecturerZoneRequestCountAggregateInputType = {
    id?: true
    lecturerId?: true
    zoneId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LecturerZoneRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LecturerZoneRequest to aggregate.
     */
    where?: LecturerZoneRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LecturerZoneRequests to fetch.
     */
    orderBy?: LecturerZoneRequestOrderByWithRelationInput | LecturerZoneRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LecturerZoneRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LecturerZoneRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LecturerZoneRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LecturerZoneRequests
    **/
    _count?: true | LecturerZoneRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LecturerZoneRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LecturerZoneRequestMaxAggregateInputType
  }

  export type GetLecturerZoneRequestAggregateType<T extends LecturerZoneRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateLecturerZoneRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLecturerZoneRequest[P]>
      : GetScalarType<T[P], AggregateLecturerZoneRequest[P]>
  }




  export type LecturerZoneRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LecturerZoneRequestWhereInput
    orderBy?: LecturerZoneRequestOrderByWithAggregationInput | LecturerZoneRequestOrderByWithAggregationInput[]
    by: LecturerZoneRequestScalarFieldEnum[] | LecturerZoneRequestScalarFieldEnum
    having?: LecturerZoneRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LecturerZoneRequestCountAggregateInputType | true
    _min?: LecturerZoneRequestMinAggregateInputType
    _max?: LecturerZoneRequestMaxAggregateInputType
  }

  export type LecturerZoneRequestGroupByOutputType = {
    id: string
    lecturerId: string
    zoneId: string
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: LecturerZoneRequestCountAggregateOutputType | null
    _min: LecturerZoneRequestMinAggregateOutputType | null
    _max: LecturerZoneRequestMaxAggregateOutputType | null
  }

  type GetLecturerZoneRequestGroupByPayload<T extends LecturerZoneRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LecturerZoneRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LecturerZoneRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LecturerZoneRequestGroupByOutputType[P]>
            : GetScalarType<T[P], LecturerZoneRequestGroupByOutputType[P]>
        }
      >
    >


  export type LecturerZoneRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lecturerId?: boolean
    zoneId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lecturerZoneRequest"]>



  export type LecturerZoneRequestSelectScalar = {
    id?: boolean
    lecturerId?: boolean
    zoneId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LecturerZoneRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lecturerId" | "zoneId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["lecturerZoneRequest"]>
  export type LecturerZoneRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
  }

  export type $LecturerZoneRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LecturerZoneRequest"
    objects: {
      lecturer: Prisma.$LecturerPayload<ExtArgs>
      zone: Prisma.$ZonePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lecturerId: string
      zoneId: string
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lecturerZoneRequest"]>
    composites: {}
  }

  type LecturerZoneRequestGetPayload<S extends boolean | null | undefined | LecturerZoneRequestDefaultArgs> = $Result.GetResult<Prisma.$LecturerZoneRequestPayload, S>

  type LecturerZoneRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LecturerZoneRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LecturerZoneRequestCountAggregateInputType | true
    }

  export interface LecturerZoneRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LecturerZoneRequest'], meta: { name: 'LecturerZoneRequest' } }
    /**
     * Find zero or one LecturerZoneRequest that matches the filter.
     * @param {LecturerZoneRequestFindUniqueArgs} args - Arguments to find a LecturerZoneRequest
     * @example
     * // Get one LecturerZoneRequest
     * const lecturerZoneRequest = await prisma.lecturerZoneRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LecturerZoneRequestFindUniqueArgs>(args: SelectSubset<T, LecturerZoneRequestFindUniqueArgs<ExtArgs>>): Prisma__LecturerZoneRequestClient<$Result.GetResult<Prisma.$LecturerZoneRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LecturerZoneRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LecturerZoneRequestFindUniqueOrThrowArgs} args - Arguments to find a LecturerZoneRequest
     * @example
     * // Get one LecturerZoneRequest
     * const lecturerZoneRequest = await prisma.lecturerZoneRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LecturerZoneRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, LecturerZoneRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LecturerZoneRequestClient<$Result.GetResult<Prisma.$LecturerZoneRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LecturerZoneRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerZoneRequestFindFirstArgs} args - Arguments to find a LecturerZoneRequest
     * @example
     * // Get one LecturerZoneRequest
     * const lecturerZoneRequest = await prisma.lecturerZoneRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LecturerZoneRequestFindFirstArgs>(args?: SelectSubset<T, LecturerZoneRequestFindFirstArgs<ExtArgs>>): Prisma__LecturerZoneRequestClient<$Result.GetResult<Prisma.$LecturerZoneRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LecturerZoneRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerZoneRequestFindFirstOrThrowArgs} args - Arguments to find a LecturerZoneRequest
     * @example
     * // Get one LecturerZoneRequest
     * const lecturerZoneRequest = await prisma.lecturerZoneRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LecturerZoneRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, LecturerZoneRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__LecturerZoneRequestClient<$Result.GetResult<Prisma.$LecturerZoneRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LecturerZoneRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerZoneRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LecturerZoneRequests
     * const lecturerZoneRequests = await prisma.lecturerZoneRequest.findMany()
     * 
     * // Get first 10 LecturerZoneRequests
     * const lecturerZoneRequests = await prisma.lecturerZoneRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lecturerZoneRequestWithIdOnly = await prisma.lecturerZoneRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LecturerZoneRequestFindManyArgs>(args?: SelectSubset<T, LecturerZoneRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturerZoneRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LecturerZoneRequest.
     * @param {LecturerZoneRequestCreateArgs} args - Arguments to create a LecturerZoneRequest.
     * @example
     * // Create one LecturerZoneRequest
     * const LecturerZoneRequest = await prisma.lecturerZoneRequest.create({
     *   data: {
     *     // ... data to create a LecturerZoneRequest
     *   }
     * })
     * 
     */
    create<T extends LecturerZoneRequestCreateArgs>(args: SelectSubset<T, LecturerZoneRequestCreateArgs<ExtArgs>>): Prisma__LecturerZoneRequestClient<$Result.GetResult<Prisma.$LecturerZoneRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LecturerZoneRequests.
     * @param {LecturerZoneRequestCreateManyArgs} args - Arguments to create many LecturerZoneRequests.
     * @example
     * // Create many LecturerZoneRequests
     * const lecturerZoneRequest = await prisma.lecturerZoneRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LecturerZoneRequestCreateManyArgs>(args?: SelectSubset<T, LecturerZoneRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LecturerZoneRequest.
     * @param {LecturerZoneRequestDeleteArgs} args - Arguments to delete one LecturerZoneRequest.
     * @example
     * // Delete one LecturerZoneRequest
     * const LecturerZoneRequest = await prisma.lecturerZoneRequest.delete({
     *   where: {
     *     // ... filter to delete one LecturerZoneRequest
     *   }
     * })
     * 
     */
    delete<T extends LecturerZoneRequestDeleteArgs>(args: SelectSubset<T, LecturerZoneRequestDeleteArgs<ExtArgs>>): Prisma__LecturerZoneRequestClient<$Result.GetResult<Prisma.$LecturerZoneRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LecturerZoneRequest.
     * @param {LecturerZoneRequestUpdateArgs} args - Arguments to update one LecturerZoneRequest.
     * @example
     * // Update one LecturerZoneRequest
     * const lecturerZoneRequest = await prisma.lecturerZoneRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LecturerZoneRequestUpdateArgs>(args: SelectSubset<T, LecturerZoneRequestUpdateArgs<ExtArgs>>): Prisma__LecturerZoneRequestClient<$Result.GetResult<Prisma.$LecturerZoneRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LecturerZoneRequests.
     * @param {LecturerZoneRequestDeleteManyArgs} args - Arguments to filter LecturerZoneRequests to delete.
     * @example
     * // Delete a few LecturerZoneRequests
     * const { count } = await prisma.lecturerZoneRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LecturerZoneRequestDeleteManyArgs>(args?: SelectSubset<T, LecturerZoneRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LecturerZoneRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerZoneRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LecturerZoneRequests
     * const lecturerZoneRequest = await prisma.lecturerZoneRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LecturerZoneRequestUpdateManyArgs>(args: SelectSubset<T, LecturerZoneRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LecturerZoneRequest.
     * @param {LecturerZoneRequestUpsertArgs} args - Arguments to update or create a LecturerZoneRequest.
     * @example
     * // Update or create a LecturerZoneRequest
     * const lecturerZoneRequest = await prisma.lecturerZoneRequest.upsert({
     *   create: {
     *     // ... data to create a LecturerZoneRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LecturerZoneRequest we want to update
     *   }
     * })
     */
    upsert<T extends LecturerZoneRequestUpsertArgs>(args: SelectSubset<T, LecturerZoneRequestUpsertArgs<ExtArgs>>): Prisma__LecturerZoneRequestClient<$Result.GetResult<Prisma.$LecturerZoneRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LecturerZoneRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerZoneRequestCountArgs} args - Arguments to filter LecturerZoneRequests to count.
     * @example
     * // Count the number of LecturerZoneRequests
     * const count = await prisma.lecturerZoneRequest.count({
     *   where: {
     *     // ... the filter for the LecturerZoneRequests we want to count
     *   }
     * })
    **/
    count<T extends LecturerZoneRequestCountArgs>(
      args?: Subset<T, LecturerZoneRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LecturerZoneRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LecturerZoneRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerZoneRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LecturerZoneRequestAggregateArgs>(args: Subset<T, LecturerZoneRequestAggregateArgs>): Prisma.PrismaPromise<GetLecturerZoneRequestAggregateType<T>>

    /**
     * Group by LecturerZoneRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerZoneRequestGroupByArgs} args - Group by arguments.
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
      T extends LecturerZoneRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LecturerZoneRequestGroupByArgs['orderBy'] }
        : { orderBy?: LecturerZoneRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LecturerZoneRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLecturerZoneRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LecturerZoneRequest model
   */
  readonly fields: LecturerZoneRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LecturerZoneRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LecturerZoneRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lecturer<T extends LecturerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LecturerDefaultArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    zone<T extends ZoneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZoneDefaultArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LecturerZoneRequest model
   */
  interface LecturerZoneRequestFieldRefs {
    readonly id: FieldRef<"LecturerZoneRequest", 'String'>
    readonly lecturerId: FieldRef<"LecturerZoneRequest", 'String'>
    readonly zoneId: FieldRef<"LecturerZoneRequest", 'String'>
    readonly status: FieldRef<"LecturerZoneRequest", 'Status'>
    readonly createdAt: FieldRef<"LecturerZoneRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"LecturerZoneRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LecturerZoneRequest findUnique
   */
  export type LecturerZoneRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerZoneRequest
     */
    select?: LecturerZoneRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerZoneRequest
     */
    omit?: LecturerZoneRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerZoneRequestInclude<ExtArgs> | null
    /**
     * Filter, which LecturerZoneRequest to fetch.
     */
    where: LecturerZoneRequestWhereUniqueInput
  }

  /**
   * LecturerZoneRequest findUniqueOrThrow
   */
  export type LecturerZoneRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerZoneRequest
     */
    select?: LecturerZoneRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerZoneRequest
     */
    omit?: LecturerZoneRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerZoneRequestInclude<ExtArgs> | null
    /**
     * Filter, which LecturerZoneRequest to fetch.
     */
    where: LecturerZoneRequestWhereUniqueInput
  }

  /**
   * LecturerZoneRequest findFirst
   */
  export type LecturerZoneRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerZoneRequest
     */
    select?: LecturerZoneRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerZoneRequest
     */
    omit?: LecturerZoneRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerZoneRequestInclude<ExtArgs> | null
    /**
     * Filter, which LecturerZoneRequest to fetch.
     */
    where?: LecturerZoneRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LecturerZoneRequests to fetch.
     */
    orderBy?: LecturerZoneRequestOrderByWithRelationInput | LecturerZoneRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LecturerZoneRequests.
     */
    cursor?: LecturerZoneRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LecturerZoneRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LecturerZoneRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LecturerZoneRequests.
     */
    distinct?: LecturerZoneRequestScalarFieldEnum | LecturerZoneRequestScalarFieldEnum[]
  }

  /**
   * LecturerZoneRequest findFirstOrThrow
   */
  export type LecturerZoneRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerZoneRequest
     */
    select?: LecturerZoneRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerZoneRequest
     */
    omit?: LecturerZoneRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerZoneRequestInclude<ExtArgs> | null
    /**
     * Filter, which LecturerZoneRequest to fetch.
     */
    where?: LecturerZoneRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LecturerZoneRequests to fetch.
     */
    orderBy?: LecturerZoneRequestOrderByWithRelationInput | LecturerZoneRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LecturerZoneRequests.
     */
    cursor?: LecturerZoneRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LecturerZoneRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LecturerZoneRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LecturerZoneRequests.
     */
    distinct?: LecturerZoneRequestScalarFieldEnum | LecturerZoneRequestScalarFieldEnum[]
  }

  /**
   * LecturerZoneRequest findMany
   */
  export type LecturerZoneRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerZoneRequest
     */
    select?: LecturerZoneRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerZoneRequest
     */
    omit?: LecturerZoneRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerZoneRequestInclude<ExtArgs> | null
    /**
     * Filter, which LecturerZoneRequests to fetch.
     */
    where?: LecturerZoneRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LecturerZoneRequests to fetch.
     */
    orderBy?: LecturerZoneRequestOrderByWithRelationInput | LecturerZoneRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LecturerZoneRequests.
     */
    cursor?: LecturerZoneRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LecturerZoneRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LecturerZoneRequests.
     */
    skip?: number
    distinct?: LecturerZoneRequestScalarFieldEnum | LecturerZoneRequestScalarFieldEnum[]
  }

  /**
   * LecturerZoneRequest create
   */
  export type LecturerZoneRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerZoneRequest
     */
    select?: LecturerZoneRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerZoneRequest
     */
    omit?: LecturerZoneRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerZoneRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a LecturerZoneRequest.
     */
    data: XOR<LecturerZoneRequestCreateInput, LecturerZoneRequestUncheckedCreateInput>
  }

  /**
   * LecturerZoneRequest createMany
   */
  export type LecturerZoneRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LecturerZoneRequests.
     */
    data: LecturerZoneRequestCreateManyInput | LecturerZoneRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LecturerZoneRequest update
   */
  export type LecturerZoneRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerZoneRequest
     */
    select?: LecturerZoneRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerZoneRequest
     */
    omit?: LecturerZoneRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerZoneRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a LecturerZoneRequest.
     */
    data: XOR<LecturerZoneRequestUpdateInput, LecturerZoneRequestUncheckedUpdateInput>
    /**
     * Choose, which LecturerZoneRequest to update.
     */
    where: LecturerZoneRequestWhereUniqueInput
  }

  /**
   * LecturerZoneRequest updateMany
   */
  export type LecturerZoneRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LecturerZoneRequests.
     */
    data: XOR<LecturerZoneRequestUpdateManyMutationInput, LecturerZoneRequestUncheckedUpdateManyInput>
    /**
     * Filter which LecturerZoneRequests to update
     */
    where?: LecturerZoneRequestWhereInput
    /**
     * Limit how many LecturerZoneRequests to update.
     */
    limit?: number
  }

  /**
   * LecturerZoneRequest upsert
   */
  export type LecturerZoneRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerZoneRequest
     */
    select?: LecturerZoneRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerZoneRequest
     */
    omit?: LecturerZoneRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerZoneRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the LecturerZoneRequest to update in case it exists.
     */
    where: LecturerZoneRequestWhereUniqueInput
    /**
     * In case the LecturerZoneRequest found by the `where` argument doesn't exist, create a new LecturerZoneRequest with this data.
     */
    create: XOR<LecturerZoneRequestCreateInput, LecturerZoneRequestUncheckedCreateInput>
    /**
     * In case the LecturerZoneRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LecturerZoneRequestUpdateInput, LecturerZoneRequestUncheckedUpdateInput>
  }

  /**
   * LecturerZoneRequest delete
   */
  export type LecturerZoneRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerZoneRequest
     */
    select?: LecturerZoneRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerZoneRequest
     */
    omit?: LecturerZoneRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerZoneRequestInclude<ExtArgs> | null
    /**
     * Filter which LecturerZoneRequest to delete.
     */
    where: LecturerZoneRequestWhereUniqueInput
  }

  /**
   * LecturerZoneRequest deleteMany
   */
  export type LecturerZoneRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LecturerZoneRequests to delete
     */
    where?: LecturerZoneRequestWhereInput
    /**
     * Limit how many LecturerZoneRequests to delete.
     */
    limit?: number
  }

  /**
   * LecturerZoneRequest without action
   */
  export type LecturerZoneRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerZoneRequest
     */
    select?: LecturerZoneRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerZoneRequest
     */
    omit?: LecturerZoneRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerZoneRequestInclude<ExtArgs> | null
  }


  /**
   * Model SupervisionSchedule
   */

  export type AggregateSupervisionSchedule = {
    _count: SupervisionScheduleCountAggregateOutputType | null
    _min: SupervisionScheduleMinAggregateOutputType | null
    _max: SupervisionScheduleMaxAggregateOutputType | null
  }

  export type SupervisionScheduleMinAggregateOutputType = {
    id: string | null
    lecturerId: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupervisionScheduleMaxAggregateOutputType = {
    id: string | null
    lecturerId: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupervisionScheduleCountAggregateOutputType = {
    id: number
    lecturerId: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupervisionScheduleMinAggregateInputType = {
    id?: true
    lecturerId?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupervisionScheduleMaxAggregateInputType = {
    id?: true
    lecturerId?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupervisionScheduleCountAggregateInputType = {
    id?: true
    lecturerId?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupervisionScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupervisionSchedule to aggregate.
     */
    where?: SupervisionScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupervisionSchedules to fetch.
     */
    orderBy?: SupervisionScheduleOrderByWithRelationInput | SupervisionScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupervisionScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupervisionSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupervisionSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupervisionSchedules
    **/
    _count?: true | SupervisionScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupervisionScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupervisionScheduleMaxAggregateInputType
  }

  export type GetSupervisionScheduleAggregateType<T extends SupervisionScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSupervisionSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupervisionSchedule[P]>
      : GetScalarType<T[P], AggregateSupervisionSchedule[P]>
  }




  export type SupervisionScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupervisionScheduleWhereInput
    orderBy?: SupervisionScheduleOrderByWithAggregationInput | SupervisionScheduleOrderByWithAggregationInput[]
    by: SupervisionScheduleScalarFieldEnum[] | SupervisionScheduleScalarFieldEnum
    having?: SupervisionScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupervisionScheduleCountAggregateInputType | true
    _min?: SupervisionScheduleMinAggregateInputType
    _max?: SupervisionScheduleMaxAggregateInputType
  }

  export type SupervisionScheduleGroupByOutputType = {
    id: string
    lecturerId: string
    startDate: Date
    endDate: Date
    createdAt: Date
    updatedAt: Date
    _count: SupervisionScheduleCountAggregateOutputType | null
    _min: SupervisionScheduleMinAggregateOutputType | null
    _max: SupervisionScheduleMaxAggregateOutputType | null
  }

  type GetSupervisionScheduleGroupByPayload<T extends SupervisionScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupervisionScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupervisionScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupervisionScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], SupervisionScheduleGroupByOutputType[P]>
        }
      >
    >


  export type SupervisionScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lecturerId?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supervisionSchedule"]>



  export type SupervisionScheduleSelectScalar = {
    id?: boolean
    lecturerId?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SupervisionScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lecturerId" | "startDate" | "endDate" | "createdAt" | "updatedAt", ExtArgs["result"]["supervisionSchedule"]>
  export type SupervisionScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
  }

  export type $SupervisionSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupervisionSchedule"
    objects: {
      lecturer: Prisma.$LecturerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lecturerId: string
      startDate: Date
      endDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["supervisionSchedule"]>
    composites: {}
  }

  type SupervisionScheduleGetPayload<S extends boolean | null | undefined | SupervisionScheduleDefaultArgs> = $Result.GetResult<Prisma.$SupervisionSchedulePayload, S>

  type SupervisionScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupervisionScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupervisionScheduleCountAggregateInputType | true
    }

  export interface SupervisionScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupervisionSchedule'], meta: { name: 'SupervisionSchedule' } }
    /**
     * Find zero or one SupervisionSchedule that matches the filter.
     * @param {SupervisionScheduleFindUniqueArgs} args - Arguments to find a SupervisionSchedule
     * @example
     * // Get one SupervisionSchedule
     * const supervisionSchedule = await prisma.supervisionSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupervisionScheduleFindUniqueArgs>(args: SelectSubset<T, SupervisionScheduleFindUniqueArgs<ExtArgs>>): Prisma__SupervisionScheduleClient<$Result.GetResult<Prisma.$SupervisionSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SupervisionSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupervisionScheduleFindUniqueOrThrowArgs} args - Arguments to find a SupervisionSchedule
     * @example
     * // Get one SupervisionSchedule
     * const supervisionSchedule = await prisma.supervisionSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupervisionScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, SupervisionScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupervisionScheduleClient<$Result.GetResult<Prisma.$SupervisionSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupervisionSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisionScheduleFindFirstArgs} args - Arguments to find a SupervisionSchedule
     * @example
     * // Get one SupervisionSchedule
     * const supervisionSchedule = await prisma.supervisionSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupervisionScheduleFindFirstArgs>(args?: SelectSubset<T, SupervisionScheduleFindFirstArgs<ExtArgs>>): Prisma__SupervisionScheduleClient<$Result.GetResult<Prisma.$SupervisionSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupervisionSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisionScheduleFindFirstOrThrowArgs} args - Arguments to find a SupervisionSchedule
     * @example
     * // Get one SupervisionSchedule
     * const supervisionSchedule = await prisma.supervisionSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupervisionScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, SupervisionScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupervisionScheduleClient<$Result.GetResult<Prisma.$SupervisionSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SupervisionSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisionScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupervisionSchedules
     * const supervisionSchedules = await prisma.supervisionSchedule.findMany()
     * 
     * // Get first 10 SupervisionSchedules
     * const supervisionSchedules = await prisma.supervisionSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supervisionScheduleWithIdOnly = await prisma.supervisionSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupervisionScheduleFindManyArgs>(args?: SelectSubset<T, SupervisionScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupervisionSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SupervisionSchedule.
     * @param {SupervisionScheduleCreateArgs} args - Arguments to create a SupervisionSchedule.
     * @example
     * // Create one SupervisionSchedule
     * const SupervisionSchedule = await prisma.supervisionSchedule.create({
     *   data: {
     *     // ... data to create a SupervisionSchedule
     *   }
     * })
     * 
     */
    create<T extends SupervisionScheduleCreateArgs>(args: SelectSubset<T, SupervisionScheduleCreateArgs<ExtArgs>>): Prisma__SupervisionScheduleClient<$Result.GetResult<Prisma.$SupervisionSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SupervisionSchedules.
     * @param {SupervisionScheduleCreateManyArgs} args - Arguments to create many SupervisionSchedules.
     * @example
     * // Create many SupervisionSchedules
     * const supervisionSchedule = await prisma.supervisionSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupervisionScheduleCreateManyArgs>(args?: SelectSubset<T, SupervisionScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SupervisionSchedule.
     * @param {SupervisionScheduleDeleteArgs} args - Arguments to delete one SupervisionSchedule.
     * @example
     * // Delete one SupervisionSchedule
     * const SupervisionSchedule = await prisma.supervisionSchedule.delete({
     *   where: {
     *     // ... filter to delete one SupervisionSchedule
     *   }
     * })
     * 
     */
    delete<T extends SupervisionScheduleDeleteArgs>(args: SelectSubset<T, SupervisionScheduleDeleteArgs<ExtArgs>>): Prisma__SupervisionScheduleClient<$Result.GetResult<Prisma.$SupervisionSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SupervisionSchedule.
     * @param {SupervisionScheduleUpdateArgs} args - Arguments to update one SupervisionSchedule.
     * @example
     * // Update one SupervisionSchedule
     * const supervisionSchedule = await prisma.supervisionSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupervisionScheduleUpdateArgs>(args: SelectSubset<T, SupervisionScheduleUpdateArgs<ExtArgs>>): Prisma__SupervisionScheduleClient<$Result.GetResult<Prisma.$SupervisionSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SupervisionSchedules.
     * @param {SupervisionScheduleDeleteManyArgs} args - Arguments to filter SupervisionSchedules to delete.
     * @example
     * // Delete a few SupervisionSchedules
     * const { count } = await prisma.supervisionSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupervisionScheduleDeleteManyArgs>(args?: SelectSubset<T, SupervisionScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupervisionSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisionScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupervisionSchedules
     * const supervisionSchedule = await prisma.supervisionSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupervisionScheduleUpdateManyArgs>(args: SelectSubset<T, SupervisionScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SupervisionSchedule.
     * @param {SupervisionScheduleUpsertArgs} args - Arguments to update or create a SupervisionSchedule.
     * @example
     * // Update or create a SupervisionSchedule
     * const supervisionSchedule = await prisma.supervisionSchedule.upsert({
     *   create: {
     *     // ... data to create a SupervisionSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupervisionSchedule we want to update
     *   }
     * })
     */
    upsert<T extends SupervisionScheduleUpsertArgs>(args: SelectSubset<T, SupervisionScheduleUpsertArgs<ExtArgs>>): Prisma__SupervisionScheduleClient<$Result.GetResult<Prisma.$SupervisionSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SupervisionSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisionScheduleCountArgs} args - Arguments to filter SupervisionSchedules to count.
     * @example
     * // Count the number of SupervisionSchedules
     * const count = await prisma.supervisionSchedule.count({
     *   where: {
     *     // ... the filter for the SupervisionSchedules we want to count
     *   }
     * })
    **/
    count<T extends SupervisionScheduleCountArgs>(
      args?: Subset<T, SupervisionScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupervisionScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupervisionSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisionScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupervisionScheduleAggregateArgs>(args: Subset<T, SupervisionScheduleAggregateArgs>): Prisma.PrismaPromise<GetSupervisionScheduleAggregateType<T>>

    /**
     * Group by SupervisionSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisionScheduleGroupByArgs} args - Group by arguments.
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
      T extends SupervisionScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupervisionScheduleGroupByArgs['orderBy'] }
        : { orderBy?: SupervisionScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupervisionScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupervisionScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupervisionSchedule model
   */
  readonly fields: SupervisionScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupervisionSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupervisionScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lecturer<T extends LecturerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LecturerDefaultArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SupervisionSchedule model
   */
  interface SupervisionScheduleFieldRefs {
    readonly id: FieldRef<"SupervisionSchedule", 'String'>
    readonly lecturerId: FieldRef<"SupervisionSchedule", 'String'>
    readonly startDate: FieldRef<"SupervisionSchedule", 'DateTime'>
    readonly endDate: FieldRef<"SupervisionSchedule", 'DateTime'>
    readonly createdAt: FieldRef<"SupervisionSchedule", 'DateTime'>
    readonly updatedAt: FieldRef<"SupervisionSchedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SupervisionSchedule findUnique
   */
  export type SupervisionScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisionSchedule
     */
    select?: SupervisionScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisionSchedule
     */
    omit?: SupervisionScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisionScheduleInclude<ExtArgs> | null
    /**
     * Filter, which SupervisionSchedule to fetch.
     */
    where: SupervisionScheduleWhereUniqueInput
  }

  /**
   * SupervisionSchedule findUniqueOrThrow
   */
  export type SupervisionScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisionSchedule
     */
    select?: SupervisionScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisionSchedule
     */
    omit?: SupervisionScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisionScheduleInclude<ExtArgs> | null
    /**
     * Filter, which SupervisionSchedule to fetch.
     */
    where: SupervisionScheduleWhereUniqueInput
  }

  /**
   * SupervisionSchedule findFirst
   */
  export type SupervisionScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisionSchedule
     */
    select?: SupervisionScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisionSchedule
     */
    omit?: SupervisionScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisionScheduleInclude<ExtArgs> | null
    /**
     * Filter, which SupervisionSchedule to fetch.
     */
    where?: SupervisionScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupervisionSchedules to fetch.
     */
    orderBy?: SupervisionScheduleOrderByWithRelationInput | SupervisionScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupervisionSchedules.
     */
    cursor?: SupervisionScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupervisionSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupervisionSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupervisionSchedules.
     */
    distinct?: SupervisionScheduleScalarFieldEnum | SupervisionScheduleScalarFieldEnum[]
  }

  /**
   * SupervisionSchedule findFirstOrThrow
   */
  export type SupervisionScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisionSchedule
     */
    select?: SupervisionScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisionSchedule
     */
    omit?: SupervisionScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisionScheduleInclude<ExtArgs> | null
    /**
     * Filter, which SupervisionSchedule to fetch.
     */
    where?: SupervisionScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupervisionSchedules to fetch.
     */
    orderBy?: SupervisionScheduleOrderByWithRelationInput | SupervisionScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupervisionSchedules.
     */
    cursor?: SupervisionScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupervisionSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupervisionSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupervisionSchedules.
     */
    distinct?: SupervisionScheduleScalarFieldEnum | SupervisionScheduleScalarFieldEnum[]
  }

  /**
   * SupervisionSchedule findMany
   */
  export type SupervisionScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisionSchedule
     */
    select?: SupervisionScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisionSchedule
     */
    omit?: SupervisionScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisionScheduleInclude<ExtArgs> | null
    /**
     * Filter, which SupervisionSchedules to fetch.
     */
    where?: SupervisionScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupervisionSchedules to fetch.
     */
    orderBy?: SupervisionScheduleOrderByWithRelationInput | SupervisionScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupervisionSchedules.
     */
    cursor?: SupervisionScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupervisionSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupervisionSchedules.
     */
    skip?: number
    distinct?: SupervisionScheduleScalarFieldEnum | SupervisionScheduleScalarFieldEnum[]
  }

  /**
   * SupervisionSchedule create
   */
  export type SupervisionScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisionSchedule
     */
    select?: SupervisionScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisionSchedule
     */
    omit?: SupervisionScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisionScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a SupervisionSchedule.
     */
    data: XOR<SupervisionScheduleCreateInput, SupervisionScheduleUncheckedCreateInput>
  }

  /**
   * SupervisionSchedule createMany
   */
  export type SupervisionScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupervisionSchedules.
     */
    data: SupervisionScheduleCreateManyInput | SupervisionScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupervisionSchedule update
   */
  export type SupervisionScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisionSchedule
     */
    select?: SupervisionScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisionSchedule
     */
    omit?: SupervisionScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisionScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a SupervisionSchedule.
     */
    data: XOR<SupervisionScheduleUpdateInput, SupervisionScheduleUncheckedUpdateInput>
    /**
     * Choose, which SupervisionSchedule to update.
     */
    where: SupervisionScheduleWhereUniqueInput
  }

  /**
   * SupervisionSchedule updateMany
   */
  export type SupervisionScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupervisionSchedules.
     */
    data: XOR<SupervisionScheduleUpdateManyMutationInput, SupervisionScheduleUncheckedUpdateManyInput>
    /**
     * Filter which SupervisionSchedules to update
     */
    where?: SupervisionScheduleWhereInput
    /**
     * Limit how many SupervisionSchedules to update.
     */
    limit?: number
  }

  /**
   * SupervisionSchedule upsert
   */
  export type SupervisionScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisionSchedule
     */
    select?: SupervisionScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisionSchedule
     */
    omit?: SupervisionScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisionScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the SupervisionSchedule to update in case it exists.
     */
    where: SupervisionScheduleWhereUniqueInput
    /**
     * In case the SupervisionSchedule found by the `where` argument doesn't exist, create a new SupervisionSchedule with this data.
     */
    create: XOR<SupervisionScheduleCreateInput, SupervisionScheduleUncheckedCreateInput>
    /**
     * In case the SupervisionSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupervisionScheduleUpdateInput, SupervisionScheduleUncheckedUpdateInput>
  }

  /**
   * SupervisionSchedule delete
   */
  export type SupervisionScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisionSchedule
     */
    select?: SupervisionScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisionSchedule
     */
    omit?: SupervisionScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisionScheduleInclude<ExtArgs> | null
    /**
     * Filter which SupervisionSchedule to delete.
     */
    where: SupervisionScheduleWhereUniqueInput
  }

  /**
   * SupervisionSchedule deleteMany
   */
  export type SupervisionScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupervisionSchedules to delete
     */
    where?: SupervisionScheduleWhereInput
    /**
     * Limit how many SupervisionSchedules to delete.
     */
    limit?: number
  }

  /**
   * SupervisionSchedule without action
   */
  export type SupervisionScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisionSchedule
     */
    select?: SupervisionScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisionSchedule
     */
    omit?: SupervisionScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisionScheduleInclude<ExtArgs> | null
  }


  /**
   * Model LessonPlan
   */

  export type AggregateLessonPlan = {
    _count: LessonPlanCountAggregateOutputType | null
    _min: LessonPlanMinAggregateOutputType | null
    _max: LessonPlanMaxAggregateOutputType | null
  }

  export type LessonPlanMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LessonPlanMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LessonPlanCountAggregateOutputType = {
    id: number
    studentId: number
    title: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LessonPlanMinAggregateInputType = {
    id?: true
    studentId?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LessonPlanMaxAggregateInputType = {
    id?: true
    studentId?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LessonPlanCountAggregateInputType = {
    id?: true
    studentId?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LessonPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonPlan to aggregate.
     */
    where?: LessonPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonPlans to fetch.
     */
    orderBy?: LessonPlanOrderByWithRelationInput | LessonPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LessonPlans
    **/
    _count?: true | LessonPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonPlanMaxAggregateInputType
  }

  export type GetLessonPlanAggregateType<T extends LessonPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateLessonPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLessonPlan[P]>
      : GetScalarType<T[P], AggregateLessonPlan[P]>
  }




  export type LessonPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonPlanWhereInput
    orderBy?: LessonPlanOrderByWithAggregationInput | LessonPlanOrderByWithAggregationInput[]
    by: LessonPlanScalarFieldEnum[] | LessonPlanScalarFieldEnum
    having?: LessonPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonPlanCountAggregateInputType | true
    _min?: LessonPlanMinAggregateInputType
    _max?: LessonPlanMaxAggregateInputType
  }

  export type LessonPlanGroupByOutputType = {
    id: string
    studentId: string
    title: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: LessonPlanCountAggregateOutputType | null
    _min: LessonPlanMinAggregateOutputType | null
    _max: LessonPlanMaxAggregateOutputType | null
  }

  type GetLessonPlanGroupByPayload<T extends LessonPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonPlanGroupByOutputType[P]>
            : GetScalarType<T[P], LessonPlanGroupByOutputType[P]>
        }
      >
    >


  export type LessonPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonPlan"]>



  export type LessonPlanSelectScalar = {
    id?: boolean
    studentId?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LessonPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "title" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["lessonPlan"]>
  export type LessonPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $LessonPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LessonPlan"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      title: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lessonPlan"]>
    composites: {}
  }

  type LessonPlanGetPayload<S extends boolean | null | undefined | LessonPlanDefaultArgs> = $Result.GetResult<Prisma.$LessonPlanPayload, S>

  type LessonPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LessonPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonPlanCountAggregateInputType | true
    }

  export interface LessonPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LessonPlan'], meta: { name: 'LessonPlan' } }
    /**
     * Find zero or one LessonPlan that matches the filter.
     * @param {LessonPlanFindUniqueArgs} args - Arguments to find a LessonPlan
     * @example
     * // Get one LessonPlan
     * const lessonPlan = await prisma.lessonPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonPlanFindUniqueArgs>(args: SelectSubset<T, LessonPlanFindUniqueArgs<ExtArgs>>): Prisma__LessonPlanClient<$Result.GetResult<Prisma.$LessonPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LessonPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonPlanFindUniqueOrThrowArgs} args - Arguments to find a LessonPlan
     * @example
     * // Get one LessonPlan
     * const lessonPlan = await prisma.lessonPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonPlanClient<$Result.GetResult<Prisma.$LessonPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LessonPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonPlanFindFirstArgs} args - Arguments to find a LessonPlan
     * @example
     * // Get one LessonPlan
     * const lessonPlan = await prisma.lessonPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonPlanFindFirstArgs>(args?: SelectSubset<T, LessonPlanFindFirstArgs<ExtArgs>>): Prisma__LessonPlanClient<$Result.GetResult<Prisma.$LessonPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LessonPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonPlanFindFirstOrThrowArgs} args - Arguments to find a LessonPlan
     * @example
     * // Get one LessonPlan
     * const lessonPlan = await prisma.lessonPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonPlanClient<$Result.GetResult<Prisma.$LessonPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LessonPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LessonPlans
     * const lessonPlans = await prisma.lessonPlan.findMany()
     * 
     * // Get first 10 LessonPlans
     * const lessonPlans = await prisma.lessonPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonPlanWithIdOnly = await prisma.lessonPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonPlanFindManyArgs>(args?: SelectSubset<T, LessonPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LessonPlan.
     * @param {LessonPlanCreateArgs} args - Arguments to create a LessonPlan.
     * @example
     * // Create one LessonPlan
     * const LessonPlan = await prisma.lessonPlan.create({
     *   data: {
     *     // ... data to create a LessonPlan
     *   }
     * })
     * 
     */
    create<T extends LessonPlanCreateArgs>(args: SelectSubset<T, LessonPlanCreateArgs<ExtArgs>>): Prisma__LessonPlanClient<$Result.GetResult<Prisma.$LessonPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LessonPlans.
     * @param {LessonPlanCreateManyArgs} args - Arguments to create many LessonPlans.
     * @example
     * // Create many LessonPlans
     * const lessonPlan = await prisma.lessonPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonPlanCreateManyArgs>(args?: SelectSubset<T, LessonPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LessonPlan.
     * @param {LessonPlanDeleteArgs} args - Arguments to delete one LessonPlan.
     * @example
     * // Delete one LessonPlan
     * const LessonPlan = await prisma.lessonPlan.delete({
     *   where: {
     *     // ... filter to delete one LessonPlan
     *   }
     * })
     * 
     */
    delete<T extends LessonPlanDeleteArgs>(args: SelectSubset<T, LessonPlanDeleteArgs<ExtArgs>>): Prisma__LessonPlanClient<$Result.GetResult<Prisma.$LessonPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LessonPlan.
     * @param {LessonPlanUpdateArgs} args - Arguments to update one LessonPlan.
     * @example
     * // Update one LessonPlan
     * const lessonPlan = await prisma.lessonPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonPlanUpdateArgs>(args: SelectSubset<T, LessonPlanUpdateArgs<ExtArgs>>): Prisma__LessonPlanClient<$Result.GetResult<Prisma.$LessonPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LessonPlans.
     * @param {LessonPlanDeleteManyArgs} args - Arguments to filter LessonPlans to delete.
     * @example
     * // Delete a few LessonPlans
     * const { count } = await prisma.lessonPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonPlanDeleteManyArgs>(args?: SelectSubset<T, LessonPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LessonPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LessonPlans
     * const lessonPlan = await prisma.lessonPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonPlanUpdateManyArgs>(args: SelectSubset<T, LessonPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LessonPlan.
     * @param {LessonPlanUpsertArgs} args - Arguments to update or create a LessonPlan.
     * @example
     * // Update or create a LessonPlan
     * const lessonPlan = await prisma.lessonPlan.upsert({
     *   create: {
     *     // ... data to create a LessonPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LessonPlan we want to update
     *   }
     * })
     */
    upsert<T extends LessonPlanUpsertArgs>(args: SelectSubset<T, LessonPlanUpsertArgs<ExtArgs>>): Prisma__LessonPlanClient<$Result.GetResult<Prisma.$LessonPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LessonPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonPlanCountArgs} args - Arguments to filter LessonPlans to count.
     * @example
     * // Count the number of LessonPlans
     * const count = await prisma.lessonPlan.count({
     *   where: {
     *     // ... the filter for the LessonPlans we want to count
     *   }
     * })
    **/
    count<T extends LessonPlanCountArgs>(
      args?: Subset<T, LessonPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LessonPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LessonPlanAggregateArgs>(args: Subset<T, LessonPlanAggregateArgs>): Prisma.PrismaPromise<GetLessonPlanAggregateType<T>>

    /**
     * Group by LessonPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonPlanGroupByArgs} args - Group by arguments.
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
      T extends LessonPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonPlanGroupByArgs['orderBy'] }
        : { orderBy?: LessonPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LessonPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LessonPlan model
   */
  readonly fields: LessonPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LessonPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LessonPlan model
   */
  interface LessonPlanFieldRefs {
    readonly id: FieldRef<"LessonPlan", 'String'>
    readonly studentId: FieldRef<"LessonPlan", 'String'>
    readonly title: FieldRef<"LessonPlan", 'String'>
    readonly description: FieldRef<"LessonPlan", 'String'>
    readonly createdAt: FieldRef<"LessonPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"LessonPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LessonPlan findUnique
   */
  export type LessonPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonPlan
     */
    select?: LessonPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonPlan
     */
    omit?: LessonPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonPlanInclude<ExtArgs> | null
    /**
     * Filter, which LessonPlan to fetch.
     */
    where: LessonPlanWhereUniqueInput
  }

  /**
   * LessonPlan findUniqueOrThrow
   */
  export type LessonPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonPlan
     */
    select?: LessonPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonPlan
     */
    omit?: LessonPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonPlanInclude<ExtArgs> | null
    /**
     * Filter, which LessonPlan to fetch.
     */
    where: LessonPlanWhereUniqueInput
  }

  /**
   * LessonPlan findFirst
   */
  export type LessonPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonPlan
     */
    select?: LessonPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonPlan
     */
    omit?: LessonPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonPlanInclude<ExtArgs> | null
    /**
     * Filter, which LessonPlan to fetch.
     */
    where?: LessonPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonPlans to fetch.
     */
    orderBy?: LessonPlanOrderByWithRelationInput | LessonPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonPlans.
     */
    cursor?: LessonPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonPlans.
     */
    distinct?: LessonPlanScalarFieldEnum | LessonPlanScalarFieldEnum[]
  }

  /**
   * LessonPlan findFirstOrThrow
   */
  export type LessonPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonPlan
     */
    select?: LessonPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonPlan
     */
    omit?: LessonPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonPlanInclude<ExtArgs> | null
    /**
     * Filter, which LessonPlan to fetch.
     */
    where?: LessonPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonPlans to fetch.
     */
    orderBy?: LessonPlanOrderByWithRelationInput | LessonPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonPlans.
     */
    cursor?: LessonPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonPlans.
     */
    distinct?: LessonPlanScalarFieldEnum | LessonPlanScalarFieldEnum[]
  }

  /**
   * LessonPlan findMany
   */
  export type LessonPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonPlan
     */
    select?: LessonPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonPlan
     */
    omit?: LessonPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonPlanInclude<ExtArgs> | null
    /**
     * Filter, which LessonPlans to fetch.
     */
    where?: LessonPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonPlans to fetch.
     */
    orderBy?: LessonPlanOrderByWithRelationInput | LessonPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LessonPlans.
     */
    cursor?: LessonPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonPlans.
     */
    skip?: number
    distinct?: LessonPlanScalarFieldEnum | LessonPlanScalarFieldEnum[]
  }

  /**
   * LessonPlan create
   */
  export type LessonPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonPlan
     */
    select?: LessonPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonPlan
     */
    omit?: LessonPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a LessonPlan.
     */
    data: XOR<LessonPlanCreateInput, LessonPlanUncheckedCreateInput>
  }

  /**
   * LessonPlan createMany
   */
  export type LessonPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LessonPlans.
     */
    data: LessonPlanCreateManyInput | LessonPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LessonPlan update
   */
  export type LessonPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonPlan
     */
    select?: LessonPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonPlan
     */
    omit?: LessonPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a LessonPlan.
     */
    data: XOR<LessonPlanUpdateInput, LessonPlanUncheckedUpdateInput>
    /**
     * Choose, which LessonPlan to update.
     */
    where: LessonPlanWhereUniqueInput
  }

  /**
   * LessonPlan updateMany
   */
  export type LessonPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LessonPlans.
     */
    data: XOR<LessonPlanUpdateManyMutationInput, LessonPlanUncheckedUpdateManyInput>
    /**
     * Filter which LessonPlans to update
     */
    where?: LessonPlanWhereInput
    /**
     * Limit how many LessonPlans to update.
     */
    limit?: number
  }

  /**
   * LessonPlan upsert
   */
  export type LessonPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonPlan
     */
    select?: LessonPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonPlan
     */
    omit?: LessonPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the LessonPlan to update in case it exists.
     */
    where: LessonPlanWhereUniqueInput
    /**
     * In case the LessonPlan found by the `where` argument doesn't exist, create a new LessonPlan with this data.
     */
    create: XOR<LessonPlanCreateInput, LessonPlanUncheckedCreateInput>
    /**
     * In case the LessonPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonPlanUpdateInput, LessonPlanUncheckedUpdateInput>
  }

  /**
   * LessonPlan delete
   */
  export type LessonPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonPlan
     */
    select?: LessonPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonPlan
     */
    omit?: LessonPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonPlanInclude<ExtArgs> | null
    /**
     * Filter which LessonPlan to delete.
     */
    where: LessonPlanWhereUniqueInput
  }

  /**
   * LessonPlan deleteMany
   */
  export type LessonPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonPlans to delete
     */
    where?: LessonPlanWhereInput
    /**
     * Limit how many LessonPlans to delete.
     */
    limit?: number
  }

  /**
   * LessonPlan without action
   */
  export type LessonPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonPlan
     */
    select?: LessonPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonPlan
     */
    omit?: LessonPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonPlanInclude<ExtArgs> | null
  }


  /**
   * Model SupervisionVisit
   */

  export type AggregateSupervisionVisit = {
    _count: SupervisionVisitCountAggregateOutputType | null
    _min: SupervisionVisitMinAggregateOutputType | null
    _max: SupervisionVisitMaxAggregateOutputType | null
  }

  export type SupervisionVisitMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    lecturerId: string | null
    date: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupervisionVisitMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    lecturerId: string | null
    date: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupervisionVisitCountAggregateOutputType = {
    id: number
    studentId: number
    lecturerId: number
    date: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupervisionVisitMinAggregateInputType = {
    id?: true
    studentId?: true
    lecturerId?: true
    date?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupervisionVisitMaxAggregateInputType = {
    id?: true
    studentId?: true
    lecturerId?: true
    date?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupervisionVisitCountAggregateInputType = {
    id?: true
    studentId?: true
    lecturerId?: true
    date?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupervisionVisitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupervisionVisit to aggregate.
     */
    where?: SupervisionVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupervisionVisits to fetch.
     */
    orderBy?: SupervisionVisitOrderByWithRelationInput | SupervisionVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupervisionVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupervisionVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupervisionVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupervisionVisits
    **/
    _count?: true | SupervisionVisitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupervisionVisitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupervisionVisitMaxAggregateInputType
  }

  export type GetSupervisionVisitAggregateType<T extends SupervisionVisitAggregateArgs> = {
        [P in keyof T & keyof AggregateSupervisionVisit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupervisionVisit[P]>
      : GetScalarType<T[P], AggregateSupervisionVisit[P]>
  }




  export type SupervisionVisitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupervisionVisitWhereInput
    orderBy?: SupervisionVisitOrderByWithAggregationInput | SupervisionVisitOrderByWithAggregationInput[]
    by: SupervisionVisitScalarFieldEnum[] | SupervisionVisitScalarFieldEnum
    having?: SupervisionVisitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupervisionVisitCountAggregateInputType | true
    _min?: SupervisionVisitMinAggregateInputType
    _max?: SupervisionVisitMaxAggregateInputType
  }

  export type SupervisionVisitGroupByOutputType = {
    id: string
    studentId: string
    lecturerId: string
    date: Date
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: SupervisionVisitCountAggregateOutputType | null
    _min: SupervisionVisitMinAggregateOutputType | null
    _max: SupervisionVisitMaxAggregateOutputType | null
  }

  type GetSupervisionVisitGroupByPayload<T extends SupervisionVisitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupervisionVisitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupervisionVisitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupervisionVisitGroupByOutputType[P]>
            : GetScalarType<T[P], SupervisionVisitGroupByOutputType[P]>
        }
      >
    >


  export type SupervisionVisitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    lecturerId?: boolean
    date?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supervisionVisit"]>



  export type SupervisionVisitSelectScalar = {
    id?: boolean
    studentId?: boolean
    lecturerId?: boolean
    date?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SupervisionVisitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "lecturerId" | "date" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["supervisionVisit"]>
  export type SupervisionVisitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $SupervisionVisitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupervisionVisit"
    objects: {
      lecturer: Prisma.$LecturerPayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      lecturerId: string
      date: Date
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["supervisionVisit"]>
    composites: {}
  }

  type SupervisionVisitGetPayload<S extends boolean | null | undefined | SupervisionVisitDefaultArgs> = $Result.GetResult<Prisma.$SupervisionVisitPayload, S>

  type SupervisionVisitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupervisionVisitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupervisionVisitCountAggregateInputType | true
    }

  export interface SupervisionVisitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupervisionVisit'], meta: { name: 'SupervisionVisit' } }
    /**
     * Find zero or one SupervisionVisit that matches the filter.
     * @param {SupervisionVisitFindUniqueArgs} args - Arguments to find a SupervisionVisit
     * @example
     * // Get one SupervisionVisit
     * const supervisionVisit = await prisma.supervisionVisit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupervisionVisitFindUniqueArgs>(args: SelectSubset<T, SupervisionVisitFindUniqueArgs<ExtArgs>>): Prisma__SupervisionVisitClient<$Result.GetResult<Prisma.$SupervisionVisitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SupervisionVisit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupervisionVisitFindUniqueOrThrowArgs} args - Arguments to find a SupervisionVisit
     * @example
     * // Get one SupervisionVisit
     * const supervisionVisit = await prisma.supervisionVisit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupervisionVisitFindUniqueOrThrowArgs>(args: SelectSubset<T, SupervisionVisitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupervisionVisitClient<$Result.GetResult<Prisma.$SupervisionVisitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupervisionVisit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisionVisitFindFirstArgs} args - Arguments to find a SupervisionVisit
     * @example
     * // Get one SupervisionVisit
     * const supervisionVisit = await prisma.supervisionVisit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupervisionVisitFindFirstArgs>(args?: SelectSubset<T, SupervisionVisitFindFirstArgs<ExtArgs>>): Prisma__SupervisionVisitClient<$Result.GetResult<Prisma.$SupervisionVisitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupervisionVisit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisionVisitFindFirstOrThrowArgs} args - Arguments to find a SupervisionVisit
     * @example
     * // Get one SupervisionVisit
     * const supervisionVisit = await prisma.supervisionVisit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupervisionVisitFindFirstOrThrowArgs>(args?: SelectSubset<T, SupervisionVisitFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupervisionVisitClient<$Result.GetResult<Prisma.$SupervisionVisitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SupervisionVisits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisionVisitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupervisionVisits
     * const supervisionVisits = await prisma.supervisionVisit.findMany()
     * 
     * // Get first 10 SupervisionVisits
     * const supervisionVisits = await prisma.supervisionVisit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supervisionVisitWithIdOnly = await prisma.supervisionVisit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupervisionVisitFindManyArgs>(args?: SelectSubset<T, SupervisionVisitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupervisionVisitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SupervisionVisit.
     * @param {SupervisionVisitCreateArgs} args - Arguments to create a SupervisionVisit.
     * @example
     * // Create one SupervisionVisit
     * const SupervisionVisit = await prisma.supervisionVisit.create({
     *   data: {
     *     // ... data to create a SupervisionVisit
     *   }
     * })
     * 
     */
    create<T extends SupervisionVisitCreateArgs>(args: SelectSubset<T, SupervisionVisitCreateArgs<ExtArgs>>): Prisma__SupervisionVisitClient<$Result.GetResult<Prisma.$SupervisionVisitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SupervisionVisits.
     * @param {SupervisionVisitCreateManyArgs} args - Arguments to create many SupervisionVisits.
     * @example
     * // Create many SupervisionVisits
     * const supervisionVisit = await prisma.supervisionVisit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupervisionVisitCreateManyArgs>(args?: SelectSubset<T, SupervisionVisitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SupervisionVisit.
     * @param {SupervisionVisitDeleteArgs} args - Arguments to delete one SupervisionVisit.
     * @example
     * // Delete one SupervisionVisit
     * const SupervisionVisit = await prisma.supervisionVisit.delete({
     *   where: {
     *     // ... filter to delete one SupervisionVisit
     *   }
     * })
     * 
     */
    delete<T extends SupervisionVisitDeleteArgs>(args: SelectSubset<T, SupervisionVisitDeleteArgs<ExtArgs>>): Prisma__SupervisionVisitClient<$Result.GetResult<Prisma.$SupervisionVisitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SupervisionVisit.
     * @param {SupervisionVisitUpdateArgs} args - Arguments to update one SupervisionVisit.
     * @example
     * // Update one SupervisionVisit
     * const supervisionVisit = await prisma.supervisionVisit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupervisionVisitUpdateArgs>(args: SelectSubset<T, SupervisionVisitUpdateArgs<ExtArgs>>): Prisma__SupervisionVisitClient<$Result.GetResult<Prisma.$SupervisionVisitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SupervisionVisits.
     * @param {SupervisionVisitDeleteManyArgs} args - Arguments to filter SupervisionVisits to delete.
     * @example
     * // Delete a few SupervisionVisits
     * const { count } = await prisma.supervisionVisit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupervisionVisitDeleteManyArgs>(args?: SelectSubset<T, SupervisionVisitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupervisionVisits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisionVisitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupervisionVisits
     * const supervisionVisit = await prisma.supervisionVisit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupervisionVisitUpdateManyArgs>(args: SelectSubset<T, SupervisionVisitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SupervisionVisit.
     * @param {SupervisionVisitUpsertArgs} args - Arguments to update or create a SupervisionVisit.
     * @example
     * // Update or create a SupervisionVisit
     * const supervisionVisit = await prisma.supervisionVisit.upsert({
     *   create: {
     *     // ... data to create a SupervisionVisit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupervisionVisit we want to update
     *   }
     * })
     */
    upsert<T extends SupervisionVisitUpsertArgs>(args: SelectSubset<T, SupervisionVisitUpsertArgs<ExtArgs>>): Prisma__SupervisionVisitClient<$Result.GetResult<Prisma.$SupervisionVisitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SupervisionVisits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisionVisitCountArgs} args - Arguments to filter SupervisionVisits to count.
     * @example
     * // Count the number of SupervisionVisits
     * const count = await prisma.supervisionVisit.count({
     *   where: {
     *     // ... the filter for the SupervisionVisits we want to count
     *   }
     * })
    **/
    count<T extends SupervisionVisitCountArgs>(
      args?: Subset<T, SupervisionVisitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupervisionVisitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupervisionVisit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisionVisitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupervisionVisitAggregateArgs>(args: Subset<T, SupervisionVisitAggregateArgs>): Prisma.PrismaPromise<GetSupervisionVisitAggregateType<T>>

    /**
     * Group by SupervisionVisit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisionVisitGroupByArgs} args - Group by arguments.
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
      T extends SupervisionVisitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupervisionVisitGroupByArgs['orderBy'] }
        : { orderBy?: SupervisionVisitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupervisionVisitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupervisionVisitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupervisionVisit model
   */
  readonly fields: SupervisionVisitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupervisionVisit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupervisionVisitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lecturer<T extends LecturerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LecturerDefaultArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SupervisionVisit model
   */
  interface SupervisionVisitFieldRefs {
    readonly id: FieldRef<"SupervisionVisit", 'String'>
    readonly studentId: FieldRef<"SupervisionVisit", 'String'>
    readonly lecturerId: FieldRef<"SupervisionVisit", 'String'>
    readonly date: FieldRef<"SupervisionVisit", 'DateTime'>
    readonly notes: FieldRef<"SupervisionVisit", 'String'>
    readonly createdAt: FieldRef<"SupervisionVisit", 'DateTime'>
    readonly updatedAt: FieldRef<"SupervisionVisit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SupervisionVisit findUnique
   */
  export type SupervisionVisitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisionVisit
     */
    select?: SupervisionVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisionVisit
     */
    omit?: SupervisionVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisionVisitInclude<ExtArgs> | null
    /**
     * Filter, which SupervisionVisit to fetch.
     */
    where: SupervisionVisitWhereUniqueInput
  }

  /**
   * SupervisionVisit findUniqueOrThrow
   */
  export type SupervisionVisitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisionVisit
     */
    select?: SupervisionVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisionVisit
     */
    omit?: SupervisionVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisionVisitInclude<ExtArgs> | null
    /**
     * Filter, which SupervisionVisit to fetch.
     */
    where: SupervisionVisitWhereUniqueInput
  }

  /**
   * SupervisionVisit findFirst
   */
  export type SupervisionVisitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisionVisit
     */
    select?: SupervisionVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisionVisit
     */
    omit?: SupervisionVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisionVisitInclude<ExtArgs> | null
    /**
     * Filter, which SupervisionVisit to fetch.
     */
    where?: SupervisionVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupervisionVisits to fetch.
     */
    orderBy?: SupervisionVisitOrderByWithRelationInput | SupervisionVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupervisionVisits.
     */
    cursor?: SupervisionVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupervisionVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupervisionVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupervisionVisits.
     */
    distinct?: SupervisionVisitScalarFieldEnum | SupervisionVisitScalarFieldEnum[]
  }

  /**
   * SupervisionVisit findFirstOrThrow
   */
  export type SupervisionVisitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisionVisit
     */
    select?: SupervisionVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisionVisit
     */
    omit?: SupervisionVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisionVisitInclude<ExtArgs> | null
    /**
     * Filter, which SupervisionVisit to fetch.
     */
    where?: SupervisionVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupervisionVisits to fetch.
     */
    orderBy?: SupervisionVisitOrderByWithRelationInput | SupervisionVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupervisionVisits.
     */
    cursor?: SupervisionVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupervisionVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupervisionVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupervisionVisits.
     */
    distinct?: SupervisionVisitScalarFieldEnum | SupervisionVisitScalarFieldEnum[]
  }

  /**
   * SupervisionVisit findMany
   */
  export type SupervisionVisitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisionVisit
     */
    select?: SupervisionVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisionVisit
     */
    omit?: SupervisionVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisionVisitInclude<ExtArgs> | null
    /**
     * Filter, which SupervisionVisits to fetch.
     */
    where?: SupervisionVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupervisionVisits to fetch.
     */
    orderBy?: SupervisionVisitOrderByWithRelationInput | SupervisionVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupervisionVisits.
     */
    cursor?: SupervisionVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupervisionVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupervisionVisits.
     */
    skip?: number
    distinct?: SupervisionVisitScalarFieldEnum | SupervisionVisitScalarFieldEnum[]
  }

  /**
   * SupervisionVisit create
   */
  export type SupervisionVisitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisionVisit
     */
    select?: SupervisionVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisionVisit
     */
    omit?: SupervisionVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisionVisitInclude<ExtArgs> | null
    /**
     * The data needed to create a SupervisionVisit.
     */
    data: XOR<SupervisionVisitCreateInput, SupervisionVisitUncheckedCreateInput>
  }

  /**
   * SupervisionVisit createMany
   */
  export type SupervisionVisitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupervisionVisits.
     */
    data: SupervisionVisitCreateManyInput | SupervisionVisitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupervisionVisit update
   */
  export type SupervisionVisitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisionVisit
     */
    select?: SupervisionVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisionVisit
     */
    omit?: SupervisionVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisionVisitInclude<ExtArgs> | null
    /**
     * The data needed to update a SupervisionVisit.
     */
    data: XOR<SupervisionVisitUpdateInput, SupervisionVisitUncheckedUpdateInput>
    /**
     * Choose, which SupervisionVisit to update.
     */
    where: SupervisionVisitWhereUniqueInput
  }

  /**
   * SupervisionVisit updateMany
   */
  export type SupervisionVisitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupervisionVisits.
     */
    data: XOR<SupervisionVisitUpdateManyMutationInput, SupervisionVisitUncheckedUpdateManyInput>
    /**
     * Filter which SupervisionVisits to update
     */
    where?: SupervisionVisitWhereInput
    /**
     * Limit how many SupervisionVisits to update.
     */
    limit?: number
  }

  /**
   * SupervisionVisit upsert
   */
  export type SupervisionVisitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisionVisit
     */
    select?: SupervisionVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisionVisit
     */
    omit?: SupervisionVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisionVisitInclude<ExtArgs> | null
    /**
     * The filter to search for the SupervisionVisit to update in case it exists.
     */
    where: SupervisionVisitWhereUniqueInput
    /**
     * In case the SupervisionVisit found by the `where` argument doesn't exist, create a new SupervisionVisit with this data.
     */
    create: XOR<SupervisionVisitCreateInput, SupervisionVisitUncheckedCreateInput>
    /**
     * In case the SupervisionVisit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupervisionVisitUpdateInput, SupervisionVisitUncheckedUpdateInput>
  }

  /**
   * SupervisionVisit delete
   */
  export type SupervisionVisitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisionVisit
     */
    select?: SupervisionVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisionVisit
     */
    omit?: SupervisionVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisionVisitInclude<ExtArgs> | null
    /**
     * Filter which SupervisionVisit to delete.
     */
    where: SupervisionVisitWhereUniqueInput
  }

  /**
   * SupervisionVisit deleteMany
   */
  export type SupervisionVisitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupervisionVisits to delete
     */
    where?: SupervisionVisitWhereInput
    /**
     * Limit how many SupervisionVisits to delete.
     */
    limit?: number
  }

  /**
   * SupervisionVisit without action
   */
  export type SupervisionVisitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisionVisit
     */
    select?: SupervisionVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisionVisit
     */
    omit?: SupervisionVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisionVisitInclude<ExtArgs> | null
  }


  /**
   * Model Alert
   */

  export type AggregateAlert = {
    _count: AlertCountAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  export type AlertMinAggregateOutputType = {
    id: string | null
    userId: string | null
    message: string | null
    type: $Enums.AlertType | null
    isRead: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlertMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    message: string | null
    type: $Enums.AlertType | null
    isRead: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlertCountAggregateOutputType = {
    id: number
    userId: number
    message: number
    type: number
    isRead: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AlertMinAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    type?: true
    isRead?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlertMaxAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    type?: true
    isRead?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlertCountAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    type?: true
    isRead?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alert to aggregate.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alerts
    **/
    _count?: true | AlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertMaxAggregateInputType
  }

  export type GetAlertAggregateType<T extends AlertAggregateArgs> = {
        [P in keyof T & keyof AggregateAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlert[P]>
      : GetScalarType<T[P], AggregateAlert[P]>
  }




  export type AlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithAggregationInput | AlertOrderByWithAggregationInput[]
    by: AlertScalarFieldEnum[] | AlertScalarFieldEnum
    having?: AlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertCountAggregateInputType | true
    _min?: AlertMinAggregateInputType
    _max?: AlertMaxAggregateInputType
  }

  export type AlertGroupByOutputType = {
    id: string
    userId: string
    message: string
    type: $Enums.AlertType
    isRead: boolean
    createdAt: Date
    updatedAt: Date
    _count: AlertCountAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  type GetAlertGroupByPayload<T extends AlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertGroupByOutputType[P]>
            : GetScalarType<T[P], AlertGroupByOutputType[P]>
        }
      >
    >


  export type AlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    type?: boolean
    isRead?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>



  export type AlertSelectScalar = {
    id?: boolean
    userId?: boolean
    message?: boolean
    type?: boolean
    isRead?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "message" | "type" | "isRead" | "createdAt" | "updatedAt", ExtArgs["result"]["alert"]>
  export type AlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alert"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      message: string
      type: $Enums.AlertType
      isRead: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["alert"]>
    composites: {}
  }

  type AlertGetPayload<S extends boolean | null | undefined | AlertDefaultArgs> = $Result.GetResult<Prisma.$AlertPayload, S>

  type AlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertCountAggregateInputType | true
    }

  export interface AlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alert'], meta: { name: 'Alert' } }
    /**
     * Find zero or one Alert that matches the filter.
     * @param {AlertFindUniqueArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertFindUniqueArgs>(args: SelectSubset<T, AlertFindUniqueArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlertFindUniqueOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertFindFirstArgs>(args?: SelectSubset<T, AlertFindFirstArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alerts
     * const alerts = await prisma.alert.findMany()
     * 
     * // Get first 10 Alerts
     * const alerts = await prisma.alert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertWithIdOnly = await prisma.alert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertFindManyArgs>(args?: SelectSubset<T, AlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alert.
     * @param {AlertCreateArgs} args - Arguments to create a Alert.
     * @example
     * // Create one Alert
     * const Alert = await prisma.alert.create({
     *   data: {
     *     // ... data to create a Alert
     *   }
     * })
     * 
     */
    create<T extends AlertCreateArgs>(args: SelectSubset<T, AlertCreateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alerts.
     * @param {AlertCreateManyArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertCreateManyArgs>(args?: SelectSubset<T, AlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Alert.
     * @param {AlertDeleteArgs} args - Arguments to delete one Alert.
     * @example
     * // Delete one Alert
     * const Alert = await prisma.alert.delete({
     *   where: {
     *     // ... filter to delete one Alert
     *   }
     * })
     * 
     */
    delete<T extends AlertDeleteArgs>(args: SelectSubset<T, AlertDeleteArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alert.
     * @param {AlertUpdateArgs} args - Arguments to update one Alert.
     * @example
     * // Update one Alert
     * const alert = await prisma.alert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertUpdateArgs>(args: SelectSubset<T, AlertUpdateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alerts.
     * @param {AlertDeleteManyArgs} args - Arguments to filter Alerts to delete.
     * @example
     * // Delete a few Alerts
     * const { count } = await prisma.alert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertDeleteManyArgs>(args?: SelectSubset<T, AlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertUpdateManyArgs>(args: SelectSubset<T, AlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Alert.
     * @param {AlertUpsertArgs} args - Arguments to update or create a Alert.
     * @example
     * // Update or create a Alert
     * const alert = await prisma.alert.upsert({
     *   create: {
     *     // ... data to create a Alert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alert we want to update
     *   }
     * })
     */
    upsert<T extends AlertUpsertArgs>(args: SelectSubset<T, AlertUpsertArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertCountArgs} args - Arguments to filter Alerts to count.
     * @example
     * // Count the number of Alerts
     * const count = await prisma.alert.count({
     *   where: {
     *     // ... the filter for the Alerts we want to count
     *   }
     * })
    **/
    count<T extends AlertCountArgs>(
      args?: Subset<T, AlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlertAggregateArgs>(args: Subset<T, AlertAggregateArgs>): Prisma.PrismaPromise<GetAlertAggregateType<T>>

    /**
     * Group by Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertGroupByArgs} args - Group by arguments.
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
      T extends AlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertGroupByArgs['orderBy'] }
        : { orderBy?: AlertGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alert model
   */
  readonly fields: AlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Alert model
   */
  interface AlertFieldRefs {
    readonly id: FieldRef<"Alert", 'String'>
    readonly userId: FieldRef<"Alert", 'String'>
    readonly message: FieldRef<"Alert", 'String'>
    readonly type: FieldRef<"Alert", 'AlertType'>
    readonly isRead: FieldRef<"Alert", 'Boolean'>
    readonly createdAt: FieldRef<"Alert", 'DateTime'>
    readonly updatedAt: FieldRef<"Alert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Alert findUnique
   */
  export type AlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findUniqueOrThrow
   */
  export type AlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findFirst
   */
  export type AlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findFirstOrThrow
   */
  export type AlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findMany
   */
  export type AlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alerts to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert create
   */
  export type AlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to create a Alert.
     */
    data: XOR<AlertCreateInput, AlertUncheckedCreateInput>
  }

  /**
   * Alert createMany
   */
  export type AlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alert update
   */
  export type AlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to update a Alert.
     */
    data: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
    /**
     * Choose, which Alert to update.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert updateMany
   */
  export type AlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
  }

  /**
   * Alert upsert
   */
  export type AlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The filter to search for the Alert to update in case it exists.
     */
    where: AlertWhereUniqueInput
    /**
     * In case the Alert found by the `where` argument doesn't exist, create a new Alert with this data.
     */
    create: XOR<AlertCreateInput, AlertUncheckedCreateInput>
    /**
     * In case the Alert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
  }

  /**
   * Alert delete
   */
  export type AlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter which Alert to delete.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert deleteMany
   */
  export type AlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alerts to delete
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to delete.
     */
    limit?: number
  }

  /**
   * Alert without action
   */
  export type AlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportMinAggregateOutputType = {
    id: string | null
    title: string | null
    studentId: string | null
    lecturerId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: string | null
    title: string | null
    studentId: string | null
    lecturerId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    title: number
    studentId: number
    lecturerId: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReportMinAggregateInputType = {
    id?: true
    title?: true
    studentId?: true
    lecturerId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    title?: true
    studentId?: true
    lecturerId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    title?: true
    studentId?: true
    lecturerId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: string
    title: string
    studentId: string
    lecturerId: string
    content: string
    createdAt: Date
    updatedAt: Date
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    studentId?: boolean
    lecturerId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>



  export type ReportSelectScalar = {
    id?: boolean
    title?: boolean
    studentId?: boolean
    lecturerId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "studentId" | "lecturerId" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["report"]>
  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      lecturer: Prisma.$LecturerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      studentId: string
      lecturerId: string
      content: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
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
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lecturer<T extends LecturerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LecturerDefaultArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'String'>
    readonly title: FieldRef<"Report", 'String'>
    readonly studentId: FieldRef<"Report", 'String'>
    readonly lecturerId: FieldRef<"Report", 'String'>
    readonly content: FieldRef<"Report", 'String'>
    readonly createdAt: FieldRef<"Report", 'DateTime'>
    readonly updatedAt: FieldRef<"Report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
  }


  /**
   * Model FinalDocument
   */

  export type AggregateFinalDocument = {
    _count: FinalDocumentCountAggregateOutputType | null
    _min: FinalDocumentMinAggregateOutputType | null
    _max: FinalDocumentMaxAggregateOutputType | null
  }

  export type FinalDocumentMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    title: string | null
    content: string | null
    fileUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FinalDocumentMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    title: string | null
    content: string | null
    fileUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FinalDocumentCountAggregateOutputType = {
    id: number
    studentId: number
    title: number
    content: number
    fileUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FinalDocumentMinAggregateInputType = {
    id?: true
    studentId?: true
    title?: true
    content?: true
    fileUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FinalDocumentMaxAggregateInputType = {
    id?: true
    studentId?: true
    title?: true
    content?: true
    fileUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FinalDocumentCountAggregateInputType = {
    id?: true
    studentId?: true
    title?: true
    content?: true
    fileUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FinalDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinalDocument to aggregate.
     */
    where?: FinalDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinalDocuments to fetch.
     */
    orderBy?: FinalDocumentOrderByWithRelationInput | FinalDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinalDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinalDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinalDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FinalDocuments
    **/
    _count?: true | FinalDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinalDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinalDocumentMaxAggregateInputType
  }

  export type GetFinalDocumentAggregateType<T extends FinalDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateFinalDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinalDocument[P]>
      : GetScalarType<T[P], AggregateFinalDocument[P]>
  }




  export type FinalDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinalDocumentWhereInput
    orderBy?: FinalDocumentOrderByWithAggregationInput | FinalDocumentOrderByWithAggregationInput[]
    by: FinalDocumentScalarFieldEnum[] | FinalDocumentScalarFieldEnum
    having?: FinalDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinalDocumentCountAggregateInputType | true
    _min?: FinalDocumentMinAggregateInputType
    _max?: FinalDocumentMaxAggregateInputType
  }

  export type FinalDocumentGroupByOutputType = {
    id: string
    studentId: string
    title: string
    content: string
    fileUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: FinalDocumentCountAggregateOutputType | null
    _min: FinalDocumentMinAggregateOutputType | null
    _max: FinalDocumentMaxAggregateOutputType | null
  }

  type GetFinalDocumentGroupByPayload<T extends FinalDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinalDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinalDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinalDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], FinalDocumentGroupByOutputType[P]>
        }
      >
    >


  export type FinalDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    title?: boolean
    content?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["finalDocument"]>



  export type FinalDocumentSelectScalar = {
    id?: boolean
    studentId?: boolean
    title?: boolean
    content?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FinalDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "title" | "content" | "fileUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["finalDocument"]>
  export type FinalDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $FinalDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FinalDocument"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      title: string
      content: string
      fileUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["finalDocument"]>
    composites: {}
  }

  type FinalDocumentGetPayload<S extends boolean | null | undefined | FinalDocumentDefaultArgs> = $Result.GetResult<Prisma.$FinalDocumentPayload, S>

  type FinalDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FinalDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinalDocumentCountAggregateInputType | true
    }

  export interface FinalDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinalDocument'], meta: { name: 'FinalDocument' } }
    /**
     * Find zero or one FinalDocument that matches the filter.
     * @param {FinalDocumentFindUniqueArgs} args - Arguments to find a FinalDocument
     * @example
     * // Get one FinalDocument
     * const finalDocument = await prisma.finalDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinalDocumentFindUniqueArgs>(args: SelectSubset<T, FinalDocumentFindUniqueArgs<ExtArgs>>): Prisma__FinalDocumentClient<$Result.GetResult<Prisma.$FinalDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FinalDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FinalDocumentFindUniqueOrThrowArgs} args - Arguments to find a FinalDocument
     * @example
     * // Get one FinalDocument
     * const finalDocument = await prisma.finalDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinalDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, FinalDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinalDocumentClient<$Result.GetResult<Prisma.$FinalDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinalDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinalDocumentFindFirstArgs} args - Arguments to find a FinalDocument
     * @example
     * // Get one FinalDocument
     * const finalDocument = await prisma.finalDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinalDocumentFindFirstArgs>(args?: SelectSubset<T, FinalDocumentFindFirstArgs<ExtArgs>>): Prisma__FinalDocumentClient<$Result.GetResult<Prisma.$FinalDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinalDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinalDocumentFindFirstOrThrowArgs} args - Arguments to find a FinalDocument
     * @example
     * // Get one FinalDocument
     * const finalDocument = await prisma.finalDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinalDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, FinalDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinalDocumentClient<$Result.GetResult<Prisma.$FinalDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FinalDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinalDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FinalDocuments
     * const finalDocuments = await prisma.finalDocument.findMany()
     * 
     * // Get first 10 FinalDocuments
     * const finalDocuments = await prisma.finalDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const finalDocumentWithIdOnly = await prisma.finalDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinalDocumentFindManyArgs>(args?: SelectSubset<T, FinalDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinalDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FinalDocument.
     * @param {FinalDocumentCreateArgs} args - Arguments to create a FinalDocument.
     * @example
     * // Create one FinalDocument
     * const FinalDocument = await prisma.finalDocument.create({
     *   data: {
     *     // ... data to create a FinalDocument
     *   }
     * })
     * 
     */
    create<T extends FinalDocumentCreateArgs>(args: SelectSubset<T, FinalDocumentCreateArgs<ExtArgs>>): Prisma__FinalDocumentClient<$Result.GetResult<Prisma.$FinalDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FinalDocuments.
     * @param {FinalDocumentCreateManyArgs} args - Arguments to create many FinalDocuments.
     * @example
     * // Create many FinalDocuments
     * const finalDocument = await prisma.finalDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinalDocumentCreateManyArgs>(args?: SelectSubset<T, FinalDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FinalDocument.
     * @param {FinalDocumentDeleteArgs} args - Arguments to delete one FinalDocument.
     * @example
     * // Delete one FinalDocument
     * const FinalDocument = await prisma.finalDocument.delete({
     *   where: {
     *     // ... filter to delete one FinalDocument
     *   }
     * })
     * 
     */
    delete<T extends FinalDocumentDeleteArgs>(args: SelectSubset<T, FinalDocumentDeleteArgs<ExtArgs>>): Prisma__FinalDocumentClient<$Result.GetResult<Prisma.$FinalDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FinalDocument.
     * @param {FinalDocumentUpdateArgs} args - Arguments to update one FinalDocument.
     * @example
     * // Update one FinalDocument
     * const finalDocument = await prisma.finalDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinalDocumentUpdateArgs>(args: SelectSubset<T, FinalDocumentUpdateArgs<ExtArgs>>): Prisma__FinalDocumentClient<$Result.GetResult<Prisma.$FinalDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FinalDocuments.
     * @param {FinalDocumentDeleteManyArgs} args - Arguments to filter FinalDocuments to delete.
     * @example
     * // Delete a few FinalDocuments
     * const { count } = await prisma.finalDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinalDocumentDeleteManyArgs>(args?: SelectSubset<T, FinalDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinalDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinalDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FinalDocuments
     * const finalDocument = await prisma.finalDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinalDocumentUpdateManyArgs>(args: SelectSubset<T, FinalDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FinalDocument.
     * @param {FinalDocumentUpsertArgs} args - Arguments to update or create a FinalDocument.
     * @example
     * // Update or create a FinalDocument
     * const finalDocument = await prisma.finalDocument.upsert({
     *   create: {
     *     // ... data to create a FinalDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FinalDocument we want to update
     *   }
     * })
     */
    upsert<T extends FinalDocumentUpsertArgs>(args: SelectSubset<T, FinalDocumentUpsertArgs<ExtArgs>>): Prisma__FinalDocumentClient<$Result.GetResult<Prisma.$FinalDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FinalDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinalDocumentCountArgs} args - Arguments to filter FinalDocuments to count.
     * @example
     * // Count the number of FinalDocuments
     * const count = await prisma.finalDocument.count({
     *   where: {
     *     // ... the filter for the FinalDocuments we want to count
     *   }
     * })
    **/
    count<T extends FinalDocumentCountArgs>(
      args?: Subset<T, FinalDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinalDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FinalDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinalDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FinalDocumentAggregateArgs>(args: Subset<T, FinalDocumentAggregateArgs>): Prisma.PrismaPromise<GetFinalDocumentAggregateType<T>>

    /**
     * Group by FinalDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinalDocumentGroupByArgs} args - Group by arguments.
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
      T extends FinalDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinalDocumentGroupByArgs['orderBy'] }
        : { orderBy?: FinalDocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FinalDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinalDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FinalDocument model
   */
  readonly fields: FinalDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FinalDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinalDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FinalDocument model
   */
  interface FinalDocumentFieldRefs {
    readonly id: FieldRef<"FinalDocument", 'String'>
    readonly studentId: FieldRef<"FinalDocument", 'String'>
    readonly title: FieldRef<"FinalDocument", 'String'>
    readonly content: FieldRef<"FinalDocument", 'String'>
    readonly fileUrl: FieldRef<"FinalDocument", 'String'>
    readonly createdAt: FieldRef<"FinalDocument", 'DateTime'>
    readonly updatedAt: FieldRef<"FinalDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FinalDocument findUnique
   */
  export type FinalDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalDocument
     */
    select?: FinalDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalDocument
     */
    omit?: FinalDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalDocumentInclude<ExtArgs> | null
    /**
     * Filter, which FinalDocument to fetch.
     */
    where: FinalDocumentWhereUniqueInput
  }

  /**
   * FinalDocument findUniqueOrThrow
   */
  export type FinalDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalDocument
     */
    select?: FinalDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalDocument
     */
    omit?: FinalDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalDocumentInclude<ExtArgs> | null
    /**
     * Filter, which FinalDocument to fetch.
     */
    where: FinalDocumentWhereUniqueInput
  }

  /**
   * FinalDocument findFirst
   */
  export type FinalDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalDocument
     */
    select?: FinalDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalDocument
     */
    omit?: FinalDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalDocumentInclude<ExtArgs> | null
    /**
     * Filter, which FinalDocument to fetch.
     */
    where?: FinalDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinalDocuments to fetch.
     */
    orderBy?: FinalDocumentOrderByWithRelationInput | FinalDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinalDocuments.
     */
    cursor?: FinalDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinalDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinalDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinalDocuments.
     */
    distinct?: FinalDocumentScalarFieldEnum | FinalDocumentScalarFieldEnum[]
  }

  /**
   * FinalDocument findFirstOrThrow
   */
  export type FinalDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalDocument
     */
    select?: FinalDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalDocument
     */
    omit?: FinalDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalDocumentInclude<ExtArgs> | null
    /**
     * Filter, which FinalDocument to fetch.
     */
    where?: FinalDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinalDocuments to fetch.
     */
    orderBy?: FinalDocumentOrderByWithRelationInput | FinalDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinalDocuments.
     */
    cursor?: FinalDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinalDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinalDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinalDocuments.
     */
    distinct?: FinalDocumentScalarFieldEnum | FinalDocumentScalarFieldEnum[]
  }

  /**
   * FinalDocument findMany
   */
  export type FinalDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalDocument
     */
    select?: FinalDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalDocument
     */
    omit?: FinalDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalDocumentInclude<ExtArgs> | null
    /**
     * Filter, which FinalDocuments to fetch.
     */
    where?: FinalDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinalDocuments to fetch.
     */
    orderBy?: FinalDocumentOrderByWithRelationInput | FinalDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FinalDocuments.
     */
    cursor?: FinalDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinalDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinalDocuments.
     */
    skip?: number
    distinct?: FinalDocumentScalarFieldEnum | FinalDocumentScalarFieldEnum[]
  }

  /**
   * FinalDocument create
   */
  export type FinalDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalDocument
     */
    select?: FinalDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalDocument
     */
    omit?: FinalDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a FinalDocument.
     */
    data: XOR<FinalDocumentCreateInput, FinalDocumentUncheckedCreateInput>
  }

  /**
   * FinalDocument createMany
   */
  export type FinalDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FinalDocuments.
     */
    data: FinalDocumentCreateManyInput | FinalDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinalDocument update
   */
  export type FinalDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalDocument
     */
    select?: FinalDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalDocument
     */
    omit?: FinalDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a FinalDocument.
     */
    data: XOR<FinalDocumentUpdateInput, FinalDocumentUncheckedUpdateInput>
    /**
     * Choose, which FinalDocument to update.
     */
    where: FinalDocumentWhereUniqueInput
  }

  /**
   * FinalDocument updateMany
   */
  export type FinalDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FinalDocuments.
     */
    data: XOR<FinalDocumentUpdateManyMutationInput, FinalDocumentUncheckedUpdateManyInput>
    /**
     * Filter which FinalDocuments to update
     */
    where?: FinalDocumentWhereInput
    /**
     * Limit how many FinalDocuments to update.
     */
    limit?: number
  }

  /**
   * FinalDocument upsert
   */
  export type FinalDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalDocument
     */
    select?: FinalDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalDocument
     */
    omit?: FinalDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the FinalDocument to update in case it exists.
     */
    where: FinalDocumentWhereUniqueInput
    /**
     * In case the FinalDocument found by the `where` argument doesn't exist, create a new FinalDocument with this data.
     */
    create: XOR<FinalDocumentCreateInput, FinalDocumentUncheckedCreateInput>
    /**
     * In case the FinalDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinalDocumentUpdateInput, FinalDocumentUncheckedUpdateInput>
  }

  /**
   * FinalDocument delete
   */
  export type FinalDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalDocument
     */
    select?: FinalDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalDocument
     */
    omit?: FinalDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalDocumentInclude<ExtArgs> | null
    /**
     * Filter which FinalDocument to delete.
     */
    where: FinalDocumentWhereUniqueInput
  }

  /**
   * FinalDocument deleteMany
   */
  export type FinalDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinalDocuments to delete
     */
    where?: FinalDocumentWhereInput
    /**
     * Limit how many FinalDocuments to delete.
     */
    limit?: number
  }

  /**
   * FinalDocument without action
   */
  export type FinalDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalDocument
     */
    select?: FinalDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalDocument
     */
    omit?: FinalDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalDocumentInclude<ExtArgs> | null
  }


  /**
   * Model Grade
   */

  export type AggregateGrade = {
    _count: GradeCountAggregateOutputType | null
    _avg: GradeAvgAggregateOutputType | null
    _sum: GradeSumAggregateOutputType | null
    _min: GradeMinAggregateOutputType | null
    _max: GradeMaxAggregateOutputType | null
  }

  export type GradeAvgAggregateOutputType = {
    score: number | null
  }

  export type GradeSumAggregateOutputType = {
    score: number | null
  }

  export type GradeMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    lecturerId: string | null
    score: number | null
    feedback: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GradeMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    lecturerId: string | null
    score: number | null
    feedback: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GradeCountAggregateOutputType = {
    id: number
    studentId: number
    lecturerId: number
    score: number
    feedback: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GradeAvgAggregateInputType = {
    score?: true
  }

  export type GradeSumAggregateInputType = {
    score?: true
  }

  export type GradeMinAggregateInputType = {
    id?: true
    studentId?: true
    lecturerId?: true
    score?: true
    feedback?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GradeMaxAggregateInputType = {
    id?: true
    studentId?: true
    lecturerId?: true
    score?: true
    feedback?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GradeCountAggregateInputType = {
    id?: true
    studentId?: true
    lecturerId?: true
    score?: true
    feedback?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grade to aggregate.
     */
    where?: GradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grades to fetch.
     */
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Grades
    **/
    _count?: true | GradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GradeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GradeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GradeMaxAggregateInputType
  }

  export type GetGradeAggregateType<T extends GradeAggregateArgs> = {
        [P in keyof T & keyof AggregateGrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrade[P]>
      : GetScalarType<T[P], AggregateGrade[P]>
  }




  export type GradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GradeWhereInput
    orderBy?: GradeOrderByWithAggregationInput | GradeOrderByWithAggregationInput[]
    by: GradeScalarFieldEnum[] | GradeScalarFieldEnum
    having?: GradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GradeCountAggregateInputType | true
    _avg?: GradeAvgAggregateInputType
    _sum?: GradeSumAggregateInputType
    _min?: GradeMinAggregateInputType
    _max?: GradeMaxAggregateInputType
  }

  export type GradeGroupByOutputType = {
    id: string
    studentId: string
    lecturerId: string
    score: number
    feedback: string | null
    createdAt: Date
    updatedAt: Date
    _count: GradeCountAggregateOutputType | null
    _avg: GradeAvgAggregateOutputType | null
    _sum: GradeSumAggregateOutputType | null
    _min: GradeMinAggregateOutputType | null
    _max: GradeMaxAggregateOutputType | null
  }

  type GetGradeGroupByPayload<T extends GradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GradeGroupByOutputType[P]>
            : GetScalarType<T[P], GradeGroupByOutputType[P]>
        }
      >
    >


  export type GradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    lecturerId?: boolean
    score?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grade"]>



  export type GradeSelectScalar = {
    id?: boolean
    studentId?: boolean
    lecturerId?: boolean
    score?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GradeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "lecturerId" | "score" | "feedback" | "createdAt" | "updatedAt", ExtArgs["result"]["grade"]>
  export type GradeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $GradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Grade"
    objects: {
      lecturer: Prisma.$LecturerPayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      lecturerId: string
      score: number
      feedback: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["grade"]>
    composites: {}
  }

  type GradeGetPayload<S extends boolean | null | undefined | GradeDefaultArgs> = $Result.GetResult<Prisma.$GradePayload, S>

  type GradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GradeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GradeCountAggregateInputType | true
    }

  export interface GradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Grade'], meta: { name: 'Grade' } }
    /**
     * Find zero or one Grade that matches the filter.
     * @param {GradeFindUniqueArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GradeFindUniqueArgs>(args: SelectSubset<T, GradeFindUniqueArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Grade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GradeFindUniqueOrThrowArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GradeFindUniqueOrThrowArgs>(args: SelectSubset<T, GradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeFindFirstArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GradeFindFirstArgs>(args?: SelectSubset<T, GradeFindFirstArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeFindFirstOrThrowArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GradeFindFirstOrThrowArgs>(args?: SelectSubset<T, GradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Grades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Grades
     * const grades = await prisma.grade.findMany()
     * 
     * // Get first 10 Grades
     * const grades = await prisma.grade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gradeWithIdOnly = await prisma.grade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GradeFindManyArgs>(args?: SelectSubset<T, GradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Grade.
     * @param {GradeCreateArgs} args - Arguments to create a Grade.
     * @example
     * // Create one Grade
     * const Grade = await prisma.grade.create({
     *   data: {
     *     // ... data to create a Grade
     *   }
     * })
     * 
     */
    create<T extends GradeCreateArgs>(args: SelectSubset<T, GradeCreateArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Grades.
     * @param {GradeCreateManyArgs} args - Arguments to create many Grades.
     * @example
     * // Create many Grades
     * const grade = await prisma.grade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GradeCreateManyArgs>(args?: SelectSubset<T, GradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Grade.
     * @param {GradeDeleteArgs} args - Arguments to delete one Grade.
     * @example
     * // Delete one Grade
     * const Grade = await prisma.grade.delete({
     *   where: {
     *     // ... filter to delete one Grade
     *   }
     * })
     * 
     */
    delete<T extends GradeDeleteArgs>(args: SelectSubset<T, GradeDeleteArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Grade.
     * @param {GradeUpdateArgs} args - Arguments to update one Grade.
     * @example
     * // Update one Grade
     * const grade = await prisma.grade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GradeUpdateArgs>(args: SelectSubset<T, GradeUpdateArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Grades.
     * @param {GradeDeleteManyArgs} args - Arguments to filter Grades to delete.
     * @example
     * // Delete a few Grades
     * const { count } = await prisma.grade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GradeDeleteManyArgs>(args?: SelectSubset<T, GradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Grades
     * const grade = await prisma.grade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GradeUpdateManyArgs>(args: SelectSubset<T, GradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Grade.
     * @param {GradeUpsertArgs} args - Arguments to update or create a Grade.
     * @example
     * // Update or create a Grade
     * const grade = await prisma.grade.upsert({
     *   create: {
     *     // ... data to create a Grade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grade we want to update
     *   }
     * })
     */
    upsert<T extends GradeUpsertArgs>(args: SelectSubset<T, GradeUpsertArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Grades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeCountArgs} args - Arguments to filter Grades to count.
     * @example
     * // Count the number of Grades
     * const count = await prisma.grade.count({
     *   where: {
     *     // ... the filter for the Grades we want to count
     *   }
     * })
    **/
    count<T extends GradeCountArgs>(
      args?: Subset<T, GradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Grade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GradeAggregateArgs>(args: Subset<T, GradeAggregateArgs>): Prisma.PrismaPromise<GetGradeAggregateType<T>>

    /**
     * Group by Grade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeGroupByArgs} args - Group by arguments.
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
      T extends GradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GradeGroupByArgs['orderBy'] }
        : { orderBy?: GradeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Grade model
   */
  readonly fields: GradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Grade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lecturer<T extends LecturerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LecturerDefaultArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Grade model
   */
  interface GradeFieldRefs {
    readonly id: FieldRef<"Grade", 'String'>
    readonly studentId: FieldRef<"Grade", 'String'>
    readonly lecturerId: FieldRef<"Grade", 'String'>
    readonly score: FieldRef<"Grade", 'Int'>
    readonly feedback: FieldRef<"Grade", 'String'>
    readonly createdAt: FieldRef<"Grade", 'DateTime'>
    readonly updatedAt: FieldRef<"Grade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Grade findUnique
   */
  export type GradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter, which Grade to fetch.
     */
    where: GradeWhereUniqueInput
  }

  /**
   * Grade findUniqueOrThrow
   */
  export type GradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter, which Grade to fetch.
     */
    where: GradeWhereUniqueInput
  }

  /**
   * Grade findFirst
   */
  export type GradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter, which Grade to fetch.
     */
    where?: GradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grades to fetch.
     */
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grades.
     */
    cursor?: GradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grades.
     */
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * Grade findFirstOrThrow
   */
  export type GradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter, which Grade to fetch.
     */
    where?: GradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grades to fetch.
     */
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grades.
     */
    cursor?: GradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grades.
     */
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * Grade findMany
   */
  export type GradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter, which Grades to fetch.
     */
    where?: GradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grades to fetch.
     */
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Grades.
     */
    cursor?: GradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grades.
     */
    skip?: number
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * Grade create
   */
  export type GradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * The data needed to create a Grade.
     */
    data: XOR<GradeCreateInput, GradeUncheckedCreateInput>
  }

  /**
   * Grade createMany
   */
  export type GradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Grades.
     */
    data: GradeCreateManyInput | GradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Grade update
   */
  export type GradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * The data needed to update a Grade.
     */
    data: XOR<GradeUpdateInput, GradeUncheckedUpdateInput>
    /**
     * Choose, which Grade to update.
     */
    where: GradeWhereUniqueInput
  }

  /**
   * Grade updateMany
   */
  export type GradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Grades.
     */
    data: XOR<GradeUpdateManyMutationInput, GradeUncheckedUpdateManyInput>
    /**
     * Filter which Grades to update
     */
    where?: GradeWhereInput
    /**
     * Limit how many Grades to update.
     */
    limit?: number
  }

  /**
   * Grade upsert
   */
  export type GradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * The filter to search for the Grade to update in case it exists.
     */
    where: GradeWhereUniqueInput
    /**
     * In case the Grade found by the `where` argument doesn't exist, create a new Grade with this data.
     */
    create: XOR<GradeCreateInput, GradeUncheckedCreateInput>
    /**
     * In case the Grade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GradeUpdateInput, GradeUncheckedUpdateInput>
  }

  /**
   * Grade delete
   */
  export type GradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter which Grade to delete.
     */
    where: GradeWhereUniqueInput
  }

  /**
   * Grade deleteMany
   */
  export type GradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grades to delete
     */
    where?: GradeWhereInput
    /**
     * Limit how many Grades to delete.
     */
    limit?: number
  }

  /**
   * Grade without action
   */
  export type GradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
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
    username: 'username',
    fullName: 'fullName',
    email: 'email',
    role: 'role',
    password: 'password',
    isActive: 'isActive',
    isVerified: 'isVerified',
    isBlocked: 'isBlocked',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const LecturerScalarFieldEnum: {
    id: 'id',
    department: 'department',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LecturerScalarFieldEnum = (typeof LecturerScalarFieldEnum)[keyof typeof LecturerScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const ZoneScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ZoneScalarFieldEnum = (typeof ZoneScalarFieldEnum)[keyof typeof ZoneScalarFieldEnum]


  export const SchoolScalarFieldEnum: {
    id: 'id',
    name: 'name',
    zoneId: 'zoneId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum]


  export const TpApplicationScalarFieldEnum: {
    id: 'id',
    schoolName: 'schoolName',
    position: 'position',
    startDate: 'startDate',
    endDate: 'endDate',
    studentId: 'studentId',
    schoolId: 'schoolId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TpApplicationScalarFieldEnum = (typeof TpApplicationScalarFieldEnum)[keyof typeof TpApplicationScalarFieldEnum]


  export const LecturerZoneAssignedScalarFieldEnum: {
    id: 'id',
    lecturerId: 'lecturerId',
    zoneId: 'zoneId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LecturerZoneAssignedScalarFieldEnum = (typeof LecturerZoneAssignedScalarFieldEnum)[keyof typeof LecturerZoneAssignedScalarFieldEnum]


  export const LecturerZoneRequestScalarFieldEnum: {
    id: 'id',
    lecturerId: 'lecturerId',
    zoneId: 'zoneId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LecturerZoneRequestScalarFieldEnum = (typeof LecturerZoneRequestScalarFieldEnum)[keyof typeof LecturerZoneRequestScalarFieldEnum]


  export const SupervisionScheduleScalarFieldEnum: {
    id: 'id',
    lecturerId: 'lecturerId',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SupervisionScheduleScalarFieldEnum = (typeof SupervisionScheduleScalarFieldEnum)[keyof typeof SupervisionScheduleScalarFieldEnum]


  export const LessonPlanScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LessonPlanScalarFieldEnum = (typeof LessonPlanScalarFieldEnum)[keyof typeof LessonPlanScalarFieldEnum]


  export const SupervisionVisitScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    lecturerId: 'lecturerId',
    date: 'date',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SupervisionVisitScalarFieldEnum = (typeof SupervisionVisitScalarFieldEnum)[keyof typeof SupervisionVisitScalarFieldEnum]


  export const AlertScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    message: 'message',
    type: 'type',
    isRead: 'isRead',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AlertScalarFieldEnum = (typeof AlertScalarFieldEnum)[keyof typeof AlertScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    title: 'title',
    studentId: 'studentId',
    lecturerId: 'lecturerId',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const FinalDocumentScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    title: 'title',
    content: 'content',
    fileUrl: 'fileUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FinalDocumentScalarFieldEnum = (typeof FinalDocumentScalarFieldEnum)[keyof typeof FinalDocumentScalarFieldEnum]


  export const GradeScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    lecturerId: 'lecturerId',
    score: 'score',
    feedback: 'feedback',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GradeScalarFieldEnum = (typeof GradeScalarFieldEnum)[keyof typeof GradeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    username: 'username',
    fullName: 'fullName',
    email: 'email',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const StudentOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type StudentOrderByRelevanceFieldEnum = (typeof StudentOrderByRelevanceFieldEnum)[keyof typeof StudentOrderByRelevanceFieldEnum]


  export const LecturerOrderByRelevanceFieldEnum: {
    id: 'id',
    department: 'department',
    userId: 'userId'
  };

  export type LecturerOrderByRelevanceFieldEnum = (typeof LecturerOrderByRelevanceFieldEnum)[keyof typeof LecturerOrderByRelevanceFieldEnum]


  export const AdminOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type AdminOrderByRelevanceFieldEnum = (typeof AdminOrderByRelevanceFieldEnum)[keyof typeof AdminOrderByRelevanceFieldEnum]


  export const ZoneOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ZoneOrderByRelevanceFieldEnum = (typeof ZoneOrderByRelevanceFieldEnum)[keyof typeof ZoneOrderByRelevanceFieldEnum]


  export const SchoolOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    zoneId: 'zoneId'
  };

  export type SchoolOrderByRelevanceFieldEnum = (typeof SchoolOrderByRelevanceFieldEnum)[keyof typeof SchoolOrderByRelevanceFieldEnum]


  export const TpApplicationOrderByRelevanceFieldEnum: {
    id: 'id',
    schoolName: 'schoolName',
    position: 'position',
    studentId: 'studentId',
    schoolId: 'schoolId'
  };

  export type TpApplicationOrderByRelevanceFieldEnum = (typeof TpApplicationOrderByRelevanceFieldEnum)[keyof typeof TpApplicationOrderByRelevanceFieldEnum]


  export const LecturerZoneAssignedOrderByRelevanceFieldEnum: {
    id: 'id',
    lecturerId: 'lecturerId',
    zoneId: 'zoneId'
  };

  export type LecturerZoneAssignedOrderByRelevanceFieldEnum = (typeof LecturerZoneAssignedOrderByRelevanceFieldEnum)[keyof typeof LecturerZoneAssignedOrderByRelevanceFieldEnum]


  export const LecturerZoneRequestOrderByRelevanceFieldEnum: {
    id: 'id',
    lecturerId: 'lecturerId',
    zoneId: 'zoneId'
  };

  export type LecturerZoneRequestOrderByRelevanceFieldEnum = (typeof LecturerZoneRequestOrderByRelevanceFieldEnum)[keyof typeof LecturerZoneRequestOrderByRelevanceFieldEnum]


  export const SupervisionScheduleOrderByRelevanceFieldEnum: {
    id: 'id',
    lecturerId: 'lecturerId'
  };

  export type SupervisionScheduleOrderByRelevanceFieldEnum = (typeof SupervisionScheduleOrderByRelevanceFieldEnum)[keyof typeof SupervisionScheduleOrderByRelevanceFieldEnum]


  export const LessonPlanOrderByRelevanceFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    title: 'title',
    description: 'description'
  };

  export type LessonPlanOrderByRelevanceFieldEnum = (typeof LessonPlanOrderByRelevanceFieldEnum)[keyof typeof LessonPlanOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const SupervisionVisitOrderByRelevanceFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    lecturerId: 'lecturerId',
    notes: 'notes'
  };

  export type SupervisionVisitOrderByRelevanceFieldEnum = (typeof SupervisionVisitOrderByRelevanceFieldEnum)[keyof typeof SupervisionVisitOrderByRelevanceFieldEnum]


  export const AlertOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    message: 'message'
  };

  export type AlertOrderByRelevanceFieldEnum = (typeof AlertOrderByRelevanceFieldEnum)[keyof typeof AlertOrderByRelevanceFieldEnum]


  export const ReportOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    studentId: 'studentId',
    lecturerId: 'lecturerId',
    content: 'content'
  };

  export type ReportOrderByRelevanceFieldEnum = (typeof ReportOrderByRelevanceFieldEnum)[keyof typeof ReportOrderByRelevanceFieldEnum]


  export const FinalDocumentOrderByRelevanceFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    title: 'title',
    content: 'content',
    fileUrl: 'fileUrl'
  };

  export type FinalDocumentOrderByRelevanceFieldEnum = (typeof FinalDocumentOrderByRelevanceFieldEnum)[keyof typeof FinalDocumentOrderByRelevanceFieldEnum]


  export const GradeOrderByRelevanceFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    lecturerId: 'lecturerId',
    feedback: 'feedback'
  };

  export type GradeOrderByRelevanceFieldEnum = (typeof GradeOrderByRelevanceFieldEnum)[keyof typeof GradeOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'AlertType'
   */
  export type EnumAlertTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertType'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    password?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    isBlocked?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    student?: StudentListRelationFilter
    lecturer?: LecturerListRelationFilter
    admin?: AdminListRelationFilter
    alert?: AlertListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    isBlocked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByRelationAggregateInput
    lecturer?: LecturerOrderByRelationAggregateInput
    admin?: AdminOrderByRelationAggregateInput
    alert?: AlertOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    password?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    isBlocked?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    student?: StudentListRelationFilter
    lecturer?: LecturerListRelationFilter
    admin?: AdminListRelationFilter
    alert?: AlertListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    isBlocked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    password?: StringWithAggregatesFilter<"User"> | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    isBlocked?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    userId?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    tpApplication?: TpApplicationListRelationFilter
    lessonPlan?: LessonPlanListRelationFilter
    supervisionVisit?: SupervisionVisitListRelationFilter
    report?: ReportListRelationFilter
    finalDocument?: FinalDocumentListRelationFilter
    grade?: GradeListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tpApplication?: TpApplicationOrderByRelationAggregateInput
    lessonPlan?: LessonPlanOrderByRelationAggregateInput
    supervisionVisit?: SupervisionVisitOrderByRelationAggregateInput
    report?: ReportOrderByRelationAggregateInput
    finalDocument?: FinalDocumentOrderByRelationAggregateInput
    grade?: GradeOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    _relevance?: StudentOrderByRelevanceInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    userId?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    tpApplication?: TpApplicationListRelationFilter
    lessonPlan?: LessonPlanListRelationFilter
    supervisionVisit?: SupervisionVisitListRelationFilter
    report?: ReportListRelationFilter
    finalDocument?: FinalDocumentListRelationFilter
    grade?: GradeListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    userId?: StringWithAggregatesFilter<"Student"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type LecturerWhereInput = {
    AND?: LecturerWhereInput | LecturerWhereInput[]
    OR?: LecturerWhereInput[]
    NOT?: LecturerWhereInput | LecturerWhereInput[]
    id?: StringFilter<"Lecturer"> | string
    department?: StringFilter<"Lecturer"> | string
    userId?: StringFilter<"Lecturer"> | string
    createdAt?: DateTimeFilter<"Lecturer"> | Date | string
    updatedAt?: DateTimeFilter<"Lecturer"> | Date | string
    lecturerZoneAssigned?: LecturerZoneAssignedListRelationFilter
    lecturerZoneRequest?: LecturerZoneRequestListRelationFilter
    supervisionSchedule?: SupervisionScheduleListRelationFilter
    supervisionVisit?: SupervisionVisitListRelationFilter
    report?: ReportListRelationFilter
    grade?: GradeListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LecturerOrderByWithRelationInput = {
    id?: SortOrder
    department?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lecturerZoneAssigned?: LecturerZoneAssignedOrderByRelationAggregateInput
    lecturerZoneRequest?: LecturerZoneRequestOrderByRelationAggregateInput
    supervisionSchedule?: SupervisionScheduleOrderByRelationAggregateInput
    supervisionVisit?: SupervisionVisitOrderByRelationAggregateInput
    report?: ReportOrderByRelationAggregateInput
    grade?: GradeOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    _relevance?: LecturerOrderByRelevanceInput
  }

  export type LecturerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LecturerWhereInput | LecturerWhereInput[]
    OR?: LecturerWhereInput[]
    NOT?: LecturerWhereInput | LecturerWhereInput[]
    department?: StringFilter<"Lecturer"> | string
    userId?: StringFilter<"Lecturer"> | string
    createdAt?: DateTimeFilter<"Lecturer"> | Date | string
    updatedAt?: DateTimeFilter<"Lecturer"> | Date | string
    lecturerZoneAssigned?: LecturerZoneAssignedListRelationFilter
    lecturerZoneRequest?: LecturerZoneRequestListRelationFilter
    supervisionSchedule?: SupervisionScheduleListRelationFilter
    supervisionVisit?: SupervisionVisitListRelationFilter
    report?: ReportListRelationFilter
    grade?: GradeListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LecturerOrderByWithAggregationInput = {
    id?: SortOrder
    department?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LecturerCountOrderByAggregateInput
    _max?: LecturerMaxOrderByAggregateInput
    _min?: LecturerMinOrderByAggregateInput
  }

  export type LecturerScalarWhereWithAggregatesInput = {
    AND?: LecturerScalarWhereWithAggregatesInput | LecturerScalarWhereWithAggregatesInput[]
    OR?: LecturerScalarWhereWithAggregatesInput[]
    NOT?: LecturerScalarWhereWithAggregatesInput | LecturerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lecturer"> | string
    department?: StringWithAggregatesFilter<"Lecturer"> | string
    userId?: StringWithAggregatesFilter<"Lecturer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Lecturer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lecturer"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    userId?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: AdminOrderByRelevanceInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    userId?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    userId?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type ZoneWhereInput = {
    AND?: ZoneWhereInput | ZoneWhereInput[]
    OR?: ZoneWhereInput[]
    NOT?: ZoneWhereInput | ZoneWhereInput[]
    id?: StringFilter<"Zone"> | string
    name?: StringFilter<"Zone"> | string
    createdAt?: DateTimeFilter<"Zone"> | Date | string
    updatedAt?: DateTimeFilter<"Zone"> | Date | string
    schools?: SchoolListRelationFilter
    lecturerZoneRequest?: LecturerZoneRequestListRelationFilter
    lecturerZoneAssigned?: LecturerZoneAssignedListRelationFilter
  }

  export type ZoneOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schools?: SchoolOrderByRelationAggregateInput
    lecturerZoneRequest?: LecturerZoneRequestOrderByRelationAggregateInput
    lecturerZoneAssigned?: LecturerZoneAssignedOrderByRelationAggregateInput
    _relevance?: ZoneOrderByRelevanceInput
  }

  export type ZoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ZoneWhereInput | ZoneWhereInput[]
    OR?: ZoneWhereInput[]
    NOT?: ZoneWhereInput | ZoneWhereInput[]
    createdAt?: DateTimeFilter<"Zone"> | Date | string
    updatedAt?: DateTimeFilter<"Zone"> | Date | string
    schools?: SchoolListRelationFilter
    lecturerZoneRequest?: LecturerZoneRequestListRelationFilter
    lecturerZoneAssigned?: LecturerZoneAssignedListRelationFilter
  }, "id" | "name">

  export type ZoneOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ZoneCountOrderByAggregateInput
    _max?: ZoneMaxOrderByAggregateInput
    _min?: ZoneMinOrderByAggregateInput
  }

  export type ZoneScalarWhereWithAggregatesInput = {
    AND?: ZoneScalarWhereWithAggregatesInput | ZoneScalarWhereWithAggregatesInput[]
    OR?: ZoneScalarWhereWithAggregatesInput[]
    NOT?: ZoneScalarWhereWithAggregatesInput | ZoneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Zone"> | string
    name?: StringWithAggregatesFilter<"Zone"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Zone"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Zone"> | Date | string
  }

  export type SchoolWhereInput = {
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    id?: StringFilter<"School"> | string
    name?: StringFilter<"School"> | string
    zoneId?: StringFilter<"School"> | string
    createdAt?: DateTimeFilter<"School"> | Date | string
    updatedAt?: DateTimeFilter<"School"> | Date | string
    tpApplication?: TpApplicationListRelationFilter
    zone?: XOR<ZoneScalarRelationFilter, ZoneWhereInput>
  }

  export type SchoolOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    zoneId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tpApplication?: TpApplicationOrderByRelationAggregateInput
    zone?: ZoneOrderByWithRelationInput
    _relevance?: SchoolOrderByRelevanceInput
  }

  export type SchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    zoneId?: StringFilter<"School"> | string
    createdAt?: DateTimeFilter<"School"> | Date | string
    updatedAt?: DateTimeFilter<"School"> | Date | string
    tpApplication?: TpApplicationListRelationFilter
    zone?: XOR<ZoneScalarRelationFilter, ZoneWhereInput>
  }, "id" | "name">

  export type SchoolOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    zoneId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SchoolCountOrderByAggregateInput
    _max?: SchoolMaxOrderByAggregateInput
    _min?: SchoolMinOrderByAggregateInput
  }

  export type SchoolScalarWhereWithAggregatesInput = {
    AND?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    OR?: SchoolScalarWhereWithAggregatesInput[]
    NOT?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"School"> | string
    name?: StringWithAggregatesFilter<"School"> | string
    zoneId?: StringWithAggregatesFilter<"School"> | string
    createdAt?: DateTimeWithAggregatesFilter<"School"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"School"> | Date | string
  }

  export type TpApplicationWhereInput = {
    AND?: TpApplicationWhereInput | TpApplicationWhereInput[]
    OR?: TpApplicationWhereInput[]
    NOT?: TpApplicationWhereInput | TpApplicationWhereInput[]
    id?: StringFilter<"TpApplication"> | string
    schoolName?: StringFilter<"TpApplication"> | string
    position?: StringFilter<"TpApplication"> | string
    startDate?: DateTimeFilter<"TpApplication"> | Date | string
    endDate?: DateTimeFilter<"TpApplication"> | Date | string
    studentId?: StringFilter<"TpApplication"> | string
    schoolId?: StringFilter<"TpApplication"> | string
    status?: EnumStatusFilter<"TpApplication"> | $Enums.Status
    createdAt?: DateTimeFilter<"TpApplication"> | Date | string
    updatedAt?: DateTimeFilter<"TpApplication"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }

  export type TpApplicationOrderByWithRelationInput = {
    id?: SortOrder
    schoolName?: SortOrder
    position?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    studentId?: SortOrder
    schoolId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    school?: SchoolOrderByWithRelationInput
    _relevance?: TpApplicationOrderByRelevanceInput
  }

  export type TpApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TpApplicationWhereInput | TpApplicationWhereInput[]
    OR?: TpApplicationWhereInput[]
    NOT?: TpApplicationWhereInput | TpApplicationWhereInput[]
    schoolName?: StringFilter<"TpApplication"> | string
    position?: StringFilter<"TpApplication"> | string
    startDate?: DateTimeFilter<"TpApplication"> | Date | string
    endDate?: DateTimeFilter<"TpApplication"> | Date | string
    studentId?: StringFilter<"TpApplication"> | string
    schoolId?: StringFilter<"TpApplication"> | string
    status?: EnumStatusFilter<"TpApplication"> | $Enums.Status
    createdAt?: DateTimeFilter<"TpApplication"> | Date | string
    updatedAt?: DateTimeFilter<"TpApplication"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }, "id">

  export type TpApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    schoolName?: SortOrder
    position?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    studentId?: SortOrder
    schoolId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TpApplicationCountOrderByAggregateInput
    _max?: TpApplicationMaxOrderByAggregateInput
    _min?: TpApplicationMinOrderByAggregateInput
  }

  export type TpApplicationScalarWhereWithAggregatesInput = {
    AND?: TpApplicationScalarWhereWithAggregatesInput | TpApplicationScalarWhereWithAggregatesInput[]
    OR?: TpApplicationScalarWhereWithAggregatesInput[]
    NOT?: TpApplicationScalarWhereWithAggregatesInput | TpApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TpApplication"> | string
    schoolName?: StringWithAggregatesFilter<"TpApplication"> | string
    position?: StringWithAggregatesFilter<"TpApplication"> | string
    startDate?: DateTimeWithAggregatesFilter<"TpApplication"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"TpApplication"> | Date | string
    studentId?: StringWithAggregatesFilter<"TpApplication"> | string
    schoolId?: StringWithAggregatesFilter<"TpApplication"> | string
    status?: EnumStatusWithAggregatesFilter<"TpApplication"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"TpApplication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TpApplication"> | Date | string
  }

  export type LecturerZoneAssignedWhereInput = {
    AND?: LecturerZoneAssignedWhereInput | LecturerZoneAssignedWhereInput[]
    OR?: LecturerZoneAssignedWhereInput[]
    NOT?: LecturerZoneAssignedWhereInput | LecturerZoneAssignedWhereInput[]
    id?: StringFilter<"LecturerZoneAssigned"> | string
    lecturerId?: StringFilter<"LecturerZoneAssigned"> | string
    zoneId?: StringFilter<"LecturerZoneAssigned"> | string
    createdAt?: DateTimeFilter<"LecturerZoneAssigned"> | Date | string
    updatedAt?: DateTimeFilter<"LecturerZoneAssigned"> | Date | string
    lecturer?: XOR<LecturerScalarRelationFilter, LecturerWhereInput>
    zone?: XOR<ZoneScalarRelationFilter, ZoneWhereInput>
  }

  export type LecturerZoneAssignedOrderByWithRelationInput = {
    id?: SortOrder
    lecturerId?: SortOrder
    zoneId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lecturer?: LecturerOrderByWithRelationInput
    zone?: ZoneOrderByWithRelationInput
    _relevance?: LecturerZoneAssignedOrderByRelevanceInput
  }

  export type LecturerZoneAssignedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LecturerZoneAssignedWhereInput | LecturerZoneAssignedWhereInput[]
    OR?: LecturerZoneAssignedWhereInput[]
    NOT?: LecturerZoneAssignedWhereInput | LecturerZoneAssignedWhereInput[]
    lecturerId?: StringFilter<"LecturerZoneAssigned"> | string
    zoneId?: StringFilter<"LecturerZoneAssigned"> | string
    createdAt?: DateTimeFilter<"LecturerZoneAssigned"> | Date | string
    updatedAt?: DateTimeFilter<"LecturerZoneAssigned"> | Date | string
    lecturer?: XOR<LecturerScalarRelationFilter, LecturerWhereInput>
    zone?: XOR<ZoneScalarRelationFilter, ZoneWhereInput>
  }, "id">

  export type LecturerZoneAssignedOrderByWithAggregationInput = {
    id?: SortOrder
    lecturerId?: SortOrder
    zoneId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LecturerZoneAssignedCountOrderByAggregateInput
    _max?: LecturerZoneAssignedMaxOrderByAggregateInput
    _min?: LecturerZoneAssignedMinOrderByAggregateInput
  }

  export type LecturerZoneAssignedScalarWhereWithAggregatesInput = {
    AND?: LecturerZoneAssignedScalarWhereWithAggregatesInput | LecturerZoneAssignedScalarWhereWithAggregatesInput[]
    OR?: LecturerZoneAssignedScalarWhereWithAggregatesInput[]
    NOT?: LecturerZoneAssignedScalarWhereWithAggregatesInput | LecturerZoneAssignedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LecturerZoneAssigned"> | string
    lecturerId?: StringWithAggregatesFilter<"LecturerZoneAssigned"> | string
    zoneId?: StringWithAggregatesFilter<"LecturerZoneAssigned"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LecturerZoneAssigned"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LecturerZoneAssigned"> | Date | string
  }

  export type LecturerZoneRequestWhereInput = {
    AND?: LecturerZoneRequestWhereInput | LecturerZoneRequestWhereInput[]
    OR?: LecturerZoneRequestWhereInput[]
    NOT?: LecturerZoneRequestWhereInput | LecturerZoneRequestWhereInput[]
    id?: StringFilter<"LecturerZoneRequest"> | string
    lecturerId?: StringFilter<"LecturerZoneRequest"> | string
    zoneId?: StringFilter<"LecturerZoneRequest"> | string
    status?: EnumStatusFilter<"LecturerZoneRequest"> | $Enums.Status
    createdAt?: DateTimeFilter<"LecturerZoneRequest"> | Date | string
    updatedAt?: DateTimeFilter<"LecturerZoneRequest"> | Date | string
    lecturer?: XOR<LecturerScalarRelationFilter, LecturerWhereInput>
    zone?: XOR<ZoneScalarRelationFilter, ZoneWhereInput>
  }

  export type LecturerZoneRequestOrderByWithRelationInput = {
    id?: SortOrder
    lecturerId?: SortOrder
    zoneId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lecturer?: LecturerOrderByWithRelationInput
    zone?: ZoneOrderByWithRelationInput
    _relevance?: LecturerZoneRequestOrderByRelevanceInput
  }

  export type LecturerZoneRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LecturerZoneRequestWhereInput | LecturerZoneRequestWhereInput[]
    OR?: LecturerZoneRequestWhereInput[]
    NOT?: LecturerZoneRequestWhereInput | LecturerZoneRequestWhereInput[]
    lecturerId?: StringFilter<"LecturerZoneRequest"> | string
    zoneId?: StringFilter<"LecturerZoneRequest"> | string
    status?: EnumStatusFilter<"LecturerZoneRequest"> | $Enums.Status
    createdAt?: DateTimeFilter<"LecturerZoneRequest"> | Date | string
    updatedAt?: DateTimeFilter<"LecturerZoneRequest"> | Date | string
    lecturer?: XOR<LecturerScalarRelationFilter, LecturerWhereInput>
    zone?: XOR<ZoneScalarRelationFilter, ZoneWhereInput>
  }, "id">

  export type LecturerZoneRequestOrderByWithAggregationInput = {
    id?: SortOrder
    lecturerId?: SortOrder
    zoneId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LecturerZoneRequestCountOrderByAggregateInput
    _max?: LecturerZoneRequestMaxOrderByAggregateInput
    _min?: LecturerZoneRequestMinOrderByAggregateInput
  }

  export type LecturerZoneRequestScalarWhereWithAggregatesInput = {
    AND?: LecturerZoneRequestScalarWhereWithAggregatesInput | LecturerZoneRequestScalarWhereWithAggregatesInput[]
    OR?: LecturerZoneRequestScalarWhereWithAggregatesInput[]
    NOT?: LecturerZoneRequestScalarWhereWithAggregatesInput | LecturerZoneRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LecturerZoneRequest"> | string
    lecturerId?: StringWithAggregatesFilter<"LecturerZoneRequest"> | string
    zoneId?: StringWithAggregatesFilter<"LecturerZoneRequest"> | string
    status?: EnumStatusWithAggregatesFilter<"LecturerZoneRequest"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"LecturerZoneRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LecturerZoneRequest"> | Date | string
  }

  export type SupervisionScheduleWhereInput = {
    AND?: SupervisionScheduleWhereInput | SupervisionScheduleWhereInput[]
    OR?: SupervisionScheduleWhereInput[]
    NOT?: SupervisionScheduleWhereInput | SupervisionScheduleWhereInput[]
    id?: StringFilter<"SupervisionSchedule"> | string
    lecturerId?: StringFilter<"SupervisionSchedule"> | string
    startDate?: DateTimeFilter<"SupervisionSchedule"> | Date | string
    endDate?: DateTimeFilter<"SupervisionSchedule"> | Date | string
    createdAt?: DateTimeFilter<"SupervisionSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"SupervisionSchedule"> | Date | string
    lecturer?: XOR<LecturerScalarRelationFilter, LecturerWhereInput>
  }

  export type SupervisionScheduleOrderByWithRelationInput = {
    id?: SortOrder
    lecturerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lecturer?: LecturerOrderByWithRelationInput
    _relevance?: SupervisionScheduleOrderByRelevanceInput
  }

  export type SupervisionScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SupervisionScheduleWhereInput | SupervisionScheduleWhereInput[]
    OR?: SupervisionScheduleWhereInput[]
    NOT?: SupervisionScheduleWhereInput | SupervisionScheduleWhereInput[]
    lecturerId?: StringFilter<"SupervisionSchedule"> | string
    startDate?: DateTimeFilter<"SupervisionSchedule"> | Date | string
    endDate?: DateTimeFilter<"SupervisionSchedule"> | Date | string
    createdAt?: DateTimeFilter<"SupervisionSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"SupervisionSchedule"> | Date | string
    lecturer?: XOR<LecturerScalarRelationFilter, LecturerWhereInput>
  }, "id">

  export type SupervisionScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    lecturerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SupervisionScheduleCountOrderByAggregateInput
    _max?: SupervisionScheduleMaxOrderByAggregateInput
    _min?: SupervisionScheduleMinOrderByAggregateInput
  }

  export type SupervisionScheduleScalarWhereWithAggregatesInput = {
    AND?: SupervisionScheduleScalarWhereWithAggregatesInput | SupervisionScheduleScalarWhereWithAggregatesInput[]
    OR?: SupervisionScheduleScalarWhereWithAggregatesInput[]
    NOT?: SupervisionScheduleScalarWhereWithAggregatesInput | SupervisionScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SupervisionSchedule"> | string
    lecturerId?: StringWithAggregatesFilter<"SupervisionSchedule"> | string
    startDate?: DateTimeWithAggregatesFilter<"SupervisionSchedule"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"SupervisionSchedule"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"SupervisionSchedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SupervisionSchedule"> | Date | string
  }

  export type LessonPlanWhereInput = {
    AND?: LessonPlanWhereInput | LessonPlanWhereInput[]
    OR?: LessonPlanWhereInput[]
    NOT?: LessonPlanWhereInput | LessonPlanWhereInput[]
    id?: StringFilter<"LessonPlan"> | string
    studentId?: StringFilter<"LessonPlan"> | string
    title?: StringFilter<"LessonPlan"> | string
    description?: StringFilter<"LessonPlan"> | string
    createdAt?: DateTimeFilter<"LessonPlan"> | Date | string
    updatedAt?: DateTimeFilter<"LessonPlan"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type LessonPlanOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    _relevance?: LessonPlanOrderByRelevanceInput
  }

  export type LessonPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LessonPlanWhereInput | LessonPlanWhereInput[]
    OR?: LessonPlanWhereInput[]
    NOT?: LessonPlanWhereInput | LessonPlanWhereInput[]
    studentId?: StringFilter<"LessonPlan"> | string
    title?: StringFilter<"LessonPlan"> | string
    description?: StringFilter<"LessonPlan"> | string
    createdAt?: DateTimeFilter<"LessonPlan"> | Date | string
    updatedAt?: DateTimeFilter<"LessonPlan"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id">

  export type LessonPlanOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LessonPlanCountOrderByAggregateInput
    _max?: LessonPlanMaxOrderByAggregateInput
    _min?: LessonPlanMinOrderByAggregateInput
  }

  export type LessonPlanScalarWhereWithAggregatesInput = {
    AND?: LessonPlanScalarWhereWithAggregatesInput | LessonPlanScalarWhereWithAggregatesInput[]
    OR?: LessonPlanScalarWhereWithAggregatesInput[]
    NOT?: LessonPlanScalarWhereWithAggregatesInput | LessonPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LessonPlan"> | string
    studentId?: StringWithAggregatesFilter<"LessonPlan"> | string
    title?: StringWithAggregatesFilter<"LessonPlan"> | string
    description?: StringWithAggregatesFilter<"LessonPlan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LessonPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LessonPlan"> | Date | string
  }

  export type SupervisionVisitWhereInput = {
    AND?: SupervisionVisitWhereInput | SupervisionVisitWhereInput[]
    OR?: SupervisionVisitWhereInput[]
    NOT?: SupervisionVisitWhereInput | SupervisionVisitWhereInput[]
    id?: StringFilter<"SupervisionVisit"> | string
    studentId?: StringFilter<"SupervisionVisit"> | string
    lecturerId?: StringFilter<"SupervisionVisit"> | string
    date?: DateTimeFilter<"SupervisionVisit"> | Date | string
    notes?: StringNullableFilter<"SupervisionVisit"> | string | null
    createdAt?: DateTimeFilter<"SupervisionVisit"> | Date | string
    updatedAt?: DateTimeFilter<"SupervisionVisit"> | Date | string
    lecturer?: XOR<LecturerScalarRelationFilter, LecturerWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type SupervisionVisitOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    lecturerId?: SortOrder
    date?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lecturer?: LecturerOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
    _relevance?: SupervisionVisitOrderByRelevanceInput
  }

  export type SupervisionVisitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SupervisionVisitWhereInput | SupervisionVisitWhereInput[]
    OR?: SupervisionVisitWhereInput[]
    NOT?: SupervisionVisitWhereInput | SupervisionVisitWhereInput[]
    studentId?: StringFilter<"SupervisionVisit"> | string
    lecturerId?: StringFilter<"SupervisionVisit"> | string
    date?: DateTimeFilter<"SupervisionVisit"> | Date | string
    notes?: StringNullableFilter<"SupervisionVisit"> | string | null
    createdAt?: DateTimeFilter<"SupervisionVisit"> | Date | string
    updatedAt?: DateTimeFilter<"SupervisionVisit"> | Date | string
    lecturer?: XOR<LecturerScalarRelationFilter, LecturerWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id">

  export type SupervisionVisitOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    lecturerId?: SortOrder
    date?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SupervisionVisitCountOrderByAggregateInput
    _max?: SupervisionVisitMaxOrderByAggregateInput
    _min?: SupervisionVisitMinOrderByAggregateInput
  }

  export type SupervisionVisitScalarWhereWithAggregatesInput = {
    AND?: SupervisionVisitScalarWhereWithAggregatesInput | SupervisionVisitScalarWhereWithAggregatesInput[]
    OR?: SupervisionVisitScalarWhereWithAggregatesInput[]
    NOT?: SupervisionVisitScalarWhereWithAggregatesInput | SupervisionVisitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SupervisionVisit"> | string
    studentId?: StringWithAggregatesFilter<"SupervisionVisit"> | string
    lecturerId?: StringWithAggregatesFilter<"SupervisionVisit"> | string
    date?: DateTimeWithAggregatesFilter<"SupervisionVisit"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"SupervisionVisit"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SupervisionVisit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SupervisionVisit"> | Date | string
  }

  export type AlertWhereInput = {
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    id?: StringFilter<"Alert"> | string
    userId?: StringFilter<"Alert"> | string
    message?: StringFilter<"Alert"> | string
    type?: EnumAlertTypeFilter<"Alert"> | $Enums.AlertType
    isRead?: BoolFilter<"Alert"> | boolean
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    updatedAt?: DateTimeFilter<"Alert"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AlertOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: AlertOrderByRelevanceInput
  }

  export type AlertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    userId?: StringFilter<"Alert"> | string
    message?: StringFilter<"Alert"> | string
    type?: EnumAlertTypeFilter<"Alert"> | $Enums.AlertType
    isRead?: BoolFilter<"Alert"> | boolean
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    updatedAt?: DateTimeFilter<"Alert"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AlertOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlertCountOrderByAggregateInput
    _max?: AlertMaxOrderByAggregateInput
    _min?: AlertMinOrderByAggregateInput
  }

  export type AlertScalarWhereWithAggregatesInput = {
    AND?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    OR?: AlertScalarWhereWithAggregatesInput[]
    NOT?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Alert"> | string
    userId?: StringWithAggregatesFilter<"Alert"> | string
    message?: StringWithAggregatesFilter<"Alert"> | string
    type?: EnumAlertTypeWithAggregatesFilter<"Alert"> | $Enums.AlertType
    isRead?: BoolWithAggregatesFilter<"Alert"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: StringFilter<"Report"> | string
    title?: StringFilter<"Report"> | string
    studentId?: StringFilter<"Report"> | string
    lecturerId?: StringFilter<"Report"> | string
    content?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    lecturer?: XOR<LecturerScalarRelationFilter, LecturerWhereInput>
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    studentId?: SortOrder
    lecturerId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    lecturer?: LecturerOrderByWithRelationInput
    _relevance?: ReportOrderByRelevanceInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    title?: StringFilter<"Report"> | string
    studentId?: StringFilter<"Report"> | string
    lecturerId?: StringFilter<"Report"> | string
    content?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    lecturer?: XOR<LecturerScalarRelationFilter, LecturerWhereInput>
  }, "id">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    studentId?: SortOrder
    lecturerId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Report"> | string
    title?: StringWithAggregatesFilter<"Report"> | string
    studentId?: StringWithAggregatesFilter<"Report"> | string
    lecturerId?: StringWithAggregatesFilter<"Report"> | string
    content?: StringWithAggregatesFilter<"Report"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
  }

  export type FinalDocumentWhereInput = {
    AND?: FinalDocumentWhereInput | FinalDocumentWhereInput[]
    OR?: FinalDocumentWhereInput[]
    NOT?: FinalDocumentWhereInput | FinalDocumentWhereInput[]
    id?: StringFilter<"FinalDocument"> | string
    studentId?: StringFilter<"FinalDocument"> | string
    title?: StringFilter<"FinalDocument"> | string
    content?: StringFilter<"FinalDocument"> | string
    fileUrl?: StringNullableFilter<"FinalDocument"> | string | null
    createdAt?: DateTimeFilter<"FinalDocument"> | Date | string
    updatedAt?: DateTimeFilter<"FinalDocument"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type FinalDocumentOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    _relevance?: FinalDocumentOrderByRelevanceInput
  }

  export type FinalDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FinalDocumentWhereInput | FinalDocumentWhereInput[]
    OR?: FinalDocumentWhereInput[]
    NOT?: FinalDocumentWhereInput | FinalDocumentWhereInput[]
    studentId?: StringFilter<"FinalDocument"> | string
    title?: StringFilter<"FinalDocument"> | string
    content?: StringFilter<"FinalDocument"> | string
    fileUrl?: StringNullableFilter<"FinalDocument"> | string | null
    createdAt?: DateTimeFilter<"FinalDocument"> | Date | string
    updatedAt?: DateTimeFilter<"FinalDocument"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id">

  export type FinalDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FinalDocumentCountOrderByAggregateInput
    _max?: FinalDocumentMaxOrderByAggregateInput
    _min?: FinalDocumentMinOrderByAggregateInput
  }

  export type FinalDocumentScalarWhereWithAggregatesInput = {
    AND?: FinalDocumentScalarWhereWithAggregatesInput | FinalDocumentScalarWhereWithAggregatesInput[]
    OR?: FinalDocumentScalarWhereWithAggregatesInput[]
    NOT?: FinalDocumentScalarWhereWithAggregatesInput | FinalDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FinalDocument"> | string
    studentId?: StringWithAggregatesFilter<"FinalDocument"> | string
    title?: StringWithAggregatesFilter<"FinalDocument"> | string
    content?: StringWithAggregatesFilter<"FinalDocument"> | string
    fileUrl?: StringNullableWithAggregatesFilter<"FinalDocument"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FinalDocument"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FinalDocument"> | Date | string
  }

  export type GradeWhereInput = {
    AND?: GradeWhereInput | GradeWhereInput[]
    OR?: GradeWhereInput[]
    NOT?: GradeWhereInput | GradeWhereInput[]
    id?: StringFilter<"Grade"> | string
    studentId?: StringFilter<"Grade"> | string
    lecturerId?: StringFilter<"Grade"> | string
    score?: IntFilter<"Grade"> | number
    feedback?: StringNullableFilter<"Grade"> | string | null
    createdAt?: DateTimeFilter<"Grade"> | Date | string
    updatedAt?: DateTimeFilter<"Grade"> | Date | string
    lecturer?: XOR<LecturerScalarRelationFilter, LecturerWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type GradeOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    lecturerId?: SortOrder
    score?: SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lecturer?: LecturerOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
    _relevance?: GradeOrderByRelevanceInput
  }

  export type GradeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GradeWhereInput | GradeWhereInput[]
    OR?: GradeWhereInput[]
    NOT?: GradeWhereInput | GradeWhereInput[]
    studentId?: StringFilter<"Grade"> | string
    lecturerId?: StringFilter<"Grade"> | string
    score?: IntFilter<"Grade"> | number
    feedback?: StringNullableFilter<"Grade"> | string | null
    createdAt?: DateTimeFilter<"Grade"> | Date | string
    updatedAt?: DateTimeFilter<"Grade"> | Date | string
    lecturer?: XOR<LecturerScalarRelationFilter, LecturerWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id">

  export type GradeOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    lecturerId?: SortOrder
    score?: SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GradeCountOrderByAggregateInput
    _avg?: GradeAvgOrderByAggregateInput
    _max?: GradeMaxOrderByAggregateInput
    _min?: GradeMinOrderByAggregateInput
    _sum?: GradeSumOrderByAggregateInput
  }

  export type GradeScalarWhereWithAggregatesInput = {
    AND?: GradeScalarWhereWithAggregatesInput | GradeScalarWhereWithAggregatesInput[]
    OR?: GradeScalarWhereWithAggregatesInput[]
    NOT?: GradeScalarWhereWithAggregatesInput | GradeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Grade"> | string
    studentId?: StringWithAggregatesFilter<"Grade"> | string
    lecturerId?: StringWithAggregatesFilter<"Grade"> | string
    score?: IntWithAggregatesFilter<"Grade"> | number
    feedback?: StringNullableWithAggregatesFilter<"Grade"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Grade"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Grade"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    fullName: string
    email: string
    role?: $Enums.Role
    password: string
    isActive?: boolean
    isVerified?: boolean
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentCreateNestedManyWithoutUserInput
    lecturer?: LecturerCreateNestedManyWithoutUserInput
    admin?: AdminCreateNestedManyWithoutUserInput
    alert?: AlertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    fullName: string
    email: string
    role?: $Enums.Role
    password: string
    isActive?: boolean
    isVerified?: boolean
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentUncheckedCreateNestedManyWithoutUserInput
    lecturer?: LecturerUncheckedCreateNestedManyWithoutUserInput
    admin?: AdminUncheckedCreateNestedManyWithoutUserInput
    alert?: AlertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateManyWithoutUserNestedInput
    lecturer?: LecturerUpdateManyWithoutUserNestedInput
    admin?: AdminUpdateManyWithoutUserNestedInput
    alert?: AlertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUncheckedUpdateManyWithoutUserNestedInput
    lecturer?: LecturerUncheckedUpdateManyWithoutUserNestedInput
    admin?: AdminUncheckedUpdateManyWithoutUserNestedInput
    alert?: AlertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    fullName: string
    email: string
    role?: $Enums.Role
    password: string
    isActive?: boolean
    isVerified?: boolean
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tpApplication?: TpApplicationCreateNestedManyWithoutStudentInput
    lessonPlan?: LessonPlanCreateNestedManyWithoutStudentInput
    supervisionVisit?: SupervisionVisitCreateNestedManyWithoutStudentInput
    report?: ReportCreateNestedManyWithoutStudentInput
    finalDocument?: FinalDocumentCreateNestedManyWithoutStudentInput
    grade?: GradeCreateNestedManyWithoutStudentInput
    user: UserCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tpApplication?: TpApplicationUncheckedCreateNestedManyWithoutStudentInput
    lessonPlan?: LessonPlanUncheckedCreateNestedManyWithoutStudentInput
    supervisionVisit?: SupervisionVisitUncheckedCreateNestedManyWithoutStudentInput
    report?: ReportUncheckedCreateNestedManyWithoutStudentInput
    finalDocument?: FinalDocumentUncheckedCreateNestedManyWithoutStudentInput
    grade?: GradeUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tpApplication?: TpApplicationUpdateManyWithoutStudentNestedInput
    lessonPlan?: LessonPlanUpdateManyWithoutStudentNestedInput
    supervisionVisit?: SupervisionVisitUpdateManyWithoutStudentNestedInput
    report?: ReportUpdateManyWithoutStudentNestedInput
    finalDocument?: FinalDocumentUpdateManyWithoutStudentNestedInput
    grade?: GradeUpdateManyWithoutStudentNestedInput
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tpApplication?: TpApplicationUncheckedUpdateManyWithoutStudentNestedInput
    lessonPlan?: LessonPlanUncheckedUpdateManyWithoutStudentNestedInput
    supervisionVisit?: SupervisionVisitUncheckedUpdateManyWithoutStudentNestedInput
    report?: ReportUncheckedUpdateManyWithoutStudentNestedInput
    finalDocument?: FinalDocumentUncheckedUpdateManyWithoutStudentNestedInput
    grade?: GradeUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LecturerCreateInput = {
    id?: string
    department: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturerZoneAssigned?: LecturerZoneAssignedCreateNestedManyWithoutLecturerInput
    lecturerZoneRequest?: LecturerZoneRequestCreateNestedManyWithoutLecturerInput
    supervisionSchedule?: SupervisionScheduleCreateNestedManyWithoutLecturerInput
    supervisionVisit?: SupervisionVisitCreateNestedManyWithoutLecturerInput
    report?: ReportCreateNestedManyWithoutLecturerInput
    grade?: GradeCreateNestedManyWithoutLecturerInput
    user: UserCreateNestedOneWithoutLecturerInput
  }

  export type LecturerUncheckedCreateInput = {
    id?: string
    department: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturerZoneAssigned?: LecturerZoneAssignedUncheckedCreateNestedManyWithoutLecturerInput
    lecturerZoneRequest?: LecturerZoneRequestUncheckedCreateNestedManyWithoutLecturerInput
    supervisionSchedule?: SupervisionScheduleUncheckedCreateNestedManyWithoutLecturerInput
    supervisionVisit?: SupervisionVisitUncheckedCreateNestedManyWithoutLecturerInput
    report?: ReportUncheckedCreateNestedManyWithoutLecturerInput
    grade?: GradeUncheckedCreateNestedManyWithoutLecturerInput
  }

  export type LecturerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturerZoneAssigned?: LecturerZoneAssignedUpdateManyWithoutLecturerNestedInput
    lecturerZoneRequest?: LecturerZoneRequestUpdateManyWithoutLecturerNestedInput
    supervisionSchedule?: SupervisionScheduleUpdateManyWithoutLecturerNestedInput
    supervisionVisit?: SupervisionVisitUpdateManyWithoutLecturerNestedInput
    report?: ReportUpdateManyWithoutLecturerNestedInput
    grade?: GradeUpdateManyWithoutLecturerNestedInput
    user?: UserUpdateOneRequiredWithoutLecturerNestedInput
  }

  export type LecturerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturerZoneAssigned?: LecturerZoneAssignedUncheckedUpdateManyWithoutLecturerNestedInput
    lecturerZoneRequest?: LecturerZoneRequestUncheckedUpdateManyWithoutLecturerNestedInput
    supervisionSchedule?: SupervisionScheduleUncheckedUpdateManyWithoutLecturerNestedInput
    supervisionVisit?: SupervisionVisitUncheckedUpdateManyWithoutLecturerNestedInput
    report?: ReportUncheckedUpdateManyWithoutLecturerNestedInput
    grade?: GradeUncheckedUpdateManyWithoutLecturerNestedInput
  }

  export type LecturerCreateManyInput = {
    id?: string
    department: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LecturerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LecturerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZoneCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schools?: SchoolCreateNestedManyWithoutZoneInput
    lecturerZoneRequest?: LecturerZoneRequestCreateNestedManyWithoutZoneInput
    lecturerZoneAssigned?: LecturerZoneAssignedCreateNestedManyWithoutZoneInput
  }

  export type ZoneUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schools?: SchoolUncheckedCreateNestedManyWithoutZoneInput
    lecturerZoneRequest?: LecturerZoneRequestUncheckedCreateNestedManyWithoutZoneInput
    lecturerZoneAssigned?: LecturerZoneAssignedUncheckedCreateNestedManyWithoutZoneInput
  }

  export type ZoneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schools?: SchoolUpdateManyWithoutZoneNestedInput
    lecturerZoneRequest?: LecturerZoneRequestUpdateManyWithoutZoneNestedInput
    lecturerZoneAssigned?: LecturerZoneAssignedUpdateManyWithoutZoneNestedInput
  }

  export type ZoneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schools?: SchoolUncheckedUpdateManyWithoutZoneNestedInput
    lecturerZoneRequest?: LecturerZoneRequestUncheckedUpdateManyWithoutZoneNestedInput
    lecturerZoneAssigned?: LecturerZoneAssignedUncheckedUpdateManyWithoutZoneNestedInput
  }

  export type ZoneCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ZoneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZoneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tpApplication?: TpApplicationCreateNestedManyWithoutSchoolInput
    zone: ZoneCreateNestedOneWithoutSchoolsInput
  }

  export type SchoolUncheckedCreateInput = {
    id?: string
    name: string
    zoneId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tpApplication?: TpApplicationUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tpApplication?: TpApplicationUpdateManyWithoutSchoolNestedInput
    zone?: ZoneUpdateOneRequiredWithoutSchoolsNestedInput
  }

  export type SchoolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tpApplication?: TpApplicationUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateManyInput = {
    id?: string
    name: string
    zoneId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TpApplicationCreateInput = {
    id?: string
    schoolName: string
    position: string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutTpApplicationInput
    school: SchoolCreateNestedOneWithoutTpApplicationInput
  }

  export type TpApplicationUncheckedCreateInput = {
    id?: string
    schoolName: string
    position: string
    startDate: Date | string
    endDate: Date | string
    studentId: string
    schoolId: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TpApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutTpApplicationNestedInput
    school?: SchoolUpdateOneRequiredWithoutTpApplicationNestedInput
  }

  export type TpApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TpApplicationCreateManyInput = {
    id?: string
    schoolName: string
    position: string
    startDate: Date | string
    endDate: Date | string
    studentId: string
    schoolId: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TpApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TpApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LecturerZoneAssignedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturer: LecturerCreateNestedOneWithoutLecturerZoneAssignedInput
    zone: ZoneCreateNestedOneWithoutLecturerZoneAssignedInput
  }

  export type LecturerZoneAssignedUncheckedCreateInput = {
    id?: string
    lecturerId: string
    zoneId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LecturerZoneAssignedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUpdateOneRequiredWithoutLecturerZoneAssignedNestedInput
    zone?: ZoneUpdateOneRequiredWithoutLecturerZoneAssignedNestedInput
  }

  export type LecturerZoneAssignedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LecturerZoneAssignedCreateManyInput = {
    id?: string
    lecturerId: string
    zoneId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LecturerZoneAssignedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LecturerZoneAssignedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LecturerZoneRequestCreateInput = {
    id?: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturer: LecturerCreateNestedOneWithoutLecturerZoneRequestInput
    zone: ZoneCreateNestedOneWithoutLecturerZoneRequestInput
  }

  export type LecturerZoneRequestUncheckedCreateInput = {
    id?: string
    lecturerId: string
    zoneId: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LecturerZoneRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUpdateOneRequiredWithoutLecturerZoneRequestNestedInput
    zone?: ZoneUpdateOneRequiredWithoutLecturerZoneRequestNestedInput
  }

  export type LecturerZoneRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LecturerZoneRequestCreateManyInput = {
    id?: string
    lecturerId: string
    zoneId: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LecturerZoneRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LecturerZoneRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupervisionScheduleCreateInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturer: LecturerCreateNestedOneWithoutSupervisionScheduleInput
  }

  export type SupervisionScheduleUncheckedCreateInput = {
    id?: string
    lecturerId: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupervisionScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUpdateOneRequiredWithoutSupervisionScheduleNestedInput
  }

  export type SupervisionScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupervisionScheduleCreateManyInput = {
    id?: string
    lecturerId: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupervisionScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupervisionScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonPlanCreateInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutLessonPlanInput
  }

  export type LessonPlanUncheckedCreateInput = {
    id?: string
    studentId: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutLessonPlanNestedInput
  }

  export type LessonPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonPlanCreateManyInput = {
    id?: string
    studentId: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupervisionVisitCreateInput = {
    id?: string
    date: Date | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturer: LecturerCreateNestedOneWithoutSupervisionVisitInput
    student: StudentCreateNestedOneWithoutSupervisionVisitInput
  }

  export type SupervisionVisitUncheckedCreateInput = {
    id?: string
    studentId: string
    lecturerId: string
    date: Date | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupervisionVisitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUpdateOneRequiredWithoutSupervisionVisitNestedInput
    student?: StudentUpdateOneRequiredWithoutSupervisionVisitNestedInput
  }

  export type SupervisionVisitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupervisionVisitCreateManyInput = {
    id?: string
    studentId: string
    lecturerId: string
    date: Date | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupervisionVisitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupervisionVisitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertCreateInput = {
    id?: string
    message: string
    type?: $Enums.AlertType
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAlertInput
  }

  export type AlertUncheckedCreateInput = {
    id?: string
    userId: string
    message: string
    type?: $Enums.AlertType
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAlertNestedInput
  }

  export type AlertUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertCreateManyInput = {
    id?: string
    userId: string
    message: string
    type?: $Enums.AlertType
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutReportInput
    lecturer: LecturerCreateNestedOneWithoutReportInput
  }

  export type ReportUncheckedCreateInput = {
    id?: string
    title: string
    studentId: string
    lecturerId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutReportNestedInput
    lecturer?: LecturerUpdateOneRequiredWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyInput = {
    id?: string
    title: string
    studentId: string
    lecturerId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinalDocumentCreateInput = {
    id?: string
    title: string
    content: string
    fileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutFinalDocumentInput
  }

  export type FinalDocumentUncheckedCreateInput = {
    id?: string
    studentId: string
    title: string
    content: string
    fileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinalDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutFinalDocumentNestedInput
  }

  export type FinalDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinalDocumentCreateManyInput = {
    id?: string
    studentId: string
    title: string
    content: string
    fileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinalDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinalDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradeCreateInput = {
    id?: string
    score: number
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturer: LecturerCreateNestedOneWithoutGradeInput
    student: StudentCreateNestedOneWithoutGradeInput
  }

  export type GradeUncheckedCreateInput = {
    id?: string
    studentId: string
    lecturerId: string
    score: number
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GradeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUpdateOneRequiredWithoutGradeNestedInput
    student?: StudentUpdateOneRequiredWithoutGradeNestedInput
  }

  export type GradeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradeCreateManyInput = {
    id?: string
    studentId: string
    lecturerId: string
    score: number
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GradeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type LecturerListRelationFilter = {
    every?: LecturerWhereInput
    some?: LecturerWhereInput
    none?: LecturerWhereInput
  }

  export type AdminListRelationFilter = {
    every?: AdminWhereInput
    some?: AdminWhereInput
    none?: AdminWhereInput
  }

  export type AlertListRelationFilter = {
    every?: AlertWhereInput
    some?: AlertWhereInput
    none?: AlertWhereInput
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LecturerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    isBlocked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    isBlocked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    isBlocked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TpApplicationListRelationFilter = {
    every?: TpApplicationWhereInput
    some?: TpApplicationWhereInput
    none?: TpApplicationWhereInput
  }

  export type LessonPlanListRelationFilter = {
    every?: LessonPlanWhereInput
    some?: LessonPlanWhereInput
    none?: LessonPlanWhereInput
  }

  export type SupervisionVisitListRelationFilter = {
    every?: SupervisionVisitWhereInput
    some?: SupervisionVisitWhereInput
    none?: SupervisionVisitWhereInput
  }

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type FinalDocumentListRelationFilter = {
    every?: FinalDocumentWhereInput
    some?: FinalDocumentWhereInput
    none?: FinalDocumentWhereInput
  }

  export type GradeListRelationFilter = {
    every?: GradeWhereInput
    some?: GradeWhereInput
    none?: GradeWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TpApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LessonPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupervisionVisitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FinalDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GradeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentOrderByRelevanceInput = {
    fields: StudentOrderByRelevanceFieldEnum | StudentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LecturerZoneAssignedListRelationFilter = {
    every?: LecturerZoneAssignedWhereInput
    some?: LecturerZoneAssignedWhereInput
    none?: LecturerZoneAssignedWhereInput
  }

  export type LecturerZoneRequestListRelationFilter = {
    every?: LecturerZoneRequestWhereInput
    some?: LecturerZoneRequestWhereInput
    none?: LecturerZoneRequestWhereInput
  }

  export type SupervisionScheduleListRelationFilter = {
    every?: SupervisionScheduleWhereInput
    some?: SupervisionScheduleWhereInput
    none?: SupervisionScheduleWhereInput
  }

  export type LecturerZoneAssignedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LecturerZoneRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupervisionScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LecturerOrderByRelevanceInput = {
    fields: LecturerOrderByRelevanceFieldEnum | LecturerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LecturerCountOrderByAggregateInput = {
    id?: SortOrder
    department?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LecturerMaxOrderByAggregateInput = {
    id?: SortOrder
    department?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LecturerMinOrderByAggregateInput = {
    id?: SortOrder
    department?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminOrderByRelevanceInput = {
    fields: AdminOrderByRelevanceFieldEnum | AdminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolListRelationFilter = {
    every?: SchoolWhereInput
    some?: SchoolWhereInput
    none?: SchoolWhereInput
  }

  export type SchoolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ZoneOrderByRelevanceInput = {
    fields: ZoneOrderByRelevanceFieldEnum | ZoneOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ZoneCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ZoneMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ZoneMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ZoneScalarRelationFilter = {
    is?: ZoneWhereInput
    isNot?: ZoneWhereInput
  }

  export type SchoolOrderByRelevanceInput = {
    fields: SchoolOrderByRelevanceFieldEnum | SchoolOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SchoolCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    zoneId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    zoneId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    zoneId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type SchoolScalarRelationFilter = {
    is?: SchoolWhereInput
    isNot?: SchoolWhereInput
  }

  export type TpApplicationOrderByRelevanceInput = {
    fields: TpApplicationOrderByRelevanceFieldEnum | TpApplicationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TpApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    schoolName?: SortOrder
    position?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    studentId?: SortOrder
    schoolId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TpApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolName?: SortOrder
    position?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    studentId?: SortOrder
    schoolId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TpApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    schoolName?: SortOrder
    position?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    studentId?: SortOrder
    schoolId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type LecturerScalarRelationFilter = {
    is?: LecturerWhereInput
    isNot?: LecturerWhereInput
  }

  export type LecturerZoneAssignedOrderByRelevanceInput = {
    fields: LecturerZoneAssignedOrderByRelevanceFieldEnum | LecturerZoneAssignedOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LecturerZoneAssignedCountOrderByAggregateInput = {
    id?: SortOrder
    lecturerId?: SortOrder
    zoneId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LecturerZoneAssignedMaxOrderByAggregateInput = {
    id?: SortOrder
    lecturerId?: SortOrder
    zoneId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LecturerZoneAssignedMinOrderByAggregateInput = {
    id?: SortOrder
    lecturerId?: SortOrder
    zoneId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LecturerZoneRequestOrderByRelevanceInput = {
    fields: LecturerZoneRequestOrderByRelevanceFieldEnum | LecturerZoneRequestOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LecturerZoneRequestCountOrderByAggregateInput = {
    id?: SortOrder
    lecturerId?: SortOrder
    zoneId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LecturerZoneRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    lecturerId?: SortOrder
    zoneId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LecturerZoneRequestMinOrderByAggregateInput = {
    id?: SortOrder
    lecturerId?: SortOrder
    zoneId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupervisionScheduleOrderByRelevanceInput = {
    fields: SupervisionScheduleOrderByRelevanceFieldEnum | SupervisionScheduleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SupervisionScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    lecturerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupervisionScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    lecturerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupervisionScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    lecturerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonPlanOrderByRelevanceInput = {
    fields: LessonPlanOrderByRelevanceFieldEnum | LessonPlanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LessonPlanCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonPlanMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SupervisionVisitOrderByRelevanceInput = {
    fields: SupervisionVisitOrderByRelevanceFieldEnum | SupervisionVisitOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SupervisionVisitCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    lecturerId?: SortOrder
    date?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupervisionVisitMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    lecturerId?: SortOrder
    date?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupervisionVisitMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    lecturerId?: SortOrder
    date?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumAlertTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[]
    notIn?: $Enums.AlertType[]
    not?: NestedEnumAlertTypeFilter<$PrismaModel> | $Enums.AlertType
  }

  export type AlertOrderByRelevanceInput = {
    fields: AlertOrderByRelevanceFieldEnum | AlertOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AlertCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAlertTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[]
    notIn?: $Enums.AlertType[]
    not?: NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel> | $Enums.AlertType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertTypeFilter<$PrismaModel>
    _max?: NestedEnumAlertTypeFilter<$PrismaModel>
  }

  export type ReportOrderByRelevanceInput = {
    fields: ReportOrderByRelevanceFieldEnum | ReportOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    studentId?: SortOrder
    lecturerId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    studentId?: SortOrder
    lecturerId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    studentId?: SortOrder
    lecturerId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinalDocumentOrderByRelevanceInput = {
    fields: FinalDocumentOrderByRelevanceFieldEnum | FinalDocumentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FinalDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinalDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinalDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type GradeOrderByRelevanceInput = {
    fields: GradeOrderByRelevanceFieldEnum | GradeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GradeCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    lecturerId?: SortOrder
    score?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GradeAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type GradeMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    lecturerId?: SortOrder
    score?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GradeMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    lecturerId?: SortOrder
    score?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GradeSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StudentCreateNestedManyWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput> | StudentCreateWithoutUserInput[] | StudentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput | StudentCreateOrConnectWithoutUserInput[]
    createMany?: StudentCreateManyUserInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type LecturerCreateNestedManyWithoutUserInput = {
    create?: XOR<LecturerCreateWithoutUserInput, LecturerUncheckedCreateWithoutUserInput> | LecturerCreateWithoutUserInput[] | LecturerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LecturerCreateOrConnectWithoutUserInput | LecturerCreateOrConnectWithoutUserInput[]
    createMany?: LecturerCreateManyUserInputEnvelope
    connect?: LecturerWhereUniqueInput | LecturerWhereUniqueInput[]
  }

  export type AdminCreateNestedManyWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput> | AdminCreateWithoutUserInput[] | AdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput | AdminCreateOrConnectWithoutUserInput[]
    createMany?: AdminCreateManyUserInputEnvelope
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
  }

  export type AlertCreateNestedManyWithoutUserInput = {
    create?: XOR<AlertCreateWithoutUserInput, AlertUncheckedCreateWithoutUserInput> | AlertCreateWithoutUserInput[] | AlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutUserInput | AlertCreateOrConnectWithoutUserInput[]
    createMany?: AlertCreateManyUserInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput> | StudentCreateWithoutUserInput[] | StudentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput | StudentCreateOrConnectWithoutUserInput[]
    createMany?: StudentCreateManyUserInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type LecturerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LecturerCreateWithoutUserInput, LecturerUncheckedCreateWithoutUserInput> | LecturerCreateWithoutUserInput[] | LecturerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LecturerCreateOrConnectWithoutUserInput | LecturerCreateOrConnectWithoutUserInput[]
    createMany?: LecturerCreateManyUserInputEnvelope
    connect?: LecturerWhereUniqueInput | LecturerWhereUniqueInput[]
  }

  export type AdminUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput> | AdminCreateWithoutUserInput[] | AdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput | AdminCreateOrConnectWithoutUserInput[]
    createMany?: AdminCreateManyUserInputEnvelope
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
  }

  export type AlertUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AlertCreateWithoutUserInput, AlertUncheckedCreateWithoutUserInput> | AlertCreateWithoutUserInput[] | AlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutUserInput | AlertCreateOrConnectWithoutUserInput[]
    createMany?: AlertCreateManyUserInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StudentUpdateManyWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput> | StudentCreateWithoutUserInput[] | StudentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput | StudentCreateOrConnectWithoutUserInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutUserInput | StudentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StudentCreateManyUserInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutUserInput | StudentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutUserInput | StudentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type LecturerUpdateManyWithoutUserNestedInput = {
    create?: XOR<LecturerCreateWithoutUserInput, LecturerUncheckedCreateWithoutUserInput> | LecturerCreateWithoutUserInput[] | LecturerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LecturerCreateOrConnectWithoutUserInput | LecturerCreateOrConnectWithoutUserInput[]
    upsert?: LecturerUpsertWithWhereUniqueWithoutUserInput | LecturerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LecturerCreateManyUserInputEnvelope
    set?: LecturerWhereUniqueInput | LecturerWhereUniqueInput[]
    disconnect?: LecturerWhereUniqueInput | LecturerWhereUniqueInput[]
    delete?: LecturerWhereUniqueInput | LecturerWhereUniqueInput[]
    connect?: LecturerWhereUniqueInput | LecturerWhereUniqueInput[]
    update?: LecturerUpdateWithWhereUniqueWithoutUserInput | LecturerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LecturerUpdateManyWithWhereWithoutUserInput | LecturerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LecturerScalarWhereInput | LecturerScalarWhereInput[]
  }

  export type AdminUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput> | AdminCreateWithoutUserInput[] | AdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput | AdminCreateOrConnectWithoutUserInput[]
    upsert?: AdminUpsertWithWhereUniqueWithoutUserInput | AdminUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdminCreateManyUserInputEnvelope
    set?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    disconnect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    delete?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    update?: AdminUpdateWithWhereUniqueWithoutUserInput | AdminUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdminUpdateManyWithWhereWithoutUserInput | AdminUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdminScalarWhereInput | AdminScalarWhereInput[]
  }

  export type AlertUpdateManyWithoutUserNestedInput = {
    create?: XOR<AlertCreateWithoutUserInput, AlertUncheckedCreateWithoutUserInput> | AlertCreateWithoutUserInput[] | AlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutUserInput | AlertCreateOrConnectWithoutUserInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutUserInput | AlertUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AlertCreateManyUserInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutUserInput | AlertUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutUserInput | AlertUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput> | StudentCreateWithoutUserInput[] | StudentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput | StudentCreateOrConnectWithoutUserInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutUserInput | StudentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StudentCreateManyUserInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutUserInput | StudentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutUserInput | StudentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type LecturerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LecturerCreateWithoutUserInput, LecturerUncheckedCreateWithoutUserInput> | LecturerCreateWithoutUserInput[] | LecturerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LecturerCreateOrConnectWithoutUserInput | LecturerCreateOrConnectWithoutUserInput[]
    upsert?: LecturerUpsertWithWhereUniqueWithoutUserInput | LecturerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LecturerCreateManyUserInputEnvelope
    set?: LecturerWhereUniqueInput | LecturerWhereUniqueInput[]
    disconnect?: LecturerWhereUniqueInput | LecturerWhereUniqueInput[]
    delete?: LecturerWhereUniqueInput | LecturerWhereUniqueInput[]
    connect?: LecturerWhereUniqueInput | LecturerWhereUniqueInput[]
    update?: LecturerUpdateWithWhereUniqueWithoutUserInput | LecturerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LecturerUpdateManyWithWhereWithoutUserInput | LecturerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LecturerScalarWhereInput | LecturerScalarWhereInput[]
  }

  export type AdminUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput> | AdminCreateWithoutUserInput[] | AdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput | AdminCreateOrConnectWithoutUserInput[]
    upsert?: AdminUpsertWithWhereUniqueWithoutUserInput | AdminUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdminCreateManyUserInputEnvelope
    set?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    disconnect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    delete?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    update?: AdminUpdateWithWhereUniqueWithoutUserInput | AdminUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdminUpdateManyWithWhereWithoutUserInput | AdminUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdminScalarWhereInput | AdminScalarWhereInput[]
  }

  export type AlertUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AlertCreateWithoutUserInput, AlertUncheckedCreateWithoutUserInput> | AlertCreateWithoutUserInput[] | AlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutUserInput | AlertCreateOrConnectWithoutUserInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutUserInput | AlertUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AlertCreateManyUserInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutUserInput | AlertUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutUserInput | AlertUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type TpApplicationCreateNestedManyWithoutStudentInput = {
    create?: XOR<TpApplicationCreateWithoutStudentInput, TpApplicationUncheckedCreateWithoutStudentInput> | TpApplicationCreateWithoutStudentInput[] | TpApplicationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TpApplicationCreateOrConnectWithoutStudentInput | TpApplicationCreateOrConnectWithoutStudentInput[]
    createMany?: TpApplicationCreateManyStudentInputEnvelope
    connect?: TpApplicationWhereUniqueInput | TpApplicationWhereUniqueInput[]
  }

  export type LessonPlanCreateNestedManyWithoutStudentInput = {
    create?: XOR<LessonPlanCreateWithoutStudentInput, LessonPlanUncheckedCreateWithoutStudentInput> | LessonPlanCreateWithoutStudentInput[] | LessonPlanUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: LessonPlanCreateOrConnectWithoutStudentInput | LessonPlanCreateOrConnectWithoutStudentInput[]
    createMany?: LessonPlanCreateManyStudentInputEnvelope
    connect?: LessonPlanWhereUniqueInput | LessonPlanWhereUniqueInput[]
  }

  export type SupervisionVisitCreateNestedManyWithoutStudentInput = {
    create?: XOR<SupervisionVisitCreateWithoutStudentInput, SupervisionVisitUncheckedCreateWithoutStudentInput> | SupervisionVisitCreateWithoutStudentInput[] | SupervisionVisitUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SupervisionVisitCreateOrConnectWithoutStudentInput | SupervisionVisitCreateOrConnectWithoutStudentInput[]
    createMany?: SupervisionVisitCreateManyStudentInputEnvelope
    connect?: SupervisionVisitWhereUniqueInput | SupervisionVisitWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutStudentInput = {
    create?: XOR<ReportCreateWithoutStudentInput, ReportUncheckedCreateWithoutStudentInput> | ReportCreateWithoutStudentInput[] | ReportUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutStudentInput | ReportCreateOrConnectWithoutStudentInput[]
    createMany?: ReportCreateManyStudentInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type FinalDocumentCreateNestedManyWithoutStudentInput = {
    create?: XOR<FinalDocumentCreateWithoutStudentInput, FinalDocumentUncheckedCreateWithoutStudentInput> | FinalDocumentCreateWithoutStudentInput[] | FinalDocumentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FinalDocumentCreateOrConnectWithoutStudentInput | FinalDocumentCreateOrConnectWithoutStudentInput[]
    createMany?: FinalDocumentCreateManyStudentInputEnvelope
    connect?: FinalDocumentWhereUniqueInput | FinalDocumentWhereUniqueInput[]
  }

  export type GradeCreateNestedManyWithoutStudentInput = {
    create?: XOR<GradeCreateWithoutStudentInput, GradeUncheckedCreateWithoutStudentInput> | GradeCreateWithoutStudentInput[] | GradeUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutStudentInput | GradeCreateOrConnectWithoutStudentInput[]
    createMany?: GradeCreateManyStudentInputEnvelope
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutStudentInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    connect?: UserWhereUniqueInput
  }

  export type TpApplicationUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<TpApplicationCreateWithoutStudentInput, TpApplicationUncheckedCreateWithoutStudentInput> | TpApplicationCreateWithoutStudentInput[] | TpApplicationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TpApplicationCreateOrConnectWithoutStudentInput | TpApplicationCreateOrConnectWithoutStudentInput[]
    createMany?: TpApplicationCreateManyStudentInputEnvelope
    connect?: TpApplicationWhereUniqueInput | TpApplicationWhereUniqueInput[]
  }

  export type LessonPlanUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<LessonPlanCreateWithoutStudentInput, LessonPlanUncheckedCreateWithoutStudentInput> | LessonPlanCreateWithoutStudentInput[] | LessonPlanUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: LessonPlanCreateOrConnectWithoutStudentInput | LessonPlanCreateOrConnectWithoutStudentInput[]
    createMany?: LessonPlanCreateManyStudentInputEnvelope
    connect?: LessonPlanWhereUniqueInput | LessonPlanWhereUniqueInput[]
  }

  export type SupervisionVisitUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<SupervisionVisitCreateWithoutStudentInput, SupervisionVisitUncheckedCreateWithoutStudentInput> | SupervisionVisitCreateWithoutStudentInput[] | SupervisionVisitUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SupervisionVisitCreateOrConnectWithoutStudentInput | SupervisionVisitCreateOrConnectWithoutStudentInput[]
    createMany?: SupervisionVisitCreateManyStudentInputEnvelope
    connect?: SupervisionVisitWhereUniqueInput | SupervisionVisitWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ReportCreateWithoutStudentInput, ReportUncheckedCreateWithoutStudentInput> | ReportCreateWithoutStudentInput[] | ReportUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutStudentInput | ReportCreateOrConnectWithoutStudentInput[]
    createMany?: ReportCreateManyStudentInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type FinalDocumentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<FinalDocumentCreateWithoutStudentInput, FinalDocumentUncheckedCreateWithoutStudentInput> | FinalDocumentCreateWithoutStudentInput[] | FinalDocumentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FinalDocumentCreateOrConnectWithoutStudentInput | FinalDocumentCreateOrConnectWithoutStudentInput[]
    createMany?: FinalDocumentCreateManyStudentInputEnvelope
    connect?: FinalDocumentWhereUniqueInput | FinalDocumentWhereUniqueInput[]
  }

  export type GradeUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<GradeCreateWithoutStudentInput, GradeUncheckedCreateWithoutStudentInput> | GradeCreateWithoutStudentInput[] | GradeUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutStudentInput | GradeCreateOrConnectWithoutStudentInput[]
    createMany?: GradeCreateManyStudentInputEnvelope
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
  }

  export type TpApplicationUpdateManyWithoutStudentNestedInput = {
    create?: XOR<TpApplicationCreateWithoutStudentInput, TpApplicationUncheckedCreateWithoutStudentInput> | TpApplicationCreateWithoutStudentInput[] | TpApplicationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TpApplicationCreateOrConnectWithoutStudentInput | TpApplicationCreateOrConnectWithoutStudentInput[]
    upsert?: TpApplicationUpsertWithWhereUniqueWithoutStudentInput | TpApplicationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: TpApplicationCreateManyStudentInputEnvelope
    set?: TpApplicationWhereUniqueInput | TpApplicationWhereUniqueInput[]
    disconnect?: TpApplicationWhereUniqueInput | TpApplicationWhereUniqueInput[]
    delete?: TpApplicationWhereUniqueInput | TpApplicationWhereUniqueInput[]
    connect?: TpApplicationWhereUniqueInput | TpApplicationWhereUniqueInput[]
    update?: TpApplicationUpdateWithWhereUniqueWithoutStudentInput | TpApplicationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: TpApplicationUpdateManyWithWhereWithoutStudentInput | TpApplicationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: TpApplicationScalarWhereInput | TpApplicationScalarWhereInput[]
  }

  export type LessonPlanUpdateManyWithoutStudentNestedInput = {
    create?: XOR<LessonPlanCreateWithoutStudentInput, LessonPlanUncheckedCreateWithoutStudentInput> | LessonPlanCreateWithoutStudentInput[] | LessonPlanUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: LessonPlanCreateOrConnectWithoutStudentInput | LessonPlanCreateOrConnectWithoutStudentInput[]
    upsert?: LessonPlanUpsertWithWhereUniqueWithoutStudentInput | LessonPlanUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: LessonPlanCreateManyStudentInputEnvelope
    set?: LessonPlanWhereUniqueInput | LessonPlanWhereUniqueInput[]
    disconnect?: LessonPlanWhereUniqueInput | LessonPlanWhereUniqueInput[]
    delete?: LessonPlanWhereUniqueInput | LessonPlanWhereUniqueInput[]
    connect?: LessonPlanWhereUniqueInput | LessonPlanWhereUniqueInput[]
    update?: LessonPlanUpdateWithWhereUniqueWithoutStudentInput | LessonPlanUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: LessonPlanUpdateManyWithWhereWithoutStudentInput | LessonPlanUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: LessonPlanScalarWhereInput | LessonPlanScalarWhereInput[]
  }

  export type SupervisionVisitUpdateManyWithoutStudentNestedInput = {
    create?: XOR<SupervisionVisitCreateWithoutStudentInput, SupervisionVisitUncheckedCreateWithoutStudentInput> | SupervisionVisitCreateWithoutStudentInput[] | SupervisionVisitUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SupervisionVisitCreateOrConnectWithoutStudentInput | SupervisionVisitCreateOrConnectWithoutStudentInput[]
    upsert?: SupervisionVisitUpsertWithWhereUniqueWithoutStudentInput | SupervisionVisitUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: SupervisionVisitCreateManyStudentInputEnvelope
    set?: SupervisionVisitWhereUniqueInput | SupervisionVisitWhereUniqueInput[]
    disconnect?: SupervisionVisitWhereUniqueInput | SupervisionVisitWhereUniqueInput[]
    delete?: SupervisionVisitWhereUniqueInput | SupervisionVisitWhereUniqueInput[]
    connect?: SupervisionVisitWhereUniqueInput | SupervisionVisitWhereUniqueInput[]
    update?: SupervisionVisitUpdateWithWhereUniqueWithoutStudentInput | SupervisionVisitUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: SupervisionVisitUpdateManyWithWhereWithoutStudentInput | SupervisionVisitUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: SupervisionVisitScalarWhereInput | SupervisionVisitScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ReportCreateWithoutStudentInput, ReportUncheckedCreateWithoutStudentInput> | ReportCreateWithoutStudentInput[] | ReportUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutStudentInput | ReportCreateOrConnectWithoutStudentInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutStudentInput | ReportUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ReportCreateManyStudentInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutStudentInput | ReportUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutStudentInput | ReportUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type FinalDocumentUpdateManyWithoutStudentNestedInput = {
    create?: XOR<FinalDocumentCreateWithoutStudentInput, FinalDocumentUncheckedCreateWithoutStudentInput> | FinalDocumentCreateWithoutStudentInput[] | FinalDocumentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FinalDocumentCreateOrConnectWithoutStudentInput | FinalDocumentCreateOrConnectWithoutStudentInput[]
    upsert?: FinalDocumentUpsertWithWhereUniqueWithoutStudentInput | FinalDocumentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: FinalDocumentCreateManyStudentInputEnvelope
    set?: FinalDocumentWhereUniqueInput | FinalDocumentWhereUniqueInput[]
    disconnect?: FinalDocumentWhereUniqueInput | FinalDocumentWhereUniqueInput[]
    delete?: FinalDocumentWhereUniqueInput | FinalDocumentWhereUniqueInput[]
    connect?: FinalDocumentWhereUniqueInput | FinalDocumentWhereUniqueInput[]
    update?: FinalDocumentUpdateWithWhereUniqueWithoutStudentInput | FinalDocumentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: FinalDocumentUpdateManyWithWhereWithoutStudentInput | FinalDocumentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: FinalDocumentScalarWhereInput | FinalDocumentScalarWhereInput[]
  }

  export type GradeUpdateManyWithoutStudentNestedInput = {
    create?: XOR<GradeCreateWithoutStudentInput, GradeUncheckedCreateWithoutStudentInput> | GradeCreateWithoutStudentInput[] | GradeUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutStudentInput | GradeCreateOrConnectWithoutStudentInput[]
    upsert?: GradeUpsertWithWhereUniqueWithoutStudentInput | GradeUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: GradeCreateManyStudentInputEnvelope
    set?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    disconnect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    delete?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    update?: GradeUpdateWithWhereUniqueWithoutStudentInput | GradeUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: GradeUpdateManyWithWhereWithoutStudentInput | GradeUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: GradeScalarWhereInput | GradeScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    upsert?: UserUpsertWithoutStudentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentInput, UserUpdateWithoutStudentInput>, UserUncheckedUpdateWithoutStudentInput>
  }

  export type TpApplicationUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<TpApplicationCreateWithoutStudentInput, TpApplicationUncheckedCreateWithoutStudentInput> | TpApplicationCreateWithoutStudentInput[] | TpApplicationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TpApplicationCreateOrConnectWithoutStudentInput | TpApplicationCreateOrConnectWithoutStudentInput[]
    upsert?: TpApplicationUpsertWithWhereUniqueWithoutStudentInput | TpApplicationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: TpApplicationCreateManyStudentInputEnvelope
    set?: TpApplicationWhereUniqueInput | TpApplicationWhereUniqueInput[]
    disconnect?: TpApplicationWhereUniqueInput | TpApplicationWhereUniqueInput[]
    delete?: TpApplicationWhereUniqueInput | TpApplicationWhereUniqueInput[]
    connect?: TpApplicationWhereUniqueInput | TpApplicationWhereUniqueInput[]
    update?: TpApplicationUpdateWithWhereUniqueWithoutStudentInput | TpApplicationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: TpApplicationUpdateManyWithWhereWithoutStudentInput | TpApplicationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: TpApplicationScalarWhereInput | TpApplicationScalarWhereInput[]
  }

  export type LessonPlanUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<LessonPlanCreateWithoutStudentInput, LessonPlanUncheckedCreateWithoutStudentInput> | LessonPlanCreateWithoutStudentInput[] | LessonPlanUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: LessonPlanCreateOrConnectWithoutStudentInput | LessonPlanCreateOrConnectWithoutStudentInput[]
    upsert?: LessonPlanUpsertWithWhereUniqueWithoutStudentInput | LessonPlanUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: LessonPlanCreateManyStudentInputEnvelope
    set?: LessonPlanWhereUniqueInput | LessonPlanWhereUniqueInput[]
    disconnect?: LessonPlanWhereUniqueInput | LessonPlanWhereUniqueInput[]
    delete?: LessonPlanWhereUniqueInput | LessonPlanWhereUniqueInput[]
    connect?: LessonPlanWhereUniqueInput | LessonPlanWhereUniqueInput[]
    update?: LessonPlanUpdateWithWhereUniqueWithoutStudentInput | LessonPlanUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: LessonPlanUpdateManyWithWhereWithoutStudentInput | LessonPlanUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: LessonPlanScalarWhereInput | LessonPlanScalarWhereInput[]
  }

  export type SupervisionVisitUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<SupervisionVisitCreateWithoutStudentInput, SupervisionVisitUncheckedCreateWithoutStudentInput> | SupervisionVisitCreateWithoutStudentInput[] | SupervisionVisitUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SupervisionVisitCreateOrConnectWithoutStudentInput | SupervisionVisitCreateOrConnectWithoutStudentInput[]
    upsert?: SupervisionVisitUpsertWithWhereUniqueWithoutStudentInput | SupervisionVisitUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: SupervisionVisitCreateManyStudentInputEnvelope
    set?: SupervisionVisitWhereUniqueInput | SupervisionVisitWhereUniqueInput[]
    disconnect?: SupervisionVisitWhereUniqueInput | SupervisionVisitWhereUniqueInput[]
    delete?: SupervisionVisitWhereUniqueInput | SupervisionVisitWhereUniqueInput[]
    connect?: SupervisionVisitWhereUniqueInput | SupervisionVisitWhereUniqueInput[]
    update?: SupervisionVisitUpdateWithWhereUniqueWithoutStudentInput | SupervisionVisitUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: SupervisionVisitUpdateManyWithWhereWithoutStudentInput | SupervisionVisitUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: SupervisionVisitScalarWhereInput | SupervisionVisitScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ReportCreateWithoutStudentInput, ReportUncheckedCreateWithoutStudentInput> | ReportCreateWithoutStudentInput[] | ReportUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutStudentInput | ReportCreateOrConnectWithoutStudentInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutStudentInput | ReportUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ReportCreateManyStudentInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutStudentInput | ReportUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutStudentInput | ReportUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type FinalDocumentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<FinalDocumentCreateWithoutStudentInput, FinalDocumentUncheckedCreateWithoutStudentInput> | FinalDocumentCreateWithoutStudentInput[] | FinalDocumentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FinalDocumentCreateOrConnectWithoutStudentInput | FinalDocumentCreateOrConnectWithoutStudentInput[]
    upsert?: FinalDocumentUpsertWithWhereUniqueWithoutStudentInput | FinalDocumentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: FinalDocumentCreateManyStudentInputEnvelope
    set?: FinalDocumentWhereUniqueInput | FinalDocumentWhereUniqueInput[]
    disconnect?: FinalDocumentWhereUniqueInput | FinalDocumentWhereUniqueInput[]
    delete?: FinalDocumentWhereUniqueInput | FinalDocumentWhereUniqueInput[]
    connect?: FinalDocumentWhereUniqueInput | FinalDocumentWhereUniqueInput[]
    update?: FinalDocumentUpdateWithWhereUniqueWithoutStudentInput | FinalDocumentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: FinalDocumentUpdateManyWithWhereWithoutStudentInput | FinalDocumentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: FinalDocumentScalarWhereInput | FinalDocumentScalarWhereInput[]
  }

  export type GradeUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<GradeCreateWithoutStudentInput, GradeUncheckedCreateWithoutStudentInput> | GradeCreateWithoutStudentInput[] | GradeUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutStudentInput | GradeCreateOrConnectWithoutStudentInput[]
    upsert?: GradeUpsertWithWhereUniqueWithoutStudentInput | GradeUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: GradeCreateManyStudentInputEnvelope
    set?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    disconnect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    delete?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    update?: GradeUpdateWithWhereUniqueWithoutStudentInput | GradeUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: GradeUpdateManyWithWhereWithoutStudentInput | GradeUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: GradeScalarWhereInput | GradeScalarWhereInput[]
  }

  export type LecturerZoneAssignedCreateNestedManyWithoutLecturerInput = {
    create?: XOR<LecturerZoneAssignedCreateWithoutLecturerInput, LecturerZoneAssignedUncheckedCreateWithoutLecturerInput> | LecturerZoneAssignedCreateWithoutLecturerInput[] | LecturerZoneAssignedUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: LecturerZoneAssignedCreateOrConnectWithoutLecturerInput | LecturerZoneAssignedCreateOrConnectWithoutLecturerInput[]
    createMany?: LecturerZoneAssignedCreateManyLecturerInputEnvelope
    connect?: LecturerZoneAssignedWhereUniqueInput | LecturerZoneAssignedWhereUniqueInput[]
  }

  export type LecturerZoneRequestCreateNestedManyWithoutLecturerInput = {
    create?: XOR<LecturerZoneRequestCreateWithoutLecturerInput, LecturerZoneRequestUncheckedCreateWithoutLecturerInput> | LecturerZoneRequestCreateWithoutLecturerInput[] | LecturerZoneRequestUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: LecturerZoneRequestCreateOrConnectWithoutLecturerInput | LecturerZoneRequestCreateOrConnectWithoutLecturerInput[]
    createMany?: LecturerZoneRequestCreateManyLecturerInputEnvelope
    connect?: LecturerZoneRequestWhereUniqueInput | LecturerZoneRequestWhereUniqueInput[]
  }

  export type SupervisionScheduleCreateNestedManyWithoutLecturerInput = {
    create?: XOR<SupervisionScheduleCreateWithoutLecturerInput, SupervisionScheduleUncheckedCreateWithoutLecturerInput> | SupervisionScheduleCreateWithoutLecturerInput[] | SupervisionScheduleUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: SupervisionScheduleCreateOrConnectWithoutLecturerInput | SupervisionScheduleCreateOrConnectWithoutLecturerInput[]
    createMany?: SupervisionScheduleCreateManyLecturerInputEnvelope
    connect?: SupervisionScheduleWhereUniqueInput | SupervisionScheduleWhereUniqueInput[]
  }

  export type SupervisionVisitCreateNestedManyWithoutLecturerInput = {
    create?: XOR<SupervisionVisitCreateWithoutLecturerInput, SupervisionVisitUncheckedCreateWithoutLecturerInput> | SupervisionVisitCreateWithoutLecturerInput[] | SupervisionVisitUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: SupervisionVisitCreateOrConnectWithoutLecturerInput | SupervisionVisitCreateOrConnectWithoutLecturerInput[]
    createMany?: SupervisionVisitCreateManyLecturerInputEnvelope
    connect?: SupervisionVisitWhereUniqueInput | SupervisionVisitWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutLecturerInput = {
    create?: XOR<ReportCreateWithoutLecturerInput, ReportUncheckedCreateWithoutLecturerInput> | ReportCreateWithoutLecturerInput[] | ReportUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutLecturerInput | ReportCreateOrConnectWithoutLecturerInput[]
    createMany?: ReportCreateManyLecturerInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type GradeCreateNestedManyWithoutLecturerInput = {
    create?: XOR<GradeCreateWithoutLecturerInput, GradeUncheckedCreateWithoutLecturerInput> | GradeCreateWithoutLecturerInput[] | GradeUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutLecturerInput | GradeCreateOrConnectWithoutLecturerInput[]
    createMany?: GradeCreateManyLecturerInputEnvelope
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutLecturerInput = {
    create?: XOR<UserCreateWithoutLecturerInput, UserUncheckedCreateWithoutLecturerInput>
    connectOrCreate?: UserCreateOrConnectWithoutLecturerInput
    connect?: UserWhereUniqueInput
  }

  export type LecturerZoneAssignedUncheckedCreateNestedManyWithoutLecturerInput = {
    create?: XOR<LecturerZoneAssignedCreateWithoutLecturerInput, LecturerZoneAssignedUncheckedCreateWithoutLecturerInput> | LecturerZoneAssignedCreateWithoutLecturerInput[] | LecturerZoneAssignedUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: LecturerZoneAssignedCreateOrConnectWithoutLecturerInput | LecturerZoneAssignedCreateOrConnectWithoutLecturerInput[]
    createMany?: LecturerZoneAssignedCreateManyLecturerInputEnvelope
    connect?: LecturerZoneAssignedWhereUniqueInput | LecturerZoneAssignedWhereUniqueInput[]
  }

  export type LecturerZoneRequestUncheckedCreateNestedManyWithoutLecturerInput = {
    create?: XOR<LecturerZoneRequestCreateWithoutLecturerInput, LecturerZoneRequestUncheckedCreateWithoutLecturerInput> | LecturerZoneRequestCreateWithoutLecturerInput[] | LecturerZoneRequestUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: LecturerZoneRequestCreateOrConnectWithoutLecturerInput | LecturerZoneRequestCreateOrConnectWithoutLecturerInput[]
    createMany?: LecturerZoneRequestCreateManyLecturerInputEnvelope
    connect?: LecturerZoneRequestWhereUniqueInput | LecturerZoneRequestWhereUniqueInput[]
  }

  export type SupervisionScheduleUncheckedCreateNestedManyWithoutLecturerInput = {
    create?: XOR<SupervisionScheduleCreateWithoutLecturerInput, SupervisionScheduleUncheckedCreateWithoutLecturerInput> | SupervisionScheduleCreateWithoutLecturerInput[] | SupervisionScheduleUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: SupervisionScheduleCreateOrConnectWithoutLecturerInput | SupervisionScheduleCreateOrConnectWithoutLecturerInput[]
    createMany?: SupervisionScheduleCreateManyLecturerInputEnvelope
    connect?: SupervisionScheduleWhereUniqueInput | SupervisionScheduleWhereUniqueInput[]
  }

  export type SupervisionVisitUncheckedCreateNestedManyWithoutLecturerInput = {
    create?: XOR<SupervisionVisitCreateWithoutLecturerInput, SupervisionVisitUncheckedCreateWithoutLecturerInput> | SupervisionVisitCreateWithoutLecturerInput[] | SupervisionVisitUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: SupervisionVisitCreateOrConnectWithoutLecturerInput | SupervisionVisitCreateOrConnectWithoutLecturerInput[]
    createMany?: SupervisionVisitCreateManyLecturerInputEnvelope
    connect?: SupervisionVisitWhereUniqueInput | SupervisionVisitWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutLecturerInput = {
    create?: XOR<ReportCreateWithoutLecturerInput, ReportUncheckedCreateWithoutLecturerInput> | ReportCreateWithoutLecturerInput[] | ReportUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutLecturerInput | ReportCreateOrConnectWithoutLecturerInput[]
    createMany?: ReportCreateManyLecturerInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type GradeUncheckedCreateNestedManyWithoutLecturerInput = {
    create?: XOR<GradeCreateWithoutLecturerInput, GradeUncheckedCreateWithoutLecturerInput> | GradeCreateWithoutLecturerInput[] | GradeUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutLecturerInput | GradeCreateOrConnectWithoutLecturerInput[]
    createMany?: GradeCreateManyLecturerInputEnvelope
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
  }

  export type LecturerZoneAssignedUpdateManyWithoutLecturerNestedInput = {
    create?: XOR<LecturerZoneAssignedCreateWithoutLecturerInput, LecturerZoneAssignedUncheckedCreateWithoutLecturerInput> | LecturerZoneAssignedCreateWithoutLecturerInput[] | LecturerZoneAssignedUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: LecturerZoneAssignedCreateOrConnectWithoutLecturerInput | LecturerZoneAssignedCreateOrConnectWithoutLecturerInput[]
    upsert?: LecturerZoneAssignedUpsertWithWhereUniqueWithoutLecturerInput | LecturerZoneAssignedUpsertWithWhereUniqueWithoutLecturerInput[]
    createMany?: LecturerZoneAssignedCreateManyLecturerInputEnvelope
    set?: LecturerZoneAssignedWhereUniqueInput | LecturerZoneAssignedWhereUniqueInput[]
    disconnect?: LecturerZoneAssignedWhereUniqueInput | LecturerZoneAssignedWhereUniqueInput[]
    delete?: LecturerZoneAssignedWhereUniqueInput | LecturerZoneAssignedWhereUniqueInput[]
    connect?: LecturerZoneAssignedWhereUniqueInput | LecturerZoneAssignedWhereUniqueInput[]
    update?: LecturerZoneAssignedUpdateWithWhereUniqueWithoutLecturerInput | LecturerZoneAssignedUpdateWithWhereUniqueWithoutLecturerInput[]
    updateMany?: LecturerZoneAssignedUpdateManyWithWhereWithoutLecturerInput | LecturerZoneAssignedUpdateManyWithWhereWithoutLecturerInput[]
    deleteMany?: LecturerZoneAssignedScalarWhereInput | LecturerZoneAssignedScalarWhereInput[]
  }

  export type LecturerZoneRequestUpdateManyWithoutLecturerNestedInput = {
    create?: XOR<LecturerZoneRequestCreateWithoutLecturerInput, LecturerZoneRequestUncheckedCreateWithoutLecturerInput> | LecturerZoneRequestCreateWithoutLecturerInput[] | LecturerZoneRequestUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: LecturerZoneRequestCreateOrConnectWithoutLecturerInput | LecturerZoneRequestCreateOrConnectWithoutLecturerInput[]
    upsert?: LecturerZoneRequestUpsertWithWhereUniqueWithoutLecturerInput | LecturerZoneRequestUpsertWithWhereUniqueWithoutLecturerInput[]
    createMany?: LecturerZoneRequestCreateManyLecturerInputEnvelope
    set?: LecturerZoneRequestWhereUniqueInput | LecturerZoneRequestWhereUniqueInput[]
    disconnect?: LecturerZoneRequestWhereUniqueInput | LecturerZoneRequestWhereUniqueInput[]
    delete?: LecturerZoneRequestWhereUniqueInput | LecturerZoneRequestWhereUniqueInput[]
    connect?: LecturerZoneRequestWhereUniqueInput | LecturerZoneRequestWhereUniqueInput[]
    update?: LecturerZoneRequestUpdateWithWhereUniqueWithoutLecturerInput | LecturerZoneRequestUpdateWithWhereUniqueWithoutLecturerInput[]
    updateMany?: LecturerZoneRequestUpdateManyWithWhereWithoutLecturerInput | LecturerZoneRequestUpdateManyWithWhereWithoutLecturerInput[]
    deleteMany?: LecturerZoneRequestScalarWhereInput | LecturerZoneRequestScalarWhereInput[]
  }

  export type SupervisionScheduleUpdateManyWithoutLecturerNestedInput = {
    create?: XOR<SupervisionScheduleCreateWithoutLecturerInput, SupervisionScheduleUncheckedCreateWithoutLecturerInput> | SupervisionScheduleCreateWithoutLecturerInput[] | SupervisionScheduleUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: SupervisionScheduleCreateOrConnectWithoutLecturerInput | SupervisionScheduleCreateOrConnectWithoutLecturerInput[]
    upsert?: SupervisionScheduleUpsertWithWhereUniqueWithoutLecturerInput | SupervisionScheduleUpsertWithWhereUniqueWithoutLecturerInput[]
    createMany?: SupervisionScheduleCreateManyLecturerInputEnvelope
    set?: SupervisionScheduleWhereUniqueInput | SupervisionScheduleWhereUniqueInput[]
    disconnect?: SupervisionScheduleWhereUniqueInput | SupervisionScheduleWhereUniqueInput[]
    delete?: SupervisionScheduleWhereUniqueInput | SupervisionScheduleWhereUniqueInput[]
    connect?: SupervisionScheduleWhereUniqueInput | SupervisionScheduleWhereUniqueInput[]
    update?: SupervisionScheduleUpdateWithWhereUniqueWithoutLecturerInput | SupervisionScheduleUpdateWithWhereUniqueWithoutLecturerInput[]
    updateMany?: SupervisionScheduleUpdateManyWithWhereWithoutLecturerInput | SupervisionScheduleUpdateManyWithWhereWithoutLecturerInput[]
    deleteMany?: SupervisionScheduleScalarWhereInput | SupervisionScheduleScalarWhereInput[]
  }

  export type SupervisionVisitUpdateManyWithoutLecturerNestedInput = {
    create?: XOR<SupervisionVisitCreateWithoutLecturerInput, SupervisionVisitUncheckedCreateWithoutLecturerInput> | SupervisionVisitCreateWithoutLecturerInput[] | SupervisionVisitUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: SupervisionVisitCreateOrConnectWithoutLecturerInput | SupervisionVisitCreateOrConnectWithoutLecturerInput[]
    upsert?: SupervisionVisitUpsertWithWhereUniqueWithoutLecturerInput | SupervisionVisitUpsertWithWhereUniqueWithoutLecturerInput[]
    createMany?: SupervisionVisitCreateManyLecturerInputEnvelope
    set?: SupervisionVisitWhereUniqueInput | SupervisionVisitWhereUniqueInput[]
    disconnect?: SupervisionVisitWhereUniqueInput | SupervisionVisitWhereUniqueInput[]
    delete?: SupervisionVisitWhereUniqueInput | SupervisionVisitWhereUniqueInput[]
    connect?: SupervisionVisitWhereUniqueInput | SupervisionVisitWhereUniqueInput[]
    update?: SupervisionVisitUpdateWithWhereUniqueWithoutLecturerInput | SupervisionVisitUpdateWithWhereUniqueWithoutLecturerInput[]
    updateMany?: SupervisionVisitUpdateManyWithWhereWithoutLecturerInput | SupervisionVisitUpdateManyWithWhereWithoutLecturerInput[]
    deleteMany?: SupervisionVisitScalarWhereInput | SupervisionVisitScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutLecturerNestedInput = {
    create?: XOR<ReportCreateWithoutLecturerInput, ReportUncheckedCreateWithoutLecturerInput> | ReportCreateWithoutLecturerInput[] | ReportUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutLecturerInput | ReportCreateOrConnectWithoutLecturerInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutLecturerInput | ReportUpsertWithWhereUniqueWithoutLecturerInput[]
    createMany?: ReportCreateManyLecturerInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutLecturerInput | ReportUpdateWithWhereUniqueWithoutLecturerInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutLecturerInput | ReportUpdateManyWithWhereWithoutLecturerInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type GradeUpdateManyWithoutLecturerNestedInput = {
    create?: XOR<GradeCreateWithoutLecturerInput, GradeUncheckedCreateWithoutLecturerInput> | GradeCreateWithoutLecturerInput[] | GradeUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutLecturerInput | GradeCreateOrConnectWithoutLecturerInput[]
    upsert?: GradeUpsertWithWhereUniqueWithoutLecturerInput | GradeUpsertWithWhereUniqueWithoutLecturerInput[]
    createMany?: GradeCreateManyLecturerInputEnvelope
    set?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    disconnect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    delete?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    update?: GradeUpdateWithWhereUniqueWithoutLecturerInput | GradeUpdateWithWhereUniqueWithoutLecturerInput[]
    updateMany?: GradeUpdateManyWithWhereWithoutLecturerInput | GradeUpdateManyWithWhereWithoutLecturerInput[]
    deleteMany?: GradeScalarWhereInput | GradeScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutLecturerNestedInput = {
    create?: XOR<UserCreateWithoutLecturerInput, UserUncheckedCreateWithoutLecturerInput>
    connectOrCreate?: UserCreateOrConnectWithoutLecturerInput
    upsert?: UserUpsertWithoutLecturerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLecturerInput, UserUpdateWithoutLecturerInput>, UserUncheckedUpdateWithoutLecturerInput>
  }

  export type LecturerZoneAssignedUncheckedUpdateManyWithoutLecturerNestedInput = {
    create?: XOR<LecturerZoneAssignedCreateWithoutLecturerInput, LecturerZoneAssignedUncheckedCreateWithoutLecturerInput> | LecturerZoneAssignedCreateWithoutLecturerInput[] | LecturerZoneAssignedUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: LecturerZoneAssignedCreateOrConnectWithoutLecturerInput | LecturerZoneAssignedCreateOrConnectWithoutLecturerInput[]
    upsert?: LecturerZoneAssignedUpsertWithWhereUniqueWithoutLecturerInput | LecturerZoneAssignedUpsertWithWhereUniqueWithoutLecturerInput[]
    createMany?: LecturerZoneAssignedCreateManyLecturerInputEnvelope
    set?: LecturerZoneAssignedWhereUniqueInput | LecturerZoneAssignedWhereUniqueInput[]
    disconnect?: LecturerZoneAssignedWhereUniqueInput | LecturerZoneAssignedWhereUniqueInput[]
    delete?: LecturerZoneAssignedWhereUniqueInput | LecturerZoneAssignedWhereUniqueInput[]
    connect?: LecturerZoneAssignedWhereUniqueInput | LecturerZoneAssignedWhereUniqueInput[]
    update?: LecturerZoneAssignedUpdateWithWhereUniqueWithoutLecturerInput | LecturerZoneAssignedUpdateWithWhereUniqueWithoutLecturerInput[]
    updateMany?: LecturerZoneAssignedUpdateManyWithWhereWithoutLecturerInput | LecturerZoneAssignedUpdateManyWithWhereWithoutLecturerInput[]
    deleteMany?: LecturerZoneAssignedScalarWhereInput | LecturerZoneAssignedScalarWhereInput[]
  }

  export type LecturerZoneRequestUncheckedUpdateManyWithoutLecturerNestedInput = {
    create?: XOR<LecturerZoneRequestCreateWithoutLecturerInput, LecturerZoneRequestUncheckedCreateWithoutLecturerInput> | LecturerZoneRequestCreateWithoutLecturerInput[] | LecturerZoneRequestUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: LecturerZoneRequestCreateOrConnectWithoutLecturerInput | LecturerZoneRequestCreateOrConnectWithoutLecturerInput[]
    upsert?: LecturerZoneRequestUpsertWithWhereUniqueWithoutLecturerInput | LecturerZoneRequestUpsertWithWhereUniqueWithoutLecturerInput[]
    createMany?: LecturerZoneRequestCreateManyLecturerInputEnvelope
    set?: LecturerZoneRequestWhereUniqueInput | LecturerZoneRequestWhereUniqueInput[]
    disconnect?: LecturerZoneRequestWhereUniqueInput | LecturerZoneRequestWhereUniqueInput[]
    delete?: LecturerZoneRequestWhereUniqueInput | LecturerZoneRequestWhereUniqueInput[]
    connect?: LecturerZoneRequestWhereUniqueInput | LecturerZoneRequestWhereUniqueInput[]
    update?: LecturerZoneRequestUpdateWithWhereUniqueWithoutLecturerInput | LecturerZoneRequestUpdateWithWhereUniqueWithoutLecturerInput[]
    updateMany?: LecturerZoneRequestUpdateManyWithWhereWithoutLecturerInput | LecturerZoneRequestUpdateManyWithWhereWithoutLecturerInput[]
    deleteMany?: LecturerZoneRequestScalarWhereInput | LecturerZoneRequestScalarWhereInput[]
  }

  export type SupervisionScheduleUncheckedUpdateManyWithoutLecturerNestedInput = {
    create?: XOR<SupervisionScheduleCreateWithoutLecturerInput, SupervisionScheduleUncheckedCreateWithoutLecturerInput> | SupervisionScheduleCreateWithoutLecturerInput[] | SupervisionScheduleUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: SupervisionScheduleCreateOrConnectWithoutLecturerInput | SupervisionScheduleCreateOrConnectWithoutLecturerInput[]
    upsert?: SupervisionScheduleUpsertWithWhereUniqueWithoutLecturerInput | SupervisionScheduleUpsertWithWhereUniqueWithoutLecturerInput[]
    createMany?: SupervisionScheduleCreateManyLecturerInputEnvelope
    set?: SupervisionScheduleWhereUniqueInput | SupervisionScheduleWhereUniqueInput[]
    disconnect?: SupervisionScheduleWhereUniqueInput | SupervisionScheduleWhereUniqueInput[]
    delete?: SupervisionScheduleWhereUniqueInput | SupervisionScheduleWhereUniqueInput[]
    connect?: SupervisionScheduleWhereUniqueInput | SupervisionScheduleWhereUniqueInput[]
    update?: SupervisionScheduleUpdateWithWhereUniqueWithoutLecturerInput | SupervisionScheduleUpdateWithWhereUniqueWithoutLecturerInput[]
    updateMany?: SupervisionScheduleUpdateManyWithWhereWithoutLecturerInput | SupervisionScheduleUpdateManyWithWhereWithoutLecturerInput[]
    deleteMany?: SupervisionScheduleScalarWhereInput | SupervisionScheduleScalarWhereInput[]
  }

  export type SupervisionVisitUncheckedUpdateManyWithoutLecturerNestedInput = {
    create?: XOR<SupervisionVisitCreateWithoutLecturerInput, SupervisionVisitUncheckedCreateWithoutLecturerInput> | SupervisionVisitCreateWithoutLecturerInput[] | SupervisionVisitUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: SupervisionVisitCreateOrConnectWithoutLecturerInput | SupervisionVisitCreateOrConnectWithoutLecturerInput[]
    upsert?: SupervisionVisitUpsertWithWhereUniqueWithoutLecturerInput | SupervisionVisitUpsertWithWhereUniqueWithoutLecturerInput[]
    createMany?: SupervisionVisitCreateManyLecturerInputEnvelope
    set?: SupervisionVisitWhereUniqueInput | SupervisionVisitWhereUniqueInput[]
    disconnect?: SupervisionVisitWhereUniqueInput | SupervisionVisitWhereUniqueInput[]
    delete?: SupervisionVisitWhereUniqueInput | SupervisionVisitWhereUniqueInput[]
    connect?: SupervisionVisitWhereUniqueInput | SupervisionVisitWhereUniqueInput[]
    update?: SupervisionVisitUpdateWithWhereUniqueWithoutLecturerInput | SupervisionVisitUpdateWithWhereUniqueWithoutLecturerInput[]
    updateMany?: SupervisionVisitUpdateManyWithWhereWithoutLecturerInput | SupervisionVisitUpdateManyWithWhereWithoutLecturerInput[]
    deleteMany?: SupervisionVisitScalarWhereInput | SupervisionVisitScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutLecturerNestedInput = {
    create?: XOR<ReportCreateWithoutLecturerInput, ReportUncheckedCreateWithoutLecturerInput> | ReportCreateWithoutLecturerInput[] | ReportUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutLecturerInput | ReportCreateOrConnectWithoutLecturerInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutLecturerInput | ReportUpsertWithWhereUniqueWithoutLecturerInput[]
    createMany?: ReportCreateManyLecturerInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutLecturerInput | ReportUpdateWithWhereUniqueWithoutLecturerInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutLecturerInput | ReportUpdateManyWithWhereWithoutLecturerInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type GradeUncheckedUpdateManyWithoutLecturerNestedInput = {
    create?: XOR<GradeCreateWithoutLecturerInput, GradeUncheckedCreateWithoutLecturerInput> | GradeCreateWithoutLecturerInput[] | GradeUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutLecturerInput | GradeCreateOrConnectWithoutLecturerInput[]
    upsert?: GradeUpsertWithWhereUniqueWithoutLecturerInput | GradeUpsertWithWhereUniqueWithoutLecturerInput[]
    createMany?: GradeCreateManyLecturerInputEnvelope
    set?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    disconnect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    delete?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    update?: GradeUpdateWithWhereUniqueWithoutLecturerInput | GradeUpdateWithWhereUniqueWithoutLecturerInput[]
    updateMany?: GradeUpdateManyWithWhereWithoutLecturerInput | GradeUpdateManyWithWhereWithoutLecturerInput[]
    deleteMany?: GradeScalarWhereInput | GradeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAdminInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    upsert?: UserUpsertWithoutAdminInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminInput, UserUpdateWithoutAdminInput>, UserUncheckedUpdateWithoutAdminInput>
  }

  export type SchoolCreateNestedManyWithoutZoneInput = {
    create?: XOR<SchoolCreateWithoutZoneInput, SchoolUncheckedCreateWithoutZoneInput> | SchoolCreateWithoutZoneInput[] | SchoolUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: SchoolCreateOrConnectWithoutZoneInput | SchoolCreateOrConnectWithoutZoneInput[]
    createMany?: SchoolCreateManyZoneInputEnvelope
    connect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
  }

  export type LecturerZoneRequestCreateNestedManyWithoutZoneInput = {
    create?: XOR<LecturerZoneRequestCreateWithoutZoneInput, LecturerZoneRequestUncheckedCreateWithoutZoneInput> | LecturerZoneRequestCreateWithoutZoneInput[] | LecturerZoneRequestUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: LecturerZoneRequestCreateOrConnectWithoutZoneInput | LecturerZoneRequestCreateOrConnectWithoutZoneInput[]
    createMany?: LecturerZoneRequestCreateManyZoneInputEnvelope
    connect?: LecturerZoneRequestWhereUniqueInput | LecturerZoneRequestWhereUniqueInput[]
  }

  export type LecturerZoneAssignedCreateNestedManyWithoutZoneInput = {
    create?: XOR<LecturerZoneAssignedCreateWithoutZoneInput, LecturerZoneAssignedUncheckedCreateWithoutZoneInput> | LecturerZoneAssignedCreateWithoutZoneInput[] | LecturerZoneAssignedUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: LecturerZoneAssignedCreateOrConnectWithoutZoneInput | LecturerZoneAssignedCreateOrConnectWithoutZoneInput[]
    createMany?: LecturerZoneAssignedCreateManyZoneInputEnvelope
    connect?: LecturerZoneAssignedWhereUniqueInput | LecturerZoneAssignedWhereUniqueInput[]
  }

  export type SchoolUncheckedCreateNestedManyWithoutZoneInput = {
    create?: XOR<SchoolCreateWithoutZoneInput, SchoolUncheckedCreateWithoutZoneInput> | SchoolCreateWithoutZoneInput[] | SchoolUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: SchoolCreateOrConnectWithoutZoneInput | SchoolCreateOrConnectWithoutZoneInput[]
    createMany?: SchoolCreateManyZoneInputEnvelope
    connect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
  }

  export type LecturerZoneRequestUncheckedCreateNestedManyWithoutZoneInput = {
    create?: XOR<LecturerZoneRequestCreateWithoutZoneInput, LecturerZoneRequestUncheckedCreateWithoutZoneInput> | LecturerZoneRequestCreateWithoutZoneInput[] | LecturerZoneRequestUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: LecturerZoneRequestCreateOrConnectWithoutZoneInput | LecturerZoneRequestCreateOrConnectWithoutZoneInput[]
    createMany?: LecturerZoneRequestCreateManyZoneInputEnvelope
    connect?: LecturerZoneRequestWhereUniqueInput | LecturerZoneRequestWhereUniqueInput[]
  }

  export type LecturerZoneAssignedUncheckedCreateNestedManyWithoutZoneInput = {
    create?: XOR<LecturerZoneAssignedCreateWithoutZoneInput, LecturerZoneAssignedUncheckedCreateWithoutZoneInput> | LecturerZoneAssignedCreateWithoutZoneInput[] | LecturerZoneAssignedUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: LecturerZoneAssignedCreateOrConnectWithoutZoneInput | LecturerZoneAssignedCreateOrConnectWithoutZoneInput[]
    createMany?: LecturerZoneAssignedCreateManyZoneInputEnvelope
    connect?: LecturerZoneAssignedWhereUniqueInput | LecturerZoneAssignedWhereUniqueInput[]
  }

  export type SchoolUpdateManyWithoutZoneNestedInput = {
    create?: XOR<SchoolCreateWithoutZoneInput, SchoolUncheckedCreateWithoutZoneInput> | SchoolCreateWithoutZoneInput[] | SchoolUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: SchoolCreateOrConnectWithoutZoneInput | SchoolCreateOrConnectWithoutZoneInput[]
    upsert?: SchoolUpsertWithWhereUniqueWithoutZoneInput | SchoolUpsertWithWhereUniqueWithoutZoneInput[]
    createMany?: SchoolCreateManyZoneInputEnvelope
    set?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    disconnect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    delete?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    connect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    update?: SchoolUpdateWithWhereUniqueWithoutZoneInput | SchoolUpdateWithWhereUniqueWithoutZoneInput[]
    updateMany?: SchoolUpdateManyWithWhereWithoutZoneInput | SchoolUpdateManyWithWhereWithoutZoneInput[]
    deleteMany?: SchoolScalarWhereInput | SchoolScalarWhereInput[]
  }

  export type LecturerZoneRequestUpdateManyWithoutZoneNestedInput = {
    create?: XOR<LecturerZoneRequestCreateWithoutZoneInput, LecturerZoneRequestUncheckedCreateWithoutZoneInput> | LecturerZoneRequestCreateWithoutZoneInput[] | LecturerZoneRequestUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: LecturerZoneRequestCreateOrConnectWithoutZoneInput | LecturerZoneRequestCreateOrConnectWithoutZoneInput[]
    upsert?: LecturerZoneRequestUpsertWithWhereUniqueWithoutZoneInput | LecturerZoneRequestUpsertWithWhereUniqueWithoutZoneInput[]
    createMany?: LecturerZoneRequestCreateManyZoneInputEnvelope
    set?: LecturerZoneRequestWhereUniqueInput | LecturerZoneRequestWhereUniqueInput[]
    disconnect?: LecturerZoneRequestWhereUniqueInput | LecturerZoneRequestWhereUniqueInput[]
    delete?: LecturerZoneRequestWhereUniqueInput | LecturerZoneRequestWhereUniqueInput[]
    connect?: LecturerZoneRequestWhereUniqueInput | LecturerZoneRequestWhereUniqueInput[]
    update?: LecturerZoneRequestUpdateWithWhereUniqueWithoutZoneInput | LecturerZoneRequestUpdateWithWhereUniqueWithoutZoneInput[]
    updateMany?: LecturerZoneRequestUpdateManyWithWhereWithoutZoneInput | LecturerZoneRequestUpdateManyWithWhereWithoutZoneInput[]
    deleteMany?: LecturerZoneRequestScalarWhereInput | LecturerZoneRequestScalarWhereInput[]
  }

  export type LecturerZoneAssignedUpdateManyWithoutZoneNestedInput = {
    create?: XOR<LecturerZoneAssignedCreateWithoutZoneInput, LecturerZoneAssignedUncheckedCreateWithoutZoneInput> | LecturerZoneAssignedCreateWithoutZoneInput[] | LecturerZoneAssignedUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: LecturerZoneAssignedCreateOrConnectWithoutZoneInput | LecturerZoneAssignedCreateOrConnectWithoutZoneInput[]
    upsert?: LecturerZoneAssignedUpsertWithWhereUniqueWithoutZoneInput | LecturerZoneAssignedUpsertWithWhereUniqueWithoutZoneInput[]
    createMany?: LecturerZoneAssignedCreateManyZoneInputEnvelope
    set?: LecturerZoneAssignedWhereUniqueInput | LecturerZoneAssignedWhereUniqueInput[]
    disconnect?: LecturerZoneAssignedWhereUniqueInput | LecturerZoneAssignedWhereUniqueInput[]
    delete?: LecturerZoneAssignedWhereUniqueInput | LecturerZoneAssignedWhereUniqueInput[]
    connect?: LecturerZoneAssignedWhereUniqueInput | LecturerZoneAssignedWhereUniqueInput[]
    update?: LecturerZoneAssignedUpdateWithWhereUniqueWithoutZoneInput | LecturerZoneAssignedUpdateWithWhereUniqueWithoutZoneInput[]
    updateMany?: LecturerZoneAssignedUpdateManyWithWhereWithoutZoneInput | LecturerZoneAssignedUpdateManyWithWhereWithoutZoneInput[]
    deleteMany?: LecturerZoneAssignedScalarWhereInput | LecturerZoneAssignedScalarWhereInput[]
  }

  export type SchoolUncheckedUpdateManyWithoutZoneNestedInput = {
    create?: XOR<SchoolCreateWithoutZoneInput, SchoolUncheckedCreateWithoutZoneInput> | SchoolCreateWithoutZoneInput[] | SchoolUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: SchoolCreateOrConnectWithoutZoneInput | SchoolCreateOrConnectWithoutZoneInput[]
    upsert?: SchoolUpsertWithWhereUniqueWithoutZoneInput | SchoolUpsertWithWhereUniqueWithoutZoneInput[]
    createMany?: SchoolCreateManyZoneInputEnvelope
    set?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    disconnect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    delete?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    connect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    update?: SchoolUpdateWithWhereUniqueWithoutZoneInput | SchoolUpdateWithWhereUniqueWithoutZoneInput[]
    updateMany?: SchoolUpdateManyWithWhereWithoutZoneInput | SchoolUpdateManyWithWhereWithoutZoneInput[]
    deleteMany?: SchoolScalarWhereInput | SchoolScalarWhereInput[]
  }

  export type LecturerZoneRequestUncheckedUpdateManyWithoutZoneNestedInput = {
    create?: XOR<LecturerZoneRequestCreateWithoutZoneInput, LecturerZoneRequestUncheckedCreateWithoutZoneInput> | LecturerZoneRequestCreateWithoutZoneInput[] | LecturerZoneRequestUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: LecturerZoneRequestCreateOrConnectWithoutZoneInput | LecturerZoneRequestCreateOrConnectWithoutZoneInput[]
    upsert?: LecturerZoneRequestUpsertWithWhereUniqueWithoutZoneInput | LecturerZoneRequestUpsertWithWhereUniqueWithoutZoneInput[]
    createMany?: LecturerZoneRequestCreateManyZoneInputEnvelope
    set?: LecturerZoneRequestWhereUniqueInput | LecturerZoneRequestWhereUniqueInput[]
    disconnect?: LecturerZoneRequestWhereUniqueInput | LecturerZoneRequestWhereUniqueInput[]
    delete?: LecturerZoneRequestWhereUniqueInput | LecturerZoneRequestWhereUniqueInput[]
    connect?: LecturerZoneRequestWhereUniqueInput | LecturerZoneRequestWhereUniqueInput[]
    update?: LecturerZoneRequestUpdateWithWhereUniqueWithoutZoneInput | LecturerZoneRequestUpdateWithWhereUniqueWithoutZoneInput[]
    updateMany?: LecturerZoneRequestUpdateManyWithWhereWithoutZoneInput | LecturerZoneRequestUpdateManyWithWhereWithoutZoneInput[]
    deleteMany?: LecturerZoneRequestScalarWhereInput | LecturerZoneRequestScalarWhereInput[]
  }

  export type LecturerZoneAssignedUncheckedUpdateManyWithoutZoneNestedInput = {
    create?: XOR<LecturerZoneAssignedCreateWithoutZoneInput, LecturerZoneAssignedUncheckedCreateWithoutZoneInput> | LecturerZoneAssignedCreateWithoutZoneInput[] | LecturerZoneAssignedUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: LecturerZoneAssignedCreateOrConnectWithoutZoneInput | LecturerZoneAssignedCreateOrConnectWithoutZoneInput[]
    upsert?: LecturerZoneAssignedUpsertWithWhereUniqueWithoutZoneInput | LecturerZoneAssignedUpsertWithWhereUniqueWithoutZoneInput[]
    createMany?: LecturerZoneAssignedCreateManyZoneInputEnvelope
    set?: LecturerZoneAssignedWhereUniqueInput | LecturerZoneAssignedWhereUniqueInput[]
    disconnect?: LecturerZoneAssignedWhereUniqueInput | LecturerZoneAssignedWhereUniqueInput[]
    delete?: LecturerZoneAssignedWhereUniqueInput | LecturerZoneAssignedWhereUniqueInput[]
    connect?: LecturerZoneAssignedWhereUniqueInput | LecturerZoneAssignedWhereUniqueInput[]
    update?: LecturerZoneAssignedUpdateWithWhereUniqueWithoutZoneInput | LecturerZoneAssignedUpdateWithWhereUniqueWithoutZoneInput[]
    updateMany?: LecturerZoneAssignedUpdateManyWithWhereWithoutZoneInput | LecturerZoneAssignedUpdateManyWithWhereWithoutZoneInput[]
    deleteMany?: LecturerZoneAssignedScalarWhereInput | LecturerZoneAssignedScalarWhereInput[]
  }

  export type TpApplicationCreateNestedManyWithoutSchoolInput = {
    create?: XOR<TpApplicationCreateWithoutSchoolInput, TpApplicationUncheckedCreateWithoutSchoolInput> | TpApplicationCreateWithoutSchoolInput[] | TpApplicationUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: TpApplicationCreateOrConnectWithoutSchoolInput | TpApplicationCreateOrConnectWithoutSchoolInput[]
    createMany?: TpApplicationCreateManySchoolInputEnvelope
    connect?: TpApplicationWhereUniqueInput | TpApplicationWhereUniqueInput[]
  }

  export type ZoneCreateNestedOneWithoutSchoolsInput = {
    create?: XOR<ZoneCreateWithoutSchoolsInput, ZoneUncheckedCreateWithoutSchoolsInput>
    connectOrCreate?: ZoneCreateOrConnectWithoutSchoolsInput
    connect?: ZoneWhereUniqueInput
  }

  export type TpApplicationUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<TpApplicationCreateWithoutSchoolInput, TpApplicationUncheckedCreateWithoutSchoolInput> | TpApplicationCreateWithoutSchoolInput[] | TpApplicationUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: TpApplicationCreateOrConnectWithoutSchoolInput | TpApplicationCreateOrConnectWithoutSchoolInput[]
    createMany?: TpApplicationCreateManySchoolInputEnvelope
    connect?: TpApplicationWhereUniqueInput | TpApplicationWhereUniqueInput[]
  }

  export type TpApplicationUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<TpApplicationCreateWithoutSchoolInput, TpApplicationUncheckedCreateWithoutSchoolInput> | TpApplicationCreateWithoutSchoolInput[] | TpApplicationUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: TpApplicationCreateOrConnectWithoutSchoolInput | TpApplicationCreateOrConnectWithoutSchoolInput[]
    upsert?: TpApplicationUpsertWithWhereUniqueWithoutSchoolInput | TpApplicationUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: TpApplicationCreateManySchoolInputEnvelope
    set?: TpApplicationWhereUniqueInput | TpApplicationWhereUniqueInput[]
    disconnect?: TpApplicationWhereUniqueInput | TpApplicationWhereUniqueInput[]
    delete?: TpApplicationWhereUniqueInput | TpApplicationWhereUniqueInput[]
    connect?: TpApplicationWhereUniqueInput | TpApplicationWhereUniqueInput[]
    update?: TpApplicationUpdateWithWhereUniqueWithoutSchoolInput | TpApplicationUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: TpApplicationUpdateManyWithWhereWithoutSchoolInput | TpApplicationUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: TpApplicationScalarWhereInput | TpApplicationScalarWhereInput[]
  }

  export type ZoneUpdateOneRequiredWithoutSchoolsNestedInput = {
    create?: XOR<ZoneCreateWithoutSchoolsInput, ZoneUncheckedCreateWithoutSchoolsInput>
    connectOrCreate?: ZoneCreateOrConnectWithoutSchoolsInput
    upsert?: ZoneUpsertWithoutSchoolsInput
    connect?: ZoneWhereUniqueInput
    update?: XOR<XOR<ZoneUpdateToOneWithWhereWithoutSchoolsInput, ZoneUpdateWithoutSchoolsInput>, ZoneUncheckedUpdateWithoutSchoolsInput>
  }

  export type TpApplicationUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<TpApplicationCreateWithoutSchoolInput, TpApplicationUncheckedCreateWithoutSchoolInput> | TpApplicationCreateWithoutSchoolInput[] | TpApplicationUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: TpApplicationCreateOrConnectWithoutSchoolInput | TpApplicationCreateOrConnectWithoutSchoolInput[]
    upsert?: TpApplicationUpsertWithWhereUniqueWithoutSchoolInput | TpApplicationUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: TpApplicationCreateManySchoolInputEnvelope
    set?: TpApplicationWhereUniqueInput | TpApplicationWhereUniqueInput[]
    disconnect?: TpApplicationWhereUniqueInput | TpApplicationWhereUniqueInput[]
    delete?: TpApplicationWhereUniqueInput | TpApplicationWhereUniqueInput[]
    connect?: TpApplicationWhereUniqueInput | TpApplicationWhereUniqueInput[]
    update?: TpApplicationUpdateWithWhereUniqueWithoutSchoolInput | TpApplicationUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: TpApplicationUpdateManyWithWhereWithoutSchoolInput | TpApplicationUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: TpApplicationScalarWhereInput | TpApplicationScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutTpApplicationInput = {
    create?: XOR<StudentCreateWithoutTpApplicationInput, StudentUncheckedCreateWithoutTpApplicationInput>
    connectOrCreate?: StudentCreateOrConnectWithoutTpApplicationInput
    connect?: StudentWhereUniqueInput
  }

  export type SchoolCreateNestedOneWithoutTpApplicationInput = {
    create?: XOR<SchoolCreateWithoutTpApplicationInput, SchoolUncheckedCreateWithoutTpApplicationInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutTpApplicationInput
    connect?: SchoolWhereUniqueInput
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type StudentUpdateOneRequiredWithoutTpApplicationNestedInput = {
    create?: XOR<StudentCreateWithoutTpApplicationInput, StudentUncheckedCreateWithoutTpApplicationInput>
    connectOrCreate?: StudentCreateOrConnectWithoutTpApplicationInput
    upsert?: StudentUpsertWithoutTpApplicationInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutTpApplicationInput, StudentUpdateWithoutTpApplicationInput>, StudentUncheckedUpdateWithoutTpApplicationInput>
  }

  export type SchoolUpdateOneRequiredWithoutTpApplicationNestedInput = {
    create?: XOR<SchoolCreateWithoutTpApplicationInput, SchoolUncheckedCreateWithoutTpApplicationInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutTpApplicationInput
    upsert?: SchoolUpsertWithoutTpApplicationInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutTpApplicationInput, SchoolUpdateWithoutTpApplicationInput>, SchoolUncheckedUpdateWithoutTpApplicationInput>
  }

  export type LecturerCreateNestedOneWithoutLecturerZoneAssignedInput = {
    create?: XOR<LecturerCreateWithoutLecturerZoneAssignedInput, LecturerUncheckedCreateWithoutLecturerZoneAssignedInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutLecturerZoneAssignedInput
    connect?: LecturerWhereUniqueInput
  }

  export type ZoneCreateNestedOneWithoutLecturerZoneAssignedInput = {
    create?: XOR<ZoneCreateWithoutLecturerZoneAssignedInput, ZoneUncheckedCreateWithoutLecturerZoneAssignedInput>
    connectOrCreate?: ZoneCreateOrConnectWithoutLecturerZoneAssignedInput
    connect?: ZoneWhereUniqueInput
  }

  export type LecturerUpdateOneRequiredWithoutLecturerZoneAssignedNestedInput = {
    create?: XOR<LecturerCreateWithoutLecturerZoneAssignedInput, LecturerUncheckedCreateWithoutLecturerZoneAssignedInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutLecturerZoneAssignedInput
    upsert?: LecturerUpsertWithoutLecturerZoneAssignedInput
    connect?: LecturerWhereUniqueInput
    update?: XOR<XOR<LecturerUpdateToOneWithWhereWithoutLecturerZoneAssignedInput, LecturerUpdateWithoutLecturerZoneAssignedInput>, LecturerUncheckedUpdateWithoutLecturerZoneAssignedInput>
  }

  export type ZoneUpdateOneRequiredWithoutLecturerZoneAssignedNestedInput = {
    create?: XOR<ZoneCreateWithoutLecturerZoneAssignedInput, ZoneUncheckedCreateWithoutLecturerZoneAssignedInput>
    connectOrCreate?: ZoneCreateOrConnectWithoutLecturerZoneAssignedInput
    upsert?: ZoneUpsertWithoutLecturerZoneAssignedInput
    connect?: ZoneWhereUniqueInput
    update?: XOR<XOR<ZoneUpdateToOneWithWhereWithoutLecturerZoneAssignedInput, ZoneUpdateWithoutLecturerZoneAssignedInput>, ZoneUncheckedUpdateWithoutLecturerZoneAssignedInput>
  }

  export type LecturerCreateNestedOneWithoutLecturerZoneRequestInput = {
    create?: XOR<LecturerCreateWithoutLecturerZoneRequestInput, LecturerUncheckedCreateWithoutLecturerZoneRequestInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutLecturerZoneRequestInput
    connect?: LecturerWhereUniqueInput
  }

  export type ZoneCreateNestedOneWithoutLecturerZoneRequestInput = {
    create?: XOR<ZoneCreateWithoutLecturerZoneRequestInput, ZoneUncheckedCreateWithoutLecturerZoneRequestInput>
    connectOrCreate?: ZoneCreateOrConnectWithoutLecturerZoneRequestInput
    connect?: ZoneWhereUniqueInput
  }

  export type LecturerUpdateOneRequiredWithoutLecturerZoneRequestNestedInput = {
    create?: XOR<LecturerCreateWithoutLecturerZoneRequestInput, LecturerUncheckedCreateWithoutLecturerZoneRequestInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutLecturerZoneRequestInput
    upsert?: LecturerUpsertWithoutLecturerZoneRequestInput
    connect?: LecturerWhereUniqueInput
    update?: XOR<XOR<LecturerUpdateToOneWithWhereWithoutLecturerZoneRequestInput, LecturerUpdateWithoutLecturerZoneRequestInput>, LecturerUncheckedUpdateWithoutLecturerZoneRequestInput>
  }

  export type ZoneUpdateOneRequiredWithoutLecturerZoneRequestNestedInput = {
    create?: XOR<ZoneCreateWithoutLecturerZoneRequestInput, ZoneUncheckedCreateWithoutLecturerZoneRequestInput>
    connectOrCreate?: ZoneCreateOrConnectWithoutLecturerZoneRequestInput
    upsert?: ZoneUpsertWithoutLecturerZoneRequestInput
    connect?: ZoneWhereUniqueInput
    update?: XOR<XOR<ZoneUpdateToOneWithWhereWithoutLecturerZoneRequestInput, ZoneUpdateWithoutLecturerZoneRequestInput>, ZoneUncheckedUpdateWithoutLecturerZoneRequestInput>
  }

  export type LecturerCreateNestedOneWithoutSupervisionScheduleInput = {
    create?: XOR<LecturerCreateWithoutSupervisionScheduleInput, LecturerUncheckedCreateWithoutSupervisionScheduleInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutSupervisionScheduleInput
    connect?: LecturerWhereUniqueInput
  }

  export type LecturerUpdateOneRequiredWithoutSupervisionScheduleNestedInput = {
    create?: XOR<LecturerCreateWithoutSupervisionScheduleInput, LecturerUncheckedCreateWithoutSupervisionScheduleInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutSupervisionScheduleInput
    upsert?: LecturerUpsertWithoutSupervisionScheduleInput
    connect?: LecturerWhereUniqueInput
    update?: XOR<XOR<LecturerUpdateToOneWithWhereWithoutSupervisionScheduleInput, LecturerUpdateWithoutSupervisionScheduleInput>, LecturerUncheckedUpdateWithoutSupervisionScheduleInput>
  }

  export type StudentCreateNestedOneWithoutLessonPlanInput = {
    create?: XOR<StudentCreateWithoutLessonPlanInput, StudentUncheckedCreateWithoutLessonPlanInput>
    connectOrCreate?: StudentCreateOrConnectWithoutLessonPlanInput
    connect?: StudentWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutLessonPlanNestedInput = {
    create?: XOR<StudentCreateWithoutLessonPlanInput, StudentUncheckedCreateWithoutLessonPlanInput>
    connectOrCreate?: StudentCreateOrConnectWithoutLessonPlanInput
    upsert?: StudentUpsertWithoutLessonPlanInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutLessonPlanInput, StudentUpdateWithoutLessonPlanInput>, StudentUncheckedUpdateWithoutLessonPlanInput>
  }

  export type LecturerCreateNestedOneWithoutSupervisionVisitInput = {
    create?: XOR<LecturerCreateWithoutSupervisionVisitInput, LecturerUncheckedCreateWithoutSupervisionVisitInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutSupervisionVisitInput
    connect?: LecturerWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutSupervisionVisitInput = {
    create?: XOR<StudentCreateWithoutSupervisionVisitInput, StudentUncheckedCreateWithoutSupervisionVisitInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSupervisionVisitInput
    connect?: StudentWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type LecturerUpdateOneRequiredWithoutSupervisionVisitNestedInput = {
    create?: XOR<LecturerCreateWithoutSupervisionVisitInput, LecturerUncheckedCreateWithoutSupervisionVisitInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutSupervisionVisitInput
    upsert?: LecturerUpsertWithoutSupervisionVisitInput
    connect?: LecturerWhereUniqueInput
    update?: XOR<XOR<LecturerUpdateToOneWithWhereWithoutSupervisionVisitInput, LecturerUpdateWithoutSupervisionVisitInput>, LecturerUncheckedUpdateWithoutSupervisionVisitInput>
  }

  export type StudentUpdateOneRequiredWithoutSupervisionVisitNestedInput = {
    create?: XOR<StudentCreateWithoutSupervisionVisitInput, StudentUncheckedCreateWithoutSupervisionVisitInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSupervisionVisitInput
    upsert?: StudentUpsertWithoutSupervisionVisitInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutSupervisionVisitInput, StudentUpdateWithoutSupervisionVisitInput>, StudentUncheckedUpdateWithoutSupervisionVisitInput>
  }

  export type UserCreateNestedOneWithoutAlertInput = {
    create?: XOR<UserCreateWithoutAlertInput, UserUncheckedCreateWithoutAlertInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlertInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAlertTypeFieldUpdateOperationsInput = {
    set?: $Enums.AlertType
  }

  export type UserUpdateOneRequiredWithoutAlertNestedInput = {
    create?: XOR<UserCreateWithoutAlertInput, UserUncheckedCreateWithoutAlertInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlertInput
    upsert?: UserUpsertWithoutAlertInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAlertInput, UserUpdateWithoutAlertInput>, UserUncheckedUpdateWithoutAlertInput>
  }

  export type StudentCreateNestedOneWithoutReportInput = {
    create?: XOR<StudentCreateWithoutReportInput, StudentUncheckedCreateWithoutReportInput>
    connectOrCreate?: StudentCreateOrConnectWithoutReportInput
    connect?: StudentWhereUniqueInput
  }

  export type LecturerCreateNestedOneWithoutReportInput = {
    create?: XOR<LecturerCreateWithoutReportInput, LecturerUncheckedCreateWithoutReportInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutReportInput
    connect?: LecturerWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<StudentCreateWithoutReportInput, StudentUncheckedCreateWithoutReportInput>
    connectOrCreate?: StudentCreateOrConnectWithoutReportInput
    upsert?: StudentUpsertWithoutReportInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutReportInput, StudentUpdateWithoutReportInput>, StudentUncheckedUpdateWithoutReportInput>
  }

  export type LecturerUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<LecturerCreateWithoutReportInput, LecturerUncheckedCreateWithoutReportInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutReportInput
    upsert?: LecturerUpsertWithoutReportInput
    connect?: LecturerWhereUniqueInput
    update?: XOR<XOR<LecturerUpdateToOneWithWhereWithoutReportInput, LecturerUpdateWithoutReportInput>, LecturerUncheckedUpdateWithoutReportInput>
  }

  export type StudentCreateNestedOneWithoutFinalDocumentInput = {
    create?: XOR<StudentCreateWithoutFinalDocumentInput, StudentUncheckedCreateWithoutFinalDocumentInput>
    connectOrCreate?: StudentCreateOrConnectWithoutFinalDocumentInput
    connect?: StudentWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutFinalDocumentNestedInput = {
    create?: XOR<StudentCreateWithoutFinalDocumentInput, StudentUncheckedCreateWithoutFinalDocumentInput>
    connectOrCreate?: StudentCreateOrConnectWithoutFinalDocumentInput
    upsert?: StudentUpsertWithoutFinalDocumentInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutFinalDocumentInput, StudentUpdateWithoutFinalDocumentInput>, StudentUncheckedUpdateWithoutFinalDocumentInput>
  }

  export type LecturerCreateNestedOneWithoutGradeInput = {
    create?: XOR<LecturerCreateWithoutGradeInput, LecturerUncheckedCreateWithoutGradeInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutGradeInput
    connect?: LecturerWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutGradeInput = {
    create?: XOR<StudentCreateWithoutGradeInput, StudentUncheckedCreateWithoutGradeInput>
    connectOrCreate?: StudentCreateOrConnectWithoutGradeInput
    connect?: StudentWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LecturerUpdateOneRequiredWithoutGradeNestedInput = {
    create?: XOR<LecturerCreateWithoutGradeInput, LecturerUncheckedCreateWithoutGradeInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutGradeInput
    upsert?: LecturerUpsertWithoutGradeInput
    connect?: LecturerWhereUniqueInput
    update?: XOR<XOR<LecturerUpdateToOneWithWhereWithoutGradeInput, LecturerUpdateWithoutGradeInput>, LecturerUncheckedUpdateWithoutGradeInput>
  }

  export type StudentUpdateOneRequiredWithoutGradeNestedInput = {
    create?: XOR<StudentCreateWithoutGradeInput, StudentUncheckedCreateWithoutGradeInput>
    connectOrCreate?: StudentCreateOrConnectWithoutGradeInput
    upsert?: StudentUpsertWithoutGradeInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutGradeInput, StudentUpdateWithoutGradeInput>, StudentUncheckedUpdateWithoutGradeInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAlertTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[]
    notIn?: $Enums.AlertType[]
    not?: NestedEnumAlertTypeFilter<$PrismaModel> | $Enums.AlertType
  }

  export type NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[]
    notIn?: $Enums.AlertType[]
    not?: NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel> | $Enums.AlertType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertTypeFilter<$PrismaModel>
    _max?: NestedEnumAlertTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StudentCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tpApplication?: TpApplicationCreateNestedManyWithoutStudentInput
    lessonPlan?: LessonPlanCreateNestedManyWithoutStudentInput
    supervisionVisit?: SupervisionVisitCreateNestedManyWithoutStudentInput
    report?: ReportCreateNestedManyWithoutStudentInput
    finalDocument?: FinalDocumentCreateNestedManyWithoutStudentInput
    grade?: GradeCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tpApplication?: TpApplicationUncheckedCreateNestedManyWithoutStudentInput
    lessonPlan?: LessonPlanUncheckedCreateNestedManyWithoutStudentInput
    supervisionVisit?: SupervisionVisitUncheckedCreateNestedManyWithoutStudentInput
    report?: ReportUncheckedCreateNestedManyWithoutStudentInput
    finalDocument?: FinalDocumentUncheckedCreateNestedManyWithoutStudentInput
    grade?: GradeUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutUserInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type StudentCreateManyUserInputEnvelope = {
    data: StudentCreateManyUserInput | StudentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LecturerCreateWithoutUserInput = {
    id?: string
    department: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturerZoneAssigned?: LecturerZoneAssignedCreateNestedManyWithoutLecturerInput
    lecturerZoneRequest?: LecturerZoneRequestCreateNestedManyWithoutLecturerInput
    supervisionSchedule?: SupervisionScheduleCreateNestedManyWithoutLecturerInput
    supervisionVisit?: SupervisionVisitCreateNestedManyWithoutLecturerInput
    report?: ReportCreateNestedManyWithoutLecturerInput
    grade?: GradeCreateNestedManyWithoutLecturerInput
  }

  export type LecturerUncheckedCreateWithoutUserInput = {
    id?: string
    department: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturerZoneAssigned?: LecturerZoneAssignedUncheckedCreateNestedManyWithoutLecturerInput
    lecturerZoneRequest?: LecturerZoneRequestUncheckedCreateNestedManyWithoutLecturerInput
    supervisionSchedule?: SupervisionScheduleUncheckedCreateNestedManyWithoutLecturerInput
    supervisionVisit?: SupervisionVisitUncheckedCreateNestedManyWithoutLecturerInput
    report?: ReportUncheckedCreateNestedManyWithoutLecturerInput
    grade?: GradeUncheckedCreateNestedManyWithoutLecturerInput
  }

  export type LecturerCreateOrConnectWithoutUserInput = {
    where: LecturerWhereUniqueInput
    create: XOR<LecturerCreateWithoutUserInput, LecturerUncheckedCreateWithoutUserInput>
  }

  export type LecturerCreateManyUserInputEnvelope = {
    data: LecturerCreateManyUserInput | LecturerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AdminCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminCreateOrConnectWithoutUserInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type AdminCreateManyUserInputEnvelope = {
    data: AdminCreateManyUserInput | AdminCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AlertCreateWithoutUserInput = {
    id?: string
    message: string
    type?: $Enums.AlertType
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertUncheckedCreateWithoutUserInput = {
    id?: string
    message: string
    type?: $Enums.AlertType
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertCreateOrConnectWithoutUserInput = {
    where: AlertWhereUniqueInput
    create: XOR<AlertCreateWithoutUserInput, AlertUncheckedCreateWithoutUserInput>
  }

  export type AlertCreateManyUserInputEnvelope = {
    data: AlertCreateManyUserInput | AlertCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithWhereUniqueWithoutUserInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutUserInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
  }

  export type StudentUpdateManyWithWhereWithoutUserInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutUserInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: StringFilter<"Student"> | string
    userId?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
  }

  export type LecturerUpsertWithWhereUniqueWithoutUserInput = {
    where: LecturerWhereUniqueInput
    update: XOR<LecturerUpdateWithoutUserInput, LecturerUncheckedUpdateWithoutUserInput>
    create: XOR<LecturerCreateWithoutUserInput, LecturerUncheckedCreateWithoutUserInput>
  }

  export type LecturerUpdateWithWhereUniqueWithoutUserInput = {
    where: LecturerWhereUniqueInput
    data: XOR<LecturerUpdateWithoutUserInput, LecturerUncheckedUpdateWithoutUserInput>
  }

  export type LecturerUpdateManyWithWhereWithoutUserInput = {
    where: LecturerScalarWhereInput
    data: XOR<LecturerUpdateManyMutationInput, LecturerUncheckedUpdateManyWithoutUserInput>
  }

  export type LecturerScalarWhereInput = {
    AND?: LecturerScalarWhereInput | LecturerScalarWhereInput[]
    OR?: LecturerScalarWhereInput[]
    NOT?: LecturerScalarWhereInput | LecturerScalarWhereInput[]
    id?: StringFilter<"Lecturer"> | string
    department?: StringFilter<"Lecturer"> | string
    userId?: StringFilter<"Lecturer"> | string
    createdAt?: DateTimeFilter<"Lecturer"> | Date | string
    updatedAt?: DateTimeFilter<"Lecturer"> | Date | string
  }

  export type AdminUpsertWithWhereUniqueWithoutUserInput = {
    where: AdminWhereUniqueInput
    update: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type AdminUpdateWithWhereUniqueWithoutUserInput = {
    where: AdminWhereUniqueInput
    data: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateManyWithWhereWithoutUserInput = {
    where: AdminScalarWhereInput
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyWithoutUserInput>
  }

  export type AdminScalarWhereInput = {
    AND?: AdminScalarWhereInput | AdminScalarWhereInput[]
    OR?: AdminScalarWhereInput[]
    NOT?: AdminScalarWhereInput | AdminScalarWhereInput[]
    id?: StringFilter<"Admin"> | string
    userId?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AlertUpsertWithWhereUniqueWithoutUserInput = {
    where: AlertWhereUniqueInput
    update: XOR<AlertUpdateWithoutUserInput, AlertUncheckedUpdateWithoutUserInput>
    create: XOR<AlertCreateWithoutUserInput, AlertUncheckedCreateWithoutUserInput>
  }

  export type AlertUpdateWithWhereUniqueWithoutUserInput = {
    where: AlertWhereUniqueInput
    data: XOR<AlertUpdateWithoutUserInput, AlertUncheckedUpdateWithoutUserInput>
  }

  export type AlertUpdateManyWithWhereWithoutUserInput = {
    where: AlertScalarWhereInput
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyWithoutUserInput>
  }

  export type AlertScalarWhereInput = {
    AND?: AlertScalarWhereInput | AlertScalarWhereInput[]
    OR?: AlertScalarWhereInput[]
    NOT?: AlertScalarWhereInput | AlertScalarWhereInput[]
    id?: StringFilter<"Alert"> | string
    userId?: StringFilter<"Alert"> | string
    message?: StringFilter<"Alert"> | string
    type?: EnumAlertTypeFilter<"Alert"> | $Enums.AlertType
    isRead?: BoolFilter<"Alert"> | boolean
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    updatedAt?: DateTimeFilter<"Alert"> | Date | string
  }

  export type TpApplicationCreateWithoutStudentInput = {
    id?: string
    schoolName: string
    position: string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutTpApplicationInput
  }

  export type TpApplicationUncheckedCreateWithoutStudentInput = {
    id?: string
    schoolName: string
    position: string
    startDate: Date | string
    endDate: Date | string
    schoolId: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TpApplicationCreateOrConnectWithoutStudentInput = {
    where: TpApplicationWhereUniqueInput
    create: XOR<TpApplicationCreateWithoutStudentInput, TpApplicationUncheckedCreateWithoutStudentInput>
  }

  export type TpApplicationCreateManyStudentInputEnvelope = {
    data: TpApplicationCreateManyStudentInput | TpApplicationCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type LessonPlanCreateWithoutStudentInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonPlanUncheckedCreateWithoutStudentInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonPlanCreateOrConnectWithoutStudentInput = {
    where: LessonPlanWhereUniqueInput
    create: XOR<LessonPlanCreateWithoutStudentInput, LessonPlanUncheckedCreateWithoutStudentInput>
  }

  export type LessonPlanCreateManyStudentInputEnvelope = {
    data: LessonPlanCreateManyStudentInput | LessonPlanCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type SupervisionVisitCreateWithoutStudentInput = {
    id?: string
    date: Date | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturer: LecturerCreateNestedOneWithoutSupervisionVisitInput
  }

  export type SupervisionVisitUncheckedCreateWithoutStudentInput = {
    id?: string
    lecturerId: string
    date: Date | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupervisionVisitCreateOrConnectWithoutStudentInput = {
    where: SupervisionVisitWhereUniqueInput
    create: XOR<SupervisionVisitCreateWithoutStudentInput, SupervisionVisitUncheckedCreateWithoutStudentInput>
  }

  export type SupervisionVisitCreateManyStudentInputEnvelope = {
    data: SupervisionVisitCreateManyStudentInput | SupervisionVisitCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type ReportCreateWithoutStudentInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturer: LecturerCreateNestedOneWithoutReportInput
  }

  export type ReportUncheckedCreateWithoutStudentInput = {
    id?: string
    title: string
    lecturerId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutStudentInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutStudentInput, ReportUncheckedCreateWithoutStudentInput>
  }

  export type ReportCreateManyStudentInputEnvelope = {
    data: ReportCreateManyStudentInput | ReportCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type FinalDocumentCreateWithoutStudentInput = {
    id?: string
    title: string
    content: string
    fileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinalDocumentUncheckedCreateWithoutStudentInput = {
    id?: string
    title: string
    content: string
    fileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinalDocumentCreateOrConnectWithoutStudentInput = {
    where: FinalDocumentWhereUniqueInput
    create: XOR<FinalDocumentCreateWithoutStudentInput, FinalDocumentUncheckedCreateWithoutStudentInput>
  }

  export type FinalDocumentCreateManyStudentInputEnvelope = {
    data: FinalDocumentCreateManyStudentInput | FinalDocumentCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type GradeCreateWithoutStudentInput = {
    id?: string
    score: number
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturer: LecturerCreateNestedOneWithoutGradeInput
  }

  export type GradeUncheckedCreateWithoutStudentInput = {
    id?: string
    lecturerId: string
    score: number
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GradeCreateOrConnectWithoutStudentInput = {
    where: GradeWhereUniqueInput
    create: XOR<GradeCreateWithoutStudentInput, GradeUncheckedCreateWithoutStudentInput>
  }

  export type GradeCreateManyStudentInputEnvelope = {
    data: GradeCreateManyStudentInput | GradeCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutStudentInput = {
    id?: string
    username: string
    fullName: string
    email: string
    role?: $Enums.Role
    password: string
    isActive?: boolean
    isVerified?: boolean
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturer?: LecturerCreateNestedManyWithoutUserInput
    admin?: AdminCreateNestedManyWithoutUserInput
    alert?: AlertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudentInput = {
    id?: string
    username: string
    fullName: string
    email: string
    role?: $Enums.Role
    password: string
    isActive?: boolean
    isVerified?: boolean
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturer?: LecturerUncheckedCreateNestedManyWithoutUserInput
    admin?: AdminUncheckedCreateNestedManyWithoutUserInput
    alert?: AlertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
  }

  export type TpApplicationUpsertWithWhereUniqueWithoutStudentInput = {
    where: TpApplicationWhereUniqueInput
    update: XOR<TpApplicationUpdateWithoutStudentInput, TpApplicationUncheckedUpdateWithoutStudentInput>
    create: XOR<TpApplicationCreateWithoutStudentInput, TpApplicationUncheckedCreateWithoutStudentInput>
  }

  export type TpApplicationUpdateWithWhereUniqueWithoutStudentInput = {
    where: TpApplicationWhereUniqueInput
    data: XOR<TpApplicationUpdateWithoutStudentInput, TpApplicationUncheckedUpdateWithoutStudentInput>
  }

  export type TpApplicationUpdateManyWithWhereWithoutStudentInput = {
    where: TpApplicationScalarWhereInput
    data: XOR<TpApplicationUpdateManyMutationInput, TpApplicationUncheckedUpdateManyWithoutStudentInput>
  }

  export type TpApplicationScalarWhereInput = {
    AND?: TpApplicationScalarWhereInput | TpApplicationScalarWhereInput[]
    OR?: TpApplicationScalarWhereInput[]
    NOT?: TpApplicationScalarWhereInput | TpApplicationScalarWhereInput[]
    id?: StringFilter<"TpApplication"> | string
    schoolName?: StringFilter<"TpApplication"> | string
    position?: StringFilter<"TpApplication"> | string
    startDate?: DateTimeFilter<"TpApplication"> | Date | string
    endDate?: DateTimeFilter<"TpApplication"> | Date | string
    studentId?: StringFilter<"TpApplication"> | string
    schoolId?: StringFilter<"TpApplication"> | string
    status?: EnumStatusFilter<"TpApplication"> | $Enums.Status
    createdAt?: DateTimeFilter<"TpApplication"> | Date | string
    updatedAt?: DateTimeFilter<"TpApplication"> | Date | string
  }

  export type LessonPlanUpsertWithWhereUniqueWithoutStudentInput = {
    where: LessonPlanWhereUniqueInput
    update: XOR<LessonPlanUpdateWithoutStudentInput, LessonPlanUncheckedUpdateWithoutStudentInput>
    create: XOR<LessonPlanCreateWithoutStudentInput, LessonPlanUncheckedCreateWithoutStudentInput>
  }

  export type LessonPlanUpdateWithWhereUniqueWithoutStudentInput = {
    where: LessonPlanWhereUniqueInput
    data: XOR<LessonPlanUpdateWithoutStudentInput, LessonPlanUncheckedUpdateWithoutStudentInput>
  }

  export type LessonPlanUpdateManyWithWhereWithoutStudentInput = {
    where: LessonPlanScalarWhereInput
    data: XOR<LessonPlanUpdateManyMutationInput, LessonPlanUncheckedUpdateManyWithoutStudentInput>
  }

  export type LessonPlanScalarWhereInput = {
    AND?: LessonPlanScalarWhereInput | LessonPlanScalarWhereInput[]
    OR?: LessonPlanScalarWhereInput[]
    NOT?: LessonPlanScalarWhereInput | LessonPlanScalarWhereInput[]
    id?: StringFilter<"LessonPlan"> | string
    studentId?: StringFilter<"LessonPlan"> | string
    title?: StringFilter<"LessonPlan"> | string
    description?: StringFilter<"LessonPlan"> | string
    createdAt?: DateTimeFilter<"LessonPlan"> | Date | string
    updatedAt?: DateTimeFilter<"LessonPlan"> | Date | string
  }

  export type SupervisionVisitUpsertWithWhereUniqueWithoutStudentInput = {
    where: SupervisionVisitWhereUniqueInput
    update: XOR<SupervisionVisitUpdateWithoutStudentInput, SupervisionVisitUncheckedUpdateWithoutStudentInput>
    create: XOR<SupervisionVisitCreateWithoutStudentInput, SupervisionVisitUncheckedCreateWithoutStudentInput>
  }

  export type SupervisionVisitUpdateWithWhereUniqueWithoutStudentInput = {
    where: SupervisionVisitWhereUniqueInput
    data: XOR<SupervisionVisitUpdateWithoutStudentInput, SupervisionVisitUncheckedUpdateWithoutStudentInput>
  }

  export type SupervisionVisitUpdateManyWithWhereWithoutStudentInput = {
    where: SupervisionVisitScalarWhereInput
    data: XOR<SupervisionVisitUpdateManyMutationInput, SupervisionVisitUncheckedUpdateManyWithoutStudentInput>
  }

  export type SupervisionVisitScalarWhereInput = {
    AND?: SupervisionVisitScalarWhereInput | SupervisionVisitScalarWhereInput[]
    OR?: SupervisionVisitScalarWhereInput[]
    NOT?: SupervisionVisitScalarWhereInput | SupervisionVisitScalarWhereInput[]
    id?: StringFilter<"SupervisionVisit"> | string
    studentId?: StringFilter<"SupervisionVisit"> | string
    lecturerId?: StringFilter<"SupervisionVisit"> | string
    date?: DateTimeFilter<"SupervisionVisit"> | Date | string
    notes?: StringNullableFilter<"SupervisionVisit"> | string | null
    createdAt?: DateTimeFilter<"SupervisionVisit"> | Date | string
    updatedAt?: DateTimeFilter<"SupervisionVisit"> | Date | string
  }

  export type ReportUpsertWithWhereUniqueWithoutStudentInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutStudentInput, ReportUncheckedUpdateWithoutStudentInput>
    create: XOR<ReportCreateWithoutStudentInput, ReportUncheckedCreateWithoutStudentInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutStudentInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutStudentInput, ReportUncheckedUpdateWithoutStudentInput>
  }

  export type ReportUpdateManyWithWhereWithoutStudentInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutStudentInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    id?: StringFilter<"Report"> | string
    title?: StringFilter<"Report"> | string
    studentId?: StringFilter<"Report"> | string
    lecturerId?: StringFilter<"Report"> | string
    content?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
  }

  export type FinalDocumentUpsertWithWhereUniqueWithoutStudentInput = {
    where: FinalDocumentWhereUniqueInput
    update: XOR<FinalDocumentUpdateWithoutStudentInput, FinalDocumentUncheckedUpdateWithoutStudentInput>
    create: XOR<FinalDocumentCreateWithoutStudentInput, FinalDocumentUncheckedCreateWithoutStudentInput>
  }

  export type FinalDocumentUpdateWithWhereUniqueWithoutStudentInput = {
    where: FinalDocumentWhereUniqueInput
    data: XOR<FinalDocumentUpdateWithoutStudentInput, FinalDocumentUncheckedUpdateWithoutStudentInput>
  }

  export type FinalDocumentUpdateManyWithWhereWithoutStudentInput = {
    where: FinalDocumentScalarWhereInput
    data: XOR<FinalDocumentUpdateManyMutationInput, FinalDocumentUncheckedUpdateManyWithoutStudentInput>
  }

  export type FinalDocumentScalarWhereInput = {
    AND?: FinalDocumentScalarWhereInput | FinalDocumentScalarWhereInput[]
    OR?: FinalDocumentScalarWhereInput[]
    NOT?: FinalDocumentScalarWhereInput | FinalDocumentScalarWhereInput[]
    id?: StringFilter<"FinalDocument"> | string
    studentId?: StringFilter<"FinalDocument"> | string
    title?: StringFilter<"FinalDocument"> | string
    content?: StringFilter<"FinalDocument"> | string
    fileUrl?: StringNullableFilter<"FinalDocument"> | string | null
    createdAt?: DateTimeFilter<"FinalDocument"> | Date | string
    updatedAt?: DateTimeFilter<"FinalDocument"> | Date | string
  }

  export type GradeUpsertWithWhereUniqueWithoutStudentInput = {
    where: GradeWhereUniqueInput
    update: XOR<GradeUpdateWithoutStudentInput, GradeUncheckedUpdateWithoutStudentInput>
    create: XOR<GradeCreateWithoutStudentInput, GradeUncheckedCreateWithoutStudentInput>
  }

  export type GradeUpdateWithWhereUniqueWithoutStudentInput = {
    where: GradeWhereUniqueInput
    data: XOR<GradeUpdateWithoutStudentInput, GradeUncheckedUpdateWithoutStudentInput>
  }

  export type GradeUpdateManyWithWhereWithoutStudentInput = {
    where: GradeScalarWhereInput
    data: XOR<GradeUpdateManyMutationInput, GradeUncheckedUpdateManyWithoutStudentInput>
  }

  export type GradeScalarWhereInput = {
    AND?: GradeScalarWhereInput | GradeScalarWhereInput[]
    OR?: GradeScalarWhereInput[]
    NOT?: GradeScalarWhereInput | GradeScalarWhereInput[]
    id?: StringFilter<"Grade"> | string
    studentId?: StringFilter<"Grade"> | string
    lecturerId?: StringFilter<"Grade"> | string
    score?: IntFilter<"Grade"> | number
    feedback?: StringNullableFilter<"Grade"> | string | null
    createdAt?: DateTimeFilter<"Grade"> | Date | string
    updatedAt?: DateTimeFilter<"Grade"> | Date | string
  }

  export type UserUpsertWithoutStudentInput = {
    update: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
  }

  export type UserUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUpdateManyWithoutUserNestedInput
    admin?: AdminUpdateManyWithoutUserNestedInput
    alert?: AlertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUncheckedUpdateManyWithoutUserNestedInput
    admin?: AdminUncheckedUpdateManyWithoutUserNestedInput
    alert?: AlertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LecturerZoneAssignedCreateWithoutLecturerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    zone: ZoneCreateNestedOneWithoutLecturerZoneAssignedInput
  }

  export type LecturerZoneAssignedUncheckedCreateWithoutLecturerInput = {
    id?: string
    zoneId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LecturerZoneAssignedCreateOrConnectWithoutLecturerInput = {
    where: LecturerZoneAssignedWhereUniqueInput
    create: XOR<LecturerZoneAssignedCreateWithoutLecturerInput, LecturerZoneAssignedUncheckedCreateWithoutLecturerInput>
  }

  export type LecturerZoneAssignedCreateManyLecturerInputEnvelope = {
    data: LecturerZoneAssignedCreateManyLecturerInput | LecturerZoneAssignedCreateManyLecturerInput[]
    skipDuplicates?: boolean
  }

  export type LecturerZoneRequestCreateWithoutLecturerInput = {
    id?: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    zone: ZoneCreateNestedOneWithoutLecturerZoneRequestInput
  }

  export type LecturerZoneRequestUncheckedCreateWithoutLecturerInput = {
    id?: string
    zoneId: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LecturerZoneRequestCreateOrConnectWithoutLecturerInput = {
    where: LecturerZoneRequestWhereUniqueInput
    create: XOR<LecturerZoneRequestCreateWithoutLecturerInput, LecturerZoneRequestUncheckedCreateWithoutLecturerInput>
  }

  export type LecturerZoneRequestCreateManyLecturerInputEnvelope = {
    data: LecturerZoneRequestCreateManyLecturerInput | LecturerZoneRequestCreateManyLecturerInput[]
    skipDuplicates?: boolean
  }

  export type SupervisionScheduleCreateWithoutLecturerInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupervisionScheduleUncheckedCreateWithoutLecturerInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupervisionScheduleCreateOrConnectWithoutLecturerInput = {
    where: SupervisionScheduleWhereUniqueInput
    create: XOR<SupervisionScheduleCreateWithoutLecturerInput, SupervisionScheduleUncheckedCreateWithoutLecturerInput>
  }

  export type SupervisionScheduleCreateManyLecturerInputEnvelope = {
    data: SupervisionScheduleCreateManyLecturerInput | SupervisionScheduleCreateManyLecturerInput[]
    skipDuplicates?: boolean
  }

  export type SupervisionVisitCreateWithoutLecturerInput = {
    id?: string
    date: Date | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutSupervisionVisitInput
  }

  export type SupervisionVisitUncheckedCreateWithoutLecturerInput = {
    id?: string
    studentId: string
    date: Date | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupervisionVisitCreateOrConnectWithoutLecturerInput = {
    where: SupervisionVisitWhereUniqueInput
    create: XOR<SupervisionVisitCreateWithoutLecturerInput, SupervisionVisitUncheckedCreateWithoutLecturerInput>
  }

  export type SupervisionVisitCreateManyLecturerInputEnvelope = {
    data: SupervisionVisitCreateManyLecturerInput | SupervisionVisitCreateManyLecturerInput[]
    skipDuplicates?: boolean
  }

  export type ReportCreateWithoutLecturerInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutReportInput
  }

  export type ReportUncheckedCreateWithoutLecturerInput = {
    id?: string
    title: string
    studentId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutLecturerInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutLecturerInput, ReportUncheckedCreateWithoutLecturerInput>
  }

  export type ReportCreateManyLecturerInputEnvelope = {
    data: ReportCreateManyLecturerInput | ReportCreateManyLecturerInput[]
    skipDuplicates?: boolean
  }

  export type GradeCreateWithoutLecturerInput = {
    id?: string
    score: number
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutGradeInput
  }

  export type GradeUncheckedCreateWithoutLecturerInput = {
    id?: string
    studentId: string
    score: number
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GradeCreateOrConnectWithoutLecturerInput = {
    where: GradeWhereUniqueInput
    create: XOR<GradeCreateWithoutLecturerInput, GradeUncheckedCreateWithoutLecturerInput>
  }

  export type GradeCreateManyLecturerInputEnvelope = {
    data: GradeCreateManyLecturerInput | GradeCreateManyLecturerInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutLecturerInput = {
    id?: string
    username: string
    fullName: string
    email: string
    role?: $Enums.Role
    password: string
    isActive?: boolean
    isVerified?: boolean
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentCreateNestedManyWithoutUserInput
    admin?: AdminCreateNestedManyWithoutUserInput
    alert?: AlertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLecturerInput = {
    id?: string
    username: string
    fullName: string
    email: string
    role?: $Enums.Role
    password: string
    isActive?: boolean
    isVerified?: boolean
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentUncheckedCreateNestedManyWithoutUserInput
    admin?: AdminUncheckedCreateNestedManyWithoutUserInput
    alert?: AlertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLecturerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLecturerInput, UserUncheckedCreateWithoutLecturerInput>
  }

  export type LecturerZoneAssignedUpsertWithWhereUniqueWithoutLecturerInput = {
    where: LecturerZoneAssignedWhereUniqueInput
    update: XOR<LecturerZoneAssignedUpdateWithoutLecturerInput, LecturerZoneAssignedUncheckedUpdateWithoutLecturerInput>
    create: XOR<LecturerZoneAssignedCreateWithoutLecturerInput, LecturerZoneAssignedUncheckedCreateWithoutLecturerInput>
  }

  export type LecturerZoneAssignedUpdateWithWhereUniqueWithoutLecturerInput = {
    where: LecturerZoneAssignedWhereUniqueInput
    data: XOR<LecturerZoneAssignedUpdateWithoutLecturerInput, LecturerZoneAssignedUncheckedUpdateWithoutLecturerInput>
  }

  export type LecturerZoneAssignedUpdateManyWithWhereWithoutLecturerInput = {
    where: LecturerZoneAssignedScalarWhereInput
    data: XOR<LecturerZoneAssignedUpdateManyMutationInput, LecturerZoneAssignedUncheckedUpdateManyWithoutLecturerInput>
  }

  export type LecturerZoneAssignedScalarWhereInput = {
    AND?: LecturerZoneAssignedScalarWhereInput | LecturerZoneAssignedScalarWhereInput[]
    OR?: LecturerZoneAssignedScalarWhereInput[]
    NOT?: LecturerZoneAssignedScalarWhereInput | LecturerZoneAssignedScalarWhereInput[]
    id?: StringFilter<"LecturerZoneAssigned"> | string
    lecturerId?: StringFilter<"LecturerZoneAssigned"> | string
    zoneId?: StringFilter<"LecturerZoneAssigned"> | string
    createdAt?: DateTimeFilter<"LecturerZoneAssigned"> | Date | string
    updatedAt?: DateTimeFilter<"LecturerZoneAssigned"> | Date | string
  }

  export type LecturerZoneRequestUpsertWithWhereUniqueWithoutLecturerInput = {
    where: LecturerZoneRequestWhereUniqueInput
    update: XOR<LecturerZoneRequestUpdateWithoutLecturerInput, LecturerZoneRequestUncheckedUpdateWithoutLecturerInput>
    create: XOR<LecturerZoneRequestCreateWithoutLecturerInput, LecturerZoneRequestUncheckedCreateWithoutLecturerInput>
  }

  export type LecturerZoneRequestUpdateWithWhereUniqueWithoutLecturerInput = {
    where: LecturerZoneRequestWhereUniqueInput
    data: XOR<LecturerZoneRequestUpdateWithoutLecturerInput, LecturerZoneRequestUncheckedUpdateWithoutLecturerInput>
  }

  export type LecturerZoneRequestUpdateManyWithWhereWithoutLecturerInput = {
    where: LecturerZoneRequestScalarWhereInput
    data: XOR<LecturerZoneRequestUpdateManyMutationInput, LecturerZoneRequestUncheckedUpdateManyWithoutLecturerInput>
  }

  export type LecturerZoneRequestScalarWhereInput = {
    AND?: LecturerZoneRequestScalarWhereInput | LecturerZoneRequestScalarWhereInput[]
    OR?: LecturerZoneRequestScalarWhereInput[]
    NOT?: LecturerZoneRequestScalarWhereInput | LecturerZoneRequestScalarWhereInput[]
    id?: StringFilter<"LecturerZoneRequest"> | string
    lecturerId?: StringFilter<"LecturerZoneRequest"> | string
    zoneId?: StringFilter<"LecturerZoneRequest"> | string
    status?: EnumStatusFilter<"LecturerZoneRequest"> | $Enums.Status
    createdAt?: DateTimeFilter<"LecturerZoneRequest"> | Date | string
    updatedAt?: DateTimeFilter<"LecturerZoneRequest"> | Date | string
  }

  export type SupervisionScheduleUpsertWithWhereUniqueWithoutLecturerInput = {
    where: SupervisionScheduleWhereUniqueInput
    update: XOR<SupervisionScheduleUpdateWithoutLecturerInput, SupervisionScheduleUncheckedUpdateWithoutLecturerInput>
    create: XOR<SupervisionScheduleCreateWithoutLecturerInput, SupervisionScheduleUncheckedCreateWithoutLecturerInput>
  }

  export type SupervisionScheduleUpdateWithWhereUniqueWithoutLecturerInput = {
    where: SupervisionScheduleWhereUniqueInput
    data: XOR<SupervisionScheduleUpdateWithoutLecturerInput, SupervisionScheduleUncheckedUpdateWithoutLecturerInput>
  }

  export type SupervisionScheduleUpdateManyWithWhereWithoutLecturerInput = {
    where: SupervisionScheduleScalarWhereInput
    data: XOR<SupervisionScheduleUpdateManyMutationInput, SupervisionScheduleUncheckedUpdateManyWithoutLecturerInput>
  }

  export type SupervisionScheduleScalarWhereInput = {
    AND?: SupervisionScheduleScalarWhereInput | SupervisionScheduleScalarWhereInput[]
    OR?: SupervisionScheduleScalarWhereInput[]
    NOT?: SupervisionScheduleScalarWhereInput | SupervisionScheduleScalarWhereInput[]
    id?: StringFilter<"SupervisionSchedule"> | string
    lecturerId?: StringFilter<"SupervisionSchedule"> | string
    startDate?: DateTimeFilter<"SupervisionSchedule"> | Date | string
    endDate?: DateTimeFilter<"SupervisionSchedule"> | Date | string
    createdAt?: DateTimeFilter<"SupervisionSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"SupervisionSchedule"> | Date | string
  }

  export type SupervisionVisitUpsertWithWhereUniqueWithoutLecturerInput = {
    where: SupervisionVisitWhereUniqueInput
    update: XOR<SupervisionVisitUpdateWithoutLecturerInput, SupervisionVisitUncheckedUpdateWithoutLecturerInput>
    create: XOR<SupervisionVisitCreateWithoutLecturerInput, SupervisionVisitUncheckedCreateWithoutLecturerInput>
  }

  export type SupervisionVisitUpdateWithWhereUniqueWithoutLecturerInput = {
    where: SupervisionVisitWhereUniqueInput
    data: XOR<SupervisionVisitUpdateWithoutLecturerInput, SupervisionVisitUncheckedUpdateWithoutLecturerInput>
  }

  export type SupervisionVisitUpdateManyWithWhereWithoutLecturerInput = {
    where: SupervisionVisitScalarWhereInput
    data: XOR<SupervisionVisitUpdateManyMutationInput, SupervisionVisitUncheckedUpdateManyWithoutLecturerInput>
  }

  export type ReportUpsertWithWhereUniqueWithoutLecturerInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutLecturerInput, ReportUncheckedUpdateWithoutLecturerInput>
    create: XOR<ReportCreateWithoutLecturerInput, ReportUncheckedCreateWithoutLecturerInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutLecturerInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutLecturerInput, ReportUncheckedUpdateWithoutLecturerInput>
  }

  export type ReportUpdateManyWithWhereWithoutLecturerInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutLecturerInput>
  }

  export type GradeUpsertWithWhereUniqueWithoutLecturerInput = {
    where: GradeWhereUniqueInput
    update: XOR<GradeUpdateWithoutLecturerInput, GradeUncheckedUpdateWithoutLecturerInput>
    create: XOR<GradeCreateWithoutLecturerInput, GradeUncheckedCreateWithoutLecturerInput>
  }

  export type GradeUpdateWithWhereUniqueWithoutLecturerInput = {
    where: GradeWhereUniqueInput
    data: XOR<GradeUpdateWithoutLecturerInput, GradeUncheckedUpdateWithoutLecturerInput>
  }

  export type GradeUpdateManyWithWhereWithoutLecturerInput = {
    where: GradeScalarWhereInput
    data: XOR<GradeUpdateManyMutationInput, GradeUncheckedUpdateManyWithoutLecturerInput>
  }

  export type UserUpsertWithoutLecturerInput = {
    update: XOR<UserUpdateWithoutLecturerInput, UserUncheckedUpdateWithoutLecturerInput>
    create: XOR<UserCreateWithoutLecturerInput, UserUncheckedCreateWithoutLecturerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLecturerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLecturerInput, UserUncheckedUpdateWithoutLecturerInput>
  }

  export type UserUpdateWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateManyWithoutUserNestedInput
    admin?: AdminUpdateManyWithoutUserNestedInput
    alert?: AlertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUncheckedUpdateManyWithoutUserNestedInput
    admin?: AdminUncheckedUpdateManyWithoutUserNestedInput
    alert?: AlertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAdminInput = {
    id?: string
    username: string
    fullName: string
    email: string
    role?: $Enums.Role
    password: string
    isActive?: boolean
    isVerified?: boolean
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentCreateNestedManyWithoutUserInput
    lecturer?: LecturerCreateNestedManyWithoutUserInput
    alert?: AlertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdminInput = {
    id?: string
    username: string
    fullName: string
    email: string
    role?: $Enums.Role
    password: string
    isActive?: boolean
    isVerified?: boolean
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentUncheckedCreateNestedManyWithoutUserInput
    lecturer?: LecturerUncheckedCreateNestedManyWithoutUserInput
    alert?: AlertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdminInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
  }

  export type UserUpsertWithoutAdminInput = {
    update: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
  }

  export type UserUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateManyWithoutUserNestedInput
    lecturer?: LecturerUpdateManyWithoutUserNestedInput
    alert?: AlertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUncheckedUpdateManyWithoutUserNestedInput
    lecturer?: LecturerUncheckedUpdateManyWithoutUserNestedInput
    alert?: AlertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SchoolCreateWithoutZoneInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tpApplication?: TpApplicationCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutZoneInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tpApplication?: TpApplicationUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutZoneInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutZoneInput, SchoolUncheckedCreateWithoutZoneInput>
  }

  export type SchoolCreateManyZoneInputEnvelope = {
    data: SchoolCreateManyZoneInput | SchoolCreateManyZoneInput[]
    skipDuplicates?: boolean
  }

  export type LecturerZoneRequestCreateWithoutZoneInput = {
    id?: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturer: LecturerCreateNestedOneWithoutLecturerZoneRequestInput
  }

  export type LecturerZoneRequestUncheckedCreateWithoutZoneInput = {
    id?: string
    lecturerId: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LecturerZoneRequestCreateOrConnectWithoutZoneInput = {
    where: LecturerZoneRequestWhereUniqueInput
    create: XOR<LecturerZoneRequestCreateWithoutZoneInput, LecturerZoneRequestUncheckedCreateWithoutZoneInput>
  }

  export type LecturerZoneRequestCreateManyZoneInputEnvelope = {
    data: LecturerZoneRequestCreateManyZoneInput | LecturerZoneRequestCreateManyZoneInput[]
    skipDuplicates?: boolean
  }

  export type LecturerZoneAssignedCreateWithoutZoneInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturer: LecturerCreateNestedOneWithoutLecturerZoneAssignedInput
  }

  export type LecturerZoneAssignedUncheckedCreateWithoutZoneInput = {
    id?: string
    lecturerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LecturerZoneAssignedCreateOrConnectWithoutZoneInput = {
    where: LecturerZoneAssignedWhereUniqueInput
    create: XOR<LecturerZoneAssignedCreateWithoutZoneInput, LecturerZoneAssignedUncheckedCreateWithoutZoneInput>
  }

  export type LecturerZoneAssignedCreateManyZoneInputEnvelope = {
    data: LecturerZoneAssignedCreateManyZoneInput | LecturerZoneAssignedCreateManyZoneInput[]
    skipDuplicates?: boolean
  }

  export type SchoolUpsertWithWhereUniqueWithoutZoneInput = {
    where: SchoolWhereUniqueInput
    update: XOR<SchoolUpdateWithoutZoneInput, SchoolUncheckedUpdateWithoutZoneInput>
    create: XOR<SchoolCreateWithoutZoneInput, SchoolUncheckedCreateWithoutZoneInput>
  }

  export type SchoolUpdateWithWhereUniqueWithoutZoneInput = {
    where: SchoolWhereUniqueInput
    data: XOR<SchoolUpdateWithoutZoneInput, SchoolUncheckedUpdateWithoutZoneInput>
  }

  export type SchoolUpdateManyWithWhereWithoutZoneInput = {
    where: SchoolScalarWhereInput
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyWithoutZoneInput>
  }

  export type SchoolScalarWhereInput = {
    AND?: SchoolScalarWhereInput | SchoolScalarWhereInput[]
    OR?: SchoolScalarWhereInput[]
    NOT?: SchoolScalarWhereInput | SchoolScalarWhereInput[]
    id?: StringFilter<"School"> | string
    name?: StringFilter<"School"> | string
    zoneId?: StringFilter<"School"> | string
    createdAt?: DateTimeFilter<"School"> | Date | string
    updatedAt?: DateTimeFilter<"School"> | Date | string
  }

  export type LecturerZoneRequestUpsertWithWhereUniqueWithoutZoneInput = {
    where: LecturerZoneRequestWhereUniqueInput
    update: XOR<LecturerZoneRequestUpdateWithoutZoneInput, LecturerZoneRequestUncheckedUpdateWithoutZoneInput>
    create: XOR<LecturerZoneRequestCreateWithoutZoneInput, LecturerZoneRequestUncheckedCreateWithoutZoneInput>
  }

  export type LecturerZoneRequestUpdateWithWhereUniqueWithoutZoneInput = {
    where: LecturerZoneRequestWhereUniqueInput
    data: XOR<LecturerZoneRequestUpdateWithoutZoneInput, LecturerZoneRequestUncheckedUpdateWithoutZoneInput>
  }

  export type LecturerZoneRequestUpdateManyWithWhereWithoutZoneInput = {
    where: LecturerZoneRequestScalarWhereInput
    data: XOR<LecturerZoneRequestUpdateManyMutationInput, LecturerZoneRequestUncheckedUpdateManyWithoutZoneInput>
  }

  export type LecturerZoneAssignedUpsertWithWhereUniqueWithoutZoneInput = {
    where: LecturerZoneAssignedWhereUniqueInput
    update: XOR<LecturerZoneAssignedUpdateWithoutZoneInput, LecturerZoneAssignedUncheckedUpdateWithoutZoneInput>
    create: XOR<LecturerZoneAssignedCreateWithoutZoneInput, LecturerZoneAssignedUncheckedCreateWithoutZoneInput>
  }

  export type LecturerZoneAssignedUpdateWithWhereUniqueWithoutZoneInput = {
    where: LecturerZoneAssignedWhereUniqueInput
    data: XOR<LecturerZoneAssignedUpdateWithoutZoneInput, LecturerZoneAssignedUncheckedUpdateWithoutZoneInput>
  }

  export type LecturerZoneAssignedUpdateManyWithWhereWithoutZoneInput = {
    where: LecturerZoneAssignedScalarWhereInput
    data: XOR<LecturerZoneAssignedUpdateManyMutationInput, LecturerZoneAssignedUncheckedUpdateManyWithoutZoneInput>
  }

  export type TpApplicationCreateWithoutSchoolInput = {
    id?: string
    schoolName: string
    position: string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutTpApplicationInput
  }

  export type TpApplicationUncheckedCreateWithoutSchoolInput = {
    id?: string
    schoolName: string
    position: string
    startDate: Date | string
    endDate: Date | string
    studentId: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TpApplicationCreateOrConnectWithoutSchoolInput = {
    where: TpApplicationWhereUniqueInput
    create: XOR<TpApplicationCreateWithoutSchoolInput, TpApplicationUncheckedCreateWithoutSchoolInput>
  }

  export type TpApplicationCreateManySchoolInputEnvelope = {
    data: TpApplicationCreateManySchoolInput | TpApplicationCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type ZoneCreateWithoutSchoolsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturerZoneRequest?: LecturerZoneRequestCreateNestedManyWithoutZoneInput
    lecturerZoneAssigned?: LecturerZoneAssignedCreateNestedManyWithoutZoneInput
  }

  export type ZoneUncheckedCreateWithoutSchoolsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturerZoneRequest?: LecturerZoneRequestUncheckedCreateNestedManyWithoutZoneInput
    lecturerZoneAssigned?: LecturerZoneAssignedUncheckedCreateNestedManyWithoutZoneInput
  }

  export type ZoneCreateOrConnectWithoutSchoolsInput = {
    where: ZoneWhereUniqueInput
    create: XOR<ZoneCreateWithoutSchoolsInput, ZoneUncheckedCreateWithoutSchoolsInput>
  }

  export type TpApplicationUpsertWithWhereUniqueWithoutSchoolInput = {
    where: TpApplicationWhereUniqueInput
    update: XOR<TpApplicationUpdateWithoutSchoolInput, TpApplicationUncheckedUpdateWithoutSchoolInput>
    create: XOR<TpApplicationCreateWithoutSchoolInput, TpApplicationUncheckedCreateWithoutSchoolInput>
  }

  export type TpApplicationUpdateWithWhereUniqueWithoutSchoolInput = {
    where: TpApplicationWhereUniqueInput
    data: XOR<TpApplicationUpdateWithoutSchoolInput, TpApplicationUncheckedUpdateWithoutSchoolInput>
  }

  export type TpApplicationUpdateManyWithWhereWithoutSchoolInput = {
    where: TpApplicationScalarWhereInput
    data: XOR<TpApplicationUpdateManyMutationInput, TpApplicationUncheckedUpdateManyWithoutSchoolInput>
  }

  export type ZoneUpsertWithoutSchoolsInput = {
    update: XOR<ZoneUpdateWithoutSchoolsInput, ZoneUncheckedUpdateWithoutSchoolsInput>
    create: XOR<ZoneCreateWithoutSchoolsInput, ZoneUncheckedCreateWithoutSchoolsInput>
    where?: ZoneWhereInput
  }

  export type ZoneUpdateToOneWithWhereWithoutSchoolsInput = {
    where?: ZoneWhereInput
    data: XOR<ZoneUpdateWithoutSchoolsInput, ZoneUncheckedUpdateWithoutSchoolsInput>
  }

  export type ZoneUpdateWithoutSchoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturerZoneRequest?: LecturerZoneRequestUpdateManyWithoutZoneNestedInput
    lecturerZoneAssigned?: LecturerZoneAssignedUpdateManyWithoutZoneNestedInput
  }

  export type ZoneUncheckedUpdateWithoutSchoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturerZoneRequest?: LecturerZoneRequestUncheckedUpdateManyWithoutZoneNestedInput
    lecturerZoneAssigned?: LecturerZoneAssignedUncheckedUpdateManyWithoutZoneNestedInput
  }

  export type StudentCreateWithoutTpApplicationInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lessonPlan?: LessonPlanCreateNestedManyWithoutStudentInput
    supervisionVisit?: SupervisionVisitCreateNestedManyWithoutStudentInput
    report?: ReportCreateNestedManyWithoutStudentInput
    finalDocument?: FinalDocumentCreateNestedManyWithoutStudentInput
    grade?: GradeCreateNestedManyWithoutStudentInput
    user: UserCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutTpApplicationInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lessonPlan?: LessonPlanUncheckedCreateNestedManyWithoutStudentInput
    supervisionVisit?: SupervisionVisitUncheckedCreateNestedManyWithoutStudentInput
    report?: ReportUncheckedCreateNestedManyWithoutStudentInput
    finalDocument?: FinalDocumentUncheckedCreateNestedManyWithoutStudentInput
    grade?: GradeUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutTpApplicationInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutTpApplicationInput, StudentUncheckedCreateWithoutTpApplicationInput>
  }

  export type SchoolCreateWithoutTpApplicationInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    zone: ZoneCreateNestedOneWithoutSchoolsInput
  }

  export type SchoolUncheckedCreateWithoutTpApplicationInput = {
    id?: string
    name: string
    zoneId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolCreateOrConnectWithoutTpApplicationInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutTpApplicationInput, SchoolUncheckedCreateWithoutTpApplicationInput>
  }

  export type StudentUpsertWithoutTpApplicationInput = {
    update: XOR<StudentUpdateWithoutTpApplicationInput, StudentUncheckedUpdateWithoutTpApplicationInput>
    create: XOR<StudentCreateWithoutTpApplicationInput, StudentUncheckedCreateWithoutTpApplicationInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutTpApplicationInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutTpApplicationInput, StudentUncheckedUpdateWithoutTpApplicationInput>
  }

  export type StudentUpdateWithoutTpApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessonPlan?: LessonPlanUpdateManyWithoutStudentNestedInput
    supervisionVisit?: SupervisionVisitUpdateManyWithoutStudentNestedInput
    report?: ReportUpdateManyWithoutStudentNestedInput
    finalDocument?: FinalDocumentUpdateManyWithoutStudentNestedInput
    grade?: GradeUpdateManyWithoutStudentNestedInput
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutTpApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessonPlan?: LessonPlanUncheckedUpdateManyWithoutStudentNestedInput
    supervisionVisit?: SupervisionVisitUncheckedUpdateManyWithoutStudentNestedInput
    report?: ReportUncheckedUpdateManyWithoutStudentNestedInput
    finalDocument?: FinalDocumentUncheckedUpdateManyWithoutStudentNestedInput
    grade?: GradeUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type SchoolUpsertWithoutTpApplicationInput = {
    update: XOR<SchoolUpdateWithoutTpApplicationInput, SchoolUncheckedUpdateWithoutTpApplicationInput>
    create: XOR<SchoolCreateWithoutTpApplicationInput, SchoolUncheckedCreateWithoutTpApplicationInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutTpApplicationInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutTpApplicationInput, SchoolUncheckedUpdateWithoutTpApplicationInput>
  }

  export type SchoolUpdateWithoutTpApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zone?: ZoneUpdateOneRequiredWithoutSchoolsNestedInput
  }

  export type SchoolUncheckedUpdateWithoutTpApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LecturerCreateWithoutLecturerZoneAssignedInput = {
    id?: string
    department: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturerZoneRequest?: LecturerZoneRequestCreateNestedManyWithoutLecturerInput
    supervisionSchedule?: SupervisionScheduleCreateNestedManyWithoutLecturerInput
    supervisionVisit?: SupervisionVisitCreateNestedManyWithoutLecturerInput
    report?: ReportCreateNestedManyWithoutLecturerInput
    grade?: GradeCreateNestedManyWithoutLecturerInput
    user: UserCreateNestedOneWithoutLecturerInput
  }

  export type LecturerUncheckedCreateWithoutLecturerZoneAssignedInput = {
    id?: string
    department: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturerZoneRequest?: LecturerZoneRequestUncheckedCreateNestedManyWithoutLecturerInput
    supervisionSchedule?: SupervisionScheduleUncheckedCreateNestedManyWithoutLecturerInput
    supervisionVisit?: SupervisionVisitUncheckedCreateNestedManyWithoutLecturerInput
    report?: ReportUncheckedCreateNestedManyWithoutLecturerInput
    grade?: GradeUncheckedCreateNestedManyWithoutLecturerInput
  }

  export type LecturerCreateOrConnectWithoutLecturerZoneAssignedInput = {
    where: LecturerWhereUniqueInput
    create: XOR<LecturerCreateWithoutLecturerZoneAssignedInput, LecturerUncheckedCreateWithoutLecturerZoneAssignedInput>
  }

  export type ZoneCreateWithoutLecturerZoneAssignedInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schools?: SchoolCreateNestedManyWithoutZoneInput
    lecturerZoneRequest?: LecturerZoneRequestCreateNestedManyWithoutZoneInput
  }

  export type ZoneUncheckedCreateWithoutLecturerZoneAssignedInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schools?: SchoolUncheckedCreateNestedManyWithoutZoneInput
    lecturerZoneRequest?: LecturerZoneRequestUncheckedCreateNestedManyWithoutZoneInput
  }

  export type ZoneCreateOrConnectWithoutLecturerZoneAssignedInput = {
    where: ZoneWhereUniqueInput
    create: XOR<ZoneCreateWithoutLecturerZoneAssignedInput, ZoneUncheckedCreateWithoutLecturerZoneAssignedInput>
  }

  export type LecturerUpsertWithoutLecturerZoneAssignedInput = {
    update: XOR<LecturerUpdateWithoutLecturerZoneAssignedInput, LecturerUncheckedUpdateWithoutLecturerZoneAssignedInput>
    create: XOR<LecturerCreateWithoutLecturerZoneAssignedInput, LecturerUncheckedCreateWithoutLecturerZoneAssignedInput>
    where?: LecturerWhereInput
  }

  export type LecturerUpdateToOneWithWhereWithoutLecturerZoneAssignedInput = {
    where?: LecturerWhereInput
    data: XOR<LecturerUpdateWithoutLecturerZoneAssignedInput, LecturerUncheckedUpdateWithoutLecturerZoneAssignedInput>
  }

  export type LecturerUpdateWithoutLecturerZoneAssignedInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturerZoneRequest?: LecturerZoneRequestUpdateManyWithoutLecturerNestedInput
    supervisionSchedule?: SupervisionScheduleUpdateManyWithoutLecturerNestedInput
    supervisionVisit?: SupervisionVisitUpdateManyWithoutLecturerNestedInput
    report?: ReportUpdateManyWithoutLecturerNestedInput
    grade?: GradeUpdateManyWithoutLecturerNestedInput
    user?: UserUpdateOneRequiredWithoutLecturerNestedInput
  }

  export type LecturerUncheckedUpdateWithoutLecturerZoneAssignedInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturerZoneRequest?: LecturerZoneRequestUncheckedUpdateManyWithoutLecturerNestedInput
    supervisionSchedule?: SupervisionScheduleUncheckedUpdateManyWithoutLecturerNestedInput
    supervisionVisit?: SupervisionVisitUncheckedUpdateManyWithoutLecturerNestedInput
    report?: ReportUncheckedUpdateManyWithoutLecturerNestedInput
    grade?: GradeUncheckedUpdateManyWithoutLecturerNestedInput
  }

  export type ZoneUpsertWithoutLecturerZoneAssignedInput = {
    update: XOR<ZoneUpdateWithoutLecturerZoneAssignedInput, ZoneUncheckedUpdateWithoutLecturerZoneAssignedInput>
    create: XOR<ZoneCreateWithoutLecturerZoneAssignedInput, ZoneUncheckedCreateWithoutLecturerZoneAssignedInput>
    where?: ZoneWhereInput
  }

  export type ZoneUpdateToOneWithWhereWithoutLecturerZoneAssignedInput = {
    where?: ZoneWhereInput
    data: XOR<ZoneUpdateWithoutLecturerZoneAssignedInput, ZoneUncheckedUpdateWithoutLecturerZoneAssignedInput>
  }

  export type ZoneUpdateWithoutLecturerZoneAssignedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schools?: SchoolUpdateManyWithoutZoneNestedInput
    lecturerZoneRequest?: LecturerZoneRequestUpdateManyWithoutZoneNestedInput
  }

  export type ZoneUncheckedUpdateWithoutLecturerZoneAssignedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schools?: SchoolUncheckedUpdateManyWithoutZoneNestedInput
    lecturerZoneRequest?: LecturerZoneRequestUncheckedUpdateManyWithoutZoneNestedInput
  }

  export type LecturerCreateWithoutLecturerZoneRequestInput = {
    id?: string
    department: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturerZoneAssigned?: LecturerZoneAssignedCreateNestedManyWithoutLecturerInput
    supervisionSchedule?: SupervisionScheduleCreateNestedManyWithoutLecturerInput
    supervisionVisit?: SupervisionVisitCreateNestedManyWithoutLecturerInput
    report?: ReportCreateNestedManyWithoutLecturerInput
    grade?: GradeCreateNestedManyWithoutLecturerInput
    user: UserCreateNestedOneWithoutLecturerInput
  }

  export type LecturerUncheckedCreateWithoutLecturerZoneRequestInput = {
    id?: string
    department: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturerZoneAssigned?: LecturerZoneAssignedUncheckedCreateNestedManyWithoutLecturerInput
    supervisionSchedule?: SupervisionScheduleUncheckedCreateNestedManyWithoutLecturerInput
    supervisionVisit?: SupervisionVisitUncheckedCreateNestedManyWithoutLecturerInput
    report?: ReportUncheckedCreateNestedManyWithoutLecturerInput
    grade?: GradeUncheckedCreateNestedManyWithoutLecturerInput
  }

  export type LecturerCreateOrConnectWithoutLecturerZoneRequestInput = {
    where: LecturerWhereUniqueInput
    create: XOR<LecturerCreateWithoutLecturerZoneRequestInput, LecturerUncheckedCreateWithoutLecturerZoneRequestInput>
  }

  export type ZoneCreateWithoutLecturerZoneRequestInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schools?: SchoolCreateNestedManyWithoutZoneInput
    lecturerZoneAssigned?: LecturerZoneAssignedCreateNestedManyWithoutZoneInput
  }

  export type ZoneUncheckedCreateWithoutLecturerZoneRequestInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schools?: SchoolUncheckedCreateNestedManyWithoutZoneInput
    lecturerZoneAssigned?: LecturerZoneAssignedUncheckedCreateNestedManyWithoutZoneInput
  }

  export type ZoneCreateOrConnectWithoutLecturerZoneRequestInput = {
    where: ZoneWhereUniqueInput
    create: XOR<ZoneCreateWithoutLecturerZoneRequestInput, ZoneUncheckedCreateWithoutLecturerZoneRequestInput>
  }

  export type LecturerUpsertWithoutLecturerZoneRequestInput = {
    update: XOR<LecturerUpdateWithoutLecturerZoneRequestInput, LecturerUncheckedUpdateWithoutLecturerZoneRequestInput>
    create: XOR<LecturerCreateWithoutLecturerZoneRequestInput, LecturerUncheckedCreateWithoutLecturerZoneRequestInput>
    where?: LecturerWhereInput
  }

  export type LecturerUpdateToOneWithWhereWithoutLecturerZoneRequestInput = {
    where?: LecturerWhereInput
    data: XOR<LecturerUpdateWithoutLecturerZoneRequestInput, LecturerUncheckedUpdateWithoutLecturerZoneRequestInput>
  }

  export type LecturerUpdateWithoutLecturerZoneRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturerZoneAssigned?: LecturerZoneAssignedUpdateManyWithoutLecturerNestedInput
    supervisionSchedule?: SupervisionScheduleUpdateManyWithoutLecturerNestedInput
    supervisionVisit?: SupervisionVisitUpdateManyWithoutLecturerNestedInput
    report?: ReportUpdateManyWithoutLecturerNestedInput
    grade?: GradeUpdateManyWithoutLecturerNestedInput
    user?: UserUpdateOneRequiredWithoutLecturerNestedInput
  }

  export type LecturerUncheckedUpdateWithoutLecturerZoneRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturerZoneAssigned?: LecturerZoneAssignedUncheckedUpdateManyWithoutLecturerNestedInput
    supervisionSchedule?: SupervisionScheduleUncheckedUpdateManyWithoutLecturerNestedInput
    supervisionVisit?: SupervisionVisitUncheckedUpdateManyWithoutLecturerNestedInput
    report?: ReportUncheckedUpdateManyWithoutLecturerNestedInput
    grade?: GradeUncheckedUpdateManyWithoutLecturerNestedInput
  }

  export type ZoneUpsertWithoutLecturerZoneRequestInput = {
    update: XOR<ZoneUpdateWithoutLecturerZoneRequestInput, ZoneUncheckedUpdateWithoutLecturerZoneRequestInput>
    create: XOR<ZoneCreateWithoutLecturerZoneRequestInput, ZoneUncheckedCreateWithoutLecturerZoneRequestInput>
    where?: ZoneWhereInput
  }

  export type ZoneUpdateToOneWithWhereWithoutLecturerZoneRequestInput = {
    where?: ZoneWhereInput
    data: XOR<ZoneUpdateWithoutLecturerZoneRequestInput, ZoneUncheckedUpdateWithoutLecturerZoneRequestInput>
  }

  export type ZoneUpdateWithoutLecturerZoneRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schools?: SchoolUpdateManyWithoutZoneNestedInput
    lecturerZoneAssigned?: LecturerZoneAssignedUpdateManyWithoutZoneNestedInput
  }

  export type ZoneUncheckedUpdateWithoutLecturerZoneRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schools?: SchoolUncheckedUpdateManyWithoutZoneNestedInput
    lecturerZoneAssigned?: LecturerZoneAssignedUncheckedUpdateManyWithoutZoneNestedInput
  }

  export type LecturerCreateWithoutSupervisionScheduleInput = {
    id?: string
    department: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturerZoneAssigned?: LecturerZoneAssignedCreateNestedManyWithoutLecturerInput
    lecturerZoneRequest?: LecturerZoneRequestCreateNestedManyWithoutLecturerInput
    supervisionVisit?: SupervisionVisitCreateNestedManyWithoutLecturerInput
    report?: ReportCreateNestedManyWithoutLecturerInput
    grade?: GradeCreateNestedManyWithoutLecturerInput
    user: UserCreateNestedOneWithoutLecturerInput
  }

  export type LecturerUncheckedCreateWithoutSupervisionScheduleInput = {
    id?: string
    department: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturerZoneAssigned?: LecturerZoneAssignedUncheckedCreateNestedManyWithoutLecturerInput
    lecturerZoneRequest?: LecturerZoneRequestUncheckedCreateNestedManyWithoutLecturerInput
    supervisionVisit?: SupervisionVisitUncheckedCreateNestedManyWithoutLecturerInput
    report?: ReportUncheckedCreateNestedManyWithoutLecturerInput
    grade?: GradeUncheckedCreateNestedManyWithoutLecturerInput
  }

  export type LecturerCreateOrConnectWithoutSupervisionScheduleInput = {
    where: LecturerWhereUniqueInput
    create: XOR<LecturerCreateWithoutSupervisionScheduleInput, LecturerUncheckedCreateWithoutSupervisionScheduleInput>
  }

  export type LecturerUpsertWithoutSupervisionScheduleInput = {
    update: XOR<LecturerUpdateWithoutSupervisionScheduleInput, LecturerUncheckedUpdateWithoutSupervisionScheduleInput>
    create: XOR<LecturerCreateWithoutSupervisionScheduleInput, LecturerUncheckedCreateWithoutSupervisionScheduleInput>
    where?: LecturerWhereInput
  }

  export type LecturerUpdateToOneWithWhereWithoutSupervisionScheduleInput = {
    where?: LecturerWhereInput
    data: XOR<LecturerUpdateWithoutSupervisionScheduleInput, LecturerUncheckedUpdateWithoutSupervisionScheduleInput>
  }

  export type LecturerUpdateWithoutSupervisionScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturerZoneAssigned?: LecturerZoneAssignedUpdateManyWithoutLecturerNestedInput
    lecturerZoneRequest?: LecturerZoneRequestUpdateManyWithoutLecturerNestedInput
    supervisionVisit?: SupervisionVisitUpdateManyWithoutLecturerNestedInput
    report?: ReportUpdateManyWithoutLecturerNestedInput
    grade?: GradeUpdateManyWithoutLecturerNestedInput
    user?: UserUpdateOneRequiredWithoutLecturerNestedInput
  }

  export type LecturerUncheckedUpdateWithoutSupervisionScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturerZoneAssigned?: LecturerZoneAssignedUncheckedUpdateManyWithoutLecturerNestedInput
    lecturerZoneRequest?: LecturerZoneRequestUncheckedUpdateManyWithoutLecturerNestedInput
    supervisionVisit?: SupervisionVisitUncheckedUpdateManyWithoutLecturerNestedInput
    report?: ReportUncheckedUpdateManyWithoutLecturerNestedInput
    grade?: GradeUncheckedUpdateManyWithoutLecturerNestedInput
  }

  export type StudentCreateWithoutLessonPlanInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tpApplication?: TpApplicationCreateNestedManyWithoutStudentInput
    supervisionVisit?: SupervisionVisitCreateNestedManyWithoutStudentInput
    report?: ReportCreateNestedManyWithoutStudentInput
    finalDocument?: FinalDocumentCreateNestedManyWithoutStudentInput
    grade?: GradeCreateNestedManyWithoutStudentInput
    user: UserCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutLessonPlanInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tpApplication?: TpApplicationUncheckedCreateNestedManyWithoutStudentInput
    supervisionVisit?: SupervisionVisitUncheckedCreateNestedManyWithoutStudentInput
    report?: ReportUncheckedCreateNestedManyWithoutStudentInput
    finalDocument?: FinalDocumentUncheckedCreateNestedManyWithoutStudentInput
    grade?: GradeUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutLessonPlanInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutLessonPlanInput, StudentUncheckedCreateWithoutLessonPlanInput>
  }

  export type StudentUpsertWithoutLessonPlanInput = {
    update: XOR<StudentUpdateWithoutLessonPlanInput, StudentUncheckedUpdateWithoutLessonPlanInput>
    create: XOR<StudentCreateWithoutLessonPlanInput, StudentUncheckedCreateWithoutLessonPlanInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutLessonPlanInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutLessonPlanInput, StudentUncheckedUpdateWithoutLessonPlanInput>
  }

  export type StudentUpdateWithoutLessonPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tpApplication?: TpApplicationUpdateManyWithoutStudentNestedInput
    supervisionVisit?: SupervisionVisitUpdateManyWithoutStudentNestedInput
    report?: ReportUpdateManyWithoutStudentNestedInput
    finalDocument?: FinalDocumentUpdateManyWithoutStudentNestedInput
    grade?: GradeUpdateManyWithoutStudentNestedInput
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutLessonPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tpApplication?: TpApplicationUncheckedUpdateManyWithoutStudentNestedInput
    supervisionVisit?: SupervisionVisitUncheckedUpdateManyWithoutStudentNestedInput
    report?: ReportUncheckedUpdateManyWithoutStudentNestedInput
    finalDocument?: FinalDocumentUncheckedUpdateManyWithoutStudentNestedInput
    grade?: GradeUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type LecturerCreateWithoutSupervisionVisitInput = {
    id?: string
    department: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturerZoneAssigned?: LecturerZoneAssignedCreateNestedManyWithoutLecturerInput
    lecturerZoneRequest?: LecturerZoneRequestCreateNestedManyWithoutLecturerInput
    supervisionSchedule?: SupervisionScheduleCreateNestedManyWithoutLecturerInput
    report?: ReportCreateNestedManyWithoutLecturerInput
    grade?: GradeCreateNestedManyWithoutLecturerInput
    user: UserCreateNestedOneWithoutLecturerInput
  }

  export type LecturerUncheckedCreateWithoutSupervisionVisitInput = {
    id?: string
    department: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturerZoneAssigned?: LecturerZoneAssignedUncheckedCreateNestedManyWithoutLecturerInput
    lecturerZoneRequest?: LecturerZoneRequestUncheckedCreateNestedManyWithoutLecturerInput
    supervisionSchedule?: SupervisionScheduleUncheckedCreateNestedManyWithoutLecturerInput
    report?: ReportUncheckedCreateNestedManyWithoutLecturerInput
    grade?: GradeUncheckedCreateNestedManyWithoutLecturerInput
  }

  export type LecturerCreateOrConnectWithoutSupervisionVisitInput = {
    where: LecturerWhereUniqueInput
    create: XOR<LecturerCreateWithoutSupervisionVisitInput, LecturerUncheckedCreateWithoutSupervisionVisitInput>
  }

  export type StudentCreateWithoutSupervisionVisitInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tpApplication?: TpApplicationCreateNestedManyWithoutStudentInput
    lessonPlan?: LessonPlanCreateNestedManyWithoutStudentInput
    report?: ReportCreateNestedManyWithoutStudentInput
    finalDocument?: FinalDocumentCreateNestedManyWithoutStudentInput
    grade?: GradeCreateNestedManyWithoutStudentInput
    user: UserCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutSupervisionVisitInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tpApplication?: TpApplicationUncheckedCreateNestedManyWithoutStudentInput
    lessonPlan?: LessonPlanUncheckedCreateNestedManyWithoutStudentInput
    report?: ReportUncheckedCreateNestedManyWithoutStudentInput
    finalDocument?: FinalDocumentUncheckedCreateNestedManyWithoutStudentInput
    grade?: GradeUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutSupervisionVisitInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSupervisionVisitInput, StudentUncheckedCreateWithoutSupervisionVisitInput>
  }

  export type LecturerUpsertWithoutSupervisionVisitInput = {
    update: XOR<LecturerUpdateWithoutSupervisionVisitInput, LecturerUncheckedUpdateWithoutSupervisionVisitInput>
    create: XOR<LecturerCreateWithoutSupervisionVisitInput, LecturerUncheckedCreateWithoutSupervisionVisitInput>
    where?: LecturerWhereInput
  }

  export type LecturerUpdateToOneWithWhereWithoutSupervisionVisitInput = {
    where?: LecturerWhereInput
    data: XOR<LecturerUpdateWithoutSupervisionVisitInput, LecturerUncheckedUpdateWithoutSupervisionVisitInput>
  }

  export type LecturerUpdateWithoutSupervisionVisitInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturerZoneAssigned?: LecturerZoneAssignedUpdateManyWithoutLecturerNestedInput
    lecturerZoneRequest?: LecturerZoneRequestUpdateManyWithoutLecturerNestedInput
    supervisionSchedule?: SupervisionScheduleUpdateManyWithoutLecturerNestedInput
    report?: ReportUpdateManyWithoutLecturerNestedInput
    grade?: GradeUpdateManyWithoutLecturerNestedInput
    user?: UserUpdateOneRequiredWithoutLecturerNestedInput
  }

  export type LecturerUncheckedUpdateWithoutSupervisionVisitInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturerZoneAssigned?: LecturerZoneAssignedUncheckedUpdateManyWithoutLecturerNestedInput
    lecturerZoneRequest?: LecturerZoneRequestUncheckedUpdateManyWithoutLecturerNestedInput
    supervisionSchedule?: SupervisionScheduleUncheckedUpdateManyWithoutLecturerNestedInput
    report?: ReportUncheckedUpdateManyWithoutLecturerNestedInput
    grade?: GradeUncheckedUpdateManyWithoutLecturerNestedInput
  }

  export type StudentUpsertWithoutSupervisionVisitInput = {
    update: XOR<StudentUpdateWithoutSupervisionVisitInput, StudentUncheckedUpdateWithoutSupervisionVisitInput>
    create: XOR<StudentCreateWithoutSupervisionVisitInput, StudentUncheckedCreateWithoutSupervisionVisitInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutSupervisionVisitInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutSupervisionVisitInput, StudentUncheckedUpdateWithoutSupervisionVisitInput>
  }

  export type StudentUpdateWithoutSupervisionVisitInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tpApplication?: TpApplicationUpdateManyWithoutStudentNestedInput
    lessonPlan?: LessonPlanUpdateManyWithoutStudentNestedInput
    report?: ReportUpdateManyWithoutStudentNestedInput
    finalDocument?: FinalDocumentUpdateManyWithoutStudentNestedInput
    grade?: GradeUpdateManyWithoutStudentNestedInput
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutSupervisionVisitInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tpApplication?: TpApplicationUncheckedUpdateManyWithoutStudentNestedInput
    lessonPlan?: LessonPlanUncheckedUpdateManyWithoutStudentNestedInput
    report?: ReportUncheckedUpdateManyWithoutStudentNestedInput
    finalDocument?: FinalDocumentUncheckedUpdateManyWithoutStudentNestedInput
    grade?: GradeUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserCreateWithoutAlertInput = {
    id?: string
    username: string
    fullName: string
    email: string
    role?: $Enums.Role
    password: string
    isActive?: boolean
    isVerified?: boolean
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentCreateNestedManyWithoutUserInput
    lecturer?: LecturerCreateNestedManyWithoutUserInput
    admin?: AdminCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAlertInput = {
    id?: string
    username: string
    fullName: string
    email: string
    role?: $Enums.Role
    password: string
    isActive?: boolean
    isVerified?: boolean
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentUncheckedCreateNestedManyWithoutUserInput
    lecturer?: LecturerUncheckedCreateNestedManyWithoutUserInput
    admin?: AdminUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAlertInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAlertInput, UserUncheckedCreateWithoutAlertInput>
  }

  export type UserUpsertWithoutAlertInput = {
    update: XOR<UserUpdateWithoutAlertInput, UserUncheckedUpdateWithoutAlertInput>
    create: XOR<UserCreateWithoutAlertInput, UserUncheckedCreateWithoutAlertInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAlertInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAlertInput, UserUncheckedUpdateWithoutAlertInput>
  }

  export type UserUpdateWithoutAlertInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateManyWithoutUserNestedInput
    lecturer?: LecturerUpdateManyWithoutUserNestedInput
    admin?: AdminUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAlertInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUncheckedUpdateManyWithoutUserNestedInput
    lecturer?: LecturerUncheckedUpdateManyWithoutUserNestedInput
    admin?: AdminUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StudentCreateWithoutReportInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tpApplication?: TpApplicationCreateNestedManyWithoutStudentInput
    lessonPlan?: LessonPlanCreateNestedManyWithoutStudentInput
    supervisionVisit?: SupervisionVisitCreateNestedManyWithoutStudentInput
    finalDocument?: FinalDocumentCreateNestedManyWithoutStudentInput
    grade?: GradeCreateNestedManyWithoutStudentInput
    user: UserCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutReportInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tpApplication?: TpApplicationUncheckedCreateNestedManyWithoutStudentInput
    lessonPlan?: LessonPlanUncheckedCreateNestedManyWithoutStudentInput
    supervisionVisit?: SupervisionVisitUncheckedCreateNestedManyWithoutStudentInput
    finalDocument?: FinalDocumentUncheckedCreateNestedManyWithoutStudentInput
    grade?: GradeUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutReportInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutReportInput, StudentUncheckedCreateWithoutReportInput>
  }

  export type LecturerCreateWithoutReportInput = {
    id?: string
    department: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturerZoneAssigned?: LecturerZoneAssignedCreateNestedManyWithoutLecturerInput
    lecturerZoneRequest?: LecturerZoneRequestCreateNestedManyWithoutLecturerInput
    supervisionSchedule?: SupervisionScheduleCreateNestedManyWithoutLecturerInput
    supervisionVisit?: SupervisionVisitCreateNestedManyWithoutLecturerInput
    grade?: GradeCreateNestedManyWithoutLecturerInput
    user: UserCreateNestedOneWithoutLecturerInput
  }

  export type LecturerUncheckedCreateWithoutReportInput = {
    id?: string
    department: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturerZoneAssigned?: LecturerZoneAssignedUncheckedCreateNestedManyWithoutLecturerInput
    lecturerZoneRequest?: LecturerZoneRequestUncheckedCreateNestedManyWithoutLecturerInput
    supervisionSchedule?: SupervisionScheduleUncheckedCreateNestedManyWithoutLecturerInput
    supervisionVisit?: SupervisionVisitUncheckedCreateNestedManyWithoutLecturerInput
    grade?: GradeUncheckedCreateNestedManyWithoutLecturerInput
  }

  export type LecturerCreateOrConnectWithoutReportInput = {
    where: LecturerWhereUniqueInput
    create: XOR<LecturerCreateWithoutReportInput, LecturerUncheckedCreateWithoutReportInput>
  }

  export type StudentUpsertWithoutReportInput = {
    update: XOR<StudentUpdateWithoutReportInput, StudentUncheckedUpdateWithoutReportInput>
    create: XOR<StudentCreateWithoutReportInput, StudentUncheckedCreateWithoutReportInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutReportInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutReportInput, StudentUncheckedUpdateWithoutReportInput>
  }

  export type StudentUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tpApplication?: TpApplicationUpdateManyWithoutStudentNestedInput
    lessonPlan?: LessonPlanUpdateManyWithoutStudentNestedInput
    supervisionVisit?: SupervisionVisitUpdateManyWithoutStudentNestedInput
    finalDocument?: FinalDocumentUpdateManyWithoutStudentNestedInput
    grade?: GradeUpdateManyWithoutStudentNestedInput
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tpApplication?: TpApplicationUncheckedUpdateManyWithoutStudentNestedInput
    lessonPlan?: LessonPlanUncheckedUpdateManyWithoutStudentNestedInput
    supervisionVisit?: SupervisionVisitUncheckedUpdateManyWithoutStudentNestedInput
    finalDocument?: FinalDocumentUncheckedUpdateManyWithoutStudentNestedInput
    grade?: GradeUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type LecturerUpsertWithoutReportInput = {
    update: XOR<LecturerUpdateWithoutReportInput, LecturerUncheckedUpdateWithoutReportInput>
    create: XOR<LecturerCreateWithoutReportInput, LecturerUncheckedCreateWithoutReportInput>
    where?: LecturerWhereInput
  }

  export type LecturerUpdateToOneWithWhereWithoutReportInput = {
    where?: LecturerWhereInput
    data: XOR<LecturerUpdateWithoutReportInput, LecturerUncheckedUpdateWithoutReportInput>
  }

  export type LecturerUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturerZoneAssigned?: LecturerZoneAssignedUpdateManyWithoutLecturerNestedInput
    lecturerZoneRequest?: LecturerZoneRequestUpdateManyWithoutLecturerNestedInput
    supervisionSchedule?: SupervisionScheduleUpdateManyWithoutLecturerNestedInput
    supervisionVisit?: SupervisionVisitUpdateManyWithoutLecturerNestedInput
    grade?: GradeUpdateManyWithoutLecturerNestedInput
    user?: UserUpdateOneRequiredWithoutLecturerNestedInput
  }

  export type LecturerUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturerZoneAssigned?: LecturerZoneAssignedUncheckedUpdateManyWithoutLecturerNestedInput
    lecturerZoneRequest?: LecturerZoneRequestUncheckedUpdateManyWithoutLecturerNestedInput
    supervisionSchedule?: SupervisionScheduleUncheckedUpdateManyWithoutLecturerNestedInput
    supervisionVisit?: SupervisionVisitUncheckedUpdateManyWithoutLecturerNestedInput
    grade?: GradeUncheckedUpdateManyWithoutLecturerNestedInput
  }

  export type StudentCreateWithoutFinalDocumentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tpApplication?: TpApplicationCreateNestedManyWithoutStudentInput
    lessonPlan?: LessonPlanCreateNestedManyWithoutStudentInput
    supervisionVisit?: SupervisionVisitCreateNestedManyWithoutStudentInput
    report?: ReportCreateNestedManyWithoutStudentInput
    grade?: GradeCreateNestedManyWithoutStudentInput
    user: UserCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutFinalDocumentInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tpApplication?: TpApplicationUncheckedCreateNestedManyWithoutStudentInput
    lessonPlan?: LessonPlanUncheckedCreateNestedManyWithoutStudentInput
    supervisionVisit?: SupervisionVisitUncheckedCreateNestedManyWithoutStudentInput
    report?: ReportUncheckedCreateNestedManyWithoutStudentInput
    grade?: GradeUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutFinalDocumentInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutFinalDocumentInput, StudentUncheckedCreateWithoutFinalDocumentInput>
  }

  export type StudentUpsertWithoutFinalDocumentInput = {
    update: XOR<StudentUpdateWithoutFinalDocumentInput, StudentUncheckedUpdateWithoutFinalDocumentInput>
    create: XOR<StudentCreateWithoutFinalDocumentInput, StudentUncheckedCreateWithoutFinalDocumentInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutFinalDocumentInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutFinalDocumentInput, StudentUncheckedUpdateWithoutFinalDocumentInput>
  }

  export type StudentUpdateWithoutFinalDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tpApplication?: TpApplicationUpdateManyWithoutStudentNestedInput
    lessonPlan?: LessonPlanUpdateManyWithoutStudentNestedInput
    supervisionVisit?: SupervisionVisitUpdateManyWithoutStudentNestedInput
    report?: ReportUpdateManyWithoutStudentNestedInput
    grade?: GradeUpdateManyWithoutStudentNestedInput
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutFinalDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tpApplication?: TpApplicationUncheckedUpdateManyWithoutStudentNestedInput
    lessonPlan?: LessonPlanUncheckedUpdateManyWithoutStudentNestedInput
    supervisionVisit?: SupervisionVisitUncheckedUpdateManyWithoutStudentNestedInput
    report?: ReportUncheckedUpdateManyWithoutStudentNestedInput
    grade?: GradeUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type LecturerCreateWithoutGradeInput = {
    id?: string
    department: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturerZoneAssigned?: LecturerZoneAssignedCreateNestedManyWithoutLecturerInput
    lecturerZoneRequest?: LecturerZoneRequestCreateNestedManyWithoutLecturerInput
    supervisionSchedule?: SupervisionScheduleCreateNestedManyWithoutLecturerInput
    supervisionVisit?: SupervisionVisitCreateNestedManyWithoutLecturerInput
    report?: ReportCreateNestedManyWithoutLecturerInput
    user: UserCreateNestedOneWithoutLecturerInput
  }

  export type LecturerUncheckedCreateWithoutGradeInput = {
    id?: string
    department: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturerZoneAssigned?: LecturerZoneAssignedUncheckedCreateNestedManyWithoutLecturerInput
    lecturerZoneRequest?: LecturerZoneRequestUncheckedCreateNestedManyWithoutLecturerInput
    supervisionSchedule?: SupervisionScheduleUncheckedCreateNestedManyWithoutLecturerInput
    supervisionVisit?: SupervisionVisitUncheckedCreateNestedManyWithoutLecturerInput
    report?: ReportUncheckedCreateNestedManyWithoutLecturerInput
  }

  export type LecturerCreateOrConnectWithoutGradeInput = {
    where: LecturerWhereUniqueInput
    create: XOR<LecturerCreateWithoutGradeInput, LecturerUncheckedCreateWithoutGradeInput>
  }

  export type StudentCreateWithoutGradeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tpApplication?: TpApplicationCreateNestedManyWithoutStudentInput
    lessonPlan?: LessonPlanCreateNestedManyWithoutStudentInput
    supervisionVisit?: SupervisionVisitCreateNestedManyWithoutStudentInput
    report?: ReportCreateNestedManyWithoutStudentInput
    finalDocument?: FinalDocumentCreateNestedManyWithoutStudentInput
    user: UserCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutGradeInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tpApplication?: TpApplicationUncheckedCreateNestedManyWithoutStudentInput
    lessonPlan?: LessonPlanUncheckedCreateNestedManyWithoutStudentInput
    supervisionVisit?: SupervisionVisitUncheckedCreateNestedManyWithoutStudentInput
    report?: ReportUncheckedCreateNestedManyWithoutStudentInput
    finalDocument?: FinalDocumentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutGradeInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutGradeInput, StudentUncheckedCreateWithoutGradeInput>
  }

  export type LecturerUpsertWithoutGradeInput = {
    update: XOR<LecturerUpdateWithoutGradeInput, LecturerUncheckedUpdateWithoutGradeInput>
    create: XOR<LecturerCreateWithoutGradeInput, LecturerUncheckedCreateWithoutGradeInput>
    where?: LecturerWhereInput
  }

  export type LecturerUpdateToOneWithWhereWithoutGradeInput = {
    where?: LecturerWhereInput
    data: XOR<LecturerUpdateWithoutGradeInput, LecturerUncheckedUpdateWithoutGradeInput>
  }

  export type LecturerUpdateWithoutGradeInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturerZoneAssigned?: LecturerZoneAssignedUpdateManyWithoutLecturerNestedInput
    lecturerZoneRequest?: LecturerZoneRequestUpdateManyWithoutLecturerNestedInput
    supervisionSchedule?: SupervisionScheduleUpdateManyWithoutLecturerNestedInput
    supervisionVisit?: SupervisionVisitUpdateManyWithoutLecturerNestedInput
    report?: ReportUpdateManyWithoutLecturerNestedInput
    user?: UserUpdateOneRequiredWithoutLecturerNestedInput
  }

  export type LecturerUncheckedUpdateWithoutGradeInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturerZoneAssigned?: LecturerZoneAssignedUncheckedUpdateManyWithoutLecturerNestedInput
    lecturerZoneRequest?: LecturerZoneRequestUncheckedUpdateManyWithoutLecturerNestedInput
    supervisionSchedule?: SupervisionScheduleUncheckedUpdateManyWithoutLecturerNestedInput
    supervisionVisit?: SupervisionVisitUncheckedUpdateManyWithoutLecturerNestedInput
    report?: ReportUncheckedUpdateManyWithoutLecturerNestedInput
  }

  export type StudentUpsertWithoutGradeInput = {
    update: XOR<StudentUpdateWithoutGradeInput, StudentUncheckedUpdateWithoutGradeInput>
    create: XOR<StudentCreateWithoutGradeInput, StudentUncheckedCreateWithoutGradeInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutGradeInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutGradeInput, StudentUncheckedUpdateWithoutGradeInput>
  }

  export type StudentUpdateWithoutGradeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tpApplication?: TpApplicationUpdateManyWithoutStudentNestedInput
    lessonPlan?: LessonPlanUpdateManyWithoutStudentNestedInput
    supervisionVisit?: SupervisionVisitUpdateManyWithoutStudentNestedInput
    report?: ReportUpdateManyWithoutStudentNestedInput
    finalDocument?: FinalDocumentUpdateManyWithoutStudentNestedInput
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutGradeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tpApplication?: TpApplicationUncheckedUpdateManyWithoutStudentNestedInput
    lessonPlan?: LessonPlanUncheckedUpdateManyWithoutStudentNestedInput
    supervisionVisit?: SupervisionVisitUncheckedUpdateManyWithoutStudentNestedInput
    report?: ReportUncheckedUpdateManyWithoutStudentNestedInput
    finalDocument?: FinalDocumentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LecturerCreateManyUserInput = {
    id?: string
    department: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertCreateManyUserInput = {
    id?: string
    message: string
    type?: $Enums.AlertType
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tpApplication?: TpApplicationUpdateManyWithoutStudentNestedInput
    lessonPlan?: LessonPlanUpdateManyWithoutStudentNestedInput
    supervisionVisit?: SupervisionVisitUpdateManyWithoutStudentNestedInput
    report?: ReportUpdateManyWithoutStudentNestedInput
    finalDocument?: FinalDocumentUpdateManyWithoutStudentNestedInput
    grade?: GradeUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tpApplication?: TpApplicationUncheckedUpdateManyWithoutStudentNestedInput
    lessonPlan?: LessonPlanUncheckedUpdateManyWithoutStudentNestedInput
    supervisionVisit?: SupervisionVisitUncheckedUpdateManyWithoutStudentNestedInput
    report?: ReportUncheckedUpdateManyWithoutStudentNestedInput
    finalDocument?: FinalDocumentUncheckedUpdateManyWithoutStudentNestedInput
    grade?: GradeUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LecturerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturerZoneAssigned?: LecturerZoneAssignedUpdateManyWithoutLecturerNestedInput
    lecturerZoneRequest?: LecturerZoneRequestUpdateManyWithoutLecturerNestedInput
    supervisionSchedule?: SupervisionScheduleUpdateManyWithoutLecturerNestedInput
    supervisionVisit?: SupervisionVisitUpdateManyWithoutLecturerNestedInput
    report?: ReportUpdateManyWithoutLecturerNestedInput
    grade?: GradeUpdateManyWithoutLecturerNestedInput
  }

  export type LecturerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturerZoneAssigned?: LecturerZoneAssignedUncheckedUpdateManyWithoutLecturerNestedInput
    lecturerZoneRequest?: LecturerZoneRequestUncheckedUpdateManyWithoutLecturerNestedInput
    supervisionSchedule?: SupervisionScheduleUncheckedUpdateManyWithoutLecturerNestedInput
    supervisionVisit?: SupervisionVisitUncheckedUpdateManyWithoutLecturerNestedInput
    report?: ReportUncheckedUpdateManyWithoutLecturerNestedInput
    grade?: GradeUncheckedUpdateManyWithoutLecturerNestedInput
  }

  export type LecturerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TpApplicationCreateManyStudentInput = {
    id?: string
    schoolName: string
    position: string
    startDate: Date | string
    endDate: Date | string
    schoolId: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonPlanCreateManyStudentInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupervisionVisitCreateManyStudentInput = {
    id?: string
    lecturerId: string
    date: Date | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportCreateManyStudentInput = {
    id?: string
    title: string
    lecturerId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinalDocumentCreateManyStudentInput = {
    id?: string
    title: string
    content: string
    fileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GradeCreateManyStudentInput = {
    id?: string
    lecturerId: string
    score: number
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TpApplicationUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutTpApplicationNestedInput
  }

  export type TpApplicationUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TpApplicationUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonPlanUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonPlanUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonPlanUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupervisionVisitUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUpdateOneRequiredWithoutSupervisionVisitNestedInput
  }

  export type SupervisionVisitUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupervisionVisitUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUpdateOneRequiredWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinalDocumentUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinalDocumentUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinalDocumentUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradeUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUpdateOneRequiredWithoutGradeNestedInput
  }

  export type GradeUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradeUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LecturerZoneAssignedCreateManyLecturerInput = {
    id?: string
    zoneId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LecturerZoneRequestCreateManyLecturerInput = {
    id?: string
    zoneId: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupervisionScheduleCreateManyLecturerInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupervisionVisitCreateManyLecturerInput = {
    id?: string
    studentId: string
    date: Date | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportCreateManyLecturerInput = {
    id?: string
    title: string
    studentId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GradeCreateManyLecturerInput = {
    id?: string
    studentId: string
    score: number
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LecturerZoneAssignedUpdateWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zone?: ZoneUpdateOneRequiredWithoutLecturerZoneAssignedNestedInput
  }

  export type LecturerZoneAssignedUncheckedUpdateWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LecturerZoneAssignedUncheckedUpdateManyWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LecturerZoneRequestUpdateWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zone?: ZoneUpdateOneRequiredWithoutLecturerZoneRequestNestedInput
  }

  export type LecturerZoneRequestUncheckedUpdateWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LecturerZoneRequestUncheckedUpdateManyWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupervisionScheduleUpdateWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupervisionScheduleUncheckedUpdateWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupervisionScheduleUncheckedUpdateManyWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupervisionVisitUpdateWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutSupervisionVisitNestedInput
  }

  export type SupervisionVisitUncheckedUpdateWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupervisionVisitUncheckedUpdateManyWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUpdateWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradeUpdateWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutGradeNestedInput
  }

  export type GradeUncheckedUpdateWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradeUncheckedUpdateManyWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolCreateManyZoneInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LecturerZoneRequestCreateManyZoneInput = {
    id?: string
    lecturerId: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LecturerZoneAssignedCreateManyZoneInput = {
    id?: string
    lecturerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolUpdateWithoutZoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tpApplication?: TpApplicationUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutZoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tpApplication?: TpApplicationUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateManyWithoutZoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LecturerZoneRequestUpdateWithoutZoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUpdateOneRequiredWithoutLecturerZoneRequestNestedInput
  }

  export type LecturerZoneRequestUncheckedUpdateWithoutZoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LecturerZoneRequestUncheckedUpdateManyWithoutZoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LecturerZoneAssignedUpdateWithoutZoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUpdateOneRequiredWithoutLecturerZoneAssignedNestedInput
  }

  export type LecturerZoneAssignedUncheckedUpdateWithoutZoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LecturerZoneAssignedUncheckedUpdateManyWithoutZoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TpApplicationCreateManySchoolInput = {
    id?: string
    schoolName: string
    position: string
    startDate: Date | string
    endDate: Date | string
    studentId: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TpApplicationUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutTpApplicationNestedInput
  }

  export type TpApplicationUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TpApplicationUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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