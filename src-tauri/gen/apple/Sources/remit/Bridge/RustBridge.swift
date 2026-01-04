import Foundation

class RustBridge {

    // MARK: - User Functions
    static func getUserName() async throws -> String {
        // TODO: Implementar llamada FFI a Rust
        return "Usuario Demo"
    }

    static func changeUserName(_ newName: String) async throws {
        // TODO: Implementar llamada FFI a Rust
        print("Cambiando nombre a: \(newName)")
    }

    // MARK: - Device Discovery
    static func findDevices(onFound: @escaping (Device) -> Void, onRemoved: @escaping (String) -> Void) {
        // TODO: Implementar mDNS discovery via FFI
        print("Iniciando búsqueda de dispositivos...")
    }

    // MARK: - FTP Functions
    static func sendFile(to device: Device, filePath: String) async throws {
        // TODO: Implementar envío de archivo via FTP
        print("Enviando archivo a \(device.dispName)")
    }
}
