export enum StatusEnum {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export enum RoleEnum {
  ADMIN = 'admin',
  CLIENT = 'client',
  DRIVER = 'driver',
}

export enum FilterStatusEnum {
  ALL = 'all',
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export enum JourneyStatus {
  NEW = 'new',
  DELIVERING = 'delivering',
  DELIVERED = 'delivered',
  DONE = 'done',
  PENDING = 'pending',
}

export enum JourneyStatusVN {
  NEW = 'Mới',
  DELIVERING = 'Đang giao',
  DELIVERED = 'Đã giao',
  DONE = 'Hoàn thành',
  PENDING = 'Chờ duyệt',
}

export enum GenderEnum {
  MALE = 'male',
  FEMALE = 'female',
}

export enum Order {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum HistoryActionsEnum {
  CREATED = 'created',
  ASSIGNED_DRIVER = 'assigned_driver',
  ASSIGNED_VEHICLE = 'assigned_vehicle',
  ASSIGNED_CUSTOMER = 'assigned_customer',
  UPDATED = 'updated',
  STARTED = 'started',
  DELIVERED = 'delivered',
  CREATED_EXPENSE = 'created_expense',
  UPDATED_EXPENSE = 'updated_expense',
  ENDED = 'ended',
  REJECTED = 'rejected',
  DELETED = 'deleted',
  APPROVED = 'approved',
  ASSIGNED = 'assigned',
  CHANGE_STATUS = 'change_status',
}

export enum ErrorDescription {
  START_LATE = 'start_late',
  ARRIVE_LATE = 'arrive_late',
  WRONG_ROUTE = 'wrong_route',
  VEHICLE_REMOVAL = 'vehicle_removal',
  REJECT_JOURNEY = 'reject_journey',
}

export enum UserRole {
  USERS = 'users',
  DRIVERS = 'drivers',
}

export enum EventSocket {
  NOTIFICATION = 'notification',
  ERROR_NOTIFICATION = 'error_notification',
}

export enum SearchVehicle {
  TYPE = 'type',
  GROUP = 'group',
}

export enum TypeExpense {
  FUEL_COST = 'fuel_cost',
  TOLLS = 'tolls',
  PARKING_FEE = 'parking_fee',
}

export enum FilterJourneyStatus {
  ALL = 'all',
  NEW = 'new',
  DELIVERING = 'delivering',
  DELIVERED = 'delivered',
  DONE = 'done',
  PENDING = 'pending',
}

export const EMPTY_TOKEN = 'emptyToken';
