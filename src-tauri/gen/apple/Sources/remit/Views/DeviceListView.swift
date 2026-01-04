import SwiftUI

struct DeviceListView: View {
    let devices: [Device]

    var body: some View {
        VStack {
            Text("Dispositivos Disponibles")

            if devices.isEmpty {
                Text("Buscando dispositivos...")
            } else {
                List(devices) { device in
                    DeviceRowView(device: device)
                }
            }
        }
    }
}

struct DeviceRowView: View {
    let device: Device

    var body: some View {
        VStack {
            Text(device.dispName)
            Text(device.ip)
        }
    }
}

#Preview("Lista Vacía") {
    DeviceListView(devices: [])
}

#Preview("Con Dispositivos") {
    DeviceListView(devices: [
        Device(fullName: "Device1._remit._tcp.local.", dispName: "MacBook Pro", ip: "192.168.1.10", port: 21, properties: []),
        Device(fullName: "Device2._remit._tcp.local.", dispName: "iPhone", ip: "192.168.1.11", port: 21, properties: [])
    ])
}
