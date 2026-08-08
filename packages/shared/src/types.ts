import type { UserRole, TruckType, DeliveryStatus, DriverStatus } from './enums';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export interface HardwareStore {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Driver {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: DriverStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface Truck {
  id: string;
  driverId: string;
  truckType: TruckType;
  plateNumber: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface DeliveryLocation {
  id: string;
  name: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Pricing {
  id: string;
  locationId: string;
  truckType: TruckType;
  price: number;
  currency: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface DeliveryRequest {
  id: string;
  hardwareStoreId: string;
  deliveryLocationId: string;
  truckType: TruckType;
  price: number;
  materials: string;
  additionalInstructions: string | null;
  status: DeliveryStatus;
  driverId: string | null;
  truckId: string | null;
  createdAt: Date;
  updatedAt: Date;
  acceptedAt: Date | null;
  deliveredAt: Date | null;
}

export interface AuthResponse {
  token: string;
  user: User;
}
