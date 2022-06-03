package ion

import arc.*
import arc.util.*
import mindustry.game.EventType.*
import mindustry.mod.*
import mindustry.ui.dialogs.*

import ion.ui.*

class IonKt : Mod(){
    
    init{
        Log.infoTag("IKTLoad", "Loaded main IonKt class.")
        Events.on(ClientLoadEvent::class.java){
            ISettings.load()
        }
    }
    
    override fun loadContent(){
    }
}
