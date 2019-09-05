// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: __bundled/BundledService.proto

package taskmanager;

/**
 * Protobuf type {@code taskmanager.DeleteProjectServiceRequest}
 */
public  final class DeleteProjectServiceRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:taskmanager.DeleteProjectServiceRequest)
    DeleteProjectServiceRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use DeleteProjectServiceRequest.newBuilder() to construct.
  private DeleteProjectServiceRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private DeleteProjectServiceRequest() {
    prj_ = "";
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private DeleteProjectServiceRequest(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    this();
    if (extensionRegistry == null) {
      throw new java.lang.NullPointerException();
    }
    int mutable_bitField0_ = 0;
    com.google.protobuf.UnknownFieldSet.Builder unknownFields =
        com.google.protobuf.UnknownFieldSet.newBuilder();
    try {
      boolean done = false;
      while (!done) {
        int tag = input.readTag();
        switch (tag) {
          case 0:
            done = true;
            break;
          case 10: {
            java.lang.String s = input.readStringRequireUtf8();

            prj_ = s;
            break;
          }
          case 18: {
            google.protobuf.EmptyOuterClass.Empty.Builder subBuilder = null;
            if (data_ != null) {
              subBuilder = data_.toBuilder();
            }
            data_ = input.readMessage(google.protobuf.EmptyOuterClass.Empty.parser(), extensionRegistry);
            if (subBuilder != null) {
              subBuilder.mergeFrom(data_);
              data_ = subBuilder.buildPartial();
            }

            break;
          }
          default: {
            if (!parseUnknownField(
                input, unknownFields, extensionRegistry, tag)) {
              done = true;
            }
            break;
          }
        }
      }
    } catch (com.google.protobuf.InvalidProtocolBufferException e) {
      throw e.setUnfinishedMessage(this);
    } catch (java.io.IOException e) {
      throw new com.google.protobuf.InvalidProtocolBufferException(
          e).setUnfinishedMessage(this);
    } finally {
      this.unknownFields = unknownFields.build();
      makeExtensionsImmutable();
    }
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return taskmanager.AnyProto.internal_static_taskmanager_DeleteProjectServiceRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return taskmanager.AnyProto.internal_static_taskmanager_DeleteProjectServiceRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            taskmanager.DeleteProjectServiceRequest.class, taskmanager.DeleteProjectServiceRequest.Builder.class);
  }

  public static final int PRJ_FIELD_NUMBER = 1;
  private volatile java.lang.Object prj_;
  /**
   * <code>string prj = 1;</code>
   */
  public java.lang.String getPrj() {
    java.lang.Object ref = prj_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      prj_ = s;
      return s;
    }
  }
  /**
   * <code>string prj = 1;</code>
   */
  public com.google.protobuf.ByteString
      getPrjBytes() {
    java.lang.Object ref = prj_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      prj_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int DATA_FIELD_NUMBER = 2;
  private google.protobuf.EmptyOuterClass.Empty data_;
  /**
   * <code>.google.protobuf.Empty data = 2;</code>
   */
  public boolean hasData() {
    return data_ != null;
  }
  /**
   * <code>.google.protobuf.Empty data = 2;</code>
   */
  public google.protobuf.EmptyOuterClass.Empty getData() {
    return data_ == null ? google.protobuf.EmptyOuterClass.Empty.getDefaultInstance() : data_;
  }
  /**
   * <code>.google.protobuf.Empty data = 2;</code>
   */
  public google.protobuf.EmptyOuterClass.EmptyOrBuilder getDataOrBuilder() {
    return getData();
  }

  private byte memoizedIsInitialized = -1;
  @java.lang.Override
  public final boolean isInitialized() {
    byte isInitialized = memoizedIsInitialized;
    if (isInitialized == 1) return true;
    if (isInitialized == 0) return false;

    memoizedIsInitialized = 1;
    return true;
  }

  @java.lang.Override
  public void writeTo(com.google.protobuf.CodedOutputStream output)
                      throws java.io.IOException {
    if (!getPrjBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, prj_);
    }
    if (data_ != null) {
      output.writeMessage(2, getData());
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!getPrjBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, prj_);
    }
    if (data_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(2, getData());
    }
    size += unknownFields.getSerializedSize();
    memoizedSize = size;
    return size;
  }

  @java.lang.Override
  public boolean equals(final java.lang.Object obj) {
    if (obj == this) {
     return true;
    }
    if (!(obj instanceof taskmanager.DeleteProjectServiceRequest)) {
      return super.equals(obj);
    }
    taskmanager.DeleteProjectServiceRequest other = (taskmanager.DeleteProjectServiceRequest) obj;

    if (!getPrj()
        .equals(other.getPrj())) return false;
    if (hasData() != other.hasData()) return false;
    if (hasData()) {
      if (!getData()
          .equals(other.getData())) return false;
    }
    if (!unknownFields.equals(other.unknownFields)) return false;
    return true;
  }

  @java.lang.Override
  public int hashCode() {
    if (memoizedHashCode != 0) {
      return memoizedHashCode;
    }
    int hash = 41;
    hash = (19 * hash) + getDescriptor().hashCode();
    hash = (37 * hash) + PRJ_FIELD_NUMBER;
    hash = (53 * hash) + getPrj().hashCode();
    if (hasData()) {
      hash = (37 * hash) + DATA_FIELD_NUMBER;
      hash = (53 * hash) + getData().hashCode();
    }
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static taskmanager.DeleteProjectServiceRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static taskmanager.DeleteProjectServiceRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static taskmanager.DeleteProjectServiceRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static taskmanager.DeleteProjectServiceRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static taskmanager.DeleteProjectServiceRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static taskmanager.DeleteProjectServiceRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static taskmanager.DeleteProjectServiceRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static taskmanager.DeleteProjectServiceRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static taskmanager.DeleteProjectServiceRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static taskmanager.DeleteProjectServiceRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static taskmanager.DeleteProjectServiceRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static taskmanager.DeleteProjectServiceRequest parseFrom(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  @java.lang.Override
  public Builder newBuilderForType() { return newBuilder(); }
  public static Builder newBuilder() {
    return DEFAULT_INSTANCE.toBuilder();
  }
  public static Builder newBuilder(taskmanager.DeleteProjectServiceRequest prototype) {
    return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
  }
  @java.lang.Override
  public Builder toBuilder() {
    return this == DEFAULT_INSTANCE
        ? new Builder() : new Builder().mergeFrom(this);
  }

  @java.lang.Override
  protected Builder newBuilderForType(
      com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
    Builder builder = new Builder(parent);
    return builder;
  }
  /**
   * Protobuf type {@code taskmanager.DeleteProjectServiceRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:taskmanager.DeleteProjectServiceRequest)
      taskmanager.DeleteProjectServiceRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return taskmanager.AnyProto.internal_static_taskmanager_DeleteProjectServiceRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return taskmanager.AnyProto.internal_static_taskmanager_DeleteProjectServiceRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              taskmanager.DeleteProjectServiceRequest.class, taskmanager.DeleteProjectServiceRequest.Builder.class);
    }

    // Construct using taskmanager.DeleteProjectServiceRequest.newBuilder()
    private Builder() {
      maybeForceBuilderInitialization();
    }

    private Builder(
        com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
      super(parent);
      maybeForceBuilderInitialization();
    }
    private void maybeForceBuilderInitialization() {
      if (com.google.protobuf.GeneratedMessageV3
              .alwaysUseFieldBuilders) {
      }
    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      prj_ = "";

      if (dataBuilder_ == null) {
        data_ = null;
      } else {
        data_ = null;
        dataBuilder_ = null;
      }
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return taskmanager.AnyProto.internal_static_taskmanager_DeleteProjectServiceRequest_descriptor;
    }

    @java.lang.Override
    public taskmanager.DeleteProjectServiceRequest getDefaultInstanceForType() {
      return taskmanager.DeleteProjectServiceRequest.getDefaultInstance();
    }

    @java.lang.Override
    public taskmanager.DeleteProjectServiceRequest build() {
      taskmanager.DeleteProjectServiceRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public taskmanager.DeleteProjectServiceRequest buildPartial() {
      taskmanager.DeleteProjectServiceRequest result = new taskmanager.DeleteProjectServiceRequest(this);
      result.prj_ = prj_;
      if (dataBuilder_ == null) {
        result.data_ = data_;
      } else {
        result.data_ = dataBuilder_.build();
      }
      onBuilt();
      return result;
    }

    @java.lang.Override
    public Builder clone() {
      return super.clone();
    }
    @java.lang.Override
    public Builder setField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        java.lang.Object value) {
      return super.setField(field, value);
    }
    @java.lang.Override
    public Builder clearField(
        com.google.protobuf.Descriptors.FieldDescriptor field) {
      return super.clearField(field);
    }
    @java.lang.Override
    public Builder clearOneof(
        com.google.protobuf.Descriptors.OneofDescriptor oneof) {
      return super.clearOneof(oneof);
    }
    @java.lang.Override
    public Builder setRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        int index, java.lang.Object value) {
      return super.setRepeatedField(field, index, value);
    }
    @java.lang.Override
    public Builder addRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        java.lang.Object value) {
      return super.addRepeatedField(field, value);
    }
    @java.lang.Override
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof taskmanager.DeleteProjectServiceRequest) {
        return mergeFrom((taskmanager.DeleteProjectServiceRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(taskmanager.DeleteProjectServiceRequest other) {
      if (other == taskmanager.DeleteProjectServiceRequest.getDefaultInstance()) return this;
      if (!other.getPrj().isEmpty()) {
        prj_ = other.prj_;
        onChanged();
      }
      if (other.hasData()) {
        mergeData(other.getData());
      }
      this.mergeUnknownFields(other.unknownFields);
      onChanged();
      return this;
    }

    @java.lang.Override
    public final boolean isInitialized() {
      return true;
    }

    @java.lang.Override
    public Builder mergeFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      taskmanager.DeleteProjectServiceRequest parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (taskmanager.DeleteProjectServiceRequest) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private java.lang.Object prj_ = "";
    /**
     * <code>string prj = 1;</code>
     */
    public java.lang.String getPrj() {
      java.lang.Object ref = prj_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        prj_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string prj = 1;</code>
     */
    public com.google.protobuf.ByteString
        getPrjBytes() {
      java.lang.Object ref = prj_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        prj_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string prj = 1;</code>
     */
    public Builder setPrj(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      prj_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string prj = 1;</code>
     */
    public Builder clearPrj() {
      
      prj_ = getDefaultInstance().getPrj();
      onChanged();
      return this;
    }
    /**
     * <code>string prj = 1;</code>
     */
    public Builder setPrjBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      prj_ = value;
      onChanged();
      return this;
    }

    private google.protobuf.EmptyOuterClass.Empty data_;
    private com.google.protobuf.SingleFieldBuilderV3<
        google.protobuf.EmptyOuterClass.Empty, google.protobuf.EmptyOuterClass.Empty.Builder, google.protobuf.EmptyOuterClass.EmptyOrBuilder> dataBuilder_;
    /**
     * <code>.google.protobuf.Empty data = 2;</code>
     */
    public boolean hasData() {
      return dataBuilder_ != null || data_ != null;
    }
    /**
     * <code>.google.protobuf.Empty data = 2;</code>
     */
    public google.protobuf.EmptyOuterClass.Empty getData() {
      if (dataBuilder_ == null) {
        return data_ == null ? google.protobuf.EmptyOuterClass.Empty.getDefaultInstance() : data_;
      } else {
        return dataBuilder_.getMessage();
      }
    }
    /**
     * <code>.google.protobuf.Empty data = 2;</code>
     */
    public Builder setData(google.protobuf.EmptyOuterClass.Empty value) {
      if (dataBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        data_ = value;
        onChanged();
      } else {
        dataBuilder_.setMessage(value);
      }

      return this;
    }
    /**
     * <code>.google.protobuf.Empty data = 2;</code>
     */
    public Builder setData(
        google.protobuf.EmptyOuterClass.Empty.Builder builderForValue) {
      if (dataBuilder_ == null) {
        data_ = builderForValue.build();
        onChanged();
      } else {
        dataBuilder_.setMessage(builderForValue.build());
      }

      return this;
    }
    /**
     * <code>.google.protobuf.Empty data = 2;</code>
     */
    public Builder mergeData(google.protobuf.EmptyOuterClass.Empty value) {
      if (dataBuilder_ == null) {
        if (data_ != null) {
          data_ =
            google.protobuf.EmptyOuterClass.Empty.newBuilder(data_).mergeFrom(value).buildPartial();
        } else {
          data_ = value;
        }
        onChanged();
      } else {
        dataBuilder_.mergeFrom(value);
      }

      return this;
    }
    /**
     * <code>.google.protobuf.Empty data = 2;</code>
     */
    public Builder clearData() {
      if (dataBuilder_ == null) {
        data_ = null;
        onChanged();
      } else {
        data_ = null;
        dataBuilder_ = null;
      }

      return this;
    }
    /**
     * <code>.google.protobuf.Empty data = 2;</code>
     */
    public google.protobuf.EmptyOuterClass.Empty.Builder getDataBuilder() {
      
      onChanged();
      return getDataFieldBuilder().getBuilder();
    }
    /**
     * <code>.google.protobuf.Empty data = 2;</code>
     */
    public google.protobuf.EmptyOuterClass.EmptyOrBuilder getDataOrBuilder() {
      if (dataBuilder_ != null) {
        return dataBuilder_.getMessageOrBuilder();
      } else {
        return data_ == null ?
            google.protobuf.EmptyOuterClass.Empty.getDefaultInstance() : data_;
      }
    }
    /**
     * <code>.google.protobuf.Empty data = 2;</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        google.protobuf.EmptyOuterClass.Empty, google.protobuf.EmptyOuterClass.Empty.Builder, google.protobuf.EmptyOuterClass.EmptyOrBuilder> 
        getDataFieldBuilder() {
      if (dataBuilder_ == null) {
        dataBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            google.protobuf.EmptyOuterClass.Empty, google.protobuf.EmptyOuterClass.Empty.Builder, google.protobuf.EmptyOuterClass.EmptyOrBuilder>(
                getData(),
                getParentForChildren(),
                isClean());
        data_ = null;
      }
      return dataBuilder_;
    }
    @java.lang.Override
    public final Builder setUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return super.setUnknownFields(unknownFields);
    }

    @java.lang.Override
    public final Builder mergeUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return super.mergeUnknownFields(unknownFields);
    }


    // @@protoc_insertion_point(builder_scope:taskmanager.DeleteProjectServiceRequest)
  }

  // @@protoc_insertion_point(class_scope:taskmanager.DeleteProjectServiceRequest)
  private static final taskmanager.DeleteProjectServiceRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new taskmanager.DeleteProjectServiceRequest();
  }

  public static taskmanager.DeleteProjectServiceRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<DeleteProjectServiceRequest>
      PARSER = new com.google.protobuf.AbstractParser<DeleteProjectServiceRequest>() {
    @java.lang.Override
    public DeleteProjectServiceRequest parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new DeleteProjectServiceRequest(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<DeleteProjectServiceRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<DeleteProjectServiceRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public taskmanager.DeleteProjectServiceRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}
