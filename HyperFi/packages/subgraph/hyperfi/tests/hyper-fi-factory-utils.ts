import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  StudentAdded,
  StudentDeleted,
  StudentEdited,
  certificationEmited,
  multiSigCleared,
  multiSigSigned
} from "../generated/HyperFiFactory/HyperFiFactory"

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createStudentAddedEvent(
  id: BigInt,
  firstname: string,
  lastname: string,
  birthdate: BigInt
): StudentAdded {
  let studentAddedEvent = changetype<StudentAdded>(newMockEvent())

  studentAddedEvent.parameters = new Array()

  studentAddedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  studentAddedEvent.parameters.push(
    new ethereum.EventParam("firstname", ethereum.Value.fromString(firstname))
  )
  studentAddedEvent.parameters.push(
    new ethereum.EventParam("lastname", ethereum.Value.fromString(lastname))
  )
  studentAddedEvent.parameters.push(
    new ethereum.EventParam(
      "birthdate",
      ethereum.Value.fromUnsignedBigInt(birthdate)
    )
  )

  return studentAddedEvent
}

export function createStudentDeletedEvent(id: BigInt): StudentDeleted {
  let studentDeletedEvent = changetype<StudentDeleted>(newMockEvent())

  studentDeletedEvent.parameters = new Array()

  studentDeletedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return studentDeletedEvent
}

export function createStudentEditedEvent(
  id: BigInt,
  firstname: string,
  lastname: string,
  birthdate: BigInt
): StudentEdited {
  let studentEditedEvent = changetype<StudentEdited>(newMockEvent())

  studentEditedEvent.parameters = new Array()

  studentEditedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  studentEditedEvent.parameters.push(
    new ethereum.EventParam("firstname", ethereum.Value.fromString(firstname))
  )
  studentEditedEvent.parameters.push(
    new ethereum.EventParam("lastname", ethereum.Value.fromString(lastname))
  )
  studentEditedEvent.parameters.push(
    new ethereum.EventParam(
      "birthdate",
      ethereum.Value.fromUnsignedBigInt(birthdate)
    )
  )

  return studentEditedEvent
}

export function createcertificationEmitedEvent(
  studentId: BigInt,
  appreciation: i32,
  degree: i32,
  program: i32
): certificationEmited {
  let certificationEmitedEvent = changetype<certificationEmited>(newMockEvent())

  certificationEmitedEvent.parameters = new Array()

  certificationEmitedEvent.parameters.push(
    new ethereum.EventParam(
      "studentId",
      ethereum.Value.fromUnsignedBigInt(studentId)
    )
  )
  certificationEmitedEvent.parameters.push(
    new ethereum.EventParam(
      "appreciation",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(appreciation))
    )
  )
  certificationEmitedEvent.parameters.push(
    new ethereum.EventParam(
      "degree",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(degree))
    )
  )
  certificationEmitedEvent.parameters.push(
    new ethereum.EventParam(
      "program",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(program))
    )
  )

  return certificationEmitedEvent
}

export function createmultiSigClearedEvent(
  multiSigName: Bytes
): multiSigCleared {
  let multiSigClearedEvent = changetype<multiSigCleared>(newMockEvent())

  multiSigClearedEvent.parameters = new Array()

  multiSigClearedEvent.parameters.push(
    new ethereum.EventParam(
      "multiSigName",
      ethereum.Value.fromFixedBytes(multiSigName)
    )
  )

  return multiSigClearedEvent
}

export function createmultiSigSignedEvent(multiSigName: Bytes): multiSigSigned {
  let multiSigSignedEvent = changetype<multiSigSigned>(newMockEvent())

  multiSigSignedEvent.parameters = new Array()

  multiSigSignedEvent.parameters.push(
    new ethereum.EventParam(
      "multiSigName",
      ethereum.Value.fromFixedBytes(multiSigName)
    )
  )

  return multiSigSignedEvent
}
