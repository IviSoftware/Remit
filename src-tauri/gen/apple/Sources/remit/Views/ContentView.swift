import SwiftUI

struct ContentView: View {
    @StateObject private var viewModel = DevicesViewModel()
    @State private var showEditUsername = false

    var body: some View {
        HStack {
            DeviceListView(devices: viewModel.devices)

            VStack {
                UserHeaderView(username: viewModel.username, onEditTapped: {
                    showEditUsername = true
                })

                FilesSectionView()
            }
        }
        .task {
            await viewModel.loadUsername()
            viewModel.startDeviceDiscovery()
        }
        .sheet(isPresented: $showEditUsername) {
            EditUsernameView(currentName: viewModel.username) { newName in
                Task {
                    await viewModel.updateUsername(newName)
                }
            }
        }
    }
}

#Preview {
    ContentView()
}
