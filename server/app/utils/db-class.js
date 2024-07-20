const Datastore = require('@seald-io/nedb')
const { sshRecordDBPath, hostListDBPath, keyDBPath, emailNotifyDBPath, notifyConfDBPath, groupConfDBPath } = require('../config')

module.exports.KeyDB = class KeyDB {
  constructor() {
    if (!KeyDB.instance) {
      KeyDB.instance = new Datastore({ filename: keyDBPath, autoload: true })
    }
  }
  getInstance() {
    return KeyDB.instance
  }
}

module.exports.HostListDB = class HostListDB {
  constructor() {
    if (!HostListDB.instance) {
      HostListDB.instance = new Datastore({ filename: hostListDBPath, autoload: true })
    }
  }
  getInstance() {
    return HostListDB.instance
  }
}

module.exports.SshRecordDB = class SshRecordDB {
  constructor() {
    if (!SshRecordDB.instance) {
      SshRecordDB.instance = new Datastore({ filename: sshRecordDBPath, autoload: true })
    }
  }
  getInstance() {
    return SshRecordDB.instance
  }
}

module.exports.NotifyDB = class NotifyDB {
  constructor() {
    if (!NotifyDB.instance) {
      NotifyDB.instance = new Datastore({ filename: notifyConfDBPath, autoload: true })
    }
  }
  getInstance() {
    return NotifyDB.instance
  }
}

module.exports.GroupDB = class GroupDB {
  constructor() {
    if (!GroupDB.instance) {
      GroupDB.instance = new Datastore({ filename: groupConfDBPath, autoload: true })
    }
  }
  getInstance() {
    return GroupDB.instance
  }
}

module.exports.EmailNotifyDB = class EmailNotifyDB {
  constructor() {
    if (!EmailNotifyDB.instance) {
      EmailNotifyDB.instance = new Datastore({ filename: emailNotifyDBPath, autoload: true })
    }
  }
  getInstance() {
    return EmailNotifyDB.instance
  }
}