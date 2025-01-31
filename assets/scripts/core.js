function getInstance(name){
    return Reflect.get(Vars.mods.getMod("ion").loader.loadClass(name), "INSTANCE")
}

//objects
const Utils = getInstance("ion.defs.Utils")
const TempVars = getInstance("ion.game.TempVars")
const PermaVars = getInstance("ion.game.PermaVars")
const IonAchievements = getInstance("ion.content.IonAchievements")
const IonVars = getInstance("ion.IonVars")
const IonUnitTypes = getInstance("ion.content.IonUnitTypes")
const IonBlocks = getInstance("ion.content.IonBlocks")
const IonStatusEffects = getInstance("ion.content.IonStatusEffects")
const IonBullets = getInstance("ion.content.IonBullets")
const IonFx = getInstance("ion.content.IonFx")
const IonItems = getInstance("ion.content.IonItems")
const IonTechTree = getInstance("ion.content.IonTechTree")
const IColor = getInstance("ion.defs.IColor")
const IDraw = getInstance("ion.defs.IDraw")
const ISettings = getInstance("ion.ui.ISettings")
