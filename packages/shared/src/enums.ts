export enum UserRole {
  ADMIN = 'ADMIN',
  HARDWARE = 'HARDWARE',
  DRIVER = 'DRIVER',
}

export enum TruckType {
  VAN = 'VAN',
  FOUR_TON = '4_TON',
  EIGHT_TON = '8_TON',
}

export enum DeliveryStatus {
  AVAILABLE = 'AVAILABLE',
  ACCEPTED = 'ACCEPTED',
  ON_THE_WAY = 'ON_THE_WAY',
  ARRIVED = 'ARRIVED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
}

export enum DriverStatus {
  OFFLINE = 'OFFLINE',
  ONLINE = 'ONLINE',
  ON_DELIVERY = 'ON_DELIVERY',
}
