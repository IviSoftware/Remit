# Guía de Compilación y Ejecución para Dispositivos Apple

Este proyecto ahora soporta SwiftUI nativo para dispositivos Apple (macOS, iOS, iPadOS) mientras mantiene React para Windows y Linux.

## Estructura del Proyecto

```
Remit/
├── src/                          # Frontend React (Windows/Linux)
├── src-tauri/                    # Backend Rust (compartido)
│   ├── src/                      # Lógica de negocio Rust
│   └── gen/apple/                # Proyecto iOS/macOS
│       └── Sources/remit/        # Código SwiftUI
│           ├── RemitApp.swift
│           ├── Models/
│           ├── Views/
│           ├── ViewModels/
│           └── Bridge/
```

## Comandos de Ejecución

### Comando Universal para Dispositivos Apple

Abre el proyecto en Xcode desde donde puedes ejecutar en cualquier dispositivo:
```bash
npm run xcode
```

Desde Xcode puedes:
- **macOS**: Selecciona scheme `remit_macOS` y presiona ⌘R
- **iPhone**: Selecciona scheme `remit_iOS` + simulador iPhone y presiona ⌘R
- **iPad**: Selecciona scheme `remit_iOS` + simulador iPad y presiona ⌘R

---

### Compilar para Producción

Para generar un build de producción para iOS:
```bash
npm run ios:build
```

---

## Desarrollo con SwiftUI

### Ubicación de Archivos SwiftUI

- **App principal**: `src-tauri/gen/apple/Sources/remit/RemitApp.swift`
- **Vistas**: `src-tauri/gen/apple/Sources/remit/Views/`
- **ViewModels**: `src-tauri/gen/apple/Sources/remit/ViewModels/`
- **Modelos**: `src-tauri/gen/apple/Sources/remit/Models/`
- **Bridge Rust**: `src-tauri/gen/apple/Sources/remit/Bridge/`

### Arquitectura MVVM

El proyecto usa MVVM (Model-View-ViewModel):
- **Models**: Estructuras de datos (Device, etc.)
- **Views**: Componentes SwiftUI sin lógica
- **ViewModels**: Lógica de presentación y comunicación con Rust

### Bridge Rust ↔ Swift

El archivo `RustBridge.swift` contiene stubs para comunicarse con el backend Rust via FFI:
- `getUserName()`: Obtener nombre de usuario
- `changeUserName()`: Cambiar nombre de usuario
- `findDevices()`: Descubrir dispositivos via mDNS
- `sendFile()`: Enviar archivos via FTP

**NOTA**: Estos métodos tienen implementaciones TODO pendientes de conectar con el código Rust real.

---

## Compilación Condicional por Plataforma

### Windows/Linux
Usa el frontend React existente:
```bash
npm run tauri dev    # Desarrollo
npm run tauri build  # Producción
```

### Apple (macOS/iOS/iPadOS)
Usa SwiftUI nativo:
```bash
npm run macos        # macOS
npm run ios          # iOS/iPadOS
```

---

## Troubleshooting

### Error: "Command not found: xcodegen"
```bash
brew install xcodegen
```

### Error: "libimobiledevice not found"
```bash
brew install libimobiledevice
```

### Regenerar proyecto Xcode después de cambios
```bash
cd src-tauri/gen/apple
xcodegen generate
```

### Ver logs de Rust en iOS/macOS
En Xcode, abre la consola (⌘⇧Y) y busca logs con prefijo `RUST::`

---

## Próximos Pasos

1. **Implementar FFI Bridge**: Conectar `RustBridge.swift` con las funciones Rust reales
2. **Agregar estilos**: Mejorar las vistas SwiftUI con modifiers y diseño
3. **Testing**: Probar en dispositivos físicos
4. **Publicación**: Preparar para App Store (iOS/macOS)

---

## Notas Importantes

- El código Rust es **compartido** entre todas las plataformas
- Solo la UI cambia: React (Windows/Linux) vs SwiftUI (Apple)
- Mantén la lógica en Rust para evitar duplicación
- Las vistas SwiftUI son básicas intencionalmente para que las personalices
