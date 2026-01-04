import Foundation

class DevicesViewModel: ObservableObject {
    @Published var devices: [Device] = []
    @Published var username: String = ""
    @Published var isLoading: Bool = false

    func loadUsername() async {
        isLoading = true
        do {
            let name = try await RustBridge.getUserName()
            await MainActor.run {
                self.username = name
                self.isLoading = false
            }
        } catch {
            print("Error loading username: \(error)")
            await MainActor.run {
                self.isLoading = false
            }
        }
    }

    func updateUsername(_ newName: String) async {
        do {
            try await RustBridge.changeUserName(newName)
            await loadUsername()
        } catch {
            print("Error updating username: \(error)")
        }
    }

    func startDeviceDiscovery() {
        RustBridge.findDevices(
            onFound: { device in
                Task { @MainActor in
                    if !self.devices.contains(where: { $0.id == device.id }) {
                        self.devices.append(device)
                    }
                }
            },
            onRemoved: { deviceId in
                Task { @MainActor in
                    self.devices.removeAll { $0.id == deviceId }
                }
            }
        )
    }
}
