const canSpawn = (spawn, body, name, opts) => Game.spawns[spawn].spawnCreep(body, name, Object.assign({}, opts, {dryRun: true}));

const spawnCreep = (spawn, body, name, opts) => {
    if (canSpawn(spawn, body, name, opts)) {
        Game.spawns[spawn].spawnCreep(body, name, opts);
        return name;
    }
    return null;
}

module.exports = spawnCreep;