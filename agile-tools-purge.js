print(`================== Begin Data Purge ==================`)

print(`Deleting rooms older than ${keepLimitHours} hours.`)
var date = new Date()
date.setHours(date.getHours() - keepLimitHours)

const roomsToDelete = db.Room.find({ _created_at: { $lte: date } }).map(
  room => room.code
)
const resultRoom = db.Room.bulkWrite([
  { deleteMany: { filter: { code: { $in: roomsToDelete } } } }
])
print(`Total Number of rooms deleted : ${resultRoom.deletedCount}`)
const resultVote = db.Vote.bulkWrite([
  { deleteMany: { filter: { roomCode: { $in: roomsToDelete } } } }
])
print(`Total Number of votes deleted : ${resultVote.deletedCount}`)

print(`================== End Data Purge ====================`)
