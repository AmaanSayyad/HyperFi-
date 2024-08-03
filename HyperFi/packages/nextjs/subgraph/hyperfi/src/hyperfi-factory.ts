import {
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  StudentAdded as StudentAddedEvent,
  StudentDeleted as StudentDeletedEvent,
  StudentEdited as StudentEditedEvent,
  certificationEmited as certificationEmitedEvent,
  multiSigCleared as multiSigClearedEvent,
  multiSigSigned as multiSigSignedEvent
} from "../generated/HyperfiFactory/HyperfiFactory"
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
} from "../generated/schema"

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStudentAdded(event: StudentAddedEvent): void {
  let entity = new StudentAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.HyperfiFactory_id = event.params.id
  entity.firstname = event.params.firstname
  entity.lastname = event.params.lastname
  entity.birthdate = event.params.birthdate

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStudentDeleted(event: StudentDeletedEvent): void {
  let entity = new StudentDeleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.HyperfiFactory_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStudentEdited(event: StudentEditedEvent): void {
  let entity = new StudentEdited(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.HyperfiFactory_id = event.params.id
  entity.firstname = event.params.firstname
  entity.lastname = event.params.lastname
  entity.birthdate = event.params.birthdate

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlecertificationEmited(
  event: certificationEmitedEvent
): void {
  let entity = new certificationEmited(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.studentId = event.params.studentId
  entity.appreciation = event.params.appreciation
  entity.degree = event.params.degree
  entity.program = event.params.program

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlemultiSigCleared(event: multiSigClearedEvent): void {
  let entity = new multiSigCleared(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.multiSigName = event.params.multiSigName

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlemultiSigSigned(event: multiSigSignedEvent): void {
  let entity = new multiSigSigned(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.multiSigName = event.params.multiSigName

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
