const os = require('os');

const obj = {
    freeMemory : os.freemem(),
    totalMemory : os.totalmem(),
    type : os.type(),
    user : os.userInfo(),
    release: os.release(),
    hostname : os.hostname(),
    CPU_Architecture : os.arch(),
    CPUs : os.cpus(),
    HomeDirectory : os.homedir(),
    MachineType : os.machine(),
    OperatingSystem : os.platform(),
    SystemUpTime : os.uptime(),
}

console.log(obj)