// Code generated by furo-proto-gen. DO NOT EDIT.

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.21.0-devel
// 	protoc        v3.11.4
// source: task/task.proto

package task

import (
	furo "../furo"
	proto "github.com/golang/protobuf/proto"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// This is a compile-time assertion that a sufficiently up-to-date version
// of the legacy proto package is being used.
const _ = proto.ProtoPackageIsVersion4

// TaskEntity with Task
type TaskEntity struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// contains a task.Task
	Data *Task `protobuf:"bytes,1,opt,name=data,proto3" json:"data,omitempty"`
	// Hateoas links
	Links []*furo.Link `protobuf:"bytes,2,rep,name=links,proto3" json:"links,omitempty"`
	// Meta for the response
	Meta *furo.Meta `protobuf:"bytes,3,opt,name=meta,proto3" json:"meta,omitempty"`
}

func (x *TaskEntity) Reset() {
	*x = TaskEntity{}
	if protoimpl.UnsafeEnabled {
		mi := &file_task_task_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TaskEntity) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TaskEntity) ProtoMessage() {}

func (x *TaskEntity) ProtoReflect() protoreflect.Message {
	mi := &file_task_task_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TaskEntity.ProtoReflect.Descriptor instead.
func (*TaskEntity) Descriptor() ([]byte, []int) {
	return file_task_task_proto_rawDescGZIP(), []int{0}
}

func (x *TaskEntity) GetData() *Task {
	if x != nil {
		return x.Data
	}
	return nil
}

func (x *TaskEntity) GetLinks() []*furo.Link {
	if x != nil {
		return x.Links
	}
	return nil
}

func (x *TaskEntity) GetMeta() *furo.Meta {
	if x != nil {
		return x.Meta
	}
	return nil
}

// TaskCollection with repeated TaskEntity
type TaskCollection struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Contains a task.TaskEntity repeated
	Entities []*TaskEntity `protobuf:"bytes,4,rep,name=entities,proto3" json:"entities,omitempty"`
	// Hateoas links
	Links []*furo.Link `protobuf:"bytes,3,rep,name=links,proto3" json:"links,omitempty"`
	// Meta for the response
	Meta *furo.Meta `protobuf:"bytes,2,opt,name=meta,proto3" json:"meta,omitempty"`
}

func (x *TaskCollection) Reset() {
	*x = TaskCollection{}
	if protoimpl.UnsafeEnabled {
		mi := &file_task_task_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TaskCollection) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TaskCollection) ProtoMessage() {}

func (x *TaskCollection) ProtoReflect() protoreflect.Message {
	mi := &file_task_task_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TaskCollection.ProtoReflect.Descriptor instead.
func (*TaskCollection) Descriptor() ([]byte, []int) {
	return file_task_task_proto_rawDescGZIP(), []int{1}
}

func (x *TaskCollection) GetEntities() []*TaskEntity {
	if x != nil {
		return x.Entities
	}
	return nil
}

func (x *TaskCollection) GetLinks() []*furo.Link {
	if x != nil {
		return x.Links
	}
	return nil
}

func (x *TaskCollection) GetMeta() *furo.Meta {
	if x != nil {
		return x.Meta
	}
	return nil
}

// Task data description
type Task struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Short task description
	Description string `protobuf:"bytes,3,opt,name=description,proto3" json:"description,omitempty"`
	// Localized String representation of a task
	DisplayName string `protobuf:"bytes,2,opt,name=display_name,json=displayName,proto3" json:"display_name,omitempty"`
	// Estimated time in days
	EstimatedTime int32 `protobuf:"varint,4,opt,name=estimated_time,json=estimatedTime,proto3" json:"estimated_time,omitempty"`
	// Identity of a task
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// Owner of a task
	Owner *furo.Reference `protobuf:"bytes,5,opt,name=owner,proto3" json:"owner,omitempty"`
	// List of subtasks
	Subtasks []*Task `protobuf:"bytes,6,rep,name=subtasks,proto3" json:"subtasks,omitempty"`
}

func (x *Task) Reset() {
	*x = Task{}
	if protoimpl.UnsafeEnabled {
		mi := &file_task_task_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Task) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Task) ProtoMessage() {}

func (x *Task) ProtoReflect() protoreflect.Message {
	mi := &file_task_task_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Task.ProtoReflect.Descriptor instead.
func (*Task) Descriptor() ([]byte, []int) {
	return file_task_task_proto_rawDescGZIP(), []int{2}
}

func (x *Task) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *Task) GetDisplayName() string {
	if x != nil {
		return x.DisplayName
	}
	return ""
}

func (x *Task) GetEstimatedTime() int32 {
	if x != nil {
		return x.EstimatedTime
	}
	return 0
}

func (x *Task) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Task) GetOwner() *furo.Reference {
	if x != nil {
		return x.Owner
	}
	return nil
}

func (x *Task) GetSubtasks() []*Task {
	if x != nil {
		return x.Subtasks
	}
	return nil
}

var File_task_task_proto protoreflect.FileDescriptor

var file_task_task_proto_rawDesc = []byte{
	0x0a, 0x0f, 0x74, 0x61, 0x73, 0x6b, 0x2f, 0x74, 0x61, 0x73, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x04, 0x74, 0x61, 0x73, 0x6b, 0x1a, 0x0f, 0x66, 0x75, 0x72, 0x6f, 0x2f, 0x6d, 0x65,
	0x74, 0x61, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0f, 0x66, 0x75, 0x72, 0x6f, 0x2f, 0x6c,
	0x69, 0x6e, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x14, 0x66, 0x75, 0x72, 0x6f, 0x2f,
	0x72, 0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22,
	0x6e, 0x0a, 0x0a, 0x54, 0x61, 0x73, 0x6b, 0x45, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x1e, 0x0a,
	0x04, 0x64, 0x61, 0x74, 0x61, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0a, 0x2e, 0x74, 0x61,
	0x73, 0x6b, 0x2e, 0x54, 0x61, 0x73, 0x6b, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x12, 0x20, 0x0a,
	0x05, 0x6c, 0x69, 0x6e, 0x6b, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0a, 0x2e, 0x66,
	0x75, 0x72, 0x6f, 0x2e, 0x4c, 0x69, 0x6e, 0x6b, 0x52, 0x05, 0x6c, 0x69, 0x6e, 0x6b, 0x73, 0x12,
	0x1e, 0x0a, 0x04, 0x6d, 0x65, 0x74, 0x61, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0a, 0x2e,
	0x66, 0x75, 0x72, 0x6f, 0x2e, 0x4d, 0x65, 0x74, 0x61, 0x52, 0x04, 0x6d, 0x65, 0x74, 0x61, 0x22,
	0x80, 0x01, 0x0a, 0x0e, 0x54, 0x61, 0x73, 0x6b, 0x43, 0x6f, 0x6c, 0x6c, 0x65, 0x63, 0x74, 0x69,
	0x6f, 0x6e, 0x12, 0x2c, 0x0a, 0x08, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x69, 0x65, 0x73, 0x18, 0x04,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x74, 0x61, 0x73, 0x6b, 0x2e, 0x54, 0x61, 0x73, 0x6b,
	0x45, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x52, 0x08, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x69, 0x65, 0x73,
	0x12, 0x20, 0x0a, 0x05, 0x6c, 0x69, 0x6e, 0x6b, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32,
	0x0a, 0x2e, 0x66, 0x75, 0x72, 0x6f, 0x2e, 0x4c, 0x69, 0x6e, 0x6b, 0x52, 0x05, 0x6c, 0x69, 0x6e,
	0x6b, 0x73, 0x12, 0x1e, 0x0a, 0x04, 0x6d, 0x65, 0x74, 0x61, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x0a, 0x2e, 0x66, 0x75, 0x72, 0x6f, 0x2e, 0x4d, 0x65, 0x74, 0x61, 0x52, 0x04, 0x6d, 0x65,
	0x74, 0x61, 0x22, 0xd1, 0x01, 0x0a, 0x04, 0x54, 0x61, 0x73, 0x6b, 0x12, 0x20, 0x0a, 0x0b, 0x64,
	0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x21, 0x0a,
	0x0c, 0x64, 0x69, 0x73, 0x70, 0x6c, 0x61, 0x79, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x69, 0x73, 0x70, 0x6c, 0x61, 0x79, 0x4e, 0x61, 0x6d, 0x65,
	0x12, 0x25, 0x0a, 0x0e, 0x65, 0x73, 0x74, 0x69, 0x6d, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x74, 0x69,
	0x6d, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0d, 0x65, 0x73, 0x74, 0x69, 0x6d, 0x61,
	0x74, 0x65, 0x64, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x25, 0x0a, 0x05, 0x6f, 0x77, 0x6e, 0x65, 0x72,
	0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x66, 0x75, 0x72, 0x6f, 0x2e, 0x52, 0x65,
	0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x52, 0x05, 0x6f, 0x77, 0x6e, 0x65, 0x72, 0x12, 0x26,
	0x0a, 0x08, 0x73, 0x75, 0x62, 0x74, 0x61, 0x73, 0x6b, 0x73, 0x18, 0x06, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x0a, 0x2e, 0x74, 0x61, 0x73, 0x6b, 0x2e, 0x54, 0x61, 0x73, 0x6b, 0x52, 0x08, 0x73, 0x75,
	0x62, 0x74, 0x61, 0x73, 0x6b, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_task_task_proto_rawDescOnce sync.Once
	file_task_task_proto_rawDescData = file_task_task_proto_rawDesc
)

func file_task_task_proto_rawDescGZIP() []byte {
	file_task_task_proto_rawDescOnce.Do(func() {
		file_task_task_proto_rawDescData = protoimpl.X.CompressGZIP(file_task_task_proto_rawDescData)
	})
	return file_task_task_proto_rawDescData
}

var file_task_task_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_task_task_proto_goTypes = []interface{}{
	(*TaskEntity)(nil),     // 0: task.TaskEntity
	(*TaskCollection)(nil), // 1: task.TaskCollection
	(*Task)(nil),           // 2: task.Task
	(*furo.Link)(nil),      // 3: furo.Link
	(*furo.Meta)(nil),      // 4: furo.Meta
	(*furo.Reference)(nil), // 5: furo.Reference
}
var file_task_task_proto_depIdxs = []int32{
	2, // 0: task.TaskEntity.data:type_name -> task.Task
	3, // 1: task.TaskEntity.links:type_name -> furo.Link
	4, // 2: task.TaskEntity.meta:type_name -> furo.Meta
	0, // 3: task.TaskCollection.entities:type_name -> task.TaskEntity
	3, // 4: task.TaskCollection.links:type_name -> furo.Link
	4, // 5: task.TaskCollection.meta:type_name -> furo.Meta
	5, // 6: task.Task.owner:type_name -> furo.Reference
	2, // 7: task.Task.subtasks:type_name -> task.Task
	8, // [8:8] is the sub-list for method output_type
	8, // [8:8] is the sub-list for method input_type
	8, // [8:8] is the sub-list for extension type_name
	8, // [8:8] is the sub-list for extension extendee
	0, // [0:8] is the sub-list for field type_name
}

func init() { file_task_task_proto_init() }
func file_task_task_proto_init() {
	if File_task_task_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_task_task_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TaskEntity); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_task_task_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TaskCollection); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_task_task_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Task); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_task_task_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_task_task_proto_goTypes,
		DependencyIndexes: file_task_task_proto_depIdxs,
		MessageInfos:      file_task_task_proto_msgTypes,
	}.Build()
	File_task_task_proto = out.File
	file_task_task_proto_rawDesc = nil
	file_task_task_proto_goTypes = nil
	file_task_task_proto_depIdxs = nil
}
