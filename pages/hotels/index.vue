<template>
  <div class="sa-app__body">
    <div class="mx-sm-2 px-2 px-sm-3 px-xxl-4 pb-6">
      <div class="container">
        <div class="py-5">
          <div class="row g-4 align-items-center">
            <div class="col">
              <nav class="mb-2" aria-label="breadcrumb">
                <ol class="breadcrumb breadcrumb-sa-simple pages-text">
                  <li class="breadcrumb-item">
                    <NuxtLink to="" class="">Dashboard</NuxtLink>
                  </li>
                  <li class="breadcrumb-item active text-color-teel" aria-current="page">Hotels</li>
                </ol>
              </nav>
            </div>
            <div class="col-auto d-flex">
              <button class="btn btn-primary" @click="openModal">+ Create</button>
            </div>
          </div>
        </div>

        <div class="card py-5">
          <div class="row g-4 g-xl-5">
            <div class="col-12 d-flex px-0">
              <div class="saw-indicator flex-grow-1">
                <div class="saw-indicator__body">
                  <Table :columns="table_header" :entities="entities" @getData="getData">
                    <template v-slot:column_action="{ entity }">
                      <td>
                        <a class="mr-1 badge bg-info" href="javascript:"
                          @click="openEditModal(entity)"><i class="fas fa-edit"></i></a>

                        &nbsp;

                        <a class="ml-1 badge bg-danger"
                          href="javascript:" @click="deleteHotel(entity.id)"><i class="fas fa-trash"></i></a>
                      </td>
                    </template>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Component -->
    <Modal :isVisible="showModal" @update:isVisible="showModal = $event" @save="onSubmit" :title="modalTitle">
      <AddHotelModal @submit="onSubmit" :isEdit="isEditMode" :customer="currentHotel" />
    </Modal>
  </div>
</template>

<script setup lang="js">
import Table from "@/components/common/Table";
import Modal from '@/components/global/Modal';
import AddHotelModal from "@/components/hotel/AddHotelModal";
import Swal from "sweetalert2";

const { $showAlert } = useNuxtApp();
const config = useRuntimeConfig();
const apiUrl = config.public.apiBaseUrl;

const table_header = ref([
  { label: 'Sl No', field: 'sl' },
  { label: 'Name', field: 'name' },
  { label: 'Address', field: 'address' },
  { label: 'Cost', field: 'cost_per_night' },
  { label: 'Room', field: 'available_rooms' },
  { label: 'Rating', field: 'rating' }
]);

const entities = ref([]);
const getData = async (params = { url: null, filter: { rows: 8 } }) => {
  try {
    let url = apiUrl + 'hotels';

    if (params.hasOwnProperty("url") && params.url != null) {
      url = params.url;
    }

    let filter = {};
    if (params.hasOwnProperty("filter")) {
      filter = params.filter;
    }

    const res = await $fetch(url, {
      params: filter,
    });

    entities.value = res;
  } catch (error) {
    console.error("Error:", error);
  }
};

const showModal = ref(false);
const hotels = ref([]);
const isEditMode = ref(false);
const currentHotel = ref({});
const modalTitle = ref("");

const openModal = () => {
  modalTitle.value = "Create Hotel";
  isEditMode.value = false;
  currentHotel.value = {
    id: null,
    name: "",
    cost: "",
    room: "",
    rating: "",
    address: "",
  };
  showModal.value = true;
};

const openEditModal = (hotel) => {
  modalTitle.value = "Edit Hotel";
  isEditMode.value = true;
  currentHotel.value = {
    ...hotel
  };
  showModal.value = true;
};

const onSubmit = async (hotelData) => {
  try {
    const endpoint = isEditMode.value
      ? `${apiUrl}hotels/${currentHotel.value?.id}`
      : `${apiUrl}hotels`;
    const method = isEditMode.value ? "PUT" : "POST";

    const res = await $fetch(endpoint, {
      method,
      body: JSON.stringify(hotelData),
    });

    $showAlert({
      text: res.message,
      icon: "success",
    });
    showModal.value = false;
    getData();

  } catch (error) {
    console.error("Failed to save hotels:", error);
    $showAlert({
      title: "Error",
      text: "Failed to save hotels.",
      icon: "error",
    });
  }
};

const deleteHotel = async (HotelId) => {
  try {
    const confirmDelete = await Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this hotels!",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    });
    if (confirmDelete.isConfirmed) {
      const res = await $fetch(`${apiUrl}hotels/${HotelId}`, {
        method: "DELETE",
      });
      $showAlert({
        text: res.message,
        icon: "success",
      });
      getData();
    }
  } catch (error) {
    console.error("Failed to delete hotels:", error);
  }
};

onMounted(() => {
  getData();
});
</script>